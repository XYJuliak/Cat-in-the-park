import { OUTDOORS_GUIDEBOOK } from "./outdoors-guide";

export type GuidebookEntry = {
  cardName: string;
  keywords: string[];
  beware: string[];
  uprightMeaning: string;
  reversedMeaning?: string;
  originalGuidebookText: string;
};

export type Guidebook = Record<string, GuidebookEntry>;

export function getGuidebookEntry(cardId: string): GuidebookEntry | undefined {
  return OUTDOORS_GUIDEBOOK[cardId];
}

export function getCardMeaning(
  cardId: string,
  orientation: "upright" | "reversed"
): {
  text: string;
  keywords: string[];
  beware: string[];
  uprightMeaning: string;
  reversedMeaning?: string;
  originalGuidebookText: string;
} {
  const entry = getGuidebookEntry(cardId);

  if (!entry) {
    const fallbackUpright = "Growth, insight, and forward movement are highlighted here.";
    const fallbackReversed = "A pause invites reflection before your next meaningful move.";

    return {
      text: orientation === "reversed" ? fallbackReversed : fallbackUpright,
      keywords: [],
      beware: [],
      uprightMeaning: fallbackUpright,
      reversedMeaning: fallbackReversed,
      originalGuidebookText: "Mock guidebook text is not available for this card yet.",
    };
  }

  return {
    text:
      orientation === "reversed"
        ? entry.reversedMeaning || "Reversed interpretation is not available for this deck."
        : entry.uprightMeaning,
    keywords: entry.keywords,
    beware: entry.beware,
    uprightMeaning: entry.uprightMeaning,
    reversedMeaning: entry.reversedMeaning,
    originalGuidebookText: entry.originalGuidebookText,
  };
}
