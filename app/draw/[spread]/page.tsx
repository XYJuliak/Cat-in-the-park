import { notFound } from "next/navigation";
import DrawExperience from "../../../components/draw/DrawExperience";
import { DEFAULT_DECK } from "../../../lib/decks";
import { SPREADS } from "../../../lib/spreads";

type SpreadKey = keyof typeof SPREADS;

export default function SpreadDrawPage({
  params,
}: {
  params: { spread: string };
}) {
  const { spread } = params;
  const spreadConfig = SPREADS[spread as SpreadKey];

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} deck={DEFAULT_DECK} />;
}
