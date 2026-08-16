
# ToolPabitraMS

ToolPabitraMS is a personal, client-side utility toolkit built with React, TypeScript, and Vite.

All processing happens entirely in your browser. Files are never sent to any server. Your data stays private and local.

---

## Features

- All processing runs locally in your browser – privacy-first, no server uploads
- Modular tool architecture – add new utilities without touching existing code
- Offline-ready – works without internet via service workers
- Clean, responsive design – works on desktop and mobile devices
- Dark mode support – comfortable viewing in any environment
- Persistent local storage – files stay saved until you remove them

---

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router DOM
- IndexedDB / OPFS
- Custom Motion Engine

---

## Architecture Overview

The codebase follows a layered architecture designed for scalability and maintainability.

### Core Layers

- **Core** – UI primitives, layout components, global state
- **Shared** – Reusable components used across tools
- **Entities** – Domain logic and data models
- **Tools** – Self-contained feature modules
- **Lib** – Generic helpers extracted when used in multiple places
- **Pages** – Route screens

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
    Node.js 18 or later
    npm or yarn

### Installation

```bash
git clone https://github.com/thepabitrams/toolpabitrams.git
cd toolpabitrams
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
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