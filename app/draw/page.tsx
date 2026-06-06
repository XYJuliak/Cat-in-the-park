import Link from "next/link";

const spreads = [
  {
    key: "one-card",
    name: "One-card reading",
    subtitle: "A single guiding light",
  },
  {
    key: "three-card",
    name: "Three-card reading",
    subtitle: "Past • Present • Future",
  },
  {
    key: "celtic-cross",
    name: "Celtic Cross reading",
    subtitle: "A full symbolic map",
  },
] as const;

export default function DrawSelectionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.3),_rgba(2,6,23,0.95)_58%)]" />
      <section className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-amber-200/90">
            Begin the ritual
          </p>
          <h1 className="mt-6 bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            Choose Your Spread
          </h1>
          <p className="mt-4 text-sm text-slate-200/85">Step gently into the reading. Select a path below.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spreads.map((spread) => (
            <Link
              key={spread.key}
              href={`/draw/${spread.key}`}
              className="group rounded-3xl border border-amber-200/20 bg-slate-900/55 p-6 text-left shadow-[0_16px_45px_rgba(2,6,23,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/60 hover:bg-slate-900/80"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Ritual spread</p>
              <h2 className="mt-3 text-xl font-semibold text-amber-100">{spread.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{spread.subtitle}</p>
              <p className="mt-6 text-sm text-amber-200 group-hover:text-amber-100">Enter this reading ✧</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
