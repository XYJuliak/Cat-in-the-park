export type CardMeaning = {
  upright: string;
  reversed: string;
};

export type GuidebookEntry = {
  deckId: string;
  cardId: string;
  keywords: string[];
  meaning: CardMeaning;
  originalGuidebookText: string;
  interpretationNotes?: string;
};

export type GuidebookMeaningResult = {
  text: string;
  keywords: string[];
  originalGuidebookText?: string;
  interpretationNotes?: string;
  source: "guidebook" | "fallback";
};

const MOCK_GUIDEBOOK_ENTRIES: GuidebookEntry[] = [
  {
    deckId: "mystic-arcana",
    cardId: "star",
    keywords: ["hope", "renewal", "healing"],
    meaning: {
      upright: "Hope returns, and your path begins to feel illuminated again.",
      reversed: "A dimming of faith asks for gentle reconnection to inner trust.",
    },
    originalGuidebookText:
      "Under the starlit sky, the seeker pours life back into the earth and remembers their source.",
    interpretationNotes: "Strong for recovery themes and post-conflict clarity.",
  },
  {
    deckId: "mystic-arcana",
    cardId: "moon",
    keywords: ["intuition", "symbols", "uncertainty"],
    meaning: {
      upright: "Listen to subtle signals; not all truth arrives in daylight.",
      reversed: "Confusion starts to lift as hidden dynamics come into view.",
    },
    originalGuidebookText:
      "The moon path is misted—walk slowly, and let instinct speak before certainty arrives.",
  },
  {
    deckId: "mystic-arcana",
    cardId: "wheel",
    keywords: ["cycles", "turning point", "timing"],
    meaning: {
      upright: "Momentum shifts in your favor; stay open to changing conditions.",
      reversed: "A repeated cycle highlights a lesson still asking to be integrated.",
    },
    originalGuidebookText:
      "The wheel turns beyond control; wisdom comes from meeting timing with humility.",
    interpretationNotes: "Pair with nearby cards to identify whether motion is accelerating or pausing.",
  },
];

const guidebookIndex = new Map<string, GuidebookEntry>(
  MOCK_GUIDEBOOK_ENTRIES.map((entry) => [`${entry.deckId}:${entry.cardId}`, entry])
);

export function getGuidebookEntry(deckId: string, cardId: string): GuidebookEntry | undefined {
  return guidebookIndex.get(`${deckId}:${cardId}`);
}

export function getCardMeaning(
  deckId: string,
  cardId: string,
  orientation: "upright" | "reversed"
): GuidebookMeaningResult {
  const entry = getGuidebookEntry(deckId, cardId);

  if (!entry) {
    return {
      text:
        orientation === "upright"
          ? "Growth, insight, and forward movement are highlighted here."
          : "A pause invites reflection before your next meaningful move.",
      keywords: [],
      source: "fallback",
    };
  }

  return {
    text: entry.meaning[orientation],
    keywords: entry.keywords,
    originalGuidebookText: entry.originalGuidebookText,
    interpretationNotes: entry.interpretationNotes,
    source: "guidebook",
  };
}
