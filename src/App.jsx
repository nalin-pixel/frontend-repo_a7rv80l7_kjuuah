import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(75rem_45rem_at_top,rgba(56,189,248,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_bottom,rgba(99,102,241,0.06),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <CTA />

      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-400/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NovaSites — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
