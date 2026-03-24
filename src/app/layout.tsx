import type { Metadata } from "next";
import { Newsreader, Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sunnah Clarity — Traditional Islam, Clearly Explained",
    template: "%s | Sunnah Clarity",
  },
  description:
    "Clear, accessible explanations of traditional Sunni Islamic concepts — bid'a, mawlid, dhikr, tasawwuf, madhabs, and the scholarly tradition. Sourced from qualified scholars.",
  keywords: [
    "Islam",
    "Sunni",
    "traditional Islam",
    "bid'a",
    "mawlid",
    "dhikr",
    "tasawwuf",
    "sufism",
    "madhab",
    "school of thought",
    "Islamic scholars",
    "isnad",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sunnah Clarity",
    title: "Sunnah Clarity — Traditional Islam, Clearly Explained",
    description:
      "Clear, accessible explanations of traditional Sunni Islamic concepts for everyday Muslims.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${playfair.variable} ${inter.variable} ${amiri.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
