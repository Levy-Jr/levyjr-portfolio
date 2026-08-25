import { notFound } from "next/navigation";
import { en } from "./en";
import { pt } from "./pt";

export const dictionaries = {
  en,
  pt,
};

export type Locale = keyof typeof dictionaries;

export type Dictionary = (typeof dictionaries)[Locale]

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export function getDictionary(locale: string) {
  if (!hasLocale(locale)) {
    notFound()
  }
  return dictionaries[locale];
}
