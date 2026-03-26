# Sunnah Clarity Content Architecture

## Purpose

Sunnah Clarity explains traditional Sunni Islamic concepts in clear English, grounded in classical scholarship, with careful sourcing and a non-sectarian tone.

This document is the permanent source of truth for:
- information architecture (IA)
- content model and authoring rules
- taxonomy and navigation
- related-content logic
- anti-drift safeguards
- future-state scalability

## Core content types

### Topic (pillar)

**Role:** Canonical foundation for a concept (e.g., Bid'a, Dhikr, Mawlid).
**URL:** `/topics/{slug}`
**Must contain:**
- clear definition and scope
- method/principles (how scholars evaluate this subject)
- key evidences (Quran/hadith + scholarly framing)
- links to related FAQs
- "Learn more" references (SourceCards to SeekersGuidance)

**Must be:** The longest, most comprehensive page for its concept. If a related FAQ is longer, the topic needs expansion.

### FAQ (question page)

**Role:** Answer one specific question (definition, permissibility, objection response).
**URL:** `/faq/{slug}`
**Must contain:**
- Short Answer section near top
- one narrow question only
- link back to its parent Topic for full context
**Must NOT:**
- attempt to replace the Topic page as the canonical long-form explanation
- exceed the length of its parent Topic (signals a boundary violation)

### Scholar (reference object)

**Role:** Reference page for scholars cited across the site.
**URL:** `/scholars/{slug}`
**Must contain:**
- short bio descriptor (who/why they matter)
- key works / disciplines
- external learning links
**Should contain (future):**
- backlinks: "Cited in" list generated at build time (topic/FAQ pages that link to the scholar)

### Guide (practice / procedural)

**Role:** Step-by-step practical resource (e.g., Daily Dhikr).
**URL (current):** `/dhikr/daily`
**URL (future target):** `/guides/{slug}`
**Rule:** Guides should link to at least one Topic for context.

### Hub (index/browse page)

**Role:** Navigation and discovery layer. Hubs are not essays.
**Current hubs:**
- `/topics` (topic hub)
- `/faq` (question hub, grouped by topic)
- `/scholars` (reference hub)
**Future hubs:**
- `/guides`
- `/start`

## Canonical data model

### TOPIC_REGISTRY (src/lib/navigation.ts)

Single source of truth for all topic identity. Every navigation surface derives from this registry.

```typescript
interface TopicEntry {
  slug: string;        // canonical key — used in URLs, frontmatter, all lookups
  label: string;       // nav/sidebar display label
  title: string;       // full page title
  subtitle: string;    // homepage card subtitle
  description: string; // homepage card + SEO description
}
```

### TopicFrontmatter (content/topics/*.mdx)

```
slug, title, subtitle, description, primarySources[], author, reviewedBy, reviewDate, status, order
```

### FAQFrontmatter (content/faq/*.mdx)

```
slug, title, question, topic (= topic slug), featured?, primarySources[], author, reviewedBy, reviewDate, status
```

The `topic` field MUST match a valid slug from TOPIC_REGISTRY. Build-time validation enforces this.

### ScholarFrontmatter (content/scholars/*.mdx)

```
slug, title, subtitle, description, dates?, madhhab?, primarySources[], author, reviewedBy, reviewDate, status
```

## Taxonomy rules

The canonical key for topic identity is `slug`. It is used in:
- URL paths: `/topics/{slug}`
- FAQ frontmatter: `topic: "{slug}"`
- All navigation lookups
- Sidebar contextual grouping
- FAQ index grouping

No secondary keys exist. No translation layers. One key, one lookup.

## Navigation model

### Header (hub-style, 5 items + search)
Topics → `/topics` | Questions → `/faq` | Scholars → `/scholars` | Daily Dhikr → `/dhikr/daily` | About → `/about`

### Footer
**Topics column:** All 8 topics from `topicNavItems()` with canonical labels.
**Resources column:** Common Questions, Scholars, Daily Dhikr, About & Methodology, SeekersGuidance.

### Sidebar (contextual)
- Always shows: all 8 topics (current highlighted) + Scholar profiles link + Daily Dhikr link
- On topic pages: shows only FAQs for that topic (from content system at build time)
- On FAQ pages: shows only FAQs in same topic group
- On scholar pages: shows "All scholars" link instead of FAQs

### FAQ index (`/faq`)
Grouped by topic slug in registry order. Each section has topic heading + "Read topic →" link.

## Topic vs FAQ editorial contract

| | Topic page | FAQ page |
|---|---|---|
| **Purpose** | Teach a concept comprehensively | Resolve a specific disputed question |
| **Canonical for** | "What is X?" (the concept) | "Is X allowed/forbidden?" (the controversy) |
| **Tone** | Expository, educational | Argumentative, evidence-driven |
| **Structure** | Definition → Evidence → Scholarly tradition → Learn more | Short answer → Objection → Evidence → Scholar quotes → Misconception blocks |
| **Length** | 1500-3000 words (the deep reference) | 800-1500 words (focused, with "see topic for context" link) |
| **Relationship** | Links to its FAQs | Links to its parent topic |
| **SEO target** | Broad concept keyword | Long-tail question keyword |

**Rule:** A FAQ should never be longer than its parent topic. If it is, the topic needs expansion or the FAQ needs trimming.

## Related-content rules and fallback logic

### Topic pages
Show:
1. Related FAQs (same topic slug) — via contextual sidebar
2. If no FAQs exist: show "View all questions →" link only
3. Always: links to Topics hub and Questions hub

### FAQ pages
Show:
1. Sibling FAQs (same topic slug) — via contextual sidebar
2. Parent Topic link (always, in sidebar topic list highlighting)
3. "View all questions →" link

### Scholar pages
Show:
1. All topics (for general navigation)
2. "All scholars" link
3. Future: "Cited in" backlinks (computed at build time)

## Anti-drift rules (non-negotiable)

1. **One canonical topic registry** drives header, footer, sidebar, homepage, FAQ index, and all lookups.
2. **Build fails** if a FAQ has a `topic` value that doesn't match a valid slug in `VALID_TOPIC_SLUGS`.
3. **Build fails** if required frontmatter fields are missing on published content.
4. **Featured FAQs** on the homepage are driven by `featured: true` in frontmatter, not hardcoded arrays.
5. **No new nav arrays** may be created in component files. All navigation surfaces derive from `navigation.ts`.

## Future-state architecture direction

### What must remain stable
- Slugs and URL patterns (no URL churn)
- Canonical topic registry concept
- Content-type contract (Topic vs FAQ vs Guide vs Scholar)
- Build-time validation
- Contextual sidebar behavior

### What can evolve
- Taxonomy categories (adding `category` field to topics for grouping)
- Hub layouts (adding filters, search refinement)
- Advanced metadata fields (`intentType`, `difficulty`, `prerequisites`, `recommendedNext`) as content inventory grows
- New content types (Guides, Glossary entries) with their own schemas

### Planned future additions (not yet implemented)
- `/start` — beginner onboarding with reading paths
- `/guides` — practice resources hub (Daily Dhikr moves here)
- Glossary / reference system for Arabic terminology
- Scholar "Cited in" backlinks (computed at build time)
- `intentType` field on FAQs ("definition", "permissibility", "objection", "practice")

## Editorial rules for adding new content

### When to create a Topic
Create a Topic if the subject is a foundational concept that will likely have multiple FAQs or repeated references. Topics are pillar pages — they should be comprehensive and evergreen.

### When to create an FAQ
Create an FAQ if:
- the title is a natural question ("Is X allowed?", "What is X?")
- the answer is narrow and focused on one claim or controversy
- it belongs clearly under one Topic (via the `topic` slug field)

If the draft FAQ becomes longer than its parent Topic, either promote the content into the Topic or trim the FAQ.

### When to create a Guide
Create a Guide when the reader needs procedural steps or a repeatable practice workflow (e.g., daily adhkar, how to do wudu, prayer guides).

### When to promote an FAQ into a Topic
When an FAQ grows beyond 1500 words and covers more than one sub-question, it may be trying to be a Topic. Either:
- split it (move the broad content into the Topic, keep the narrow question as the FAQ)
- or create a new Topic if the subject is distinct enough

### When two pages overlap too much
If a Topic and its FAQ share more than 50% of the same evidence/arguments, consolidate: make the Topic the canonical deep reference and trim the FAQ to a short answer + link.

## HadithBlock authoring standards

Every `<HadithBlock>` for a Prophetic hadith (from the Prophet ﷺ) or Sahaba narration (Companion saying) **must** include:

### 1. Arabic text (`arabic` prop)

Include the Arabic of the core statement being quoted — typically the Prophet's ﷺ words, the Companion's words, or the key phrase the translation hinges on. Not required for long narrative hadiths where only the outcome/ruling is being cited.

```mdx
<HadithBlock
  arabic="مَنْ قَالَ سُبْحَانَ اللهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ"
  translation="Whoever says 'SubhanAllah wa bihamdihi' one hundred times a day..."
  source="Sahih al-Bukhari, no. 6405; Sahih Muslim, no. 2691"
  sourceUrl="https://sunnah.com/bukhari:6405"
/>
```

If you cannot find the Arabic text of a hadith with confidence, **leave the `arabic` prop out entirely** rather than guess. Never fabricate or approximate Arabic text.

### 2. sunnah.com source link (`sourceUrl` prop)

Use the `https://sunnah.com/collection:number` format. Verified collection identifiers:

| Collection | Identifier |
|---|---|
| Sahih al-Bukhari | `bukhari` |
| Sahih Muslim | `muslim` |
| Sunan Abu Dawud | `abudawud` |
| Jami' al-Tirmidhi | `tirmidhi` |
| Sunan al-Nasa'i | `nasai` |
| Sunan Ibn Majah | `ibnmajah` |
| Musnad Ahmad | `ahmad` |
| Muwatta Malik | `malik` |
| Riyad al-Salihin | `riyadussalihin` |

Example: `sourceUrl="https://sunnah.com/tirmidhi:3377"`

**If the hadith is not in any of the above collections** (e.g., it's from al-Bayhaqi, Ibn Hibban, or a tafsir work), omit `sourceUrl` and cite the source clearly in the `source` prop.

**If you are unsure of the hadith number**, look it up at [sunnah.com](https://sunnah.com) by searching for key words from the translation. Only add `sourceUrl` once you have verified the link resolves to the correct hadith.

### 3. Precise source citation

The `source` prop must include the collection name and hadith number (not just "Sahih al-Bukhari"). Example: `"Sahih al-Bukhari, no. 6405; Sahih Muslim, no. 2691"`

For hadiths graded by scholars, note the grade: `"Sunan al-Tirmidhi, no. 3377; graded sahih by al-Albani"`

### Summary checklist for every new HadithBlock

- [ ] Arabic text included (or omitted with reason if unverifiable)
- [ ] `source` includes collection name AND hadith number
- [ ] `sourceUrl` links to verified sunnah.com URL
- [ ] `narrator` included if known (especially for Sahih Muslim / Bukhari chains)
- [ ] Translation accurately reflects the Arabic
