import type { Dict } from "../types";

export const festivalsDict = {
  en: {
    eyebrow:   "Festivals · testnet",
    title_a:   "The first festivals",
    title_b:   "are coming.",
    lede:      "Pass Explorer is pre-launch. We're talking to the first organizers and prepping the testnet flow end-to-end. Join the waitlist to know the moment real listings open — and which festivals join first.",

    pill:      "Pre-launch",

    why:       "These cards are visual examples",
    why_body:  "The festivals shown above illustrate the kind of event Pass Explorer is built for — they are not partnerships or listings yet. When mainnet ships, the real list starts with the organizers who onboard with us first. Want to be one of them? Reach out via the docs.",

    cta_join:  "Join waitlist",
    cta_docs:  "I'm an organizer",
  },
  pt: {
    eyebrow:   "Festivais · testnet",
    title_a:   "Os primeiros festivais",
    title_b:   "estão chegando.",
    lede:      "O Pass Explorer está em pré-lançamento. Estamos conversando com os primeiros organizadores e preparando o fluxo na testnet. Entra na lista de espera pra saber o momento exato que as listagens reais abrirem — e quais festivais entram primeiro.",

    pill:      "Pré-lançamento",

    why:       "Esses cards são exemplos visuais",
    why_body:  "Os festivais acima ilustram o tipo de evento para o qual o Pass Explorer foi construído — não são parcerias nem listagens ativas ainda. Quando o mainnet for ao ar, a lista real começa pelos organizadores que embarcarem com a gente primeiro. Quer ser um deles? Fala com a gente pelo docs.",

    cta_join:  "Entrar na lista",
    cta_docs:  "Sou organizador",
  },
} as const satisfies Dict;
