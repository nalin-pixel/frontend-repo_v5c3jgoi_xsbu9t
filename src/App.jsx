import Hero from './components/Hero'
import SampleProblem from './components/SampleProblem'
import HowItWorks from './components/HowItWorks'
import Scoring from './components/Scoring'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <SampleProblem />
      <HowItWorks />
      <Scoring />
      <Timeline />

      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>ARC AGI 2.5 — community-run, for research and fun. Not affiliated with the original ARC.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="hover:text-slate-900">Back to top</a>
            <a href="#sample" className="hover:text-slate-900">Sample</a>
            <a href="#how" className="hover:text-slate-900">How</a>
            <a href="#scoring" className="hover:text-slate-900">Scoring</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
