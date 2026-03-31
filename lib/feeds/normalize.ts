import crypto from "node:crypto";

import type { NormalizedArticleInput } from "@/lib/types";

type ParsedEntry = {
  title: string;
  link: string;
  publishedAt: string | null;
  author: string | null;
  summary: string | null;
  contentSnippet: string | null;
  imageUrl: string | null;
};

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "into",
  "over",
  "after",
  "about",
  "your",
  "have",
  "will",
]);

const entityMap: Record<string, string> = {
  "&amp;": "&",
  "&quot;": "\"",
  "&#39;": "'",
  "&lt;": "<",
  "&gt;": ">",
};

export function stripHtml(input: string): string {
  return input
    .replace(/<!\[CDATA\[(.*?)\]\]>/gis, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;|&quot;|&#39;|&lt;|&gt;/g, (entity) => entityMap[entity] ?? entity)
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeWhitespace(value: string): string {
  return stripHtml(value).replace(/\s+/g, " ").trim();
}

export function slugifyUrl(input: string | null): string | null {
  if (!input) {
    return null;
  }

  try {
    const url = new URL(input);
    url.hash = "";
    const removable = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref", "rss"];
    removable.forEach((key) => url.searchParams.delete(key));
    return url.toString().replace(/\/$/, "");
  } catch {
    return input.trim();
  }
}

export function tokenize(input: string): string[] {
  return normalizeWhitespace(input)
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

export function hashValue(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function topicCandidatesFromText(...parts: Array<string | null>): string[] {
  const counts = new Map<string, number>();
  parts.flatMap((part) => tokenize(part ?? "")).forEach((token) => {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([token]) => token);
}

function readTag(content: string, tag: string): string | null {
  const patterns = [
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[(.*?)\\]\\]><\\/${tag}>`, "is"),
    new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, "is"),
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return normalizeWhitespace(match[1]);
    }
  }

  return null;
}

function extractImage(content: string): string | null {
  return (
    content.match(/<media:content[^>]*url="([^"]+)"/i)?.[1] ??
    content.match(/<enclosure[^>]*url="([^"]+)"/i)?.[1] ??
    content.match(/<img[^>]+src="([^"]+)"/i)?.[1] ??
    null
  );
}

function parseRssItems(xml: string): ParsedEntry[] {
  const itemMatches = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];
  return itemMatches
    .map((item) => {
      const title = readTag(item, "title");
      const link = readTag(item, "link");
      if (!title || !link) {
        return null;
      }

      const summary = readTag(item, "description");
      return {
        title,
        link,
        publishedAt: readTag(item, "pubDate"),
        author: readTag(item, "author") ?? readTag(item, "dc:creator"),
        summary,
        contentSnippet: readTag(item, "content:encoded") ?? summary,
        imageUrl: extractImage(item),
      };
    })
    .filter((entry): entry is ParsedEntry => Boolean(entry));
}

function parseAtomEntries(xml: string): ParsedEntry[] {
  const entryMatches = xml.match(/<entry\b[\s\S]*?<\/entry>/gi) ?? [];
  return entryMatches
    .map((entry) => {
      const title = readTag(entry, "title");
      const link = entry.match(/<link[^>]*href="([^"]+)"/i)?.[1] ?? readTag(entry, "id");
      if (!title || !link) {
        return null;
      }

      const summary = readTag(entry, "summary") ?? readTag(entry, "content");
      return {
        title,
        link,
        publishedAt: readTag(entry, "published") ?? readTag(entry, "updated"),
        author: readTag(entry, "name"),
        summary,
        contentSnippet: summary,
        imageUrl: extractImage(entry),
      };
    })
    .filter((entry): entry is ParsedEntry => Boolean(entry));
}

export function parseFeedXml(xml: string): ParsedEntry[] {
  if (xml.includes("<rss") || xml.includes("<rdf:RDF")) {
    return parseRssItems(xml);
  }

  if (xml.includes("<feed")) {
    return parseAtomEntries(xml);
  }

  return [];
}

export function normalizeArticle(sourceName: string, sourceUrl: string, entry: ParsedEntry): NormalizedArticleInput {
  const title = normalizeWhitespace(entry.title);
  const canonicalUrl = slugifyUrl(entry.link);
  const contentSnippet = normalizeWhitespace(entry.contentSnippet ?? entry.summary ?? title);
  const summary = normalizeWhitespace(entry.summary ?? contentSnippet);
  const topics = topicCandidatesFromText(title, summary, contentSnippet);

  return {
    sourceName,
    sourceUrl,
    title,
    url: entry.link,
    canonicalUrl,
    publishedAt: entry.publishedAt ? new Date(entry.publishedAt) : null,
    author: entry.author ? normalizeWhitespace(entry.author) : null,
    summary: summary || null,
    contentSnippet: contentSnippet || null,
    imageUrl: entry.imageUrl ? slugifyUrl(entry.imageUrl) : null,
    topicCandidates: topics,
    hashTitle: hashValue(tokenize(title).join(" ")),
    hashContent: hashValue(tokenize(contentSnippet).join(" ")),
  };
}
