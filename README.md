# news-feed-agent

A production-style personalized news briefing agent built with Next.js App Router, TypeScript, Tailwind CSS, Route Handlers, Prisma, RSS ingestion, and OpenAI-powered summaries with a rule-based resilience path.

## Features

- RSS ingestion from configurable feeds in `data/sources.json`
- Article normalization with canonical URL cleanup and token hashing
- Exact and near-duplicate detection using pure TypeScript Jaccard similarity
- Lightweight clustering, ranking, and change tracking snapshots
- Personalized summaries with OpenAI JSON output validation and rule-based fallback
- Dashboard with preferences sidebar, main feed, and side rail highlights

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and update as needed.
   Live RSS is enabled by default. If a feed is slow or unavailable, the app falls back to bundled RSS fixtures.
   OpenAI summaries can be enabled with `USE_OPENAI_SUMMARIES="true"` and a valid `OPENAI_API_KEY`.
   Internal auth is enabled with `AUTH_USERNAME`, `AUTH_PASSWORD`, and `AUTH_DISPLAY_NAME`.
   Runtime feed mode and AI summary mode are now stored in the signed-in user's saved preferences.

3. Initialize the default local SQLite database:

   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

   This project now uses Prisma migrations instead of the previous ad hoc SQLite bootstrap.
   The repo also includes a Postgres migration profile for production-style environments.

## Postgres profile

The main app still defaults to SQLite for local convenience, but a Postgres cutover path is now included in the repo:

- `docker-compose.yml` provisions a local Postgres 16 instance
- `.env.postgres.example` contains the matching local connection string
- `prisma/postgres/schema.prisma` defines the Postgres datasource and generated client
- `prisma/postgres/migrations/...` contains a baseline migration for the current schema
- `prisma/seed-postgres.ts` seeds the single-user auth account and default preferences

Suggested local Postgres flow:

1. Start Postgres:

   ```bash
   docker compose up -d postgres
   ```

2. Copy `.env.postgres.example` to `.env` or export `DATABASE_URL` with the Postgres connection string.

3. Generate the Postgres client and apply migrations:

   ```bash
   npm run db:generate:postgres
   npm run db:migrate:postgres
   npm run db:seed:postgres
   ```

4. Restart the app so runtime Prisma connections use Postgres.

If you already have a Postgres instance and only need to switch the local runtime env, you can also run:

```bash
npm run db:switch:postgres
```

That updates `.env` with the default local Postgres connection string and saves the previous SQLite config to `.env.sqlite.backup`.
After switching, run:

```bash
npm run db:generate:postgres
npm run db:migrate:postgres
npm run db:seed:postgres
```

Notes:

- The SQLite and Postgres Prisma profiles are kept separate so the current local app can continue running during the cutover.
- Once you are ready to fully switch environments, the final cleanup step is to promote the Postgres schema to the primary Prisma schema and retire the SQLite profile.
- In this workspace, a full live switch still requires an actual Postgres service or remote Postgres connection string. The repo is prepared for that handoff, but it cannot self-provision Postgres without Docker or an installed Postgres server.

4. Refresh the feed once:

   ```bash
   npm run feed:refresh
   ```

5. Start the app:

   ```bash
   npm run dev
   ```

## API

- `GET /api/feed`
- `GET /api/health`
- `POST /api/feed/refresh`
- `POST /api/feed/scheduled-refresh`
- `POST /api/feed/rank`
- `GET /api/preferences`
- `POST /api/preferences`
- `POST /api/interactions`

## Deployment

The repo now includes a Vercel-ready deployment path:

- `vercel.json` schedules `/api/feed/scheduled-refresh`
- `/api/feed/scheduled-refresh` accepts the bearer `CRON_SECRET` pattern used by Vercel cron jobs
- `/api/health` is available for uptime probes
- `DEPLOYMENT.md` contains the production checklist

The default cron schedule is once daily at `11:00 UTC` (`0 11 * * *`), which is compatible with Vercel Hobby plan limits. If you deploy on a higher plan, you can edit `vercel.json` for more frequent refreshes.

## Notes

- If `OPENAI_API_KEY` is missing, summaries fall back to a rule-based summarizer.
- `POST /api/interactions` is intentionally lightweight and ready for the P2 learning phase.
- Advanced clustering and deeper source modeling remain intentionally lightweight in this version.
- Internal auth uses the credentials from `.env`.
- The repo is now migration-based. Use `npm run db:reset` for a clean local rebuild when the schema changes.
- Feed refreshes now create `IngestionRun` records and update the latest visible briefing incrementally instead of wiping all user content on every refresh.
- The Postgres migration track is ready, but an actual Postgres service still needs to be running before the app runtime can be switched over.
- Scheduled refreshes can call `POST /api/feed/scheduled-refresh` with either `Authorization: Bearer <CRON_SECRET>` or `x-cron-secret: <CRON_SECRET>`.
- Refresh locking is built in: overlapping refreshes within the lock window are skipped, and stale running jobs are marked failed after the stale timeout.
- `GET /api/health` exposes a lightweight health response suitable for uptime probes and deployment checks.
- For Vercel deployments, cron jobs hit the production URL with `Authorization: Bearer <CRON_SECRET>` on a `GET` request.
- Structured JSON logging is built in for refresh lifecycle events and health degradation.
- If `OPS_ALERT_WEBHOOK_URL` is configured, refresh failures can fan out to an external webhook for alerting.
- `OPS_ALERT_PROVIDER="slack"` enables Slack-friendly webhook payloads, and `/ops` now includes a protected test-alert action.
- `npm run deploy:check` validates whether the current environment is actually ready for a hosted cutover.
