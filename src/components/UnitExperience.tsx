'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const stages = [
  {
    id: 'approach',
    label: 'Approaching',
    eyeline: 'You spot it from afar.',
    title: 'Your Building\nComes into View',
    description: 'The lobby glass catches the light. You already know. This is it.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90',
    depth: 1.08,
    blur: 0,
  },
  {
    id: 'entrance',
    label: 'The Entrance',
    eyeline: 'You reach the door.',
    title: 'Private.\nExclusive. Yours.',
    description: 'The concierge nods. The entrance whispers something about belonging here.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90',
    depth: 1.05,
    blur: 0,
  },
  {
    id: 'key',
    label: 'The Key',
    eyeline: 'Your hand reaches into your pocket.',
    title: 'The Key\nIs Yours.',
    description: 'One turn. The sound of a new chapter beginning.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=90',
    depth: 1.04,
    blur: 0,
    showKey: true,
  },
  {
    id: 'inside',
    label: 'Step Inside',
    eyeline: 'The door swings open.',
    title: 'Light Floods\nEvery Corner',
    description: 'Floor-to-ceiling windows. Open-plan living. The smell of possibility.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
    depth: 1.03,
    blur: 0,
  },
  {
    id: 'view',
    label: 'The View',
    eyeline: 'You walk to the window.',
    title: 'Dubai\nAt Your Feet.',
    description: 'This is what you worked for. This is what KYR found for you.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
    depth: 1.0,
    blur: 0,
  },
]

function KeyIcon({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -25 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[28%] left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        >
          <svg width="120" height="48" viewBox="0 0 120 48" fill="none" className="drop-shadow-2xl">
            {/* Key bow */}
            <circle cx="20" cy="24" r="16" stroke="#c9a84c" strokeWidth="3" fill="none" opacity="0.9"/>
            <circle cx="20" cy="24" r="8" stroke="#c9a84c" strokeWidth="2" fill="none" opacity="0.5"/>
            {/* Key blade */}
            <line x1="36" y1="24" x2="108" y2="24" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
            {/* Key teeth */}
            <line x1="72" y1="24" x2="72" y2="34" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
            <line x1="86" y1="24" x2="86" y2="30" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
            <line x1="98" y1="24" x2="98" y2="34" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
            {/* Shimmer */}
            <line x1="36" y1="24" x2="108" y2="24" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
          </svg>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mt-3"
          >
            Your keys. Your home.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function UnitExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * stages.length), stages.length - 1)
      setActiveIdx(idx)
    })
    return unsubscribe
  }, [scrollYProgress])

  const stage = stages[activeIdx]

  // Parallax for the active image
  const bgScale = useTransform(
    scrollYProgress,
    stages.map((_, i) => i / stages.length),
    stages.map((s) => s.depth)
  )

  return (
    <section className="relative w-full bg-[#07090d]">
      {/* Section intro */}
      <div className="container pt-28 pb-0 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-5"
        >
          The Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-light text-white mb-4"
        >
          Walk Through<br />
          <span className="italic gold-text">Before You Decide</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/35 text-sm max-w-md mx-auto mb-2"
        >
          Scroll and experience the journey — from first sighting to turning your key.
        </motion.p>
      </div>

      {/* Sticky immersive scroll */}
      <div
        ref={containerRef}
        style={{ height: `${stages.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Background images — layered, crossfade */}
          <div className="absolute inset-0">
            {stages.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{
                  backgroundImage: `url(${s.image})`,
                  scale: bgScale,
                }}
                animate={{
                  opacity: i === activeIdx ? 1 : 0,
                  scale: i === activeIdx ? 1 : 1.04,
                }}
                transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}

            {/* Depth vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090d]/60 via-black/20 to-[#07090d]/80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090d]/50 via-transparent to-[#07090d]/50 pointer-events-none" />

            {/* Radial depth spot — lighter centre = depth focus */}
            <motion.div
              animate={{ opacity: activeIdx === 2 ? 0.6 : 0.2 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 60% at 50% 50%, transparent 40%, rgba(7,9,13,0.7) 100%)',
              }}
            />
          </div>

          {/* Key animation overlay (stage 3 only) */}
          <KeyIcon active={activeIdx === 2} />

          {/* Stage counter pills */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {stages.map((s, i) => (
              <motion.button
                key={s.id}
                animate={{
                  width: i === activeIdx ? 32 : 8,
                  backgroundColor: i === activeIdx ? '#c9a84c' : i < activeIdx ? '#c9a84c66' : '#ffffff22',
                }}
                transition={{ duration: 0.35 }}
                className="h-1 rounded-full"
                onClick={() => {
                  if (!containerRef.current) return
                  const el = containerRef.current
                  const fraction = i / stages.length
                  window.scrollTo({ top: el.offsetTop + el.offsetHeight * fraction + 10, behavior: 'smooth' })
                }}
              />
            ))}
          </div>

          {/* Stage label — top */}
          <div className="absolute top-8 right-8 z-20 text-right">
            <AnimatePresence mode="wait">
              <motion.p
                key={`label-${activeIdx}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
                className="text-[10px] tracking-[0.35em] uppercase text-white/30"
              >
                {String(activeIdx + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')} — {stage.label}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Main content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-20 z-10">
            <div className="container">
              {/* Eyeline narration */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`eye-${activeIdx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#c9a84c]/70 text-xs tracking-[0.3em] uppercase mb-4 italic"
                >
                  {stage.eyeline}
                </motion.p>
              </AnimatePresence>

              {/* Main title */}
              <div className="overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`title-${activeIdx}`}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-40%', opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight whitespace-pre-line"
                  >
                    {stage.title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Description + CTA row */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeIdx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/50 text-sm max-w-md leading-relaxed"
                  >
                    {stage.description}
                  </motion.p>
                </AnimatePresence>

                {activeIdx === stages.length - 1 && (
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex-shrink-0 inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8954e] text-black text-xs font-bold px-8 py-4 tracking-[0.25em] uppercase transition-colors duration-300"
                  >
                    Book a Viewing
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Scroll hint (first stage only) */}
          <AnimatePresence>
            {activeIdx === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ scaleY: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent origin-top"
                />
                <span className="text-[9px] tracking-[0.3em] text-white/25 uppercase">Scroll</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
