import { getDictionary } from "@/content"
import AdditionalProjectsSection from "./components/additional-projects-section"
import FeaturedProjectsSection from "./components/featured-projects-section"
import ProjectsCtaSection from "./components/projects-cta-section"
import ProjectsHero from "./components/projects-hero"
import SharedExperienceSection from "./components/shared-experience-section"
import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)

  return createPageMetadata({
    lang,
    title: dict.nav.projects,
    description: dict.projectsPage.hero.description,
    route: "/projects",
  })
}

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
