import type { MetadataRoute } from "next";
import { getAllTopicSlugs, getAllFAQSlugs } from "@/lib/content";

export const dynamic = "force-static";

const BASE_URL = "https://sunnahclarity.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const topicSlugs = getAllTopicSlugs();
  const faqSlugs = getAllFAQSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
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

  return [...staticPages, ...topicPages, ...faqPages];
}
