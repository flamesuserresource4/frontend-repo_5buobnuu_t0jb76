import { useEffect, useRef } from 'react'
import { Code2, Bot, Rocket, LineChart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Code2,
    title: 'Web Design & Development',
    desc: 'Marketing sites, landing pages, and web apps with premium craft and performance.'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Agentic workflows, lead enrichment, support copilots, and data pipelines.'
  },
  {
    icon: Rocket,
    title: 'Launch & Optimization',
    desc: 'From analytics to A/B tests, we continuously tune for conversion and speed.'
  },
  {
    icon: LineChart,
    title: 'Growth Enablement',
    desc: 'SEO, content systems, and CRM integrations that scale with your team.'
  },
]

export default function Services() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%'
        }
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="services" className="relative py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Full‑stack execution from strategy to ship. No fluff, just outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
