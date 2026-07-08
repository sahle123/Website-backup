# Sahle Alturaigi — Portfolio (2026 rendition)

Important note: **THIS WAS MOSTLY BUILT USING AI**

A modernized personal portfolio for Sahle "Sal" Alturaigi, built with [Astro](https://astro.build).

## Why Astro?

This is a content-focused showcase site — no auth, no live data, no client-side app state.

- **Ships zero JavaScript by default**, so the site is fast and scores well on Core Web Vitals. The only JS is a tiny, self-contained bundle for scroll reveals, magnetic buttons, and the sticky-nav state.
- **Component reuse** — a single `Nav`, `Footer`, and `ProjectCard` are authored once and shared across every page. (The previous site copy-pasted the nav and footer into all seven HTML files, which is how typos crept in.)
- **Built-in image optimization** — source photos are automatically converted to responsive WebP at build time (the originals total several MB; the shipped versions are a fraction of that).
- **Deploys as plain static files** to any host (S3/CloudFront, Netlify, Vercel, GitHub Pages).


## Project structure

```
src/
  assets/          # images imported + optimized by Astro
  components/       # Nav, Hero, Skills, Projects, ProjectCard, About, Footer, Icon
  data/
    projects.ts     # all project copy, imagery, tech, and links (single source of truth)
    site.ts         # bio, skills, fun facts, social links
  layouts/Base.astro# <head>, global CSS, the small progressive-enhancement JS
  pages/
    index.astro     # the single-scroll home page
    projects/[slug].astro  # one detail page generated per project
public/
  media/            # CV PDF (downloadable)
  games/afterlife/  # bundled Unity WebGL build (the "Play in browser" link)
  favicon.png
```

To add or edit a project, change `src/data/projects.ts` — the home grid and the detail page update together.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Design system

- **Dark + neon** aesthetic (cyan/violet/magenta) tuned for a tech-meets-games feel.
- **Strict 8-point spacing grid** via CSS custom properties (`--space-1`…`--space-8`).
- **Glassmorphism** (`backdrop-blur`), thin borders, and subtle low-opacity background grid lines.
- **Mobile-first**, fluid typography with `clamp()`, and layouts that scale cleanly to tablet/desktop.
- **WCAG AA** color contrast; all motion respects `prefers-reduced-motion`.
