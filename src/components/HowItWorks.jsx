import { Code2, Trophy, Zap, Upload, ListChecks } from "lucide-react"

function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How it works</h2>

        {/* Three-step overview */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">1) Get the tasks</h3>
            <p className="mt-2 text-slate-600 text-sm">We release a set of ARC‑style puzzles each month. Youll get train/test pairs, a spec, and a simple starter kit.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Diverse transformations (color fills, symmetry, counting, topology)</li>
              <li>Hidden tests determine correctness</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">2) Solve for accuracy</h3>
            <p className="mt-2 text-slate-600 text-sm">Your first goal is a correct solver. Submit a clear reference implementation with a short write‑up of the idea.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Passes all public tests locally</li>
              <li>Must generalize to hidden tests</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">3) Then golf it</h3>
            <p className="mt-2 text-slate-600 text-sm">After your solver is verified, submit a golfed version that is functionally equivalent and as short as possible.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Same behavior, fewer characters</li>
              <li>Share clever compressions post‑results</li>
            </ul>
          </div>
        </div>

        {/* Submission details */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
                <Upload className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">Submission format</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-medium">Reference:</span> a readable solution (any language) + a 3–8 sentence explanation of the core idea.
              </li>
              <li>
                <span className="font-medium">Golfed:</span> a minimal version producing identical outputs on all tests. Include exact character count.
              </li>
              <li>
                <span className="font-medium">Repro:</span> commands or script to run your solver end‑to‑end.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
                <ListChecks className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">Languages & tooling</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Popular choices: Python, JavaScript/TypeScript, Julia, Rust. Esolangs allowed; document how to run.</li>
              <li>Libraries are fine for reference solutions. Golfed submissions may use standard libraries only unless stated otherwise.</li>
              <li>We time execution with generous limits; correctness first, micro‑optimizations optional.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
