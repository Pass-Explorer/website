import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Status",
  description: "Real-time status of Pass Explorer infrastructure.",
};

interface Row {
  service: string;
  s: "operational" | "degraded" | "outage";
  uptime: number;
  latency: string;
}

const ROWS: Row[] = [
  { service: "Stellar RPC (Validation Cloud)", s: "operational", uptime: 99.97, latency: "142ms" },
  { service: "Indexer (Rust + sqlx)",          s: "operational", uptime: 99.99, latency: "4s ago" },
  { service: "Postgres (Neon)",                 s: "operational", uptime: 99.99, latency: "12ms p50" },
  { service: "Smart contracts",                 s: "operational", uptime: 100.0, latency: "no pause" },
  { service: "Privy (Stripe)",                  s: "operational", uptime: 99.98, latency: "230ms" },
  { service: "IPFS · Pinata",                   s: "operational", uptime: 99.99, latency: "847 pins" },
  { service: "Web app (Vercel)",                s: "operational", uptime: 100.0, latency: "edge" },
  { service: "Email (Resend)",                  s: "operational", uptime: 99.95, latency: "1.2s p50" },
];

const LEDGER: { l: string; v: string; c: string }[] = [
  { l: "Block",      v: "47,291,023",  c: "var(--gold)" },
  { l: "Fee",        v: "100 stroops", c: "var(--ink)" },
  { l: "Tx/s",       v: "847",         c: "var(--sage)" },
  { l: "Validators", v: "23 nodes",    c: "var(--ink)" },
];

export default function StatusPage() {
  return (
    <PageShell active="status">
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 1000 }}
      >
        <p
          className="eyebrow inline-flex items-center"
          style={{ color: "var(--sage)", marginBottom: 20 }}
        >
          <span
            aria-hidden="true"
            className="pulse"
            style={{ background: "var(--sage)", marginRight: 8 }}
          />
          All systems operational
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          All up.
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          Last incident: never · 90-day uptime: 99.98% · Updated 14 seconds ago
        </p>

        {/* status grid */}
        <div
          className="flex flex-col"
          style={{ marginTop: 60, gap: 12 }}
        >
          {ROWS.map((row, i) => (
            <div
              key={row.service}
              className="grid items-center"
              style={{
                gridTemplateColumns: "40px 1.5fr 1fr 1fr",
                gap: 20,
                padding: "18px 24px",
                background: "var(--night-card)",
                border: "1px solid var(--line)",
                borderRadius: 10,
              }}
            >
              <span
                aria-hidden="true"
                className="pulse"
                style={{ background: "var(--sage)" }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {row.service}
                </div>
                <div
                  className="uppercase"
                  style={{
                    fontSize: 11,
                    color: "var(--sage)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  Operational
                </div>
              </div>
              {/* uptime bars */}
              <div>
                <div className="flex" style={{ gap: 2 }}>
                  {Array.from({ length: 30 }).map((_, j) => (
                    <div
                      key={j}
                      style={{
                        flex: 1,
                        height: 24,
                        borderRadius: 2,
                        background:
                          j === 14 && i === 4 ? "var(--gold)" : "var(--sage)",
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 9,
                    color: "var(--ink-muted)",
                    marginTop: 4,
                  }}
                >
                  30d · {row.uptime}% uptime
                </div>
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: 12,
                  color: "var(--ink-dim)",
                  textAlign: "right",
                }}
              >
                {row.latency}
              </span>
            </div>
          ))}
        </div>

        {/* recent ledger */}
        <div
          style={{
            marginTop: 40,
            padding: 24,
            borderRadius: 10,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
          }}
        >
          <p
            className="eyebrow"
            style={{ color: "var(--gold)", marginBottom: 16 }}
          >
            Stellar testnet · ledger
          </p>
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
          >
            {LEDGER.map((s) => (
              <div key={s.l}>
                <p
                  className="eyebrow"
                  style={{ color: "var(--ink-muted)", fontSize: 9 }}
                >
                  {s.l}
                </p>
                <p
                  className="display whitespace-nowrap"
                  style={{
                    fontSize: 28,
                    color: s.c,
                    marginTop: 6,
                  }}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
