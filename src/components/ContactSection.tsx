'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interest: 'buy', message: '',
  })

  return (
    <section className="relative bg-[#0b0e13] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/25 to-transparent" />

      {/* Header banner */}
      <div className="relative overflow-hidden" style={{ height: '52vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e13]/55 via-[#0b0e13]/20 to-[#0b0e13]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4"
          >
            Ready to Begin?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Let&apos;s Find Your<br />
            <span className="italic gold-text">Property</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-white/38 text-sm mt-4 tracking-[0.1em]"
          >
            We reply within 2 hours · +971 58 582 0297
          </motion.p>
        </div>
      </div>

      {/* Body */}
      <div className="container pb-28 pt-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-5 mb-12"
            >
              {[
                { lbl: 'Phone / WhatsApp', val: '+971 58 582 0297', href: 'tel:+971585820297' },
                { lbl: 'General', val: 'info@kyr.ae', href: 'mailto:info@kyr.ae' },
                { lbl: 'Sales', val: 'sales@kyr.ae', href: 'mailto:sales@kyr.ae' },
                { lbl: 'Location', val: 'Dubai, United Arab Emirates', href: undefined },
              ].map(item => (
                <div key={item.lbl} className="flex items-start gap-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/18 w-32 shrink-0 pt-0.5">
                    {item.lbl}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white/42 hover:text-[#c9a84c] transition-colors duration-300">
                      {item.val}
                    </a>
                  ) : (
                    <span className="text-sm text-white/22">{item.val}</span>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <a
                href="tel:+971585820297"
                className="flex items-center gap-2 border border-white/10 hover:border-[#c9a84c]/35 text-white/38 hover:text-[#c9a84c] text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/971585820297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-300"
              >
                WhatsApp
              </a>
            </motion.div>

            <div className="flex gap-6 mt-10">
              {['Instagram', 'TikTok', 'LinkedIn'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/18 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {done ? (
              <div className="border border-white/6 p-12 text-center">
                <div className="w-14 h-14 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-light text-white mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  Message Sent
                </h3>
                <p className="text-white/32 text-sm">A KYR specialist will contact you within 2 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setDone(true) }}
                className="space-y-4"
              >
                {[
                  { k: 'name', lbl: 'Full Name', type: 'text', ph: 'Your name', req: true },
                  { k: 'email', lbl: 'Email', type: 'email', ph: 'you@email.com', req: true },
                  { k: 'phone', lbl: 'Phone', type: 'tel', ph: '+971 ...', req: false },
                ].map(f => (
                  <div key={f.k}>
                    <label className="block text-[10px] uppercase tracking-[0.28em] text-white/22 mb-2">
                      {f.lbl}{f.req ? ' *' : ''}
                    </label>
                    <input
                      type={f.type}
                      required={f.req}
                      placeholder={f.ph}
                      value={form[f.k as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full bg-transparent border border-white/8 hover:border-white/16 focus:border-[#c9a84c]/50 text-white placeholder-white/15 px-4 py-3.5 text-sm outline-none transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.28em] text-white/22 mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-[#0b0e13] border border-white/8 focus:border-[#c9a84c]/50 text-white/52 px-4 py-3.5 text-sm outline-none appearance-none cursor-pointer"
                  >
                    <option value="buy">Buying a Property</option>
                    <option value="rent">Renting a Property</option>
                    <option value="invest">Investment / Off-Plan</option>
                    <option value="golden-visa">Golden Visa</option>
                    <option value="management">Property Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.28em] text-white/22 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-white/8 hover:border-white/16 focus:border-[#c9a84c]/50 text-white placeholder-white/15 px-4 py-3.5 text-sm outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold py-4 tracking-[0.3em] uppercase transition-colors duration-300 mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
