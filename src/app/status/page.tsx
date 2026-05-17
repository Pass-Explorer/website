"use client";

import { statusDict } from "@/lib/i18n/dicts/status";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

export default function StatusPage() {
  const t = useT(statusDict);

  const ROWS = [
    { service: t("svc_rpc"),       uptime: 99.97, latency: t("latency_rpc")       },
    { service: t("svc_indexer"),   uptime: 99.99, latency: t("latency_indexer")   },
    { service: t("svc_postgres"),  uptime: 99.99, latency: t("latency_postgres")  },
    { service: t("svc_contracts"), uptime: 100.0, latency: t("latency_contracts") },
    { service: t("svc_privy"),     uptime: 99.98, latency: t("latency_privy")     },
    { service: t("svc_ipfs"),      uptime: 99.99, latency: t("latency_ipfs")      },
    { service: t("svc_web"),       uptime: 100.0, latency: t("latency_web")       },
    { service: t("svc_email"),     uptime: 99.95, latency: t("latency_email")     },
  ];

  const LEDGER: { l: string; v: string; c: string }[] = [
    { l: t("ledger_block"),      v: "47,291,023",          c: "var(--gold)" },
    { l: t("ledger_fee"),        v: "100 stroops",         c: "var(--ink)"  },
    { l: t("ledger_tps"),        v: "847",                 c: "var(--sage)" },
    { l: t("ledger_validators"), v: t("ledger_validators_v"), c: "var(--ink)"  },
  ];

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
          {t("eyebrow")}
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          {t("title")}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          {t("sub")}
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
                  {t("label_operational")}
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
                  {t("uptime_30d").replace("{pct}", String(row.uptime))}
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
            {t("ledger_eyebrow")}
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
