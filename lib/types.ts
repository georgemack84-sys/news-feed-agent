export type TopicWeights = {
  topicRelevance: number;
  freshness: number;
  sourceWeight: number;
  novelty: number;
};

export type PreferenceInput = {
  topics: string[];
  mutedTopics: string[];
  tone: string;
  sourceWeights: Record<string, number>;
  rankingWeights: TopicWeights;
  useRemoteRss: boolean;
  useOpenAiSummaries: boolean;
};

export type NormalizedArticleInput = {
  sourceName: string;
  sourceUrl: string;
  title: string;
  url: string;
  canonicalUrl: string | null;
  publishedAt: Date | null;
  author: string | null;
  summary: string | null;
  contentSnippet: string | null;
  imageUrl: string | null;
  topicCandidates: string[];
  hashTitle: string;
  hashContent: string;
};

export type RankedCluster = {
  id: string;
  key: string;
  headline: string;
  summary: string;
  whyItMatters: string;
  whyRelevant: string;
  tags: string[];
  score: number;
  freshness: number;
  novelty: number;
  sourceWeight: number;
  topicRelevance: number;
  changeStatus: "new" | "updated" | "unchanged";
  articles: Array<{
    id: string;
    title: string;
    url: string;
    sourceName: string;
    publishedAt: string | null;
  }>;
};

export type FeedResponse = {
  generatedAt: string;
  preferences: PreferenceInput;
  items: RankedCluster[];
};

export type SourceFetchStatus = {
  sourceName: string;
  sourceUrl: string;
  mode: string;
  status: string;
  articleCount: number;
  latencyMs: number;
  errorMessage: string | null;
};

export type RunStatus = {
  id: string;
  mode: string;
  status: string;
  articleCount: number;
  dedupedCount: number;
  clusterCount: number;
  completedAt: string | null;
  sourceFetches: SourceFetchStatus[];
};

export type SourceHealth = {
  sourceName: string;
  successRate: number;
  fallbackCount: number;
  failureCount: number;
  averageLatencyMs: number;
  lastStatus: string;
  lastCompletedAt: string | null;
};

export type OperationalStatus = {
  latestRun: RunStatus | null;
  recentRuns: RunStatus[];
  sourceHealth: SourceHealth[];
  scheduler: SchedulerStatus;
  deploymentReadiness: DeploymentReadiness;
};

export type SchedulerStatus = {
  intervalMinutes: number;
  lockWindowMinutes: number;
  staleRunMinutes: number;
  nextRefreshAt: string | null;
  runningRun: {
    id: string;
    startedAt: string;
    mode: string;
  } | null;
};

export type DeploymentReadinessCheck = {
  key: string;
  status: "pass" | "warn" | "fail";
  message: string;
};

export type DeploymentReadiness = {
  status: "ready" | "warning" | "blocked";
  target: string;
  checks: DeploymentReadinessCheck[];
};

export type ClusterSummary = {
  headline: string;
  summary: string;
  whyItMatters: string;
  whyRelevant: string;
  tags: string[];
};

export type SummaryResult = ClusterSummary & {
  source: "openai" | "rule" | "cache";
  model: string | null;
};
