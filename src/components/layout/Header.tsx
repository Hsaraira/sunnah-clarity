"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SearchDialog from "@/components/search/SearchDialog";

const navItems = [
  { label: "Topics", href: "/topics" },
  { label: "Questions", href: "/faq" },
  { label: "Scholars", href: "/scholars" },
  { label: "Daily Dhikr", href: "/dhikr/daily" },
  { label: "About", href: "/about" },
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-hover px-3 py-2 text-sm font-medium rounded-md no-underline`}
                style={{
                  color: item.label === "Daily Dhikr"
                    ? "var(--color-secondary)"
                    : item.label === "About"
                      ? "var(--text-muted)"
                      : "var(--text-secondary)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {item.label}
              </Link>
            ))}
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md no-underline"
                  style={{
                    color: item.label === "Daily Dhikr"
                      ? "var(--color-secondary)"
                      : "var(--text-secondary)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
