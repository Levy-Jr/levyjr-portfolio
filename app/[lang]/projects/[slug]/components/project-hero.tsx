import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import BackArrow from "@/public/pagina-do-projetos/arrow-gray.svg"
import ProjectArrow from "@/public/pagina-do-projetos/arrow-white.svg"
import Image from "next/image"
import Link from "next/link"

type Project = Dictionary["projectsPage"]["featured"]["projects"][number]

type ProjectLink = Pick<Project, "slug" | "title">

type ProjectHeroProps = {
  copy: Dictionary["projectsPage"]["project"]
  lang: string
  nextProject?: ProjectLink
  previousProject?: ProjectLink
  project: Project
  statusLabel: string
}

const statusClassName = (status: string) => {
  if (status === "deactivated") return "text-[#FF3D3D]"
  if (status === "demo") return "text-[#FFDF28]"

  return "text-[#39FF5A]"
}

const ProjectHero = ({
  copy,
  lang,
  nextProject,
  previousProject,
  project,
  statusLabel,
}: ProjectHeroProps) => (
  <section
    className="w-container mx-auto"
    aria-labelledby="project-page-title"
  >
    <Link
      className="group inline-flex items-center gap-2 text-sm text-[#C3C2B7] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      href={`/${lang}/projects`}
    >
      <Image
        className="transition-[filter] group-hover:brightness-150"
        src={BackArrow}
        alt=""
        width={8}
        height={13}
      />
      {copy.backToProjects}
    </Link>

    <p className="mt-5 text-sm text-main-orange">{project.type}</p>

    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
      <h1
        id="project-page-title"
        className="text-3xl font-bold sm:text-4xl"
      >
        {project.title}
      </h1>
      <p
        className={cn(
          "inline-flex items-center gap-2 text-sm",
          statusClassName(project.status),
        )}
      >
        <span
          className="status-pulse size-2 rounded-full bg-current"
          aria-hidden="true"
        />
        {statusLabel}
      </p>
    </div>

    <p className="mt-5 max-w-[33.5rem] text-[#C3C2B7]">
      {project.description}
    </p>

    {(previousProject || nextProject) && (
      <nav
        className="mt-12 flex min-h-10 items-center justify-between gap-6 md:mt-16"
        aria-label={copy.navigationLabel}
      >
        {previousProject && (
          <Link
            className="group flex min-w-0 max-w-[45%] items-center gap-3 text-sm transition-colors hover:text-[#C3C2B7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            href={`/${lang}/projects/${previousProject.slug}`}
            scroll={false}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#797979] transition-colors group-hover:border-[#363636]">
              <Image
                className="rotate-180"
                src={ProjectArrow}
                alt=""
                width={8}
                height={13}
              />
            </span>
            <span className="min-w-0 break-words">{previousProject.title}</span>
          </Link>
        )}

        {nextProject && (
          <Link
            className="group ml-auto flex min-w-0 max-w-[45%] items-center justify-end gap-3 text-right text-sm transition-colors hover:text-[#C3C2B7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            scroll={false}
            href={`/${lang}/projects/${nextProject.slug}`}
          >
            <span className="min-w-0 break-words">{nextProject.title}</span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#797979] transition-colors group-hover:border-[#363636]">
              <Image
                src={ProjectArrow}
                alt=""
                width={8}
                height={13}
              />
            </span>
          </Link>
        )}
      </nav>
    )}
  </section>
)

export default ProjectHero
