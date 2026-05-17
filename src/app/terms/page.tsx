"use client";

import { termsDict } from "@/lib/i18n/dicts/terms";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

export default function TermsPage() {
  const t = useT(termsDict);

  const CLAUSES: { n: string; t: string; b: string }[] = [
    { n: "1", t: t("c1_t"), b: t("c1_b") },
    { n: "2", t: t("c2_t"), b: t("c2_b") },
    { n: "3", t: t("c3_t"), b: t("c3_b") },
    { n: "4", t: t("c4_t"), b: t("c4_b") },
    { n: "5", t: t("c5_t"), b: t("c5_b") },
    { n: "6", t: t("c6_t"), b: t("c6_b") },
    { n: "7", t: t("c7_t"), b: t("c7_b") },
    { n: "8", t: t("c8_t"), b: t("c8_b") },
  ];

  return (
    <PageShell>
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 800 }}
      >
        <p
          className="eyebrow"
          style={{ color: "var(--gold)", marginBottom: 20 }}
        >
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
          className="mt-6"
          style={{
            fontSize: 15,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          {t("lede")}
        </p>

        <div className="flex flex-col" style={{ marginTop: 60, gap: 40 }}>
          {CLAUSES.map((c) => (
            <Clause key={c.n} n={c.n} t={c.t}>
              {c.b}
            </Clause>
          ))}
        </div>

        <div
          style={{
            marginTop: 60,
            padding: 24,
            borderRadius: 10,
            background: "var(--night-card)",
            border: "1px solid var(--gold-soft)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            {t("contact_title")}
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--ink-dim)",
              marginTop: 8,
            }}
          >
            {t("contact_body")}
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Clause({
  n,
  t,
  children,
}: {
  n: string;
  t: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className="flex items-baseline"
        style={{ gap: 16, marginBottom: 12 }}
      >
        <span
          className="display"
          style={{ fontSize: 28, color: "var(--gold)", minWidth: 32 }}
        >
          {n}.
        </span>
        <h2
          className="display"
          style={{ fontSize: 28, color: "var(--ink)", margin: 0 }}
        >
          {t}
        </h2>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "var(--ink-dim)",
          lineHeight: 1.7,
          marginLeft: 48,
          marginBottom: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
