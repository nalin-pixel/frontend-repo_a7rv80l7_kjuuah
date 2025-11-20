import { motion } from 'framer-motion'
import { Star, Sparkles, HeartHandshake } from 'lucide-react'

const logos = [
  { name: 'Aurora', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Nebula', color: 'from-cyan-400 to-blue-500' },
  { name: 'Pulse', color: 'from-amber-400 to-orange-500' },
  { name: 'Zenith', color: 'from-emerald-400 to-teal-500' },
  { name: 'Orbit', color: 'from-violet-500 to-indigo-500' },
  { name: 'Voxel', color: 'from-sky-400 to-indigo-500' },
]

function FakeLogo({ name, color }) {
  return (
    <div className="group">
      <div className={`h-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 px-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20`}>
        <div className={`size-8 rounded-lg bg-gradient-to-br ${color}`} />
        <span className="text-slate-200/90 font-medium">{name}</span>
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45rem_35rem_at_top,rgba(56,189,248,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
              <Sparkles size={14} /> Trusted by ambitious teams
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Clients & Partners</h2>
            <p className="mt-3 text-slate-300/90 max-w-xl">We collaborate with startups and enterprises to ship bold, polished web products.</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 w-full">
            {logos.map((l) => (
              <motion.div key={l.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <FakeLogo name={l.name} color={l.color} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300/80">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Star size={14} className="text-amber-300" /> 50+ 5-star reviews
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <HeartHandshake size={14} className="text-emerald-300" /> Long-term partnerships
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles size={14} className="text-sky-300" /> Interaction-first design
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
