"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SearchDialog from "@/components/search/SearchDialog";

const topics = [
  { label: "Bid'a", href: "/topics/bidah" },
  { label: "Mawlid", href: "/topics/mawlid" },
  { label: "Dhikr", href: "/topics/dhikr" },
  { label: "Tasawwuf", href: "/topics/tasawwuf" },
  { label: "Madhabs", href: "/topics/madhabs" },
  { label: "Isnad", href: "/topics/isnad" },
  { label: "Scholars", href: "/topics/scholarly-tradition" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border-default)", background: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--text-primary)" }}
            >
              Sunnah Clarity
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="nav-link-hover px-3 py-2 text-sm font-medium rounded-md no-underline"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                {topic.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="ml-2 px-3 py-2 text-sm font-medium rounded-md transition-colors no-underline"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <SearchDialog />
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t" style={{ borderColor: "var(--border-default)" }}>
            <div className="flex flex-col gap-1 pt-2">
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="px-3 py-2 text-sm font-medium rounded-md no-underline"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {topic.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium rounded-md no-underline"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
