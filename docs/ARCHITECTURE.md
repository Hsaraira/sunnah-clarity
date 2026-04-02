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

## Content verification protocol

All religious content — scholar data, hadith references, theological claims — must pass verification before it enters the codebase. This is not optional. Unverified content is worse than no content.

### Scholar lineage data (`src/lib/scholar-lineage-data.ts`)

Every entry in the scholar lineage must satisfy ALL of the following:

1. **Direct quote or honest attribution.** The `bidaStatement` field must be either:
   - A direct translation from a named, specific source (book title + volume/chapter), OR
   - Explicitly marked as an indirect attribution with the intermediary scholar named (e.g., "Attributed via al-Qarafi" — not presented as the scholar's own words)
2. **Specific source citation.** The `source` field must include the book title and, where possible, volume/chapter/section. Vague citations like "his works" or "well-known" are not acceptable.
3. **SeekersGuidance verification.** At least one of the following must be true:
   - The scholar and their position are referenced in a SeekersGuidance article (link the article in the data or in a verification comment)
   - The primary source is a well-known classical text that is independently verifiable (e.g., Fath al-Bari, Sharh Sahih Muslim, Radd al-Muhtar)
4. **No fabricated or paraphrased quotes presented as direct.** If you cannot find the scholar's actual words, say "his school's methodology holds that..." — do not invent a quote.
5. **Dates must be verified.** Death dates (AH and CE) must match established biographical sources.

### Topic and FAQ content

1. **Every hadith cited must include:** collection name (e.g., Sahih Muslim), hadith number where available, and the companion who narrated it.
2. **Every Quranic verse must include:** surah name and verse number.
3. **Every scholar position must be traceable:** to a named book or a SeekersGuidance article that discusses it.
4. **SeekersGuidance links:** Every topic and FAQ should include at least one "go deeper" link to a relevant SeekersGuidance article. These links must be verified as live and relevant — not guessed.
5. **Counter-arguments must be steel-manned:** When presenting a position that disagrees with the mainstream traditional view, present it in its strongest form before responding. No straw men.

### Verification process for AI-generated content

When an AI agent adds or modifies religious content:

1. Search SeekersGuidance.org for relevant articles on the topic
2. Cross-reference scholar names, dates, and positions against the SeekersGuidance content
3. If SeekersGuidance doesn't cover the specific claim, verify against the named primary source
4. If neither verification is possible, flag the content with a `<!-- UNVERIFIED: [reason] -->` comment and inform the user
5. Never present unverified content as established fact

### What to do when verification fails

- If a scholar entry cannot be verified: remove it or downgrade it to a footnote with honest attribution
- If a hadith reference cannot be verified: remove it
- If a SeekersGuidance link is dead or irrelevant: find the correct one or remove the link
- If unsure: ask the user. Do not guess.

## Key design decisions

See `docs/DECISIONS.md` for rationale on all architecture choices.
