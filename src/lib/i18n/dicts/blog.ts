import type { Dict } from "../types";

export const blogDict = {
  en: {
    eyebrow: "Build in public",
    title_a: "Notes from",
    title_b: "the build.",
    lede:    "We write here when something ships, a contract upgrade, a UX decision, a hackathon recap. Short, honest, no fluff. Subscribe via the RSS feed or follow us on X.",

    empty_pill: "Coming soon",
    empty_t:    "First post lands when the testnet flows end-to-end.",
    empty_b:    "Until then, the changelog has the play-by-play.",

    // Placeholder posts (pre-launch, copy will be edited as real posts ship)
    p1_date: "May 17, 2026",
    p1_tag:  "ANNOUNCEMENT",
    p1_t:    "Pass Explorer goes public",
    p1_b:    "Landing page live, waitlist open, contracts on testnet. The build-in-public phase officially starts here. Why now, what's next, and how the marketplace is going to ship.",

    p2_date: "May 5, 2026",
    p2_tag:  "ENGINEERING",
    p2_t:    "Why we picked Stellar over Ethereum",
    p2_b:    "Three reasons: sub-cent fees that make $10 tickets viable, 3–5s finality so people don't watch a spinner at checkout, and Soroban being mature enough to ship real money without burning a runway.",

    p3_date: "Apr 28, 2026",
    p3_tag:  "CONTRACTS",
    p3_t:    "Factory, EventNFT and Marketplace. 34 tests passing",
    p3_b:    "Walkthrough of the three smart contracts that make atomic resale work. How royalty is captured, why off-platform transfers are blocked at the contract level, and the cap-enforcement invariant.",

    cta_changelog: "Read the changelog",
    cta_x:         "Follow on X",
  },
  pt: {
    eyebrow: "Build in public",
    title_a: "Notas da",
    title_b: "construção.",
    lede:    "Escrevemos aqui quando algo entra no ar, upgrade de contrato, decisão de UX, recap de hackathon. Curto, honesto, sem enrolação. Assine pelo RSS ou segue a gente no X.",

    empty_pill: "Em breve",
    empty_t:    "Primeiro post sai quando o fluxo na testnet rodar de ponta a ponta.",
    empty_b:    "Até lá, o changelog tem o play-by-play.",

    p1_date: "17 mai 2026",
    p1_tag:  "ANÚNCIO",
    p1_t:    "Pass Explorer vai público",
    p1_b:    "Landing no ar, lista de espera aberta, contratos na testnet. A fase de build-in-public começa oficialmente aqui. Por que agora, o que vem, e como o marketplace vai entregar.",

    p2_date: "5 mai 2026",
    p2_tag:  "ENGENHARIA",
    p2_t:    "Por que escolhemos Stellar em vez de Ethereum",
    p2_b:    "Três motivos: taxas abaixo de um centavo que viabilizam ingressos de R$50, finalidade em 3–5s pra ninguém ficar olhando spinner no checkout, e o Soroban maduro o bastante pra mover dinheiro real sem queimar runway.",

    p3_date: "28 abr 2026",
    p3_tag:  "CONTRATOS",
    p3_t:    "Factory, EventNFT e Marketplace. 34 testes passando",
    p3_b:    "Passeio pelos três smart contracts que fazem a revenda atômica funcionar. Como o royalty é capturado, por que transferências off-platform são bloqueadas no contrato, e o invariante de teto de preço.",

    cta_changelog: "Ler o changelog",
    cta_x:         "Seguir no X",
  },
} as const satisfies Dict;
