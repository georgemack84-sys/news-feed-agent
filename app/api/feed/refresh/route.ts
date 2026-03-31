import { NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { logError, logEvent } from "@/lib/observability";
import { refreshFeedPipeline } from "@/lib/pipeline";

export async function POST() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await refreshFeedPipeline(user.id);
    logEvent({
      level: "info",
      event: "api.feed.refresh",
      message: "Manual refresh completed",
      context: {
        userId: user.id,
        runId: result.runId,
        skipped: result.skipped ?? false,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    logError("api.feed.refresh_failed", "Manual refresh route failed", error, {
      userId: user.id,
    });
    return NextResponse.json({ error: "Refresh failed" }, { status: 500 });
  }
}
