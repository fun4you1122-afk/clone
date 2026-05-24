'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    title: 'Sobha Hartland II',
    location: 'Mohammed Bin Rashid City',
    type: 'Luxury Apartment · 1 BR',
    price: 'AED 1,650,000',
    roi: '8.2%',
    badge: 'Off-Plan',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    title: 'Six Senses Residences',
    location: 'Palm Jumeirah',
    type: 'Penthouse · 4 BR',
    price: 'AED 18,500,000',
    roi: '6.4%',
    badge: 'Ready',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Emaar Grand Polo',
    location: 'Dubai Hills Estate',
    type: 'Villa · 4 BR',
    price: 'AED 5,200,000',
    roi: '7.1%',
    badge: 'New Launch',
    featured: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Binghatti Aquarise',
    location: 'Business Bay',
    type: 'Apartment · 1 BR',
    price: 'AED 1,200,000',
    roi: '9.0%',
    badge: 'High Yield',
    featured: false,
  },
]

function Card({ p, tall }: { p: typeof properties[0]; tall?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ height: tall ? '100%' : undefined, minHeight: tall ? 480 : 230 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${p.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#c9a84c] text-black text-[9px] font-bold px-3 py-1 tracking-[0.2em] uppercase">
          {p.badge}
        </span>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-white font-medium text-[15px] leading-snug truncate">{p.title}</p>
            <p className="text-white/48 text-xs mt-0.5">{p.location}</p>
            <p className="text-white/28 text-[10px] mt-1">{p.type}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[#c9a84c] font-semibold text-sm">{p.price}</p>
            <p className="text-white/38 text-[10px] mt-0.5">ROI {p.roi}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Properties() {
  const [featured, ...rest] = properties

  return (
    <section className="py-28 bg-[#030507]">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4"
            >
              Curated Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Featured<br />
              <span className="italic gold-text">Properties</span>
            </motion.h2>
          </div>
          <Link
            href="/opportunities"
            className="hidden md:inline-flex items-center gap-2 text-white/28 hover:text-[#c9a84c] text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
          >
            View all →
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" style={{ gridTemplateRows: 'auto auto' }}>
          {/* Featured — spans 2 rows on lg */}
          <div className="lg:row-span-2">
            <Card p={featured} tall />
          </div>
          {rest.map(p => (
            <Card key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-white/30 hover:text-[#c9a84c] text-[11px] tracking-[0.22em] uppercase transition-colors"
          >
            View all properties →
          </Link>
        </div>
      </div>
    </section>
  )
}
