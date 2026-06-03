import { en } from "@/content/en";
import { pt } from "@/content/pt";

export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return locale === "pt" ? pt : en;
}