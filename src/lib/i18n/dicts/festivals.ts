import type { Dict } from "../types";

export const festivalsDict = {
  en: {
    eyebrow:   "Festivals · testnet",
    title_a:   "The first festivals",
    title_b:   "are coming.",
    lede:      "We're onboarding the first 2–3 organizers in Stellar testnet. When mainnet ships, these are the events you'll be able to buy passes for. Join the waitlist to know exactly when each goes live.",

    pill:      "Pre-launch",

    why:       "Why this list is short",
    why_body:  "We don't list festivals we can't actually settle. Every event below has either signed a letter of intent with us or is in the process of deploying its EventNFT on testnet. The full Brazilian festival calendar lands when mainnet is live.",

    cta_join:  "Join waitlist",
    cta_docs:  "I'm an organizer",
  },
  pt: {
    eyebrow:   "Festivais · testnet",
    title_a:   "Os primeiros festivais",
    title_b:   "estão chegando.",
    lede:      "Estamos embarcando os primeiros 2–3 organizadores na testnet da Stellar. Quando a mainnet for ao ar, esses são os eventos pra você comprar pass. Entra na lista de espera pra saber exatamente quando cada um vai ao ar.",

    pill:      "Pré-lançamento",

    why:       "Por que essa lista é curta",
    why_body:  "Não listamos festival que ainda não conseguimos liquidar de verdade. Cada evento abaixo já assinou uma carta de intenção com a gente ou está em processo de deploy do EventNFT na testnet. O calendário completo de festivais brasileiros entra quando a mainnet estiver no ar.",

    cta_join:  "Entrar na lista",
    cta_docs:  "Sou organizador",
  },
} as const satisfies Dict;
