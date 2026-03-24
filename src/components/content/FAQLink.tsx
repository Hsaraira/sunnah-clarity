import Link from "next/link";

interface FAQLinkProps {
  question: string;
  href: string;
}

export default function FAQLink({ question, href }: FAQLinkProps) {
  return (
    <Link
      href={href}
      className="card-interactive flex items-center justify-between rounded-lg px-5 py-4 no-underline"
    >
      <span
        className="text-base font-medium"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        {question}
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="flex-shrink-0 ml-3"
        style={{ color: "var(--text-muted)" }}
        aria-hidden="true"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Link>
  );
}
