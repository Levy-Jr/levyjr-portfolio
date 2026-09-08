import type { Dictionary } from "@/content"
import Link from "next/link"

type ContactOptionsSectionProps = {
  copy: Dictionary["contactPage"]["contactOptions"]
}

const contactOptionClassName =
  "group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"

const ContactOptionsSection = ({ copy }: ContactOptionsSectionProps) => (
  <section
    className="w-container mx-auto border-b border-[#363636] py-20 md:py-25"
    aria-labelledby="contact-options-title"
  >
    <h2
      id="contact-options-title"
      className="text-3xl font-bold sm:text-4xl"
    >
      {copy.title}
    </h2>

    <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-12">
      {copy.items.map((item) => {
        const content = (
          <>
            <h3 className="text-2xl font-bold transition-opacity group-hover:opacity-80 sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-[16.5rem] leading-tight text-[#C3C2B7]">
              {item.description}
            </p>
            <span className="sr-only">
              {item.buttonLabel}
              {item.value ? `: ${item.value}` : ""}
            </span>
          </>
        )

        return (
          <li key={item.title}>
            {item.href.startsWith("/") ? (
              <Link
                className={contactOptionClassName}
                href={item.href}
                download
              >
                {content}
              </Link>
            ) : (
              <a
                className={contactOptionClassName}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  </section>
)

export default ContactOptionsSection
