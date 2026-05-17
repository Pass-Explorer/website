import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pass Explorer is the first ticket marketplace that works for organizers, not against them.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="The first marketplace that works for organizers."
      lede="StubHub, Ticketmaster Resale and other secondary markets capture value at the organizer's expense. Pass Explorer flips that: every resale pays the festival a royalty, and the contract caps the resale price."
    >
      <article className="flex flex-col gap-6" style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.7 }}>
        <Section title="What we're building">
          A festival pass marketplace where fans discover and buy tickets, sell
          the ones they won't use, and organizers earn on every resale. Built
          on Stellar — fast, low-fee, and atomic.
        </Section>
        <Section title="Why on-chain">
          The royalty isn't a polite request — it's enforced by the contract.
          When a buyer pays, the marketplace splits the payment in a single
          atomic transaction: seller, organizer royalty, platform fee. No
          back-office reconciliation, no excuses, no leakage.
        </Section>
        <Section title="Why on Stellar">
          Settlement in ~3 seconds. Sub-cent fees. Native Asset Contracts for
          stablecoin and XLM payments. Privy embedded wallets give fans a Web2
          login (Google, Apple, email) with full Stellar custody handled by
          social recovery — no seed phrases, no plugins.
        </Section>
        <Section title="Who we are">
          A small team building from São Paulo. Background in fintech, ticketing
          and Latin American festival culture. Sketchy resale destroyed our own
          festival memories — we're building the alternative we wish existed.
        </Section>
      </article>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="display mb-2"
        style={{ fontSize: 26, color: "var(--ink)" }}
      >
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}
