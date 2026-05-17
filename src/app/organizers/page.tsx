import type { Metadata } from "next";

import { Icon } from "@/components/primitives";
import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "For organizers",
  description:
    "Earn royalties on every resale. Enforce price caps on-chain. See who holds your tickets in real time.",
};

const BENEFITS = [
  {
    icon: "sparkle" as const,
    title: "Royalty on every resale",
    body: "Default 5% (configurable). Settled in the same transaction as the seller payout — atomic, no reconciliation, no leakage.",
    tone: "purple",
  },
  {
    icon: "shield" as const,
    title: "Anti-scalping cap",
    body: "Set the max resale price on-chain at deploy time. The Marketplace contract rejects listings above the cap. Scalpers can't operate.",
    tone: "gold",
  },
  {
    icon: "eye" as const,
    title: "Full holder visibility",
    body: "See every ticket holder's wallet in your dashboard. Push notifications to your ticket base — official channel, no third-party data brokers.",
    tone: "sage",
  },
  {
    icon: "bolt" as const,
    title: "Fast settlement",
    body: "Stellar testnet confirms in ~3 seconds. No card chargebacks, no 30-day holds, no Stripe drama. Funds in your wallet on settle.",
    tone: "gold",
  },
];

const TONE = {
  gold:   "var(--gold)",
  sage:   "var(--sage)",
  purple: "var(--purple)",
};

export default function OrganizersPage() {
  return (
    <PageShell
      eyebrow="For organizers"
      title="The marketplace that works for you."
      lede="Stop watching StubHub eat your secondary. Pass Explorer pays you a royalty on every resale, caps the price on-chain, and shows you every holder in real time."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            style={{
              padding: 28,
              borderRadius: 12,
              background: "var(--night-card)",
              border: "1px solid var(--line)",
            }}
          >
            <div
              className="mb-5 grid place-items-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "rgba(232,184,75,0.08)",
                color: TONE[b.tone as keyof typeof TONE],
              }}
            >
              <Icon name={b.icon} size={22} />
            </div>
            <p
              className="display"
              style={{ fontSize: 22, color: "var(--ink)" }}
            >
              {b.title}
            </p>
            <p
              className="mt-2"
              style={{
                fontSize: 13,
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {b.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-12 text-center"
        style={{
          padding: 40,
          borderRadius: 12,
          background:
            "linear-gradient(135deg, rgba(232,184,75,0.08) 0%, rgba(155,127,232,0.04) 100%)",
          border: "1px solid var(--line-strong)",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--gold)" }}>
          How to onboard
        </p>
        <h2
          className="display mt-3 mx-auto"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 0.95,
            maxWidth: 600,
          }}
        >
          5 days from <span style={{ color: "var(--gold)" }}>apply</span> to
          live event.
        </h2>
        <p
          className="mx-auto mt-3 max-w-xl"
          style={{
            fontSize: 14,
            color: "var(--ink-dim)",
            lineHeight: 1.6,
          }}
        >
          Apply → KYC review → on-chain approval → deploy your event → mint
          tickets. We sign every approval personally, no automated rejections.
        </p>
        <a
          href="/#waitlist"
          className="tap mt-6 inline-flex items-center gap-2 font-semibold"
          style={{
            height: 52,
            padding: "0 24px",
            background: "var(--gold)",
            color: "var(--night)",
            borderRadius: 6,
            fontSize: 14,
            letterSpacing: "0.02em",
          }}
        >
          Get on the partner list
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </PageShell>
  );
}
