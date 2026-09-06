import { getDictionary } from "@/content"
import AdditionalProjectsSection from "./components/additional-projects-section"
import FeaturedProjectsSection from "./components/featured-projects-section"
import ProjectsCtaSection from "./components/projects-cta-section"
import ProjectsHero from "./components/projects-hero"
import SharedExperienceSection from "./components/shared-experience-section"

const Projects = async ({ params }: PageProps<"/[lang]/projects">) => {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <main>
      <ProjectsHero copy={dict.projectsPage.hero} />
      <FeaturedProjectsSection copy={dict.projectsPage.featured} />
      <AdditionalProjectsSection copy={dict.projectsPage.additional} />
      <SharedExperienceSection copy={dict.projectsPage.sharedExperience} />
      <ProjectsCtaSection
        copy={dict.projectsPage.cta}
        cvHref={dict.cv.href}
      />
    </main>
  )
}

export default Projects
