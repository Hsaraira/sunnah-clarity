import type { MetadataRoute } from "next";
import {
  getAllTopicSlugs,
  getAllFAQSlugs,
  getAllScholarSlugs,
} from "@/lib/content";

export const dynamic = "force-static";

const BASE_URL = "https://sunnahclarity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const topicSlugs = getAllTopicSlugs();
  const faqSlugs = getAllFAQSlugs();
  const scholarSlugs = getAllScholarSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/topics`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/scholars`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/dhikr/daily`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const topicPages: MetadataRoute.Sitemap = topicSlugs.map((slug) => ({
    url: `${BASE_URL}/topics/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const faqPages: MetadataRoute.Sitemap = faqSlugs.map((slug) => ({
    url: `${BASE_URL}/faq/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const scholarPages: MetadataRoute.Sitemap = scholarSlugs.map((slug) => ({
    url: `${BASE_URL}/scholars/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...topicPages, ...faqPages, ...scholarPages];
}
