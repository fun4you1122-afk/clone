'use client'

import { useState } from 'react'

const areas = [
  'All Areas',
  'Downtown Dubai',
  'Dubai Marina',
  'Palm Jumeirah',
  'Business Bay',
  'JBR',
  'DIFC',
  'Dubai Hills Estate',
  'JVC',
  'Dubai Creek Harbour',
]

const propertyTypes = ['All Types', 'Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Office']

const budgetOptions = {
  rent: ['Any Budget', 'AED 50K – 100K/yr', 'AED 100K – 200K/yr', 'AED 200K – 400K/yr', 'AED 400K+/yr'],
  buy: ['Any Budget', 'AED 500K – 1M', 'AED 1M – 3M', 'AED 3M – 5M', 'AED 5M – 10M', 'AED 10M+'],
}

export default function HeroSection() {
  const [mode, setMode] = useState<'rent' | 'buy'>('buy')

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 container text-center text-white px-4">
        <p className="text-[#c8a96e] tracking-[0.35em] text-xs md:text-sm uppercase mb-5 font-medium">
          UAE&apos;s Premium Real Estate Agency
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 tracking-wide">
          REDEFINING REAL ESTATE<br />
          <span className="font-bold">THROUGH PRECISION</span>
        </h1>
        <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
          Transparency, expertise, and data-driven insight — not speculation. We connect
          high-profile clients with Dubai&apos;s finest properties, from ready homes to
          exclusive off-plan opportunities.
        </p>

        {/* Search panel */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
          {/* Rent / Buy toggle */}
          <div className="flex border-b border-white/20">
            <button
              onClick={() => setMode('buy')}
              className={`flex-1 py-3 text-sm font-medium tracking-wider transition-colors duration-200 ${
                mode === 'buy' ? 'bg-[#c8a96e] text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              BUY
            </button>
            <button
              onClick={() => setMode('rent')}
              className={`flex-1 py-3 text-sm font-medium tracking-wider transition-colors duration-200 ${
                mode === 'rent' ? 'bg-[#c8a96e] text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              RENT
            </button>
          </div>

          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                  Area / Community
                </label>
                <select className="w-full bg-white/10 border border-white/20 text-white p-2.5 text-sm focus:outline-none focus:border-[#c8a96e] appearance-none cursor-pointer">
                  {areas.map((a) => (
                    <option key={a} className="text-black">
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                  Property Type
                </label>
                <select className="w-full bg-white/10 border border-white/20 text-white p-2.5 text-sm focus:outline-none focus:border-[#c8a96e] appearance-none cursor-pointer">
                  {propertyTypes.map((t) => (
                    <option key={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                  Budget
                </label>
                <select className="w-full bg-white/10 border border-white/20 text-white p-2.5 text-sm focus:outline-none focus:border-[#c8a96e] appearance-none cursor-pointer">
                  {budgetOptions[mode].map((b) => (
                    <option key={b} className="text-black">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="w-full mt-4 bg-[#c8a96e] hover:bg-[#b8954e] text-white font-medium py-3 text-sm tracking-wider transition-colors duration-200">
              SEARCH PROPERTIES
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </div>
    </section>
  )
}
