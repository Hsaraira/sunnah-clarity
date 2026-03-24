import Link from "next/link";

interface TopicCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export default function TopicCard({
  title,
  subtitle,
  description,
  href,
}: TopicCardProps) {
  return (
    <Link
      href={href}
      className="card-interactive group block p-6 no-underline"
      style={{ borderLeft: "3px solid var(--color-primary)" }}
    >
      <h3
        className="text-lg font-bold mb-1"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-xs mb-3"
        style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {subtitle}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        {description}
      </p>
    </Link>
  );
}
