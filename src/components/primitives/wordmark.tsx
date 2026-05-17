import { cn } from "@/lib/utils";

/**
 * Pass Explorer wordmark — PASS · EXPLORER lockup.
 *
 * The brand has no SVG logo file yet; this is the canonical rendering.
 * Structure: `PASS` / horizontal hairline / `EXPLORER` — Bebas Neue, gold.
 *
 * Use in headers, footers, marketing chrome, OG cards. For pure-icon
 * placements (favicon, app icon) render only the `PASS` arc.
 */

interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Type size in px (the lockup scales as a unit). */
  size?: number;
  /** CSS color value or var — default `var(--gold)`. */
  color?: string;
}

export function Wordmark({
  size = 18,
  color = "var(--gold)",
  className,
  style,
  ...rest
}: WordmarkProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-display uppercase",
        className,
      )}
      style={{
        fontSize: size,
        letterSpacing: "0.14em",
        color,
        lineHeight: 1,
        ...style,
      }}
      aria-label="Pass Explorer"
      {...rest}
    >
      <span>PASS</span>
      <span
        aria-hidden="true"
        style={{
          width: Math.max(10, size * 0.78),
          height: 1,
          background: color,
          opacity: 0.6,
        }}
      />
      <span>EXPLORER</span>
    </div>
  );
}
