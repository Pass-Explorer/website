import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="What we know, and what we don't."
      lede="LGPD-aligned. We collect only what we need to operate the marketplace and let you exercise every right LGPD gives you."
    >
      <article
        className="flex flex-col gap-6"
        style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}
      >
        <p>
          <strong style={{ color: "var(--ink)" }}>What we collect.</strong>{" "}
          Email (for waitlist + ticket delivery), wallet address (on-chain,
          public), and basic device info (IP, user-agent) for fraud detection.
          That's it.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>What we don't.</strong> No
          tracking pixels, no Google Analytics, no Meta/Facebook anything. We
          use privacy-respecting analytics (PostHog self-hosted in the future;
          nothing today) to count page views.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>Who we share with.</strong>{" "}
          Privy (for wallet custody), Formspree (waitlist email storage),
          Stellar (every transaction is public on testnet/mainnet). Organizers
          see the wallet addresses of pass holders for their events — required
          to enforce the cap and pay royalty.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>Your rights (LGPD).</strong>{" "}
          Access, correction, deletion, portability — email{" "}
          <a href="mailto:privacy@passexplorer.com" style={{ color: "var(--gold)" }}>
            privacy@passexplorer.com
          </a>{" "}
          and we'll process in ≤15 days. Note: on-chain transactions are
          immutable; we can delete your off-chain account data but the public
          ledger record stays.
        </p>
        <p>
          <strong style={{ color: "var(--ink)" }}>Cookies.</strong> We use one
          cookie (language preference). That's it.
        </p>
        <p
          className="font-mono pt-4"
          style={{
            fontSize: 11,
            color: "var(--ink-quiet)",
            letterSpacing: "0.06em",
          }}
        >
          Last updated: 2026-05-14 · v0.1
        </p>
      </article>
    </PageShell>
  );
}
