import { notFound } from "next/navigation";
import DrawExperience from "../../../components/draw/DrawExperience";
import { getDeckById, getDeckSuitDistribution } from "../../../lib/decks";
import { SPREADS } from "../../../lib/spreads";

type SpreadKey = keyof typeof SPREADS;

export default function SpreadDrawPage({
  params,
  searchParams,
}: {
  params: { spread: string };
  searchParams: { deck?: string };
}) {
  const { spread } = params;
  const spreadConfig = SPREADS[spread as SpreadKey];
  const selectedDeck = getDeckById(searchParams.deck);

  const selectedDeck = getDeckById(searchParams.deck);

  console.log(
    "Deck size:",
    selectedDeck.cards.length
  );

  const selectedDeck = getDeckById(searchParams.deck);
  const suitDistribution = selectedDeck.cards.reduce<Record<TarotSuit, number>>(
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

  console.log("Deck size:", selectedDeck.cards.length);
  console.log("Deck suit distribution:", suitDistribution);

  const selectedDeck = getDeckById(searchParams.deck);
  const suitDistribution = getDeckSuitDistribution(selectedDeck);

  console.log("Deck size:", selectedDeck.cards.length);
  console.log("Deck suit distribution:", suitDistribution);

  const selectedDeck = getDeckById(searchParams.deck);
  const suitDistribution = getDeckSuitDistribution(selectedDeck);

  console.log("Deck size:", selectedDeck.cards.length);
  console.log("Deck suit distribution:", suitDistribution);

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} deck={selectedDeck} />;
}
