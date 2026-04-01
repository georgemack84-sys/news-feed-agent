import { UpdateBadge } from "@/components/UpdateBadge";
import type { RankedCluster } from "@/lib/types";

type Props = {
  item: RankedCluster;
};

export function FeedCard({ item }: Props) {
  return (
    <article className="surface-glow rounded-[30px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1.5 text-[color:var(--accent-strong)]">
              Score {item.score.toFixed(2)}
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1.5 text-[color:var(--ink-soft)]">
              {item.articles.length} source{item.articles.length === 1 ? "" : "s"}
            </span>
          </div>
          <h3 className="text-2xl font-semibold leading-tight">{item.headline}</h3>
        </div>
        <UpdateBadge status={item.changeStatus} />
      </div>

      <p className="text-base leading-7 text-stone-700">{item.summary}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        <div className="rounded-2xl bg-white/75 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">Topic fit</p>
          <p className="mt-2 text-lg font-semibold text-stone-900">{Math.round(item.topicRelevance * 100)}%</p>
        </div>
        <div className="rounded-2xl bg-white/75 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">Freshness</p>
          <p className="mt-2 text-lg font-semibold text-stone-900">{Math.round(item.freshness * 100)}%</p>
        </div>
        <div className="rounded-2xl bg-white/75 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">Source trust</p>
          <p className="mt-2 text-lg font-semibold text-stone-900">{Math.round(item.sourceWeight * 100)}%</p>
        </div>
        <div className="rounded-2xl bg-white/75 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">Novelty</p>
          <p className="mt-2 text-lg font-semibold text-stone-900">{Math.round(item.novelty * 100)}%</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl bg-[color:var(--accent-soft)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">Why it matters</p>
          <p className="mt-2 text-sm leading-6 text-stone-700">{item.whyItMatters}</p>
        </div>
        <div className="rounded-2xl bg-white/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">Why relevant</p>
          <p className="mt-2 text-sm leading-6 text-stone-700">{item.whyRelevant}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs text-stone-600">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {item.articles.slice(0, 3).map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-stone-200 bg-white/80 p-4 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-[0_14px_30px_rgba(120,53,15,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">{article.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-stone-500">
                  <span>{article.sourceName}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Open source story</span>
                </div>
              </div>
              <span className="text-xs text-stone-500">
                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "Now"}
              </span>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
