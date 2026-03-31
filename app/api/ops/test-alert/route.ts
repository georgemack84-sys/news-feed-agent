import { NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { logEvent, notifyOpsAlert } from "@/lib/observability";

export async function POST() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const delivered = await notifyOpsAlert({
    event: "ops.test_alert",
    severity: "warning",
    summary: "Manual test alert from the operations panel",
    context: {
      triggeredBy: user.username,
    },
  });

  logEvent({
    level: delivered ? "info" : "warn",
    event: "ops.test_alert",
    message: delivered ? "Test alert sent" : "Test alert skipped or failed",
    context: {
      triggeredBy: user.username,
      delivered,
    },
  });

  return NextResponse.json({
    delivered,
    provider: process.env.OPS_ALERT_PROVIDER?.trim() || "auto",
    configured: Boolean(process.env.OPS_ALERT_WEBHOOK_URL?.trim()),
  });
}
