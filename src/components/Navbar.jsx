import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white font-bold">CF</span>
          <span className="font-semibold tracking-tight">coolfmdesigns</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white text-sm px-4 py-2 hover:bg-slate-800 transition-colors">Get a quote</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white/80">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700">{l.label}</a>
            ))}
            <a href="#contact" className="mt-2 inline-flex items-center rounded-md bg-slate-900 text-white text-sm px-4 py-2 w-max">Get a quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
