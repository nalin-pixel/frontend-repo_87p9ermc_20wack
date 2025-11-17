import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0b10] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,255,0.12)_0%,rgba(10,11,16,0)_60%),radial-gradient(40%_40%_at_80%_50%,rgba(255,0,120,0.12)_0%,rgba(10,11,16,0)_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,255,255,0.35)]"
        >
          LED Advertising, Reinvented
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl"
        >
          We craft stunning, high-impact LED campaigns for brands who want to be seen. Futuristic visuals, measurable results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#showcase" className="pointer-events-auto inline-flex items-center rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-[#0a0b10] font-semibold px-5 py-3 transition-colors">Explore Showcase</a>
          <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-3 transition-colors">Get a Quote</a>
        </motion.div>
      </div>
    </section>
  )
}
