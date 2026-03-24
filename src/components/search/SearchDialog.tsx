"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SearchResult {
  url: string;
  meta: { title: string };
  excerpt: string;
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<unknown>(null);

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) return pagefindRef.current;
    try {
      // Pagefind generates its JS bundle at /pagefind/pagefind.js during build.
      // We load it dynamically at runtime via a new Function to avoid
      // TypeScript/bundler trying to resolve it at compile time.
      const importPath = "/pagefind/pagefind.js";
      const module = await new Function("path", "return import(path)")(importPath);
      pagefindRef.current = module;
      return module;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pf = (await loadPagefind()) as any;
        if (!pf) {
          setResults([]);
          return;
        }
        const search = await pf.search(query);
        const items = await Promise.all(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          search.results.slice(0, 8).map((r: any) => r.data())
        );
        setResults(items);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query, loadPagefind]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors"
        style={{
          border: "1px solid var(--border-default)",
          color: "var(--text-muted)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
        aria-label="Search"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd
          className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            color: "var(--text-muted)",
          }}
        >
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="fixed inset-0"
        style={{ background: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(4px)" }}
      />
      <div
        className="relative w-full max-w-lg mx-4 rounded-xl overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          border: "1px solid var(--border-default)",
          boxShadow: "var(--shadow-lg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border-default)" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--text-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, questions, scholars..."
            className="flex-1 bg-transparent outline-none text-base"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          />
          <button
            onClick={() => setOpen(false)}
            className="px-2 py-1 rounded text-xs"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
              color: "var(--text-muted)",
            }}
          >
            Esc
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {loading && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              Searching...
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {!loading && results.length > 0 && (
            <ul className="py-2">
              {results.map((result, i) => (
                <li key={i}>
                  <a
                    href={result.url}
                    className="block px-4 py-3 no-underline transition-colors"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--bg-surface)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {result.meta.title}
                    </p>
                    <p
                      className="text-xs mt-1 line-clamp-2"
                      style={{ color: "var(--text-secondary)" }}
                      dangerouslySetInnerHTML={{ __html: result.excerpt }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!query && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              Type to search across all topics and questions
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
