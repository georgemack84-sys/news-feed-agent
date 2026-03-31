import OpenAI from "openai";

import type { ClusterSummary, PreferenceInput, SummaryResult } from "@/lib/types";

type SummaryInputArticle = {
  title: string;
  sourceName: string;
  publishedAt: string | null;
  summary: string | null;
  topicCandidates: string[];
};

let openAiCooldownUntil = 0;

function validateSummary(data: unknown): ClusterSummary | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const candidate = data as Record<string, unknown>;
  if (
    typeof candidate.headline !== "string" ||
    typeof candidate.summary !== "string" ||
    typeof candidate.whyItMatters !== "string" ||
    typeof candidate.whyRelevant !== "string" ||
    !Array.isArray(candidate.tags)
  ) {
    return null;
  }

  return {
    headline: candidate.headline,
    summary: candidate.summary,
    whyItMatters: candidate.whyItMatters,
    whyRelevant: candidate.whyRelevant,
    tags: candidate.tags.filter((tag): tag is string => typeof tag === "string").slice(0, 6),
  };
}

function resultWithMeta(summary: ClusterSummary, source: SummaryResult["source"], model: string | null): SummaryResult {
  return {
    ...summary,
    source,
    model,
  };
}

function ruleBasedSummary(articles: SummaryInputArticle[], preferences: PreferenceInput): ClusterSummary {
  const lead = articles[0];
  const tags = [...new Set(articles.flatMap((article) => article.topicCandidates))].slice(0, 5);

  return {
    headline: lead?.title ?? "News update",
    summary:
      articles.length > 1
        ? `${lead?.sourceName ?? "A source"} and ${articles.length - 1} other outlets are covering this story.`
        : lead?.summary ?? "A fresh story matched your current sources.",
    whyItMatters: `This cluster appears across ${articles.length} article${articles.length === 1 ? "" : "s"}, which suggests the topic is gaining momentum.`,
    whyRelevant:
      preferences.topics.length > 0
        ? `Matched against your interests: ${preferences.topics.slice(0, 3).join(", ")}.`
        : "Included because it scored well on freshness and source quality.",
    tags,
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldSkipOpenAi(preferences: PreferenceInput) {
  if (!preferences.useOpenAiSummaries) {
    return true;
  }

  if (!process.env.OPENAI_API_KEY?.trim()) {
    return true;
  }

  if (Date.now() < openAiCooldownUntil) {
    return true;
  }

  return false;
}

export function cachedSummaryResult(summary: ClusterSummary, model: string | null): SummaryResult {
  return resultWithMeta(summary, "cache", model);
}

export async function summarizeCluster(
  articles: SummaryInputArticle[],
  preferences: PreferenceInput,
): Promise<SummaryResult> {
  const fallback = resultWithMeta(ruleBasedSummary(articles, preferences), "rule", null);
  if (shouldSkipOpenAi(preferences)) {
    return fallback;
  }

  const apiKey = process.env.OPENAI_API_KEY!.trim();
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const client = new OpenAI({ apiKey });

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await client.responses.create({
        model,
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: "You are a personalized news agent. Summarize one news cluster as structured JSON only.",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: JSON.stringify({
                  clusterArticles: articles,
                  userPreferences: preferences,
                  tone: preferences.tone,
                  topics: preferences.topics,
                }),
              },
            ],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "cluster_summary",
            schema: {
              type: "object",
              additionalProperties: false,
              required: ["headline", "summary", "whyItMatters", "whyRelevant", "tags"],
              properties: {
                headline: { type: "string" },
                summary: { type: "string" },
                whyItMatters: { type: "string" },
                whyRelevant: { type: "string" },
                tags: {
                  type: "array",
                  items: { type: "string" },
                },
              },
            },
          },
        },
      });

      const output = response.output_text ? JSON.parse(response.output_text) : null;
      const validated = validateSummary(output);
      if (!validated) {
        return fallback;
      }

      return resultWithMeta(validated, "openai", model);
    } catch (error) {
      const typedError = error as { status?: number; code?: string; type?: string };
      const isQuotaError =
        typedError.status === 429 ||
        typedError.code === "insufficient_quota" ||
        typedError.type === "insufficient_quota";

      if (isQuotaError) {
        openAiCooldownUntil = Date.now() + 1000 * 60 * 15;
        console.error("OpenAI summary cooldown engaged after quota error", error);
        return fallback;
      }

      const isTransient = typedError.status === 408 || typedError.status === 429 || typedError.status === 500 || typedError.status === 502 || typedError.status === 503 || typedError.status === 504;
      if (!isTransient || attempt === 2) {
        console.error("OpenAI summary failed", error);
        return fallback;
      }

      await sleep(400 * (attempt + 1));
    }
  }

  return fallback;
}
