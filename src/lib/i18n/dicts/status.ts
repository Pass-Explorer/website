import type { Dict } from "../types";

export const statusDict = {
  en: {
    eyebrow: "All systems operational",
    title:   "All up.",
    sub:     "Last incident: never · 90-day uptime: 99.98% · Updated 14 seconds ago",

    label_operational: "Operational",
    uptime_30d:        "30d · {pct}% uptime",

    svc_rpc:        "Stellar RPC (Validation Cloud)",
    svc_indexer:    "Indexer (Rust + sqlx)",
    svc_postgres:   "Postgres (Neon)",
    svc_contracts:  "Smart contracts",
    svc_privy:      "Privy (Stripe)",
    svc_ipfs:       "IPFS · Pinata",
    svc_web:        "Web app (Vercel)",
    svc_email:      "Email (Resend)",

    latency_rpc:        "142ms",
    latency_indexer:    "4s ago",
    latency_postgres:   "12ms p50",
    latency_contracts:  "no pause",
    latency_privy:      "230ms",
    latency_ipfs:       "847 pins",
    latency_web:        "edge",
    latency_email:      "1.2s p50",

    ledger_eyebrow:    "Stellar testnet · ledger",
    ledger_block:      "Block",
    ledger_fee:        "Fee",
    ledger_tps:        "Tx/s",
    ledger_validators: "Validators",
    ledger_validators_v: "23 nodes",
  },
  pt: {
    eyebrow: "Todos os sistemas operacionais",
    title:   "Tudo no ar.",
    sub:     "Último incidente: nunca · Uptime 90 dias: 99,98% · Atualizado há 14 segundos",

    label_operational: "Operacional",
    uptime_30d:        "30d · {pct}% uptime",

    svc_rpc:        "Stellar RPC (Validation Cloud)",
    svc_indexer:    "Indexer (Rust + sqlx)",
    svc_postgres:   "Postgres (Neon)",
    svc_contracts:  "Smart contracts",
    svc_privy:      "Privy (Stripe)",
    svc_ipfs:       "IPFS · Pinata",
    svc_web:        "Web app (Vercel)",
    svc_email:      "Email (Resend)",

    latency_rpc:        "142ms",
    latency_indexer:    "há 4s",
    latency_postgres:   "12ms p50",
    latency_contracts:  "sem pausa",
    latency_privy:      "230ms",
    latency_ipfs:       "847 pins",
    latency_web:        "edge",
    latency_email:      "1,2s p50",

    ledger_eyebrow:    "Stellar testnet · ledger",
    ledger_block:      "Bloco",
    ledger_fee:        "Fee",
    ledger_tps:        "Tx/s",
    ledger_validators: "Validadores",
    ledger_validators_v: "23 nós",
  },
} as const satisfies Dict;
