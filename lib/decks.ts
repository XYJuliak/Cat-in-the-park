import { OUTDOORS_GUIDEBOOK } from "./guidebooks/outdoors-guide";

export type TarotSuit = "major" | "vessels" | "sticks" | "stones" | "blades";

export type TarotCard = {
  id: string;
  name: string;
  suit: TarotSuit;
};

export type TarotDeck = {
  id: string;
  name: string;
  description: string;
  supportsReversal: boolean;
  cards: TarotCard[];
};

const OUTDOORS_TAROT_CARDS: TarotCard[] = OUTDOORS_GUIDEBOOK.map(({ id, name, suit }) => ({
  id,
  name,
  suit: suit ?? "major",
}));

export const DEFAULT_DECK: TarotDeck = {
  id: "outdoors-tarot",
  name: "Outdoors Tarot",
  description: "A nature-rooted 78-card deck for grounded symbolic guidance.",
  supportsReversal: false,
  cards: OUTDOORS_TAROT_CARDS,
};

const LEGACY_DEFAULT_DECK_IDS = new Set(["mystic-arcana"]);

export function getDeckById(deckId?: string): TarotDeck {
  if (!deckId || deckId === DEFAULT_DECK.id || LEGACY_DEFAULT_DECK_IDS.has(deckId)) {
    return DEFAULT_DECK;
  }

  return DEFAULT_DECK;
}
