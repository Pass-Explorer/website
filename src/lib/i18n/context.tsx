"use client";

import * as React from "react";

import { type Dict, DEFAULT_LANG, isLang, type Lang } from "./types";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = React.createContext<LangContextValue | null>(null);

const STORAGE_KEY = "px-lang";

/**
 * LangProvider - provides the active marketing-site language to all
 * descendants. SSR renders DEFAULT_LANG ("en"); after mount we read
 * localStorage (`px-lang`) and swap to the user's preference, then keep
 * `<html lang>` in sync.
 *
 * Multi-tab safe via the `storage` event so two open tabs stay aligned
 * when the user changes language in one of them.
 */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(DEFAULT_LANG);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      // localStorage may be unavailable (iframe, privacy mode)
    }

    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && isLang(e.newValue)) setLangState(e.newValue);
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // silent
    }
  }, []);

  const value = React.useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

/**
 * useLang - returns `{ lang, setLang }`. Throws if used outside provider.
 */
export function useLang(): LangContextValue {
  const ctx = React.useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used inside a <LangProvider>");
  }
  return ctx;
}

/**
 * useT - returns a typed lookup function bound to the active language.
 * Pass a Dict<K> and call `t("key")` to read the translation.
 */
export function useT<K extends string>(dict: Dict<K>): (key: K) => string {
  const { lang } = useLang();
  return React.useCallback((key: K) => dict[lang][key] ?? dict.en[key] ?? key, [dict, lang]);
}
