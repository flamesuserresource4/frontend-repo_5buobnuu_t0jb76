import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)
  const badgeRef = useRef(null)
  const h1Ref = useRef(null)
  const pRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { y: 10, opacity: 0, duration: 0.5 })
        .from(h1Ref.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.2')
        .from(pRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.35')
        .from(ctaRef.current?.children, { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')

      // gentle float for badge
      gsap.to(badgeRef.current, {
        y: 4,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <span ref={badgeRef} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 backdrop-blur-md text-slate-700 ring-1 ring-black/5">AI automation & web experiences</span>
          <h1 ref={h1Ref} className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We craft high-converting sites and automate the busywork
          </h1>
          <p ref={pRef} className="mt-4 text-lg text-slate-700">
            coolfmdesigns blends world‑class design, GSAP‑smooth interactions, and production‑ready AI automations to ship results your customers feel.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white text-sm px-5 py-3 hover:bg-slate-800 transition-colors">Get a proposal</a>
            <a href="#work" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur-md text-slate-900 text-sm px-5 py-3 ring-1 ring-black/5 hover:bg-white">See our work</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
    </section>
  )
}
