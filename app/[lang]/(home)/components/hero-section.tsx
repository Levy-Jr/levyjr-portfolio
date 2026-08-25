import { Dictionary } from "@/content"

type HeroSectionProps = {
  copy: Dictionary["homePage"]["hero"]
}

export const HeroSection = ({ copy }: HeroSectionProps) => {
  return (
    <section>
      <p>{copy.eyebrow}</p>
      <h1 className="font-bold text-4xl">{copy.headline}</h1>
      <p className="text-[#C3C2B7]">{copy.description}</p>
    </section>
  )
}