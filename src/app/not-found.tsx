import Link from "next/link";

import { Icon, Wordmark } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="bg-night text-ink flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center font-body">
      <Wordmark size={14} />

      <p
        className="display mt-12 tabular-nums"
        style={{
          fontSize: "clamp(6rem, 18vw, 12rem)",
          lineHeight: 1,
          color: "var(--gold)",
        }}
      >
        404
      </p>
      <p className="eyebrow mt-4" style={{ color: "var(--ink-muted)" }}>
        Festival cancelled · or never existed
      </p>
      <h1
        className="display mt-6"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--ink)",
          lineHeight: 0.95,
          maxWidth: 600,
        }}
      >
        Not here.{" "}
        <span style={{ color: "var(--gold)" }}>Yet.</span>
      </h1>
      <p
        className="mx-auto mt-4 max-w-md"
        style={{
          fontSize: 14,
          color: "var(--ink-dim)",
          lineHeight: 1.6,
        }}
      >
        Either the page moved, the link decayed, or the event got cancelled.
        Head back to the main feed.
      </p>

      <Link
        href="/"
        className="tap mt-8 inline-flex items-center gap-2 font-semibold"
        style={{
          height: 52,
          padding: "0 24px",
          background: "var(--gold)",
          color: "var(--night)",
          borderRadius: 6,
          fontSize: 14,
          letterSpacing: "0.02em",
        }}
      >
        <Icon name="home" size={16} />
        Back to home
      </Link>
    </div>
  );
}
