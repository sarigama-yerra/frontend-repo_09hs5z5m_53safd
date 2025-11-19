import { useEffect, useState } from 'react'

export default function DashboardPreview() {
  const [symbols, setSymbols] = useState([])
  const [status, setStatus] = useState('Loading...')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${baseUrl}/api/symbols`)
        if (!r.ok) throw new Error('Failed to fetch symbols')
        const data = await r.json()
        setSymbols(data.symbols || [])
        setStatus('Ready')
      } catch (e) {
        setStatus('Backend not reachable')
      }
    }
    load()
  }, [baseUrl])

  return (
    <section className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold">Unified Asset Universe</h2>
        <span className="text-xs text-blue-300/70">{status}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-blue-200/70">
              <th className="text-left py-2 pr-4">Symbol</th>
              <th className="text-left py-2 pr-4">Asset</th>
              <th className="text-left py-2 pr-4">Tick</th>
              <th className="text-left py-2 pr-4">Min Size</th>
            </tr>
          </thead>
          <tbody>
            {symbols.map((s, i) => (
              <tr key={i} className="border-t border-blue-500/10 text-blue-100">
                <td className="py-2 pr-4">{s.symbol}</td>
                <td className="py-2 pr-4">{s.asset}</td>
                <td className="py-2 pr-4">{s.tick}</td>
                <td className="py-2 pr-4">{s.min_size}</td>
              </tr>
            ))}
            {symbols.length === 0 && (
              <tr>
                <td colSpan="4" className="py-4 text-blue-300/70">No data. Start the backend or configure VITE_BACKEND_URL.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right">
        <a href="/test" className="text-xs text-blue-300 hover:text-blue-200">Diagnostics →</a>
      </div>
    </section>
  )
}
