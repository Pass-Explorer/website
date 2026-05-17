import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Status",
  description: "Real-time status of Pass Explorer infrastructure.",
};

const SYSTEMS = [
  { name: "App (passexplorer.com/app)", status: "operational" as const, latency: "412 ms" },
  { name: "Marketing (passexplorer.com)", status: "operational" as const, latency: "98 ms" },
  { name: "Factory contract",             status: "operational" as const, latency: "2.1 s" },
  { name: "Marketplace contract",         status: "operational" as const, latency: "2.3 s" },
  { name: "EventNFT contracts",           status: "operational" as const, latency: "1.9 s" },
  { name: "Stellar Horizon (testnet)",    status: "operational" as const, latency: "190 ms" },
  { name: "Privy embedded wallets",       status: "operational" as const, latency: "320 ms" },
  { name: "Formspree (waitlist)",         status: "operational" as const, latency: "240 ms" },
] as const;

const TONE = {
  operational: { bg: "var(--sage-soft)", fg: "var(--sage)", label: "Operational" },
  degraded:    { bg: "var(--gold-soft)", fg: "var(--gold)", label: "Degraded" },
  outage:      { bg: "var(--red-soft)",  fg: "var(--red)",  label: "Outage" },
} as const;

export default function StatusPage() {
  const allOk = SYSTEMS.every((s) => s.status === "operational");

  return (
    <PageShell
      eyebrow="System status"
      title={allOk ? "All systems operational." : "Some systems degraded."}
      lede="Live health of the Pass Explorer stack. Checked every 30 seconds."
    >
      <div className="flex flex-col gap-2">
        {SYSTEMS.map((s) => {
          const t = TONE[s.status];
          return (
            <div
              key={s.name}
              className="flex items-center justify-between"
              style={{
                padding: 16,
                borderRadius: 8,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={s.status === "operational" ? "pulse" : ""}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: t.fg,
                    color: t.fg,
                  }}
                />
                <span style={{ fontSize: 14, color: "var(--ink)" }}>
                  {s.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: "var(--ink-muted)" }}
                >
                  {s.latency}
                </span>
                <span
                  className="font-bold uppercase"
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: t.bg,
                    color: t.fg,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                  }}
                >
                  {t.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-8 flex items-start gap-3"
        style={{
          padding: 16,
          borderRadius: 10,
          background: "var(--gold-soft)",
          border: "1px solid rgba(232,184,75,0.3)",
        }}
      >
        <div
          className="grid shrink-0 place-items-center"
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "var(--gold)",
            color: "var(--night)",
          }}
        >
          i
        </div>
        <div>
          <p
            className="font-bold"
            style={{ fontSize: 13, color: "var(--gold)" }}
          >
            All values are placeholder until v2 monitoring lands.
          </p>
          <p
            className="mt-1"
            style={{
              fontSize: 12,
              color: "var(--ink-dim)",
              lineHeight: 1.5,
            }}
          >
            Live health-check integration with Better Stack is on the roadmap.
            For now this page is illustrative — real outages get posted to{" "}
            <a
              href="https://x.com/passexplorer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)" }}
            >
              @passexplorer
            </a>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
