import { Cpu, ShieldCheck, Layers3, Zap } from 'lucide-react'

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-blue-100/80 leading-relaxed">{children}</p>
    </div>
  )
}

function FeatureGrid() {
  return (
    <section className="bg-[#0a1630] py-12 sm:py-16 border-t border-white/10" id="terminal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={Cpu} title="Local‑first AI">
            TensorFlow.js models run on-device. Autonomy without cloud dependency.
          </FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Risk Composer">
            Enforce position, leverage, and exposure rules before any order routes.
          </FeatureCard>
          <FeatureCard icon={Layers3} title="Modular Core">
            Plug‑in strategies, brokers, data feeds, and models with a unified API.
          </FeatureCard>
          <FeatureCard icon={Zap} title="Low‑latency">
            Optimized streams and rendering for sub‑30ms market updates.
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
