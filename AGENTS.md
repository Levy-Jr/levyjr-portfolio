<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Guidelines

## Project purpose

This is my personal developer portfolio.

Its primary goals are:

1. Present my commercial web development experience clearly to recruiters, developers, tech leads, and other people in the software industry.
2. Help with professional networking through platforms such as LinkedIn and X.
3. Demonstrate that I have experience building, deploying, and maintaining real commercial web projects.
4. Present my technical experience honestly without exaggerating my seniority or infrastructure expertise.
5. Provide a professional public presence that can also be seen by potential clients.

This is not an agency website and should not be designed or written like one.

---

## Target audience

Primary audience:

* Recruiters
* Software engineers
* Tech leads
* Engineering managers
* People I meet through professional networking

Secondary audience:

* Potential freelance clients
* Existing professional contacts

When making implementation or UX decisions, optimize primarily for clarity, credibility, readability, and making my commercial experience easy to understand.

---

## Positioning

My main positioning is:

**Web Developer with commercial experience in development, deployment, and maintenance.**

Development is the primary identity.

Infrastructure and deployment experience are supporting differentiators, not my main specialization.

Do not accidentally position me as:

* DevOps Engineer
* Infrastructure Engineer
* Senior Software Engineer
* Large agency/studio
* AI specialist

The portfolio should communicate practical experience without overstating expertise.

---

## What should stand out

The strongest evidence on the portfolio is my commercial project experience.

Prioritize visibility and clarity for:

* Commercial projects
* E-commerce work
* Checkout/payment integrations
* Webhooks and external integrations
* Production deployment
* VPS/Coolify experience
* Analytics and tracking
* Post-launch maintenance

Projects should receive more visual importance than lists of technologies.

---

## Design source of truth

The approved Figma design is the visual source of truth.

When implementing designs through Figma MCP:

* Follow the Figma layout closely.
* Preserve hierarchy, spacing, typography, dimensions, and responsive intent.
* Do not redesign sections unless explicitly requested.
* Do not add decorative elements simply because they are common in developer portfolios.
* Do not introduce unnecessary animations.
* Prefer visual fidelity over personal reinterpretation of the design.

If something in Figma is ambiguous or technically problematic, explain the issue before making a significant design deviation.

---

## Visual direction

The intended visual identity is:

* Dark theme
* Black / dark-gray base
* Orange as an accent
* Minimalist
* Clean
* Professional
* Strong typography
* Deliberate whitespace
* Clear visual hierarchy

Avoid:

* Hacker aesthetic
* Terminal aesthetic
* Command-line motifs
* Excessive technology icons
* Large walls of skill badges
* Agency-style marketing design
* Excessive gradients
* Excessive animations
* Generic developer-portfolio clichés

Minimalism should not mean weak hierarchy or excessive empty space.

---

## Content

Existing approved portfolio copy should be treated as the source of truth.

Do not rewrite portfolio copy unless explicitly requested.

Do not make claims about:

* years of experience
* technical expertise
* business results
* project metrics
* infrastructure experience
* job titles

unless those claims already exist in the approved content.

The portfolio must remain honest and defensible in a job interview.

---

## Engineering approach

Prefer:

* simple architecture
* readable TypeScript
* reusable components where reuse is meaningful
* semantic HTML
* accessible interaction
* responsive layouts
* Server Components where appropriate
* minimal client-side JavaScript
* existing project conventions
* minimal dependencies

Avoid:

* premature abstraction
* unnecessary design systems
* unnecessary state-management libraries
* unnecessary dependencies
* abstraction for abstraction's sake
* large refactors unrelated to the requested task

This is a relatively simple portfolio website. Keep the implementation proportional to the problem.

---

## SEO and public presentation

Because this portfolio is intended to be shared publicly:

* preserve meaningful semantic heading structure
* ensure appropriate metadata
* make project pages indexable where appropriate
* use descriptive page titles and descriptions
* preserve Portuguese and English localization
* avoid exposing private information
* avoid accidentally exposing internal URLs, credentials, server details, environment variables, or private client information

---

## Accessibility

Preserve:

* keyboard navigation
* visible focus states
* semantic HTML
* descriptive image alt text
* sufficient contrast
* sensible heading hierarchy
* accessible links and buttons

Do not sacrifice accessibility for visual fidelity.

---

## Working with the codebase

Before making non-trivial changes:

1. Inspect the relevant existing files and components.
2. Understand the existing implementation before introducing new patterns.
3. Reuse existing components when appropriate.
4. Avoid changing unrelated code.
5. Ask or report when the requested behavior conflicts with the existing architecture or Figma design.

For straightforward UI implementation, proceed without unnecessary planning ceremony.

For changes involving architecture, routing, localization structure, or other non-trivial decisions, briefly explain the proposed approach before making significant changes.

---

## Validation

Before considering a meaningful implementation complete:

* run lint
* run type checking if configured separately
* run the production build
* run relevant tests when they exist

Do not claim success if validation failed.

If something cannot be validated, state that explicitly.

---

## General principle

The goal is not to make this codebase technically impressive for its own sake.

The goal is to produce a polished, fast, maintainable portfolio that communicates my professional experience effectively.