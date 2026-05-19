import { notFound } from "next/navigation";
import DrawExperience, { SPREADS } from "../../../components/draw/DrawExperience";

type SpreadKey = keyof typeof SPREADS;

export default async function SpreadDrawPage({
  params,
}: {
  params: { spread: string };
}) {
  const { spread } = params;
  const spreadConfig = SPREADS[spread as SpreadKey];

  if (!spreadConfig) {
    notFound();
  }

  return <DrawExperience spread={spreadConfig} />;
}
