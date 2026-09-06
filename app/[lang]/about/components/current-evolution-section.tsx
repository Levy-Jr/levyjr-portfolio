import type { Dictionary } from "@/content"

type CurrentEvolutionSectionProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["currentEvolution"]
}

const CurrentEvolutionSection = ({ copy }: CurrentEvolutionSectionProps) => (
  <section
    className="w-container mx-auto mt-20 border-t border-[#363636] pt-20 md:mt-25 md:pt-25"
    aria-labelledby="current-evolution-title"
  >
    <div className="max-w-[36.5rem]">
      <h2
        id="current-evolution-title"
        className="text-3xl font-bold sm:text-4xl"
      >
        {copy.title}
      </h2>
      <div className="mt-8 space-y-6 leading-tight text-[#C3C2B7]">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
)

export default CurrentEvolutionSection
