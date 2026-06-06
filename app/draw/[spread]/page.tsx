import { notFound } from "next/navigation";
import DrawExperience from "../../../components/draw/DrawExperience";
import { getDeckById } from "../../../lib/decks";
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

  console.log(
    "Deck size:",
    selectedDeck.cards.length
  );

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} deck={selectedDeck} />;
}
