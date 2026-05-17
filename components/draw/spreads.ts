export type SpreadKey = "one-card" | "three-card" | "celtic-cross";

export type SpreadConfig = {
  key: SpreadKey;
  name: string;
  cardCount: number;
  positions: string[];
};

export const SPREADS: Record<SpreadKey, SpreadConfig> = {
  "one-card": {
    key: "one-card",
    name: "One-card reading",
    cardCount: 1,
    positions: ["Primary influence"],
  },
  "three-card": {
    key: "three-card",
    name: "Three-card reading",
    cardCount: 3,
    positions: ["Past", "Present", "Future"],
  },
  "celtic-cross": {
    key: "celtic-cross",
    name: "Celtic Cross reading",
    cardCount: 10,
    positions: [
      "The situation",
      "The challenge",
      "Distant past",
      "Recent past",
      "Possible outcome",
      "Near future",
      "Self",
      "Others & environment",
      "Hopes & fears",
      "Final outcome",
    ],
  },
};
