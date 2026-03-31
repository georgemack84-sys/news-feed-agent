import { requireAuthenticatedUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function InteractionsPage() {
  await requireAuthenticatedUser();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-semibold">Interactions</h1>
      <p className="mt-4 text-stone-600">
        Interaction history is a P2 stub. Use `POST /api/interactions` to record events for later learning phases.
      </p>
    </main>
  );
}
