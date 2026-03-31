ALTER TABLE "Cluster" ADD COLUMN "contentFingerprint" TEXT;
ALTER TABLE "Cluster" ADD COLUMN "summarySource" TEXT NOT NULL DEFAULT 'rule';
ALTER TABLE "Cluster" ADD COLUMN "summaryModel" TEXT;
