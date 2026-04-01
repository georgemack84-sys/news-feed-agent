param(
  [string]$DatabaseUrl = "postgresql://readar:readar@localhost:5432/news_feed_agent?schema=public"
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$envPath = Join-Path $projectRoot ".env"
$backupPath = Join-Path $projectRoot ".env.sqlite.backup"

if (!(Test-Path $envPath)) {
  Write-Error ".env was not found. Create it first from .env.example or .env.postgres.example."
  exit 1
}

$content = Get-Content -Path $envPath
$content | Set-Content -Path $backupPath

$updated = $content | ForEach-Object {
  if ($_ -match '^DATABASE_URL=') {
    'DATABASE_URL="' + $DatabaseUrl + '"'
  } else {
    $_
  }
}

$updated | Set-Content -Path $envPath

Write-Host "Updated .env with Postgres DATABASE_URL"
Write-Host "SQLite backup saved to $backupPath"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  npm run db:generate:postgres"
Write-Host "  npm run db:migrate:postgres"
Write-Host "  npm run db:seed:postgres"
Write-Host "  Restart the app runtime"
