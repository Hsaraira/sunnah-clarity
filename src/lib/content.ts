import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { VALID_TOPIC_SLUGS } from "@/lib/navigation";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface TopicFrontmatter {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
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
  featured?: boolean;
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

// --- Validation ---

const validationErrors: string[] = [];

function validateTopicFrontmatter(fm: TopicFrontmatter, filename: string): void {
  const required: (keyof TopicFrontmatter)[] = ["slug", "title", "subtitle", "description", "status"];
  for (const field of required) {
    if (!fm[field]) {
      validationErrors.push(`[topics/${filename}] Missing required field: ${field}`);
    }
  }
}

function validateFAQFrontmatter(fm: FAQFrontmatter, filename: string): void {
  const required: (keyof FAQFrontmatter)[] = ["slug", "title", "question", "topic", "status"];
  for (const field of required) {
    if (!fm[field]) {
      validationErrors.push(`[faq/${filename}] Missing required field: ${field}`);
    }
  }
  if (fm.topic && !VALID_TOPIC_SLUGS.has(fm.topic)) {
    validationErrors.push(
      `[faq/${filename}] Invalid topic "${fm.topic}". Valid slugs: ${[...VALID_TOPIC_SLUGS].join(", ")}`
    );
  }
}

function validateScholarFrontmatter(fm: ScholarFrontmatter, filename: string): void {
  const required: (keyof ScholarFrontmatter)[] = ["slug", "title", "subtitle", "description", "status"];
  for (const field of required) {
    if (!fm[field]) {
      validationErrors.push(`[scholars/${filename}] Missing required field: ${field}`);
    }
  }
}

function flushValidationErrors(): void {
  if (validationErrors.length > 0) {
    const msg = `\n❌ Frontmatter validation failed:\n${validationErrors.map((e) => `  • ${e}`).join("\n")}\n`;
    console.error(msg);
    if (process.env.NODE_ENV === "production") {
      throw new Error(msg);
    }
  }
}

// --- File loading ---

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

// --- Topics ---

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
  const result = parseContentFile<TopicFrontmatter>("topics", match);
  validateTopicFrontmatter(result.frontmatter, match);
  return result;
}

export function getAllTopics(): ContentMeta<TopicFrontmatter>[] {
  const topics = getContentFiles("topics")
    .map((f) => {
      const result = parseContentFile<TopicFrontmatter>("topics", f);
      validateTopicFrontmatter(result.frontmatter, f);
      return result;
    })
    .filter((t) => t.frontmatter.status === "published")
    .sort((a, b) => (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0));
  flushValidationErrors();
  return topics;
}

// --- FAQs ---

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
  const result = parseContentFile<FAQFrontmatter>("faq", match);
  validateFAQFrontmatter(result.frontmatter, match);
  return result;
}

export function getAllFAQs(): ContentMeta<FAQFrontmatter>[] {
  const faqs = getContentFiles("faq")
    .map((f) => {
      const result = parseContentFile<FAQFrontmatter>("faq", f);
      validateFAQFrontmatter(result.frontmatter, f);
      return result;
    })
    .filter((faq) => faq.frontmatter.status === "published");
  flushValidationErrors();
  return faqs;
}

export function getFeaturedFAQs(): ContentMeta<FAQFrontmatter>[] {
  return getAllFAQs().filter((faq) => faq.frontmatter.featured === true);
}

export function getFAQsByTopic(topicSlug: string): ContentMeta<FAQFrontmatter>[] {
  return getAllFAQs().filter(
    (faq) => faq.frontmatter.topic === topicSlug
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

export function getSidebarFAQs(topicSlug: string): { label: string; href: string }[] {
  return getFAQsByTopic(topicSlug).map((faq) => ({
    label: faq.frontmatter.question,
    href: `/faq/${faq.frontmatter.slug}`,
  }));
}

// --- Scholars ---

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
  const result = parseContentFile<ScholarFrontmatter>("scholars", match);
  validateScholarFrontmatter(result.frontmatter, match);
  return result;
}

export function getAllScholars(): ContentMeta<ScholarFrontmatter>[] {
  const scholars = getContentFiles("scholars")
    .map((f) => {
      const result = parseContentFile<ScholarFrontmatter>("scholars", f);
      validateScholarFrontmatter(result.frontmatter, f);
      return result;
    })
    .filter((s) => s.frontmatter.status === "published")
    .sort((a, b) =>
      a.frontmatter.title.localeCompare(b.frontmatter.title, "en")
    );
  flushValidationErrors();
  return scholars;
}
