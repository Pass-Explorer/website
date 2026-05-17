import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";

import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas-neue",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Pass Explorer — Festival ticket marketplace on Stellar",
    template: "%s — Pass Explorer",
  },
  description:
    "Sold out? Not for you. The festival pass marketplace where organizers earn royalties on every resale — built on Stellar.",
  applicationName: "Pass Explorer",
  metadataBase: new URL("https://passexplorer.com"),
  openGraph: {
    title: "Pass Explorer — Festival ticket marketplace on Stellar",
    description:
      "Resales capped on-chain. Royalty to the organizer. Built on Stellar.",
    siteName: "Pass Explorer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@passexplorer",
  },
};

export const viewport: Viewport = {
  themeColor: "#080810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-night text-ink min-h-dvh antialiased">
        {children}
      </body>
    </html>
  );
}
