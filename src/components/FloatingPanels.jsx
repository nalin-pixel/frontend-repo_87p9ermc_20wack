import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const clips = [
  { id: 1, src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqNmd5b2p4YTRkOGZiZm1hbmtkM2RkN2IyZ3pyc3FqN3l5aGg0ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbnUQpnihPSIgIXuZv/giphy.gif' },
  { id: 2, src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGQ5N2x5YzhtZ3RocGoxdjltYmloamg5azdxNHFnb2h3MmR0aDAyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Le5vwsA5k1z0QHQxby/giphy.gif' },
  { id: 3, src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VtMDVxZ3N0a3RkeW9odWdjMm9wbnk5dXpkbHpveDY1b3R1eXN0cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FeT6vHqxD8LRWLu/giphy.gif' },
]

export default function FloatingPanels() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const combine = useTransform(scrollYProgress, [0.65, 1], [0, 1])

  return (
    <section ref={ref} id="showcase" className="relative min-h-[180vh] bg-[#05060a] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Dynamic LED Panels</h2>
        <p className="text-white/60 mt-3 max-w-2xl">Floating tiles showcase multiple campaigns. As you scroll, they magnetically merge into a single cinematic display.</p>
      </div>

      <div className="relative mt-16 h-[120vh]">
        {/* Floating small panels */}
        <div className="pointer-events-none absolute inset-0">
          {clips.map((clip, i) => (
            <motion.div
              key={clip.id}
              className="absolute rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-500/10"
              style={{
                top: `${10 + i * 18}%`,
                left: `${10 + i * 22}%`,
                width: 260,
                height: 160,
                rotate: i === 1 ? -6 : 8,
                y: useTransform(scrollYProgress, [0, 1], [0, -200 - i * 80]),
                x: useTransform(scrollYProgress, [0, 1], [0, 80 + i * 120]),
                scale: useTransform(scrollYProgress, [0.5, 0.9], [1, 0.5])
              }}
            >
              <img src={clip.src} alt="LED panel clip" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Combined big panel */}
        <motion.div
          className="sticky top-28 mx-auto w-[90%] md:w-[70%] aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/60 backdrop-blur"
          style={{ scale: combine }}
        >
          <video
            src="https://videos.pexels.com/video-files/3130362/3130362-uhd_2560_1440_24fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
