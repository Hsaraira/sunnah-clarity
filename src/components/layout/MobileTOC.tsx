"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function MobileTOC() {
  const [open, setOpen] = useState(false);
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    const article = document.querySelector(".article-content");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: parseInt(el.tagName[1]),
    }));
    setHeadings(items);
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full transition-transform active:scale-95"
        style={{
          background: "var(--color-primary)",
          color: "#fff",
          boxShadow: "var(--shadow-lg)",
        }}
        aria-label="Table of contents"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0, 0, 0, 0.4)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-2xl px-6 py-6"
            style={{
              background: "var(--bg-primary)",
              boxShadow: "var(--shadow-lg)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                On this page
              </p>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded"
                style={{ color: "var(--text-muted)" }}
                aria-label="Close table of contents"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1 list-none m-0 p-0">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: heading.level === 3 ? "1rem" : "0" }}
                >
                  <a
                    href={`#${heading.id}`}
                    className="block py-2 text-sm no-underline"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      color: "var(--text-secondary)",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
