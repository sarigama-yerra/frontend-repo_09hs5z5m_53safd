import { useEffect, useState } from 'react'
import { useAtlasStore } from '../store/useAtlasStore'

export default function StrategySandbox() {
  const { strategies, fetchStrategies, saveStrategy, getSignal, routeOrder, fetchLogs, logs } = useAtlasStore()
  const [name, setName] = useState('My Strategy')
  const [description, setDescription] = useState('Demo strategy')
  const [mode, setMode] = useState('paper')
  const [symbol, setSymbol] = useState('BTC/USDT')
  const [signal, setSignal] = useState(null)
  const [orderResp, setOrderResp] = useState(null)

  useEffect(() => {
    fetchStrategies()
    fetchLogs()
  }, [fetchStrategies, fetchLogs])

  const handleSave = async () => {
    const payload = { name, description, mode, blocks: [], indicators: [], ml: {} }
    await saveStrategy(payload)
  }

  const handleSignal = async () => {
    const s = await getSignal(symbol, '1m', { rsi: 14 })
    setSignal(s)
  }

  const handlePaperTrade = async () => {
    const order = { side: 'buy', symbol, size: 1, type: 'market', broker: 'paper' }
    const r = await routeOrder(order)
    setOrderResp(r)
  }

  return (
    <section className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-4 space-y-3">
        <h3 className="text-white font-semibold">Compose Strategy</h3>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full rounded bg-slate-800/80 border border-blue-500/20 p-2 text-sm" />
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="w-full rounded bg-slate-800/80 border border-blue-500/20 p-2 text-sm" />
        <select value={mode} onChange={e=>setMode(e.target.value)} className="w-full rounded bg-slate-800/80 border border-blue-500/20 p-2 text-sm">
          <option value="paper">Paper</option>
          <option value="live">Live</option>
          <option value="backtest">Backtest</option>
        </select>
        <button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded p-2 text-sm">Save Strategy</button>
        <div className="text-xs text-blue-300/70">Saved: {strategies.length}</div>
      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-4 space-y-3">
        <h3 className="text-white font-semibold">AI Signal</h3>
        <input value={symbol} onChange={e=>setSymbol(e.target.value)} className="w-full rounded bg-slate-800/80 border border-blue-500/20 p-2 text-sm" />
        <div className="flex gap-2">
          <button onClick={handleSignal} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded p-2 text-sm">Get Signal</button>
          <button onClick={handlePaperTrade} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded p-2 text-sm">Paper Buy</button>
        </div>
        {signal && (
          <pre className="text-xs bg-slate-950/70 border border-blue-500/10 rounded p-2 text-blue-200 overflow-auto max-h-48">{JSON.stringify(signal, null, 2)}</pre>
        )}
        {orderResp && (
          <pre className="text-xs bg-slate-950/70 border border-blue-500/10 rounded p-2 text-blue-200 overflow-auto max-h-48">{JSON.stringify(orderResp, null, 2)}</pre>
        )}
      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-4 space-y-3">
        <h3 className="text-white font-semibold">Recent Logs</h3>
        <div className="space-y-2 max-h-80 overflow-auto pr-1">
          {logs.map((l, i) => (
            <div key={i} className="text-xs bg-slate-950/70 border border-blue-500/10 rounded p-2 text-blue-200">
              <div className="font-mono">{l.time} • {l.type}</div>
              <pre className="mt-1 whitespace-pre-wrap break-all">{JSON.stringify(l, null, 2)}</pre>
            </div>
          ))}
          {logs.length === 0 && <div className="text-xs text-blue-300/70">No logs yet.</div>}
        </div>
      </div>
    </section>
  )
}
