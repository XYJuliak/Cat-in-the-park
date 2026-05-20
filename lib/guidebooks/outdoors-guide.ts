export type OutdoorsGuidebookCard = {
  id: string;
  name: string;
  number: number;
  guidebook: {
    text: string;
    keywords: string[];
    beware: string[];
  };
};

export const OUTDOORS_GUIDEBOOK: OutdoorsGuidebookCard[] = [
  {
    id: "fool",
    name: "The Fool",
    number: 0,
    guidebook: {
      text: `The Fool is the first card in the tarot deck, representing a novice about to start a journey, whether spiritual, emotional, or physical...`,
      keywords: ["Beginning", "Fresh start", "Spontaneity"],
      beware: ["Impulsiveness", "Recklessness"],
    },
  },
  {
    id: "magician",
    name: "The Magician",
    number: 1,
    guidebook: {
      text: `This card represents pure potential. Historically, the Magician harnesses Earth's elements to create transformational energy...`,
      keywords: ["Metamorphosis", "Creativity", "New ideas"],
      beware: ["Vulnerability", "Illusions", "Being taken advantage of"],
    },
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    number: 2,
    guidebook: {
      text: `The High Priestess embodies a person of any gender who is distinctly cool, perhaps aloof, and certainly in control...`,
      keywords: ["Efficiency", "Modesty", "Tactfulness"],
      beware: ["Flamboyance", "Showing off"],
    },
  },
  {
    id: "empress",
    name: "The Empress",
    number: 3,
    guidebook: {
      text: `The Empress embodies joy, the pure richness of life, and a desire to generously share love...`,
      keywords: ["Abundance", "Generosity", "Pleasure", "Creature comforts"],
      beware: ["Going overboard", "Excess", "Overly grandiose gestures"],
    },
  },
];

export const OUTDOORS_GUIDEBOOK_BY_ID: Record<string, OutdoorsGuidebookCard> =
  Object.fromEntries(OUTDOORS_GUIDEBOOK.map((card) => [card.id, card]));
