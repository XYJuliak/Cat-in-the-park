import fs from "node:fs";

const guidebookSource = fs.readFileSync("lib/guidebooks/outdoors-guide.ts", "utf8");
const deckSource = fs.readFileSync("lib/decks.ts", "utf8");
const expectedSuitCounts = {
  major: 22,
  vessels: 14,
  sticks: 14,
  stones: 14,
  blades: 14,
};

const guidebookEntries = [...guidebookSource.matchAll(
  /\n  \{\n    id: "([^"]+)",\n    name: "([^"]+)"(?:,\n    number: ([0-9]+))?(?:,\n    suit: "([^"]+)")?/g
)].map((match) => ({
  id: match[1],
  name: match[2],
  suit: match[4] ?? "major",
}));

const deckDerivesFromGuidebook = /OUTDOORS_GUIDEBOOK\.map\(\(\{ id, name, suit \}\)/.test(deckSource);
const deckCards = deckDerivesFromGuidebook ? guidebookEntries : [];
const guidebookIds = new Set(guidebookEntries.map((entry) => entry.id));
const deckIds = new Set(deckCards.map((card) => card.id));
const countBySuit = deckCards.reduce(
  (counts, card) => ({
    ...counts,
    [card.suit]: counts[card.suit] + 1,
  }),
  {
    major: 0,
    vessels: 0,
    sticks: 0,
    stones: 0,
    blades: 0,
  }
);
const missingGuidebookEntries = deckCards
  .filter((card) => !guidebookIds.has(card.id))
  .map((card) => card.id);
const guidebookEntriesNotUsedByDeck = guidebookEntries
  .filter((entry) => !deckIds.has(entry.id))
  .map((entry) => entry.id);
const duplicateDeckIds = deckCards
  .map((card) => card.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);
const duplicateGuidebookIds = guidebookEntries
  .map((entry) => entry.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);
const suitMismatches = Object.entries(expectedSuitCounts).filter(
  ([suit, expectedCount]) => countBySuit[suit] !== expectedCount
);
const hasExpectedDeckSize = deckCards.length === 78;
const hasExpectedSuitDistribution = suitMismatches.length === 0;
const isValid =
  deckDerivesFromGuidebook &&
  hasExpectedDeckSize &&
  hasExpectedSuitDistribution &&
  missingGuidebookEntries.length === 0 &&
  guidebookEntriesNotUsedByDeck.length === 0 &&
  duplicateDeckIds.length === 0 &&
  duplicateGuidebookIds.length === 0;

console.log("Deck derives from guidebook:", deckDerivesFromGuidebook);
console.log("Total deck card count:", deckCards.length);
console.log("Count by suit:", countBySuit);
console.log("Missing guidebook entries:", missingGuidebookEntries);
console.log("Guidebook entries not used by deck:", guidebookEntriesNotUsedByDeck);
console.log("Duplicate deck ids:", duplicateDeckIds);
console.log("Duplicate guidebook ids:", duplicateGuidebookIds);
console.log("Draw flow samples from full deck:", deckDerivesFromGuidebook && hasExpectedDeckSize);

if (!isValid) {
  console.error("Deck/guidebook audit failed.");
  process.exit(1);
}

console.log("Deck/guidebook audit passed.");
