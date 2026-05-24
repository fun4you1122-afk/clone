'use client'

import { motion } from 'framer-motion'

const stats = [
  { val: '500+', lbl: 'Transactions' },
  { val: 'AED 2B+', lbl: 'Total Portfolio' },
  { val: '97%', lbl: 'Client Satisfaction' },
  { val: '15+', lbl: 'Developer Partners' },
]

export default function Intro() {
  return (
    <section className="py-32 md:py-44 bg-[#030507]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — manifesto */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-8"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              We believe great advice starts with{' '}
              <em
                className="italic gold-text"
                style={{ fontStyle: 'italic', WebkitTextFillColor: 'transparent' }}
              >
                honest data.
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/40 text-[15px] leading-relaxed max-w-md mb-10"
            >
              KYR Real Estate was built on a simple idea: every client deserves complete
              transparency and data-driven guidance — not sales pressure and guesswork.
              We operate as trusted advisors, not transactional agents.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-[#c9a84c]/50 to-transparent origin-left max-w-[200px]"
            />
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {stats.map((s, i) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#030507] p-10 text-center group hover:bg-[#0b0e13] transition-colors duration-400"
              >
                <div
                  className="text-5xl md:text-6xl font-light gold-text mb-3 group-hover:scale-105 transition-transform duration-400"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {s.val}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/22">{s.lbl}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
