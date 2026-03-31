import type { WorkingCluster } from "@/lib/clustering/cluster";
import { computeFreshness, computeNovelty, computeSourceWeight, computeTopicRelevance, scoreCluster } from "@/lib/ranking/score";
import type { PreferenceInput } from "@/lib/types";

export function personalizeClusters(clusters: WorkingCluster[], preferences: PreferenceInput) {
  return clusters.map((cluster) => {
    const lead = cluster.articles[0];
    const combinedTopics = [...new Set(cluster.articles.flatMap((article) => article.topicCandidates))];
    const sourceNames = [...new Set(cluster.articles.map((article) => article.sourceName))];

    const signals = {
      topicRelevance: computeTopicRelevance(combinedTopics, preferences),
      freshness: computeFreshness(lead?.publishedAt ?? null),
      sourceWeight: computeSourceWeight(sourceNames, preferences),
      novelty: computeNovelty(cluster.articles.length),
    };

    return {
      cluster,
      signals,
      score: scoreCluster(signals, preferences),
    };
  });
}
