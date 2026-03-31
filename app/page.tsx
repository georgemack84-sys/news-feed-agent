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
        <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)_260px]">
          <Sidebar preferences={feed.preferences} openAiKeyAvailable={openAiKeyAvailable} />

          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Main feed</p>
                <h2 className="mt-2 text-3xl font-semibold">Personalized top stories</h2>
              </div>
              <p className="text-sm text-stone-600">Showing {feed.items.length} items</p>
            </div>
            <FeedList items={feed.items.slice(0, 5)} />
          </section>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Breaking now</p>
              <div className="mt-4 space-y-4">
                {breaking.map((item) => (
                  <div key={item.id} className="rounded-2xl bg-white/70 p-4">
                    <p className="text-sm font-semibold">{item.headline}</p>
                    <p className="mt-2 text-xs text-stone-500">{item.tags.slice(0, 2).join(" • ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">New since last check</p>
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
          </aside>
        </div>
      </div>
    </main>
  );
}
