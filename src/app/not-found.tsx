import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20">
        <GeometricPattern opacity={0.04} />
        <div className="relative text-center px-4">
          <p
            className="text-8xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--border-strong)",
            }}
          >
            404
          </p>
          <h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Page Not Found
          </h1>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              color: "var(--text-secondary)",
            }}
          >
            The page you&rsquo;re looking for doesn&rsquo;t exist.
            It may have been moved, or the URL might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Go Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline"
              style={{
                border: "1px solid var(--border-strong)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              About This Site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
