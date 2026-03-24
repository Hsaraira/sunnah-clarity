# Sunnah Clarity — Requirements

## Status legend

- `[ ]` — not started
- `[~]` — in progress
- `[x]` — complete
- `[-]` — cut / deferred

## Phase 1: MVP (Target 4-6 weeks)

### Design System
- [~] Self-hosted fonts: Newsreader, Playfair Display, Amiri, Inter (currently via next/font/google; WOFF2 deferred)
- [x] CSS custom properties for full color system (light + dark mode)
- [x] Fluid typography scale (Utopia)
- [x] Dark mode toggle with system preference detection

### Layout
- [x] ThreeColumnLayout component (sidebar + content + TOC)
- [x] Header with site navigation
- [x] Footer with about, methodology, SeekersGuidance credit
- [x] Left sidebar navigation (collapses to hamburger on mobile)
- [x] Right sticky Table of Contents (hides behind floating button on mobile)
- [x] Reading progress indicator (CSS-only)
- [x] Mobile-responsive at all breakpoints (floating TOC button, bottom sheet, hamburger nav)

### Content Components
- [x] HadithBlock (gold background, Arabic + translation, source citation)
- [x] QuranVerse (green-tinted background, Arabic + translation, surah:ayah)
- [x] MisconceptionBlock ("Common Claim" → "What Scholars Actually Say")
- [x] ScholarQuote (pull quote with attribution + Arabic text support)
- [x] MadhabComparison (cross-madhab table with color-coded cells)
- [x] SourceCard (SeekersGuidance "go deeper" link card)
- [x] ProgressiveDisclosure (3-tier: summary → detailed → sources)
- [x] DropCap for article openings
- [x] GeometricPattern (SVG Islamic patterns at 3-8% opacity)
- [x] SectionDivider (geometric pattern replacing generic `<hr>`)

### Content Pages (human-written content required)
- [~] 5-7 topic hub pages with progressive disclosure
  - [ ] Bid'a (Innovation)
  - [ ] Mawlid
  - [ ] Dhikr
  - [ ] Tasawwuf / Sufism
  - [ ] Madhabs (Schools of Thought)
  - [ ] Chains of Narration (Isnad/Silsila)
  - [ ] Scholars & Scholarly Tradition
- [ ] 10-15 FAQ entries (SEO entry points)
  - [ ] Is mawlid haram?
  - [ ] Is sufism allowed in Islam?
  - [ ] Do I need to follow a madhab?
  - [ ] What is bid'a in Islam?
  - [ ] Is group dhikr permissible?
  - [ ] (5-10 more to be determined)
- [x] About page with editorial methodology and SeekersGuidance credit

### MDX Pipeline
- [x] MDX processing with frontmatter extraction
- [x] Frontmatter schema validation (title, slug, topic, sources, author, reviewer)
- [x] Static page generation from MDX files
- [x] Custom MDX components mapped to content components

### Search & SEO
- [x] Pagefind static search (post-build CLI step)
- [x] Search dialog/modal UI (Ctrl+K shortcut)
- [x] Meta tags (title, description, og:image)
- [x] Schema.org Article structured data (JSON-LD)
- [x] XML sitemap (auto-generated at build)
- [x] robots.txt
- [ ] Canonical URLs

### Analytics & Deploy
- [x] Privacy-respecting analytics (Plausible — no cookies)
- [x] Deploy to Vercel (https://sunnah-clarity.vercel.app)
- [x] Verify full static export works
- [ ] Custom domain setup

## Phase 2: Expansion (Deferred)

- [-] Isnad/silsila chain visualizer (D3.js)
- [-] Scholar profile pages
- [-] Keystatic CMS setup
- [-] Multi-language support
- [-] Newsletter
- [-] Audio/video content
- [-] Comments or discussion features
- [-] Learning paths / guided curriculum
