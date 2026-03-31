const DEFAULT_REFRESH_INTERVAL_MINUTES = 180;
const RUN_LOCK_WINDOW_MINUTES = 15;
const STALE_RUN_MINUTES = 30;

function parsePositiveInteger(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function getRefreshIntervalMinutes() {
  return parsePositiveInteger(process.env.REFRESH_INTERVAL_MINUTES, DEFAULT_REFRESH_INTERVAL_MINUTES);
}

export function getRunLockWindowMinutes() {
  return parsePositiveInteger(process.env.RUN_LOCK_WINDOW_MINUTES, RUN_LOCK_WINDOW_MINUTES);
}

export function getStaleRunMinutes() {
  return parsePositiveInteger(process.env.STALE_RUN_MINUTES, STALE_RUN_MINUTES);
}

export function getSchedulerSecret() {
  return process.env.CRON_SECRET?.trim() || "";
}

export function isScheduledRefreshAuthorized(requestSecret: string | null) {
  const expectedSecret = getSchedulerSecret();
  return Boolean(expectedSecret) && Boolean(requestSecret) && expectedSecret === requestSecret;
}

export function computeNextRefreshAt(completedAt: Date | null) {
  if (!completedAt) {
    return null;
  }

  return new Date(completedAt.getTime() + getRefreshIntervalMinutes() * 60 * 1000);
}
