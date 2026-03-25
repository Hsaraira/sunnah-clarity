# Information Architecture Audit of sunnahclarity.com

## Executive summary

Your website already has a coherent **macro-structure** (Topics → FAQs → Scholars → Daily Dhikr → About), and it is unusually strong in one key IA dimension: **content credibility scaffolding** (methodology page + consistent "go deeper" links). The homepage also does a good job of exposing the "top tasks" (core topics + common questions + daily dhikr) for first-time users.

The biggest IA weaknesses are structural—not theological:

- **Content types blur together** (Topic pages vs FAQ pages often feel like two parallel long-form articles, not "foundations vs quick answers"). Example: the "Bid'a" topic is "12 min read," but the FAQ "What is bid'a?" is "14 min read," and both share the same conceptual frame ("The Hadith Everyone Cites").
- **Navigation is overloaded and not scalable**: header lists every topic + multiple resources; sidebars list *all* topics *and all* FAQs, even when irrelevant to the current page. This is fine at 8/17 pages, but it will degrade fast at 50/100.
- **Labeling and grouping are inconsistent**, especially around "Tradition" vs "The Scholarly Tradition" vs "Scholars," and "Music" vs "Music & Nasheeds."
- **Global navigation consistency breaks in the footer**: "Music & Nasheeds" appears as a core topic on the homepage, but is missing from the footer's "Topics" list sitewide (at least on the pages audited).
- **URL pattern consistency is imperfect**: almost everything is under `/topics/…` or `/faq/…`, but the Daily Dhikr Guide lives at `/dhikr/daily` (a third structural branch). That becomes an IA liability if you ever add more "guides" or "practice" resources.

Blunt verdict: **decent but messy (needs restructuring before content growth)**.

Scores (based on the live structure audited):
- **Information Architecture:** **6.5 / 10**
- **Discoverability:** **7.0 / 10**

The Claude/Cursor "claimed architecture" is broadly aligned with the live site's major routes and counts, but there are meaningful mismatches (notably the FAQ index grouping and some labeling/navigation consistency).

## Current IA and inferred content model

The site presents a clear "knowledge site" pattern with five visible content types plus navigation shells.

### Inferred content model table

| Content type | Primary user job-to-be-done | URL pattern | Example URLs |
|---|---|---|---|
| Homepage (hub) | Choose a topic or common question quickly | `/` | `/` |
| Topic page (pillar article) | Learn a foundational concept (long-form) | `/topics/{slug}` | `/topics/bidah`, `/topics/mawlid`, `/topics/scholarly-tradition` |
| FAQ index (Q&A directory) | Browse all question pages | `/faq` | `/faq` |
| FAQ page (Q&A article) | Answer a narrow "is X allowed?" or "what is X?" question | `/faq/{slug}` | `/faq/is-mawlid-haram`, `/faq/is-group-dhikr-permissible` |
| Scholar index (directory) | Browse scholar references used across the site | `/scholars` | `/scholars` |
| Scholar profile page (biographical reference) | Understand who a scholar is and why cited | `/scholars/{slug}` | linked from `/scholars` |
| Practical guide (practice resource) | Perform daily adhkar with counts and sources | `/dhikr/daily` | `/dhikr/daily` |
| Methodology / about (trust layer) | Understand editorial standards and positioning | `/about` | `/about` |

### Claimed architecture vs live site

These items match the live site:
- The main visible route families are present: `/topics/{slug}`, `/faq/{slug}`, `/faq`, `/scholars`, `/dhikr/daily`, `/about`.
- Counts appear consistent: 8 topics on the homepage; 17 FAQ items on `/faq`; 39 scholar names on `/scholars`.

Key mismatches to flag:
- **Claim:** "FAQ index lists all 17 FAQs grouped by topic."
  **Observed:** `/faq` displays a single flat list (topic shown per item, but no visible grouping sections like "Bid'a," "Mawlid," etc.).
- **Claim:** progressive disclosure "three levels" via a dedicated UI component ("Beginner/Intermediate/Advanced").
  **Observed:** the homepage states "Each topic is explained at three levels," but the audited topic pages do not visibly present an explicit "Beginner/Intermediate/Advanced" tab structure in the static HTML view.
- **Navigation consistency:** the footer "Topics" list is incomplete compared to the homepage's "Core Topics" set (missing "Music & Nasheeds" and conflating "The Scholarly Tradition" with "Scholars").

## What is organized well

The site has several IA wins that should be **preserved** while restructuring.

The homepage clearly frames the site's purpose and exposes the main content buckets ("Core Topics," "Common Questions," "Daily Dhikr Guide"), which is exactly what a first-time user needs.

Q&A pages have strong **metadata cues** ("Frequently Asked Question," "Topic: …," and read time), which helps users understand "what kind of page" they're on.

Internal linking is already pointing in the right direction: one FAQ links to another FAQ for a deeper drill-down and also points to the related topic page ("For the full evidence… see our detailed topic page on Dhikr"). This is a correct "hub-and-spoke" pattern.

The site has a strong "trust layer": the methodology page sets expectations (human-written content, primary source citations, not a fatwa service) and consistently routes "deeper study" to SeekersGuidance.org.

## What is confusing, overlapping, or inconsistent

### Topic pages vs FAQ pages are not cleanly differentiated

Right now, "Topics" and "FAQs" are **two flavors of long-form articles** with the same information scent, same left navigation chrome, and sometimes overlapping section framing.

Concrete overlap example:
- Topic: "Bid'a — Innovation in Islam" ("12 min read"), begins with framing around "The Hadith Everyone Cites."
- FAQ: "What is bid'a in Islam?" ("14 min read"), also begins with "The Hadith Everyone Cites," and covers the same hermeneutic point ("how to understand 'every'").

That defeats the usual expectation that an FAQ is a quick orientation and the topic page is the deep pillar (or vice versa). This isn't "wrong," but it **creates content competition** ("Which page should rank? Which should I read?") and makes progressive learning harder to design.

The same pattern repeats elsewhere:
- Topic "Dhikr — Remembrance of Allah" is "7 min read," while the FAQ "Is group dhikr permissible?" is "20 min read."
- Topic "Mawlid — Celebrating the Prophet ﷺ" is "8 min read," while the FAQ "Is celebrating the Mawlid haram?" is "13 min read."

If the intended model is "FAQ = narrow, shorter," the live structure contradicts it in multiple places.

### Navigation is overloaded and duplicates itself across three systems

You currently run **three parallel navigation systems**:

- Header navigation lists each topic individually + "Scholars" + "Daily Dhikr" + "About," plus a search affordance ("Ctrl K").
- Left sidebar (on articles) lists all Topics + all Common Questions + "Scholar profiles" + "Daily Dhikr Guide."
- Footer repeats a "Topics" list and "Resources," but it does not match the header or homepage topic set.

This duplication causes two IA issues:

First, it increases cognitive load on every page: when reading "Madhabs," users still see the full cross-site FAQ inventory (including Music/Nasheeds questions, etc.).

Second, it creates inconsistency across global surfaces: the homepage positions eight "Core Topics," including "Music & Nasheeds," but the footer's "Topics" list omits that topic (and appears to label "The Scholarly Tradition" as "Scholars").

### Labeling conflicts around "Tradition," "Scholars," and the "Scholarly Tradition"

Your information scent around scholarly authority is fragmented:

- Header nav includes both "Tradition" and "Scholars" as separate top-level items.
- One of the "Core Topics" is titled "The Scholarly Tradition — Why Scholars Matter" and explicitly mentions "Profiles of major scholars…"
- Separately, there is a dedicated "Scholar profiles" directory at `/scholars`.

This creates a predictable confusion: "If I want scholars, do I click **Tradition**, **Scholars**, or the **Scholarly Tradition** topic?" The taxonomy isn't wrong conceptually, but the labels and groupings overlap heavily.

### URL patterns are mostly clean, but "Daily Dhikr" breaks the system

Your site is largely organized by content type:
- articles → `/topics/...`
- Q&A → `/faq/...`
- references → `/scholars/...`

But the practice guide uses a different branch: `/dhikr/daily`.

This may feel fine now, but it creates a future inconsistency: if you add "Wudu guide," "Prayer guide," etc., where do they live? A single off-branch path is usually where IA grows messy.

## User journeys and discoverability analysis

### Can a new user find answers for key intents?

For core "controversy" intents (mawlid, bid'a, tawassul, group dhikr, nasheeds), the site is currently **discoverable** because the homepage surfaces common questions directly.

A first-time visitor can take at least three viable paths:

- **Homepage → Common Questions** (fast, question-oriented).
- **Header → Topic pages** (concept-oriented).
- **Any article → left sidebar** (global inventory browsing).

So, for the specific intents you named, the answer is: **yes, they're findable**.

### Where discoverability will degrade as content grows

Your current discoverability is partly "powered by small scale." The same mechanisms become liabilities once the inventory expands:

- The FAQ index is a single list of 17 items; at 100 items, it becomes a scroll wall unless you add grouping, filtering, or a topic-based directory.
- The left sidebar currently lists all 17 FAQs everywhere; at 100 FAQs, you cannot keep this pattern without making every page feel like a directory.
- The header currently lists all topics as individual items; at 50 topics, that becomes impossible without a Topics hub or dropdown.

These are classic IA scaling problems: when the navigation is a hardcoded list rather than a browsable system, it collapses at growth.

## Recommended IA redesign

This section proposes a structure that preserves your strengths (clarity, authority, rigorous citations) while making the system scalable and less confusing.

### Proposed taxonomy table

| Parent bucket | Child grouping | Examples (mapped from live content) | Recommended label strategy |
|---|---|---|---|
| Foundations | Method of learning / authority | The Scholarly Tradition; Madhabs; Isnad | Use **"Method & Authority"** as the umbrella; keep "Scholars" *inside* this bucket rather than a separate top-level sibling to "Tradition." |
| Belief & Worship Practice | Remembrance / spirituality | Dhikr; Tasawwuf; Daily Dhikr Guide | Establish **"Practice & Spirituality"** and place Daily Dhikr as a guide within it. |
| Worship & Law Concepts | Innovation / celebrations | Bid'a; Mawlid | Keep these as distinct pillars; these are high-intent entry points. |
| Arts & Culture | Devotional sound | Music & Nasheeds; Duff FAQs | Make the label consistent everywhere ("Devotional Sound" or "Music & Nasheeds"). |
| Q&A (cross-cutting) | Browse by topic + by question type | All FAQ pages | Make Q&A browsable by (a) topic, (b) common intent ("Is X allowed?", "What is X?"). |
| Reference | Scholar profiles + glossary | `/scholars` + (recommended) glossary | "Reference" should contain "Scholars" and a new glossary/index of terms like "tawassul," "bid'a," "ijaza," etc. |

### Recommended sitemap and top navigation table

| Top navigation (recommended) | Destination | What it contains | Why this is better |
|---|---|---|---|
| Topics | `/topics` (new hub) | The 8 topic pages now; later 50+ topics, filterable by taxonomy | Prevents top-nav bloat while preserving quick access. |
| Questions | `/faq` (upgraded) | FAQ index with filters + "Browse by Topic" sections | Makes Q&A discoverable at 100+ pages. |
| Guides | `/guides` (new hub) | Daily Dhikr now; future practice guides | Gives "Daily Dhikr" a scalable home. |
| Scholars & References | `/reference` (new hub) | Scholar directory + (recommended) glossary + methodology link(s) | Removes overlap between "Tradition," "Scholars," and "Scholarly Tradition." |
| Start Here | `/start` (new onboarding) | reading paths + "how to use the site" | Solves progressive learning and "what do I read first?" |
| About | `/about` | methodology and scope | Keep trust layer visible. |
| Search | (modal or `/search`) | site search | Keep keyboard shortcut. |

### Recommended sitemap diagram

```
Home
├── Start Here (/start)
├── Topics Hub (/topics)
│   ├── /topics/bidah
│   ├── /topics/mawlid
│   ├── /topics/dhikr
│   ├── /topics/tasawwuf
│   ├── /topics/madhabs
│   ├── /topics/isnad
│   ├── /topics/music-nasheeds
│   └── /topics/scholarly-tradition
├── Questions Hub (/faq) — with topic grouping
│   ├── /faq/is-tawassul-shirk
│   ├── /faq/is-group-dhikr-permissible
│   └── ... (17 total)
├── Guides Hub (/guides)
│   └── Daily Dhikr Guide
├── Scholars & Reference (/reference)
│   ├── Scholars Directory (/scholars)
│   └── Glossary (new)
├── About (/about)
└── Search
```

### Top 5 priority fixes

1. **Create a real Topics hub page (`/topics`) and remove topic-by-topic items from the header.**
2. **Refactor the left sidebar to be contextual, not global-inventory.**
3. **Resolve the "Tradition / Scholarly Tradition / Scholars" collision.**
4. **Fix global navigation consistency—especially the footer topics list.**
5. **Differentiate FAQ vs Topic pages with a clear contract.**

## Final scores and verdict

**Information Architecture (out of 10): 6.5**
**Discoverability (out of 10): 7.0**

**Blunt verdict:** Strong foundation and clear intent, but the current navigation + taxonomy will become **structurally messy at scale**, largely due to content-type blur (Topics vs FAQs), label collisions (Tradition/Scholars), and global-inventory sidebars. The site should be re-architected now—before you expand beyond the current 8 topics / 17 FAQs—so growth happens within a system rather than against one.
