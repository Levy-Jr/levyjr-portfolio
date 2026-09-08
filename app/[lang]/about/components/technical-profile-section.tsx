import type { Dictionary } from "@/content"

type TechnicalProfileSectionProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["technicalProfile"]
  groups: Dictionary["homePage"]["skills"]["groups"]
}

const TechnicalProfileSection = ({
  copy,
  groups,
}: TechnicalProfileSectionProps) => (
  <section
    className="w-container mx-auto mt-20 md:mt-25"
    aria-labelledby="technical-profile-title"
  >
    <h2
      id="technical-profile-title"
      className="text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>
    <p className="mt-4 max-w-96 leading-tight text-[#C3C2B7]">
      {copy.description}
    </p>

    <div className="mt-13">
      {groups.map((group) => (
        <div
          className="border-b border-[#363636] py-7.5 first:pt-0"
          key={group.title}
        >
          <h3 className="text-xl font-bold sm:text-2xl">{group.title}</h3>
          <ul className="mt-4.5 flex max-w-[39rem] flex-wrap gap-x-1.25 gap-y-3.75">
            {group.items.map((skill) => (
              <li
                className="rounded-md bg-[#30302E] px-2.5 py-1"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default TechnicalProfileSection
