import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(153,27,27,0.35),_rgba(2,6,23,0.94)_58%)]" />
      <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-red-700/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl animate-pulse [animation-delay:900ms]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="w-full rounded-3xl border border-amber-200/20 bg-slate-900/60 p-8 shadow-[0_20px_80px_rgba(251,191,36,0.08)] backdrop-blur-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 inline-flex items-center rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-200/90">
              Mystical guidance awaits
            </p>

            <h1 className="bg-gradient-to-b from-amber-100 via-amber-300 to-red-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Cat in the Park Tarot
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-200/85 sm:text-base">
              Step into a calm, cosmic reading room where your cards reveal insight with elegance. Reflect on what
              you&apos;ve drawn or begin a fresh spread online in seconds.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/reading"
                className="group inline-flex items-center justify-center rounded-xl border border-amber-300/30 bg-amber-100/10 px-5 py-3 text-sm font-medium text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/80 hover:bg-amber-200/20 hover:shadow-[0_8px_30px_rgba(251,191,36,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/70"
              >
                I already drew cards
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">✦</span>
              </Link>

              <Link
                href="/draw"
                className="group inline-flex items-center justify-center rounded-xl border border-red-300/35 bg-red-900/35 px-5 py-3 text-sm font-medium text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200/80 hover:bg-red-700/45 hover:shadow-[0_8px_30px_rgba(185,28,28,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200/70"
              >
                Draw cards online
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">✧</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
