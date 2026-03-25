"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOPICS } from "@/lib/navigation";

interface SidebarFAQ {
  label: string;
  href: string;
}

interface SidebarProps {
  contentType?: "topic" | "faq" | "scholar";
  currentTopic?: string;
}

const FAQ_DATA: Record<string, SidebarFAQ[]> = {
  "Bid'a": [
    { label: "What is bid'a?", href: "/faq/what-is-bidah" },
    { label: "Is tawassul shirk?", href: "/faq/is-tawassul-shirk" },
    { label: "Can you visit graves?", href: "/faq/can-you-visit-graves" },
    { label: "Can I say Ya Muhammad?", href: "/faq/can-i-say-ya-muhammad" },
  ],
  Mawlid: [
    { label: "Is Mawlid haram?", href: "/faq/is-mawlid-haram" },
  ],
  Dhikr: [
    { label: "Is group dhikr permissible?", href: "/faq/is-group-dhikr-permissible" },
    { label: "Is salawat a bid'a?", href: "/faq/is-salawat-bidah" },
    { label: "What is hadra?", href: "/faq/what-is-hadra" },
    { label: "Did Ibn Mas'ud ban dhikr?", href: "/faq/did-ibn-masud-prohibit-group-dhikr" },
  ],
  Tasawwuf: [
    { label: "Is Sufism allowed?", href: "/faq/is-sufism-allowed" },
    { label: "What is ihsan?", href: "/faq/what-is-ihsan" },
  ],
  Madhabs: [
    { label: "Do I need a madhab?", href: "/faq/do-i-need-a-madhab" },
    { label: "Is taqlid allowed?", href: "/faq/is-taqlid-allowed" },
    { label: "Why do scholars differ?", href: "/faq/why-do-scholars-differ" },
  ],
  Music: [
    { label: "Are nasheeds allowed?", href: "/faq/are-nasheeds-allowed" },
    { label: "Are instruments haram?", href: "/faq/are-instruments-haram" },
    { label: "What is the duff?", href: "/faq/what-is-the-duff" },
  ],
};

const SLUG_TO_FAQ_TOPIC: Record<string, string> = {
  bidah: "Bid'a",
  mawlid: "Mawlid",
  dhikr: "Dhikr",
  tasawwuf: "Tasawwuf",
  madhabs: "Madhabs",
  "music-nasheeds": "Music",
};

export default function Sidebar({ contentType = "topic", currentTopic }: SidebarProps) {
  const pathname = usePathname();

  let faqTopicKey = currentTopic ?? "";
  if (contentType === "topic" && currentTopic) {
    faqTopicKey = SLUG_TO_FAQ_TOPIC[currentTopic] ?? currentTopic;
  }
  const relatedFAQs = faqTopicKey ? (FAQ_DATA[faqTopicKey] ?? []) : [];

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
          {TOPICS.map((topic) => {
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
            View all questions →
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
