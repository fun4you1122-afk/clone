'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Transparency',
    desc: 'Full market data, comparable sales, and fee structures upfront. No surprises, no hidden costs.',
  },
  {
    title: 'Expertise',
    desc: 'Deep knowledge of every Dubai district, developer track record, and project cycle — built over years.',
  },
  {
    title: 'Precision',
    desc: 'Every recommendation is backed by data: rental yield benchmarks, supply pipeline, and demand trends.',
  },
  {
    title: 'Discretion',
    desc: 'We handle high-profile clients with absolute confidentiality. Your property search stays private.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#030507]">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030507]/50 via-[#030507]/20 to-[#030507]" />
        <div className="relative z-10 text-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-5"
          >
            About KYR
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-light text-white"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Redefining<br />
            <span className="italic gold-text">Real Estate</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-7"
              >
                Our Story
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Built on a Single Belief
              </motion.h2>
              <div className="space-y-5 text-white/40 text-[15px] leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  KYR Real Estate was founded with one conviction: buyers and investors in Dubai
                  deserve honest, data-backed guidance — not sales pressure or speculative hype.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  We are a UAE-based agency specialising in premium residential and investment
                  properties. Our client base is high-profile, and our approach is built on
                  discretion, precision, and deep market knowledge.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  From off-plan opportunities with leading developers to ready-to-move luxury
                  residences, we cover the full spectrum — always putting our clients&apos;
                  goals at the centre of every recommendation.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="h-[480px] bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80')` }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0b0e13] border-y border-white/5">
        <div className="container">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Values
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/7 hover:border-[#c9a84c]/25 p-8 transition-all duration-400 hover:bg-[#c9a84c]/3"
              >
                <h3 className="text-white font-medium text-sm tracking-wide mb-3">{v.title}</h3>
                <p className="text-white/32 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
