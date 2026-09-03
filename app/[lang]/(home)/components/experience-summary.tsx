import type { Dictionary } from "@/content"

type ExperienceSummaryProps = {
  copy: Dictionary["homePage"]["experienceSummary"]
}

const ExperienceSummary = ({ copy }: ExperienceSummaryProps) => (
  <section
    className="w-container mx-auto mt-24 border-y border-[#363636] py-8 lg:pt-7.5 lg:pb-14.5"
    aria-labelledby="experience-summary-title"
  >
    <h2 id="experience-summary-title" className="sr-only">
      {copy.title}
    </h2>

    <dl className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {copy.items.map((item) => (
        <div key={item.title}>
          <dt className="text-xl font-semibold">{item.title}</dt>
          <dd className="mt-3.75 text-[#C3C2B7]">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  </section>
)

export default ExperienceSummary
