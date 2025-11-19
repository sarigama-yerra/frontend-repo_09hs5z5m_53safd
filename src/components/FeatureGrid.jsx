import { Cpu, LineChart, PlugZap, ShieldCheck, Zap, Database, Rocket, MonitorPlay } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Local-first AI',
    desc: 'Run TF.js models locally for privacy and low latency.'
  },
  { icon: PlugZap, title: 'Plugin Architecture', desc: 'Drop-in services: data, AI, broker, backtester.' },
  { icon: LineChart, title: 'Multi-Asset', desc: 'Forex, crypto, stocks, futures, and more with one abstraction.' },
  { icon: ShieldCheck, title: 'Risk Composer', desc: 'All orders flow through unified constraints and checks.' },
  { icon: Database, title: 'Mongo-backed', desc: 'Persist strategies, logs, and state for auditability.' },
  { icon: Zap, title: 'Low Latency', desc: 'Ticks <30ms, orders <150ms, inference <10ms targets.' },
  { icon: MonitorPlay, title: 'Strategy Sandbox', desc: 'Visual blocks and code editor to compose strategies.' },
  { icon: Rocket, title: 'Electron Ready', desc: 'Package as a desktop terminal for macOS/Win/Linux.' },
]

export default function FeatureGrid() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <div key={i} className="rounded-2xl border border-blue-500/20 bg-slate-900/40 p-4 hover:bg-slate-900/60 transition-colors">
          <div className="flex items-center gap-3">
            <f.icon className="h-5 w-5 text-blue-400" />
            <h3 className="font-semibold text-white">{f.title}</h3>
          </div>
          <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
