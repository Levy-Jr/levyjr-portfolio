import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import DownloadCV from "@/public/baixar-curriculo.svg"
import Email from "@/public/entrar-em-contato.svg"
import GitHub from "@/public/github.svg"
import Image from "next/image"
import Link from "next/link"

type ProjectsCtaSectionProps = {
  copy: Dictionary["projectsPage"]["cta"]
  cvHref: string
}

const controlClassName =
  "inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-5 py-2.5 font-medium text-white transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"

const ProjectsCtaSection = ({ copy, cvHref }: ProjectsCtaSectionProps) => (
  <section
    className="w-container mx-auto pt-20 md:pt-25"
    aria-labelledby="projects-cta-title"
  >
    <h2
      id="projects-cta-title"
      className="max-w-[36.5rem] text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-6 max-w-[36.5rem] text-[#C3C2B7]">
      {copy.description}
    </p>

    <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
      <Link
        className={cn(controlClassName, "bg-main-orange")}
        href={cvHref}
        download
      >
        {copy.secondaryButton}
        <Image src={DownloadCV} alt="" width={24} height={24} />
      </Link>

      <a
        className={cn(controlClassName, "gradient-border")}
        href="mailto:levyjrdev@gmail.com"
      >
        {copy.primaryButton}
        <Image src={Email} alt="" width={24} height={24} />
      </a>

      <a
        className={cn(controlClassName, "gradient-border")}
        href="https://github.com/Levy-Jr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.tertiaryButton}
        <Image src={GitHub} alt="" width={24} height={24} />
      </a>
    </div>
  </section>
)

export default ProjectsCtaSection
