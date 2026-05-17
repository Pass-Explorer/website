export type Lang = "en" | "pt";

export const LANGS: Lang[] = ["en", "pt"];
export const DEFAULT_LANG: Lang = "en";

/**
 * A Dict<K> is a record indexed by Lang, where each value is a record of
 * translation keys K → string. Pass to `useT(dict)` to get a typed
 * lookup function bound to the active language.
 */
export type Dict<K extends string = string> = Record<Lang, Record<K, string>>;

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "pt";
}
