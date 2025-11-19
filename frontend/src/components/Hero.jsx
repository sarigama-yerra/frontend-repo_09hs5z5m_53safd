import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[48rem] w-full overflow-hidden bg-[#0a1630]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tu1yYfmgsnYCLUIx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="backdrop-blur-sm/0">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(59,130,246,0.55)]">
              ATLAS NΞO
            </h1>
            <p className="mt-4 max-w-2xl text-blue-200/90 text-base sm:text-lg">
              Local‑first, multi‑asset, AI‑autonomous trading terminal. Real‑time market data, strategy sandbox, risk composer, and unified broker execution.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#terminal" className="inline-flex items-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-semibold transition-colors">Open Terminal</a>
              <a href="#ai" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-semibold transition-colors">AI Control Room</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1630]"></div>
    </section>
  )
}

export default Hero
