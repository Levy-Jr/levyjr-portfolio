import { getDictionary } from "@/content";
import { HeroSection } from "./components/hero-section";
import ExperienceSummary from "./components/experience-summary";
import ContactSection from "./components/contact-section";
import SkillsSection from "./components/skills-section";
import BusinessImpactSection from "./components/business-impact-section";
import ProductionWorkflowSection from "./components/production-workflow-section";

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
      <SkillsSection copy={dict.homePage.skills} />
      <BusinessImpactSection copy={dict.homePage.businessImpact} />
      <ProductionWorkflowSection copy={dict.homePage.productionWorkflow} />
      <ContactSection
        copy={dict.homePage.contact}
        cvHref={dict.footer.cvHref}
        cvLabel={dict.nav.downloadCv}
      />
    </main>
  );
}

export default Home
