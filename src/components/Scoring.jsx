import { Ruler, ShieldCheck, GitCommit } from "lucide-react"

function Scoring() {
  return (
    <section id="scoring" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Scoring & rules</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Correctness</h3>
            <p className="mt-2 text-slate-600 text-sm">Passes all hidden tests. Submissions must include a brief description of the core idea behind your solver.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <Ruler className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Golf length</h3>
            <p className="mt-2 text-slate-600 text-sm">After correctness is verified, ranking is determined by character count of the shortest equivalent implementation.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <GitCommit className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Transparency</h3>
            <p className="mt-2 text-slate-600 text-sm">We publish winning write-ups monthly. Reproducibility and clarity earn honorable mentions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scoring
