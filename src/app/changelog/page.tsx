import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in Pass Explorer.",
};

const ENTRIES = [
  {
    date: "2026-05-17",
    version: "v0.4.0",
    title: "Prototype-aligned redesign",
    body: "All four personas (Fan, Organizer, Admin, Gate validator) get the full prototype visual treatment: DigitalPass, AmbientFestival, BuyFlow modal, TicketReveal, animated splits. Landing site migrated from static HTML to Next.js with the same brand system.",
  },
  {
    date: "2026-05-16",
    version: "v0.3.0",
    title: "13 use cases wired on testnet",
    body: "Admin (approvals + platform fee), Organizer (apply + pending + deploy + mint + update cap), and Fan (browse + event detail + buy + my tickets + cancel listing + list for resale) all working end-to-end against the Soroban contracts on Stellar testnet.",
  },
  {
    date: "2026-05-15",
    version: "v0.2.0",
    title: "Privy embedded wallets",
    body: "Sign in with Google/Apple/email and get a Stellar wallet provisioned via Privy social custody (TEE + Shamir SSS). No seed phrases. Same login next visit.",
  },
  {
    date: "2026-05-14",
    version: "v0.1.0",
    title: "Contracts on testnet",
    body: "Factory, Marketplace and EventNFT contracts deployed to Stellar testnet. Atomic payment splits (seller / organizer royalty / platform fee) settle in one transaction.",
  },
  {
    date: "2026-04-28",
    version: "v0.0.1",
    title: "Project kickoff",
    body: "Repo bootstrapped, brand identity finalized (Bebas Neue + DM Sans, gold #E8B84B / sage #4EC990 / purple #9B7FE8 on festival-night black), landing page shipped at passexplorer.com.",
  },
];

const TONE = {
  major: "var(--gold)",
  minor: "var(--sage)",
  patch: "var(--purple)",
};

export default function ChangelogPage() {
  return (
    <PageShell
      eyebrow="Changelog"
      title="What's new."
      lede="Public changelog of shipped milestones. Subscribe to @passexplorer for real-time updates."
    >
      <div className="flex flex-col gap-6">
        {ENTRIES.map((e, i) => {
          const minor = e.version.split(".")[1];
          const tone = minor === "0" ? "patch" : minor === "1" ? "minor" : "major";
          return (
            <div key={e.version} className="grid gap-4 md:grid-cols-[180px_1fr]">
              <div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--ink-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {e.date}
                </p>
                <p
                  className="display mt-1 tabular-nums"
                  style={{
                    fontSize: 26,
                    color: TONE[tone as keyof typeof TONE],
                    lineHeight: 1,
                  }}
                >
                  {e.version}
                </p>
              </div>
              <div
                style={{
                  padding: 20,
                  borderRadius: 10,
                  background: "var(--night-card)",
                  border: "1px solid var(--line)",
                  borderLeft: `2px solid ${TONE[tone as keyof typeof TONE]}`,
                }}
              >
                <p
                  className="display"
                  style={{
                    fontSize: 18,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {e.title}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontSize: 13,
                    color: "var(--ink-dim)",
                    lineHeight: 1.6,
                  }}
                >
                  {e.body}
                </p>
              </div>
              {i < ENTRIES.length - 1 && <div />}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
