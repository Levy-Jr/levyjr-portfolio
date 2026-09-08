import type { Dictionary } from "@/content"
import GradientBorderLink from "@/components/gradient-border-link"
import DownloadCV from "@/public/baixar-curriculo.svg"
import Image from "next/image"
import Link from "next/link"

type ContactCtaSectionProps = {
  copy: Dictionary["contactPage"]["cta"]
  cvHref: string
  lang: string
}

const ContactCtaSection = ({ copy, cvHref, lang }: ContactCtaSectionProps) => (
  <section
    className="w-container mx-auto pt-20 md:pt-25"
    aria-labelledby="contact-cta-title"
  >
    <h2
      id="contact-cta-title"
      className="max-w-[36.5rem] text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-6 max-w-[36.5rem] leading-tight text-[#C3C2B7]">
      {copy.description}
    </p>

    <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
      <GradientBorderLink className="w-full sm:w-auto" href={cvHref} download>
        {copy.secondaryButton}
        <Image src={DownloadCV} alt="" width={24} height={24} />
      </GradientBorderLink>

      <Link
        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-main-orange px-5 py-2.5 font-medium text-white transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        href={`/${lang}/projects`}
      >
        {copy.primaryButton}
      </Link>
    </div>
  </section>
)

export default ContactCtaSection
