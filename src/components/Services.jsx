import { motion } from 'framer-motion'
import { MousePointerClick, PanelsTopLeft, LayoutDashboard, Rocket } from 'lucide-react'

const services = [
  {
    icon: MousePointerClick,
    title: 'Interactions & Motion',
    desc: 'Micro-interactions, scroll choreography, and delightful easter eggs that drive engagement.',
  },
  {
    icon: PanelsTopLeft,
    title: '3D & WebGL',
    desc: 'Spline scenes, shader magic, and 3D storytelling tailor-made for your brand.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Apps & CMS',
    desc: 'From landing pages to full apps, with blazing fast performance and simple editing.',
  },
  {
    icon: Rocket,
    title: 'SEO & Launch',
    desc: 'Technical SEO, analytics, and conversion strategy to make launches land big.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45rem_35rem_at_bottom,rgba(99,102,241,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
          >
            What we do
          </motion.h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl">A full-stack studio building premium web experiences that feel alive and ship fast.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
