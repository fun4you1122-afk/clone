'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'buy', message: '' })
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="bg-[#07090d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* Video band */}
      <div className="relative w-full overflow-hidden" style={{ height: '55vh' }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80"
        >
          <source src="/videos/call-us.mp4" type="video/mp4" />
        </video>
        {/* Gradient fade top + bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090d] via-transparent to-[#07090d]" />
        <div className="absolute inset-0 bg-[#07090d]/40" />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4"
          >
            Ready to Begin?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-light text-white"
          >
            Let&apos;s Find<br />
            <span className="italic gold-text">Your Property</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-sm mt-4 tracking-[0.15em]"
          >
            We reply within 2 hours · +971 58 582 0297
          </motion.p>
        </div>
      </div>

      {/* Contact grid */}
      <div className="container relative z-10 pb-28 pt-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-8"
            >
              Get in Touch
            </motion.p>

            <div className="space-y-6 mb-12">
              {[
                { label: 'Phone / WhatsApp', value: '+971 58 582 0297', href: 'tel:+971585820297' },
                { label: 'General Enquiries', value: 'info@kyr.ae', href: 'mailto:info@kyr.ae' },
                { label: 'Sales', value: 'sales@kyr.ae', href: 'mailto:sales@kyr.ae' },
                { label: 'Location', value: 'Dubai, United Arab Emirates', href: undefined },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 w-36 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white/50 group-hover:text-[#c9a84c] transition-colors duration-300">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/30">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+971585820297"
                className="flex items-center justify-center gap-3 border border-white/10 hover:border-[#c9a84c]/40 text-white/50 hover:text-[#c9a84c] text-xs tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/971585820297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] text-xs tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.18-.01-.381-.014-.57-.014-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>

            <div className="flex gap-6 mt-10">
              {['Instagram', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/20 hover:text-[#c9a84c] transition-colors duration-300"
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
