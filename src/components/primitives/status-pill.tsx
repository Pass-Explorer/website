import { cn } from "@/lib/utils";

/**
 * StatusPill — small badge with optional pulsing dot, tinted by tone.
 *
 * Tones map to the persona/semantic palette:
 *  - `sage`   → confirmations, "live on Stellar", verified seller
 *  - `gold`   → primary state, "held", fan-facing affirmatives
 *  - `purple` → organizer-tinted state, "listed for resale"
 *  - `red`    → destructive / rejected / failed tx
 *
 * The dot pulses by default. Pass `dot={false}` for purely textual pills.
 * The pill itself is 24px tall to align with the prototype's chrome and
 * sits comfortably inside a TopBar slot.
 */

export type PillTone = "sage" | "gold" | "purple" | "red";

const TONES: Record<PillTone, { bg: string; color: string }> = {
  sage:   { bg: "var(--sage-soft)",   color: "var(--sage)" },
  gold:   { bg: "var(--gold-soft)",   color: "var(--gold)" },
  purple: { bg: "var(--purple-soft)", color: "var(--purple)" },
  red:    { bg: "var(--red-soft)",    color: "var(--red)" },
};

interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: PillTone;
  dot?: boolean;
  children: React.ReactNode;
}

export function StatusPill({
  tone = "sage",
  dot = true,
  className,
  style,
  children,
  ...rest
}: StatusPillProps) {
  const t = TONES[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-2.5 font-semibold uppercase tracking-[0.12em]",
        className,
      )}
      style={{
        height: 24,
        fontSize: 10,
        background: t.bg,
        color: t.color,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          className="pulse"
          style={{ color: t.color }}
        />
      )}
      {children}
    </span>
  );
}
