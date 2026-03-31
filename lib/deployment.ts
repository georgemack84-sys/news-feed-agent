import type { DeploymentReadiness, DeploymentReadinessCheck } from "@/lib/types";

function pushCheck(
  checks: DeploymentReadinessCheck[],
  key: string,
  status: "pass" | "warn" | "fail",
  message: string,
) {
  checks.push({ key, status, message });
}

function hasValue(value: string | undefined) {
  return Boolean(value?.trim());
}

export function getDeploymentReadiness(): DeploymentReadiness {
  const checks: DeploymentReadinessCheck[] = [];
  const databaseUrl = process.env.DATABASE_URL?.trim() ?? "";
  const target = process.env.VERCEL ? "vercel" : "custom";

  if (!databaseUrl) {
    pushCheck(checks, "database_url", "fail", "DATABASE_URL is missing.");
  } else if (databaseUrl.startsWith("file:")) {
    pushCheck(checks, "database_url", "fail", "DATABASE_URL still points to SQLite. Hosted deployment should use Postgres.");
  } else if (databaseUrl.startsWith("postgresql://") || databaseUrl.startsWith("postgres://")) {
    pushCheck(checks, "database_url", "pass", "DATABASE_URL points to Postgres.");
  } else {
    pushCheck(checks, "database_url", "warn", "DATABASE_URL is set, but the scheme is not recognized as Postgres.");
  }

  if (hasValue(process.env.OPENAI_API_KEY)) {
    pushCheck(checks, "openai_api_key", "pass", "OpenAI API key is configured.");
  } else {
    pushCheck(checks, "openai_api_key", "warn", "OpenAI API key is missing. The app will fall back to rule-based summaries.");
  }

  if (hasValue(process.env.CRON_SECRET)) {
    pushCheck(checks, "cron_secret", "pass", "CRON_SECRET is configured.");
  } else {
    pushCheck(checks, "cron_secret", "fail", "CRON_SECRET is missing. Scheduled refreshes cannot be protected.");
  }

  if (hasValue(process.env.AUTH_USERNAME) && hasValue(process.env.AUTH_PASSWORD) && hasValue(process.env.AUTH_DISPLAY_NAME)) {
    pushCheck(checks, "internal_auth", "pass", "Internal auth credentials are configured.");
  } else {
    pushCheck(checks, "internal_auth", "fail", "Internal auth credentials are incomplete.");
  }

  if (hasValue(process.env.OPS_ALERT_WEBHOOK_URL)) {
    pushCheck(
      checks,
      "ops_alerts",
      "pass",
      `Ops alert webhook is configured (${process.env.OPS_ALERT_PROVIDER?.trim() || "auto"} provider).`,
    );
  } else {
    pushCheck(checks, "ops_alerts", "warn", "Ops alert webhook is not configured.");
  }

  if (hasValue(process.env.REFRESH_INTERVAL_MINUTES) && hasValue(process.env.RUN_LOCK_WINDOW_MINUTES) && hasValue(process.env.STALE_RUN_MINUTES)) {
    pushCheck(checks, "scheduler_config", "pass", "Scheduler timing variables are configured.");
  } else {
    pushCheck(checks, "scheduler_config", "warn", "Scheduler timing values are relying on defaults.");
  }

  if (target === "vercel") {
    pushCheck(checks, "hosting_target", "pass", "Vercel runtime detected.");
  } else {
    pushCheck(checks, "hosting_target", "warn", "Non-Vercel runtime detected. Confirm your host can trigger scheduled refreshes.");
  }

  const hasFail = checks.some((check) => check.status === "fail");
  const hasWarn = checks.some((check) => check.status === "warn");

  return {
    status: hasFail ? "blocked" : hasWarn ? "warning" : "ready",
    target,
    checks,
  };
}
