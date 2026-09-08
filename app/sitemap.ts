import { dictionaries } from "@/content"
import { locales } from "@/lib/i18n"
import { getLocalizedUrl } from "@/lib/seo"
import type { MetadataRoute } from "next"

const mainRoutes = ["", "/projects", "/about", "/contact"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => {
    const projectRoutes = dictionaries[lang].projectsPage.featured.projects.map(
      ({ slug }) => `/projects/${slug}`,
    )

    return [...mainRoutes, ...projectRoutes].map((route) => ({
      url: getLocalizedUrl(lang, route),
    }))
  })
}
