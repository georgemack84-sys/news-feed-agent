import { NextResponse } from "next/server";

import { getOperationalStatusForDefaultUser } from "@/lib/db/queries";
import { logEvent } from "@/lib/observability";

export async function GET() {
  const operationalStatus = await getOperationalStatusForDefaultUser();
  const latestRun = operationalStatus.latestRun;
  const scheduler = operationalStatus.scheduler;
  const now = Date.now();

  let status: "healthy" | "degraded" = "healthy";
  const issues: string[] = [];

  if (!latestRun?.completedAt) {
    status = "degraded";
    issues.push("no_completed_refresh");
  } else {
    const ageMinutes = Math.round((now - new Date(latestRun.completedAt).getTime()) / (1000 * 60));
    if (ageMinutes > scheduler.intervalMinutes + scheduler.lockWindowMinutes) {
      status = "degraded";
      issues.push("refresh_overdue");
    }
  }

  if (scheduler.runningRun) {
    const runningAgeMinutes = Math.round((now - new Date(scheduler.runningRun.startedAt).getTime()) / (1000 * 60));
    if (runningAgeMinutes > scheduler.staleRunMinutes) {
      status = "degraded";
      issues.push("stale_running_refresh");
    }
  }

  if (operationalStatus.sourceHealth.some((source) => source.failureCount > 0 && source.lastStatus === "failed")) {
    status = "degraded";
    issues.push("source_failures_present");
  }

  if (status === "degraded") {
    logEvent({
      level: "warn",
      event: "api.health.degraded",
      message: "Health endpoint detected a degraded application state",
      context: {
        issues,
        latestRunId: latestRun?.id ?? null,
      },
    });
  }

  return NextResponse.json(
    {
      status,
      issues,
      checkedAt: new Date().toISOString(),
      latestRun: latestRun
        ? {
            id: latestRun.id,
            completedAt: latestRun.completedAt,
            clusterCount: latestRun.clusterCount,
            articleCount: latestRun.articleCount,
          }
        : null,
      scheduler,
      sources: operationalStatus.sourceHealth,
    },
    { status: status === "healthy" ? 200 : 503 },
  );
}
