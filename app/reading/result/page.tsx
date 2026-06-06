import Link from "next/link";
import { getGuidebookEntry } from "../../../lib/guidebooks";
import type { DrawnCard, SpreadKey } from "../../../lib/spreads";

type ReportData = {
  spreadKey: SpreadKey;
  spreadName: string;
  deckId: string;
  deckName: string;
  deckDescription: string;
  question: string;
  drawnCards: DrawnCard[];
};

function parseReport(value?: string): ReportData | undefined {
  if (!value) return undefined;

  try {
    const parsed = JSON.parse(value) as ReportData;
    if (!parsed.spreadName || !Array.isArray(parsed.drawnCards)) return undefined;

    return {
      spreadKey: parsed.spreadKey,
      spreadName: parsed.spreadName,
      deckId: parsed.deckId,
      deckName: parsed.deckName,
      deckDescription: parsed.deckDescription,
      question: parsed.question,
      drawnCards: parsed.drawnCards,
    };
  } catch {
    return undefined;
  }
}

export default async function ReadingResultPage({
  searchParams,
}: {
  searchParams: { report?: string };
}) {
  const { report } = searchParams;
  const reportData = parseReport(report);

  if (!reportData) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
        <section className="relative mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-12 sm:px-10">
          <article className="rounded-3xl border border-amber-200/20 bg-slate-900/65 p-6 shadow-[0_20px_80px_rgba(251,191,36,0.08)] backdrop-blur-xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90">Reading report</p>
            <h1 className="mt-4 text-3xl font-semibold text-amber-100">No reading report found</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
              Start a new reading to draw cards from the complete Outdoors Tarot deck.
            </p>
            <Link
              href="/draw"
              className="mt-6 inline-flex items-center rounded-xl border border-amber-300/35 bg-amber-100/10 px-5 py-3 text-sm font-medium text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/80 hover:bg-amber-200/20"
            >
              Start a new reading
            </Link>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.28),_rgba(2,6,23,0.96)_58%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-800/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse [animation-delay:900ms]" />

      <section className="relative mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 lg:py-16">
        <article className="rounded-3xl border border-amber-200/20 bg-slate-900/65 p-6 shadow-[0_20px_80px_rgba(251,191,36,0.08)] backdrop-blur-xl sm:p-10">
          <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200/90">
            Collectible reading report
          </p>
          <h1 className="mt-4 bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Your Tarot Reading
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-amber-200/20 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-amber-200/80">Selected spread</p>
              <p className="mt-2 text-sm text-amber-50">{reportData.spreadName}</p>
            </div>
            <div className="rounded-2xl border border-amber-200/20 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-amber-200/80">Deck</p>
              <p className="mt-2 text-sm text-amber-50">{reportData.deckName}</p>
              <p className="mt-1 text-xs text-slate-300/90">{reportData.deckDescription}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/20 bg-slate-950/60 p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-amber-200/80">Your question</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100/90">{reportData.question}</p>
          </div>

          <div className="mt-8 space-y-4">
            {reportData.drawnCards.map((card, index) => {
              const guidebookEntry = getGuidebookEntry(card.id);

              return (
                <article
                  key={`${card.id}-${index}`}
                  className="rounded-2xl border border-amber-200/20 bg-slate-950/60 p-5 transition-all duration-300 hover:border-amber-200/70"
                >
                  <h2 className="text-lg font-semibold text-amber-100">{card.name}</h2>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-amber-200/80">{card.positionLabel}</p>

                  {guidebookEntry && (
                    <div className="mt-4 rounded-xl border border-amber-200/20 bg-slate-900/60 p-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-amber-200/80">Guidebook text</p>
                      <p className="mt-2 text-sm italic leading-relaxed text-slate-300/85">
                        “{guidebookEntry.guidebook.text}”
                      </p>

                      {guidebookEntry.guidebook.keywords && guidebookEntry.guidebook.keywords.length > 0 && (
                        <div className="mt-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-amber-200/80">Keywords</p>
                          <p className="mt-1 text-xs text-amber-100/90">
                            {guidebookEntry.guidebook.keywords.join(" · ")}
                          </p>
                        </div>
                      )}

                      {guidebookEntry.guidebook.beware && guidebookEntry.guidebook.beware.length > 0 && (
                        <div className="mt-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-red-200/85">Beware</p>
                          <p className="mt-1 text-xs text-red-100/85">
                            {guidebookEntry.guidebook.beware.join(" · ")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/draw"
              className="inline-flex items-center rounded-xl border border-amber-300/35 bg-amber-100/10 px-5 py-3 text-sm font-medium text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/80 hover:bg-amber-200/20"
            >
              Start a new reading
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
