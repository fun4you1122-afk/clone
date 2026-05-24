'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'buy', message: '' })

  return (
    <section className="section-padding bg-[#07090d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#c9a84c]/3 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-6xl font-light text-white mb-8"
            >
              Let&apos;s Find<br />
              <span className="italic gold-text">Your Property</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm leading-relaxed mb-12 max-w-sm"
            >
              Whether you&apos;re buying, renting, or investing — our specialists reply within 2 hours.
            </motion.p>

            <div className="space-y-6">
              {[
                { label: 'Phone / WhatsApp', value: '+971 58 582 0297', href: 'tel:+971585820297' },
                { label: 'General', value: 'info@kyr.ae', href: 'mailto:info@kyr.ae' },
                { label: 'Sales', value: 'sales@kyr.ae', href: 'mailto:sales@kyr.ae' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-white/60 group-hover:text-[#c9a84c] transition-colors duration-300">{item.value}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {['Instagram', 'WhatsApp', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href={s === 'WhatsApp' ? 'https://wa.me/971585820297' : '#'}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="border border-white/5 p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-6"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="font-serif text-2xl font-light text-white mb-3">Message Sent</h3>
                <p className="text-white/40 text-sm">A KYR specialist will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', required: true },
                  { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+971 ...', required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">
                      {field.label}{field.required && ' *'}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full bg-transparent border border-white/8 hover:border-white/15 focus:border-[#c9a84c]/50 text-white placeholder-white/15 px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">I Am Interested In</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-[#07090d] border border-white/8 focus:border-[#c9a84c]/50 text-white/60 px-4 py-3.5 text-sm outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="buy">Buying a Property</option>
                    <option value="rent">Renting a Property</option>
                    <option value="invest">Investment / Off-Plan</option>
                    <option value="golden-visa">Golden Visa Consultation</option>
                    <option value="management">Property Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you are looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-white/8 hover:border-white/15 focus:border-[#c9a84c]/50 text-white placeholder-white/15 px-4 py-3.5 text-sm outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ backgroundColor: '#b8954e' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#c9a84c] text-black text-xs font-bold py-4 tracking-[0.3em] uppercase transition-colors duration-300 mt-2"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
