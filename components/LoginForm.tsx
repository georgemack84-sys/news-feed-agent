"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm({ defaultUsername }: { defaultUsername: string }) {
  const router = useRouter();
  const [username, setUsername] = useState(defaultUsername);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Unable to sign in.");
      setPending(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel)] p-8 shadow-[0_24px_80px_rgba(82,57,23,0.08)]">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-stone-700">Username</span>
        <input
          className="w-full rounded-2xl border border-stone-200 bg-white/90 p-3 text-sm outline-none"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-stone-700">Password</span>
        <input
          className="w-full rounded-2xl border border-stone-200 bg-white/90 p-3 text-sm outline-none"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          autoComplete="current-password"
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
