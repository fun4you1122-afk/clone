'use client'

import { motion } from 'framer-motion'

const listings = [
  { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', title: 'Sobha Hartland II', location: 'Mohammed Bin Rashid City', type: 'Apartment · 1 BR', price: 'AED 1,650,000', roi: '8.2%', badge: 'Off-Plan' },
  { image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80', title: 'Six Senses Residences', location: 'Palm Jumeirah', type: 'Penthouse · 4 BR', price: 'AED 18,500,000', roi: '6.4%', badge: 'Ready' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Emaar Grand Polo', location: 'Dubai Hills Estate', type: 'Villa · 4 BR', price: 'AED 5,200,000', roi: '7.1%', badge: 'New Launch' },
  { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', title: 'Binghatti Aquarise', location: 'Business Bay', type: 'Apartment · 1 BR', price: 'AED 1,200,000', roi: '9.0%', badge: 'High Yield' },
  { image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', title: 'Emaar Beachfront', location: 'Dubai Marina', type: 'Apartment · 2 BR', price: 'AED 3,100,000', roi: '6.8%', badge: 'Ready' },
  { image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', title: 'Nakheel Rixos', location: 'The Palm Jumeirah', type: 'Apartment · 3 BR', price: 'AED 6,800,000', roi: '5.9%', badge: 'Ultra Luxury' },
]

export default function OpportunitiesPage() {
  return (
    <div className="bg-[#030507] pt-28">
      <div className="container py-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#c9a84c] text-[11px] tracking-[0.42em] uppercase mb-4">Properties</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>All Properties</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/35 text-sm mb-16">Curated listings across Dubai&apos;s most desirable communities</motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {listings.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group cursor-pointer">
              <div className="relative overflow-hidden" style={{ height: 260 }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-[1.04]" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4"><span className="bg-[#c9a84c] text-black text-[9px] font-bold px-3 py-1 tracking-[0.2em] uppercase">{p.badge}</span></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    <p className="text-white font-medium text-[15px]">{p.title}</p>
                    <p className="text-white/45 text-xs mt-0.5">{p.location}</p>
                    <p className="text-white/28 text-[10px] mt-1">{p.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#c9a84c] font-semibold text-sm">{p.price}</p>
                    <p className="text-white/35 text-[10px] mt-0.5">ROI {p.roi}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center border border-white/6 py-12 px-6">
          <p className="text-white/32 text-sm mb-2">Looking for something specific?</p>
          <p className="text-white/22 text-xs mb-6">Our team has access to off-market listings not shown here.</p>
          <a href="/contact" className="inline-block bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold px-8 py-3.5 tracking-[0.28em] uppercase transition-colors duration-300">Request a Shortlist</a>
        </div>
      </div>
    </div>
  )
}
