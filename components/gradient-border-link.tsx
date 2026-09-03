import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ComponentProps } from "react"

type GradientBorderLinkProps = ComponentProps<typeof Link>

const GradientBorderLink = ({ className, ...props }: GradientBorderLinkProps) => (
  <Link
    className={cn(
      "gradient-border inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg px-5 py-2.5 text-white transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
      className,
    )}
    {...props}
  />
)

export default GradientBorderLink
