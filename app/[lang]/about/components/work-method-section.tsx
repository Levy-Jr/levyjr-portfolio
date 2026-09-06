import type { Dictionary } from "@/content"

type WorkMethodSectionProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["workMethod"]
}

const WorkMethodSection = ({ copy }: WorkMethodSectionProps) => (
  <section
    className="w-container mx-auto mt-20 md:mt-25"
    aria-labelledby="work-method-title"
  >
    <h2 id="work-method-title" className="text-3xl font-bold sm:text-4xl">
      {copy.title}
    </h2>
    <p className="mt-5 max-w-[36.5rem] leading-tight text-[#C3C2B7]">
      {copy.description}
    </p>

    <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
      {copy.items.map((item) => (
        <li key={item.title}>
          <h3 className="text-sm font-medium">{item.title}</h3>
          <p className="mt-2 max-w-[21.75rem] text-sm leading-tight text-[#C3C2B7]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

export default WorkMethodSection
