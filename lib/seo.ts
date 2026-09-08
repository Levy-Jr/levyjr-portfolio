import { hasLocale, type Locale } from "@/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "./site"

export const localeSeo = {
  pt: {
    htmlLanguage: "pt-BR",
    openGraphLocale: "pt_BR",
  },
  en: {
    htmlLanguage: "en",
    openGraphLocale: "en_US",
  },
} satisfies Record<Locale, {
  htmlLanguage: string
  openGraphLocale: string
}>

export const getLocale = (lang: string): Locale => {
  if (!hasLocale(lang)) notFound()

  return lang
}

const normalizeRoute = (route: string) => {
  if (!route || route === "/") return ""

  return route.startsWith("/") ? route : `/${route}`
}

export const getAbsoluteUrl = (pathname = "") =>
  new URL(pathname, siteConfig.url).toString()

export const getLocalizedPath = (lang: Locale, route = "") =>
  `/${lang}${normalizeRoute(route)}`

export const getLocalizedUrl = (lang: Locale, route = "") =>
  getAbsoluteUrl(getLocalizedPath(lang, route))

type PageMetadataOptions = {
  lang: string
  title: string
  description: string
  route?: string
  absoluteTitle?: boolean
}

export const createPageMetadata = ({
  lang,
  title,
  description,
  route = "",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata => {
  const locale = getLocale(lang)
  const canonical = getLocalizedUrl(locale, route)
  const fullTitle = absoluteTitle
    ? title
    : `${siteConfig.name} | ${title}`
  const socialImage = siteConfig.socialImage

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        "pt-BR": getLocalizedUrl("pt", route),
        en: getLocalizedUrl("en", route),
        "x-default": getLocalizedUrl(siteConfig.defaultLocale, route),
      },
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: localeSeo[locale].openGraphLocale,
      alternateLocale: [
        localeSeo[locale === "pt" ? "en" : "pt"].openGraphLocale,
      ],
      ...(socialImage
        ? {
            images: [
              {
                url: getAbsoluteUrl(socialImage),
                width: 1200,
                height: 630,
                alt: fullTitle,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(socialImage
        ? { images: [getAbsoluteUrl(socialImage)] }
        : {}),
    },
  }
}
