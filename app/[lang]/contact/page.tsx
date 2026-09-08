import { getDictionary } from "@/content"
import type { Metadata } from "next"
import ContactCtaSection from "./components/contact-cta-section"
import ContactHero from "./components/contact-hero"
import ContactOptionsSection from "./components/contact-options-section"
import ProfessionalContextSection from "./components/professional-context-section"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params
  const copy = getDictionary(lang).contactPage

  return {
    title: `${copy.hero.eyebrow} | Levy Jr.`,
    description: copy.hero.description,
  }
}

const Contact = async ({ params }: PageProps<"/[lang]/contact">) => {
  const { lang } = await params
  const dict = getDictionary(lang)
  const copy = dict.contactPage

  return (
    <main>
      <ContactHero copy={copy.hero} />
      <ContactOptionsSection copy={copy.contactOptions} />
      <ProfessionalContextSection copy={copy.professionalContext} />
      <ContactCtaSection copy={copy.cta} cvHref={dict.cv.href} lang={lang} />
    </main>
  )
}

export default Contact
