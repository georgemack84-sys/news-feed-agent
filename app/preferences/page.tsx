import { Sidebar } from "@/components/Sidebar";
import { requireAuthenticatedUser } from "@/lib/auth";
import { getPreferences } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function PreferencesPage() {
  const user = await requireAuthenticatedUser();
  const preferences = await getPreferences(user.id);
  const openAiKeyAvailable = Boolean(process.env.OPENAI_API_KEY?.trim());

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Settings</p>
        <h1 className="mt-3 text-3xl font-semibold">Manage your briefing profile</h1>
        <p className="mt-2 max-w-3xl text-sm text-stone-600">
          Adjust topics, source trust, ranking emphasis, and runtime behavior for your personal daily briefing.
        </p>
      </div>
      <Sidebar preferences={preferences} openAiKeyAvailable={openAiKeyAvailable} variant="page" />
    </main>
  );
}
