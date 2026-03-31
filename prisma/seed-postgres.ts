import { PrismaClient } from "../lib/generated/postgres";
import { defaultPreferences } from "../lib/db/schema";
import { getInternalAuthConfig, hashSecret } from "../lib/db/queries";

const prisma = new PrismaClient();

async function main() {
  const config = getInternalAuthConfig();

  const user = await prisma.user.upsert({
    where: { username: config.username },
    update: {
      displayName: config.displayName,
      passwordHash: hashSecret(config.password),
    },
    create: {
      username: config.username,
      displayName: config.displayName,
      passwordHash: hashSecret(config.password),
    },
  });

  await prisma.preference.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      topics: JSON.stringify(defaultPreferences.topics),
      mutedTopics: JSON.stringify(defaultPreferences.mutedTopics),
      tone: defaultPreferences.tone,
      useRemoteRss: defaultPreferences.useRemoteRss,
      useOpenAiSummaries: defaultPreferences.useOpenAiSummaries,
      sourceWeights: JSON.stringify(defaultPreferences.sourceWeights),
      rankingWeights: JSON.stringify(defaultPreferences.rankingWeights),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
