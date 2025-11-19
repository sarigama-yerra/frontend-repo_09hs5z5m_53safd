import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/40">
      <div className="absolute inset-0">
        {/* Replace with your Spline scene URL if desired */}
        <Spline scene="https://prod.spline.design/m3ZbqYcjm3g9XQwQ/scene.splinecode" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="relative z-10 flex h-full items-end p-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">ATLAS NΞO</h1>
          <p className="mt-2 text-blue-200 max-w-xl">
            Local-first, multi-asset, AI-autonomous trading terminal. Modular, extensible, and fast.
          </p>
        </div>
      </div>
    </section>
  )
}
