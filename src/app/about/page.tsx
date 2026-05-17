import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pass Explorer — built for people who refuse to take 'sold out' as an answer.",
};

/**
 * About — ported from temp/PassExplorer (1) PageAbout.
 *
 * Hero (eyebrow + Bebas headline), 2-column Problem / Thesis, 4-milestone
 * timeline with In progress pulse pill, 3-card Team grid with gradient
 * initial avatars.
 */

export default function AboutPage() {
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
          About · Pass Explorer
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          Built for people who
          <br />
          <span style={{ color: "var(--gold)" }}>
            refuse to take &ldquo;sold out&rdquo; as an answer.
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
              The problem
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-dim)",
              }}
            >
              Every relevant festival sells out in minutes. The secondary
              market is dominated by scalpers, fraud, and platforms that
              profit at the organizer&apos;s expense. The fan pays 3× the
              price for a ticket that might not be real. The organizer sees
              zero of the resale.
            </p>
          </div>
          <div>
            <h2
              className="display"
              style={{ fontSize: 32, color: "var(--gold)" }}
            >
              Our thesis
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-dim)",
              }}
            >
              A marketplace that <em>works for</em> organizers instead of
              against them. On-chain cap prevents predation. Automatic
              royalty rewards the creator. No off-platform scalpers because
              the transfer is physically blocked outside the contract.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h2
          className="display"
          style={{ fontSize: 48, marginTop: 100, marginBottom: 40 }}
        >
          Timeline
        </h2>
        <div className="flex flex-col gap-6">
          {[
            {
              d: "Q1 2026",
              t: "Thesis + landing",
              s: "Bilingual landing built, contracts ready, 34 tests passing.",
            },
            {
              d: "Q2 2026",
              t: "Hackathon · MVP",
              s: "Testnet deploy, PWA app, end-to-end resale flow working.",
              live: true,
            },
            {
              d: "Q3 2026",
              t: "Beta testnet",
              s: "First 2–3 real organizers onboarded in testnet. Audit kickoff.",
            },
            {
              d: "Q4 2026",
              t: "Mainnet",
              s: "Public launch with fiat anchor integration. First real festival live.",
            },
          ].map((m, i, arr) => (
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
                    {m.t}
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
                      In progress
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
          Team
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { i: "DG", name: "Daniel Gorgonha",  role: "Co-founder" },
            { i: "NM", name: "Naydson Mariosa",  role: "Co-founder" },
            { i: "MD", name: "Mauricio Doerr",   role: "Co-founder" },
          ].map((p) => (
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
