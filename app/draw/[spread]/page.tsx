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
  const suitDistribution = getDeckSuitDistribution(selectedDeck);

  console.log("Deck size:", selectedDeck.cards.length);
  console.log("Deck suit distribution:", suitDistribution);

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} deck={selectedDeck} />;
}
