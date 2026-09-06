import type { Dictionary } from "@/content"

type BackgroundSectionProps = {
  copy: Dictionary["projectsPage"]["aboutPage"]["background"]
}

const BackgroundSection = ({ copy }: BackgroundSectionProps) => (
  <section
    className="w-container mx-auto mt-20 max-w-[75.625rem] md:mt-25"
    aria-labelledby="about-background-title"
  >
    <div className="max-w-[36.5rem]">
      <h2
        id="about-background-title"
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

export default BackgroundSection
