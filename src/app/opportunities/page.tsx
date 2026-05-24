'use client'

import { useState } from 'react'

const allProperties = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: 'Sobha Hartland II',
    location: 'Mohammed Bin Rashid City',
    type: 'Apartment',
    price: 'AED 1,650,000',
    badge: 'Off-Plan',
    beds: '1',
    mode: 'buy',
    status: 'off-plan',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: 'Emaar Grand Polo',
    location: 'Dubai Hills Estate',
    type: 'Villa',
    price: 'AED 5,200,000',
    badge: 'New Launch',
    beds: '4',
    mode: 'buy',
    status: 'off-plan',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: 'Binghatti Aquarise',
    location: 'Business Bay',
    type: 'Apartment',
    price: 'AED 1,200,000',
    badge: 'Ready',
    beds: '1',
    mode: 'buy',
    status: 'ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
    title: 'Six Senses Residences',
    location: 'Palm Jumeirah',
    type: 'Penthouse',
    price: 'AED 18,500,000',
    badge: 'Premium',
    beds: '4',
    mode: 'buy',
    status: 'ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    title: 'Luxury Marina Apartment',
    location: 'Dubai Marina',
    type: 'Apartment',
    price: 'AED 145,000 / yr',
    badge: 'Available',
    beds: '2',
    mode: 'rent',
    status: 'ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
    title: 'JBR Sea View Studio',
    location: 'Jumeirah Beach Residence',
    type: 'Studio',
    price: 'AED 75,000 / yr',
    badge: 'Available',
    beds: '0',
    mode: 'rent',
    status: 'ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80',
    title: 'Downtown 3BR Apartment',
    location: 'Downtown Dubai',
    type: 'Apartment',
    price: 'AED 220,000 / yr',
    badge: 'Featured',
    beds: '3',
    mode: 'rent',
    status: 'ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: 'Emirates Hills Villa',
    location: 'Emirates Hills',
    type: 'Villa',
    price: 'AED 450,000 / yr',
    badge: 'Exclusive',
    beds: '5',
    mode: 'rent',
    status: 'ready',
  },
]

type Mode = 'all' | 'buy' | 'rent'
type Status = 'all' | 'ready' | 'off-plan'

export default function OpportunitiesPage() {
  const [mode, setMode] = useState<Mode>('all')
  const [status, setStatus] = useState<Status>('all')
  const [propertyType, setPropertyType] = useState('all')

  const filtered = allProperties.filter((p) => {
    if (mode !== 'all' && p.mode !== mode) return false
    if (status !== 'all' && p.status !== status) return false
    if (propertyType !== 'all' && p.type.toLowerCase() !== propertyType) return false
    return true
  })

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[#c8a96e] tracking-[0.3em] text-sm uppercase mb-3 font-medium">
            Properties
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            All <span className="font-bold">Opportunities</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] md:top-[88px] z-40">
        <div className="container py-4">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Mode filter */}
            <div className="flex border border-gray-200">
              {(['all', 'buy', 'rent'] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors duration-200 ${
                    mode === m
                      ? 'bg-[#c8a96e] text-white'
                      : 'text-gray-500 hover:text-[#0f1923]'
                  }`}
                >
                  {m === 'all' ? 'All' : m === 'buy' ? 'Buy' : 'Rent'}
                </button>
              ))}
            </div>

            {/* Status filter (only for buy) */}
            {mode !== 'rent' && (
              <div className="flex border border-gray-200">
                {(['all', 'ready', 'off-plan'] as Status[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors duration-200 ${
                      status === s
                        ? 'bg-[#0f1923] text-white'
                        : 'text-gray-500 hover:text-[#0f1923]'
                    }`}
                  >
                    {s === 'all' ? 'All Status' : s === 'ready' ? 'Ready' : 'Off-Plan'}
                  </button>
                ))}
              </div>
            )}

            {/* Type filter */}
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="border border-gray-200 px-3 py-2 text-xs uppercase tracking-wider text-gray-500 focus:outline-none focus:border-[#c8a96e] appearance-none pr-8"
            >
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
              <option value="studio">Studio</option>
            </select>

            <span className="ml-auto text-xs text-gray-400">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No properties match your filters.</p>
              <button
                onClick={() => { setMode('all'); setStatus('all'); setPropertyType('all') }}
                className="mt-4 text-sm text-[#c8a96e] underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((property, i) => (
                <div key={i} className="group cursor-pointer bg-white">
                  <div className="relative overflow-hidden">
                    <div
                      className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${property.image})` }}
                    />
                    <span className="absolute top-3 left-3 bg-[#c8a96e] text-white text-[10px] font-medium px-3 py-1 tracking-wider uppercase">
                      {property.badge}
                    </span>
                    {property.beds !== '0' && (
                      <span className="absolute bottom-3 left-3 bg-black/50 text-white text-[10px] px-2 py-1">
                        {property.beds} BR
                      </span>
                    )}
                  </div>
                  <div className="p-4 border border-t-0 border-gray-100">
                    <h3 className="text-sm font-semibold tracking-wide">{property.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{property.location}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400">
                        {property.type}
                      </span>
                      <span className="text-sm font-medium text-[#c8a96e]">{property.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="container text-center">
          <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4">
            Let Our Specialists <span className="font-bold">Find It For You</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Tell us your requirements and our team will curate a personalised shortlist
            within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c8a96e] hover:bg-[#b8954e] text-white px-8 py-3 text-sm tracking-wider transition-colors duration-200 font-medium"
          >
            SPEAK TO AN ADVISOR
          </a>
        </div>
      </section>
    </>
  )
}
