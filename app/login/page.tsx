import { redirect } from "next/navigation";

import { LoginForm } from "@/components/LoginForm";
import { getAuthenticatedUser } from "@/lib/auth";
import { getInternalAuthConfig } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const user = await getAuthenticatedUser();
  if (user) {
    redirect("/");
  }

  const authConfig = getInternalAuthConfig();

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Internal briefing login</p>
      <h1 className="mt-3 text-4xl font-semibold">news-feed-agent</h1>
      <p className="mt-4 text-base leading-7 text-stone-700">
        Sign in with your internal credentials to access your personalized briefing and saved feed state.
      </p>
      <LoginForm defaultUsername={authConfig.username} />
    </main>
  );
}
