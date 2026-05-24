'use client'

import { motion } from 'framer-motion'

const reasons = [
  { title: '0% Income Tax', desc: 'No personal income tax, capital gains tax, or inheritance tax on real estate.' },
  { title: 'Golden Visa', desc: 'Properties from AED 2M qualify for the UAE 10-year residency visa.' },
  { title: 'High Yields', desc: 'Dubai averages 6–9% gross rental yields — among the highest globally.' },
  { title: 'Freehold Ownership', desc: 'Full property ownership rights for foreign nationals in designated zones.' },
  { title: 'Off-Plan Returns', desc: 'Early entry into new projects at pre-launch prices with flexible payment plans.' },
  { title: 'Stable Currency', desc: 'The UAE dirham is pegged to the USD, providing currency stability.' },
]

export default function InvestPage() {
  return (
    <div className="bg-[#030507] pt-28">
      <div className="container py-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4">Investment</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>Why Invest<br /><span className="italic gold-text">in Dubai</span></motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/35 text-sm mb-20 max-w-xl">Dubai offers a rare combination: high yields, zero tax, strong legal protections, and a globally connected lifestyle.</motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-white/7 hover:border-[#c9a84c]/25 p-8 transition-all duration-400 hover:bg-[#c9a84c]/3">
              <h3 className="text-white font-medium text-sm tracking-wide mb-3">{r.title}</h3>
              <p className="text-white/32 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="border border-white/6 p-12 text-center">
          <p className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-5">Start Investing</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>Speak to an Investment Specialist</h2>
          <p className="text-white/32 text-sm mb-8 max-w-md mx-auto">We&apos;ll put together a personalised investment brief — including yield projections, developer options, and payment plans.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold px-8 py-3.5 tracking-[0.28em] uppercase transition-colors duration-300">Book a Consultation</a>
        </div>
      </div>
    </div>
  )
}
