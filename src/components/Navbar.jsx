import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Rocket className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">NovaSites</p>
              <p className="text-xs text-slate-300/70 -mt-0.5">Web Builder Agency</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Work</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors">
              <Sparkles size={16} />
              Start a project
            </button>
          </div>

          <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <NavLink>Work</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </div>
            <button className="w-full inline-flex justify-center items-center gap-2 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors">
              <Sparkles size={16} />
              Start a project
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
