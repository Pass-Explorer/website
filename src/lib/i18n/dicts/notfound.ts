import type { Dict } from "../types";

export const notFoundDict = {
  en: {
    eyebrow:    "Page not found",
    title:      "That pass doesn't exist.",
    body:       "Either the link is wrong, the event was removed, or you typed something weird. Try one of these:",
    cta_browse: "Browse festivals",
    cta_faq:    "FAQ",
  },
  pt: {
    eyebrow:    "Página não encontrada",
    title:      "Esse pass não existe.",
    body:       "Ou o link está errado, ou o evento foi removido, ou você digitou algo estranho. Tenta uma dessas:",
    cta_browse: "Ver festivais",
    cta_faq:    "FAQ",
  },
} as const satisfies Dict;
