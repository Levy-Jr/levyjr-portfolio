import type { Dictionary } from "@/content"

type ProjectsHeroProps = {
  copy: Dictionary["projectsPage"]["hero"]
}

const ProjectsHero = ({ copy }: ProjectsHeroProps) => (
  <section
    className="w-container mx-auto"
    aria-labelledby="projects-page-title"
  >
    <p className="text-sm text-main-orange">{copy.eyebrow}</p>
    <h1
      id="projects-page-title"
      className="mt-6 max-w-[40.375rem] text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h1>
    <p className="mt-3 max-w-[33.375rem] text-[#C3C2B7]">
      {copy.description}
    </p>
  </section>
)

export default ProjectsHero
