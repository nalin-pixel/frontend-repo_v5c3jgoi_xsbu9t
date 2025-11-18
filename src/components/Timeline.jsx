import { CalendarDays, AlarmClock } from "lucide-react"

function Timeline() {
  return (
    <section id="timeline" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Timeline</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <CalendarDays className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Opens</h3>
            <p className="mt-2 text-slate-600 text-sm">25 Nov — challenge release, rules and starter kits available.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <AlarmClock className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Submissions</h3>
            <p className="mt-2 text-slate-600 text-sm">Rolling for two weeks. Edit and improve until the deadline.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
              <CalendarDays className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">Results</h3>
            <p className="mt-2 text-slate-600 text-sm">Winners announced end of month with code-golf highlights.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
