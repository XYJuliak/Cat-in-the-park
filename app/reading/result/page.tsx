import Link from "next/link";
import { getCardMeaning, getGuidebookEntry } from "../../../lib/guidebooks";
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

const DEFAULT_REPORT: ReportData = {
  spreadKey: "one-card",
  spreadName: "One-card reading",
  deckId: "mystic-arcana",
  deckName: "Mystic Arcana",
  deckDescription: "Classic major-arcana-focused deck for grounded symbolic guidance.",
  question: "What message should I focus on today?",
  drawnCards: [
    {
      id: "star",
      name: "The Star",
      orientation: "upright",
      positionLabel: "Primary influence",
    },
  ],
};


function parseReport(value?: string): ReportData {
  if (!value) return DEFAULT_REPORT;

  try {
    const parsed = JSON.parse(value) as ReportData;
    if (!parsed.spreadName || !Array.isArray(parsed.drawnCards)) return DEFAULT_REPORT;

    return {
      spreadKey: parsed.spreadKey,
      spreadName: parsed.spreadName,
      deckId: parsed.deckId || DEFAULT_REPORT.deckId,
      deckName: parsed.deckName || DEFAULT_REPORT.deckName,
      deckDescription: parsed.deckDescription || DEFAULT_REPORT.deckDescription,
      question: parsed.question || "No question provided.",
      drawnCards: parsed.drawnCards,
    };
  } catch {
    return DEFAULT_REPORT;
  }
}

function buildAdvice(spreadName: string): string {
  return `Move through ${spreadName.toLowerCase()} with trust—your next step is to act on the clearest truth revealed here.`;
}

export default async function ReadingResultPage({
  searchParams,
}: {
  searchParams: { report?: string };
}) {
  const { report } = searchParams;
  const reportData = parseReport(report);

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
              const meaning = getCardMeaning(card.id, card.orientation);
              const guidebookEntry = getGuidebookEntry(card.id);

              return (
                <article
                  key={`${card.id}-${index}`}
                  className="rounded-2xl border border-amber-200/20 bg-slate-950/60 p-5 transition-all duration-300 hover:border-amber-200/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-amber-100">{card.name}</h2>
                    <span className="rounded-full border border-red-200/35 bg-red-900/35 px-3 py-1 text-xs uppercase tracking-wide text-red-100/90">
                      {card.orientation}
                    </span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-amber-200/80">{card.positionLabel}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-amber-200/20 bg-slate-900/60 p-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-amber-200/80">Meaning</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-100/90">{meaning.text}</p>

                      {meaning.keywords.length > 0 && (
                        <div className="mt-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-amber-200/80">Keywords</p>
                          <p className="mt-1 text-xs text-amber-100/90">{meaning.keywords.join(" · ")}</p>
                        </div>
                      )}

                      {meaning.beware.length > 0 && (
                        <div className="mt-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-red-200/85">Beware</p>
                          <p className="mt-1 text-xs text-red-100/85">{meaning.beware.join(" · ")}</p>
                        </div>
                      )}

                      {card.orientation === "reversed" && meaning.reversedMeaning && (
                        <div className="mt-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-amber-200/80">
                            Reversed interpretation
                          </p>
                          <p className="mt-1 text-xs text-slate-200/90">{meaning.reversedMeaning}</p>
                        </div>
                      )}
                    </div>
                    <div className="rounded-xl border border-amber-200/20 bg-slate-900/60 p-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-amber-200/80">Contextual interpretation (mock)</p>
                      <p className="mt-2 text-sm text-slate-100/90">
                        In the {card.positionLabel.toLowerCase()} position, {card.name} suggests this theme is closely tied
                        to your question and asks for intentional, heart-led action.
                      </p>
                      {guidebookEntry && (
                        <p className="mt-3 text-xs italic leading-relaxed text-slate-300/85">
                          “{meaning.originalGuidebookText}”
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-200/10 p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-amber-100">Final advice</p>
            <p className="mt-2 text-sm text-amber-50">{buildAdvice(reportData.spreadName)}</p>
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
