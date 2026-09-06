import type { Dictionary } from "@/content"

type FeaturedProjectsIntroProps = {
  copy: Dictionary["homePage"]["featuredProjects"]
}

const FeaturedProjectsIntro = ({ copy }: FeaturedProjectsIntroProps) => (
  <section
    className="w-container mx-auto mt-13.25 border-b border-[#363636] pb-15"
    aria-labelledby="featured-projects-title"
  >
    <h2
      id="featured-projects-title"
      className="text-3xl font-bold sm:text-[2.5rem]"
    >
      {copy.title}
    </h2>
    <p className="mt-3 max-w-[39rem] text-[#C3C2B7]">
      {copy.description}
    </p>
  </section>
)

export default FeaturedProjectsIntro
