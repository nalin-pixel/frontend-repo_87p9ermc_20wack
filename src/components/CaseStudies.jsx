import { motion } from 'framer-motion'

const items = [
  {
    title: 'Skyline Mall Wrap',
    desc: 'Immersive 120m LED facade takeover. 1.8M impressions in 7 days.',
  },
  {
    title: 'Neon Night Rally',
    desc: 'Mobile LED convoy for product drop. 250% uplift in footfall.',
  },
  {
    title: 'Quantum Expo Stage',
    desc: 'Interactive LED stage with live-reactive visuals.',
  },
]

export default function CaseStudies() {
  return (
    <section id="solutions" className="bg-[#070810] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl border border-white/10 p-6 bg-gradient-to-b from-white/[0.02] to-transparent"
            >
              <h3 className="text-white text-xl font-semibold">{it.title}</h3>
              <p className="text-white/60 mt-2">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
