/**
 * Topic Registry — single source of truth for all topic identity.
 *
 * Canonical key: `slug`. Used in:
 * - URL paths: /topics/{slug}
 * - FAQ frontmatter: topic: "{slug}"
 * - All navigation lookups
 *
 * No secondary keys. No translation layers.
 */

export interface TopicEntry {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

export const TOPIC_REGISTRY: TopicEntry[] = [
  {
    slug: "bidah",
    label: "Bid'a",
    title: "Bid'a",
    subtitle: "Innovation in Islam",
    description: "What bid'a actually means, the distinction between praiseworthy and blameworthy innovation, and why the blanket \"everything is bid'a\" narrative misrepresents the scholarly tradition.",
  },
  {
    slug: "mawlid",
    label: "Mawlid",
    title: "Mawlid",
    subtitle: "Celebrating the Prophet \uFDFA",
    description: "The permissibility of celebrating the Prophet's birth, with evidence from all four schools of thought and the classical scholarly consensus.",
  },
  {
    slug: "dhikr",
    label: "Dhikr",
    title: "Dhikr",
    subtitle: "Remembrance of Allah",
    description: "The permissibility and virtue of individual and collective remembrance of Allah, including the evidence for group dhikr gatherings.",
  },
  {
    slug: "tasawwuf",
    label: "Tasawwuf",
    title: "Tasawwuf",
    subtitle: "The Science of Spiritual Purification",
    description: "What Sufism actually is within orthodox Sunni Islam — the science of ihsan, purification of the heart, and drawing closer to Allah.",
  },
  {
    slug: "madhabs",
    label: "Madhabs",
    title: "Madhabs",
    subtitle: "Schools of Islamic Law",
    description: "Why following a madhab is the traditional and scholarly approach, what each school represents, and why direct interpretation without methodology is problematic.",
  },
  {
    slug: "music-nasheeds",
    label: "Music & Nasheeds",
    title: "Music & Nasheeds",
    subtitle: "What Is Permitted in Devotional Sound",
    description: "The traditional ruling on instruments, the duff exception, nasheeds, and the conditions scholars attach — with evidence from the four schools.",
  },
  {
    slug: "isnad",
    label: "Chains of Narration",
    title: "Chains of Narration",
    subtitle: "Isnad & Silsila",
    description: "How Islamic knowledge is transmitted through unbroken chains back to the Prophet \uFDFA, the concept of ijaza, and spiritual lineages.",
  },
  {
    slug: "scholarly-tradition",
    label: "Scholarly Tradition",
    title: "The Scholarly Tradition",
    subtitle: "Why Scholars Matter",
    description: "Profiles of major scholars, their contributions to Islamic sciences, and why the scholarly tradition is the backbone of authentic Islam.",
  },
];

/** All valid topic slugs — used for frontmatter validation */
export const VALID_TOPIC_SLUGS: ReadonlySet<string> = new Set(
  TOPIC_REGISTRY.map((t) => t.slug)
);

export function topicBySlug(slug: string): TopicEntry | undefined {
  return TOPIC_REGISTRY.find((t) => t.slug === slug);
}

export function topicNavItems(): { label: string; href: string }[] {
  return TOPIC_REGISTRY.map((t) => ({ label: t.label, href: `/topics/${t.slug}` }));
}

export function topicSlugsInOrder(): string[] {
  return TOPIC_REGISTRY.map((t) => t.slug);
}
