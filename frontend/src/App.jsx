import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import DashboardPreview from './components/DashboardPreview'

function App() {
  return (
    <div className="min-h-screen bg-[#0a1630]">
      <Hero />
      <FeatureGrid />
      <DashboardPreview />
      <footer className="bg-[#0a1630] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>ATLAS NΞO — Local‑first AI Trading Terminal</p>
          <a className="text-white/90 hover:text-white" href="/test">Diagnostics</a>
        </div>
      </footer>
    </div>
  )
}

export default App
