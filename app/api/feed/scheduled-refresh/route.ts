import { NextRequest, NextResponse } from "next/server";

import { ensureDefaultUser } from "@/lib/db/queries";
import { logError, logEvent, notifyOpsAlert } from "@/lib/observability";
import { refreshFeedPipeline } from "@/lib/pipeline";
import { isScheduledRefreshAuthorized } from "@/lib/scheduler";

async function handleScheduledRefresh(request: NextRequest) {
  const authorization = request.headers.get("authorization");
  const bearerToken = authorization?.startsWith("Bearer ") ? authorization.slice("Bearer ".length).trim() : null;
  const requestSecret = request.headers.get("x-cron-secret") ?? bearerToken;

  if (!isScheduledRefreshAuthorized(requestSecret)) {
    logEvent({
      level: "warn",
      event: "api.feed.scheduled_refresh_unauthorized",
      message: "Rejected scheduled refresh with missing or invalid cron secret",
    });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await ensureDefaultUser();
    const result = await refreshFeedPipeline(user.id);

    logEvent({
      level: "info",
      event: "api.feed.scheduled_refresh",
      message: "Scheduled refresh completed",
      context: {
        userId: user.id,
        runId: result.runId,
        skipped: result.skipped ?? false,
      },
    });

    return NextResponse.json({
      trigger: "scheduled",
      ...result,
    });
  } catch (error) {
    logError("api.feed.scheduled_refresh_failed", "Scheduled refresh route failed", error);
    await notifyOpsAlert({
      event: "scheduled_refresh.failed",
      severity: "critical",
      summary: "Scheduled refresh endpoint failed",
    });
    return NextResponse.json({ error: "Scheduled refresh failed" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return handleScheduledRefresh(request);
}

export async function POST(request: NextRequest) {
  return handleScheduledRefresh(request);
}
