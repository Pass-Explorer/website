"use client";

import { aboutDict } from "@/lib/i18n/dicts/about";
import { useT } from "@/lib/i18n";

import { PageShell } from "../_components/page-shell";

/**
 * About — bilingual. Hero (eyebrow + Bebas headline), 2-column
 * Problem/Thesis, 4-milestone timeline with In-progress pulse pill, and
 * 3-card Team grid with gradient initial avatars.
 */

export default function AboutPage() {
  const t = useT(aboutDict);

  const milestones = [
    { d: t("m1_date"), title: t("m1_t"), s: t("m1_s") },
    { d: t("m2_date"), title: t("m2_t"), s: t("m2_s"), live: true },
    { d: t("m3_date"), title: t("m3_t"), s: t("m3_s") },
    { d: t("m4_date"), title: t("m4_t"), s: t("m4_s") },
  ];

  const team = [
    { i: "DG", name: "Daniel Gorgonha", role: t("role") },
    { i: "NM", name: "Naydson Mariosa", role: t("role") },
    { i: "MD", name: "Mauricio Doerr",  role: t("role") },
  ];

  return (
    <PageShell active="about">
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
          {t("title_a")}
          <br />
          <span style={{ color: "var(--gold)" }}>
            {t("title_b")}
          </span>
        </h1>

        {/* Problem / Thesis */}
        <div
          className="grid gap-15 md:grid-cols-2"
          style={{ marginTop: 80, gap: 60 }}
        >
          <div>
            <h2
              className="display"
              style={{ fontSize: 32, color: "var(--gold)" }}
            >
              {t("problem_title")}
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-dim)",
              }}
            >
              {t("problem_body")}
            </p>
          </div>
          <div>
            <h2
              className="display"
              style={{ fontSize: 32, color: "var(--gold)" }}
            >
              {t("thesis_title")}
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-dim)",
              }}
            >
              {t("thesis_body")}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h2
          className="display"
          style={{ fontSize: 48, marginTop: 100, marginBottom: 40 }}
        >
          {t("timeline")}
        </h2>
        <div className="flex flex-col gap-6">
          {milestones.map((m, i, arr) => (
            <div
              key={m.d}
              className="flex gap-5"
              style={{
                padding: "20px 0",
                borderBottom:
                  i < arr.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                className="font-mono shrink-0 pt-1"
                style={{
                  width: 80,
                  fontSize: 11,
                  color: m.live ? "var(--gold)" : "var(--ink-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {m.d}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span
                    className="display"
                    style={{ fontSize: 24, color: "var(--ink)" }}
                  >
                    {m.title}
                  </span>
                  {m.live && (
                    <span
                      className="inline-flex items-center gap-1.5 font-bold uppercase"
                      style={{
                        padding: "2px 10px",
                        borderRadius: 999,
                        background: "var(--sage-soft)",
                        color: "var(--sage)",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="pulse"
                        style={{ color: "var(--sage)" }}
                      />
                      {t("in_progress")}
                    </span>
                  )}
                </div>
                <p
                  className="mt-1.5"
                  style={{
                    fontSize: 13,
                    color: "var(--ink-dim)",
                    margin: "6px 0 0",
                    lineHeight: 1.5,
                  }}
                >
                  {m.s}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2
          className="display"
          style={{ fontSize: 48, marginTop: 100, marginBottom: 40 }}
        >
          {t("team")}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((p) => (
            <div
              key={p.name}
              style={{
                padding: 24,
                borderRadius: 12,
                background: "var(--night-card)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                className="grid place-items-center font-display"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background:
                    "linear-gradient(135deg, var(--gold), var(--purple))",
                  color: "var(--night)",
                  fontSize: 22,
                }}
              >
                {p.i}
              </div>
              <p
                className="display"
                style={{ fontSize: 22, marginTop: 16 }}
              >
                {p.name}
              </p>
              <p
                className="mt-1.5 font-bold uppercase"
                style={{
                  fontSize: 11,
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                }}
              >
                {p.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
