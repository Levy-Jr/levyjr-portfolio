import type { Dictionary } from "@/content"
import FxSoftwaresImage from "@/public/home/fx-software.webp"
import ViralizaaigoImage from "@/public/home/viralizaai.webp"
import MarquesLeaoImage from "@/public/projetos/marqueseleao.webp"
import Image, { type StaticImageData } from "next/image"

type Project = Dictionary["projectsPage"]["featured"]["projects"][number]

type ProjectShowcaseProps = {
  project: Project
  stackTitle: string
}

const projectImages: Partial<Record<string, StaticImageData>> = {
  fxsoftwares: FxSoftwaresImage,
  "viralizaaigo-checkout": ViralizaaigoImage,
  "marques-leao": MarquesLeaoImage,
}

const ProjectShowcase = ({ project, stackTitle }: ProjectShowcaseProps) => {
  const image = projectImages[project.slug]

  return (
    <section
      className="w-container mx-auto mt-20 md:mt-25"
      aria-labelledby="project-stack-title"
    >
      <a
        className="group relative block aspect-[1210/642] overflow-hidden rounded-[clamp(1rem,4vw,3.125rem)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title}: ${project.type}`}
      >
        {image && (
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            src={image}
            alt={`${project.title}: ${project.type}`}
            fill
            preload
            sizes="(min-width: 1344px) 1210px, 90vw"
          />
        )}
      </a>

      <h2
        id="project-stack-title"
        className="mt-12 text-3xl font-bold sm:text-4xl md:mt-13"
      >
        {stackTitle}
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            className="rounded-md bg-[#30302E] px-2.5 py-1.5 text-sm sm:text-base"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectShowcase
