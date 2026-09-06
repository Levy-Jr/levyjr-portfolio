import type { Dictionary } from "@/content"

type SharedExperienceSectionProps = {
  copy: Dictionary["projectsPage"]["sharedExperience"]
}

const SharedExperienceSection = ({
  copy,
}: SharedExperienceSectionProps) => (
  <section
    className="w-container mx-auto mt-28 border-b border-[#363636] pb-20 md:mt-36 md:pb-25"
    aria-labelledby="shared-experience-title"
  >
    <div className="grid gap-14 lg:grid-cols-[minmax(0,36.3125rem)_minmax(0,31.4375rem)] lg:justify-between lg:gap-10">
      <div>
        <h2
          id="shared-experience-title"
          className="text-3xl font-bold sm:text-4xl"
        >
          {copy.title}
        </h2>
        <p className="mt-6 text-[#C3C2B7]">
          {copy.description}
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold sm:text-4xl">{copy.listTitle}</h3>
        <ul className="mt-6 text-[#C3C2B7]">
          {copy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default SharedExperienceSection
