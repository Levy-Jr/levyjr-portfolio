import type { Locale } from "@/content"
import { getLocalizedUrl, localeSeo } from "./seo"
import { siteConfig } from "./site"

const personId = `${siteConfig.url}/#person`
const websiteId = `${siteConfig.url}/#website`

type IdentityJsonLdOptions = {
  lang: Locale
  jobTitle: string
  description: string
}

export const createIdentityJsonLd = ({
  lang,
  jobTitle,
  description,
}: IdentityJsonLdOptions) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: ["pt-BR", "en"],
      author: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.ownerName,
      alternateName: siteConfig.name,
      url: getLocalizedUrl(siteConfig.defaultLocale, "/about"),
      jobTitle,
      description,
      inLanguage: localeSeo[lang].htmlLanguage,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressCountry: siteConfig.location.country,
      },
      sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
      knowsAbout: siteConfig.knowsAbout,
    },
  ],
})

type ProfilePageJsonLdOptions = {
  lang: Locale
  title: string
  description: string
}

export const createProfilePageJsonLd = ({
  lang,
  title,
  description,
}: ProfilePageJsonLdOptions) => {
  const url = getLocalizedUrl(lang, "/about")

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile-page`,
    url,
    name: title,
    description,
    inLanguage: localeSeo[lang].htmlLanguage,
    mainEntity: { "@id": personId },
    isPartOf: { "@id": websiteId },
  }
}

type BreadcrumbJsonLdOptions = {
  lang: Locale
  projectsLabel: string
  projectTitle: string
  slug: string
}

export const createProjectBreadcrumbJsonLd = ({
  lang,
  projectsLabel,
  projectTitle,
  slug,
}: BreadcrumbJsonLdOptions) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: projectsLabel,
      item: getLocalizedUrl(lang, "/projects"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: projectTitle,
      item: getLocalizedUrl(lang, `/projects/${slug}`),
    },
  ],
})
