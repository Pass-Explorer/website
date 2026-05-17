import { cn } from "@/lib/utils";

/**
 * Pass Explorer icon set.
 *
 * Inline SVG strokes. single source ensures every glyph carries the same
 * weight, cap, and join. Use this instead of mixing lucide / heroicons /
 * tabler across the app: visual consistency on small mobile chrome matters
 * more than registry coverage.
 *
 * Each glyph is drawn in a 24-unit viewBox with `stroke="currentColor"` so
 * size + tint are controlled by the parent (`text-gold`, `text-sage`, …).
 *
 * Add new icons by extending the `PATHS` map below. Keep each glyph as a
 * single JSX expression so the lookup stays O(1) and the bundle stays flat.
 */

export type IconName =
  | "search"
  | "sliders"
  | "chevR"
  | "chevL"
  | "chevD"
  | "chevU"
  | "close"
  | "plus"
  | "minus"
  | "shield"
  | "sparkle"
  | "qr"
  | "pin"
  | "cal"
  | "wallet"
  | "arrow"
  | "arrowUp"
  | "arrowDown"
  | "check"
  | "sell"
  | "home"
  | "ticket"
  | "user"
  | "bell"
  | "info"
  | "bolt"
  | "history"
  | "swap"
  | "lock"
  | "eye"
  | "refresh"
  | "apple"
  | "globe"
  | "external"
  | "copy"
  | "share"
  | "trash"
  | "edit"
  | "filter"
  | "menu"
  | "scan";

const PATHS: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h16M4 12h10M4 18h6" />
      <circle cx="17" cy="12" r="2" />
      <circle cx="13" cy="18" r="2" />
    </>
  ),
  chevR: <path d="m9 5 7 7-7 7" />,
  chevL: <path d="m15 5-7 7 7 7" />,
  chevD: <path d="m6 9 6 6 6-6" />,
  chevU: <path d="m6 15 6-6 6 6" />,
  close: <path d="M6 6l12 12M6 18 18 6" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkle: (
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <path d="M14 14h3v3h-3zM20 14v3M14 20h3M17 17h4M20 20v1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  cal: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  wallet: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M16 13h2" />
      <path d="M2 10h20" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  arrowUp: <path d="M7 17 17 7M9 7h8v8" />,
  arrowDown: <path d="M17 7 7 17M15 17H7V9" />,
  check: <path d="m5 12 5 5 9-12" />,
  sell: (
    <>
      <path d="m3 13 8.5-8.5a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v6.1a2 2 0 0 1-.6 1.4L12 22a2 2 0 0 1-2.8 0L3 16a2 2 0 0 1 0-3z" />
      <circle cx="16" cy="8" r="1.2" />
    </>
  ),
  home: <path d="M3 12 12 3l9 9v9a1 1 0 0 1-1 1h-5v-7H10v7H5a1 1 0 0 1-1-1Z" />,
  ticket: (
    <>
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
      <path d="M9 7v14" strokeDasharray="2 2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  bell: (
    <>
      <path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 8H4c0-2 2-3 2-8z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v.01M11 12h1v5h1" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  history: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  swap: (
    <>
      <path d="M7 4v16m0 0-3-3m3 3 3-3" />
      <path d="M17 20V4m0 0-3 3m3-3 3 3" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  apple: (
    <path d="M16.5 12.3c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.3-.1-2.4.7-3.1.7-.7 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.6-.4 6.4 1 8.5.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2.1.8-1.2 1.1-2.4 1.1-2.4 0-.1-2.1-.8-2.1-3.6zM14.3 5.5c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 14v6H4V4h6" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </>
  ),
  share: (
    <>
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      <path d="M16 6l-4-4-4 4" />
      <path d="M12 2v14" />
    </>
  ),
  trash: (
    <>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </>
  ),
  filter: <path d="M3 4h18l-7 9v6l-4 2v-8z" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M3 12h18" />
    </>
  ),
};

interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, "stroke"> {
  name: IconName;
  size?: number;
  stroke?: number;
}

export function Icon({
  name,
  size = 20,
  stroke = 1.7,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
