import { notFound } from "next/navigation";
import DrawExperience, { SPREADS } from "../../../components/draw/DrawExperience";
import { getDeckById } from "../../../lib/decks";

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

  if (!spreadConfig || !selectedDeck) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} deck={selectedDeck} />;
}
