import type { Dictionary } from "@/content"
import AgrocapixabaImage from "@/public/projetos/agrocapixaba-filmes.webp"
import ViralizaaigoLandingPageImage from "@/public/projetos/viralizaigo-landing-page.webp"
import ZapBarbeariaImage from "@/public/projetos/zap-barbearia.webp"
import OkacodesImage from "@/public/projetos/okacodes.webp"
import Image, { type StaticImageData } from "next/image"

type AdditionalProjectsSectionProps = {
  copy: Dictionary["projectsPage"]["additional"]
}

type AdditionalProject =
  AdditionalProjectsSectionProps["copy"]["projects"][number]

const projectImages: Record<AdditionalProject["slug"], StaticImageData> = {
  "viralizaaigo-landing-page": ViralizaaigoLandingPageImage,
  "agrocapixaba-filmes": AgrocapixabaImage,
  "zap-barbearia": ZapBarbeariaImage,
  "okacodes": OkacodesImage
}

const AdditionalProjectsSection = ({
  copy,
}: AdditionalProjectsSectionProps) => (
  <section
    className="w-container mx-auto mt-20 border-t border-[#363636] pt-16 md:mt-28 md:pt-25"
    aria-labelledby="additional-projects-title"
  >
    <h2
      id="additional-projects-title"
      className="text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-3 max-w-[36.5rem] text-[#C3C2B7]">
      {copy.description}
    </p>

    <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-x-14">
      {copy.projects.map((project) => (
        <li className="min-w-0" key={project.slug}>
          <article>
            <a
              className="group relative block aspect-366/196 overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.cta}: ${project.title}`}
            >
              <Image
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                src={projectImages[project.slug]}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 366px, (min-width: 768px) 45vw, 90vw"
              />
            </a>

            <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
            <p className="mt-3">{project.type}</p>
            <p className="mt-4 text-[#C3C2B7]">
              {project.description}
            </p>

            <ul className="mt-6 text-[0.625rem] flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <li
                  className="rounded-md bg-[#30302E] px-2.5 py-1.75"
                  key={highlight}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  </section>
)

export default AdditionalProjectsSection
