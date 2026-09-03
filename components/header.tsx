"use client"

import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type HeaderProps = {
  copy: Dictionary["nav"]
  lang: string
}

const Header = ({ copy, lang }: HeaderProps) => {
  const pathname = usePathname()

  const navItems = [
    { label: copy.home, href: `/${lang}`, icon: "/home.svg" },
    { label: copy.projects, href: `/${lang}/projects`, icon: "/projetos.svg" },
    { label: copy.about, href: `/${lang}/about`, icon: "/sobre.svg" },
    { label: copy.contact, href: `/${lang}/contact`, icon: "/conta.svg" },
  ]

  return (
    <header className="w-container mx-auto mt-5 mb-16 grid grid-cols-[1fr_auto] items-center gap-4 md:mt-10 md:mb-22.5 md:grid-cols-[1fr_auto_1fr]">
      <div className="hidden md:block" aria-hidden="true" />
      <nav
        className="w-fit justify-self-start rounded-[100vmax] bg-linear-to-b from-[#797979] to-[#363636] p-px md:justify-self-center"
        aria-label="primary navigation"
      >
        <ul className="flex items-center gap-1.5 rounded-[69px] bg-black-bg p-1.5 backdrop-blur-2xl md:gap-2.5 md:p-2.75">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== `/${lang}` && pathname.startsWith(`${item.href}/`))

            return (
              <li key={item.href}>
                <Link
                  className={cn(
                    "group flex size-11 items-center justify-center rounded-full border border-[#363636] text-[#C3C2B7] transition-colors duration-200 hover:border-[#797979] hover:bg-white/5 hover:text-white md:size-auto md:gap-2.5 md:px-3.75 md:py-2 md:text-base",
                    isActive && "border-[#797979] bg-white/5 text-white",
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.label}
                >
                  <Image
                    className={cn(
                      "opacity-75 transition-[filter,opacity] duration-200 group-hover:brightness-0 group-hover:invert group-hover:opacity-100",
                      isActive && "brightness-0 invert opacity-100",
                    )}
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className="justify-self-end text-sm text-[#C3C2B7] md:text-base" aria-label="language navigation">
        <Link className={cn("transition-colors hover:text-white", lang === "pt" && "text-white")} href="/pt">
          PT
        </Link>{" "}
        <span>/</span>{" "}
        <Link className={cn("transition-colors hover:text-white", lang === "en" && "text-white")} href="/en">
          EN
        </Link>
      </nav>
    </header>
  )
}

export default Header
