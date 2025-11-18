function SampleProblem() {
  return (
    <section id="sample" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Sample problem</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Given a 6×6 grid, transform the input pattern to match the output: all blue cells expand one step
            orthogonally unless blocked by red cells. The goal is not only to write a correct solver — but also to express
            it using the fewest characters possible. Accuracy is required to advance; golfed size becomes the tie‑breaker.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex gap-3"><span className="h-5 w-5 mt-1 rounded bg-sky-400/30 ring-1 ring-sky-300" /> Expand blue regions</li>
            <li className="flex gap-3"><span className="h-5 w-5 mt-1 rounded bg-rose-400/30 ring-1 ring-rose-300" /> Respect red walls</li>
            <li className="flex gap-3"><span className="h-5 w-5 mt-1 rounded bg-amber-400/30 ring-1 ring-amber-300" /> Keep within bounds</li>
          </ul>
        </div>
        <div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-medium text-slate-500 mb-2">Input</p>
                <div className="aspect-square rounded-lg bg-slate-50 grid place-items-center p-4">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className={`h-5 w-5 rounded ${[3,8,9,13,20,28].includes(i) ? 'bg-sky-400' : [15,21,22,23].includes(i) ? 'bg-rose-400' : 'bg-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-2">Output</p>
                <div className="aspect-square rounded-lg bg-slate-50 grid place-items-center p-4">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className={`h-5 w-5 rounded ${[2,3,4,7,8,9,10,12,13,14,19,20,21,27,28,29].includes(i) ? 'bg-sky-400' : [15,21,22,23].includes(i) ? 'bg-rose-400' : 'bg-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Left: input grid. Right: expected transformation. Your job: build a solver, then compress.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SampleProblem
