import type { Dict } from "../types";

export const changelogDict = {
  en: {
    eyebrow: "Build in public",
    title:   "Changelog",
    lede:    "What changed, when, and why. Updated whenever a deploy lands in production.",

    feat:  "FEAT",
    fix:   "FIX",
    chore: "CHORE",

    // v0.4.0
    e1_v:    "v0.4.0",
    e1_d:    "17 May 2026",
    e1_tag:  "WEB LAUNCH",
    e1_i1:   "Web version of Pass Explorer (Landing + Admin + Organizer)",
    e1_i2:   "Admin persona with global dashboard and platform fee governance",
    e1_i3:   "Gate persona with QR scanner at the festival gate",

    // v0.3.0
    e2_v:    "v0.3.0",
    e2_d:    "16 May 2026",
    e2_tag:  "PROTOTYPE",
    e2_i1:   "Organizer Event Detail with Sales/Resales/Holders/Check-in sub-tabs",
    e2_i2:   "Resale flow with animated atomic split",
    e2_i3:   "Fullscreen QR reveal with hologram + shimmer",
    e2_i4:   "R$NaN in cap when capMult was undefined",

    // v0.2.0
    e3_v:    "v0.2.0",
    e3_d:    "15 May 2026",
    e3_tag:  "WALLETS",
    e3_i1:   "Privy embedded wallets, sign in with Google/Apple/email",
    e3_i2:   "Stellar wallet provisioned via TEE + Shamir SSS, no seed phrases",

    // v0.1.0
    e4_v:    "v0.1.0",
    e4_d:    "14 May 2026",
    e4_tag:  "CONTRACTS",
    e4_i1:   "Factory, EventNFT (SEP-41) and Marketplace deployed · 34 tests",
    e4_i2:   "Automatic 5% royalty · atomic split in a single Stellar tx",
    e4_i3:   "Gated transfer · only Marketplace can move tokens",

    // v0.0.1
    e5_v:    "v0.0.1",
    e5_d:    "28 Apr 2026",
    e5_tag:  "LANDING",
    e5_i1:   "Bilingual landing EN/PT-BR via toggle",
    e5_i2:   "Waitlist capture via Formspree",
    e5_i3:   "Brand identity: night/gold/sage/purple + Bebas Neue + DM Sans",
  },
  pt: {
    eyebrow: "Build in public",
    title:   "Changelog",
    lede:    "O que mudou, quando e por quê. Atualizado sempre que um deploy entra em produção.",

    feat:  "FEAT",
    fix:   "FIX",
    chore: "CHORE",

    e1_v:    "v0.4.0",
    e1_d:    "17 mai 2026",
    e1_tag:  "WEB LAUNCH",
    e1_i1:   "Versão web do Pass Explorer (Landing + Admin + Organizer)",
    e1_i2:   "Persona Admin com dashboard global e governance da platform fee",
    e1_i3:   "Persona Porteiro com QR scanner no portão do festival",

    e2_v:    "v0.3.0",
    e2_d:    "16 mai 2026",
    e2_tag:  "PROTÓTIPO",
    e2_i1:   "Organizer Event Detail com sub-tabs Sales/Resales/Holders/Check-in",
    e2_i2:   "Fluxo de revenda com split atômico animado",
    e2_i3:   "QR reveal fullscreen com hologram + shimmer",
    e2_i4:   "R$NaN no cap quando capMult era undefined",

    e3_v:    "v0.2.0",
    e3_d:    "15 mai 2026",
    e3_tag:  "CARTEIRAS",
    e3_i1:   "Carteiras embedded da Privy, login com Google/Apple/email",
    e3_i2:   "Carteira Stellar provisionada via TEE + Shamir SSS, sem seed phrase",

    e4_v:    "v0.1.0",
    e4_d:    "14 mai 2026",
    e4_tag:  "CONTRATOS",
    e4_i1:   "Factory, EventNFT (SEP-41) e Marketplace deployados · 34 testes",
    e4_i2:   "Royalty automático de 5% · split atômico em uma única tx Stellar",
    e4_i3:   "Gated transfer · só o Marketplace pode mover tokens",

    e5_v:    "v0.0.1",
    e5_d:    "28 abr 2026",
    e5_tag:  "LANDING",
    e5_i1:   "Landing bilingue EN/PT-BR via toggle",
    e5_i2:   "Captura de waitlist via Formspree",
    e5_i3:   "Identidade de marca: night/gold/sage/purple + Bebas Neue + DM Sans",
  },
} as const satisfies Dict;
