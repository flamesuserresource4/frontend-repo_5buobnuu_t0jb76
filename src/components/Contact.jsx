import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a real project, post to backend. For now, simulate.
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks — we will get back within 24h!')
  }

  return (
    <section id="contact" className="py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Tell us about your project</h2>
          <p className="mt-3 text-slate-600">We typically reply within one business day.</p>
        </div>
        <form onSubmit={submit} className="mt-10 grid grid-cols-1 gap-4 max-w-2xl">
          <input required placeholder="Your name" className="h-12 rounded-lg border border-slate-200 px-4 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <input required type="email" placeholder="Email" className="h-12 rounded-lg border border-slate-200 px-4 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <input placeholder="Company / Website" className="h-12 rounded-lg border border-slate-200 px-4 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <textarea required placeholder="What do you need?" rows={5} className="rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center rounded-md bg-slate-900 text-white text-sm px-5 py-3 hover:bg-slate-800 transition-colors">Send message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
