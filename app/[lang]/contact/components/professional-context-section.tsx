import type { Dictionary } from "@/content"

type ProfessionalContextSectionProps = {
  copy: Dictionary["contactPage"]["professionalContext"]
}

const ProfessionalContextSection = ({ copy }: ProfessionalContextSectionProps) => (
  <section
    className="w-container mx-auto border-b border-[#363636] py-20 md:py-25"
    aria-labelledby="professional-context-title"
  >
    <div className="max-w-[33.8125rem]">
      <h2
        id="professional-context-title"
        className="text-3xl font-bold sm:text-4xl"
      >
        {copy.title}
      </h2>
      <p className="mt-5 leading-tight text-[#C3C2B7]">{copy.description}</p>
      <ul className="mt-6 leading-tight text-[#C3C2B7]">
        {copy.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
)

export default ProfessionalContextSection
