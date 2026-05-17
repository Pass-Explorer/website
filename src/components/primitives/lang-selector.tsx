"use client";

import * as React from "react";

import { type Lang, useLang } from "@/lib/i18n";

/**
 * LangSelector - flag-pill toggle for EN ↔ PT.
 *
 * Pair of flag buttons (US / BR SVG) inside a rounded pill. Inline SVG
 * flags instead of emoji because country-flag emoji don't render on
 * Windows or several Linux distros (fall back to "US"/"BR" boxes).
 * Active flag is full-color with a faint gold tint; inactive flags are
 * faded + grayscaled. Clicking either flag swaps the active language
 * via the shared `LangProvider` context.
 *
 * Drop into any header that needs the language toggle (landing header,
 * page shell, docs header).
 */

function FlagUS() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 42" aria-hidden="true">
      <rect width="60" height="42" fill="#B22234" />
      <path
        d="M0 4.85H60M0 14.55H60M0 24.25H60M0 33.95H60M0 9.7H60M0 19.4H60M0 29.1H60M0 38.8H60"
        stroke="#FFFFFF"
        strokeWidth="3.23"
      />
      <rect width="24" height="22.62" fill="#3C3B6E" />
      {[3, 8, 13, 18].map((cy) =>
        [3, 8, 13, 18, 23].map((cx) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" fill="#FFFFFF" />
        )),
      )}
    </svg>
  );
}

function FlagBR() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 42" aria-hidden="true">
      <rect width="60" height="42" fill="#009C3B" />
      <polygon points="30,4 56,21 30,38 4,21" fill="#FFDF00" />
      <circle cx="30" cy="21" r="9" fill="#002776" />
      <path
        d="M 21,18.5 Q 30,15 39,18.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.4"
      />
    </svg>
  );
}

const FLAG_COMPONENT: Record<Lang, () => React.ReactElement> = {
  en: FlagUS,
  pt: FlagBR,
};

const LOCALE_LONG: Record<Lang, string> = {
  en: "English",
  pt: "Português",
};

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
      {(Object.keys(FLAG_COMPONENT) as Lang[]).map((id) => {
        const Flag = FLAG_COMPONENT[id];
        const active = lang === id;
        return (
          <button
            key={id}
            onClick={() => setLang(id)}
            title={LOCALE_LONG[id]}
            aria-label={LOCALE_LONG[id]}
            aria-pressed={active}
            className="cursor-pointer transition-all"
            style={{
              padding: "4px 8px",
              borderRadius: 4,
              background: active ? "rgba(232,184,75,0.14)" : "transparent",
              opacity: active ? 1 : 0.55,
              filter: active ? "none" : "grayscale(80%)",
              display: "inline-flex",
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}
