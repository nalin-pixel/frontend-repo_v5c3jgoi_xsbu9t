import { Ruler, ShieldCheck, GitCommit, Scale, Calculator } from "lucide-react"

function Scoring() {
  return (
    <section id="scoring" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Scoring & rules</h2>

        {/* Overall principles */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Correctness</h3>
            <p className="mt-2 text-slate-600 text-sm">Your submission must pass all hidden tests for the month. We validate deterministically and re‑run top entries.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <Ruler className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Golf length</h3>
            <p className="mt-2 text-slate-600 text-sm">After correctness is verified, ranking is by character count of the shortest functionally‑equivalent implementation.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <GitCommit className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Transparency</h3>
            <p className="mt-2 text-slate-600 text-sm">Winning entries include a short write‑up. We value clarity, reproducibility, and creative insight into the pattern.</p>
          </div>
        </div>

        {/* Detailed scoring */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">How we score</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li><span className="font-medium">1) Accuracy gate:</span> only solutions that match all hidden outputs proceed to ranking.</li>
            <li><span className="font-medium">2) Character count:</span> we measure UTF‑8 characters of the minimal equivalent file or function.</li>
            <li><span className="font-medium">3) Tie‑breaks:</span> earlier submit time, then simplicity of setup/run, then clarity of write‑up.</li>
            <li><span className="font-medium">4) Disallowed:</span> network access during solve, manual annotations of hidden tests, or stochastic runs without a fixed seed.</li>
          </ul>
        </div>

        {/* Counting rules */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center shadow-sm">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">Character counting rules</h3>
          </div>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-slate-700">
            <li><span className="font-medium">Includes:</span> all code characters in the submitted file/function.</li>
            <li><span className="font-medium">Excludes:</span> whitespace at file ends, build tooling, README text.</li>
            <li><span className="font-medium">Minification:</span> allowed as long as behavior is unchanged.</li>
            <li><span className="font-medium">Dependencies:</span> standard library only unless the task states otherwise.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Scoring
