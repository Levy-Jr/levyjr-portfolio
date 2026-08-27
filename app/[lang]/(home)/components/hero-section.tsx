import { Dictionary } from "@/content"
import Image from "next/image";
import Link from "next/link"
import DownloadCV from "@/public/baixar-curriculo.svg"
import GetInTouch from "@/public/entrar-em-contato.svg"
import { cn } from "@/lib/utils"
import styles from "./hero-section.module.css"

const outlinedButton = cn(
  "flex items-center gap-2.5 bg-white/2 py-2.5",
  styles.gradientBorder,
)

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
      <div className="w-fit mx-auto mt-11 flex items-center gap-2.5 *:px-5 *:rounded-[.4375rem]">
        <Link className="bg-main-orange py-2.5" href={`/${lang}/projects`}>{copy.primaryButton}</Link>
        <Link className={outlinedButton} href={"/projects"}>
          {copy.secondaryButton}
          <Image
            src={DownloadCV}
            alt=""
          />
        </Link>
        <Link className={outlinedButton} href={"/projects"}>
          {copy.contactButton}
          <Image
            src={GetInTouch}
            alt=""
          />
        </Link>
      </div>
    </section>
  )
}
