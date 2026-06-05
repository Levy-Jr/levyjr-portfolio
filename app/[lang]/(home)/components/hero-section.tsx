import { getDictionary } from "@/content";

const validLangs = ["pt", "en"] as const;

type Lang = (typeof validLangs)[number];

const isValidLang = (lang: Lang) => {
  return validLangs.includes(lang)
}

const heroSection = async ({ params }: {
  params: Promise<{
    lang: string;
  }>
}) => {
  const { lang } = await params

  /* const dict = getDictionary(lang) */

  return (
    <section>
      <h1></h1>
    </section>
  )
}

export default heroSection