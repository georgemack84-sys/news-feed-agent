import { ensureDefaultUser, ensureUserPreferences } from "../lib/db/queries";

async function main() {
  const user = await ensureDefaultUser();
  await ensureUserPreferences(user.id);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
