import { dictionaries, getDictionary } from "@/content"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectsCtaSection from "../components/projects-cta-section"
import ProjectDetails from "./components/project-details"
import ProjectHero from "./components/project-hero"
import ProjectShowcase from "./components/project-showcase"
import JsonLd from "@/components/json-ld"
import { createPageMetadata, getLocale } from "@/lib/seo"
import { createProjectBreadcrumbJsonLd } from "@/lib/structured-data"

export const dynamicParams = false

export function generateStaticParams() {
  return (["pt", "en"] as const).flatMap((lang) =>
    dictionaries[lang].projectsPage.featured.projects.map((project) => ({
      lang,
      slug: project.slug,
    })),
  )
}

const getProjectPageData = (lang: string, slug: string) => {
  const dict = getDictionary(lang)
  const projectIndex = dict.projectsPage.featured.projects.findIndex(
    (project) => project.slug === slug,
  )

  if (projectIndex === -1) notFound()

  return {
    dict,
    project: dict.projectsPage.featured.projects[projectIndex],
    previousProject: dict.projectsPage.featured.projects[projectIndex - 1],
    nextProject: dict.projectsPage.featured.projects[projectIndex + 1],
  }
}

const getStatusLabel = (
  copy: ReturnType<typeof getProjectPageData>["dict"]["projectsPage"]["project"],
  status: string,
) => {
  if (status === "deactivated") return copy.statuses.deactivated
  if (status === "demo") return copy.statuses.demo

  return copy.statuses.production
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params
  const { project } = getProjectPageData(lang, slug)

  return createPageMetadata({
    lang,
    title: project.title,
    description: project.description,
    route: `/projects/${slug}`,
  })
}

const Project = async ({
  params,
}: PageProps<"/[lang]/projects/[slug]">) => {
  const { lang, slug } = await params
  const { dict, project, previousProject, nextProject } = getProjectPageData(
    lang,
    slug,
  )
  const projectCopy = dict.projectsPage.project
  const breadcrumbJsonLd = createProjectBreadcrumbJsonLd({
    lang: getLocale(lang),
    projectsLabel: dict.nav.projects,
    projectTitle: project.title,
    slug,
  })

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <main>
        <ProjectHero
          copy={projectCopy}
          lang={lang}
          project={project}
          previousProject={previousProject}
          nextProject={nextProject}
          statusLabel={getStatusLabel(projectCopy, project.status)}
        />
        <ProjectShowcase
          project={project}
          stackTitle={projectCopy.stackTitle}
        />
        <ProjectDetails copy={projectCopy} details={project.details} />
        <ProjectsCtaSection
          copy={dict.projectsPage.cta}
          cvHref={dict.cv.href}
        />
      </main>
    </>
  )
}

export default Project
