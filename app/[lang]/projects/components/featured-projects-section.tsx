import type { Dictionary } from "@/content"
import { cn } from "@/lib/utils"
import FxSoftwareImage from "@/public/home/fx-software.webp"
import ViralizaaiImage from "@/public/home/viralizaai.webp"
import MarqueseLeaoImage from "@/public/projetos/marqueseleao.webp"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

type FeaturedProjectsSectionProps = {
  copy: Dictionary["projectsPage"]["featured"]
}

type FeaturedProject = FeaturedProjectsSectionProps["copy"]["projects"][number]

const projectMedia: Record<
  FeaturedProject["slug"],
  { image?: StaticImageData; className: string }
> = {
  fxsoftwares: {
    image: FxSoftwareImage,
    className: "rounded-[1.75rem]",
  },
  "viralizaaigo-checkout": {
    image: ViralizaaiImage,
    className: "rounded-[1.125rem]",
  },
  "marques-leao": {
    image: MarqueseLeaoImage,
    className: "rounded-xl",
  },
}

const FeaturedProjectsSection = ({ copy }: FeaturedProjectsSectionProps) => (
  <section
    className="w-container mx-auto mt-24 border-t border-[#363636] pt-16 md:mt-32 md:pt-25"
    aria-labelledby="featured-case-studies-title"
  >
    <h2
      id="featured-case-studies-title"
      className="text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-3 max-w-[31.75rem] text-[#C3C2B7]">
      {copy.description}
    </p>

    <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
      {copy.projects.map((project) => {
        const media = projectMedia[project.slug]

        return (
          <li className="min-w-0" key={project.slug}>
            <article>
              <Link
                className={cn(
                  "group relative block aspect-[366/194] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
                  media.className,
                )}
                href={project.links.caseStudy}
                aria-label={`${project.cta}: ${project.title}`}
              >
                {media.image && (
                  <Image
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    src={media.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 366px, (min-width: 768px) 45vw, 90vw"
                  />
                )}
              </Link>

              <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
              <p className="mt-3">{project.type}</p>
              <p className="mt-4 text-[#C3C2B7]">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    className="rounded-md bg-[#30302E] px-2.5 py-1.75 text-[0.625rem]"
                    key={highlight}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        )
      })}
    </ul>
  </section>
)

export default FeaturedProjectsSection
