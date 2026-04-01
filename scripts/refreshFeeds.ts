import "dotenv/config";

import { prisma } from "@/lib/db/client";
import { ensureDefaultUser } from "@/lib/db/queries";
import { logError, logEvent } from "@/lib/observability";
import { refreshFeedPipeline } from "@/lib/pipeline";

ensureDefaultUser()
  .then((user) => refreshFeedPipeline(user.id))
  .then(async (result) => {
    logEvent({
      level: "info",
      event: "script.feed.refresh_complete",
      message: "CLI feed refresh completed",
      context: result,
    });
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    logError("script.feed.refresh_failed", "CLI feed refresh failed", error);
    await prisma.$disconnect();
    process.exit(1);
  });
