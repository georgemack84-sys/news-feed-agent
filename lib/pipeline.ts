import crypto from "node:crypto";

import { detectChangeStatus } from "@/lib/agent/changeDetect";
import { personalizeClusters } from "@/lib/agent/personalize";
import { cachedSummaryResult, summarizeCluster } from "@/lib/agent/summarize";
import { clusterArticles } from "@/lib/clustering/cluster";
import { dedupeArticles } from "@/lib/clustering/dedupe";
import { ensureUserPreferences, getPreferences, prisma } from "@/lib/db/queries";
import { ingestRssFeeds } from "@/lib/feeds/rss";
import { logError, logEvent, notifyOpsAlert } from "@/lib/observability";
import { computeFreshness, computeNovelty, computeSourceWeight, computeTopicRelevance, scoreCluster } from "@/lib/ranking/score";
import { getRunLockWindowMinutes, getStaleRunMinutes } from "@/lib/scheduler";

function fingerprintClusterContent(input: {
  articleUrls: string[];
  articleTitles: string[];
  score: number;
  topicCandidates: string[];
}) {
  return crypto
    .createHash("sha256")
    .update(
      JSON.stringify({
        articleUrls: [...input.articleUrls].sort(),
        articleTitles: [...input.articleTitles].sort(),
        topicCandidates: [...input.topicCandidates].sort(),
        score: Number(input.score.toFixed(4)),
      }),
    )
    .digest("hex");
}

function fingerprintClusterState(input: {
  summary: string;
  headline: string;
  articleUrls: string[];
  score: number;
}) {
  return crypto
    .createHash("sha256")
    .update(
      JSON.stringify({
        headline: input.headline,
        summary: input.summary,
        articleUrls: [...input.articleUrls].sort(),
        score: Number(input.score.toFixed(4)),
      }),
    )
    .digest("hex");
}

function parseClusterState(raw: string) {
  try {
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export async function refreshFeedPipeline(userId: string) {
  await ensureUserPreferences(userId);
  const preferences = await getPreferences(userId);
  const now = new Date();
  const staleThreshold = new Date(now.getTime() - getStaleRunMinutes() * 60 * 1000);

  await prisma.ingestionRun.updateMany({
    where: {
      userId,
      status: "running",
      startedAt: { lt: staleThreshold },
    },
    data: {
      status: "failed",
      completedAt: now,
    },
  });

  const lockThreshold = new Date(now.getTime() - getRunLockWindowMinutes() * 60 * 1000);
  const existingRun = await prisma.ingestionRun.findFirst({
    where: {
      userId,
      status: "running",
      startedAt: { gte: lockThreshold },
    },
    orderBy: { startedAt: "desc" },
  });

  if (existingRun) {
    logEvent({
      level: "warn",
      event: "refresh.locked",
      message: "Skipped refresh because another run is still active inside the lock window",
      context: {
        userId,
        runId: existingRun.id,
        mode: existingRun.mode,
      },
    });

    return {
      ingested: 0,
      deduped: 0,
      clusters: 0,
      runId: existingRun.id,
      skipped: true,
      reason: "refresh_locked",
    };
  }

  const run = await prisma.ingestionRun.create({
    data: {
      userId,
      mode: preferences.useRemoteRss ? "live_rss" : "fixture_rss",
      status: "running",
    },
  });

  logEvent({
    level: "info",
    event: "refresh.started",
    message: "Feed refresh started",
    context: {
      userId,
      runId: run.id,
      mode: run.mode,
    },
  });

  try {
    const { articles: ingested, sourceFetches } = await ingestRssFeeds({ useRemoteRss: preferences.useRemoteRss });
    const deduped = dedupeArticles(ingested).filter((record) => !record.duplicateOf).map((record) => record.article);
    const clusters = clusterArticles(deduped);
    const ranked = personalizeClusters(clusters, preferences).sort((a, b) => b.score - a.score);

    const previousRun = await prisma.ingestionRun.findFirst({
      where: {
        userId,
        status: "completed",
        id: { not: run.id },
      },
      orderBy: { completedAt: "desc" },
    });
    const previousState = previousRun ? parseClusterState(previousRun.clusterState) : {};

    const currentState: Record<string, string> = {};
    const persistedClusters: Array<{ id: string; fingerprint: string }> = [];
    const currentClusterIds: string[] = [];

    for (const rankedCluster of ranked) {
      const articleRecords = [];

      for (const article of rankedCluster.cluster.articles) {
        const persistedArticle = await prisma.article.upsert({
          where: {
            userId_url: {
              userId,
              url: article.url,
            },
          },
          update: {
            lastIngestionRunId: run.id,
            sourceName: article.sourceName,
            sourceUrl: article.sourceUrl,
            title: article.title,
            canonicalUrl: article.canonicalUrl,
            publishedAt: article.publishedAt,
            fetchedAt: new Date(),
            author: article.author,
            summary: article.summary,
            contentSnippet: article.contentSnippet,
            imageUrl: article.imageUrl,
            topicCandidates: JSON.stringify(article.topicCandidates),
            hashTitle: article.hashTitle,
            hashContent: article.hashContent,
            rankingScore: rankedCluster.score,
          },
          create: {
            userId,
            lastIngestionRunId: run.id,
            sourceName: article.sourceName,
            sourceUrl: article.sourceUrl,
            title: article.title,
            url: article.url,
            canonicalUrl: article.canonicalUrl,
            publishedAt: article.publishedAt,
            fetchedAt: new Date(),
            author: article.author,
            summary: article.summary,
            contentSnippet: article.contentSnippet,
            imageUrl: article.imageUrl,
            topicCandidates: JSON.stringify(article.topicCandidates),
            hashTitle: article.hashTitle,
            hashContent: article.hashContent,
            rankingScore: rankedCluster.score,
          },
        });

        articleRecords.push(persistedArticle);
      }

      const contentFingerprint = fingerprintClusterContent({
        articleUrls: rankedCluster.cluster.articles.map((article) => article.url),
        articleTitles: rankedCluster.cluster.articles.map((article) => article.title),
        topicCandidates: rankedCluster.cluster.articles.flatMap((article) => article.topicCandidates),
        score: rankedCluster.score,
      });

      const existingCluster = await prisma.cluster.findUnique({
        where: {
          userId_key: {
            userId,
            key: rankedCluster.cluster.key,
          },
        },
      });

      const summary =
        existingCluster &&
        existingCluster.contentFingerprint === contentFingerprint &&
        existingCluster.headline &&
        existingCluster.summary &&
        existingCluster.whyItMatters &&
        existingCluster.whyRelevant
          ? cachedSummaryResult(
              {
                headline: existingCluster.headline,
                summary: existingCluster.summary,
                whyItMatters: existingCluster.whyItMatters,
                whyRelevant: existingCluster.whyRelevant,
                tags: JSON.parse(existingCluster.tags) as string[],
              },
              existingCluster.summaryModel,
            )
          : await summarizeCluster(
              rankedCluster.cluster.articles.map((article) => ({
                title: article.title,
                sourceName: article.sourceName,
                publishedAt: article.publishedAt?.toISOString() ?? null,
                summary: article.summary,
                topicCandidates: article.topicCandidates,
              })),
              preferences,
            );

      const fingerprint = fingerprintClusterState({
        headline: summary.headline,
        summary: summary.summary,
        articleUrls: rankedCluster.cluster.articles.map((article) => article.url),
        score: rankedCluster.score,
      });

      const persistedCluster = await prisma.cluster.upsert({
        where: {
          userId_key: {
            userId,
            key: rankedCluster.cluster.key,
          },
        },
        update: {
          lastIngestionRunId: run.id,
          contentFingerprint,
          headline: summary.headline,
          summary: summary.summary,
          whyItMatters: summary.whyItMatters,
          whyRelevant: summary.whyRelevant,
          summarySource: summary.source,
          summaryModel: summary.model,
          tags: JSON.stringify(summary.tags),
          representativeTitle: rankedCluster.cluster.articles[0]?.title,
          representativeUrl: rankedCluster.cluster.articles[0]?.url,
          score: rankedCluster.score,
          sourceWeight: rankedCluster.signals.sourceWeight,
          novelty: rankedCluster.signals.novelty,
          freshness: rankedCluster.signals.freshness,
          topicRelevance: rankedCluster.signals.topicRelevance,
        },
        create: {
          userId,
          lastIngestionRunId: run.id,
          key: rankedCluster.cluster.key,
          contentFingerprint,
          headline: summary.headline,
          summary: summary.summary,
          whyItMatters: summary.whyItMatters,
          whyRelevant: summary.whyRelevant,
          summarySource: summary.source,
          summaryModel: summary.model,
          tags: JSON.stringify(summary.tags),
          representativeTitle: rankedCluster.cluster.articles[0]?.title,
          representativeUrl: rankedCluster.cluster.articles[0]?.url,
          score: rankedCluster.score,
          sourceWeight: rankedCluster.signals.sourceWeight,
          novelty: rankedCluster.signals.novelty,
          freshness: rankedCluster.signals.freshness,
          topicRelevance: rankedCluster.signals.topicRelevance,
        },
      });

      await prisma.clusterArticle.deleteMany({
        where: { clusterId: persistedCluster.id },
      });

      for (const [index, article] of articleRecords.entries()) {
        await prisma.clusterArticle.create({
          data: {
            clusterId: persistedCluster.id,
            articleId: article.id,
            position: index,
          },
        });
      }

      currentState[persistedCluster.id] = fingerprint;
      persistedClusters.push({ id: persistedCluster.id, fingerprint });
      currentClusterIds.push(persistedCluster.id);
    }

    const changes = detectChangeStatus(previousState, persistedClusters);
    for (const change of changes) {
      await prisma.cluster.update({
        where: { id: change.id },
        data: { changeStatus: change.status },
      });
    }

    await prisma.sourceFetch.createMany({
      data: sourceFetches.map((fetch) => ({
        ingestionRunId: run.id,
        sourceName: fetch.sourceName,
        sourceUrl: fetch.sourceUrl,
        mode: fetch.mode,
        status: fetch.status,
        articleCount: fetch.articleCount,
        latencyMs: fetch.latencyMs,
        errorMessage: fetch.errorMessage,
      })),
    });

    await prisma.feedSnapshot.create({
      data: {
        userId,
        clusterIds: JSON.stringify(currentClusterIds),
      },
    });

    await prisma.ingestionRun.update({
      where: { id: run.id },
      data: {
        status: "completed",
        articleCount: ingested.length,
        dedupedCount: deduped.length,
        clusterCount: currentClusterIds.length,
        clusterState: JSON.stringify(currentState),
        completedAt: new Date(),
      },
    });

    logEvent({
      level: "info",
      event: "refresh.completed",
      message: "Feed refresh completed",
      context: {
        userId,
        runId: run.id,
        mode: run.mode,
        ingested: ingested.length,
        deduped: deduped.length,
        clusters: currentClusterIds.length,
      },
    });

    const staleRuns = await prisma.ingestionRun.findMany({
      where: { userId, status: "completed" },
      orderBy: { completedAt: "desc" },
      skip: 12,
      select: { id: true },
    });

    if (staleRuns.length > 0) {
      await prisma.sourceFetch.deleteMany({
        where: {
          ingestionRunId: {
            in: staleRuns.map((entry) => entry.id),
          },
        },
      });
      await prisma.ingestionRun.deleteMany({
        where: {
          id: {
            in: staleRuns.map((entry) => entry.id),
          },
        },
      });
    }

    return {
      ingested: ingested.length,
      deduped: deduped.length,
      clusters: currentClusterIds.length,
      runId: run.id,
      skipped: false,
    };
  } catch (error) {
    await prisma.ingestionRun.update({
      where: { id: run.id },
      data: {
        status: "failed",
        completedAt: new Date(),
      },
    });

    logError("refresh.failed", "Feed refresh failed", error, {
      userId,
      runId: run.id,
      mode: run.mode,
    });

    await notifyOpsAlert({
      event: "refresh.failed",
      severity: "critical",
      summary: "Scheduled or manual feed refresh failed",
      context: {
        userId,
        runId: run.id,
        mode: run.mode,
      },
    });

    throw error;
  }
}

export async function rerankExistingFeed(userId: string) {
  const preferences = await getPreferences(userId);
  const latestRun = await prisma.ingestionRun.findFirst({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "desc" },
  });

  const clusters = await prisma.cluster.findMany({
    where: latestRun ? { userId, lastIngestionRunId: latestRun.id } : { userId },
    include: {
      articles: {
        include: {
          article: true,
        },
      },
    },
  });

  for (const cluster of clusters) {
    const articleData = cluster.articles.map((entry) => ({
      sourceName: entry.article.sourceName,
      publishedAt: entry.article.publishedAt,
      topicCandidates: JSON.parse(entry.article.topicCandidates) as string[],
    }));

    const combinedTopics = [...new Set(articleData.flatMap((article) => article.topicCandidates))];
    const sourceNames = [...new Set(articleData.map((article) => article.sourceName))];
    const leadPublishedAt = articleData[0]?.publishedAt ?? null;

    const topicRelevance = computeTopicRelevance(combinedTopics, preferences);
    const freshness = computeFreshness(leadPublishedAt);
    const sourceWeight = computeSourceWeight(sourceNames, preferences);
    const novelty = computeNovelty(articleData.length);
    const score = scoreCluster({ topicRelevance, freshness, sourceWeight, novelty }, preferences);

    await prisma.cluster.update({
      where: { id: cluster.id },
      data: {
        topicRelevance,
        freshness,
        sourceWeight,
        novelty,
        score,
      },
    });
  }

  return prisma.cluster.findMany({
    where: latestRun ? { userId, lastIngestionRunId: latestRun.id } : { userId },
    orderBy: [{ score: "desc" }, { updatedAt: "desc" }],
    take: 5,
  });
}
