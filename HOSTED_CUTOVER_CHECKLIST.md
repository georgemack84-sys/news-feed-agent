# Hosted Cutover Checklist

Use this when moving `news-feed-agent` from local internal use to a hosted internal deployment.

## 1. Database

- Provision a Postgres database.
- Set `DATABASE_URL` to the hosted Postgres connection string.
- Confirm `npm run deploy:check` no longer reports the SQLite blocker.
- Apply Prisma migrations to the hosted database.
- Seed the internal user record.

## 2. App secrets

- Set `AUTH_USERNAME`
- Set `AUTH_PASSWORD`
- Set `AUTH_DISPLAY_NAME`
- Set `CRON_SECRET`
- Set `OPENAI_API_KEY`
- Set `OPENAI_MODEL`

## 3. Scheduler

- Confirm the deployment platform supports scheduled requests.
- Confirm `/api/feed/scheduled-refresh` is reachable in production.
- Confirm the platform sends `Authorization: Bearer <CRON_SECRET>`.
- Review `vercel.json` and adjust the cron schedule if needed.
- Confirm the first scheduled refresh creates a completed `IngestionRun`.

## 4. Monitoring

- Set `OPS_ALERT_WEBHOOK_URL`
- Set `OPS_ALERT_PROVIDER` to `slack` if using Slack incoming webhooks.
- Open `/ops` after deploy.
- Use `Send test alert`.
- Confirm `/api/health` returns `200`.

## 5. Product validation

- Sign in with the hosted internal account.
- Trigger one manual refresh.
- Confirm the main feed renders real articles.
- Confirm summaries are generated as expected.
- Confirm `/ops` shows recent runs and source health.

## 6. Final green-light

The hosted cutover is ready when:

- `npm run deploy:check` is no longer blocked
- `/api/health` is healthy
- `/ops` shows recent completed runs
- alert delivery is configured and tested
- scheduled refreshes are running successfully
