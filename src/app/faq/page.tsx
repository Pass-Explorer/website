import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Pass Explorer.",
};

const FAQS = [
  {
    q: "Why blockchain for tickets?",
    a: "Three reasons: the resale royalty back to the organizer is enforced by the smart contract (not a polite ask), the resale price cap is set on-chain (no scalping above 1.5x by default), and the splits are atomic (one transaction settles seller, organizer royalty and platform fee).",
  },
  {
    q: "Do I need a crypto wallet?",
    a: "No. You log in with Google, Apple or email via Privy. Privy provisions a Stellar wallet for you behind the scenes, with social recovery — no seed phrases to back up.",
  },
  {
    q: "Can I sell my pass for whatever I want?",
    a: "Up to the cap. The organizer sets a max resale price (e.g. 1.5× the primary). The Marketplace contract rejects any listing above that. You're free to list at face value or below if you just want to recoup costs.",
  },
  {
    q: "How does the organizer earn?",
    a: "On primary sales they receive the full sale price minus the platform fee. On resales the contract automatically takes a royalty (default 5%) and sends it to the organizer's wallet. They see every resale on-chain.",
  },
  {
    q: "Why Pix?",
    a: "Brazil-first. Pix is instant, free, and ubiquitous. Pass Explorer integrates an on/offramp so you can buy a pass with Pix without ever touching XLM directly. The XLM rail is invisible to non-crypto fans.",
  },
  {
    q: "When mainnet?",
    a: "We're on Stellar testnet now. Mainnet target is mid-2026, paced by the first festival partnership going live. Join the waitlist to get notified.",
  },
  {
    q: "I'm an organizer. How do I onboard?",
    a: "Apply on /organizer/apply. We do a quick KYC (legal entity + responsible KYC + CNPJ check) and approve you on-chain. After that you can deploy events and mint tickets directly from your dashboard. The Pass Explorer admin signs the approval transaction.",
  },
];

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Questions worth asking."
      lede="If you have something not covered here, ping us on X @passexplorer."
    >
      <div className="flex flex-col gap-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group"
            style={{
              padding: 20,
              borderRadius: 10,
              background: "var(--night-card)",
              border: "1px solid var(--line)",
            }}
          >
            <summary
              className="display flex cursor-pointer items-center justify-between gap-3"
              style={{
                fontSize: 20,
                color: "var(--ink)",
                listStyle: "none",
              }}
            >
              {f.q}
              <span
                className="grid place-items-center transition-transform group-open:rotate-180"
                style={{ width: 20, height: 20, color: "var(--gold)" }}
              >
                ↓
              </span>
            </summary>
            <p
              className="mt-3"
              style={{
                fontSize: 14,
                color: "var(--ink-dim)",
                lineHeight: 1.65,
              }}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
