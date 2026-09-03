import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import DownloadCV from "@/public/baixar-curriculo.svg"
import Email from "@/public/entrar-em-contato.svg"
import GitHub from "@/public/github.svg"
import LinkedIn from "@/public/linkedin.svg"
import Image from "next/image"
import Link from "next/link"

type ContactSectionProps = {
  copy: Dictionary["homePage"]["contact"]
  cvHref: string
  cvLabel: string
}

const controlClassName = "inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-5 py-2.5 font-medium text-white transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"

const ContactSection = ({ copy, cvHref, cvLabel }: ContactSectionProps) => (
  <section
    className="w-container mx-auto mt-24 border-t border-[#363636] pt-16"
    aria-labelledby="contact-section-title"
  >
    <h2 id="contact-section-title" className="text-3xl font-bold sm:text-[2.5rem]">
      {copy.title}
    </h2>

    <p className="mt-3 max-w-100 text-[#C3C2B7]">
      {copy.subtitle}
    </p>

    <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
      <Link
        className={cn(controlClassName, "bg-main-orange")}
        href={cvHref}
        download
      >
        {cvLabel}
        <Image src={DownloadCV} alt="" width={24} height={24} />
      </Link>

      <a href="mailto:levyjrdev@gmail.com" className={cn(controlClassName, "gradient-border")}>
        {copy.emailButton}
        <Image src={Email} alt="" width={24} height={24} />
      </a>

      <a href="https://www.linkedin.com/in/levy-gomes/" target="_blank" rel="noopener noreferrer" className={cn(controlClassName, "bg-main-orange")}>
        {copy.linkedinButton}
        <Image src={LinkedIn} alt="" width={24} height={24} />
      </a>

      <a href="https://github.com/Levy-Jr/" target="_blank" rel="noopener noreferrer" className={cn(controlClassName, "gradient-border")}>
        {copy.githubButton}
        <Image src={GitHub} alt="" width={24} height={24} />
      </a>
    </div>
  </section>
)

export default ContactSection
