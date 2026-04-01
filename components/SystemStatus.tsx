import type { RunStatus, SchedulerStatus, SourceHealth } from "@/lib/types";

type Props = {
  useRemoteRss: boolean;
  useOpenAiSummaries: boolean;
  modelName: string;
  latestRun: RunStatus | null;
  recentRuns: RunStatus[];
  sourceHealth: SourceHealth[];
  scheduler: SchedulerStatus;
};

export function SystemStatus({
  useRemoteRss,
  useOpenAiSummaries,
  modelName,
  latestRun,
  recentRuns,
  sourceHealth,
  scheduler,
}: Props) {
  const rssLabel = useRemoteRss ? "Live RSS" : "Local fallback";
  const aiLabel = useOpenAiSummaries ? "OpenAI on" : "Fallback summaries";

  return (
    <section className="surface-glow rounded-[30px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[var(--shadow)]">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Agent status</p>
      <h2 className="mt-3 text-2xl font-semibold">System overview</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--ink-soft)]">
        A quick read on ingestion health, summary mode, and whether the next refresh is on track.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Feed mode</p>
          <p className="mt-2 text-sm font-semibold text-stone-900">{rssLabel}</p>
          <p className="mt-2 text-xs leading-5 text-stone-600">
            {useRemoteRss ? "Pulling current stories from online RSS feeds." : "Using bundled RSS fixtures for resilient local operation."}
          </p>
        </div>
        <div className="rounded-2xl bg-white/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Summary mode</p>
          <p className="mt-2 text-sm font-semibold text-stone-900">{aiLabel}</p>
          <p className="mt-2 text-xs leading-5 text-stone-600">
            {useOpenAiSummaries ? "Cluster summaries come from the OpenAI response pipeline when the key is valid." : "Rule-based summaries are active until OpenAI summaries are enabled."}
          </p>
        </div>
        <div className="rounded-2xl bg-white/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Model</p>
          <p className="mt-2 text-sm font-semibold text-stone-900">{useOpenAiSummaries ? modelName : "Rule-based"}</p>
          <p className="mt-2 text-xs leading-5 text-stone-600">
            Live RSS automatically falls back to bundled fixtures if a source is unavailable during refresh.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Refresh cadence</p>
            <p className="mt-2 text-sm font-semibold text-stone-900">Every {scheduler.intervalMinutes} minutes</p>
            <p className="mt-1 text-xs text-stone-500">
              {scheduler.nextRefreshAt
                ? `Next recommended refresh ${new Date(scheduler.nextRefreshAt).toLocaleString()}`
                : "Next refresh will be computed after the first completed run."}
            </p>
          </div>
          <div className="text-right text-xs text-stone-500">
            <p>Lock window {scheduler.lockWindowMinutes}m</p>
            <p>Stale run timeout {scheduler.staleRunMinutes}m</p>
          </div>
        </div>
        {scheduler.runningRun ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-4">
            <p className="text-sm font-semibold text-amber-900">Refresh currently running</p>
            <p className="mt-1 text-xs text-amber-700">
              {scheduler.runningRun.mode} started {new Date(scheduler.runningRun.startedAt).toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-amber-700">Run ID: {scheduler.runningRun.id}</p>
          </div>
        ) : null}
      </div>

      {latestRun ? (
        <div className="mt-5 rounded-2xl bg-white/80 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Latest run</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">
                {latestRun.mode} • {latestRun.articleCount} ingested • {latestRun.clusterCount} clusters
              </p>
              <p className="mt-1 text-xs text-stone-500">
                {latestRun.completedAt ? `Completed ${new Date(latestRun.completedAt).toLocaleString()}` : "Run still in progress"}
              </p>
            </div>
            <p className="text-xs text-stone-500">Run ID: {latestRun.id}</p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {latestRun.sourceFetches.map((fetch) => (
              <div key={`${latestRun.id}-${fetch.sourceName}`} className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                <p className="text-sm font-semibold text-stone-900">{fetch.sourceName}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">{fetch.status}</p>
                <p className="mt-2 text-xs text-stone-600">
                  {fetch.articleCount} items • {fetch.latencyMs}ms
                </p>
                {fetch.errorMessage ? <p className="mt-2 text-xs text-amber-700">{fetch.errorMessage}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {sourceHealth.length > 0 ? (
        <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-2xl bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Source health</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {sourceHealth.map((source) => (
                <div key={source.sourceName} className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-stone-900">{source.sourceName}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{source.lastStatus}</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-200">
                    <div
                      className="h-full rounded-full bg-[color:var(--accent)]"
                      style={{ width: `${Math.max(8, source.successRate * 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-stone-600">
                    {(source.successRate * 100).toFixed(0)}% healthy • avg {source.averageLatencyMs}ms
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {source.fallbackCount} fallback • {source.failureCount} failed
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Recent runs</p>
            <div className="mt-4 space-y-3">
              {recentRuns.map((run) => (
                <div key={run.id} className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                  <p className="text-sm font-semibold text-stone-900">{run.mode}</p>
                  <p className="mt-1 text-xs text-stone-600">
                    {run.articleCount} ingested • {run.clusterCount} clusters
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {run.completedAt ? new Date(run.completedAt).toLocaleString() : "Pending"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
