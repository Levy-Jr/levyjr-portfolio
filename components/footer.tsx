"use client"

import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import DownloadCV from "@/public/baixar-curriculo.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import GradientBorderLink from "./gradient-border-link"

type FooterProps = {
  copy: Dictionary["footer"]
  lang: string
  navCopy: Dictionary["nav"]
}

const Footer = ({ copy, lang, navCopy }: FooterProps) => {
  const pathname = usePathname()

  const navItems = [
    { label: navCopy.home, href: `/${lang}` },
    { label: navCopy.projects, href: `/${lang}/projects` },
    { label: navCopy.about, href: `/${lang}/about` },
    { label: navCopy.contact, href: `/${lang}/contact` },
  ]

  return (
    <footer className="w-container mx-auto pt-24 mt-25 mb-35">
      <div className="border-t border-[#363636] pt-10 pb-3">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <nav aria-label="footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-start lg:gap-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== `/${lang}` && pathname.startsWith(`${item.href}/`))

                return (
                  <li key={item.href}>
                    <Link
                      className={cn(
                        "text-[#C3C2B7] transition-colors hover:text-white",
                        isActive && "text-white",
                      )}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <nav className="text-[#C3C2B7]" aria-label="footer language navigation">
              <Link className={cn("transition-colors hover:text-white", lang === "pt" && "text-white")} href="/pt">
                PT
              </Link>{" "}
              <span>/</span>{" "}
              <Link className={cn("transition-colors hover:text-white", lang === "en" && "text-white")} href="/en">
                EN
              </Link>
            </nav>

            <GradientBorderLink href={copy.cvHref} download>
              {navCopy.downloadCv}
              <Image src={DownloadCV} alt="" width={24} height={24} />
            </GradientBorderLink>
          </div>
        </div>

        <p className="mt-7 text-center text-sm text-[#C3C2B7] sm:text-base">
          {copy.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
