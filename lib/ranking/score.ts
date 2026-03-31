import type { PreferenceInput } from "@/lib/types";

type ClusterSignals = {
  topicRelevance: number;
  freshness: number;
  sourceWeight: number;
  novelty: number;
};

export function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function computeFreshness(publishedAt: Date | null) {
  if (!publishedAt) {
    return 0.3;
  }

  const hoursOld = (Date.now() - publishedAt.getTime()) / (1000 * 60 * 60);
  return clamp(1 - hoursOld / 48);
}

export function computeTopicRelevance(topics: string[], preferences: PreferenceInput) {
  if (preferences.topics.length === 0) {
    return 0.5;
  }

  const lowered = new Set(topics.map((topic) => topic.toLowerCase()));
  const matches = preferences.topics.filter((topic) => lowered.has(topic.toLowerCase())).length;
  const mutedMatches = preferences.mutedTopics.filter((topic) => lowered.has(topic.toLowerCase())).length;
  return clamp(matches / preferences.topics.length - mutedMatches * 0.25 + 0.25);
}

export function computeSourceWeight(sourceNames: string[], preferences: PreferenceInput) {
  const scores = sourceNames.map((source) => preferences.sourceWeights[source] ?? 0.6);
  return scores.length ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0.5;
}

export function computeNovelty(clusterSize: number) {
  return clamp(0.35 + Math.min(clusterSize, 5) * 0.12);
}

export function scoreCluster(signals: ClusterSignals, preferences: PreferenceInput) {
  const weights = preferences.rankingWeights;
  return clamp(
    signals.topicRelevance * weights.topicRelevance +
      signals.freshness * weights.freshness +
      signals.sourceWeight * weights.sourceWeight +
      signals.novelty * weights.novelty,
  );
}
