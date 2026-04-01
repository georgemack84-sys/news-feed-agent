"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import type { PreferenceInput } from "@/lib/types";

type Props = {
  preferences: PreferenceInput;
  openAiKeyAvailable?: boolean;
  variant?: "compact" | "page";
};

const rankingLabels: Record<keyof PreferenceInput["rankingWeights"], string> = {
  topicRelevance: "Topic relevance",
  freshness: "Freshness",
  sourceWeight: "Source trust",
  novelty: "Novelty",
};

function parseList(value: string) {
  const seen = new Set<string>();

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => {
      if (!entry) {
        return false;
      }

      const key = entry.toLowerCase();
      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

export function Sidebar({ preferences, openAiKeyAvailable = false, variant = "compact" }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [topics, setTopics] = useState(preferences.topics.join(", "));
  const [mutedTopics, setMutedTopics] = useState(preferences.mutedTopics.join(", "));
  const [tone, setTone] = useState(preferences.tone);
  const [useRemoteRss, setUseRemoteRss] = useState(preferences.useRemoteRss);
  const [useOpenAiSummaries, setUseOpenAiSummaries] = useState(preferences.useOpenAiSummaries && openAiKeyAvailable);
  const [sourceWeights, setSourceWeights] = useState(preferences.sourceWeights);
  const [rankingWeights, setRankingWeights] = useState(preferences.rankingWeights);
  const [message, setMessage] = useState("Settings ready");

  const sourceEntries = Object.entries(sourceWeights).sort(([left], [right]) => left.localeCompare(right));
  const rankingTotal = Object.values(rankingWeights).reduce((sum, value) => sum + value, 0);
  const isPage = variant === "page";

  async function save() {
    const nextPreferences: PreferenceInput = {
      topics: parseList(topics),
      mutedTopics: parseList(mutedTopics),
      tone,
      useRemoteRss,
      useOpenAiSummaries: useOpenAiSummaries && openAiKeyAvailable,
      sourceWeights,
      rankingWeights,
    };

    setMessage("Saving preferences...");

    const preferencesResponse = await fetch("/api/preferences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextPreferences),
    });

    if (!preferencesResponse.ok) {
      setMessage("Unable to save preferences");
      return;
    }

    const shouldRefreshFeed =
      preferences.useRemoteRss !== useRemoteRss ||
      preferences.useOpenAiSummaries !== (useOpenAiSummaries && openAiKeyAvailable);

    const endpoint = shouldRefreshFeed ? "/api/feed/refresh" : "/api/feed/rank";
    const rerankResponse = await fetch(endpoint, { method: "POST" });

    if (!rerankResponse.ok) {
      setMessage("Preferences saved, but the feed update failed");
      return;
    }

    setMessage(shouldRefreshFeed ? "Preferences saved and feed refreshed" : "Preferences saved and feed reranked");
    startTransition(() => router.refresh());
  }

  return (
    <aside
      className={`rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)] ${
        isPage ? "w-full" : "xl:sticky xl:top-6"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Preferences</p>
          <h2 className="mt-3 text-2xl font-semibold">{isPage ? "Briefing settings" : "Tune the agent"}</h2>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            {isPage ? "Shape the voice, topic mix, and weighting logic behind your briefing." : "Adjust the signal mix behind what rises to the top."}
          </p>
          <p className="mt-2 text-sm text-stone-600">{message}</p>
        </div>
        <div className="rounded-full bg-white/80 px-3 py-2 text-xs font-medium text-stone-600">
          Weight total {(rankingTotal * 100).toFixed(0)}%
        </div>
      </div>

      <div className={`mt-6 ${isPage ? "grid gap-6 xl:grid-cols-2" : "space-y-6"}`}>
        <section className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-700">Topics</span>
            <textarea
              className="min-h-24 w-full rounded-2xl border border-stone-200 bg-white/90 p-3 text-sm outline-none"
              value={topics}
              onChange={(event) => setTopics(event.target.value)}
            />
            <span className="mt-2 block text-xs text-stone-500">Comma-separated topics the briefing should prioritize.</span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-700">Muted topics</span>
            <textarea
              className="min-h-20 w-full rounded-2xl border border-stone-200 bg-white/90 p-3 text-sm outline-none"
              value={mutedTopics}
              onChange={(event) => setMutedTopics(event.target.value)}
            />
            <span className="mt-2 block text-xs text-stone-500">Topics to down-rank when they appear in clustered coverage.</span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-700">Briefing tone</span>
            <select
              className="w-full rounded-2xl border border-stone-200 bg-white/90 p-3 text-sm outline-none"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              <option value="brief">Brief</option>
              <option value="analytical">Analytical</option>
              <option value="executive">Executive</option>
            </select>
          </label>

          <div className="rounded-2xl border border-stone-200 bg-white/80 p-4">
            <p className="text-sm font-semibold text-stone-900">Runtime controls</p>
            <div className="mt-4 space-y-3">
              <label className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-stone-800">Use live RSS</p>
                  <p className="text-xs text-stone-500">Switch between current online feeds and the built-in fallback source set.</p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={useRemoteRss}
                  onChange={(event) => setUseRemoteRss(event.target.checked)}
                />
              </label>
              <label className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-stone-800">Use OpenAI summaries</p>
                  <p className="text-xs text-stone-500">
                    {openAiKeyAvailable
                      ? "OpenAI summaries are part of the primary briefing experience."
                      : "Unavailable until OPENAI_API_KEY is configured."}
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={useOpenAiSummaries}
                  disabled={!openAiKeyAvailable}
                  onChange={(event) => setUseOpenAiSummaries(event.target.checked)}
                />
              </label>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white/80 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-stone-900">Source preferences</p>
              <p className="text-xs text-stone-500">0-100 trust scale</p>
            </div>
            <div className="mt-4 space-y-4">
              {sourceEntries.map(([source, value]) => (
                <label key={source} className="block">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-stone-800">{source}</span>
                    <span className="text-xs text-stone-500">{Math.round(value * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={Math.round(value * 100)}
                    onChange={(event) =>
                      setSourceWeights((current) => ({
                        ...current,
                        [source]: Number(event.target.value) / 100,
                      }))
                    }
                    className="w-full accent-[color:var(--accent)]"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white/80 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-stone-900">Ranking formula</p>
              <p className="text-xs text-stone-500">Normalized automatically on save</p>
            </div>
            <div className="mt-4 space-y-4">
              {Object.entries(rankingWeights).map(([key, value]) => (
                <label key={key} className="block">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-stone-800">
                      {rankingLabels[key as keyof PreferenceInput["rankingWeights"]]}
                    </span>
                    <span className="text-xs text-stone-500">{Math.round(value * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={Math.round(value * 100)}
                    onChange={(event) =>
                      setRankingWeights((current) => ({
                        ...current,
                        [key]: Number(event.target.value) / 100,
                      }))
                    }
                    className="w-full accent-[color:var(--accent)]"
                  />
                </label>
              ))}
            </div>
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={save}
        disabled={pending}
        className="mt-6 w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(192,86,33,0.2)] hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save preferences"}
      </button>
    </aside>
  );
}
