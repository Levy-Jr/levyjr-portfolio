export const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    downloadCv: "Download CV",
  },
  footer: {
    copyright: "Levy Gomes — Web Developer.",
    cvHref: "/cv/Levy_Gomes_Web_Developer_CV.pdf",
  },

  homePage: {
    hero: {
      eyebrow:
        "Web Developer with experience in development, deployment, and maintenance",
      headline:
        "I build commercial web projects focused on performance, integrations, and production reliability.",
      description:
        "I have over 2 years of freelance experience building, launching, and maintaining websites, e-commerce stores, and web applications for commercial clients.",
      primaryButton: "View projects",
      secondaryButton: "Download CV",
      contactButton: "Get in touch",
    },

    experienceSummary: {
      title: "Web development experience and capabilities summary",
      items: [
        {
          title: "2+ years",
          description: "Freelance experience delivering commercial projects",
        },
        {
          title: "Deployment and production",
          description: "Linux VPS, Coolify, domains, SSL, and Docker",
        },
        {
          title: "Projects",
          description: "Websites, landing pages, e-commerce, and web platforms",
        },
        {
          title: "Integrations",
          description: "Payments, tracking, webhooks, and maintenance",
        },
      ],
    },

    featuredProjects: {
      title: "Featured commercial projects",
      description:
        "Projects that showcase my experience in web development, e-commerce, checkout flows, integrations, deployment, and production maintenance.",
      projects: [
        {
          title: "FXSoftwares — Headless E-commerce for Digital Products",
          description:
            "An e-commerce frontend for digital software products, featuring a product catalogue, search, filters, cart, checkout, order history, and automatic delivery after payment.",
        },
        {
          title: "Viralizaaigo — Checkout Platform for Digital Services",
          description:
            "A platform designed to reduce manual support when selling digital services, with package selection, PIX payments, automatic webhook confirmation, and an admin dashboard.",
        },
        {
          title:
            "Marques&Leão — Real Estate Website with a Map and Property Listings",
          description:
            "A real estate website with property and agent pages, featured listings, responsive components, and Google Maps integration.",
        },
      ],
      viewAllButton: "View all projects",
    },
    skills: {
      title: "A technical stack applied to commercial projects",
      description:
        "The technologies and tools I use to develop, integrate, launch, and maintain web projects in production.",
      groups: [
        {
          title: "Web Development:",
          items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
        },
        {
          title: "Backend and Databases:",
          items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma ORM"],
        },
        {
          title: "E-commerce and Integrations:",
          items: [
            "WooCommerce Headless",
            "Mercado Pago",
            "Stripe",
            "Webhooks",
            "Meta Pixel/CAPI",
            "Google Tag Manager",
            "Google Analytics",
          ],
        },
        {
          title: "Deployment and Infrastructure:",
          items: ["Linux", "Hostinger", "Coolify", "Docker", "SSH", "DNS", "SSL", "Basic firewall"],
        },
      ],
    },

    businessImpact: {
      title: "Experience beyond the code",
      subtitle:
        "Commercial projects require more than an attractive interface. They need to work, convert, integrate with other tools, and remain stable after launch.",
      description:
        "My freelance experience has put me in direct contact with clients, business requirements, scope, deadlines, deployment, maintenance, and post-launch support. It has shaped a practical approach to web development: understand the project's goal, build a functional solution, and take care of the technical details required to bring it into production.",
      bulletPoints: [
        "Direct communication with clients",
        "Requirements gathering and organisation",
        "Payment and marketing tool integrations",
        "Deployment to a VPS with Coolify",
        "Domain, SSL, and production environment configuration",
        "Post-launch maintenance and improvements",
      ],
    },
    productionWorkflow: {
      headline: "From development to production",
      subtitle:
        "I am particularly interested in an area many developers overlook: what happens after the code is ready.",
      paragraph:
        "In addition to interface development, I handle the deployment, configuration, and basic maintenance of production projects. This includes Linux VPS environments, SSH access, domain and SSL configuration, Coolify, Docker, environment variables, webhooks, tracking tools, and post-deployment monitoring.",
      conclusion:
        "My main focus remains web development, but my experience with deployment and maintenance helps me deliver more complete projects with less reliance on third parties.",
      diagramAlt: "Workflow from development through production maintenance",
    },
    currentFocus: {
      title: "Moving towards a more professional workflow",
      description:
        "I am currently deepening my knowledge of Docker, CI/CD, automated testing, and monitoring to improve the quality and predictability of my work.",
    },
    contact: {
      title: "Let's talk?",
      subtitle:
        "If you would like to learn more about my work, projects, technical experience, or potential collaborations, feel free to get in touch.",
      description:
        "I am also open to conversations about web development, technology, commercial projects, and professional opportunities.",
      emailButton: "Send Email",
      linkedinButton: "View LinkedIn",
      githubButton: "View GitHub",
    },
  },
  projectsPage: {
    hero: {
      eyebrow: "Commercial projects",
      title: "Web projects built, launched, and maintained in production.",
      description:
        "A selection of websites, landing pages, web platforms, and e-commerce projects I have built for commercial clients, with a focus on interfaces, integrations, deployment, and maintenance.",
    },

    featured: {
      title: "Featured case studies",
      description:
        "Projects involving greater technical complexity, integrations, business rules, or production responsibility.",

      projects: [
        {
          slug: "fxsoftwares",
          title: "FXSoftwares",
          type: "Headless E-commerce for Digital Products",
          description:
            "An e-commerce frontend with a product catalogue, search, filters, cart, checkout, order history, and automatic delivery after payment approval.",
          highlights: [
            "Headless e-commerce",
            "Payments and webhooks",
            "Automatic delivery",
            "Meta Pixel/CAPI",
            "Deployed to a VPS with Coolify",
          ],
          stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "WooCommerce",
            "Mercado Pago",
            "NextAuth",
            "Resend",
            "Coolify",
          ],
          links: {
            caseStudy: "/en/projects/fxsoftwares",
            live: "fxsoftwares.com.br", // add if available
            github: "", // add if public
          },
          cta: "View case study",
        },

        {
          slug: "viralizaaigo-checkout",
          title: "Viralizaaigo",
          type: "Checkout Platform for Digital Services",
          description:
            "A platform designed to reduce manual support when selling digital services, with package selection, PIX payments, automatic webhook confirmation, and an admin dashboard.",
          highlights: [
            "Custom checkout",
            "Admin dashboard",
            "PIX with a QR code and copy-and-paste payment code",
            "Automatic webhook confirmation",
            "Price and availability management",
          ],
          stack: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "NextAuth",
            "Mercado Pago",
          ],
          links: {
            caseStudy: "/en/projects/viralizaaigo-checkout",
            live: "viralizaaigo.com",
            github: "",
          },
          cta: "View case study",
        },

        {
          slug: "marques-leao",
          title: "Marques&Leão",
          type: "Real Estate Website with a Map and Property Listings",
          description:
            "A real estate website with property and agent pages, featured listings, responsive components, and Google Maps integration.",
          highlights: [
            "Property listings",
            "Dynamic pages",
            "Map integration",
            "Responsive components",
            "Business-focused interface",
          ],
          stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Google Maps API",
          ],
          links: {
            caseStudy: "/en/projects/marques-leao",
            live: "marqueseleao.com.br",
            github: "",
          },
          cta: "View case study",
        },
      ],
    },

    additional: {
      title: "Other commercial projects",
      description:
        "Additional commercial projects that have contributed to my experience in development, deployment, tracking, and maintenance.",

      projects: [
        {
          slug: "viralizaaigo-landing-page",
          title: "Viralizaaigo Landing Page",
          type: "Landing page for paid traffic and conversion",
          description:
            "A simple, direct landing page created to present the offer, support paid traffic campaigns, and guide visitors towards conversion.",
          highlights: [
            "VSL hosted on Bunny Stream",
            "Meta Pixel + Conversions API",
            "Conversion-focused page",
            "Used in live paid traffic campaigns",
            "Approximate peak conversion rate of 30%",
          ],
          stack: ["Next.js", "Meta Pixel", "Meta CAPI", "Bunny Stream"],
          links: {
            live: "lp.viralizaaigo.com",
            details: "",
          },
          cta: "View project",
        },

        {
          slug: "agrocapixaba-filmes",
          title: "Agrocapixaba Filmes",
          type: "Company website for an audiovisual agency",
          description:
            "A company website built to showcase the services, visual identity, and portfolio of an audiovisual agency, launched on its own domain for commercial use.",
          highlights: [
            "Live commercial project",
            "Custom domain",
            "Audiovisual content",
            "Company website",
            "Experience handling media-heavy content in production",
          ],
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          links: {
            live: "https://agrocapixabafilmes.com.br",
            details: "",
          },
          cta: "View project",
        },

        {
          slug: "zap-barbearia",
          title: "ZapBarbearia",
          type: "Landing page for a barbershop automation SaaS",
          description:
            "A landing page built to present a SaaS automation solution for barbershops, focused on scheduling, CRM, support, and business operations.",
          highlights: [
            "Commercial landing page",
            "Animated interface",
            "SaaS product presentation",
            "Archived project",
            "Public demo available",
          ],
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          links: {
            live: "https://zap-barbearia.vercel.app",
            details: "",
          },
          badge: "Archived project",
          cta: "View demo",
        },
      ],
    },

    aboutPage: {
      hero: {
        eyebrow: "About me",
        title:
          "Web Developer with hands-on experience in commercial projects, deployment, and maintenance.",
        description:
          "I am Levy Gomes, a Web Developer based in Manaus with over 2 years of freelance experience working on commercial projects.",
        secondaryDescription:
          "My work spans interface development, integrations, production deployment, and the maintenance of websites, landing pages, e-commerce stores, and web platforms.",
      },

      background: {
        title:
          "From freelance projects to a broader perspective on development",
        paragraphs: [
          "Through my work with Okacodes, I have been involved in different stages of web projects: understanding the client's needs, turning them into a functional solution, developing the interface, integrating external tools, launching the project, and monitoring it after release.",
          "This experience has given me a more practical perspective on web development. A commercial project does not end when the interface looks good. It needs to load quickly, work reliably in production, handle traffic, track events, process payments when required, and be maintained responsibly.",
        ],
      },

      workMethod: {
        title: "How I approach a project",
        description:
          "I focus on building solutions that make technical sense while helping the project achieve its commercial goals.",
        items: [
          {
            title: "Clarity before development",
            description:
              "Before implementation, I make sure I understand the project's goal, audience, required features, and what genuinely needs to be ready for the first version.",
          },
          {
            title: "Development with production in mind",
            description:
              "I consider the project beyond its interface: domain, SSL, environment variables, integrations, deployment, tracking, maintenance, and potential improvements after launch.",
          },
          {
            title: "Direct and practical communication",
            description:
              "Working with clients has taught me to explain technical decisions clearly, align expectations, and turn business needs into concrete deliverables.",
          },
        ],
      },

      technicalProfile: {
        title: "Technical profile",
        description:
          "My core expertise is in modern web development, complemented by experience with integrations, deployment, and foundational infrastructure.",
        groups: [
          {
            title: "Web Development",
            description:
              "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, and responsive interface development.",
          },
          {
            title: "Backend and Databases",
            description:
              "Node.js/Express fundamentals, REST APIs, PostgreSQL, Prisma ORM, authentication, and structuring features for web applications.",
          },
          {
            title: "E-commerce and Integrations",
            description:
              "WooCommerce, Stripe, Mercado Pago, webhooks, Google Analytics, Meta Pixel/CAPI, and Google Tag Manager.",
          },
          {
            title: "Deployment and Infrastructure",
            description:
              "Linux VPS environments, Hostinger, Coolify, Docker, SSH, DNS, SSL, environment variables, and firewall fundamentals.",
          },
        ],
      },

      currentEvolution: {
        title: "Improving my development workflow",
        paragraphs: [
          "I am currently strengthening my professional development workflow, focusing on Docker, CI/CD, automated testing, monitoring, and better practices for deploying and maintaining production projects.",
          "My goal is to keep growing as a Web Developer by combining hands-on experience in commercial projects with more structured engineering, quality, and collaboration practices.",
        ],
      },

      cta: {
        title: "Would you like to learn more about my work?",
        description:
          "You can explore my commercial projects, visit my GitHub, download my CV, or get in touch to discuss web development, production projects, or professional opportunities.",
        primaryButton: "View projects",
        secondaryButton: "Download CV",
        tertiaryButton: "View GitHub",
        contactButton: "Get in touch",
      },
    },
    sharedExperience: {
      title: "What these projects have in common",
      description:
        "These projects involved more than interface development. At different levels, I worked with deployment, domains, SSL, payment integrations, tracking, webhooks, VPS environments, Coolify, maintenance, and post-launch improvements.",
      items: [
        "Frontend development with React, Next.js, and TypeScript",
        "Payment, analytics, and marketing tool integrations",
        "Deployment to a Linux VPS with Coolify",
        "Domain, SSL, and environment variable configuration",
        "Post-launch maintenance, improvements, and support",
      ],
    },

    cta: {
      title: "Would you like to learn more about a project?",
      description:
        "I would be happy to explain the technical decisions, integrations, challenges, and lessons behind these projects in more detail.",
      primaryButton: "Get in touch",
      secondaryButton: "Download CV",
      tertiaryButton: "View GitHub",
    },
  },

  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about web development, projects, or opportunities.",
      description:
        "If you would like to discuss my work, commercial projects, technical experience, or a potential professional opportunity, feel free to get in touch.",
      secondaryDescription:
        "I am based in Manaus, Brazil, and have experience building, deploying, and maintaining websites, landing pages, e-commerce stores, and web applications in production.",
    },

    contactOptions: {
      title: "Contact channels",
      items: [
        {
          title: "Email",
          description:
            "The best channel for professional enquiries, opportunities, and more detailed conversations.",
          value: "levyjrdev@gmail.com",
          buttonLabel: "Send an email",
          href: "mailto:levyjrdev@gmail.com",
        },
        {
          title: "LinkedIn",
          description:
            "Follow my professional profile, experience, projects, and updates.",
          buttonLabel: "View LinkedIn",
          href: "https://linkedin.com/in/levy-gomes",
        },
        {
          title: "GitHub",
          description:
            "Explore my repositories, projects, source code, and technical work.",
          buttonLabel: "View GitHub",
          href: "https://github.com/Levy-Jr",
        },
        {
          title: "CV",
          description:
            "Download a PDF with my professional summary, technical skills, and selected projects.",
          buttonLabel: "Download CV",
          href: "/cv/Levy_Gomes_Web_Developer_CV.pdf",
        },
      ],
    },

    professionalContext: {
      title: "Professional context",
      description:
        "I am currently looking for opportunities where I can contribute my hands-on experience with commercial projects while continuing to grow in a more structured technology environment.",
      items: [
        "Location: Manaus, Brazil",
        "Languages: Native Portuguese • Intermediate/advanced English",
        "Focus: Web development, integrations, deployment, and maintenance",
        "Experience: Commercial freelance projects through Okacodes",
      ],
    },

    cta: {
      title: "Would you like to learn more about my work?",
      description:
        "You can also explore my projects for examples of web development, integrations, deployment, and maintenance in commercial work.",
      primaryButton: "View projects",
      secondaryButton: "Download CV",
    },
  },
};
