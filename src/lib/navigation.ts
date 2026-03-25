export interface TopicNavItem {
  label: string;
  slug: string;
  href: string;
}

export interface ResourceNavItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Single source of truth for topic navigation.
 * Every surface (header, sidebar, footer, homepage) imports from here.
 */
export const TOPICS: TopicNavItem[] = [
  { label: "Bid'a", slug: "bidah", href: "/topics/bidah" },
  { label: "Mawlid", slug: "mawlid", href: "/topics/mawlid" },
  { label: "Dhikr", slug: "dhikr", href: "/topics/dhikr" },
  { label: "Tasawwuf", slug: "tasawwuf", href: "/topics/tasawwuf" },
  { label: "Madhabs", slug: "madhabs", href: "/topics/madhabs" },
  { label: "Music & Nasheeds", slug: "music-nasheeds", href: "/topics/music-nasheeds" },
  { label: "Chains of Narration", slug: "isnad", href: "/topics/isnad" },
  { label: "Scholarly Tradition", slug: "scholarly-tradition", href: "/topics/scholarly-tradition" },
];

export const RESOURCES: ResourceNavItem[] = [
  { label: "Questions", href: "/faq" },
  { label: "Scholars", href: "/scholars" },
  { label: "Daily Dhikr", href: "/dhikr/daily" },
  { label: "About", href: "/about" },
];

/**
 * Maps FAQ frontmatter `topic` values to topic slugs.
 * FAQ frontmatter uses short names ("Music"), topic slugs use full names ("music-nasheeds").
 */
export const FAQ_TOPIC_TO_SLUG: Record<string, string> = {
  "Bid'a": "bidah",
  "Mawlid": "mawlid",
  "Dhikr": "dhikr",
  "Tasawwuf": "tasawwuf",
  "Madhabs": "madhabs",
  "Music": "music-nasheeds",
};

/**
 * Maps FAQ frontmatter `topic` values to display labels.
 * Used for grouped FAQ index headings.
 */
export const FAQ_TOPIC_TO_LABEL: Record<string, string> = {
  "Bid'a": "Bid'a",
  "Mawlid": "Mawlid",
  "Dhikr": "Dhikr",
  "Tasawwuf": "Tasawwuf",
  "Madhabs": "Madhabs",
  "Music": "Music & Nasheeds",
};

export function getTopicBySlug(slug: string): TopicNavItem | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getTopicByFAQTopic(faqTopic: string): TopicNavItem | undefined {
  const slug = FAQ_TOPIC_TO_SLUG[faqTopic];
  if (!slug) return undefined;
  return TOPICS.find((t) => t.slug === slug);
}
