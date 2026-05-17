import { cn } from "@/lib/utils";

/**
 * Pass Explorer wordmark — PASS · [ticket glyph] · EXPLORER lockup.
 *
 * Lockup: "PASS" in ink + a small inline gold ticket glyph + "EXPLORER" in
 * gold. The ticket is the brand's pictogram — same gold gradient as the
 * hero DigitalPass, with the perforation line that recurs across the site.
 *
 * Use in headers, footers, marketing chrome, OG cards. Pass `glyphOnly`
 * for icon-sized placements (favicon, app icon, avatars).
 */

interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Type size in px (the lockup scales as a unit). */
  size?: number;
  /** CSS color value or var for the "EXPLORER" half — default `var(--gold)`. */
  color?: string;
  /** Render just the ticket glyph (icon mode). */
  glyphOnly?: boolean;
}

export function Wordmark({
  size = 18,
  color = "var(--gold)",
  glyphOnly = false,
  className,
  style,
  ...rest
}: WordmarkProps) {
  const glyphSize = Math.round(size * 1.15);

  if (glyphOnly) {
    return (
      <span
        className={cn("inline-block", className)}
        aria-label="Pass Explorer"
        style={style}
        {...rest}
      >
        <TicketGlyph size={glyphSize} color={color} />
      </span>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center font-display uppercase",
        className,
      )}
      style={{
        fontSize: size,
        letterSpacing: "0.12em",
        lineHeight: 1,
        gap: Math.round(size * 0.45),
        ...style,
      }}
      aria-label="Pass Explorer"
      {...rest}
    >
      <span style={{ color: "var(--ink)" }}>PASS</span>
      <TicketGlyph size={glyphSize} color={color} />
      <span
        style={{
          color,
          textShadow: "0 0 12px rgba(232,184,75,0.25)",
        }}
      >
        EXPLORER
      </span>
    </div>
  );
}

function TicketGlyph({ size, color }: { size: number; color: string }) {
  const w = size;
  const h = Math.round(size * 0.66);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 23 15"
      aria-hidden="true"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        filter: "drop-shadow(0 0 4px rgba(232,184,75,0.35))",
      }}
    >
      <defs>
        <linearGradient id="px-ticket-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE69C" />
          <stop offset="55%" stopColor={color} />
          <stop offset="100%" stopColor="#8B6F1F" />
        </linearGradient>
      </defs>
      {/* ticket body with perforated notch */}
      <path
        d="M1.5 2 H21.5 A1.5 1.5 0 0 1 23 3.5 V5.5 A2 2 0 0 0 23 9.5 V11.5 A1.5 1.5 0 0 1 21.5 13 H1.5 A1.5 1.5 0 0 1 0 11.5 V9.5 A2 2 0 0 0 0 5.5 V3.5 A1.5 1.5 0 0 1 1.5 2 Z"
        fill="url(#px-ticket-grad)"
        stroke="rgba(139,111,31,0.6)"
        strokeWidth="0.4"
      />
      {/* perforation line down the middle */}
      <line
        x1="11.5"
        y1="3.5"
        x2="11.5"
        y2="11.5"
        stroke="rgba(8,8,16,0.55)"
        strokeWidth="0.5"
        strokeDasharray="0.8 0.8"
      />
    </svg>
  );
}
