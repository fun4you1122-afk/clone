'use client'

import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Choose Property', desc: 'Select a ready or off-plan property valued at AED 2M or more.' },
  { n: '02', title: 'Complete Purchase', desc: 'We handle the full transaction, DLD registration, and title deed.' },
  { n: '03', title: 'Visa Application', desc: 'Our consultants guide your ICA application end to end.' },
  { n: '04', title: '10-Year Residency', desc: 'You and your family receive long-term UAE Golden Visa status.' },
]

export default function GoldenVisaSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0a0d12]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=60")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d12]/90 to-[#0a0d12]" />

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">UAE Residency</p>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              The Golden Visa<br />
              <span className="italic gold-text">Path</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              Properties from AED 2 million qualify for the UAE 10-Year Golden Visa —
              residency for you and your family. KYR guides you through every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+12px)] right-0 h-px bg-gradient-to-r from-[#c9a84c]/20 to-transparent z-0" />
                )}

                <div className="border border-white/5 hover:border-[#c9a84c]/20 bg-white/2 p-8 transition-all duration-500 group-hover:bg-[#c9a84c]/3 h-full">
                  <div className="font-serif text-5xl font-light gold-text mb-6 leading-none">
                    {step.n}
                  </div>
                  <h3 className="text-white text-sm font-semibold tracking-wide mb-3">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/invest#golden-visa"
              className="group inline-flex items-center gap-4 text-white/50 hover:text-[#c9a84c] text-xs tracking-[0.3em] uppercase transition-colors duration-300"
            >
              <span className="h-px w-12 bg-current transition-colors" />
              Learn more about Golden Visa eligibility
              <span className="h-px w-12 bg-current transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
