import type { Dictionary } from "@/content"
import WorkflowDiagram from "@/public/home/diagrama.webp"
import Image from "next/image"

type ProductionWorkflowSectionProps = {
  copy: Dictionary["homePage"]["productionWorkflow"]
}

const ProductionWorkflowSection = ({ copy }: ProductionWorkflowSectionProps) => (
  <section
    className="w-container mx-auto mt-24 grid items-start gap-10 lg:grid-cols-[minmax(0,43.25rem)_24rem] lg:justify-between"
    aria-labelledby="production-workflow-title"
  >
    <div>
      <h2
        id="production-workflow-title"
        className="max-w-[40.8125rem] text-3xl font-bold sm:text-[2.5rem]"
      >
        {copy.headline}
      </h2>
      <p className="mt-3 leading-[1.2065] text-[#C3C2B7]">{copy.subtitle}</p>
      <p className="mt-7 leading-[1.2065] text-[#C3C2B7]">{copy.paragraph}</p>
      <p className="mt-7 leading-[1.2065] text-[#C3C2B7]">{copy.conclusion}</p>
    </div>

    <Image
      className="w-full max-w-96 justify-self-center rounded-[1.875rem] lg:mt-7.5"
      src={WorkflowDiagram}
      alt={copy.diagramAlt}
      sizes="(min-width: 1024px) 384px, 90vw"
    />
  </section>
)

export default ProductionWorkflowSection
