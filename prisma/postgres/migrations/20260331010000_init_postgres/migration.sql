CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lastIngestionRunId" TEXT,
    "sourceName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "canonicalUrl" TEXT,
    "publishedAt" TIMESTAMP(3),
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "summary" TEXT,
    "contentSnippet" TEXT,
    "imageUrl" TEXT,
    "topicCandidates" TEXT NOT NULL,
    "hashTitle" TEXT NOT NULL,
    "hashContent" TEXT NOT NULL,
    "rankingScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "changeStatus" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Cluster" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lastIngestionRunId" TEXT,
    "key" TEXT NOT NULL,
    "contentFingerprint" TEXT,
    "headline" TEXT,
    "summary" TEXT,
    "whyItMatters" TEXT,
    "whyRelevant" TEXT,
    "summarySource" TEXT NOT NULL DEFAULT 'rule',
    "summaryModel" TEXT,
    "tags" TEXT NOT NULL,
    "representativeTitle" TEXT,
    "representativeUrl" TEXT,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sourceWeight" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "novelty" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "freshness" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "topicRelevance" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "changeStatus" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cluster_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ClusterArticle" (
    "clusterId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ClusterArticle_pkey" PRIMARY KEY ("clusterId","articleId")
);

CREATE TABLE "Preference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "mutedTopics" TEXT NOT NULL,
    "tone" TEXT NOT NULL DEFAULT 'brief',
    "useRemoteRss" BOOLEAN NOT NULL DEFAULT true,
    "useOpenAiSummaries" BOOLEAN NOT NULL DEFAULT false,
    "sourceWeights" TEXT NOT NULL,
    "rankingWeights" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "FeedSnapshot" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "snapshotAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clusterIds" TEXT NOT NULL,

    CONSTRAINT "FeedSnapshot_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Interaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "articleId" TEXT,
    "clusterId" TEXT,
    "metadata" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "IngestionRun" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'running',
    "mode" TEXT NOT NULL,
    "articleCount" INTEGER NOT NULL DEFAULT 0,
    "dedupedCount" INTEGER NOT NULL DEFAULT 0,
    "clusterCount" INTEGER NOT NULL DEFAULT 0,
    "clusterState" TEXT NOT NULL DEFAULT '{}',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestionRun_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SourceFetch" (
    "id" TEXT NOT NULL,
    "ingestionRunId" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "articleCount" INTEGER NOT NULL DEFAULT 0,
    "latencyMs" INTEGER NOT NULL,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SourceFetch_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Article_userId_url_key" ON "Article"("userId", "url");
CREATE INDEX "Article_canonicalUrl_idx" ON "Article"("canonicalUrl");
CREATE INDEX "Article_publishedAt_idx" ON "Article"("publishedAt");
CREATE INDEX "Article_hashTitle_idx" ON "Article"("hashTitle");
CREATE INDEX "Article_hashContent_idx" ON "Article"("hashContent");
CREATE INDEX "Article_userId_idx" ON "Article"("userId");
CREATE INDEX "Article_lastIngestionRunId_idx" ON "Article"("lastIngestionRunId");

CREATE UNIQUE INDEX "Cluster_userId_key_key" ON "Cluster"("userId", "key");
CREATE INDEX "Cluster_userId_idx" ON "Cluster"("userId");
CREATE INDEX "Cluster_lastIngestionRunId_idx" ON "Cluster"("lastIngestionRunId");

CREATE UNIQUE INDEX "Preference_userId_key" ON "Preference"("userId");
CREATE INDEX "FeedSnapshot_userId_idx" ON "FeedSnapshot"("userId");
CREATE INDEX "Interaction_userId_idx" ON "Interaction"("userId");
CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");
CREATE INDEX "IngestionRun_userId_createdAt_idx" ON "IngestionRun"("userId", "createdAt");
CREATE INDEX "IngestionRun_status_idx" ON "IngestionRun"("status");
CREATE INDEX "SourceFetch_ingestionRunId_idx" ON "SourceFetch"("ingestionRunId");
CREATE INDEX "SourceFetch_sourceName_createdAt_idx" ON "SourceFetch"("sourceName", "createdAt");

ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Article" ADD CONSTRAINT "Article_lastIngestionRunId_fkey" FOREIGN KEY ("lastIngestionRunId") REFERENCES "IngestionRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Cluster" ADD CONSTRAINT "Cluster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Cluster" ADD CONSTRAINT "Cluster_lastIngestionRunId_fkey" FOREIGN KEY ("lastIngestionRunId") REFERENCES "IngestionRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ClusterArticle" ADD CONSTRAINT "ClusterArticle_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "Cluster"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ClusterArticle" ADD CONSTRAINT "ClusterArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FeedSnapshot" ADD CONSTRAINT "FeedSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "IngestionRun" ADD CONSTRAINT "IngestionRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SourceFetch" ADD CONSTRAINT "SourceFetch_ingestionRunId_fkey" FOREIGN KEY ("ingestionRunId") REFERENCES "IngestionRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;
