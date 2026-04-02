# Sunnah Clarity — Decision Log

Record architecture and design decisions here. Never leave rationale only in chat.

## Format

### Decision: (short title)
- **Date:** (date)
- **Context:** (what problem or question prompted this)
- **Options considered:** (what alternatives existed)
- **Decision:** (what was chosen)
- **Rationale:** (why)
- **Consequences:** (what this means going forward)

---

### Decision: Drop Supabase, use MDX in Git for content
- **Date:** 2026-03-24
- **Context:** Originally considered Supabase as backend/database for content storage. Needed to decide how to store religious content.
- **Options considered:** (1) Supabase as content store, (2) Headless CMS (Contentful, Sanity), (3) MDX files in Git, (4) Notion-as-CMS
- **Decision:** MDX files in Git repository
- **Rationale:** Supabase strengths (auth, real-time, RLS) are irrelevant for a read-only static content site. MDX in Git provides full version control (every word change tracked), zero cost, architectural content integrity (no database to misconfigure), and natural PR-based editorial workflow.
- **Consequences:** No database dependency. Content is code — same review process as code changes. Future features requiring a database would need Supabase re-added.

---

### Decision: Original content + primary sources, NOT copied SeekersGuidance text
- **Date:** 2026-03-24
- **Context:** SeekersGuidance.org is the authoritative source, but we needed to decide how to use their content.
- **Options considered:** (1) Scrape/mirror SeekersGuidance content, (2) Summarize/repackage their answers, (3) Write original content citing primary Islamic sources, linking to SeekersGuidance as "go deeper"
- **Decision:** Original content with primary source citations and SeekersGuidance "go deeper" links
- **Rationale:** Legal safety (no copyright issues), SEO viability (Google won't rank copied content), stronger product (our value is organization and accessibility), drives traffic TO SeekersGuidance rather than away. Primary Islamic sources (Quran, hadith, classical scholars) belong to the entire Muslim tradition and are not copyrightable.
- **Consequences:** Content production is slower (must be written by knowledgeable authors), but the end product is more valuable and legally defensible.

---

### Decision: Full static site generation (SSG) with no runtime content
- **Date:** 2026-03-24
- **Context:** Religious content accuracy is paramount. Needed to eliminate any possibility of hallucinated or dynamically generated religious content reaching users.
- **Options considered:** (1) SSR with database, (2) ISR with revalidation, (3) Full SSG with `output: 'export'`
- **Decision:** Full SSG
- **Rationale:** Zero runtime content generation = zero hallucination risk. Every word a visitor reads was written by a human, reviewed by a human, and baked into static HTML at build time. This is an architectural constraint, not just a policy.
- **Consequences:** Content updates require a rebuild and redeploy (triggered automatically by Git push to Vercel). No dynamic features without adding client-side JavaScript.

---

### Decision: Newsreader + Playfair Display + Amiri font stack
- **Date:** 2026-03-24
- **Context:** Needed typography that signals scholarly rigor and spiritual warmth while being highly readable for long-form content.
- **Options considered:** Various serif/sans combinations. Specifically avoided Inter as body font (ships with every AI tool — instant "template" signal).
- **Decision:** Newsreader (body), Playfair Display (headings), Amiri (Arabic), Inter (UI only)
- **Rationale:** Newsreader is an excellent reading serif with variable weight support. Playfair Display provides editorial authority for headings. Amiri is the gold standard for Arabic web typography with proper diacritical mark support. Inter restricted to UI elements only.
- **Consequences:** Must self-host all fonts as WOFF2 variable files. Need `unicode-range` subsetting for Amiri to avoid loading Arabic font for English-only pages.

---

### Decision: AI may write content, user reviews for accuracy
- **Date:** 2026-03-24
- **Context:** Original plan required all theological content to be human-written. User decided they won't write content themselves and authorized AI to write it.
- **Options considered:** (1) User writes all content, (2) AI writes content with user review, (3) Hire human authors
- **Decision:** AI writes content referencing primary Islamic sources and SeekersGuidance. User reviews for accuracy.
- **Rationale:** Practical necessity — the site needs content to be useful. Content still cites real primary sources (Quran, hadith, classical scholars) and links to SeekersGuidance for deeper study. User retains editorial control.
- **Consequences:** Content integrity rule updated. All content should still cite verifiable sources and link to SeekersGuidance.

---

### Decision: Content verification protocol — no unverified religious claims
- **Date:** 2026-04-02
- **Context:** The scholar lineage page contains 19+ scholar entries with quotes and source citations. Some entries had indirect attributions (e.g., Abu Hanifa "attributed via al-Kasani") that could be challenged as fabricated. The site's credibility depends on every claim being verifiable. User requested that verification requirements be baked into project documentation so AI agents enforce them automatically, rather than relying on per-session prompts.
- **Options considered:** (1) Verbal instruction each session, (2) Cursor rule only, (3) Full protocol in ARCHITECTURE.md
- **Decision:** Full content verification protocol added to `docs/ARCHITECTURE.md`. Every scholar entry must have a direct quote or honest indirect attribution, specific source citation (book + volume), and SeekersGuidance or primary source verification. Unverifiable content must be flagged or removed.
- **Rationale:** A site arguing for the scholarly tradition cannot afford to be caught with a fabricated or unverifiable quote. One exposed error undermines the entire page. The protocol must be architectural — enforced by documentation that every AI agent reads at session start — not dependent on user memory.
- **Consequences:** Some existing entries (Abu Hanifa, Imam Malik) may need to be revised or downgraded to honest indirect attributions. New scholar entries require verification before addition. AI agents must search SeekersGuidance and primary sources before adding religious content.

---

### Decision: Navy + gold + green color palette
- **Date:** 2026-03-24
- **Context:** Needed a color system that is culturally resonant with Islamic visual tradition while feeling modern and trustworthy.
- **Options considered:** Various modern palettes. Rejected purple-to-blue gradients (AI-slop signal).
- **Decision:** Deep navy-black text (#1A1A2E), scholarly blue primary (#27579E), Islamic gold accent (#D4AF37), Islamic green secondary (#1B7A4E), warm white backgrounds (#FAFAF5)
- **Rationale:** Navy conveys trust and authority. Gold is deeply rooted in Islamic artistic tradition (mosque decoration, Quran illumination). Green is the color of Paradise in Islamic tradition. Warm white avoids the clinical feel of pure white.
- **Consequences:** Full dark mode variant required. Gold must be used sparingly (10% rule) to maintain impact.
