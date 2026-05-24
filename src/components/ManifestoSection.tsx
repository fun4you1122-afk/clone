'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Transactions' },
  { value: 'AED 2B+', label: 'Portfolio' },
  { value: '97%', label: 'Satisfaction' },
  { value: '15+', label: 'Developer Partners' },
]

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}&nbsp;
      </motion.span>
    </span>
  )
}

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ['0%', '100%'])

  const line1 = ['We', 'believe', 'real', 'estate', 'advice']
  const line2 = ['should', 'be', 'built', 'on', 'data,']
  const line3 = ['not', 'guesswork.']

  return (
    <section ref={ref} className="section-padding bg-[#07090d] relative overflow-hidden w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        {/* Manifesto text */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-10"
          >
            Our Belief
          </motion.p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-white/90">
            {line1.map((w, i) => <AnimatedWord key={w + i} word={w} delay={i * 0.06} />)}
            <br />
            {line2.map((w, i) => <AnimatedWord key={w + i} word={w} delay={(line1.length + i) * 0.06} />)}
            <br />
            {line3.map((w, i) => (
              <span key={w + i} className="inline-block overflow-hidden">
                <motion.span
                  className={`inline-block ${i === 0 ? '' : 'gold-text font-medium'}`}
                  initial={{ y: '110%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: (line1.length + line2.length + i) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Animated gold line */}
          <div className="mt-16 flex justify-center">
            <motion.div
              style={{ opacity: lineOpacity, width: lineWidth }}
              className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent max-w-xs"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#07090d] p-10 text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-light gold-text mb-3">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
