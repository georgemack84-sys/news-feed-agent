"use client";

import { useState, useTransition } from "react";

export function OpsActions() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("Alerting ready");

  async function sendTestAlert() {
    setMessage("Sending test alert...");

    const response = await fetch("/api/ops/test-alert", {
      method: "POST",
    });

    const data = (await response.json()) as {
      delivered?: boolean;
      configured?: boolean;
    };

    startTransition(() => {
      if (!response.ok) {
        setMessage("Test alert failed");
        return;
      }

      if (!data.configured) {
        setMessage("Webhook not configured");
        return;
      }

      setMessage(data.delivered ? "Test alert sent" : "Test alert could not be delivered");
    });
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={sendTestAlert}
        disabled={pending}
        className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send test alert"}
      </button>
      <a
        href="/api/health"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
      >
        Open health JSON
      </a>
      <p className="text-sm text-stone-600">{message}</p>
    </div>
  );
}
