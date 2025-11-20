import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60rem_40rem_at_right,rgba(56,189,248,0.12),transparent)]" />
          <div className="relative z-10">
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-semibold text-white">
              Ready to build something remarkable?
            </motion.h3>
            <p className="mt-3 text-slate-300/90 max-w-2xl">
              Tell us about your goals and we’ll shape a proposal with timelines, scope, and budget.
            </p>
            <form className="mt-8 grid md:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
              <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
              <button type="submit" className="rounded-xl bg-white text-slate-900 font-medium px-5 py-3 hover:opacity-90">Get proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
