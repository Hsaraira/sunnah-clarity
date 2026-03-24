# Sunnah Clarity — Requirements

## Status legend

- `[ ]` — not started
- `[~]` — in progress
- `[x]` — complete
- `[-]` — cut / deferred

## Phase 1: MVP (Target 4-6 weeks)

### Design System
- [ ] Self-hosted fonts: Newsreader, Playfair Display, Amiri, Inter (WOFF2 variable)
- [ ] CSS custom properties for full color system (light + dark mode)
- [ ] Fluid typography scale (Utopia)
- [ ] Dark mode toggle with system preference detection

### Layout
- [ ] ThreeColumnLayout component (sidebar + content + TOC)
- [ ] Header with site navigation
- [ ] Footer with about, methodology, SeekersGuidance credit
- [ ] Left sidebar navigation (collapses to hamburger on mobile)
- [ ] Right sticky Table of Contents (hides behind floating button on mobile)
- [ ] Reading progress indicator (CSS-only)
- [ ] Mobile-responsive at all breakpoints

### Content Components
- [ ] HadithBlock (gold background, Arabic + translation, source citation)
- [ ] QuranVerse (green-tinted background, Arabic + translation, surah:ayah)
- [ ] MisconceptionBlock ("Common Claim" → "What Scholars Actually Say")
- [ ] ScholarQuote (pull quote with attribution)
- [ ] MadhabComparison (cross-madhab table with color-coded cells)
- [ ] SourceCard (SeekersGuidance "go deeper" link card)
- [ ] ProgressiveDisclosure (3-tier: summary → detailed → sources)
- [ ] DropCap for article openings
- [ ] GeometricPattern (SVG Islamic patterns at 3-8% opacity)
- [ ] SectionDivider (geometric pattern replacing generic `<hr>`)

### Content Pages
- [ ] 5-7 topic hub pages with progressive disclosure
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
- [ ] About page with editorial methodology and SeekersGuidance credit

### MDX Pipeline
- [ ] MDX processing with frontmatter extraction
- [ ] Frontmatter schema validation (title, slug, topic, sources, author, reviewer)
- [ ] Static page generation from MDX files
- [ ] Custom MDX components mapped to content components

### Search & SEO
- [ ] Pagefind static search (post-build CLI step)
- [ ] Search dialog/modal UI
- [ ] Meta tags (title, description, og:image)
- [ ] Schema.org Article structured data
- [ ] XML sitemap (auto-generated at build)
- [ ] robots.txt
- [ ] Canonical URLs

### Analytics & Deploy
- [ ] Privacy-respecting analytics (Plausible or Umami)
- [ ] Deploy to Vercel
- [ ] Verify full static export works
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
