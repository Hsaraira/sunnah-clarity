# Sunnah Clarity — Project Status

> Last updated: 2026-03-24

## Current phase

Phase 1 — Feature Complete (all pages live, all features operational)

## What's done

- Next.js 16 project initialized (App Router, TypeScript, Tailwind CSS 4, ESLint)
- Git repository initialized and pushed to GitHub
- Guardrail files created (project-context, session-protocol, quality-gate, no-shortcuts)
- Documentation files created (STATUS, ARCHITECTURE, DECISIONS, REQUIREMENTS)
- Agent prompts created (research, builder-reference, reviewer, security, qa)
- Design system: color tokens (light + dark CSS vars), Utopia fluid typography, fonts via next/font/google
- Dark mode toggle with system preference detection and localStorage persistence
- Layout components: Header (with nav + search + theme toggle), Footer, ThreeColumnLayout, Sidebar, TableOfContents, MobileTOC
- Content components: HadithBlock, QuranVerse, MisconceptionBlock, ScholarQuote, MadhabComparison, SourceCard, TopicCard, FAQLink, GeometricPattern, SectionDivider, ProgressiveDisclosure
- MDX pipeline: @next/mdx with remark-gfm, remark-frontmatter, rehype-slug, rehype-autolink-headings
- Content loading library (src/lib/content.ts) with frontmatter extraction and reading time
- Dynamic routes: /topics/[slug] and /faq/[slug] with generateStaticParams
- All 7 topic pages with full content: Bid'a, Mawlid, Dhikr, Tasawwuf, Madhabs, Isnad, Scholarly Tradition
- All 11 FAQ pages with full content: What is bid'a, Is mawlid haram, Is sufism allowed, Do I need a madhab, Is group dhikr permissible, Is tawassul shirk, Why do scholars differ, What is ihsan, Is taqlid allowed, Can you visit graves, Is salawat a bid'a
- About page with editorial methodology and SeekersGuidance credit
- Custom 404 page
- Pagefind static search with custom dialog (Ctrl+K)
- SEO: sitemap.xml, robots.txt, JSON-LD structured data
- Plausible analytics (privacy-respecting, no cookies)
- Mobile: floating TOC button with bottom sheet, hamburger nav
- FAQ index page (/faq) listing all questions with topic badges
- Canonical URLs via metadataBase + per-page alternates
- Reading progress bar on article pages (CSS scroll-driven animation)
- Framer Motion hero animation (LazyMotion, ~5KB)
- Custom 404 page
- Deployed to Vercel: https://sunnah-clarity.vercel.app
- GitHub auto-deploy on push

## What's in progress

(Nothing actively in progress.)

## What's next

- Custom domain setup (sunnahclarity.org)
- Self-hosted WOFF2 fonts (optional — next/font/google works well)
- Additional FAQ entries as new questions arise

## Blockers

(None.)

## Recent changes

| Date | What changed | Files touched |
|------|-------------|---------------|
| 2026-03-24 | Full content for all topics and FAQs, 6 new FAQ entries, nav updates | 15+ files |
| 2026-03-24 | FAQ index, canonical URLs, progress bar, Framer Motion hero, polish | 10+ files |
| 2026-03-24 | All content pages, ProgressiveDisclosure, MobileTOC, 404, Plausible analytics | 15+ files |
| 2026-03-24 | About page, Pagefind search, SEO (sitemap, robots.txt, JSON-LD), Vercel deploy | 11 files |
| 2026-03-24 | Dark mode toggle, MDX pipeline, ThreeColumnLayout, Sidebar, TOC, content routes | 18+ files |
| 2026-03-24 | Project initialized with Next.js, guardrails, docs, prompts | All initial files |
