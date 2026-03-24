import Link from "next/link";

interface FAQLinkProps {
  question: string;
  href: string;
}

export default function FAQLink({ question, href }: FAQLinkProps) {
  return (
    <Link
      href={href}
      className="block py-3 no-underline border-b"
      style={{ borderColor: "var(--border-default)" }}
    >
      <span
        className="text-base"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--color-primary)",
        }}
      >
        {question}
      </span>
    </Link>
  );
}
