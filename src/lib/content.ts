import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface TopicFrontmatter {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  icon: string;
  primarySources: string[];
  author: string;
  reviewedBy: string;
  reviewDate: string;
  status: "draft" | "review" | "published";
  order: number;
}

export interface FAQFrontmatter {
  title: string;
  slug: string;
  question: string;
  topic: string;
  primarySources: string[];
  author: string;
  reviewedBy: string;
  reviewDate: string;
  status: "draft" | "review" | "published";
}

export interface ScholarFrontmatter {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  dates?: string;
  madhhab?: string;
  primarySources: string[];
  author: string;
  reviewedBy: string;
  reviewDate: string;
  status: "draft" | "review" | "published";
}

export interface ContentMeta<T> {
  frontmatter: T;
  content: string;
  readingTime: number;
}

function getContentFiles(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function parseContentFile<T>(subdir: string, filename: string): ContentMeta<T> {
  const filePath = path.join(CONTENT_DIR, subdir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    frontmatter: data as T,
    content,
    readingTime: Math.ceil(stats.minutes),
  };
}

export function getAllTopicSlugs(): string[] {
  return getContentFiles("topics").map((f) =>
    f.replace(/\.mdx?$/, "")
  );
}

export function getTopicBySlug(slug: string): ContentMeta<TopicFrontmatter> | null {
  const files = getContentFiles("topics");
  const match = files.find(
    (f) => f.replace(/\.mdx?$/, "") === slug
  );
  if (!match) return null;
  return parseContentFile<TopicFrontmatter>("topics", match);
}

export function getAllTopics(): ContentMeta<TopicFrontmatter>[] {
  return getContentFiles("topics")
    .map((f) => parseContentFile<TopicFrontmatter>("topics", f))
    .filter((t) => t.frontmatter.status === "published")
    .sort((a, b) => (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0));
}

export function getAllFAQSlugs(): string[] {
  return getContentFiles("faq").map((f) =>
    f.replace(/\.mdx?$/, "")
  );
}

export function getFAQBySlug(slug: string): ContentMeta<FAQFrontmatter> | null {
  const files = getContentFiles("faq");
  const match = files.find(
    (f) => f.replace(/\.mdx?$/, "") === slug
  );
  if (!match) return null;
  return parseContentFile<FAQFrontmatter>("faq", match);
}

export function getAllFAQs(): ContentMeta<FAQFrontmatter>[] {
  return getContentFiles("faq")
    .map((f) => parseContentFile<FAQFrontmatter>("faq", f))
    .filter((faq) => faq.frontmatter.status === "published");
}

export function getFAQsByTopic(topic: string): ContentMeta<FAQFrontmatter>[] {
  return getAllFAQs().filter(
    (faq) => faq.frontmatter.topic === topic
  );
}

export function getFAQsGroupedByTopic(): Record<string, ContentMeta<FAQFrontmatter>[]> {
  const faqs = getAllFAQs();
  const grouped: Record<string, ContentMeta<FAQFrontmatter>[]> = {};
  for (const faq of faqs) {
    const topic = faq.frontmatter.topic;
    if (!grouped[topic]) grouped[topic] = [];
    grouped[topic].push(faq);
  }
  return grouped;
}

/** Returns sidebar-compatible FAQ links for a given FAQ frontmatter topic key */
export function getSidebarFAQs(faqKey: string): { label: string; href: string }[] {
  return getFAQsByTopic(faqKey).map((faq) => ({
    label: faq.frontmatter.question,
    href: `/faq/${faq.frontmatter.slug}`,
  }));
}

export function getAllScholarSlugs(): string[] {
  return getContentFiles("scholars").map((f) =>
    f.replace(/\.mdx?$/, "")
  );
}

export function getScholarBySlug(
  slug: string
): ContentMeta<ScholarFrontmatter> | null {
  const files = getContentFiles("scholars");
  const match = files.find(
    (f) => f.replace(/\.mdx?$/, "") === slug
  );
  if (!match) return null;
  return parseContentFile<ScholarFrontmatter>("scholars", match);
}

export function getAllScholars(): ContentMeta<ScholarFrontmatter>[] {
  return getContentFiles("scholars")
    .map((f) => parseContentFile<ScholarFrontmatter>("scholars", f))
    .filter((s) => s.frontmatter.status === "published")
    .sort((a, b) =>
      a.frontmatter.title.localeCompare(b.frontmatter.title, "en")
    );
}
