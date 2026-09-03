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
    <section className="w-container mx-auto max-w-[61ch] text-center">
      <p className="text-sm text-main-orange">{copy.eyebrow}</p>
      <h1 className="mt-5 mb-3.25 font-bold text-4xl">{copy.headline}</h1>
      <p className="text-[#C3C2B7]">{copy.description}</p>
      <div className="mx-auto mt-11 flex flex-col gap-2.5 sm:w-fit sm:flex-row sm:items-center">
        <Link className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-main-orange px-5 py-2.5 sm:w-auto" href={`/${lang}/projects`}>{copy.primaryButton}</Link>
        <GradientBorderLink className="w-full sm:w-auto" href="/cv/Levy_Gomes_Web_Developer_CV.pdf" download>
          {copy.secondaryButton}
          <Image
            src={DownloadCV}
            alt=""
          />
        </GradientBorderLink>
        <GradientBorderLink className="w-full sm:w-auto" href={`/${lang}/contact`}>
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
