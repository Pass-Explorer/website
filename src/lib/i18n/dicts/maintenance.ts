import type { Dict } from "../types";

export const maintenanceDict = {
  en: {
    eyebrow:   "Maintenance window",
    title_a:   "Back in",
    title_b:   "14 minutes.",
    body:      "Stellar RPC is migrating to v4.2. Purchases and resales are paused — already-purchased passes remain valid in your wallet.",
    eta:       "ETA · 22:14 BRT · 14m 32s",
    cta:       "View detailed status",
  },
  pt: {
    eyebrow:   "Janela de manutenção",
    title_a:   "Voltamos",
    title_b:   "em 14 minutos.",
    body:      "A Stellar RPC está migrando para v4.2. Compras e revendas estão pausadas — passes já comprados continuam válidos na sua carteira.",
    eta:       "ETA · 22:14 BRT · 14m 32s",
    cta:       "Ver status detalhado",
  },
} as const satisfies Dict;
