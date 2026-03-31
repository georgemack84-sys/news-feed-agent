import sources from "@/data/sources.json";
import { normalizeArticle, parseFeedXml } from "@/lib/feeds/normalize";
import type { NormalizedArticleInput, SourceFetchStatus } from "@/lib/types";

type SourceRecord = {
  name: string;
  url: string;
};

type IngestedSourceResult = {
  articles: NormalizedArticleInput[];
  fetch: SourceFetchStatus;
};

const fallbackFeeds: Record<string, string> = {
  "BBC World": `
    <rss version="2.0"><channel>
      <item><title>Global chipmakers race to secure AI supply chains</title><link>https://example.com/bbc/ai-supply-chain</link><pubDate>Mon, 30 Mar 2026 14:00:00 GMT</pubDate><description>Manufacturers are increasing investment in packaging, energy, and fabrication capacity for AI chips.</description></item>
      <item><title>Leaders outline new energy targets for data center growth</title><link>https://example.com/bbc/data-center-energy</link><pubDate>Mon, 30 Mar 2026 13:00:00 GMT</pubDate><description>Governments and utilities are revisiting power strategy as AI infrastructure expands.</description></item>
    </channel></rss>
  `,
  "NPR News": `
    <rss version="2.0"><channel>
      <item><title>Schools test AI tutoring programs in after-class pilots</title><link>https://example.com/npr/ai-tutoring</link><pubDate>Mon, 30 Mar 2026 12:30:00 GMT</pubDate><description>Districts are evaluating how personalized tutoring tools affect teacher workloads and student outcomes.</description></item>
      <item><title>Leaders outline new energy targets for data center growth</title><link>https://example.com/npr/data-center-energy</link><pubDate>Mon, 30 Mar 2026 13:10:00 GMT</pubDate><description>Communities are debating the impact of data center power demand on grid planning.</description></item>
    </channel></rss>
  `,
  "The Verge": `
    <rss version="2.0"><channel>
      <item><title>Global chipmakers race to secure AI supply chains</title><link>https://example.com/verge/ai-supply-chain</link><pubDate>Mon, 30 Mar 2026 14:20:00 GMT</pubDate><description>Executives say advanced packaging is the next bottleneck for AI hardware growth.</description></item>
      <item><title>Consumer browsers add live shopping agents to search pages</title><link>https://example.com/verge/shopping-agents</link><pubDate>Mon, 30 Mar 2026 11:45:00 GMT</pubDate><description>Major browser makers are testing AI assistants that summarize products and compare prices.</description></item>
    </channel></rss>
  `,
  TechCrunch: `
    <rss version="2.0"><channel>
      <item><title>Startups build workflow tools around private news agents</title><link>https://example.com/tc/news-agents</link><pubDate>Mon, 30 Mar 2026 15:00:00 GMT</pubDate><description>Teams want personalized monitoring, ranking, and briefing systems that adapt to their work.</description></item>
      <item><title>Consumer browsers add live shopping agents to search pages</title><link>https://example.com/tc/shopping-agents</link><pubDate>Mon, 30 Mar 2026 11:55:00 GMT</pubDate><description>Retail search is shifting toward assistant-led discovery and comparison flows.</description></item>
    </channel></rss>
  `,
};

async function fetchSourceFeed(source: SourceRecord): Promise<NormalizedArticleInput[]> {
  const response = await fetch(source.url, {
    headers: {
      "User-Agent": "news-feed-agent/0.1",
      Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
    },
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    throw new Error(`Feed fetch failed for ${source.name}: ${response.status}`);
  }

  const xml = await response.text();
  const entries = parseFeedXml(xml);
  return entries.slice(0, 20).map((entry) => normalizeArticle(source.name, source.url, entry));
}

function fallbackSourceFeed(source: SourceRecord): NormalizedArticleInput[] {
  const fallback = fallbackFeeds[source.name];
  if (!fallback) {
    return [];
  }

  const entries = parseFeedXml(fallback);
  return entries.map((entry) => normalizeArticle(source.name, source.url, entry));
}

export async function ingestRssFeeds(options?: { useRemoteRss?: boolean }): Promise<{
  articles: NormalizedArticleInput[];
  sourceFetches: SourceFetchStatus[];
}> {
  if (!options?.useRemoteRss) {
    const results = (sources as SourceRecord[]).map((source) => {
      const articles = fallbackSourceFeed(source);
      return {
        articles,
        fetch: {
          sourceName: source.name,
          sourceUrl: source.url,
          mode: "fixture_rss",
          status: "success",
          articleCount: articles.length,
          latencyMs: 0,
          errorMessage: null,
        },
      } satisfies IngestedSourceResult;
    });

    return {
      articles: results.flatMap((result) => result.articles),
      sourceFetches: results.map((result) => result.fetch),
    };
  }

  const tasks = (sources as SourceRecord[]).map(async (source) => {
    const startedAt = Date.now();
    try {
      const articles = await fetchSourceFeed(source);
      return {
        articles,
        fetch: {
          sourceName: source.name,
          sourceUrl: source.url,
          mode: "live_rss",
          status: "success",
          articleCount: articles.length,
          latencyMs: Date.now() - startedAt,
          errorMessage: null,
        },
      } satisfies IngestedSourceResult;
    } catch (error) {
      console.error(error);
      const fallbackArticles = fallbackSourceFeed(source);
      return {
        articles: fallbackArticles,
        fetch: {
          sourceName: source.name,
          sourceUrl: source.url,
          mode: fallbackArticles.length > 0 ? "live_rss_with_fallback" : "live_rss",
          status: fallbackArticles.length > 0 ? "fallback" : "failed",
          articleCount: fallbackArticles.length,
          latencyMs: Date.now() - startedAt,
          errorMessage: error instanceof Error ? error.message : "Unknown source fetch failure",
        },
      } satisfies IngestedSourceResult;
    }
  });

  const results = await Promise.all(tasks);
  return {
    articles: results.flatMap((result) => result.articles),
    sourceFetches: results.map((result) => result.fetch),
  };
}
