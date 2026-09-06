import type { Dictionary } from "@/content"

type Project = Dictionary["projectsPage"]["featured"]["projects"][number]

type ProjectDetailsProps = {
  copy: Dictionary["projectsPage"]["project"]
  details: Project["details"]
}

type TextSectionProps = {
  paragraphs: readonly string[]
  title: string
}

const TextSection = ({ paragraphs, title }: TextSectionProps) => (
  <section>
    <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
    <div className="mt-5 space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
)

const ProjectDetails = ({ copy, details }: ProjectDetailsProps) => (
  <div className="w-container mx-auto mt-20 border-y border-[#363636] md:mt-25">
    <div className="grid gap-12 py-12 md:grid-cols-2 md:gap-20 md:py-18 lg:gap-35">
      <TextSection title={copy.roleTitle} paragraphs={details.role} />
      <TextSection title={copy.contextTitle} paragraphs={details.context} />
    </div>

    <div className="grid gap-12 border-t border-[#363636] py-12 md:grid-cols-2 md:gap-20 md:py-18 lg:gap-35">
      <TextSection
        title={copy.developmentTitle}
        paragraphs={details.development}
      />

      <section>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {copy.featuresTitle}
        </h2>
        <ul className="mt-5 list-disc pl-5">
          {details.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </div>
  </div>
)

export default ProjectDetails
