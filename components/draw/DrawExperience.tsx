"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { TarotDeck } from "../../lib/decks";
import type { DrawnCard, SpreadConfig } from "../../lib/spreads";

type RitualCard = DrawnCard & { revealed: boolean };

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
  const [isPrepared, setIsPrepared] = useState(false);
  const [cards, setCards] = useState<RitualCard[]>([]);

  const drawnCards: DrawnCard[] = cards.map(({ revealed, ...card }) => card);
  const revealedCount = cards.filter((card) => card.revealed).length;
  const canContinue = cards.length > 0 && revealedCount === spread.cardCount;

  const reportPayload = useMemo(
    () =>
      JSON.stringify({
        spreadKey: spread.key,
        spreadName: spread.name,
        deckId: deck.id,
        deckName: deck.name,
        deckDescription: deck.description,
        question,
        drawnCards: cards.map(({ revealed, ...card }) => card),
      }),
    [deck.description, deck.id, deck.name, drawnCards, question, spread.key, spread.name]
  );

  const beginRitual = () => {
    const randomized = shuffleDeck(deck.cards).slice(0, spread.cardCount);
    setCards(
      randomized.map((card, index) => ({
        ...card,
        revealed: false,
        orientation: Math.random() > 0.5 ? "upright" : "reversed",
        positionLabel: spread.positions[index] || `Position ${index + 1}`,
      }))
    );
    setIsPrepared(true);
  };

  const reshuffle = () => {
    beginRitual();
  };

  const revealCard = (index: number) => {
    setCards((prev) => prev.map((card, i) => (i === index ? { ...card, revealed: true } : card)));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.28),_rgba(2,6,23,0.96)_58%)]" />
      <section className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="rounded-3xl border border-amber-200/20 bg-slate-900/60 p-5 backdrop-blur-xl sm:p-8">
          <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200/90">
            Ritual draw
          </p>
          <h1 className="mt-4 bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            {spread.name}
          </h1>
          <p className="mt-3 text-sm text-slate-300">{deck.name} · {deck.description}</p>

          <label className="mt-6 block text-sm font-medium text-amber-100">Set your intention</label>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows={3}
            placeholder="Breathe in. Ask your question with clarity..."
            className="mt-2 w-full rounded-xl border border-amber-200/25 bg-slate-950/70 px-4 py-3 text-sm text-amber-50 placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={beginRitual}
              className="rounded-xl border border-red-300/35 bg-red-900/35 px-5 py-2.5 text-sm font-medium transition-all duration-500 hover:border-red-200/80 hover:bg-red-700/45"
            >
              {isPrepared ? "Lay cards again" : "Begin ritual"}
            </button>
            {isPrepared && (
              <button
                type="button"
                onClick={reshuffle}
                className="rounded-xl border border-amber-300/35 bg-amber-100/10 px-5 py-2.5 text-sm font-medium transition-all duration-500 hover:border-amber-200/80 hover:bg-amber-200/20"
              >
                Shuffle energy
              </button>
            )}
            <Link
              href={`/reading/result?report=${encodeURIComponent(reportPayload)}`}
              className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-500 ${
                canContinue
                  ? "border-amber-300/35 bg-amber-100/10 hover:border-amber-200/80 hover:bg-amber-200/20"
                  : "pointer-events-none border-slate-700/60 bg-slate-800/50 text-slate-400"
              }`}
            >
              View reading
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            {!isPrepared
              ? "When ready, begin the ritual to lay your card backs."
              : `${revealedCount}/${spread.cardCount} cards revealed. Tap each card to uncover its message.`}
          </p>
        </div>

        {isPrepared && (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {cards.map((card, index) => (
              <button
                type="button"
                key={`${card.id}-${index}`}
                onClick={() => revealCard(index)}
                disabled={card.revealed}
                className="group min-h-44 rounded-2xl border border-amber-200/20 bg-slate-900/60 p-3 text-left transition-all duration-700 hover:-translate-y-1 hover:border-amber-300/60 disabled:cursor-default"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-amber-200/80">{card.positionLabel}</p>
                <div className="mt-3 flex h-28 items-center justify-center rounded-xl border border-amber-200/20 bg-gradient-to-b from-slate-900 to-slate-950">
                  {card.revealed ? (
                    <div className="text-center animate-[fadeIn_600ms_ease]">
                      <p className="text-sm font-semibold text-amber-100">{card.name}</p>
                      <p className="mt-1 text-xs text-red-200/90">{card.orientation}</p>
                    </div>
                  ) : (
                    <p className="text-lg text-amber-300/80">✶</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
