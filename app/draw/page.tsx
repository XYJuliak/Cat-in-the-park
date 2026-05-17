import Link from "next/link";

const spreads = [
  {
    name: "One-card reading",
    cards: "1 card",
    bestUse: "Quick clarity",
    description:
      "A focused pull for immediate guidance when you need a clear signal on one question or energy.",
    href: "/draw/one-card",
  },
  {
    name: "Three-card reading",
    cards: "3 cards",
    bestUse: "Past, present, future",
    description:
      "A balanced spread that reveals progression, helping you connect what shaped this moment and where it may lead.",
    href: "/draw/three-card",
  },
  {
    name: "Celtic Cross reading",
    cards: "10 cards",
    bestUse: "Deep life insight",
    description:
      "A rich, layered reading for complex situations, uncovering influences, challenges, intentions, and likely outcomes.",
    href: "/draw/celtic-cross",
  },
] as const;

export default function DrawSelectionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.3),_rgba(2,6,23,0.95)_58%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-800/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse [animation-delay:1000ms]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-200/90">
            Choose your spread
          </p>
          <h1 className="bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            Select a Tarot Reading Path
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/85 sm:text-base">
            Pick the spread that matches your intention—from a swift answer to a full symbolic map of your current
            journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {spreads.map((spread) => (
            <Link
              key={spread.href}
              href={spread.href}
              className="group rounded-2xl border border-amber-200/20 bg-slate-900/60 p-6 shadow-[0_14px_45px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/65 hover:shadow-[0_18px_45px_rgba(251,191,36,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/70"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-amber-100">{spread.name}</h2>
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-200">
                  {spread.cards}
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-red-200/90">Best for: {spread.bestUse}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/85">{spread.description}</p>

              <div className="mt-5 inline-flex items-center text-sm font-medium text-amber-200 transition-colors duration-300 group-hover:text-amber-100">
                Begin this spread
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">✧</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
