import type { Dict } from "../types";

export const termsDict = {
  en: {
    eyebrow: "Legal · v1.0 · 17 May 2026",
    title:   "Terms of use",
    lede:    "By using Pass Explorer, you agree to the terms below. They are real, read them carefully before buying.",

    c1_t: "What Pass Explorer is",
    c1_b: "A festival ticket marketplace operated by Pass Explorer Tecnologia Ltda. (CNPJ XX.XXX.XXX/0001-XX). We connect fans, sellers, and organizers via Stellar smart contracts. We are not a bank, not an anchor, we are a software platform.",
    c2_t: "Your wallet and your tokens",
    c2_b: "When you sign in with email or Google, Privy provisions a custodial-grade Stellar wallet (TEE + Shamir SSS). Tokens (tickets) live in that wallet. You are responsible for the key; we offer recovery via Privy but do not have direct access.",
    c3_t: "Anti-scalping",
    c3_b: "Every resale goes through the Marketplace contract. Listings above the cap set by the organizer are physically rejected. Off-platform transfers are blocked by the EventNFT contract. Attempts to bypass these rules (e.g, external resale of wallet credentials) may be considered a terms violation.",
    c4_t: "Royalty and fees",
    c4_b: "Every resale pays: (a) the seller minus royalty and fee, (b) the royalty configured by the organizer (default 5%), (c) the platform's flat fee (currently R$ 2). Changes to the flat fee go through a 24h time-lock and multisig governance.",
    c5_t: "Cancellations and refunds",
    c5_b: "If the festival cancels, the organizer is responsible for the refund. Pass Explorer provides the on-chain tool (refund mode in the contract) but does not guarantee payment. In case of default, organizer support is a legal matter between you and the organizer.",
    c6_t: "Regulated market",
    c6_b: "Brazil has specific laws on ticket scalping. Pass Explorer operates with caps and royalties precisely for compliance with those rules. Regulatory changes may affect operations; you agree to accept updates to these terms.",
    c7_t: "Limitation of liability",
    c7_b: "Pass Explorer is provided \"as is\". We do not guarantee that the Stellar testnet is always available, nor that every festival delivers the promised event. In case of software failure, our liability is limited to attempting technical resolution.",
    c8_t: "Tax compliance",
    c8_b: "Royalty received by the organizer is taxable income in Brazil. Pass Explorer reports these amounts to the Receita Federal as required by law. You are responsible for tax obligations arising from your use of the platform.",

    contact_title: "Legal questions",
    contact_body:  "legal@passexplorer.com · Last reviewed by dpo@passexplorer.com on 17 May 2026",
  },
  pt: {
    eyebrow: "Legal · v1.0 · 17 mai 2026",
    title:   "Termos de uso",
    lede:    "Ao usar o Pass Explorer, você concorda com os termos abaixo. Eles são reais, leia com cuidado antes de comprar.",

    c1_t: "O que é o Pass Explorer",
    c1_b: "Marketplace de ingressos para festivais operado pela Pass Explorer Tecnologia Ltda. (CNPJ XX.XXX.XXX/0001-XX). Conectamos fãs, vendedores e organizadores via smart contracts na Stellar. Não somos banco, não somos anchor, somos uma plataforma de software.",
    c2_t: "Sua carteira e seus tokens",
    c2_b: "Quando você entra com email ou Google, o Privy provisiona uma carteira Stellar custodial-grade (TEE + Shamir SSS). Os tokens (ingressos) ficam nessa carteira. Você é responsável pela chave; oferecemos recovery via Privy mas não temos acesso direto.",
    c3_t: "Anti-cambismo",
    c3_b: "Toda revenda passa pelo contrato Marketplace. Listagens acima do teto definido pelo organizador são fisicamente rejeitadas. Transferências off-platform são bloqueadas pelo contrato EventNFT. Tentativas de burlar essas regras (ex: revenda externa de credenciais) podem ser consideradas violação de termos.",
    c4_t: "Royalty e taxas",
    c4_b: "Cada revenda paga: (a) valor pro vendedor menos royalty e taxa, (b) royalty configurado pelo organizador (padrão 5%), (c) taxa fixa da plataforma (atualmente R$ 2). Mudanças na taxa fixa passam por time-lock de 24h e governance multisig.",
    c5_t: "Cancelamentos e reembolso",
    c5_b: "Se o festival cancelar, o organizador é responsável pelo refund. Pass Explorer fornece a ferramenta on-chain (refund mode no contrato) mas não garante o pagamento. Em caso de inadimplência, suporte ao organizador é assunto legal entre você e o organizador.",
    c6_t: "Mercado regulado",
    c6_b: "O Brasil tem leis específicas sobre cambismo de ingressos. O Pass Explorer opera com teto e royalty exatamente pra cumprir essas regras. Mudanças regulatórias podem afetar a operação; você aceita updates nesses termos.",
    c7_t: "Limitação de responsabilidade",
    c7_b: "O Pass Explorer é fornecido \"como é\". Não garantimos que a Stellar testnet esteja sempre disponível, nem que cada festival entregue o evento prometido. Em caso de falha de software, nossa responsabilidade limita-se a tentar resolver tecnicamente.",
    c8_t: "Compliance fiscal",
    c8_b: "Royalty recebido pelo organizador é renda tributável no Brasil. O Pass Explorer reporta esses valores pra Receita Federal conforme a lei. Você é responsável pelas obrigações fiscais decorrentes do uso da plataforma.",

    contact_title: "Dúvidas legais",
    contact_body:  "legal@passexplorer.com · Última revisão por dpo@passexplorer.com em 17 mai 2026",
  },
} as const satisfies Dict;
