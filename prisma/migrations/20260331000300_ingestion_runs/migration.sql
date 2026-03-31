CREATE TABLE "IngestionRun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'running',
    "mode" TEXT NOT NULL,
    "articleCount" INTEGER NOT NULL DEFAULT 0,
    "dedupedCount" INTEGER NOT NULL DEFAULT 0,
    "clusterCount" INTEGER NOT NULL DEFAULT 0,
    "clusterState" TEXT NOT NULL DEFAULT '{}',
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "IngestionRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "IngestionRun_userId_createdAt_idx" ON "IngestionRun"("userId", "createdAt");
CREATE INDEX "IngestionRun_status_idx" ON "IngestionRun"("status");

ALTER TABLE "Article" ADD COLUMN "lastIngestionRunId" TEXT;
ALTER TABLE "Cluster" ADD COLUMN "lastIngestionRunId" TEXT;

CREATE INDEX "Article_lastIngestionRunId_idx" ON "Article"("lastIngestionRunId");
CREATE INDEX "Cluster_lastIngestionRunId_idx" ON "Cluster"("lastIngestionRunId");
