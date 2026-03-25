"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topics = [
  { label: "Bid'a", href: "/topics/bidah" },
  { label: "Mawlid", href: "/topics/mawlid" },
  { label: "Dhikr", href: "/topics/dhikr" },
  { label: "Tasawwuf", href: "/topics/tasawwuf" },
  { label: "Madhabs", href: "/topics/madhabs" },
  { label: "Music & Nasheeds", href: "/topics/music-nasheeds" },
  { label: "Isnad", href: "/topics/isnad" },
  { label: "Tradition", href: "/topics/scholarly-tradition" },
];

const faqs = [
  { label: "Is Mawlid haram?", href: "/faq/is-mawlid-haram" },
  { label: "Is Sufism allowed?", href: "/faq/is-sufism-allowed" },
  { label: "Do I need a madhab?", href: "/faq/do-i-need-a-madhab" },
  { label: "Is group dhikr permissible?", href: "/faq/is-group-dhikr-permissible" },
  { label: "What is bid'a?", href: "/faq/what-is-bidah" },
  { label: "Is tawassul shirk?", href: "/faq/is-tawassul-shirk" },
  { label: "Why do scholars differ?", href: "/faq/why-do-scholars-differ" },
  { label: "What is ihsan?", href: "/faq/what-is-ihsan" },
  { label: "Is taqlid allowed?", href: "/faq/is-taqlid-allowed" },
  { label: "Can you visit graves?", href: "/faq/can-you-visit-graves" },
  { label: "Is salawat a bid'a?", href: "/faq/is-salawat-bidah" },
  { label: "Are nasheeds allowed?", href: "/faq/are-nasheeds-allowed" },
  { label: "Are instruments haram?", href: "/faq/are-instruments-haram" },
  { label: "What is the duff?", href: "/faq/what-is-the-duff" },
  { label: "Can I say Ya Muhammad?", href: "/faq/can-i-say-ya-muhammad" },
  { label: "What is hadra?", href: "/faq/what-is-hadra" },
  { label: "Did Ibn Mas'ud ban dhikr?", href: "/faq/did-ibn-masud-prohibit-group-dhikr" },
];

export default function Sidebar() {
  const pathname = usePathname();

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

      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Common Questions
        </p>
        <ul className="space-y-1 list-none m-0 p-0">
          {faqs.map((faq) => {
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
      </div>

      <div className="space-y-2">
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
