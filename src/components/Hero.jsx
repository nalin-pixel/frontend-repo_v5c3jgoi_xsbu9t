import { Calendar, ArrowRight, Star } from "lucide-react"

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-50%,#93c5fd20,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Star className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-slate-500">Unofficial Community Contest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#sample" className="hover:text-slate-900">Sample</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#scoring" className="hover:text-slate-900">Scoring</a>
            <a href="#timeline" className="hover:text-slate-900">Timeline</a>
          </nav>
        </header>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Calendar className="h-3.5 w-3.5" />
              Next contest starts 25th November
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              ARC AGI 2.5
              <span className="block mt-2 text-slate-500 text-xl md:text-2xl font-normal">unofficial — monthly, relentless, and now also <span className="font-mono tracking-tight bg-slate-900 text-white px-2 py-0.5 rounded-sm">Golfed</span></span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              A community continuation of the ARC challenge. Each month we drop a new suite of reasoning tasks.
              Solve accurately, then push the limits by expressing your solver in the fewest characters possible.
              Creativity, clarity, and code-golf elegance are all rewarded.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-black transition-colors">
                Register now
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#how" className="text-slate-700 hover:text-slate-900 text-sm font-medium underline underline-offset-4">
                Learn more
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 grid place-items-center">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`h-6 w-6 rounded ${i % 5 === 0 ? 'bg-indigo-400' : i % 7 === 0 ? 'bg-sky-400' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-600">Pattern abstraction — the heart of ARC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
