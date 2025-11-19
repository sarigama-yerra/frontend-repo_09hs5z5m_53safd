import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import DashboardPreview from './components/DashboardPreview'
import StrategySandbox from './components/StrategySandbox'
import { useEffect } from 'react'
import { useAtlasStore } from './store/useAtlasStore'

function App() {
  const { fetchSymbols, fetchStrategies, fetchLogs } = useAtlasStore()

  useEffect(() => {
    fetchSymbols()
    fetchStrategies()
    fetchLogs()
  }, [fetchSymbols, fetchStrategies, fetchLogs])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl p-6 md:p-10 space-y-8">
        <Hero />
        <FeatureGrid />
        <DashboardPreview />
        <StrategySandbox />
        <footer className="pt-4 text-center text-xs text-blue-300/60">
          <a href="/test" className="hover:text-blue-200">Open diagnostics</a>
        </footer>
      </div>
    </div>
  )
}

export default App
