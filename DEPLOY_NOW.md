# Deploy Now

Use this checklist to take `news-feed-agent` from the merged `main` branch to a hosted internal deployment.

## Current status

As of the latest local verification on `main`:

- `DATABASE_URL` is Postgres in local development
- Prisma Postgres migrations and seed flow work
- `npm run deploy:check` reports `warning`, not `blocked`
- remaining warnings are:
  - `OPS_ALERT_WEBHOOK_URL` is not configured
  - hosting target has not been finalized

## 1. Provision hosted Postgres

- Create a hosted Postgres database
- Copy the production connection string
- Set production `DATABASE_URL`

Recommended shape:

```text
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```

## 2. Set production environment variables

Set these in your hosting platform:

```text
DATABASE_URL=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
AUTH_USERNAME=owner
AUTH_PASSWORD=readar-demo
AUTH_DISPLAY_NAME=ReadAR Owner
CRON_SECRET=
OPS_ALERT_PROVIDER=slack
OPS_ALERT_WEBHOOK_URL=
REFRESH_INTERVAL_MINUTES=180
RUN_LOCK_WINDOW_MINUTES=15
STALE_RUN_MINUTES=30
```

## 3. Run production database setup

Run these against the production database:

```bash
npm run db:generate:postgres
npm run db:migrate:postgres
npm run db:seed:postgres
```

## 4. Deploy the app

Recommended target: Vercel

Why:

- `vercel.json` is already present
- `/api/feed/scheduled-refresh` already matches the Vercel cron pattern
- `/api/health` is already available for monitoring

## 5. Verify production after deploy

Check these first:

1. `/login` loads
2. `/api/health` returns `healthy`
3. `/ops` loads after sign-in
4. manual refresh succeeds
5. a completed `IngestionRun` appears
6. source health appears in `/ops`

## 6. Verify scheduled refresh

- Confirm the cron job is enabled
- Confirm the platform sends `Authorization: Bearer <CRON_SECRET>`
- Confirm `/api/feed/scheduled-refresh` is being hit in production
- Confirm scheduled runs appear in `/ops`

## 7. Verify alerting

- Set `OPS_ALERT_WEBHOOK_URL`
- Open `/ops`
- Use `Send test alert`
- Confirm the alert is delivered

## 8. Final green light

Production is ready when:

- `/api/health` is healthy
- `/ops` shows successful recent runs
- scheduled refresh is working
- alert delivery is tested
- OpenAI summaries are working with the production key
