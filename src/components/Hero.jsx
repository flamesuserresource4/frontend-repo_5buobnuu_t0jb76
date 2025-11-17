import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 backdrop-blur-md text-slate-700 ring-1 ring-black/5">AI automation & web experiences</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We craft high-converting sites and automate the busywork
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            coolfmdesigns blends world‑class design, GSAP‑smooth interactions, and production‑ready AI automations to ship results your customers feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white text-sm px-5 py-3 hover:bg-slate-800 transition-colors">Get a proposal</a>
            <a href="#work" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur-md text-slate-900 text-sm px-5 py-3 ring-1 ring-black/5 hover:bg-white">See our work</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
    </section>
  )
}
