# PR Title

Build news-feed-agent v1 foundation

## Summary

This PR turns `news-feed-agent` from a working prototype into a strong internal-v1 foundation for a single-user AI news briefing product.

It includes:

- authenticated single-user experience
- user-scoped preferences and feed state
- incremental ingestion runs instead of destructive refreshes
- RSS ingestion, deduplication, clustering, ranking, and change tracking
- OpenAI-backed summaries with caching and rule-based resilience
- scheduler-safe refreshes with locking and stale-run handling
- operational visibility through `/ops` and `/api/health`
- deployment wiring for Vercel-style scheduled refreshes
- structured logs, alert hooks, and deployment-readiness checks

## Major changes

### Product and UX

- Added login flow and protected routes
- Reworked the homepage into a usable briefing dashboard
- Added a real settings editor for topics, source weights, ranking weights, and runtime controls
- Added an operations view for run history, source health, alerts, and deployment readiness

### Data and pipeline

- Added user-owned Prisma models and migrations
- Introduced `IngestionRun` and `SourceFetch`
- Refactored refreshes to persist incrementally by run
- Added cluster summary fingerprinting and summary cache reuse
- Added source-health rollups and recent-run status aggregation

### Scheduling and operations

- Added `/api/feed/scheduled-refresh` with `CRON_SECRET` protection
- Added refresh locking and stale-run cleanup behavior
- Added `/api/health` for deployment checks
- Added structured JSON logging and optional webhook alerting
- Added Slack-ready alert payload support and in-app test alerts
- Added deployment-readiness validation via `npm run deploy:check`

### Deployment prep

- Added Vercel cron config in `vercel.json`
- Added Postgres migration profile and seed path
- Added deployment docs and hosted cutover checklist

## Verification

Verified during implementation:

- production build passes
- authenticated feed loads and renders
- live RSS refresh succeeds
- scheduled refresh rejects unauthorized calls and succeeds with `CRON_SECRET`
- concurrent scheduled refreshes are lock-protected
- `/api/health` reports healthy state
- `/ops` shows recent runs, source health, alerts, and deployment readiness
- `npm run deploy:check` correctly reports the current environment as blocked for hosted cutover because it still uses SQLite locally

## Remaining blockers for hosted deployment

- switch runtime `DATABASE_URL` to Postgres
- configure a real `OPS_ALERT_WEBHOOK_URL`
- deploy on the intended host and allow scheduled refreshes to run there

## Notes

- Current branch: `codex/news-feed-agent-v1-foundation`
- Current commit: `8f6746f`
