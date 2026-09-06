import type { Dictionary } from "@/content"

type AboutHeroProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["hero"]
}

const AboutHero = ({ copy }: AboutHeroProps) => (
  <section
    className="w-container mx-auto border-b border-[#363636] pb-20 md:pb-25"
    aria-labelledby="about-page-title"
  >
    <p className="text-sm text-main-orange">{copy.eyebrow}</p>
    <h1
      id="about-page-title"
      className="mt-6 max-w-[36.5rem] text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h1>
    <p className="mt-8 max-w-[33.375rem] leading-tight text-[#C3C2B7]">
      {copy.description}
    </p>
    <p className="mt-6 max-w-[33.375rem] leading-tight text-[#C3C2B7]">
      {copy.secondaryDescription}
    </p>
  </section>
)

export default AboutHero
