import type { Dict } from "../types";

/**
 * common, copy shared across header, footer, and CTAs that appear on
 * every page.
 */
export const commonDict = {
  en: {
    nav_festivals:    "Festivals",
    nav_docs:         "Docs",
    nav_how_it_works: "How it works",
    nav_faq:          "FAQ",
    nav_about:        "About",
    nav_status:       "Status",

    cta_sign_in:       "Sign in",
    cta_join_waitlist: "Join waitlist",

    footer_blurb:   "Festival ticket marketplace on Stellar. Built in Brazil, open to organizers worldwide.",
    footer_product: "Product",
    footer_company: "Company",
    footer_legal:   "Legal",
    footer_system:  "System",

    footer_about:     "About",
    footer_blog:      "Blog",
    footer_press:     "Press",
    footer_careers:   "Careers",
    footer_terms:     "Terms",
    footer_privacy:   "Privacy",
    footer_cookies:   "Cookies",
    footer_lgpd:      "LGPD",
    footer_changelog: "Changelog",
    footer_github:    "GitHub",
    footer_x:         "X / Twitter",
    footer_discord:   "Discord",

    footer_copy: "© 2026 Pass Explorer · Built on Stellar",
    footer_build: "v0.1.0 · build 5eb83e",
  },
  pt: {
    nav_festivals:    "Festivais",
    nav_docs:         "Docs",
    nav_how_it_works: "Como funciona",
    nav_faq:          "FAQ",
    nav_about:        "Sobre",
    nav_status:       "Status",

    cta_sign_in:       "Entrar",
    cta_join_waitlist: "Lista de espera",

    footer_blurb:   "Marketplace de ingressos para festivais na Stellar. Feito no Brasil, aberto a organizadores no mundo todo.",
    footer_product: "Produto",
    footer_company: "Empresa",
    footer_legal:   "Legal",
    footer_system:  "Sistema",

    footer_about:     "Sobre",
    footer_blog:      "Blog",
    footer_press:     "Imprensa",
    footer_careers:   "Vagas",
    footer_terms:     "Termos",
    footer_privacy:   "Privacidade",
    footer_cookies:   "Cookies",
    footer_lgpd:      "LGPD",
    footer_changelog: "Changelog",
    footer_github:    "GitHub",
    footer_x:         "X / Twitter",
    footer_discord:   "Discord",

    footer_copy: "© 2026 Pass Explorer · Construído na Stellar",
    footer_build: "v0.1.0 · build 5eb83e",
  },
} as const satisfies Dict;
