'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Understanding\nYour Vision',
    description:
      'Every great home begins with a conversation. We listen — to your lifestyle, investment goals, preferred communities, and budget. This forms a precise brief that drives everything that follows.',
    detail: 'Free consultation · No obligation · 30 minutes',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
    accent: 'Consultation',
  },
  {
    number: '02',
    phase: 'Curation',
    title: 'Your Personal\nShortlist',
    description:
      'Using market data, developer relationships, and insider access, we hand-pick properties that genuinely match your criteria. You receive a concise shortlist — never a dump of irrelevant listings.',
    detail: 'Data-driven · Developer access · 48-hour turnaround',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    accent: 'Research',
  },
  {
    number: '03',
    phase: 'Experience',
    title: 'Private\nProperty Tours',
    description:
      'We arrange exclusive viewings at your schedule. For ready properties, private on-site tours. For off-plan, immersive presentations with scale models, 3D walk-throughs, and developer Q&As.',
    detail: 'VIP access · Flexible scheduling · Private viewings',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    accent: 'Viewings',
  },
  {
    number: '04',
    phase: 'Analysis',
    title: 'Due Diligence\n& Valuation',
    description:
      'Before any offer, we conduct a full market valuation, comparable sales analysis, developer track record review, and yield projection. You decide with complete information — never a hunch.',
    detail: 'Market report · Yield analysis · Developer audit',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    accent: 'Intelligence',
  },
  {
    number: '05',
    phase: 'Negotiation',
    title: 'Securing\nthe Best Deal',
    description:
      'We negotiate on your behalf — price, payment plan, handover terms, and post-handover guarantees. Our developer relationships consistently unlock better terms than direct purchase.',
    detail: 'Expert negotiation · Payment plan · Best terms',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80',
    accent: 'Negotiation',
  },
  {
    number: '06',
    phase: 'Completion',
    title: 'Keys in\nYour Hand',
    description:
      'We manage the full legal process — MOU drafting, SPA review, DLD registration, mortgage coordination, and title deed issuance. On handover day, you receive your keys with zero paperwork stress.',
    detail: 'Legal support · DLD registration · Title deed',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=900&q=80',
    accent: 'Completion',
  },
]

export default function BuyingJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll 0→1 to step 0→5
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * steps.length), steps.length - 1)
      setActiveStep(idx)
    })
    return unsubscribe
  }, [scrollYProgress])

  const step = steps[activeStep]

  return (
    <section id="journey" className="relative bg-[#07090d] overflow-hidden w-full">
      {/* Section header */}
      <div className="container pt-28 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">The Buying Experience</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
            From Vision to<br />
            <span className="italic gold-text">Keys in Hand</span>
          </h2>
          <p className="mt-6 text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            A six-step journey designed around you — guided by specialists who have completed
            hundreds of transactions in Dubai&apos;s market.
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll container */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex overflow-hidden w-full">
          {/* Left panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 md:px-12 lg:px-20 relative z-10 overflow-hidden">
            {/* Step counter */}
            <div className="flex items-center gap-4 mb-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeStep}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="font-serif text-8xl md:text-[120px] font-light text-white/5 leading-none select-none"
                >
                  {step.number}
                </motion.span>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex flex-col gap-2 ml-2">
                {steps.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: i === activeStep ? 24 : 4,
                      backgroundColor: i === activeStep ? '#c9a84c' : i < activeStep ? '#c9a84c44' : '#ffffff15',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-0.5 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Phase tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`phase-${activeStep}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase px-4 py-1.5 mb-6">
                  {step.accent}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${activeStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6 whitespace-pre-line"
              >
                {step.title}
              </motion.h3>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-white/50 text-sm leading-relaxed mb-8 max-w-md"
              >
                {step.description}
              </motion.p>
            </AnimatePresence>

            {/* Detail tag */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`detail-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[11px] tracking-[0.25em] text-white/25 uppercase"
              >
                {step.detail}
              </motion.p>
            </AnimatePresence>

            {/* Step nav */}
            <div className="mt-10 flex items-center gap-2">
              {steps.map((s, i) => (
                <button
                  key={i}
                  className={`text-[10px] tracking-[0.2em] transition-all duration-300 ${
                    i === activeStep ? 'text-[#c9a84c]' : 'text-white/15 hover:text-white/40'
                  }`}
                  onClick={() => {
                    if (!containerRef.current) return
                    const el = containerRef.current
                    const top = el.offsetTop
                    const height = el.offsetHeight
                    const fraction = i / steps.length
                    window.scrollTo({ top: top + height * fraction, behavior: 'smooth' })
                  }}
                >
                  {s.number}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel — image */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeStep}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#07090d] via-[#07090d]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#07090d]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Phase label overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`overlay-${activeStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-12 right-12 text-right"
              >
                <p className="font-serif text-6xl font-light text-white/5">{step.phase}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA after journey */}
      <div className="container pb-24 text-center">
        <div className="gold-line mb-16" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm mb-6">Ready to begin your journey?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8954e] text-black text-xs font-semibold px-10 py-4 tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.25)]"
          >
            Start the Process
          </a>
        </motion.div>
      </div>
    </section>
  )
}
