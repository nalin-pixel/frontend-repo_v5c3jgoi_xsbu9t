import { Code2, Trophy, Zap } from "lucide-react"

function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Monthly tasks</h3>
            <p className="mt-2 text-slate-600 text-sm">We release a curated set of ARC-style puzzles every month with diverse transformations and reasoning steps.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Accuracy first</h3>
            <p className="mt-2 text-slate-600 text-sm">Submit a solver that produces correct outputs on hidden tests. Only then is your solution eligible for golf scoring.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Then golf it</h3>
            <p className="mt-2 text-slate-600 text-sm">Compress your solver into the fewest characters without changing behavior. Share tricks, celebrate minimalism.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
