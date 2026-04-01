import crypto from "node:crypto";

import { prisma } from "@/lib/db/client";
import { defaultPreferences } from "@/lib/db/schema";
import { getDeploymentReadiness } from "@/lib/deployment";
import { computeNextRefreshAt, getRefreshIntervalMinutes, getRunLockWindowMinutes, getStaleRunMinutes } from "@/lib/scheduler";
import type { FeedResponse, OperationalStatus, PreferenceInput, RunStatus, SourceHealth } from "@/lib/types";

const parseJson = <T>(value: string, fallback: T): T => {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export function hashSecret(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function getInternalAuthConfig() {
  return {
    username: process.env.AUTH_USERNAME?.trim() || "owner",
    password: process.env.AUTH_PASSWORD?.trim() || "readar-demo",
    displayName: process.env.AUTH_DISPLAY_NAME?.trim() || "ReadAR Owner",
  };
}

export async function ensureDefaultUser() {
  const config = getInternalAuthConfig();
  return prisma.user.upsert({
    where: { username: config.username },
    update: {
      displayName: config.displayName,
      passwordHash: hashSecret(config.password),
    },
    create: {
      username: config.username,
      displayName: config.displayName,
      passwordHash: hashSecret(config.password),
    },
  });
}

export async function ensureUserPreferences(userId: string) {
  return prisma.preference.upsert({
    where: { userId },
    update: {},
    create: {
      userId,
      topics: JSON.stringify(defaultPreferences.topics),
      mutedTopics: JSON.stringify(defaultPreferences.mutedTopics),
      tone: defaultPreferences.tone,
      useRemoteRss: defaultPreferences.useRemoteRss,
      useOpenAiSummaries: defaultPreferences.useOpenAiSummaries,
      sourceWeights: JSON.stringify(defaultPreferences.sourceWeights),
      rankingWeights: JSON.stringify(defaultPreferences.rankingWeights),
    },
  });
}

export async function getPreferences(userId: string): Promise<PreferenceInput> {
  const record = await ensureUserPreferences(userId);
  const sourceWeights = {
    ...defaultPreferences.sourceWeights,
    ...parseJson(record.sourceWeights, defaultPreferences.sourceWeights),
  };
  const rankingWeights = {
    ...defaultPreferences.rankingWeights,
    ...parseJson(record.rankingWeights, defaultPreferences.rankingWeights),
  };

  return {
    topics: parseJson(record.topics, defaultPreferences.topics),
    mutedTopics: parseJson(record.mutedTopics, defaultPreferences.mutedTopics),
    tone: record.tone,
    useRemoteRss: record.useRemoteRss,
    useOpenAiSummaries: record.useOpenAiSummaries,
    sourceWeights,
    rankingWeights,
  };
}

export async function savePreferences(userId: string, input: PreferenceInput) {
  await prisma.preference.upsert({
    where: { userId },
    update: {
      topics: JSON.stringify(input.topics),
      mutedTopics: JSON.stringify(input.mutedTopics),
      tone: input.tone,
      useRemoteRss: input.useRemoteRss,
      useOpenAiSummaries: input.useOpenAiSummaries,
      sourceWeights: JSON.stringify(input.sourceWeights),
      rankingWeights: JSON.stringify(input.rankingWeights),
    },
    create: {
      userId,
      topics: JSON.stringify(input.topics),
      mutedTopics: JSON.stringify(input.mutedTopics),
      tone: input.tone,
      useRemoteRss: input.useRemoteRss,
      useOpenAiSummaries: input.useOpenAiSummaries,
      sourceWeights: JSON.stringify(input.sourceWeights),
      rankingWeights: JSON.stringify(input.rankingWeights),
    },
  });

  return getPreferences(userId);
}

export async function getFeedResponse(userId: string, limit = 5): Promise<FeedResponse> {
  const preferences = await getPreferences(userId);
  const latestRun = await prisma.ingestionRun.findFirst({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "desc" },
  });
  const clusters = await prisma.cluster.findMany({
    where: latestRun ? { userId, lastIngestionRunId: latestRun.id } : { userId },
    orderBy: [{ score: "desc" }, { updatedAt: "desc" }],
    take: limit,
    include: {
      articles: {
        orderBy: { position: "asc" },
        include: {
          article: true,
        },
      },
    },
  });

  return {
    generatedAt: new Date().toISOString(),
    preferences,
    items: clusters.map((cluster) => ({
      id: cluster.id,
      key: cluster.key,
      headline: cluster.headline ?? cluster.representativeTitle ?? "Untitled cluster",
      summary: cluster.summary ?? "Summary pending.",
      whyItMatters: cluster.whyItMatters ?? "This topic is trending across your selected sources.",
      whyRelevant: cluster.whyRelevant ?? "Matched from your saved topic preferences.",
      tags: parseJson(cluster.tags, [] as string[]),
      score: cluster.score,
      freshness: cluster.freshness,
      novelty: cluster.novelty,
      sourceWeight: cluster.sourceWeight,
      topicRelevance: cluster.topicRelevance,
      changeStatus: (cluster.changeStatus as "new" | "updated" | "unchanged") ?? "new",
      articles: cluster.articles.map((entry) => ({
        id: entry.article.id,
        title: entry.article.title,
        url: entry.article.url,
        sourceName: entry.article.sourceName,
        publishedAt: entry.article.publishedAt?.toISOString() ?? null,
      })),
    })),
  };
}

export async function getLatestRunStatus(userId: string): Promise<RunStatus | null> {
  const run = await prisma.ingestionRun.findFirst({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "desc" },
    include: {
      sourceFetches: {
        orderBy: { sourceName: "asc" },
      },
    },
  });

  if (!run) {
    return null;
  }

  return {
    id: run.id,
    mode: run.mode,
    status: run.status,
    articleCount: run.articleCount,
    dedupedCount: run.dedupedCount,
    clusterCount: run.clusterCount,
    completedAt: run.completedAt?.toISOString() ?? null,
    sourceFetches: run.sourceFetches.map((fetch) => ({
      sourceName: fetch.sourceName,
      sourceUrl: fetch.sourceUrl,
      mode: fetch.mode,
      status: fetch.status,
      articleCount: fetch.articleCount,
      latencyMs: fetch.latencyMs,
      errorMessage: fetch.errorMessage,
    })),
  };
}

type RunWithFetches = {
  id: string;
  mode: string;
  status: string;
  articleCount: number;
  dedupedCount: number;
  clusterCount: number;
  completedAt: Date | null;
  sourceFetches: Array<{
    sourceName: string;
    sourceUrl: string;
    mode: string;
    status: string;
    articleCount: number;
    latencyMs: number;
    errorMessage: string | null;
  }>;
};

function mapRunStatus(run: RunWithFetches): RunStatus {
  return {
    id: run.id,
    mode: run.mode,
    status: run.status,
    articleCount: run.articleCount,
    dedupedCount: run.dedupedCount,
    clusterCount: run.clusterCount,
    completedAt: run.completedAt?.toISOString() ?? null,
    sourceFetches: run.sourceFetches.map((fetch) => ({
      sourceName: fetch.sourceName,
      sourceUrl: fetch.sourceUrl,
      mode: fetch.mode,
      status: fetch.status,
      articleCount: fetch.articleCount,
      latencyMs: fetch.latencyMs,
      errorMessage: fetch.errorMessage,
    })),
  };
}

export async function getOperationalStatus(userId: string): Promise<OperationalStatus> {
  const runs = await prisma.ingestionRun.findMany({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 6,
    include: {
      sourceFetches: {
        orderBy: { sourceName: "asc" },
      },
    },
  });

  const latestRun = runs[0] ? mapRunStatus(runs[0]) : null;
  const recentRuns = runs.map((run) => mapRunStatus(run));

  const sourceRows = await prisma.sourceFetch.findMany({
    where: {
      ingestionRun: {
        userId,
        status: "completed",
      },
    },
    orderBy: { createdAt: "desc" },
    take: 40,
    include: {
      ingestionRun: {
        select: {
          completedAt: true,
        },
      },
    },
  });

  const grouped = new Map<string, typeof sourceRows>();
  for (const row of sourceRows) {
    const current = grouped.get(row.sourceName) ?? [];
    if (current.length < 10) {
      current.push(row);
      grouped.set(row.sourceName, current);
    }
  }

  const sourceHealth: SourceHealth[] = [...grouped.entries()]
    .map(([sourceName, rows]) => {
      const successCount = rows.filter((row) => row.status === "success").length;
      const fallbackCount = rows.filter((row) => row.status === "fallback").length;
      const failureCount = rows.filter((row) => row.status === "failed").length;
      const successRate = rows.length === 0 ? 0 : (successCount + fallbackCount) / rows.length;
      const averageLatencyMs =
        rows.length === 0 ? 0 : Math.round(rows.reduce((sum, row) => sum + row.latencyMs, 0) / rows.length);

      return {
        sourceName,
        successRate,
        fallbackCount,
        failureCount,
        averageLatencyMs,
        lastStatus: rows[0]?.status ?? "unknown",
        lastCompletedAt: rows[0]?.ingestionRun.completedAt?.toISOString() ?? null,
      };
    })
    .sort((a, b) => a.sourceName.localeCompare(b.sourceName));

  const runningRun = await prisma.ingestionRun.findFirst({
    where: { userId, status: "running" },
    orderBy: { startedAt: "desc" },
    select: {
      id: true,
      startedAt: true,
      mode: true,
    },
  });

  return {
    latestRun,
    recentRuns,
    sourceHealth,
    scheduler: {
      intervalMinutes: getRefreshIntervalMinutes(),
      lockWindowMinutes: getRunLockWindowMinutes(),
      staleRunMinutes: getStaleRunMinutes(),
      nextRefreshAt: computeNextRefreshAt(runs[0]?.completedAt ?? null)?.toISOString() ?? null,
      runningRun: runningRun
        ? {
            id: runningRun.id,
            startedAt: runningRun.startedAt.toISOString(),
            mode: runningRun.mode,
          }
        : null,
    },
    deploymentReadiness: getDeploymentReadiness(),
  };
}

export async function getOperationalStatusForDefaultUser() {
  const user = await ensureDefaultUser();
  return getOperationalStatus(user.id);
}
