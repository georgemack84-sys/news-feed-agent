import { FeedList } from "@/components/FeedList";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SystemStatus } from "@/components/SystemStatus";
import { requireAuthenticatedUser } from "@/lib/auth";
import { getFeedResponse, getOperationalStatus } from "@/lib/db/queries";
import { refreshFeedPipeline } from "@/lib/pipeline";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await requireAuthenticatedUser();
  let feed = await getFeedResponse(user.id);
  let operationalStatus = await getOperationalStatus(user.id);
  const openAiKeyAvailable = Boolean(process.env.OPENAI_API_KEY?.trim());
  const useRemoteRss = feed.preferences.useRemoteRss;
  const useOpenAiSummaries = feed.preferences.useOpenAiSummaries && openAiKeyAvailable;
  const modelName = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  if (feed.items.length === 0) {
    await refreshFeedPipeline(user.id);
    feed = await getFeedResponse(user.id);
    operationalStatus = await getOperationalStatus(user.id);
  }

  const breaking = feed.items.slice(0, 2);
  const newItems = feed.items.filter((item) => item.changeStatus === "new").slice(0, 3);
  const updatedItems = feed.items.filter((item) => item.changeStatus === "updated").slice(0, 3);
  const averageScore =
    feed.items.length > 0 ? feed.items.reduce((sum, item) => sum + item.score, 0) / feed.items.length : 0;
  const latestCompletedLabel = operationalStatus.latestRun?.completedAt
    ? new Date(operationalStatus.latestRun.completedAt).toLocaleString()
    : "Awaiting first completed run";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:px-8">
      <div className="space-y-8">
        <Header />
        <SystemStatus
          useRemoteRss={useRemoteRss}
          useOpenAiSummaries={useOpenAiSummaries}
          modelName={modelName}
          latestRun={operationalStatus.latestRun}
          recentRuns={operationalStatus.recentRuns}
          sourceHealth={operationalStatus.sourceHealth}
          scheduler={operationalStatus.scheduler}
        />
        <section className="surface-glow rounded-[34px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Briefing snapshot</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A sharper read on what matters right now.</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
                The feed is balancing your topic profile, preferred sources, and freshness signals to keep the briefing compact but meaningful.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[420px]">
              <div className="rounded-2xl bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Stories shown</p>
                <p className="mt-2 text-3xl font-semibold">{feed.items.slice(0, 5).length}</p>
                <p className="mt-1 text-xs text-stone-500">from {feed.items.length} ranked clusters</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Average score</p>
                <p className="mt-2 text-3xl font-semibold">{averageScore.toFixed(2)}</p>
                <p className="mt-1 text-xs text-stone-500">top feed confidence</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Latest briefing</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-900">{latestCompletedLabel}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="dashboard-grid">
          <Sidebar preferences={feed.preferences} openAiKeyAvailable={openAiKeyAvailable} />

          <section className="min-w-0">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Main feed</p>
                <h2 className="mt-2 text-3xl font-semibold">Personalized top stories</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">
                  Start here for the strongest clusters, then branch into the linked source coverage when you want the raw reporting.
                </p>
              </div>
              <div className="rounded-full bg-white/80 px-4 py-2 text-sm text-stone-600">Showing {feed.items.length} ranked items</div>
            </div>
            <FeedList items={feed.items.slice(0, 5)} />
          </section>

          <aside className="space-y-6">
            <div className="surface-glow rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Breaking now</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">The clusters most likely to define the current briefing window.</p>
              <div className="mt-4 space-y-4">
                {breaking.map((item) => (
                  <div key={item.id} className="rounded-2xl bg-white/70 p-4">
                    <p className="text-sm font-semibold">{item.headline}</p>
                    <p className="mt-2 text-xs text-stone-500">{item.tags.slice(0, 2).join(" • ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-glow rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">New since last check</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">Fresh arrivals that did not exist in your previous snapshot.</p>
              <div className="mt-4 space-y-4">
                {newItems.length > 0 ? (
                  newItems.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-semibold">{item.headline}</p>
                      <p className="mt-2 text-xs text-stone-500">{item.summary}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-white/70 p-4 text-sm text-stone-600">No new clusters since the last snapshot.</div>
                )}
              </div>
            </div>

            <div className="surface-glow rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Developing</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">Stories that changed shape since the last feed snapshot.</p>
              <div className="mt-4 space-y-4">
                {updatedItems.length > 0 ? (
                  updatedItems.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-semibold">{item.headline}</p>
                      <p className="mt-2 text-xs text-stone-500">{item.whyRelevant}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-white/70 p-4 text-sm text-stone-600">No developing clusters are flagged yet.</div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
