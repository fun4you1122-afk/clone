'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Select Property',
    desc: 'Choose a qualifying property valued at AED 2M or above. We help you identify the right one for both lifestyle and visa eligibility.',
  },
  {
    n: '02',
    title: 'Complete Purchase',
    desc: 'We manage the full transaction — DLD registration, SPA review, mortgage coordination, and title deed issuance.',
  },
  {
    n: '03',
    title: 'Visa Application',
    desc: 'Our consultants guide your ICA application end to end. Zero paperwork stress, complete transparency throughout.',
  },
  {
    n: '04',
    title: '10-Year Residency',
    desc: "You and your family receive the UAE Golden Visa — long-term residency in one of the world's safest and most dynamic countries.",
  },
]

export default function GoldenVisa() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden bg-[#030507]">
      {/* Background skyline */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030507] via-[#030507]/60 to-[#030507]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-5">UAE Residency</p>
          <h2
            className="text-5xl md:text-7xl font-light text-white mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The Golden Visa{' '}
            <span className="italic gold-text">Path</span>
          </h2>
          <p className="text-white/32 text-sm max-w-xl mx-auto leading-relaxed">
            Properties from AED 2 million qualify for the UAE 10-Year Golden Visa —
            residency for you and your entire family, with full property ownership rights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border border-white/6 hover:border-[#c9a84c]/25 p-8 transition-all duration-500 hover:bg-[#c9a84c]/3"
            >
              <div
                className="text-5xl font-light gold-text mb-8 leading-none"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {s.n}
              </div>
              <h3 className="text-white font-medium text-sm tracking-wide mb-3">{s.title}</h3>
              <p className="text-white/32 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="/invest"
            className="inline-flex items-center gap-4 text-white/35 hover:text-[#c9a84c] text-[11px] tracking-[0.32em] uppercase transition-colors duration-300"
          >
            <span className="h-px w-10 bg-current" />
            Learn about eligibility
            <span className="h-px w-10 bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
