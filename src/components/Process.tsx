'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

const steps = [
  {
    n: '01', phase: 'Discovery', title: 'Understanding\nYour Vision',
    desc: "Every great home begins with a conversation. We listen — to your lifestyle, investment goals, preferred communities, and budget. This forms a precise brief that drives everything that follows.",
    detail: 'Free consultation · No obligation · 30 minutes',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
  },
  {
    n: '02', phase: 'Curation', title: 'Your Personal\nShortlist',
    desc: "Using market data, developer relationships, and insider access, we hand-pick properties that genuinely match your criteria. You receive a concise shortlist — never a dump of irrelevant listings.",
    detail: 'Data-driven · Developer access · 48-hour turnaround',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
  },
  {
    n: '03', phase: 'Experience', title: 'Private\nProperty Tours',
    desc: "We arrange exclusive viewings at your schedule — private on-site tours for ready properties and immersive 3D presentations with developer Q&As for off-plan.",
    detail: 'VIP access · Flexible scheduling · Private viewings',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  },
  {
    n: '04', phase: 'Analysis', title: 'Due Diligence\n& Valuation',
    desc: "Before any offer, we conduct a full market valuation, comparable sales analysis, developer track record review, and yield projection. You decide with complete information — never a hunch.",
    detail: 'Market report · Yield analysis · Developer audit',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
  },
  {
    n: '05', phase: 'Negotiation', title: 'Securing\nthe Best Deal',
    desc: "We negotiate on your behalf — price, payment plan, handover terms, and post-handover guarantees. Our developer relationships consistently unlock better terms than direct purchase.",
    detail: 'Expert negotiation · Payment plan · Best terms',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80',
  },
  {
    n: '06', phase: 'Completion', title: 'Keys in\nYour Hand',
    desc: "We manage the full legal process — MOU drafting, SPA review, DLD registration, mortgage coordination, and title deed issuance. On handover day, you receive your keys with zero paperwork stress.",
    detail: 'Legal support · DLD registration · Title deed',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=900&q=80',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', v => {
      setActive(Math.min(Math.floor(v * steps.length), steps.length - 1))
    })
  }, [scrollYProgress])

  const step = steps[active]

  return (
    <section id="process" className="relative bg-[#0b0e13]">
      {/* Header */}
      <div className="container pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-5">The Buying Experience</p>
          <h2
            className="text-4xl md:text-6xl font-light text-white mb-5"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            From Vision to<br />
            <span className="italic gold-text">Keys in Hand</span>
          </h2>
          <p className="text-white/32 text-sm max-w-md mx-auto leading-relaxed">
            A six-step journey guided by specialists who have completed hundreds of transactions in Dubai's market.
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll */}
      <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex overflow-hidden">

          {/* Left panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 z-10 relative">
            <div className="flex items-start gap-5 mb-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="shrink-0 leading-none select-none text-white/4"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(80px, 12vw, 130px)', fontWeight: 300 }}
                >
                  {step.n}
                </motion.span>
              </AnimatePresence>
              <div className="flex flex-col gap-[7px] pt-5">
                {steps.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: i === active ? 26 : 4,
                      backgroundColor: i === active ? '#c9a84c' : i < active ? '#c9a84c55' : '#ffffff18',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-0.5 rounded-full"
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.span
                key={`phase-${active}`}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="inline-block self-start border border-[#c9a84c]/25 text-[#c9a84c] text-[10px] tracking-[0.38em] uppercase px-4 py-1.5 mb-6"
              >
                {step.phase}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h3
                key={`t-${active}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-6 whitespace-pre-line"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {step.title}
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`d-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="text-white/42 text-sm leading-relaxed mb-8 max-w-[400px]"
              >
                {step.desc}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`det-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[11px] tracking-[0.28em] text-white/18 uppercase"
              >
                {step.detail}
              </motion.p>
            </AnimatePresence>

            {/* Step nav */}
            <div className="mt-10 flex items-center gap-3">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = containerRef.current
                    if (!el) return
                    window.scrollTo({ top: el.offsetTop + el.offsetHeight * (i / steps.length), behavior: 'smooth' })
                  }}
                  className={`text-[10px] tracking-[0.22em] transition-colors duration-300 ${
                    i === active ? 'text-[#c9a84c]' : 'text-white/15 hover:text-white/40'
                  }`}
                >
                  {s.n}
                </button>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e13] via-[#0b0e13]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#0b0e13]/22" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container pb-24 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/28 to-transparent mb-16" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-white/28 text-sm mb-6">Ready to begin your journey?</p>
          <a
            href="/contact"
            className="inline-block bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold px-10 py-4 tracking-[0.28em] uppercase transition-colors duration-300"
          >
            Start the Process
          </a>
        </motion.div>
      </div>
    </section>
  )
}
