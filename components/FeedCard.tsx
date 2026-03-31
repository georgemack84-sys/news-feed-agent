import { UpdateBadge } from "@/components/UpdateBadge";
import type { RankedCluster } from "@/lib/types";

type Props = {
  item: RankedCluster;
};

export function FeedCard({ item }: Props) {
  return (
    <article className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)] backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Score {item.score.toFixed(2)}
          </p>
          <h3 className="text-2xl font-semibold leading-tight">{item.headline}</h3>
        </div>
        <UpdateBadge status={item.changeStatus} />
      </div>

      <p className="text-base leading-7 text-stone-700">{item.summary}</p>

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
            className="block rounded-2xl border border-stone-200 bg-white/80 p-4 transition hover:-translate-y-0.5 hover:border-amber-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">{article.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">{article.sourceName}</p>
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
