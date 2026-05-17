import type { Dict } from "../types";

export const aboutDict = {
  en: {
    eyebrow:    "About · Pass Explorer",
    title_a:    "Built for people who",
    title_b:    "refuse to take “sold out” as an answer.",

    problem_title: "The problem",
    problem_body:  "Every relevant festival sells out in minutes. The secondary market is dominated by scalpers, fraud, and platforms that profit at the organizer's expense. The fan pays 3× the price for a ticket that might not be real. The organizer sees zero of the resale.",
    thesis_title:  "Our thesis",
    thesis_body:   "A marketplace that works for organizers instead of against them. On-chain cap prevents predation. Automatic royalty rewards the creator. No off-platform scalpers because the transfer is physically blocked outside the contract.",

    timeline:   "Timeline",
    in_progress: "In progress",

    m1_date: "Q1 2026",
    m1_t:    "Thesis + landing",
    m1_s:    "Bilingual landing built, contracts ready, 34 tests passing.",
    m2_date: "Q2 2026",
    m2_t:    "Hackathon · MVP",
    m2_s:    "Testnet deploy, PWA app, end-to-end resale flow working.",
    m3_date: "Q3 2026",
    m3_t:    "Beta testnet",
    m3_s:    "First 2–3 real organizers onboarded in testnet. Audit kickoff.",
    m4_date: "Q4 2026",
    m4_t:    "Mainnet",
    m4_s:    "Public launch with fiat anchor integration. First real festival live.",

    team:    "Team",
    role:    "Co-founder",
  },
  pt: {
    eyebrow:    "Sobre · Pass Explorer",
    title_a:    "Feito pra quem",
    title_b:    "se recusa a aceitar “esgotado” como resposta.",

    problem_title: "O problema",
    problem_body:  "Todo festival relevante esgota em minutos. O mercado secundário é dominado por cambistas, fraude e plataformas que lucram às custas do organizador. O fã paga 3× o preço por um ingresso que pode nem ser real. O organizador não vê nada da revenda.",
    thesis_title:  "Nossa tese",
    thesis_body:   "Um marketplace que trabalha pro organizador, não contra. Teto on-chain bloqueia predação. Royalty automático recompensa o criador. Não tem cambista off-platform porque a transferência é fisicamente bloqueada fora do contrato.",

    timeline:   "Linha do tempo",
    in_progress: "Em andamento",

    m1_date: "Q1 2026",
    m1_t:    "Tese + landing",
    m1_s:    "Landing bilingue feita, contratos prontos, 34 testes passando.",
    m2_date: "Q2 2026",
    m2_t:    "Hackathon · MVP",
    m2_s:    "Deploy na testnet, PWA, fluxo de revenda end-to-end funcionando.",
    m3_date: "Q3 2026",
    m3_t:    "Beta testnet",
    m3_s:    "Primeiros 2–3 organizadores reais embarcados na testnet. Início da auditoria.",
    m4_date: "Q4 2026",
    m4_t:    "Mainnet",
    m4_s:    "Lançamento público com anchor fiat. Primeiro festival real no ar.",

    team:    "Time",
    role:    "Co-fundador",
  },
} as const satisfies Dict;
