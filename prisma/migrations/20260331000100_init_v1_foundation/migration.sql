CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

CREATE TABLE "Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "canonicalUrl" TEXT,
    "publishedAt" DATETIME,
    "fetchedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,
    "summary" TEXT,
    "contentSnippet" TEXT,
    "imageUrl" TEXT,
    "topicCandidates" TEXT NOT NULL,
    "hashTitle" TEXT NOT NULL,
    "hashContent" TEXT NOT NULL,
    "rankingScore" REAL NOT NULL DEFAULT 0,
    "changeStatus" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Article_userId_url_key" ON "Article"("userId", "url");
CREATE INDEX "Article_canonicalUrl_idx" ON "Article"("canonicalUrl");
CREATE INDEX "Article_publishedAt_idx" ON "Article"("publishedAt");
CREATE INDEX "Article_hashTitle_idx" ON "Article"("hashTitle");
CREATE INDEX "Article_hashContent_idx" ON "Article"("hashContent");
CREATE INDEX "Article_userId_idx" ON "Article"("userId");

CREATE TABLE "Cluster" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "headline" TEXT,
    "summary" TEXT,
    "whyItMatters" TEXT,
    "whyRelevant" TEXT,
    "tags" TEXT NOT NULL,
    "representativeTitle" TEXT,
    "representativeUrl" TEXT,
    "score" REAL NOT NULL DEFAULT 0,
    "sourceWeight" REAL NOT NULL DEFAULT 0.5,
    "novelty" REAL NOT NULL DEFAULT 0.5,
    "freshness" REAL NOT NULL DEFAULT 0.5,
    "topicRelevance" REAL NOT NULL DEFAULT 0.5,
    "changeStatus" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Cluster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Cluster_userId_key_key" ON "Cluster"("userId", "key");
CREATE INDEX "Cluster_userId_idx" ON "Cluster"("userId");

CREATE TABLE "ClusterArticle" (
    "clusterId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY ("clusterId", "articleId"),
    CONSTRAINT "ClusterArticle_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "Cluster" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ClusterArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "Preference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "mutedTopics" TEXT NOT NULL,
    "tone" TEXT NOT NULL DEFAULT 'brief',
    "sourceWeights" TEXT NOT NULL,
    "rankingWeights" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Preference_userId_key" ON "Preference"("userId");

CREATE TABLE "FeedSnapshot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "snapshotAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clusterIds" TEXT NOT NULL,
    CONSTRAINT "FeedSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "FeedSnapshot_userId_idx" ON "FeedSnapshot"("userId");

CREATE TABLE "Interaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "articleId" TEXT,
    "clusterId" TEXT,
    "metadata" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "Interaction_userId_idx" ON "Interaction"("userId");

CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");
