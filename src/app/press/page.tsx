"use client";

import { Icon, Wordmark } from "@/components/primitives";
import { pressDict } from "@/lib/i18n/dicts/press";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

export default function PressPage() {
  const t = useT(pressDict);

  const facts: [string, string][] = [
    [t("f1_l"), t("f1_v")],
    [t("f2_l"), t("f2_v")],
    [t("f3_l"), t("f3_v")],
    [t("f4_l"), t("f4_v")],
    [t("f5_l"), t("f5_v")],
    [t("f6_l"), t("f6_v")],
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
          {t("title_a")}{" "}
          <span style={{ color: "var(--gold)" }}>{t("title_b")}</span>
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          {t("lede")}
        </p>

        {/* Pitch */}
        <div
          style={{
            marginTop: 60,
            padding: 24,
            borderRadius: 12,
            background: "var(--gold-soft)",
            border: "1px solid var(--gold)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            {t("pitch_title")}
          </p>
          <p
            className="mt-2"
            style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.6 }}
          >
            {t("pitch_body")}
          </p>
        </div>

        {/* Quick facts */}
        <h2
          className="display"
          style={{ fontSize: 32, color: "var(--ink)", marginTop: 60 }}
        >
          {t("facts_title")}
        </h2>
        <div
          style={{
            marginTop: 20,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
            borderRadius: 10,
          }}
        >
          {facts.map(([k, v], i) => (
            <div
              key={k}
              className="grid"
              style={{
                gridTemplateColumns: "200px 1fr",
                gap: 24,
                padding: "14px 20px",
                borderBottom:
                  i < facts.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <span
                style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}
              >
                {k}
              </span>
              <span style={{ fontSize: 13, color: "var(--ink-dim)" }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Brand assets */}
        <h2
          className="display"
          style={{ fontSize: 32, color: "var(--ink)", marginTop: 60 }}
        >
          {t("assets_title")}
        </h2>
        <div
          className="flex items-center"
          style={{
            marginTop: 20,
            padding: 24,
            borderRadius: 12,
            background: "var(--night-card)",
            border: "1px solid var(--line)",
            gap: 24,
          }}
        >
          <div
            className="grid place-items-center"
            style={{
              width: 120,
              height: 60,
              borderRadius: 8,
              background: "rgba(232,184,75,0.06)",
              border: "1px solid var(--line)",
              flexShrink: 0,
            }}
          >
            <Wordmark size={14} />
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--ink-dim)",
              lineHeight: 1.6,
            }}
          >
            {t("assets_body")}
          </p>
        </div>

        {/* Coverage */}
        <h2
          className="display"
          style={{ fontSize: 32, color: "var(--ink)", marginTop: 60 }}
        >
          {t("coverage_title")}
        </h2>
        <p
          className="mt-3"
          style={{
            fontSize: 14,
            color: "var(--ink-dim)",
            marginTop: 12,
          }}
        >
          {t("coverage_body")}
        </p>

        {/* Contact CTA */}
        <a
          href="mailto:press@passexplorer.com"
          className="tap mt-12 inline-flex items-center gap-2 font-semibold"
          style={{
            marginTop: 48,
            height: 48,
            padding: "0 22px",
            background: "var(--gold)",
            color: "var(--night)",
            borderRadius: 6,
            fontSize: 13,
            letterSpacing: "0.02em",
          }}
        >
          <Icon name="info" size={16} />
          {t("contact_cta")}
        </a>
      </section>
    </PageShell>
  );
}
