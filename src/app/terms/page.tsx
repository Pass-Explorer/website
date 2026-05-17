import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Terms of service",
};

const CLAUSES: { n: string; t: string; body: string }[] = [
  {
    n: "1",
    t: "What Pass Explorer is",
    body: "A festival ticket marketplace operated by Pass Explorer Tecnologia Ltda. (CNPJ XX.XXX.XXX/0001-XX). We connect fans, sellers, and organizers via Stellar smart contracts. We are not a bank, not an anchor — we are a software platform.",
  },
  {
    n: "2",
    t: "Your wallet and your tokens",
    body: "When you sign in with email or Google, Privy provisions a custodial-grade Stellar wallet (TEE + Shamir SSS). Tokens (tickets) live in that wallet. You are responsible for the key; we offer recovery via Privy but do not have direct access.",
  },
  {
    n: "3",
    t: "Anti-scalping",
    body: "Every resale goes through the Marketplace contract. Listings above the cap set by the organizer are physically rejected. Off-platform transfers are blocked by the EventNFT contract. Attempts to bypass these rules (e.g. external resale of wallet credentials) may be considered a terms violation.",
  },
  {
    n: "4",
    t: "Royalty and fees",
    body: "Every resale pays: (a) the seller minus royalty and fee, (b) the royalty configured by the organizer (default 5%), (c) the platform's flat fee (currently R$ 2). Changes to the flat fee go through a 24h time-lock and multisig governance.",
  },
  {
    n: "5",
    t: "Cancellations and refunds",
    body: "If the festival cancels, the organizer is responsible for the refund. Pass Explorer provides the on-chain tool (refund mode in the contract) but does not guarantee payment. In case of default, organizer support is a legal matter between you and the organizer.",
  },
  {
    n: "6",
    t: "Regulated market",
    body: "Brazil has specific laws on ticket scalping. Pass Explorer operates with caps and royalties precisely for compliance with those rules. Regulatory changes may affect operations; you agree to accept updates to these terms.",
  },
  {
    n: "7",
    t: "Limitation of liability",
    body: "Pass Explorer is provided \"as is\". We do not guarantee that the Stellar testnet is always available, nor that every festival delivers the promised event. In case of software failure, our liability is limited to attempting technical resolution.",
  },
  {
    n: "8",
    t: "Tax compliance",
    body: "Royalty received by the organizer is taxable income in Brazil. Pass Explorer reports these amounts to the Receita Federal as required by law. You are responsible for tax obligations arising from your use of the platform.",
  },
];

export default function TermsPage() {
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
          Legal · v1.0 · 17 May 2026
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          Terms of use
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
          By using Pass Explorer, you agree to the terms below. They are real —
          read them carefully before buying.
        </p>

        <div
          className="flex flex-col"
          style={{ marginTop: 60, gap: 40 }}
        >
          {CLAUSES.map((c) => (
            <Clause key={c.n} n={c.n} t={c.t}>
              {c.body}
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
            Legal questions
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--ink-dim)",
              marginTop: 8,
            }}
          >
            legal@passexplorer.com · Last reviewed by dpo@passexplorer.com on
            17 May 2026
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
          style={{
            fontSize: 28,
            color: "var(--gold)",
            minWidth: 32,
          }}
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
