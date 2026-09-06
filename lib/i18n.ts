import { en } from "@/content/en";
import { pt } from "@/content/pt";

export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocalizedPathname(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean)

  if (isValidLocale(segments[0])) {
    segments[0] = locale
  } else {
    segments.unshift(locale)
  }

  return `/${segments.join("/")}`
}

export function getDictionary(locale: Locale) {
  return locale === "pt" ? pt : en;
}
