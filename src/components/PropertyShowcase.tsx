'use client'

import { useRef, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Sobha Hartland II',
    location: 'Mohammed Bin Rashid City',
    type: 'Luxury Apartment',
    price: 'AED 1,650,000',
    beds: '1',
    badge: 'Off-Plan',
    roi: '8.2%',
    tag: 'Investor Pick',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    title: 'Six Senses Residences',
    location: 'Palm Jumeirah',
    type: 'Penthouse',
    price: 'AED 18,500,000',
    beds: '4',
    badge: 'Ready',
    roi: '6.4%',
    tag: 'Ultra Luxury',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Emaar Grand Polo',
    location: 'Dubai Hills Estate',
    type: 'Villa',
    price: 'AED 5,200,000',
    beds: '4',
    badge: 'New Launch',
    roi: '7.1%',
    tag: 'Family Living',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Binghatti Aquarise',
    location: 'Business Bay',
    type: 'Apartment',
    price: 'AED 1,200,000',
    beds: '1',
    badge: 'Featured',
    roi: '9.0%',
    tag: 'High Yield',
  },
]

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.15s ease',
      }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#c9a84c] text-black text-[9px] font-bold px-3 py-1 tracking-[0.2em] uppercase">
            {property.badge}
          </span>
          <span className="bg-black/40 backdrop-blur-sm text-white text-[9px] px-3 py-1 tracking-[0.15em] uppercase border border-white/10">
            {property.tag}
          </span>
        </div>

        {/* Save */}
        <button className="absolute top-4 right-4 w-8 h-8 bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-[#c9a84c]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white text-lg font-semibold leading-tight">{property.title}</p>
              <p className="text-white/60 text-xs mt-0.5">{property.location}</p>
            </div>
            <div className="text-right">
              <p className="text-[#c9a84c] font-semibold text-sm">{property.price}</p>
              <p className="text-white/40 text-[10px] mt-0.5">{property.beds} BR · {property.type}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-[#0e1117] border border-white/5 border-t-0 px-4 py-3 flex items-center justify-between">
        <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase">Est. Gross ROI</span>
        <span className="text-[#c9a84c] text-sm font-semibold">{property.roi}</span>
      </div>
    </motion.div>
  )
}

export default function PropertyShowcase() {
  return (
    <section className="section-padding bg-[#07090d] overflow-hidden w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4"
            >
              Curated for You
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl font-light text-white"
            >
              Featured<br />
              <span className="italic gold-text">Properties</span>
            </motion.h2>
          </div>
          <Link
            href="/opportunities"
            className="group inline-flex items-center gap-3 text-white/40 hover:text-[#c9a84c] text-xs tracking-[0.25em] uppercase transition-colors duration-300"
          >
            <span>View all properties</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {properties.map((p, i) => (
            <PropertyCard key={p.title} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
