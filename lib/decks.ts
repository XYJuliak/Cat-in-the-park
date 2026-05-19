export type TarotCard = {
  id: string;
  name: string;
};

export type TarotDeck = {
  id: string;
  name: string;
  description: string;
  cards: TarotCard[];
};

const MAJOR_ARCANA_CARDS: TarotCard[] = [
  { id: "fool", name: "The Fool" },
  { id: "magician", name: "The Magician" },
  { id: "high-priestess", name: "The High Priestess" },
  { id: "empress", name: "The Empress" },
  { id: "emperor", name: "The Emperor" },
  { id: "hierophant", name: "The Hierophant" },
  { id: "lovers", name: "The Lovers" },
  { id: "chariot", name: "The Chariot" },
  { id: "strength", name: "Strength" },
  { id: "hermit", name: "The Hermit" },
  { id: "wheel", name: "Wheel of Fortune" },
  { id: "justice", name: "Justice" },
  { id: "hanged-man", name: "The Hanged Man" },
  { id: "death", name: "Death" },
  { id: "temperance", name: "Temperance" },
  { id: "devil", name: "The Devil" },
  { id: "tower", name: "The Tower" },
  { id: "star", name: "The Star" },
  { id: "moon", name: "The Moon" },
  { id: "sun", name: "The Sun" },
  { id: "judgement", name: "Judgement" },
  { id: "world", name: "The World" },
];

export const TAROT_DECKS: TarotDeck[] = [
  {
    id: "mystic-arcana",
    name: "Mystic Arcana",
    description: "Classic major-arcana-focused deck for grounded symbolic guidance.",
    cards: MAJOR_ARCANA_CARDS,
  },
  {
    id: "starlight-visions",
    name: "Starlight Visions",
    description: "A luminous reinterpretation deck tuned for reflective and intuitive readings.",
    cards: MAJOR_ARCANA_CARDS.map((card) => ({
      id: `starlight-${card.id}`,
      name: `${card.name} · Starlight`,
    })),
  },
];

export function getDeckById(deckId?: string): TarotDeck | undefined {
  if (!deckId) return undefined;
  return TAROT_DECKS.find((deck) => deck.id === deckId);
}
