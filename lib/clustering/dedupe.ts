import { tokenize } from "@/lib/feeds/normalize";
import type { NormalizedArticleInput } from "@/lib/types";

function jaccardSimilarity(a: string[], b: string[]) {
  const left = new Set(a);
  const right = new Set(b);
  const intersection = [...left].filter((token) => right.has(token));
  const union = new Set([...left, ...right]);
  return union.size === 0 ? 0 : intersection.length / union.size;
}

export type DuplicateMatch = {
  article: NormalizedArticleInput;
  duplicateOf: string | null;
  similarity: number;
};

export function dedupeArticles(articles: NormalizedArticleInput[]): DuplicateMatch[] {
  const accepted: NormalizedArticleInput[] = [];
  const results: DuplicateMatch[] = [];

  for (const article of articles) {
    let duplicateOf: string | null = null;
    let similarity = 0;

    for (const existing of accepted) {
      if (article.canonicalUrl && existing.canonicalUrl && article.canonicalUrl === existing.canonicalUrl) {
        duplicateOf = existing.url;
        similarity = 1;
        break;
      }

      const score = jaccardSimilarity(
        tokenize(`${article.title} ${article.contentSnippet ?? ""}`),
        tokenize(`${existing.title} ${existing.contentSnippet ?? ""}`),
      );

      if (score >= 0.6) {
        duplicateOf = existing.url;
        similarity = score;
        break;
      }
    }

    if (!duplicateOf) {
      accepted.push(article);
    }

    results.push({ article, duplicateOf, similarity });
  }

  return results;
}
