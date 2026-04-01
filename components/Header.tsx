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
    <header className="surface-glow rounded-[34px] border border-[color:var(--border)] bg-[color:var(--panel)] px-6 py-6 shadow-[var(--shadow)] md:px-7">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">Personalized brief</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">news-feed-agent</h1>
            <span className="rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              internal v1
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--ink-soft)] md:text-base">
            Your reading companion for smart daily briefings, fast refresh checks, and clear signals on what changed.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
            <a href="/" className="rounded-full border border-stone-200 bg-white/85 px-4 py-2 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white">Feed</a>
            <a href="/preferences" className="rounded-full border border-stone-200 bg-white/75 px-4 py-2 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white">Settings</a>
            <a href="/ops" className="rounded-full border border-stone-200 bg-white/75 px-4 py-2 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white">Ops</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:items-end">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[color:var(--ink-soft)]">
            <span className="rounded-full bg-[color:var(--teal-soft)] px-3 py-1.5 text-teal-800">Daily briefing mode</span>
            <span className="rounded-full bg-white/80 px-3 py-1.5">{message}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm font-semibold text-stone-800 hover:-translate-y-0.5 hover:bg-white"
            >
              Sign out
            </button>
            <button
              type="button"
              onClick={refreshFeed}
              disabled={pending}
              className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(28,25,23,0.18)] hover:-translate-y-0.5 hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Refreshing..." : "Refresh feed"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
