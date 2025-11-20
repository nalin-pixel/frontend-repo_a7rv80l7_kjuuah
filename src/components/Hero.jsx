import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Booking new projects for Q1 — limited slots
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white tracking-tight">
            Web experiences that convert and delight
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-200/90 max-w-xl">
            We design and build high‑impact websites with premium interactions, 3D motion, and performance baked in.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:opacity-90">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 text-white border border-white/15 hover:bg-white/15">
              View our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
