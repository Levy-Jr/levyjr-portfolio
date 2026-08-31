import { getDictionary } from "@/content";
import { HeroSection } from "./components/hero-section";
import ExperienceSummary from "./components/experience-summary";

const Home = async ({ params }: {
  params: Promise<{
    lang: string
  }>
}) => {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <main>
      <HeroSection copy={dict.homePage.hero} lang={lang} />
      <ExperienceSummary copy={dict.homePage.experienceSummary} />
    </main>
  );
}

export default Home
