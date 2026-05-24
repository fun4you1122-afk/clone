'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

const stages = [
  {
    id: 'approach',
    step: '01',
    label: 'Approaching',
    eyeline: 'You spot it from afar.',
    title: 'Your Building\nComes Into View',
    desc: 'The lobby glass catches the light. You already know. This is it.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90',
  },
  {
    id: 'entrance',
    step: '02',
    label: 'The Entrance',
    eyeline: 'You push through the door.',
    title: 'Private.\nExclusive. Yours.',
    desc: 'Marble floors. High ceilings. The entrance whispers something about belonging here.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
  },
  {
    id: 'key',
    step: '03',
    label: 'The Key',
    eyeline: 'Your hand reaches into your pocket.',
    title: 'The Key\nIs Yours.',
    desc: 'One turn. The sound of a new chapter beginning.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=90',
    showKey: true,
  },
  {
    id: 'inside',
    step: '04',
    label: 'Step Inside',
    eyeline: 'The door swings open.',
    title: 'Light Floods\nEvery Corner',
    desc: 'Floor-to-ceiling windows. Open-plan living. The smell of possibility.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90',
  },
  {
    id: 'view',
    step: '05',
    label: 'The View',
    eyeline: 'You walk to the window.',
    title: 'Dubai\nAt Your Feet.',
    desc: 'This is what you worked for. This is what KYR found for you.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', v => {
      setActive(Math.min(Math.floor(v * stages.length), stages.length - 1))
    })
  }, [scrollYProgress])

  const stage = stages[active]

  return (
    <section className="relative bg-[#030507]">
      {/* Intro header */}
      <div className="container pt-28 pb-2 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-5"
        >
          The Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light text-white mb-4"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Walk Through<br />
          <span className="italic gold-text">Before You Decide</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/32 text-sm max-w-sm mx-auto"
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

          {/* Background images */}
          <div className="absolute inset-0">
            {stages.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
                animate={{ opacity: i === active ? 1 : 0 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030507]/55 via-black/15 to-[#030507]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030507]/40 via-transparent to-[#030507]/40" />
          </div>

          {/* Gold key SVG on stage 3 */}
          <AnimatePresence>
            {active === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[30%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              >
                <svg width="130" height="52" viewBox="0 0 130 52" fill="none">
                  <circle cx="22" cy="26" r="18" stroke="#c9a84c" strokeWidth="2.5" fill="none" opacity="0.85" />
                  <circle cx="22" cy="26" r="9" stroke="#c9a84c" strokeWidth="1.5" fill="none" opacity="0.45" />
                  <line x1="40" y1="26" x2="118" y2="26" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                  <line x1="78" y1="26" x2="78" y2="37" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                  <line x1="93" y1="26" x2="93" y2="33" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                  <line x1="107" y1="26" x2="107" y2="37" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                  <line x1="40" y1="26" x2="118" y2="26" stroke="white" strokeWidth="1" opacity="0.25" />
                </svg>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center text-[#c9a84c]/70 text-[10px] tracking-[0.42em] uppercase mt-3"
                >
                  Your keys. Your home.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage indicator pills */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {stages.map((s, i) => (
              <motion.button
                key={s.id}
                animate={{
                  width: i === active ? 32 : 8,
                  backgroundColor: i === active ? '#c9a84c' : i < active ? '#c9a84c55' : '#ffffff22',
                }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full"
                onClick={() => {
                  const el = containerRef.current
                  if (!el) return
                  window.scrollTo({ top: el.offsetTop + el.offsetHeight * (i / stages.length) + 10, behavior: 'smooth' })
                }}
              />
            ))}
          </div>

          {/* Step counter */}
          <div className="absolute top-8 right-8 z-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={`lbl-${active}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="text-[10px] tracking-[0.35em] uppercase text-white/28"
              >
                {String(active + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')} — {stage.label}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Main content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-20 z-10">
            <div className="container">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`eye-${active}`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[#c9a84c]/65 text-[11px] tracking-[0.32em] uppercase mb-4 italic"
                >
                  {stage.eyeline}
                </motion.p>
              </AnimatePresence>

              <div className="overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`title-${active}`}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-35%', opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {stage.title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="text-white/45 text-sm max-w-sm leading-relaxed"
                  >
                    {stage.desc}
                  </motion.p>
                </AnimatePresence>

                {active === stages.length - 1 && (
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="shrink-0 inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold px-8 py-4 tracking-[0.28em] uppercase transition-colors duration-300"
                  >
                    Book a Viewing
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <AnimatePresence>
            {active === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-9 right-8 z-20 flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ scaleY: [1, 0.25, 1] }}
                  transition={{ repeat: Infinity, duration: 1.7 }}
                  className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent origin-top"
                />
                <span className="text-[9px] tracking-[0.3em] text-white/22 uppercase">Scroll</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
