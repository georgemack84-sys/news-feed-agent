"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("Feed is ready");

  async function refreshFeed() {
    setMessage("Refreshing feed...");
    const response = await fetch("/api/feed/refresh", { method: "POST" });
    const data = await response.json();
    setMessage(`Refreshed ${data.clusters ?? 0} clusters`);
    startTransition(() => router.refresh());
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--panel)] px-6 py-5 shadow-[0_30px_100px_rgba(82,57,23,0.08)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Personalized brief</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">news-feed-agent</h1>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-stone-600">
            <a href="/" className="rounded-full bg-white/80 px-3 py-1 transition hover:bg-white">Feed</a>
            <a href="/preferences" className="rounded-full bg-white/80 px-3 py-1 transition hover:bg-white">Settings</a>
            <a href="/ops" className="rounded-full bg-white/80 px-3 py-1 transition hover:bg-white">Ops</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-stone-600">{message}</p>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
          >
            Sign out
          </button>
          <button
            type="button"
            onClick={refreshFeed}
            disabled={pending}
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Refreshing..." : "Refresh feed"}
          </button>
        </div>
      </div>
    </header>
  );
}
