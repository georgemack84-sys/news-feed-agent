export const defaultRankingWeights = {
  topicRelevance: 0.4,
  freshness: 0.3,
  sourceWeight: 0.2,
  novelty: 0.1,
};

export const defaultPreferences = {
  topics: ["technology", "world", "ai"],
  mutedTopics: [],
  tone: "brief",
  useRemoteRss: process.env.USE_REMOTE_RSS === "true",
  useOpenAiSummaries:
    process.env.USE_OPENAI_SUMMARIES !== "false" && Boolean(process.env.OPENAI_API_KEY?.trim()),
  sourceWeights: {
    "BBC World": 0.9,
    "NPR News": 0.85,
    "The Verge": 0.8,
    TechCrunch: 0.75,
  },
  rankingWeights: defaultRankingWeights,
};
