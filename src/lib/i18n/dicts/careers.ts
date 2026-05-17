import type { Dict } from "../types";

export const careersDict = {
  en: {
    eyebrow:  "Careers · we're tiny",
    title_a:  "We're three.",
    title_b:  "We'll be four.",
    lede:     "Pass Explorer is run by 3 co-founders. We're hiring as we ship, not before. No open roles right now — but if you'd jump on board the moment we open one, send the email below.",

    values_title:    "How we work",
    v1_t: "Ship in public",
    v1_b: "Changelog, blog, X. Every meaningful decision is written down where the community can read it.",
    v2_t: "Small team, big leverage",
    v2_b: "We stay small on purpose. Each person owns a vertical end-to-end — design, code, deploy, support — and pairs with the rest of the team on the seams.",
    v3_t: "Brazilian-first, global next",
    v3_b: "We're shipping for the Brazilian festival market because we know it best. Mainnet expansion follows the same playbook — start where the team has reps.",

    roles_title:     "Roles when we open",
    r1_t: "Senior product engineer",
    r1_b: "Owns either the contracts side (Soroban + Rust) or the app side (Next.js + Privy + Stellar SDK). Comfortable shipping with little process.",
    r2_t: "Festival ops partner",
    r2_b: "Helps us onboard Brazilian organizers, negotiates the first 10 LOIs, handles ticketing-industry diligence. Music industry background a plus.",

    pitch_title:   "Want to be first?",
    pitch_body:    "Email careers@passexplorer.com with a short note about which area gets you fired up. We read everything; we reply when a role opens that fits.",
    cta:           "careers@passexplorer.com",
  },
  pt: {
    eyebrow:  "Vagas · ainda somos pequenos",
    title_a:  "Somos três.",
    title_b:  "Seremos quatro.",
    lede:     "O Pass Explorer é tocado por 3 co-fundadores. Contratamos conforme entregamos, não antes. Sem vagas abertas agora — mas se você embarcaria no momento em que abrirmos uma, manda o email abaixo.",

    values_title:    "Como trabalhamos",
    v1_t: "Construir em público",
    v1_b: "Changelog, blog, X. Toda decisão importante fica escrita onde a comunidade pode ler.",
    v2_t: "Time pequeno, alavancagem grande",
    v2_b: "A gente fica pequeno de propósito. Cada pessoa toma conta de uma vertical de ponta a ponta — design, código, deploy, suporte — e parea com o resto do time nos pontos de junção.",
    v3_t: "Brasil primeiro, global depois",
    v3_b: "Estamos entregando pro mercado brasileiro de festivais porque é o que conhecemos melhor. Expansão na mainnet segue a mesma cartilha — começa onde o time tem repetição.",

    roles_title:     "Vagas quando abrirmos",
    r1_t: "Engenheiro de produto sênior",
    r1_b: "Cuida do lado dos contratos (Soroban + Rust) OU do lado do app (Next.js + Privy + Stellar SDK). Confortável entregando com pouco processo.",
    r2_t: "Sócio de operações de festival",
    r2_b: "Nos ajuda a embarcar organizadores brasileiros, negocia as 10 primeiras LOIs, faz a diligência do mercado ticketeiro. Background na indústria musical é plus.",

    pitch_title:   "Quer ser o primeiro?",
    pitch_body:    "Manda email pra careers@passexplorer.com com uma nota curta sobre qual área te empolga. A gente lê tudo; respondemos quando abre uma vaga que combina.",
    cta:           "careers@passexplorer.com",
  },
} as const satisfies Dict;
