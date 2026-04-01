## Summary

This PR completes the local Postgres runtime cutover path for `news-feed-agent`.

It builds on the internal-v1 foundation branch by:

- adding runtime Prisma client switching based on `DATABASE_URL`
- proving the app against a real local Postgres database
- correcting the Postgres cutover instructions and command flow
- keeping the SQLite backup artifact out of git

## What changed

- Added runtime Postgres client selection in `lib/db/client.ts`
- Updated auth, pipeline, interactions, and refresh paths to use the shared runtime client
- Corrected the Postgres switch helper to use:
  - `npm run db:generate:postgres`
  - `npm run db:migrate:postgres`
  - `npm run db:seed:postgres`
- Updated hosted cutover docs in:
  - `README.md`
  - `HOSTED_CUTOVER_CHECKLIST.md`
- Ignored `.env.sqlite.backup` in `.gitignore`

## Local verification

Verified on March 31, 2026 / April 1, 2026 local session:

- local dedicated Postgres container started on `localhost:5433`
- `.env` switched to Postgres runtime URL
- `npm run db:generate:postgres` passed
- `npm run db:migrate:postgres` passed
- `npm run db:seed:postgres` passed
- `npm run feed:refresh` passed with live RSS
- app launched successfully at `http://localhost:5050`
- `GET /login` returned `200`
- `GET /api/health` returned `healthy`

## Remaining hosted work

- provision hosted Postgres and set production `DATABASE_URL`
- set `OPS_ALERT_WEBHOOK_URL`
- deploy to the target host
- confirm scheduled refresh in production

## Suggested title

`Complete Postgres runtime cutover path`
