import type { Dictionary } from "@/content"

type BusinessImpactSectionProps = {
  copy: Dictionary["homePage"]["businessImpact"]
}

const BusinessImpactSection = ({ copy }: BusinessImpactSectionProps) => (
  <section
    className="w-container mx-auto mt-24 border-b border-[#363636] pb-24"
    aria-labelledby="business-impact-title"
  >
    <div className="max-w-[43.25rem]">
      <h2 id="business-impact-title" className="text-3xl font-bold sm:text-[2.5rem]">
        {copy.title}
      </h2>
      <p className="mt-3 leading-[1.2065] text-[#C3C2B7]">{copy.subtitle}</p>
      <p className="mt-7 leading-[1.2065] text-[#C3C2B7]">{copy.description}</p>
    </div>
  </section>
)

export default BusinessImpactSection
