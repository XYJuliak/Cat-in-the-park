"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { TarotDeck } from "../../lib/decks";
import type { DrawnCard, SpreadConfig } from "../../lib/spreads";

function shuffleDeck<T>(cards: T[]): T[] {
  const next = [...cards];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export default function DrawExperience({ spread, deck }: { spread: SpreadConfig; deck: TarotDeck }) {
  const [question, setQuestion] = useState("");
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);

  const canContinue = drawnCards.length === spread.cardCount;

  const reportPayload = useMemo(
    () =>
      JSON.stringify({
        spreadKey: spread.key,
        spreadName: spread.name,
        deckId: deck.id,
        deckName: deck.name,
        deckDescription: deck.description,
        question,
        drawnCards,
      }),
    [deck.description, deck.id, deck.name, drawnCards, question, spread.key, spread.name]
  );

  const helperText = useMemo(() => {
    if (drawnCards.length === 0) return "Your deck is waiting. Draw when ready.";
    return `${drawnCards.length} of ${spread.cardCount} cards revealed.`;
  }, [drawnCards.length, spread.cardCount]);

  const handleDraw = () => {
    const randomCards = shuffleDeck(deck.cards).slice(0, spread.cardCount);
    const nextDraw: DrawnCard[] = randomCards.map((card, index) => ({
      ...card,
      orientation: Math.random() > 0.5 ? "upright" : "reversed",
      positionLabel: spread.positions[index] || `Position ${index + 1}`,
    }));

    setDrawnCards(nextDraw);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.28),_rgba(2,6,23,0.96)_58%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-800/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse [animation-delay:800ms]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
        <div className="rounded-3xl border border-amber-200/20 bg-slate-900/60 p-6 shadow-[0_20px_80px_rgba(251,191,36,0.08)] backdrop-blur-xl sm:p-10">
          <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200/90">
            Draw cards
          </p>
          <h1 className="mt-4 bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            {spread.name}
          </h1>
          <p className="mt-4 text-sm text-slate-200/90">
            Selected deck: <span className="font-semibold text-amber-100">{deck.name}</span>
          </p>
          <p className="mt-1 text-sm text-slate-300/85">{deck.description}</p>

          <label className="mt-8 block text-sm font-medium text-amber-100">Your question</label>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows={3}
            placeholder="What would you like clarity on today?"
            className="mt-2 w-full rounded-xl border border-amber-200/25 bg-slate-950/70 px-4 py-3 text-sm text-amber-50 placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
          />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDraw}
              className="rounded-xl border border-red-300/35 bg-red-900/35 px-5 py-3 text-sm font-medium text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-red-700/45 hover:shadow-[0_8px_30px_rgba(185,28,28,0.25)]"
            >
              Draw {spread.cardCount} {spread.cardCount === 1 ? "card" : "cards"}
            </button>

            <Link
              href={`/reading/result?report=${encodeURIComponent(reportPayload)}`}
              className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                canContinue
                  ? "border-amber-300/35 bg-amber-100/10 text-amber-50 hover:-translate-y-0.5 hover:border-amber-200/80 hover:bg-amber-200/20"
                  : "pointer-events-none border-slate-700/60 bg-slate-800/50 text-slate-400"
              }`}
            >
              Continue to reading result
            </Link>

            <p className="text-sm text-slate-300/90">{helperText}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drawnCards.map((card, index) => (
            <article
              key={`${card.id}-${index}`}
              className="rounded-2xl border border-amber-200/20 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-200/70"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{card.positionLabel}</p>
              <h2 className="mt-2 text-lg font-semibold text-amber-100">{card.name}</h2>
              <p className="mt-2 text-sm text-red-200/90">Orientation: {card.orientation}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
