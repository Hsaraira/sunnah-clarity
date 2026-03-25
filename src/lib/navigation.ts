/**
 * Topic Registry — single source of truth for all topic identity.
 *
 * Every surface that needs topic data (header, footer, sidebar, homepage,
 * FAQ index, page routes) derives from this registry. No parallel arrays.
 *
 * Canonical key: `slug`. All lookups use slug.
 */

export interface TopicEntry {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  /** The value used in FAQ frontmatter `topic` field to group FAQs under this topic */
  faqKey: string;
}

export const TOPIC_REGISTRY: TopicEntry[] = [
  {
    slug: "bidah",
    label: "Bid'a",
    title: "Bid'a",
    subtitle: "Innovation in Islam",
    description: "What bid'a actually means, the distinction between praiseworthy and blameworthy innovation, and why the blanket \"everything is bid'a\" narrative misrepresents the scholarly tradition.",
    faqKey: "Bid'a",
  },
  {
    slug: "mawlid",
    label: "Mawlid",
    title: "Mawlid",
    subtitle: "Celebrating the Prophet \uFDFA",
    description: "The permissibility of celebrating the Prophet's birth, with evidence from all four schools of thought and the classical scholarly consensus.",
    faqKey: "Mawlid",
  },
  {
    slug: "dhikr",
    label: "Dhikr",
    title: "Dhikr",
    subtitle: "Remembrance of Allah",
    description: "The permissibility and virtue of individual and collective remembrance of Allah, including the evidence for group dhikr gatherings.",
    faqKey: "Dhikr",
  },
  {
    slug: "tasawwuf",
    label: "Tasawwuf",
    title: "Tasawwuf",
    subtitle: "The Science of Spiritual Purification",
    description: "What Sufism actually is within orthodox Sunni Islam — the science of ihsan, purification of the heart, and drawing closer to Allah.",
    faqKey: "Tasawwuf",
  },
  {
    slug: "madhabs",
    label: "Madhabs",
    title: "Madhabs",
    subtitle: "Schools of Islamic Law",
    description: "Why following a madhab is the traditional and scholarly approach, what each school represents, and why direct interpretation without methodology is problematic.",
    faqKey: "Madhabs",
  },
  {
    slug: "music-nasheeds",
    label: "Music & Nasheeds",
    title: "Music & Nasheeds",
    subtitle: "What Is Permitted in Devotional Sound",
    description: "The traditional ruling on instruments, the duff exception, nasheeds, and the conditions scholars attach — with evidence from the four schools.",
    faqKey: "Music",
  },
  {
    slug: "isnad",
    label: "Chains of Narration",
    title: "Chains of Narration",
    subtitle: "Isnad & Silsila",
    description: "How Islamic knowledge is transmitted through unbroken chains back to the Prophet \uFDFA, the concept of ijaza, and spiritual lineages.",
    faqKey: "Isnad",
  },
  {
    slug: "scholarly-tradition",
    label: "Scholarly Tradition",
    title: "The Scholarly Tradition",
    subtitle: "Why Scholars Matter",
    description: "Profiles of major scholars, their contributions to Islamic sciences, and why the scholarly tradition is the backbone of authentic Islam.",
    faqKey: "Scholarly Tradition",
  },
];

// --- Derived lookups (no independent maintenance) ---

export function topicBySlug(slug: string): TopicEntry | undefined {
  return TOPIC_REGISTRY.find((t) => t.slug === slug);
}

export function topicByFaqKey(faqKey: string): TopicEntry | undefined {
  return TOPIC_REGISTRY.find((t) => t.faqKey === faqKey);
}

export function faqKeyToSlug(faqKey: string): string | undefined {
  return TOPIC_REGISTRY.find((t) => t.faqKey === faqKey)?.slug;
}

export function faqKeyToLabel(faqKey: string): string {
  return TOPIC_REGISTRY.find((t) => t.faqKey === faqKey)?.label ?? faqKey;
}

export function slugToFaqKey(slug: string): string | undefined {
  return TOPIC_REGISTRY.find((t) => t.slug === slug)?.faqKey;
}

/** Nav-compatible list: { label, href } for every topic */
export function topicNavItems(): { label: string; href: string }[] {
  return TOPIC_REGISTRY.map((t) => ({ label: t.label, href: `/topics/${t.slug}` }));
}

/** Ordered list of faqKeys that have FAQs, in registry order */
export function faqGroupOrder(): string[] {
  return TOPIC_REGISTRY.map((t) => t.faqKey);
}
