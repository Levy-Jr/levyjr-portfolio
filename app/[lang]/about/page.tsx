import { getDictionary } from "@/content"
import type { Metadata } from "next"
import AboutCtaSection from "./components/about-cta-section"
import AboutHero from "./components/about-hero"
import BackgroundSection from "./components/background-section"
import CurrentEvolutionSection from "./components/current-evolution-section"
import TechnicalProfileSection from "./components/technical-profile-section"
import WorkMethodSection from "./components/work-method-section"
import JsonLd from "@/components/json-ld"
import { createPageMetadata, getLocale } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { createProfilePageJsonLd } from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  const copy = dict.projectsPage.aboutPage

  return createPageMetadata({
    lang,
    title: dict.nav.about,
    description: copy.hero.description,
    route: "/about",
  })
}

const About = async ({ params }: PageProps<"/[lang]/about">) => {
  const { lang } = await params
  const dict = getDictionary(lang)
  const copy = dict.projectsPage.aboutPage
  const profilePageJsonLd = createProfilePageJsonLd({
    lang: getLocale(lang),
    title: `${siteConfig.name} | ${dict.nav.about}`,
    description: copy.hero.description,
  })

  return (
    <>
      <JsonLd data={profilePageJsonLd} />
      <main>
        <AboutHero copy={copy.hero} />
        <BackgroundSection copy={copy.background} />
        <WorkMethodSection copy={copy.workMethod} />
        <TechnicalProfileSection
          copy={copy.technicalProfile}
          groups={dict.homePage.skills.groups}
        />
        <CurrentEvolutionSection copy={copy.currentEvolution} />
        <AboutCtaSection
          copy={copy.cta}
          cvHref={dict.cv.href}
          socialCopy={dict.homePage.contact}
        />
      </main>
    </>
  )
}

export default About
