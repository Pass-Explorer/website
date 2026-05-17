import type { Metadata } from "next";

import { Icon, Wordmark } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Pass Explorer is updating.",
};

/**
 * Maintenance page — flipped on by the Vercel deploy env var when we're
 * pushing a contract upgrade or migrating the indexer. Static, no client
 * JS. Mirrors the prototype's `web-pages.jsx` PageMaintenance design.
 */

export default function MaintenancePage() {
  return (
    <div className="bg-night text-ink flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center font-body">
      <Wordmark size={14} />

      <div
        className="mt-12 grid place-items-center"
        style={{
          width: 96,
          height: 96,
          borderRadius: 24,
          background: "var(--gold-soft)",
          color: "var(--gold)",
        }}
      >
        <Icon name="bolt" size={44} stroke={1.6} />
      </div>

      <p className="eyebrow mt-8" style={{ color: "var(--gold)" }}>
        Stellar testnet · upgrade in progress
      </p>
      <h1
        className="display mt-4"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
          color: "var(--ink)",
          lineHeight: 0.95,
          maxWidth: 720,
        }}
      >
        Quick break.{" "}
        <span style={{ color: "var(--gold)" }}>Be right back.</span>
      </h1>
      <p
        className="mx-auto mt-4 max-w-lg"
        style={{
          fontSize: 14,
          color: "var(--ink-dim)",
          lineHeight: 1.6,
        }}
      >
        We're pushing a small contract upgrade. The marketplace is paused for a
        few minutes — your wallet and tickets are safe and untouched.
      </p>

      <div
        className="mt-8 flex flex-col gap-3"
        style={{ fontSize: 12, color: "var(--ink-muted)" }}
      >
        <div className="flex items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className="pulse"
            style={{ color: "var(--gold)" }}
          />
          <span className="font-mono" style={{ letterSpacing: "0.06em" }}>
            ETA · &lt;5 min
          </span>
        </div>
        <a
          href="https://x.com/passexplorer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--gold)" }}
          className="font-mono"
        >
          Live updates · @passexplorer ↗
        </a>
      </div>
    </div>
  );
}
