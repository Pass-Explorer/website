import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/primitives";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Pass Explorer is updating.",
};

export default function MaintenancePage() {
  return (
    <PageShell>
      <section
        className="mx-auto text-center"
        style={{ padding: "120px 48px", maxWidth: 700 }}
      >
        <div
          className="relative grid place-items-center mx-auto"
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "rgba(232,184,75,0.1)",
            border: "1px solid var(--gold)",
            overflow: "hidden",
            marginBottom: 32,
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 220deg at 50% 0%, rgba(232,184,75,0) 0deg, rgba(232,184,75,0.25) 60deg, rgba(155,127,232,0.30) 120deg, rgba(78,201,144,0.25) 200deg, rgba(232,184,75,0.15) 280deg, rgba(232,184,75,0) 360deg)",
              filter: "blur(18px)",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />
          <span
            style={{ color: "var(--gold)", position: "relative" }}
          >
            <Icon name="bolt" size={48} />
          </span>
        </div>

        <p className="eyebrow" style={{ color: "var(--gold)" }}>
          Maintenance window
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 7vw, 4.5rem)",
            lineHeight: 0.92,
            margin: "20px 0",
          }}
        >
          Back in{" "}
          <span style={{ color: "var(--gold)" }}>14 minutes.</span>
        </h1>
        <p
          className="mx-auto"
          style={{
            fontSize: 16,
            color: "var(--ink-dim)",
            marginBottom: 40,
            maxWidth: 480,
            lineHeight: 1.6,
          }}
        >
          Stellar RPC is migrating to v4.2. Purchases and resales are paused —
          already-purchased passes remain valid in your wallet.
        </p>
        <div
          className="inline-flex items-center"
          style={{
            gap: 8,
            padding: "8px 16px",
            borderRadius: 999,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
          }}
        >
          <span
            aria-hidden="true"
            className="pulse"
            style={{ background: "var(--gold)" }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: 12,
              color: "var(--ink-dim)",
            }}
          >
            ETA · 22:14 BRT · 14m 32s
          </span>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link
            href="/status"
            className="tap inline-flex items-center gap-2 font-semibold"
            style={{
              height: 44,
              padding: "0 20px",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 6,
              fontSize: 12,
              letterSpacing: "0.02em",
            }}
          >
            View detailed status
            <Icon name="arrow" size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
