# Sunnah Clarity — Architecture

## Overview

A modern, statically-generated website explaining traditional Sunni Islamic concepts to English-speaking laypeople. All content is original human-written text citing primary Islamic sources, with SeekersGuidance.org linked as "go deeper" references. Non-commercial, purely informative.

## System design

```
Primary Islamic sources (Quran, hadith, classical scholars)
        │
        ▼
Human editor writes original MDX content
        │
        ▼
Git commit → GitHub PR → Editorial review → Merge
        │
        ▼
Vercel build triggered via webhook
        │
        ▼
Next.js SSG reads MDX → generates static HTML + Pagefind index
        │
        ▼
Vercel Edge CDN serves static HTML globally
        │
        ▼
User's browser (static HTML, client-side search)
```

No database. No API layer. No runtime content generation.

## Tech stack

- **Framework:** Next.js 15 (App Router) with `output: 'export'` for full static generation
- **Hosting:** Vercel (free tier) — global CDN, automatic HTTPS, $0
- **Content:** MDX files in Git repository — version control, auditability, $0
- **Search:** Pagefind — fully static client-side search, ~50KB, $0
- **Styling:** Tailwind CSS 4 + `@tailwindcss/typography`
- **Components:** shadcn/ui (selective: accordion, tabs, dialog, tooltip, sheet)
- **Animation:** Framer Motion (selective, LazyMotion ~5KB gzipped)
- **Analytics:** Plausible or Umami — privacy-respecting, no cookies
- **Fonts:** Newsreader (body), Playfair Display (headings), Amiri (Arabic), Inter (UI)

## Data flow

Content is read from the filesystem at build time only. No REST, no GraphQL, no database queries at runtime. This eliminates entire categories of failure modes.

1. MDX files in `content/` directory contain all religious content with enforced frontmatter schema
2. At build time, Next.js reads MDX files and generates static HTML pages
3. Pagefind indexes the built HTML to create a client-side search index
4. Vercel deploys static files to edge CDN

## Content integrity — five-layer model

1. **Source restriction** — All religious content is original writing based on primary Islamic sources. No AI generates theological text.
2. **Content-as-code** — All content is MDX files in Git. Every change creates an auditable commit.
3. **PR-based editorial review** — Content changes go through GitHub Pull Requests with required approval.
4. **Schema-enforced metadata** — Frontmatter requires `primarySources`, `author`, `reviewedBy`, `reviewDate`, and `status`.
5. **Static rendering** — Next.js SSG bakes approved content into static HTML. No dynamic content at runtime.

## Directory structure

```
content/           — MDX content files (topics, FAQ, scholars)
src/app/           — Next.js App Router pages
src/components/    — React components (layout, content, UI, search, decorative)
src/lib/           — Utilities (MDX processing, content helpers)
src/styles/        — Global CSS, custom properties
public/fonts/      — Self-hosted WOFF2 variable fonts
public/patterns/   — SVG Islamic geometric patterns
docs/              — Project documentation
.cursor/rules/     — Agent behavior rules
.cursor/prompts/   — Review agent prompts
```

## Key design decisions

See `docs/DECISIONS.md` for rationale on all architecture choices.
