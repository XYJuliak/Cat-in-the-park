import { notFound } from "next/navigation";
import DrawExperience from "../../../components/draw/DrawExperience";
import { SPREADS } from "../../../components/draw/spreads";

type SpreadKey = keyof typeof SPREADS;

export default async function SpreadDrawPage({
  params,
}: {
  params: Promise<{ spread: string }>;
}) {
  const { spread } = await params;
  const spreadConfig = SPREADS[spread as SpreadKey];

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} />;
}
