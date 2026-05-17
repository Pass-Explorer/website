"use client";

import { type Lang, useLang } from "@/lib/i18n";

/**
 * LangSelector - flag-pill toggle for EN ↔ PT.
 *
 * Pair of flag buttons (🇺🇸 / 🇧🇷) inside a rounded pill. The active flag
 * is full-color with a faint gold tint; inactive flags are faded +
 * grayscaled. Clicking either flag swaps the active language via the
 * shared `LangProvider` context.
 *
 * Drop into any header that needs the language toggle (landing header,
 * page shell, docs header).
 */
export function LangSelector() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="hidden md:inline-flex"
      style={{
        gap: 4,
        padding: 3,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--line)",
        borderRadius: 6,
      }}
    >
      {[
        { id: "en" as const, flag: "🇺🇸", title: "English"   },
        { id: "pt" as const, flag: "🇧🇷", title: "Português" },
      ].map((o) => (
        <button
          key={o.id}
          onClick={() => setLang(o.id as Lang)}
          title={o.title}
          aria-label={o.title}
          aria-pressed={lang === o.id}
          className="cursor-pointer transition-all"
          style={{
            padding: "4px 8px",
            borderRadius: 4,
            background:
              lang === o.id ? "rgba(232,184,75,0.14)" : "transparent",
            opacity: lang === o.id ? 1 : 0.5,
            filter: lang === o.id ? "none" : "grayscale(60%)",
            fontSize: 16,
            lineHeight: 1,
          }}
        >
          {o.flag}
        </button>
      ))}
    </div>
  );
}
