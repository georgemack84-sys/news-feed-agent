import "dotenv/config";

import { getDeploymentReadiness } from "@/lib/deployment";

const readiness = getDeploymentReadiness();

console.log(`Deployment readiness: ${readiness.status} (${readiness.target})`);

for (const check of readiness.checks) {
  console.log(`[${check.status.toUpperCase()}] ${check.key}: ${check.message}`);
}

if (readiness.status === "blocked") {
  process.exit(1);
}
