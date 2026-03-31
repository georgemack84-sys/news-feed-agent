CREATE TABLE "SourceFetch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ingestionRunId" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "articleCount" INTEGER NOT NULL DEFAULT 0,
    "latencyMs" INTEGER NOT NULL,
    "errorMessage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SourceFetch_ingestionRunId_fkey" FOREIGN KEY ("ingestionRunId") REFERENCES "IngestionRun" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "SourceFetch_ingestionRunId_idx" ON "SourceFetch"("ingestionRunId");
CREATE INDEX "SourceFetch_sourceName_createdAt_idx" ON "SourceFetch"("sourceName", "createdAt");
