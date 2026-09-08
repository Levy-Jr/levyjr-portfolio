export type SiteConfig = {
  name: string
  ownerName: string
  url: string
  defaultLocale: "pt"
  socialImage: string | null
  social: {
    linkedin: string
    github: string
  }
  location: {
    city: string
    country: string
  }
  knowsAbout: string[]
}

export const siteConfig: SiteConfig = {
  name: "Levy Jr.",
  ownerName: "Levy Gomes",
  url: "https://levyjr.com",
  defaultLocale: "pt",
  socialImage: null,
  social: {
    linkedin: "https://linkedin.com/in/levy-gomes",
    github: "https://github.com/Levy-Jr",
  },
  location: {
    city: "Manaus",
    country: "BR",
  },
  knowsAbout: [
    "Web development",
    "Next.js",
    "React",
    "TypeScript",
    "E-commerce",
    "Payment integrations",
    "Webhooks",
    "Web analytics",
    "Production deployment",
    "Linux VPS",
    "Coolify",
    "Post-launch maintenance",
  ],
}
