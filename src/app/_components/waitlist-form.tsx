"use client";

import { useState } from "react";

import { Icon } from "@/components/primitives";
import { commonDict } from "@/lib/i18n/dicts/common";
import { landingDict } from "@/lib/i18n/dicts/landing";
import { useT } from "@/lib/i18n";

/**
 * WaitlistForm - posts email to Formspree (mbdwzndo endpoint).
 *
 * Pure client component (handles success/error state inline). Preserves
 * the production Formspree integration from the legacy index.html so
 * the existing waitlist DB keeps filling without manual migration.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwzndo";

export function WaitlistForm() {
  const t = useT(landingDict);
  const c = useT(commonDict);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setError(null);
    try {
      const r = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!r.ok) throw new Error(`Formspree ${r.status}`);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="fade-in mx-auto mt-8 flex max-w-md items-center justify-center gap-2"
        style={{
          padding: 14,
          borderRadius: 10,
          background: "var(--sage-soft)",
          border: "1px solid var(--sage)",
          color: "var(--sage)",
        }}
      >
        <Icon name="check" size={16} stroke={2.4} />
        <span style={{ fontSize: 14, fontWeight: 600 }}>
          {t("waitlist_thanks")}
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("waitlist_input")}
        required
        disabled={status === "submitting"}
        className="flex-1 outline-none"
        style={{
          height: 56,
          padding: "0 18px",
          background: "var(--night-card)",
          border: "1px solid var(--line-strong)",
          borderRadius: 8,
          color: "var(--ink)",
          fontSize: 14,
        }}
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email.trim()}
        className="tap inline-flex items-center justify-center gap-2 font-semibold"
        style={{
          height: 56,
          padding: "0 28px",
          background: "var(--gold)",
          color: "var(--night)",
          borderRadius: 8,
          fontSize: 14,
          letterSpacing: "0.02em",
          opacity: status === "submitting" ? 0.6 : 1,
        }}
      >
        {status === "submitting" ? t("waitlist_submitting") : c("cta_join_waitlist")}
        {status !== "submitting" && <Icon name="arrow" size={16} />}
      </button>
      {status === "error" && (
        <p
          className="fade-in absolute mt-16 text-center"
          style={{
            fontSize: 12,
            color: "var(--red)",
          }}
        >
          {error ?? t("waitlist_error")}
        </p>
      )}
    </form>
  );
}
