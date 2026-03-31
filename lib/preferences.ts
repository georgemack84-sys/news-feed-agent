import { defaultPreferences, defaultRankingWeights } from "@/lib/db/schema";
import type { PreferenceInput, TopicWeights } from "@/lib/types";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function normalizeList(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  const seen = new Set<string>();
  const next: string[] = [];

  for (const entry of value) {
    if (typeof entry !== "string") {
      continue;
    }

    const trimmed = entry.trim();
    if (!trimmed) {
      continue;
    }

    const key = trimmed.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    next.push(trimmed);
  }

  return next;
}

function normalizeBoolean(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function normalizeTone(value: unknown, fallback: string) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim().toLowerCase();
  return trimmed || fallback;
}

function normalizeSourceWeights(value: unknown, fallback: Record<string, number>) {
  const merged = { ...fallback };

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return merged;
  }

  for (const [source, weight] of Object.entries(value)) {
    if (typeof source !== "string" || !source.trim()) {
      continue;
    }

    if (typeof weight !== "number" || Number.isNaN(weight)) {
      continue;
    }

    merged[source] = clamp(weight);
  }

  return merged;
}

function normalizeRankingWeights(value: unknown): TopicWeights {
  const fallback = defaultRankingWeights;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return fallback;
  }

  const raw = {
    topicRelevance:
      typeof (value as Record<string, unknown>).topicRelevance === "number"
        ? clamp((value as Record<string, number>).topicRelevance)
        : fallback.topicRelevance,
    freshness:
      typeof (value as Record<string, unknown>).freshness === "number"
        ? clamp((value as Record<string, number>).freshness)
        : fallback.freshness,
    sourceWeight:
      typeof (value as Record<string, unknown>).sourceWeight === "number"
        ? clamp((value as Record<string, number>).sourceWeight)
        : fallback.sourceWeight,
    novelty:
      typeof (value as Record<string, unknown>).novelty === "number"
        ? clamp((value as Record<string, number>).novelty)
        : fallback.novelty,
  };

  const total = raw.topicRelevance + raw.freshness + raw.sourceWeight + raw.novelty;
  if (total <= 0) {
    return fallback;
  }

  return {
    topicRelevance: raw.topicRelevance / total,
    freshness: raw.freshness / total,
    sourceWeight: raw.sourceWeight / total,
    novelty: raw.novelty / total,
  };
}

export function normalizePreferenceInput(input: unknown): PreferenceInput {
  const record = input && typeof input === "object" && !Array.isArray(input) ? (input as Record<string, unknown>) : {};

  return {
    topics: normalizeList(record.topics, defaultPreferences.topics),
    mutedTopics: normalizeList(record.mutedTopics, defaultPreferences.mutedTopics),
    tone: normalizeTone(record.tone, defaultPreferences.tone),
    useRemoteRss: normalizeBoolean(record.useRemoteRss, defaultPreferences.useRemoteRss),
    useOpenAiSummaries: normalizeBoolean(record.useOpenAiSummaries, defaultPreferences.useOpenAiSummaries),
    sourceWeights: normalizeSourceWeights(record.sourceWeights, defaultPreferences.sourceWeights),
    rankingWeights: normalizeRankingWeights(record.rankingWeights),
  };
}
