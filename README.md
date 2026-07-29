# Glorious Health Ministries

Marketing site for Glorious Health Ministries, a faith-based healing and support
ministry for widows. The site introduces the ministry's three pillars —
Gatherings, Connection, and Sisterhood — shares the founder's story, and gives
widows, churches, and funeral homes a way to learn more and get in touch.

Domain: [glorioushealthministries.com](https://glorioushealthministries.com)

## Tech Stack

- **[Astro](https://astro.build)** — static site generation, no client-side framework
- **TypeScript**
- **Vanilla CSS** — custom design tokens (`src/styles/global.css`), no CSS framework
- **[Vitest](https://vitest.dev)** — unit tests
- **ESLint** (`typescript-eslint`, `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`) + **Prettier**
- **[@lucide/astro](https://lucide.dev)** — icons
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap generation

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server               |
| `npm run build`        | Build the static site to `dist/`         |
| `npm run preview`      | Preview the production build locally     |
| `npm run typecheck`    | Run `astro check`                        |
| `npm run lint`         | Run ESLint                               |
| `npm run test`         | Run the test suite once                  |
| `npm run test:watch`   | Run tests in watch mode                  |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |
| `npm run validate`     | typecheck + lint + test + build          |

## Project Structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   └── ui/           # Button, Card, Feature, TimelineItem, InfoBlock, StyledDropdown
├── config/
│   └── site.ts       # Site name, tagline, nav links, contact email — edit here for site-wide copy
├── layouts/
│   └── BaseLayout.astro  # <head> meta/SEO, page shell
├── pages/
│   └── index.astro   # The single-page site (hero, about, pillars, workshops, blog, contact)
└── styles/
    └── global.css     # Design tokens (color, spacing, type) and all site styles
public/
└── images/            # Site imagery (dove, ivy, logo, etc.)
```

## Editing Content

Most day-to-day copy changes happen in two places:

- **`src/config/site.ts`** — site name, tagline, nav/footer links, contact email
- **`src/pages/index.astro`** — section headings and body copy for each part of the page

Before committing changes, run `npm run validate` to confirm typechecking, linting, tests, and the build all pass.
