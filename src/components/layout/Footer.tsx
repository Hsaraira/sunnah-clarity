import Link from "next/link";
import { topicNavItems } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: "var(--border-default)", background: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Sunnah Clarity
            </h3>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Clear, accessible explanations of traditional Sunni Islamic
              concepts for everyday Muslims. No financial motives — purely
              for public benefit.
            </p>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Topics
            </h4>
            <ul className="space-y-2">
              {topicNavItems().map((topic) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-sm no-underline transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Common Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/scholars"
                  className="text-sm no-underline transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Scholars
                </Link>
              </li>
              <li>
                <Link
                  href="/dhikr/daily"
                  className="text-sm no-underline transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Daily Dhikr
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm no-underline transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  About & Methodology
                </Link>
              </li>
              <li>
                <a
                  href="https://seekersguidance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  SeekersGuidance ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border-default)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Content on this site represents traditional Sunni scholarly positions.
            For detailed rulings, consult qualified scholars.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Scholarly references courtesy of{" "}
            <a
              href="https://seekersguidance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--text-muted)" }}
            >
              SeekersGuidance
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
