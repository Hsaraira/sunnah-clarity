# IA Refactor Worklog

> Cursor appends decisions and progress here as it works through the refactor.

---

## Phase 1 Implementation — Completed 2026-03-25

### What changed

1. **Created `src/lib/navigation.ts`** — single source of truth for topic labels, slugs, hrefs, and FAQ-to-topic mappings. All nav surfaces now import from this file.

2. **Fixed Footer** — now imports TOPICS from shared config. All 8 topics listed with correct labels. "Scholars" now correctly links to `/scholars` (was pointing to `/topics/scholarly-tradition`). Added missing "Music & Nasheeds." Added "Daily Dhikr" and "Scholars" to Resources column.

3. **Simplified Header** — reduced from 11 nav items to 5: Topics (`/topics`), Questions (`/faq`), Scholars (`/scholars`), Daily Dhikr (`/dhikr/daily`), About (`/about`). Individual topic links removed — discoverable via Topics hub.

4. **Created `/topics` hub page** — new `src/app/topics/page.tsx` using `getAllTopics()`. Lists all 8 topics with title, description, and reading time. This is where the header "Topics" link goes.

5. **Made Sidebar contextual** — `ThreeColumnLayout` now accepts `contentType` and `currentTopic` props. Sidebar shows:
   - On topic pages: all topics + only FAQs for that topic + "View all questions →"
   - On FAQ pages: all topics + only FAQs in same topic + "View all questions →"
   - On scholar pages: all topics + "All scholars" link
   - Always: Scholar profiles link + Daily Dhikr link

6. **Grouped FAQ index by topic** — `/faq` now renders FAQs in sections: Bid'a, Mawlid, Dhikr, Tasawwuf, Madhabs, Music & Nasheeds. Each section has a "Read topic →" link to the parent topic page.

7. **Added helpers to `content.ts`** — `getFAQsByTopic()` and `getFAQsGroupedByTopic()`.

8. **Updated sitemap** — added `/topics` hub page.

### Why it changed

- Four parallel hardcoded nav arrays were the root cause of every label inconsistency and missing-item bug
- Footer had the worst bug: "Scholars" label pointed to wrong URL
- Header was unscalable at 11 items; 5 hub-level links scales indefinitely
- Global sidebar dump of 17 FAQs on every page was irrelevant noise
- FAQ flat list didn't use the `topic` field that already existed in frontmatter

### What files changed

| File | Action |
|---|---|
| `src/lib/navigation.ts` | Created — shared nav config |
| `src/lib/content.ts` | Modified — added `getFAQsByTopic()`, `getFAQsGroupedByTopic()` |
| `src/components/layout/Footer.tsx` | Rewritten — imports from shared config, all bugs fixed |
| `src/components/layout/Header.tsx` | Rewritten — 5 hub links instead of 11 |
| `src/components/layout/ThreeColumnLayout.tsx` | Modified — accepts `contentType` and `currentTopic` props |
| `src/components/layout/Sidebar.tsx` | Rewritten — contextual based on content type and topic |
| `src/app/topics/page.tsx` | Created — topics hub page |
| `src/app/faq/page.tsx` | Rewritten — grouped by topic with section headings |
| `src/app/topics/[slug]/page.tsx` | Modified — passes `contentType="topic"` and `currentTopic={slug}` |
| `src/app/faq/[slug]/page.tsx` | Modified — passes `contentType="faq"` and `currentTopic={topic}` |
| `src/app/scholars/[slug]/page.tsx` | Modified — passes `contentType="scholar"` |
| `src/app/sitemap.ts` | Modified — added `/topics` hub |

### What still remains

- `/start` page (out of scope for now)
- `/guides` hub (out of scope for now)
- `/reference` hub (out of scope for now)
- Homepage topic/FAQ arrays still inline (labels match now; full data needed for cards)
- `ProgressiveDisclosure` component exists but is not used on any live page
- No URL migrations needed (all existing URLs preserved)
