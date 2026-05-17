import type { Dict } from "../types";

export const pressDict = {
  en: {
    eyebrow:   "Press kit · v0.1",
    title_a:   "Pitch us.",
    title_b:   "We'll pitch you back.",
    lede:      "If you're a journalist, podcaster, or organizer who wants to write about Pass Explorer, the assets and the elevator pitch live below. Press contact: press@passexplorer.com.",

    pitch_title:  "One-line pitch",
    pitch_body:   "Pass Explorer is the festival ticket marketplace where organizers earn a royalty on every resale — built on Stellar, with on-chain caps that physically block scalpers above a price ceiling.",

    facts_title:  "Quick facts",
    f1_l: "Founded",      f1_v: "2026 · São Paulo, Brazil",
    f2_l: "Network",      f2_v: "Stellar testnet · mainnet 2026",
    f3_l: "Founders",     f3_v: "Daniel Gorgonha · Naydson Mariosa · Mauricio Doerr",
    f4_l: "Status",       f4_v: "Pre-launch · waitlist open",
    f5_l: "Default royalty", f5_v: "5% (organizer-set)",
    f6_l: "Platform fee", f6_v: "R$ 2 flat per tx",

    assets_title: "Brand assets",
    assets_body:  "Logo, color palette, fonts, screenshots. We'll send the full ZIP from press@passexplorer.com when you reach out — keeps it easier to give context with each request.",

    coverage_title: "Coverage",
    coverage_body:  "Nothing yet. If you publish about us, ping press@passexplorer.com and we'll link it here.",

    contact_cta:   "press@passexplorer.com",
  },
  pt: {
    eyebrow:   "Kit de imprensa · v0.1",
    title_a:   "Manda a pauta.",
    title_b:   "A gente retorna.",
    lede:      "Se você é jornalista, podcaster ou organizador que quer escrever sobre o Pass Explorer, os ativos e o pitch curto estão abaixo. Contato pra imprensa: press@passexplorer.com.",

    pitch_title:  "Pitch de uma linha",
    pitch_body:   "Pass Explorer é o marketplace de ingressos pra festivais onde o organizador ganha royalty em cada revenda — construído na Stellar, com tetos on-chain que bloqueiam cambistas fisicamente acima do preço.",

    facts_title:  "Fatos rápidos",
    f1_l: "Fundado",         f1_v: "2026 · São Paulo, Brasil",
    f2_l: "Rede",            f2_v: "Stellar testnet · mainnet 2026",
    f3_l: "Fundadores",      f3_v: "Daniel Gorgonha · Naydson Mariosa · Mauricio Doerr",
    f4_l: "Status",          f4_v: "Pré-lançamento · lista de espera aberta",
    f5_l: "Royalty padrão",  f5_v: "5% (definido pelo organizador)",
    f6_l: "Taxa da plataforma", f6_v: "R$ 2 fixo por tx",

    assets_title: "Materiais de marca",
    assets_body:  "Logo, paleta de cores, fontes, screenshots. Enviamos o ZIP completo via press@passexplorer.com quando você entrar em contato — facilita dar contexto a cada pedido.",

    coverage_title: "Cobertura",
    coverage_body:  "Ainda nada. Se você publicar sobre a gente, pinga em press@passexplorer.com e linkamos aqui.",

    contact_cta:   "press@passexplorer.com",
  },
} as const satisfies Dict;
