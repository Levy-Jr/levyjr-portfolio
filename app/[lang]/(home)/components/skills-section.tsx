import type { Dictionary } from "@/content"

type SkillsSectionProps = {
  copy: Dictionary["homePage"]["skills"]
}

const SkillsSection = ({ copy }: SkillsSectionProps) => (
  <section className="w-container mx-auto mt-24" aria-labelledby="skills-title">
    <h2 id="skills-title" className="text-3xl font-bold sm:text-[2.5rem]">
      {copy.title}
    </h2>
    <p className="mt-1 text-[#C3C2B7]">{copy.description}</p>

    <div className="mt-13">
      {copy.groups.map((group) => (
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

export default SkillsSection
