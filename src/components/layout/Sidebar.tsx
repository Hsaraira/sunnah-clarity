"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topicNavItems } from "@/lib/navigation";

interface SidebarFAQItem {
  label: string;
  href: string;
}

interface SidebarProps {
  contentType?: "topic" | "faq" | "scholar";
  currentTopicSlug?: string;
  relatedFAQs?: SidebarFAQItem[];
}

export default function Sidebar({
  contentType = "topic",
  currentTopicSlug,
  relatedFAQs = [],
}: SidebarProps) {
  const pathname = usePathname();
  const topics = topicNavItems();

  return (
    <aside className="sticky top-24 space-y-8">
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Topics
        </p>
        <ul className="space-y-1 list-none m-0 p-0">
          {topics.map((topic) => {
            const isActive = pathname === topic.href;
            return (
              <li key={topic.href}>
                <Link
                  href={topic.href}
                  className="block py-1.5 px-3 text-sm rounded-md no-underline transition-colors"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    color: isActive ? "var(--color-primary)" : "var(--text-secondary)",
                    background: isActive ? "var(--bg-surface)" : "transparent",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {topic.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {relatedFAQs.length > 0 && (
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            {contentType === "faq" ? "Related Questions" : "Questions on This Topic"}
          </p>
          <ul className="space-y-1 list-none m-0 p-0">
            {relatedFAQs.map((faq) => {
              const isActive = pathname === faq.href;
              return (
                <li key={faq.href}>
                  <Link
                    href={faq.href}
                    className="block py-1.5 px-3 text-sm rounded-md no-underline transition-colors"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: isActive ? "var(--color-primary)" : "var(--text-secondary)",
                      background: isActive ? "var(--bg-surface)" : "transparent",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {faq.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/faq"
            className="block mt-2 px-3 text-xs no-underline"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            View all questions â†’
          </Link>
        </div>
      )}

      {contentType === "scholar" && (
        <div>
          <Link
            href="/scholars"
            className="block py-2 px-3 text-sm font-medium rounded-md no-underline transition-colors"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: pathname.startsWith("/scholars")
                ? "var(--color-primary)"
                : "var(--text-secondary)",
              background: pathname.startsWith("/scholars")
                ? "var(--bg-surface)"
                : "transparent",
              fontWeight: pathname.startsWith("/scholars") ? 600 : 500,
            }}
          >
            All scholars
          </Link>
        </div>
      )}

      <div className="space-y-2">
        {contentType !== "scholar" && (
          <Link
            href="/scholars"
            className="block py-2 px-3 text-sm font-medium rounded-md no-underline transition-colors"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: pathname === "/scholars" || pathname.startsWith("/scholars/")
                ? "var(--color-primary)"
                : "var(--text-secondary)",
              background:
                pathname === "/scholars" || pathname.startsWith("/scholars/")
                  ? "var(--bg-surface)"
                  : "transparent",
              fontWeight: pathname === "/scholars" || pathname.startsWith("/scholars/") ? 600 : 500,
            }}
          >
            Scholar profiles
          </Link>
        )}
        <Link
          href="/dhikr/daily"
          className="block py-2 px-3 text-sm font-medium rounded-md no-underline transition-colors"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            color: pathname === "/dhikr/daily" ? "#fff" : "var(--color-secondary)",
            background: pathname === "/dhikr/daily" ? "var(--color-secondary)" : "color-mix(in srgb, var(--color-secondary) 8%, transparent)",
            fontWeight: 600,
          }}
        >
          Daily Dhikr Guide
        </Link>
      </div>
    </aside>
  );
}
