import { Instrument_Sans, Manrope, Inter, Fustat } from 'next/font/google'
import type { Metadata } from "next";
import "../globals.css";
import { locales } from "@/lib/i18n";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/content';

export const metadata: Metadata = {
  title: "Levy Jr. | Software Developer",
  description: "Desenvolvedor Web com experiência em desenvolvimento, deploy e manutenção de projetos comerciais, incluindo sites, landing pages, e-commerces, integrações e VPS/Coolify.",
};

const inter = Inter({
  subsets: ['latin']
})

const instrumentsSans = Instrument_Sans({
  subsets: ['latin']
})

const manrope = Manrope({
  subsets: ['latin']
})

const fustat = Fustat({
  subsets: ['latin']
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string
  }>
}>) {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <html
      lang={lang}
      className={`antialiased`}
    >
      <body className={`${instrumentsSans.className} min-h-screen flex flex-col text-white bg-black-bg`}>
        <Header copy={dict.nav} lang={lang} />
        {children}
        <Footer
          copy={dict.footer}
          cvHref={dict.cv.href}
          navCopy={dict.nav}
          lang={lang}
        />
      </body>
    </html>
  );
}
