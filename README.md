
# Portfolio Website by Pabitra Mohan Singh

A modern, performant personal portfolio built with Astro, Tailwind CSS, and TypeScript to showcase my skills, experience, and projects.

---

## Features

- Dark / Light Theme – client-side toggle with local storage persistence
- MDX Content Collections – project pages with Zod-validated frontmatter
- Static Site Generation – fully pre-rendered HTML, zero client-side JavaScript by default
- SEO Optimized – meta tags, Open Graph, semantic HTML5
- Fully Responsive – mobile-first layout with Tailwind CSS
- Blazing Fast – inline critical CSS, HTML compression, no render-blocking scripts
- Accessible – semantic landmarks, heading hierarchy, skip-to-main-content link
- TypeScript – end-to-end static type checking

---

## Technology Stack

- Astro 7
- Tailwind CSS 4
- TypeScript 5
- MDX
- Vite (bundled with Astro)
- PNPM

---

## Architecture Overview

The codebase follows a component-based architecture designed for clarity and maintainability.

### Core Layers

- **Pages** – Route definitions (`index.astro`, `projects.astro`)
- **Layouts** – Base layout wrapper (`BaseLayout.astro`)
- **Components** – Reusable UI pieces (home, projects, layout, ui, seo)
- **Content** – MDX collections with Zod schema validation
- **Styles** – Global CSS and custom animations
- **Types** – TypeScript type definitions

### Dependency Flow

```text
Pages → Layouts → Components → Styles → Types
                                          ↑
                                       Content  
```

- Pages import from Layouts, Components, and Content
- Layouts import from Components and Styles
- Components import from Styles and Types
- Content imports from Types only
- Types has no dependencies

This hierarchy prevents circular dependencies and keeps the codebase predictable.

---

## Getting Started

### Prerequisites
 Node.js 22.12.0 or later
 PNPM 9.0 or later

### Installation

```bash
git clone https://github.com/thepabitrams/pabitramohansingh.git
cd pabitramohansingh
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```
---

## Folder Structure
```text
   src/
    ├── components/   # Reusable Astro UI components
    ├── content/      # MDX project collections with Zod schema
    ├── layouts/      # Page layout wrappers
    ├── pages/        # Route definitions (home, projects)
    ├── styles/       # Global CSS and custom animations
    └── types/        # TypeScript type definitions
```
---

## Acknowledgements
Built with Astro, Tailwind CSS, and TypeScript. Built with a modular, scalable architecture for maintainability and developer experience.

---

Made by Pabitra Mohan Singh