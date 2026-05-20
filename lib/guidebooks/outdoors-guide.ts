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
      text: `The Fool is the first card in the tarot deck, representing a novice about to start a journey, whether spiritual, emotional, or physical.

At this point in your journey, all things are possible. You are full of youthful exuberance and fresh ideas. The excitement and openness in your body language draw in all kinds of opportunities and adventures.

This card marks a beginning, and can indicate that there has been little to no planning done. You may have entered this journey spontaneously, and perhaps this in itself is a form of freedom and flexibility.

The Fool asks if your next move will be prudent and inspired—or reckless and impulsive. Listen to your body, ask your heart, and stay humble as you leap into the unknown.`,
      keywords: ["Beginning", "Fresh start", "Spontaneity"],
      beware: ["Impulsiveness", "Recklessness"],
    },
  },
  {
    id: "magician",
    name: "The Magician",
    number: 1,
    guidebook: {
      text: `This card represents pure potential. Historically, the Magician harnesses Earth’s elements to create transformational energy.

When this card appears, ask yourself: What skills and tools do I already have? What can I build from where I am right now?

The Magician is a card of making. You are being invited to transform your ideas into action, and your action into real change.

This is not a card of waiting—it is a card of agency, focus, and intention.`,
      keywords: ["Metamorphosis", "Creativity", "New ideas"],
      beware: ["Vulnerability", "Illusions", "Being taken advantage of"],
    },
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    number: 2,
    guidebook: {
      text: `The High Priestess embodies a person of any gender who is distinctly cool, perhaps aloof, and certainly in control.

This card points to deep intuition, inner poise, and the power of silence. You may already know the answer to your question, but have not yet trusted yourself enough to act on it.

Pause before reacting. Observe more than you speak. Let your inner wisdom rise to the surface.

The High Priestess reminds you that true authority often arrives quietly.`,
      keywords: ["Efficiency", "Modesty", "Tactfulness"],
      beware: ["Flamboyance", "Showing off"],
    },
  },
  {
    id: "empress",
    name: "The Empress",
    number: 3,
    guidebook: {
      text: `The Empress embodies joy, the pure richness of life, and a desire to generously share love.

This card is about abundance in all forms: creativity, care, pleasure, nourishment, and beauty.

When The Empress appears, ask yourself where you can cultivate rather than control. What can you tend gently and allow to grow?

She invites you to receive life’s sweetness and to share it with others.`,
      keywords: ["Abundance", "Generosity", "Pleasure", "Creature comforts"],
      beware: ["Going overboard", "Excess", "Overly grandiose gestures"],
    },
  },
];

export const OUTDOORS_GUIDEBOOK_BY_ID: Record<string, OutdoorsGuidebookCard> =
  Object.fromEntries(OUTDOORS_GUIDEBOOK.map((card) => [card.id, card]));
