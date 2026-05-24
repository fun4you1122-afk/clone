'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Buy',
    sub: 'Find Your Property',
    desc: 'From off-plan investments to ready luxury residences — we match you with the right property using market intelligence and exclusive developer relationships.',
    href: '/opportunities',
    cta: 'Browse Properties',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Rent',
    sub: 'Premium Rentals',
    desc: "Curated rental listings across Dubai's most desirable communities. We handle everything from shortlisting to contract, so you can move without the hassle.",
    href: '/opportunities',
    cta: 'View Rentals',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Invest',
    sub: 'Data-Driven Returns',
    desc: 'ROI analysis, yield projections, and access to exclusive off-plan launches — engineered to maximise your investment in one of the world\'s fastest-growing markets.',
    href: '/invest',
    cta: 'Explore Investment',
  },
]

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-[#0b0e13] border-y border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4"
          >
            How We Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Full-Service Real Estate
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-white/7 hover:border-[#c9a84c]/30 p-10 transition-all duration-500 hover:bg-[#c9a84c]/3"
            >
              <div className="text-[#c9a84c]/60 group-hover:text-[#c9a84c] mb-8 transition-colors duration-300">
                {s.icon}
              </div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/22 mb-2">{s.sub}</p>
              <h3
                className="text-3xl font-light text-white mb-5"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {s.title}
              </h3>
              <p className="text-white/38 text-sm leading-relaxed mb-8">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#c9a84c]/55 group-hover:text-[#c9a84c] transition-colors duration-300"
              >
                {s.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
