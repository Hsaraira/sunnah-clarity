import type { MDXComponents } from "mdx/types";
import HadithBlock from "@/components/content/HadithBlock";
import QuranVerse from "@/components/content/QuranVerse";
import ScholarQuote from "@/components/content/ScholarQuote";
import MisconceptionBlock from "@/components/content/MisconceptionBlock";
import MadhabComparison from "@/components/content/MadhabComparison";
import SourceCard from "@/components/content/SourceCard";
import ProgressiveDisclosure from "@/components/content/ProgressiveDisclosure";

const components: MDXComponents = {
  HadithBlock,
  QuranVerse,
  ScholarQuote,
  MisconceptionBlock,
  MadhabComparison,
  SourceCard,
  ProgressiveDisclosure,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
