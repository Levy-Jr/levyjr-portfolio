import { Dictionary } from "@/content"
import Image from "next/image";
import Link from "next/link"
import DownloadCV from "@/public/baixar-curriculo.svg"
import GetInTouch from "@/public/entrar-em-contato.svg"
import GradientBorderLink from "@/components/gradient-border-link"

type HeroSectionProps = {
  copy: Dictionary["homePage"]["hero"]
  lang: string;
}

export const HeroSection = ({ copy, lang }: HeroSectionProps) => {
  return (
    <section className="text-center max-w-[61ch] mx-auto">
      <p className="text-sm text-main-orange">{copy.eyebrow}</p>
      <h1 className="mt-5 mb-3.25 font-bold text-4xl">{copy.headline}</h1>
      <p className="text-[#C3C2B7]">{copy.description}</p>
      <div className="w-fit mx-auto mt-11 flex items-center gap-2.5">
        <Link className="rounded-lg bg-main-orange px-5 py-2.5" href={`/${lang}/projects`}>{copy.primaryButton}</Link>
        <GradientBorderLink href="/cv/Levy_Gomes_Web_Developer_CV.pdf" download>
          {copy.secondaryButton}
          <Image
            src={DownloadCV}
            alt=""
          />
        </GradientBorderLink>
        <GradientBorderLink href={`/${lang}/contact`}>
          {copy.contactButton}
          <Image
            src={GetInTouch}
            alt=""
          />
        </GradientBorderLink>
      </div>
    </section>
  )
}
