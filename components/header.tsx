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
    <header className="w-container mx-auto mt-10 mb-22.5 flex justify-between items-center">
      <div></div>
      <nav
        className="rounded-[100vmax] bg-linear-to-b from-[#797979] to-[#363636] p-px"
        aria-label="primary navigation"
      >
        <ul className="flex items-center gap-2.5 rounded-[69px] bg-black-bg p-2.75 backdrop-blur-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== `/${lang}` && pathname.startsWith(`${item.href}/`))

            return (
              <li key={item.href}>
                <Link
                  className={cn(
                    "group flex items-center justify-center gap-2.5 rounded-full border border-[#363636] px-3.75 py-2 text-base text-[#C3C2B7] transition-colors duration-200 hover:border-[#797979] hover:bg-white/5 hover:text-white",
                    isActive && "border-[#797979] bg-white/5 text-white",
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
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
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className="text-[#C3C2B7]" aria-label="language navigation">
        <Link className={cn(lang === "pt" && "text-white")} href="/pt">
          PT
        </Link>{" "}
        <span>/</span>{" "}
        <Link className={cn(lang === "en" && "text-white")} href="/en">
          EN
        </Link>
      </nav>
    </header>
  )
}

export default Header
