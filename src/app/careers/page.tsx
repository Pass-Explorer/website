"use client";

import { Icon } from "@/components/primitives";
import { careersDict } from "@/lib/i18n/dicts/careers";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

export default function CareersPage() {
  const t = useT(careersDict);

  const values: { n: string; t: string; b: string; color: string }[] = [
    { n: "01", t: t("v1_t"), b: t("v1_b"), color: "var(--gold)"   },
    { n: "02", t: t("v2_t"), b: t("v2_b"), color: "var(--sage)"   },
    { n: "03", t: t("v3_t"), b: t("v3_b"), color: "var(--purple)" },
  ];

  const roles = [
    { title: t("r1_t"), body: t("r1_b") },
    { title: t("r2_t"), body: t("r2_b") },
  ];

  return (
    <PageShell>
      <section
        className="mx-auto"
        style={{ padding: "100px 48px 80px", maxWidth: 900 }}
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
            fontSize: 17,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
            marginTop: 24,
            maxWidth: 640,
          }}
        >
          {t("lede")}
        </p>

        {/* Values */}
        <h2
          className="display"
          style={{ fontSize: 32, color: "var(--ink)", marginTop: 80 }}
        >
          {t("values_title")}
        </h2>
        <div
          className="grid gap-5 md:grid-cols-3"
          style={{ marginTop: 24 }}
        >
          {values.map((v) => (
            <div
              key={v.n}
              style={{
                padding: 24,
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <p
                className="display tabular-nums"
                style={{ fontSize: 32, color: v.color, lineHeight: 1 }}
              >
                {v.n}
              </p>
              <p
                className="display"
                style={{
                  fontSize: 22,
                  color: "var(--ink)",
                  marginTop: 14,
                }}
              >
                {v.t}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--ink-dim)",
                  lineHeight: 1.6,
                  marginTop: 10,
                }}
              >
                {v.b}
              </p>
            </div>
          ))}
        </div>

        {/* Roles */}
        <h2
          className="display"
          style={{ fontSize: 32, color: "var(--ink)", marginTop: 80 }}
        >
          {t("roles_title")}
        </h2>
        <div
          className="flex flex-col"
          style={{ marginTop: 24, gap: 16 }}
        >
          {roles.map((r) => (
            <div
              key={r.title}
              className="flex items-start"
              style={{
                padding: 24,
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
                gap: 18,
              }}
            >
              <span
                className="font-bold uppercase shrink-0"
                style={{
                  fontSize: 9,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "var(--gold-soft)",
                  color: "var(--gold)",
                  letterSpacing: "0.14em",
                  marginTop: 2,
                }}
              >
                Soon
              </span>
              <div>
                <p
                  className="display"
                  style={{ fontSize: 22, color: "var(--ink)" }}
                >
                  {r.title}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontSize: 13,
                    color: "var(--ink-dim)",
                    lineHeight: 1.6,
                  }}
                >
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

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
          <p
            className="display"
            style={{ fontSize: 24, color: "var(--gold)", margin: 0 }}
          >
            {t("pitch_title")}
          </p>
          <p
            className="mt-2"
            style={{
              fontSize: 14,
              color: "var(--ink)",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
            {t("pitch_body")}
          </p>
          <a
            href="mailto:careers@passexplorer.com"
            className="tap mt-5 inline-flex items-center gap-2 font-semibold"
            style={{
              marginTop: 20,
              height: 44,
              padding: "0 20px",
              background: "var(--gold)",
              color: "var(--night)",
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
          >
            <Icon name="arrow" size={14} />
            {t("cta")}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
