import { BilingualText } from "@/content/types";

/**
 * Gets the text for the current language.
 * This is primarily for use in Server Components or where useLanguage hook is not available.
 */
export function getBilingualText(text: BilingualText, lang: "id" | "en"): string {
  return text[lang] || text.id;
}

/**
 * Mock function to simulate loading all destinations.
 * In a real app, this might fetch from a CMS or local JSON files.
 */
export async function getDestinations() {
  // We will implement destination data in separate files and import them here
  const { destinations } = await import("@/content/shared/destinations");
  return destinations;
}

export async function getDestinationBySlug(slug: string) {
  const destinations = await getDestinations();
  return destinations.find((d) => d.slug === slug);
}
