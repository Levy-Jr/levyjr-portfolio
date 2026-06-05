export const pt = {
  nav: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
    downloadCv: "Baixar currículo",
  },

  homePage: {
    hero: {
      eyebrow:
        "Desenvolvedor Web com experiência em desenvolvimento, deploy e manutenção",
      headline:
        "Construo projetos web comerciais com foco em performance, integrações e operação em produção.",
      description:
        "Tenho mais de 2 anos de experiência freelance desenvolvendo, publicando e mantendo sites, e-commerce e aplicações web para clientes comerciais.",
      primaryButton: "Ver projetos",
      secondaryButton: "Baixar currículo",
      contactButton: "Entrar em contato",
    },

    featuredProjects: {
      title: "Projetos comerciais em destaque",
      description:
        "Projetos que mostram minha experiência com desenvolvimento web, e-commerce, checkout, integrações, deploy e manutenção em produção.",
      projects: [
        {
          title: "FXSoftwares — E-commerce Headless de Produtos Digitais",
          description: "Frontend de e-commerce para softwares digitais, com catálogo de produtos, busca, filtros, carrinho, checkout, histórico de pedidos e entrega automática após pagamento."
        },
        {
          title: "Viralizaaigo — Plataforma de Checkout para Serviços Digitais",
          description: "Plataforma criada para reduzir atendimento manual na venda de serviços digitais, com seleção de pacotes, pagamento via PIX, confirmação automática por webhook e painel administrativo."
        },
        {
          title: "Marques&Leão — Site Imobiliário com Mapa e Vitrine de Imóveis",
          description: "Site imobiliário com páginas de imóveis, corretores, vitrine de propriedades, componentes responsivos e integração com Google Maps."
        },
      ],
      viewAllButton: "Ver todos os projetos",
    },
    skills: {
      title: "Stack técnica aplicada em projetos comerciais",
      description: "Tecnologias e ferramentas que utilizo para construir, integrar, publicar e manter projetos web em produção.",
    },

    businessImpact: {
      title: "Experiência prática, além do código",
      subtitle: "Projetos comerciais exigem mais do que uma interface bonita. Eles precisam funcionar, converter, integrar ferramentas e continuar estáveis depois da publicação.",
      description: "Minha experiência como freelancer me colocou em contato direto com clientes, requisitos de negócio, escopo, prazos, deploy, manutenção e suporte pós-entrega. Isso me ajudou a desenvolver uma visão prática sobre desenvolvimento web: entender o objetivo do projeto, construir uma solução funcional e cuidar dos detalhes técnicos necessários para colocá-la em produção.",
      bulletPoints: [
        "Comunicação direta com clientes",
        "Levantamento e organização de requisitos",
        "Integrações com pagamento e ferramentas de marketing",
        "Deploy em VPS com Coolify",
        "Configuração de domínio, SSL e ambiente de produção",
        "Manutenção e ajustes pós-publicação"
      ]
    },
    productionWorkflow: {
      headline: "Do desenvolvimento ao ambiente de produção",
      subtitle: "Tenho interesse especial na parte que muitos desenvolvedores ignoram: o que acontece depois que o código fica pronto.",
      paragraph: "Além do desenvolvimento da interface, também atuo com publicação, configuração e manutenção básica de projetos em produção. Isso inclui VPS Linux, acesso via SSH, configuração de domínio e SSL, Coolify, Docker, variáveis de ambiente, webhooks, ferramentas de rastreamento e acompanhamento de funcionamento após o deploy."
    },
    currentFocus: {
      title: "Evoluindo para um fluxo mais profissional",
      description:
        "Atualmente estou aprofundando meus conhecimentos em Docker, CI/CD, testes automatizados e monitoramento para trabalhar com mais qualidade e previsibilidade.",
    },
    contact: {
      title: "Vamos conversar?",
      subtitle: "Se você quer saber mais sobre meu trabalho, projetos, experiência técnica ou possibilidades de colaboração, fique à vontade para entrar em contato.",
      description: "Também estou aberto a conversas sobre desenvolvimento web, tecnologia, projetos comerciais e oportunidades profissionais.",
      emailButton: "Enviar email",
      linkedinButton: "Conectar no LinkedIn",
      githubButton: "Ver GitHub",
    },
  },
  projectsPage: {
    hero: {
      eyebrow: "Projetos comerciais",
      title: "Projetos web desenvolvidos, publicados e mantidos em produção.",
      description:
        "Uma seleção de sites, landing pages, plataformas web e projetos de e-commerce que desenvolvi para clientes comerciais, com foco em interface, integrações, deploy e manutenção.",
    },

    featured: {
      title: "Estudos de caso em destaque",
      description:
        "Projetos com maior complexidade técnica, integrações, regras de negócio ou responsabilidade em produção.",

      projects: [
        {
          slug: "fxsoftwares",
          title: "FXSoftwares",
          type: "E-commerce Headless de Produtos Digitais",
          description:
            "Frontend de e-commerce com catálogo, busca, filtros, carrinho, checkout, histórico de pedidos e entrega automática após aprovação do pagamento.",
          highlights: [
            "E-commerce headless",
            "Pagamento e webhooks",
            "Entrega automática",
            "Meta Pixel/CAPI",
            "Deploy em VPS com Coolify",
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
            caseStudy: "/pt/projects/fxsoftwares",
            live: "fxsoftwares.com.br", // add if available
            github: "", // add if public
          },
          cta: "Ver estudo de caso",
        },

        {
          slug: "viralizaaigo-checkout",
          title: "Viralizaaigo",
          type: "Plataforma de Checkout para Serviços Digitais",
          description:
            "Plataforma criada para reduzir atendimento manual na venda de serviços digitais, com seleção de pacotes, pagamento via PIX, confirmação automática por webhook e painel administrativo.",
          highlights: [
            "Checkout personalizado",
            "Painel administrativo",
            "PIX com QR Code e copia-e-cola",
            "Confirmação automática por webhook",
            "Controle de preços e disponibilidade",
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
            caseStudy: "/pt/projects/viralizaaigo-checkout",
            live: "viralizaaigo.com",
            github: "",
          },
          cta: "Ver estudo de caso",
        },

        {
          slug: "marques-leao",
          title: "Marques&Leão",
          type: "Site Imobiliário com Mapa e Vitrine de Imóveis",
          description:
            "Site imobiliário com páginas de imóveis, corretores, vitrine de propriedades, componentes responsivos e integração com Google Maps.",
          highlights: [
            "Vitrine de imóveis",
            "Páginas dinâmicas",
            "Integração com mapa",
            "Componentes responsivos",
            "Interface comercial",
          ],
          stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Google Maps API",
          ],
          links: {
            caseStudy: "/pt/projects/marques-leao",
            live: "marqueseleao.com.br",
            github: "",
          },
          cta: "Ver estudo de caso",
        },
      ],
    },

    additional: {
      title: "Outros projetos comerciais",
      description:
        "Projetos comerciais complementares que também fizeram parte da minha experiência com desenvolvimento, deploy, rastreamento e manutenção.",

      projects: [
        {
          slug: "viralizaaigo-landing-page",
          title: "Viralizaaigo Landing Page",
          type: "Landing page para tráfego pago e conversão",
          description:
            "Landing page simples e direta, criada para apresentar a oferta, sustentar campanhas de tráfego pago e direcionar visitantes para conversão.",
          highlights: [
            "VSL com Bunny Stream",
            "Pixel do Meta + Api de Conversões",
            "Página focada em conversão",
            "Usada em campanhas reais de tráfego pago",
            "Pico aproximado de 30% de conversão",
          ],
          stack: ["Next.js", "Meta Pixel", "Meta CAPI", "Bunny Stream"],
          links: {
            live: "lp.viralizaaigo.com",
            details: "",
          },
          cta: "Ver projeto",
        },

        {
          slug: "agrocapixaba-filmes",
          title: "Agrocapixaba Filmes",
          type: "Site institucional para agência audiovisual",
          description:
            "Site institucional desenvolvido para apresentar serviços, identidade visual e portfólio de uma agência audiovisual, com publicação em domínio próprio e uso comercial.",
          highlights: [
            "Projeto comercial publicado",
            "Domínio próprio",
            "Conteúdo audiovisual",
            "Site institucional",
            "Experiência com mídia pesada em produção",
          ],
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          links: {
            live: "https://agrocapixabafilmes.com.br",
            details: "",
          },
          cta: "Ver projeto",
        },

        {
          slug: "zap-barbearia",
          title: "ZapBarbearia",
          type: "Landing page para SaaS de automação de barbearias",
          description:
            "Landing page desenvolvida para apresentar uma solução SaaS de automação para barbearias, com foco em agendamento, CRM, suporte e operação comercial.",
          highlights: [
            "Landing page comercial",
            "Interface com animações",
            "Apresentação de produto SaaS",
            "Projeto arquivado",
            "Demo pública disponível",
          ],
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          links: {
            live: "https://zap-barbearia.vercel.app",
            details: "",
          },
          badge: "Projeto arquivado",
          cta: "Ver demo",
        },
      ],
    },

    aboutPage: {
      hero: {
        eyebrow: "Sobre mim",
        title:
          "Desenvolvedor Web com experiência prática em projetos comerciais, deploy e manutenção.",
        description:
          "Sou Levy Gomes, desenvolvedor web de Manaus, com mais de 2 anos de experiência atuando em projetos comerciais como freelancer.",
        secondaryDescription:
          "Meu trabalho envolve desenvolvimento de interfaces, integrações, publicação em produção e manutenção de sites, landing pages, e-commerces e plataformas web.",
      },

      background: {
        title: "De projetos freelance para uma visão mais completa de desenvolvimento",
        paragraphs: [
          "Atuando por meio da Okacodes, tive contato com diferentes etapas de projetos web: entender o que o cliente precisava, transformar isso em uma solução funcional, desenvolver a interface, integrar ferramentas externas, publicar o projeto e acompanhar seu funcionamento depois do lançamento.",
          "Essa vivência me ajudou a enxergar desenvolvimento web de forma mais prática. Um projeto comercial não termina quando a tela fica bonita. Ele precisa carregar bem, funcionar em produção, receber tráfego, registrar eventos, processar pagamentos quando necessário e ser mantido com responsabilidade.",
        ],
      },

      workMethod: {
        title: "Como eu penso um projeto",
        description:
          "Meu foco é construir soluções que façam sentido tecnicamente e também ajudem o projeto a cumprir seu objetivo comercial.",
        items: [
          {
            title: "Clareza antes do desenvolvimento",
            description:
              "Antes de implementar, busco entender o objetivo do projeto, o público, as funcionalidades necessárias e o que realmente precisa estar pronto para a primeira versão.",
          },
          {
            title: "Desenvolvimento com visão de produção",
            description:
              "Penso no projeto além da interface: domínio, SSL, variáveis de ambiente, integrações, deploy, rastreamento, manutenção e possíveis ajustes após a publicação.",
          },
          {
            title: "Comunicação direta e prática",
            description:
              "Minha experiência com clientes me ensinou a explicar decisões técnicas com clareza, alinhar expectativas e transformar necessidades comerciais em entregas concretas.",
          },
        ],
      },

      technicalProfile: {
        title: "Perfil técnico",
        description:
          "Minha base principal está em desenvolvimento web moderno, com experiência complementar em integrações, deploy e infraestrutura básica.",
        groups: [
          {
            title: "Desenvolvimento Web",
            description:
              "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS e construção de interfaces responsivas.",
          },
          {
            title: "Backend e Banco de Dados",
            description:
              "Fundamentos de Node.js/Express, APIs REST, PostgreSQL, Prisma ORM, autenticação e estruturação de funcionalidades para aplicações web.",
          },
          {
            title: "E-commerce e Integrações",
            description:
              "WooCommerce, Stripe, Mercado Pago, webhooks, Google Analytics, Meta Pixel/CAPI e Google Tag Manager.",
          },
          {
            title: "Deploy e Infraestrutura",
            description:
              "VPS Linux, Hostinger, Coolify, Docker, SSH, DNS, SSL, variáveis de ambiente e fundamentos de firewall.",
          },
        ],
      },

      currentEvolution: {
        title: "Evoluindo meu fluxo de desenvolvimento",
        paragraphs: [
          "Atualmente estou fortalecendo meu fluxo profissional de desenvolvimento, com foco em Docker, CI/CD, testes automatizados, monitoramento e melhores práticas para deploy e manutenção de projetos em produção.",
          "Meu objetivo é continuar evoluindo como desenvolvedor web, unindo experiência prática em projetos comerciais com processos mais estruturados de engenharia, qualidade e colaboração.",
        ],
      },

      cta: {
        title: "Quer conhecer melhor meu trabalho?",
        description:
          "Você pode ver meus projetos comerciais, acessar meu GitHub, baixar meu currículo ou entrar em contato para conversar sobre desenvolvimento web, projetos em produção ou oportunidades profissionais.",
        primaryButton: "Ver projetos",
        secondaryButton: "Baixar currículo",
        tertiaryButton: "Ver GitHub",
        contactButton: "Entrar em contato",
      },
    },
    sharedExperience: {
      title: "O que esses projetos têm em comum",
      description:
        "Esses projetos envolveram mais do que desenvolvimento de interface. Em diferentes níveis, trabalhei com deploy, domínio, SSL, integrações de pagamento, rastreamento, webhooks, VPS, Coolify, manutenção e ajustes após publicação.",
      items: [
        "Desenvolvimento frontend com React, Next.js e TypeScript",
        "Integrações com pagamento, analytics e ferramentas de marketing",
        "Deploy em VPS Linux com Coolify",
        "Configuração de domínio, SSL e variáveis de ambiente",
        "Manutenção, ajustes e suporte pós-publicação",
      ],
    },

    cta: {
      title: "Quer saber mais sobre algum projeto?",
      description:
        "Posso explicar melhor as decisões técnicas, integrações, desafios e aprendizados por trás desses projetos.",
      primaryButton: "Entrar em contato",
      secondaryButton: "Baixar currículo",
      tertiaryButton: "Ver GitHub",
    },
  },

  contactPage: {
    hero: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre desenvolvimento web, projetos ou oportunidades?",
      description:
        "Se você quer falar sobre meu trabalho, projetos comerciais, experiência técnica ou uma possível oportunidade profissional, fique à vontade para entrar em contato.",
      secondaryDescription:
        "Estou em Manaus, Brasil, e tenho experiência com desenvolvimento, deploy e manutenção de sites, landing pages, e-commerces e aplicações web em produção.",
    },

    contactOptions: {
      title: "Canais de contato",
      items: [
        {
          title: "Email",
          description:
            "Melhor canal para contatos profissionais, oportunidades e conversas mais detalhadas.",
          value: "levyjrdev@gmail.com",
          buttonLabel: "Enviar email",
          href: "mailto:levyjrdev@gmail.com",
        },
        {
          title: "LinkedIn",
          description:
            "Para acompanhar meu perfil profissional, experiências, projetos e atualizações.",
          buttonLabel: "Ver LinkedIn",
          href: "https://linkedin.com/in/levy-gomes",
        },
        {
          title: "GitHub",
          description:
            "Para ver repositórios, projetos, código e estudos técnicos.",
          buttonLabel: "Ver GitHub",
          href: "https://github.com/Levy-Jr",
        },
        {
          title: "Currículo",
          description:
            "Baixe uma versão em PDF com meu resumo profissional, habilidades técnicas e projetos selecionados.",
          buttonLabel: "Baixar currículo",
          href: "/cv/Levy_Gomes_Web_Developer_CV.pdf",
        },
      ],
    },

    professionalContext: {
      title: "Contexto profissional",
      description:
        "Atualmente busco oportunidades onde eu possa contribuir com minha experiência prática em projetos comerciais e continuar evoluindo em um ambiente mais estruturado de tecnologia.",
      items: [
        "Localização: Manaus, Brasil",
        "Idiomas: Português nativo • Inglês intermediário/avançado",
        "Foco: Desenvolvimento web, integrações, deploy e manutenção",
        "Experiência: Projetos comerciais como freelancer via Okacodes",
      ],
    },

    cta: {
      title: "Quer saber mais sobre meu trabalho?",
      description:
        "Você também pode acessar meus projetos para ver exemplos de desenvolvimento web, integrações, deploy e manutenção em projetos comerciais.",
      primaryButton: "Ver projetos",
      secondaryButton: "Baixar currículo",
    },
  }
};