import Footer from "@/components/footer"
import Header from "@/components/header"
import JsonLd from "@/components/json-ld"
import { getDictionary } from "@/content"
import { locales } from "@/lib/i18n"
import { getLocale, localeSeo } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { createIdentityJsonLd } from "@/lib/structured-data"
import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "../globals.css"

const instrumentsSans = Instrument_Sans({
  subsets: ["latin"],
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.seo.homeTitle,
      template: `${siteConfig.name} | %s`,
    },
    description: dict.homePage.hero.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.ownerName, url: siteConfig.url }],
    creator: siteConfig.ownerName,
    publisher: siteConfig.ownerName,
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const locale = getLocale(lang)
  const identityJsonLd = createIdentityJsonLd({
    lang: locale,
    jobTitle: dict.seo.jobTitle,
    description: dict.homePage.hero.description,
  })

  return (
    <html lang={localeSeo[locale].htmlLanguage} className="antialiased">
      <body
        className={`${instrumentsSans.className} min-h-screen flex flex-col text-white bg-black-bg`}
      >
        <JsonLd data={identityJsonLd} />
        <Header copy={dict.nav} lang={lang} />
        {children}
        <Footer
          copy={dict.footer}
          cvHref={dict.cv.href}
          navCopy={dict.nav}
          lang={lang}
        />
      </body>
    </html>
  )
}
