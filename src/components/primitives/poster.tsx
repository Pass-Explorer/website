import { cn } from "@/lib/utils";

/**
 * Festival poster. procedural SVG generator.
 *
 * Each event resolves to a palette + glyph. Layered: radial gradient backdrop,
 * subtle dot pattern, concentric gold arcs, oversized glyph, scanlines, and a
 * bottom shade for legibility of any overlaid title.
 *
 * Why procedural: festival rights are messy, ticket inventory is volatile,
 * and we should never block ship on art. The poster generator ensures every
 * event card has consistent presence even when the organizer hasn't uploaded
 * a hero image yet. Once organizers attach official art, swap to <img>.
 */

export type PosterSlug =
  | "lolla"
  | "primavera"
  | "rir"
  | "town"
  | "amanhecer"
  | "ultra"
  | "carnaval";

interface Palette {
  a: string;
  b: string;
  c: string;
  glyph: string;
}

const PALETTES: Record<PosterSlug, Palette> = {
  lolla:     { a: "#5B2B7C", b: "#E8B84B", c: "#080810", glyph: "◢" },
  primavera: { a: "#1F4D8C", b: "#F26D5B", c: "#080810", glyph: "◐" },
  rir:       { a: "#7A1F1F", b: "#E8B84B", c: "#080810", glyph: "✶" },
  town:      { a: "#2D4D2D", b: "#9B7FE8", c: "#080810", glyph: "▲" },
  amanhecer: { a: "#3A5A3A", b: "#E8B84B", c: "#080810", glyph: "☀" },
  ultra:     { a: "#0B2E5B", b: "#4EC990", c: "#080810", glyph: "◇" },
  carnaval:  { a: "#B8421F", b: "#E8B84B", c: "#080810", glyph: "✦" },
};

interface PosterProps {
  /** Event slug. determines palette and glyph. Unknown slug falls back to `lolla`. */
  slug: string;
  /** Stable id so concurrent posters don't share `<defs>` (collides on SSR). */
  id?: string;
  /** Height in px. Width is 100% of container. */
  height?: number;
  /** Tighter padding around the glyph, for use as thumbnail. */
  compact?: boolean;
  /** Edition label (e.g. "EDITION 2026"). */
  edition?: string;
  className?: string;
}

export function Poster({
  slug,
  id,
  height = 220,
  compact = false,
  edition = "EDITION 2026",
  className,
}: PosterProps) {
  const p = PALETTES[slug as PosterSlug] ?? PALETTES.lolla;
  const gid = `poster-${id ?? slug}`;
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height, borderRadius: 6, background: p.c }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${gid}-bg`} cx="30%" cy="30%" r="90%">
            <stop offset="0%" stopColor={p.a} stopOpacity="0.95" />
            <stop offset="60%" stopColor={p.c} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </radialGradient>
          <pattern
            id={`${gid}-dots`}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${gid}-bg)`} />
        <rect width="400" height="300" fill={`url(#${gid}-dots)`} />
        {/* concentric arcs. Explorer signature ring motif */}
        <g opacity="0.35" stroke={p.b} fill="none" strokeWidth="1">
          <circle cx="320" cy="60" r="40" />
          <circle cx="320" cy="60" r="70" />
          <circle cx="320" cy="60" r="100" />
          <circle cx="320" cy="60" r="140" />
        </g>
        {/* oversized glyph */}
        <text
          x="48"
          y={compact ? 220 : 240}
          fontSize={compact ? 180 : 200}
          fill={p.b}
          fillOpacity="0.18"
          fontFamily="serif"
          fontWeight="700"
        >
          {p.glyph}
        </text>
        {/* edition tag */}
        <text
          x="20"
          y="32"
          fontFamily="DM Sans"
          fontWeight="600"
          fontSize="10"
          letterSpacing="2"
          fill={p.b}
          fillOpacity="0.9"
        >
          {edition}
        </text>
        {/* subtle scanlines */}
        <g opacity="0.06">
          {Array.from({ length: 60 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 5}
              x2="400"
              y2={i * 5}
              stroke="#fff"
              strokeWidth="0.3"
            />
          ))}
        </g>
      </svg>
      {/* legibility shade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,16,0.85) 0%, rgba(8,8,16,0.1) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
