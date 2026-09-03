import { getDictionary } from "@/content";
import { HeroSection } from "./components/hero-section";
import ExperienceSummary from "./components/experience-summary";
import ContactSection from "./components/contact-section";
import SkillsSection from "./components/skills-section";
import BusinessImpactSection from "./components/business-impact-section";
import ProductionWorkflowSection from "./components/production-workflow-section";
import FeaturedProjectsIntro from "./components/featured-projects-intro";
import FeaturedProjectsSection from "./components/featured-projects-section";

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
      <FeaturedProjectsIntro copy={dict.homePage.featuredProjects} />
      <FeaturedProjectsSection
        buttonLabel={dict.homePage.featuredProjects.viewAllButton}
        highlightsLabel={dict.homePage.featuredProjects.highlightsLabel}
        lang={lang}
        projects={dict.projectsPage.featured.projects}
        sectionLabel={dict.homePage.featuredProjects.title}
      />
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
