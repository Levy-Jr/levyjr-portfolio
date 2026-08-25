import { getDictionary } from "@/content";
import { HeroSection } from "./components/hero-section";

const Home = async ({ params }: {
  params: Promise<{
    lang: string
  }>
}) => {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <main>
      <HeroSection copy={dict.homePage.hero} />
    </main>
  );
}

export default Home
