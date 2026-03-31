import { Header } from "@/components/Header";
import { OpsActions } from "@/components/OpsActions";
import { requireAuthenticatedUser } from "@/lib/auth";
import { getOperationalStatus } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function OpsPage() {
  const user = await requireAuthenticatedUser();
  const operationalStatus = await getOperationalStatus(user.id);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:px-8">
      <div className="space-y-8">
        <Header />

        <section className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Operations</p>
          <h1 className="mt-3 text-3xl font-semibold">Refresh monitoring</h1>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">
            Review recent ingestion runs, source health, and scheduler cadence for the daily briefing pipeline.
          </p>
          <OpsActions />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Latest completion</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">
                {operationalStatus.latestRun?.completedAt
                  ? new Date(operationalStatus.latestRun.completedAt).toLocaleString()
                  : "No completed run yet"}
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Scheduler interval</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">
                Every {operationalStatus.scheduler.intervalMinutes} minutes
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Current runner</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">
                {operationalStatus.scheduler.runningRun ? operationalStatus.scheduler.runningRun.mode : "Idle"}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Deployment readiness</p>
              <h2 className="mt-3 text-2xl font-semibold">
                {operationalStatus.deploymentReadiness.status === "ready"
                  ? "Ready for hosted cutover"
                  : operationalStatus.deploymentReadiness.status === "warning"
                    ? "Mostly ready with a few gaps"
                    : "Blocked for hosted cutover"}
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Target profile: {operationalStatus.deploymentReadiness.target}
              </p>
            </div>
            <a
              href="/api/health"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
            >
              Health endpoint
            </a>
          </div>
          {operationalStatus.deploymentReadiness.checks.some((check) => check.status !== "pass") ? (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-4">
              <p className="text-sm font-semibold text-amber-900">Remaining blockers and warnings</p>
              <div className="mt-3 space-y-2">
                {operationalStatus.deploymentReadiness.checks
                  .filter((check) => check.status !== "pass")
                  .map((check) => (
                    <p key={`summary-${check.key}`} className="text-sm text-amber-800">
                      {check.key}: {check.message}
                    </p>
                  ))}
              </div>
            </div>
          ) : null}
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {operationalStatus.deploymentReadiness.checks.map((check) => (
              <div key={check.key} className="rounded-2xl border border-stone-200 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-stone-900">{check.key}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{check.status}</p>
                </div>
                <p className="mt-2 text-sm text-stone-600">{check.message}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-white/80 p-4 text-sm text-stone-600">
            Follow the final rollout steps in <code>HOSTED_CUTOVER_CHECKLIST.md</code> before switching the hosted environment.
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Recent runs</p>
            <div className="mt-5 space-y-4">
              {operationalStatus.recentRuns.map((run) => (
                <div key={run.id} className="rounded-2xl border border-stone-200 bg-white/80 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-stone-900">{run.mode}</p>
                      <p className="mt-1 text-xs text-stone-500">
                        {run.completedAt ? new Date(run.completedAt).toLocaleString() : "Pending"}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{run.status}</p>
                  </div>
                  <p className="mt-3 text-sm text-stone-700">
                    {run.articleCount} ingested • {run.dedupedCount} deduped • {run.clusterCount} clusters
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {run.sourceFetches.map((fetch) => (
                      <div key={`${run.id}-${fetch.sourceName}`} className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-medium text-stone-900">{fetch.sourceName}</p>
                          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{fetch.status}</p>
                        </div>
                        <p className="mt-2 text-xs text-stone-600">
                          {fetch.articleCount} items • {fetch.latencyMs}ms
                        </p>
                        {fetch.errorMessage ? <p className="mt-2 text-xs text-amber-700">{fetch.errorMessage}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_80px_rgba(82,57,23,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Source health</p>
            <div className="mt-5 space-y-4">
              {operationalStatus.sourceHealth.map((source) => (
                <div key={source.sourceName} className="rounded-2xl bg-white/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-stone-900">{source.sourceName}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{source.lastStatus}</p>
                  </div>
                  <p className="mt-2 text-xs text-stone-600">
                    {(source.successRate * 100).toFixed(0)}% healthy • avg {source.averageLatencyMs}ms
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {source.fallbackCount} fallback • {source.failureCount} failed
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {source.lastCompletedAt ? `Last update ${new Date(source.lastCompletedAt).toLocaleString()}` : "No recent update"}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
