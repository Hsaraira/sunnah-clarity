# Sunnah Clarity — Project Status

> Last updated: 2026-03-24

## Current phase

Phase 1 — MVP Build (design system complete, pipeline operational, building content pages)

## What's done

- Next.js 16 project initialized (App Router, TypeScript, Tailwind CSS 4, ESLint)
- Git repository initialized and pushed to GitHub
- Guardrail files created (project-context, session-protocol, quality-gate, no-shortcuts)
- Documentation files created (STATUS, ARCHITECTURE, DECISIONS, REQUIREMENTS)
- Agent prompts created (research, builder-reference, reviewer, security, qa)
- Content directory structure created (topics, faq, scholars)
- Design system: color tokens (light + dark CSS vars), Utopia fluid typography, fonts via next/font/google
- Dark mode toggle with system preference detection and localStorage persistence
- Layout components: Header (with nav + theme toggle), Footer, ThreeColumnLayout, Sidebar, TableOfContents
- Content components: HadithBlock, QuranVerse, MisconceptionBlock, ScholarQuote (with Arabic support), MadhabComparison, SourceCard, TopicCard, FAQLink, GeometricPattern, SectionDivider
- MDX pipeline: @next/mdx configured with remark-gfm, remark-frontmatter, rehype-slug, rehype-autolink-headings
- Content loading library (src/lib/content.ts) with frontmatter extraction and reading time
- Dynamic routes: /topics/[slug] and /faq/[slug] with generateStaticParams
- mdx-components.tsx mapping custom components for MDX
- Homepage with Hero, Topics grid, FAQ links, Methodology sections
- First content pages: Bid'a topic + "What is Bid'a?" FAQ (pipeline proof — human content TBD)

## What's in progress

- Additional content pages (topic hubs + FAQs — need human-written content)

## What's next

- About page
- Search (Pagefind static search + search dialog UI)
- SEO (meta tags, structured data, sitemap, robots.txt)
- Analytics (Plausible or Umami)
- Deploy to Vercel
- Human-written content for all topic hubs and FAQs

## Blockers

(None.)

## Recent changes

| Date | What changed | Files touched |
|------|-------------|---------------|
| 2026-03-24 | Dark mode toggle, MDX pipeline, ThreeColumnLayout, Sidebar, TOC, content routes, first content pages | 18+ files |
| 2026-03-24 | Project initialized with Next.js, guardrails, docs, prompts | All initial files |
