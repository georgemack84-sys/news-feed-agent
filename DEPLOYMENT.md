# Deployment Guide

## Recommended target

This project is now wired for a straightforward Vercel deployment with:

- Next.js App Router hosting
- scheduled refresh via `vercel.json`
- `CRON_SECRET` protection on `/api/feed/scheduled-refresh`
- `/api/health` for uptime checks

## Required production environment variables

- `DATABASE_URL`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `AUTH_USERNAME`
- `AUTH_PASSWORD`
- `AUTH_DISPLAY_NAME`
- `CRON_SECRET`
- `OPS_ALERT_WEBHOOK_URL` (optional, but recommended)
- `OPS_ALERT_PROVIDER` (`generic` or `slack`)
- `REFRESH_INTERVAL_MINUTES`
- `RUN_LOCK_WINDOW_MINUTES`
- `STALE_RUN_MINUTES`

## Vercel cron behavior

- Vercel cron jobs call the production deployment URL, not localhost.
- The configured path is `/api/feed/scheduled-refresh`.
- The route accepts `GET` and `POST`, but Vercel cron uses `GET`.
- `CRON_SECRET` is expected as a bearer authorization token.

## Included schedule

`vercel.json` currently schedules:

- `0 11 * * *`

That is a once-daily run at `11:00 UTC`.

This default was chosen because:

- it works on Vercel Hobby plans, which only allow daily cron jobs
- it is a reasonable morning briefing time for a US-based workflow

If you deploy on Vercel Pro, you can tighten the schedule to run more often.

## Suggested production checklist

1. Provision Postgres and set `DATABASE_URL`.
2. Set all required env vars in the deployment platform.
3. Run Prisma migrations against production.
4. Seed the single internal user.
5. Deploy the app.
6. Confirm `/api/health` returns `200`.
7. Confirm the first scheduled refresh reaches `/api/feed/scheduled-refresh`.
8. Use `/ops` to inspect run history and source health after deployment.
9. If using alerts, confirm the webhook receives a test failure notification.

Before deploy, you can also run:

```bash
npm run deploy:check
```

This prints a readiness summary and exits non-zero if the current environment is blocked for hosted deployment.

## Structured logging

The app now emits JSON logs for:

- refresh started / completed / failed
- scheduled refresh authorization failures
- health degradation warnings
- CLI refresh script outcomes

These logs are designed to work well with platform log drains and hosted log search.

## Optional alert hook

If `OPS_ALERT_WEBHOOK_URL` is set, the app will send a JSON POST when:

- a refresh run fails
- the scheduled refresh route fails before returning success

This is a lightweight bridge for Slack workflows, incident webhooks, or custom alert relays.

If `OPS_ALERT_PROVIDER="slack"` is set, the payload uses a Slack-friendly message format suitable for incoming webhook URLs.

## Testing alerts

After deploy, sign in and open `/ops`, then use `Send test alert` to verify the webhook end to end.

## Manual smoke test after deploy

1. Sign in.
2. Open `/ops`.
3. Trigger `POST /api/feed/refresh` once manually.
4. Confirm a completed run appears.
5. Confirm `/api/health` reports `healthy`.
