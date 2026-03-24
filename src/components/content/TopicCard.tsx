import Link from "next/link";

interface TopicCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: string;
}

export default function TopicCard({
  title,
  subtitle,
  description,
  href,
  icon,
}: TopicCardProps) {
  return (
    <Link
      href={href}
      className="card-interactive group block rounded-xl p-6 no-underline"
    >
      <span className="text-2xl mb-3 block" aria-hidden="true">
        {icon}
      </span>
      <h3
        className="text-xl font-bold mb-1"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-xs font-medium uppercase tracking-wider mb-3"
        style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {subtitle}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </Link>
  );
}
