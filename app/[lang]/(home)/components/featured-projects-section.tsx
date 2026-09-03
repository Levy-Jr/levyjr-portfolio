import type { Dictionary } from "@/content"
import FxSoftwareImage from "@/public/home/fx-software.webp"
import ViralizaaiImage from "@/public/home/viralizaai.webp"
import Image from "next/image"
import Link from "next/link"

type FeaturedProject =
  Dictionary["projectsPage"]["featured"]["projects"][number]

type FeaturedProjectsSectionProps = {
  buttonLabel: string
  highlightsLabel: string
  lang: string
  projects: FeaturedProject[]
  sectionLabel: string
}

const projectImages = [FxSoftwareImage, ViralizaaiImage]

const FeaturedProjectsSection = ({
  buttonLabel,
  highlightsLabel,
  lang,
  projects,
  sectionLabel,
}: FeaturedProjectsSectionProps) => (
  <section
    className="w-container mx-auto mt-25"
    aria-labelledby="featured-project-cards-title"
  >
    <h2 id="featured-project-cards-title" className="sr-only">
      {sectionLabel}
    </h2>

    <ol>
      {projects.slice(0, projectImages.length).map((project, index) => (
        <li
          className="not-last:border-b border-[#363636] py-16 first:pt-0"
          key={project.slug}
        >
          <article className="grid gap-10 lg:grid-cols-[minmax(0,32.2rem)_minmax(0,40.8rem)] lg:justify-between">
            <div>
              <h3 className="text-[2rem] font-bold">{project.title}</h3>
              <p className="mt-6 text-[#C3C2B7]">
                {project.description}
              </p>
              <p className="mt-7">{project.type}</p>

              <h4 className="mt-6 font-bold">{highlightsLabel}</h4>
              <ul className="mt-4 grid max-w-[24rem] gap-x-5 text-sm text-[#C3C2B7] sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <ul className="mt-5 flex max-w-[29rem] flex-wrap gap-x-4 text-sm font-medium">
                {project.stack.map((technology) => (
                  <li
                    className="before:mr-2 before:content-['•']"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              className="group block self-start overflow-hidden rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={project.links.caseStudy}
              aria-label={`${project.cta}: ${project.title}`}
            >
              <Image
                className="aspect-[652/346] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                src={projectImages[index]}
                alt={project.title}
                sizes="(min-width: 1024px) 652px, 90vw"
              />
            </Link>
          </article>
        </li>
      ))}
    </ol>

    <div className="text-center">
      <Link
        className="inline-flex rounded-lg bg-main-orange px-5 py-3.75 text-white transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        href={`/${lang}/projects`}
      >
        {buttonLabel}
      </Link>
    </div>
  </section>
)

export default FeaturedProjectsSection
