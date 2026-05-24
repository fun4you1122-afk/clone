'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buy',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[#c8a96e] tracking-[0.3em] text-sm uppercase mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Let&apos;s <span className="font-bold">Talk</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-4 font-medium">
                Contact KYR
              </p>
              <h2 className="text-3xl font-light tracking-wide mb-6">
                We Reply Within <span className="font-bold">2 Hours</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Whether you are looking to rent, buy, invest, or simply explore your
                options — our team is here to help. Reach us by phone, email, or
                WhatsApp for the fastest response.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">Phone / WhatsApp</p>
                    <a href="tel:+971585820297" className="text-sm font-medium hover:text-[#c8a96e] transition-colors">
                      +971 58 582 0297
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">General Enquiries</p>
                    <a href="mailto:info@kyr.ae" className="text-sm font-medium hover:text-[#c8a96e] transition-colors block">
                      info@kyr.ae
                    </a>
                    <a href="mailto:sales@kyr.ae" className="text-sm font-medium hover:text-[#c8a96e] transition-colors block">
                      sales@kyr.ae
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">Location</p>
                    <p className="text-sm font-medium">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/971585820297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="bg-[#f8f6f3] p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-[#c8a96e]/10 flex items-center justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Thank you for reaching out. A KYR specialist will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                        placeholder="+971 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                      I Am Interested In
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors appearance-none"
                    >
                      <option value="buy">Buying a Property</option>
                      <option value="rent">Renting a Property</option>
                      <option value="invest">Investment / Off-Plan</option>
                      <option value="golden-visa">Golden Visa Consultation</option>
                      <option value="management">Property Management</option>
                      <option value="other">Other / General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
                      placeholder="Tell us what you are looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c8a96e] hover:bg-[#b8954e] text-white font-medium py-3.5 text-sm tracking-wider transition-colors duration-200"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
