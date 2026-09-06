import type { Dictionary } from "@/content"

type TechnicalProfileSectionProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["technicalProfile"]
}

const TechnicalProfileSection = ({ copy }: TechnicalProfileSectionProps) => (
  <section
    className="w-container mx-auto mt-20 border-t border-[#363636] pt-20 md:mt-25 md:pt-25"
    aria-labelledby="technical-profile-title"
  >
    <h2
      id="technical-profile-title"
      className="text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-5 max-w-[36.5rem] leading-tight text-[#C3C2B7]">
      {copy.description}
    </p>

    <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
      {copy.groups.map((group) => (
        <li key={group.title}>
          <h3 className="text-sm font-medium">{group.title}</h3>
          <p className="mt-2 text-sm leading-tight text-[#C3C2B7]">
            {group.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

export default TechnicalProfileSection
