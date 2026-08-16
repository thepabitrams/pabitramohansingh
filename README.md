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

### Key Design Decisions

- Content Collections keep project data separate from UI logic
- Static output pre-renders every page at build time
- Inline stylesheets eliminate extra network requests
- Component-first approach keeps the codebase modular

---

## Dependency Flow

package.json → pnpm install → Node Modules → Astro CLI → Vite Dev Server/Build → Tailwind CSS Vite Plugin + MDX Integration → Static HTML + CSS Output

- PNPM resolves all dependencies from package.json
- Astro orchestrates the build process
- Vite handles bundling and hot-module replacement
- Tailwind CSS Vite plugin processes utility classes
- MDX integration transforms .mdx files into components
- Final output is static HTML, CSS, and minimal JavaScript (only for theme toggle)

---

## Getting Started

### Prerequisites

- Node.js 22.12.0 or later
- PNPM 9.0 or later

### Installation

```bash
git clone https://github.com/thepabitrams/pabitramohansingh.git
cd pabitramohansingh
pnpm install