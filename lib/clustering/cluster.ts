import { hashValue, tokenize } from "@/lib/feeds/normalize";
import type { NormalizedArticleInput } from "@/lib/types";

export type WorkingCluster = {
  key: string;
  articles: NormalizedArticleInput[];
};

function jaccard(a: string[], b: string[]) {
  const left = new Set(a);
  const right = new Set(b);
  const overlap = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 0 : overlap / union;
}

export function clusterArticles(articles: NormalizedArticleInput[]): WorkingCluster[] {
  const clusters: WorkingCluster[] = [];

  for (const article of articles) {
    const articleTokens = tokenize(`${article.title} ${article.contentSnippet ?? ""}`);
    const match = clusters.find((cluster) => {
      const reference = cluster.articles[0];
      const refTokens = tokenize(`${reference.title} ${reference.contentSnippet ?? ""}`);
      return jaccard(articleTokens, refTokens) >= 0.4;
    });

    if (match) {
      match.articles.push(article);
      continue;
    }

    clusters.push({
      key: hashValue(article.canonicalUrl ?? article.url),
      articles: [article],
    });
  }

  return clusters;
}
