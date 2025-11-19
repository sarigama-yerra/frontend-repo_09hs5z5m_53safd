import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-4">
      <div className="text-xs text-blue-200/70">{label}</div>
      <div className="text-white text-lg font-semibold mt-1">{value}</div>
    </div>
  )
}

function DashboardPreview() {
  const [symbols, setSymbols] = useState([])
  const [db, setDb] = useState('checking...')

  useEffect(() => {
    fetch(`${BACKEND}/api/symbols`).then(r => r.json()).then(setSymbols).catch(() => setSymbols([]))
    fetch(`${BACKEND}/test`).then(r => r.json()).then((d) => setDb(d.database)).catch(() => setDb('unavailable'))
  }, [])

  return (
    <section className="bg-[#0a1630] py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Unified Asset Universe</h2>
            <span className="text-xs text-blue-200/70">Sample</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-blue-200/70">
                <tr>
                  <th className="text-left px-3 py-2 font-medium">Symbol</th>
                  <th className="text-left px-3 py-2 font-medium">Asset</th>
                  <th className="text-left px-3 py-2 font-medium">Brokers</th>
                  <th className="text-left px-3 py-2 font-medium">Leverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {symbols.map((s) => (
                  <tr key={s.symbol} className="text-blue-100/90">
                    <td className="px-3 py-2 font-mono text-white">{s.symbol}</td>
                    <td className="px-3 py-2">{s.meta?.asset}</td>
                    <td className="px-3 py-2">{(s.meta?.broker_availability||[]).join(', ')}</td>
                    <td className="px-3 py-2">{s.meta?.leverage}x</td>
                  </tr>
                ))}
                {symbols.length === 0 && (
                  <tr>
                    <td className="px-3 py-6 text-center text-blue-200/60" colSpan={4}>No data yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">System</h2>
            <span className="text-xs text-blue-200/70">Live</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Backend" value={BACKEND.replace('https://','').replace('http://','')} />
            <Stat label="Database" value={db} />
            <Stat label="Modules" value="Symbols · AI · Orders · Logs" />
            <Stat label="Theme" value="Blueprint" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
