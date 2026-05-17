import type { Metadata } from "next";

import { DocsApp } from "./_components/docs-app";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Pass Explorer documentation. how to apply, deploy events, set caps and royalties, do check-in, and handle refunds and tax.",
};

export default function DocsPage() {
  return <DocsApp />;
}
