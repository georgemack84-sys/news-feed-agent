"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-stone-900">
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">news-feed-agent</p>
          <h1 className="mt-4 text-4xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-base text-stone-600">
            The app hit an unexpected issue while loading this view. You can retry the render without losing your saved
            preferences or feed data.
          </p>
          {error.digest ? <p className="mt-3 text-sm text-stone-500">Digest: {error.digest}</p> : null}
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
