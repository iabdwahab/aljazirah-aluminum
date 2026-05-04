import { LocalizedText } from "@/types/i18n";

/**
 * Extracts the text for the given locale from a LocalizedText object.
 * Falls back to the other locale if the requested one is empty.
 * Also handles plain strings for backward compatibility.
 */
export function getLocalizedText(
  text: LocalizedText | string | undefined,
  locale: string,
): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  const localeKey = locale as keyof LocalizedText;
  return text[localeKey] || text.ar || text.en || "";
}
