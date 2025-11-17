import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const root = useRef(null)

  const items = [
    {
      title: 'Fintech Growth Site',
      tag: 'Next.js • Headless CMS • GSAP',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'AI Support Copilot',
      tag: 'OpenAI • Agents • RAG',
      img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'SaaS Marketing Revamp',
      tag: 'Design System • SEO • A/B',
      img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%'
        }
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="work" className="py-24 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A few recent builds across web and AI.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <figure key={p.title} className="work-card overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
              <figcaption className="p-5">
                <div className="text-sm text-slate-500">{p.tag}</div>
                <div className="mt-1 font-semibold text-slate-900">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
