import Link from 'next/link'
import PropertyCard from './PropertyCard'

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: 'Sobha Hartland II',
    subtitle: 'Mohammed Bin Rashid City',
    type: 'Apartment',
    price: 'AED 1,650,000',
    badge: 'Off-Plan',
    beds: '1',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: 'Emaar Grand Polo',
    subtitle: 'Dubai Hills Estate',
    type: 'Villa',
    price: 'AED 5,200,000',
    badge: 'New Launch',
    beds: '4',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: 'Binghatti Aquarise',
    subtitle: 'Business Bay',
    type: 'Apartment',
    price: 'AED 1,200,000',
    badge: 'Featured',
    beds: '1',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
    title: 'Six Senses Residences',
    subtitle: 'Palm Jumeirah',
    type: 'Penthouse',
    price: 'AED 18,500,000',
    badge: 'Premium',
    beds: '4',
  },
]

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
            Hand-Picked for You
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Featured <span className="font-bold">Properties</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            A curated selection of premium opportunities across Dubai&apos;s most sought-after
            communities — vetted by our specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/opportunities"
            className="group inline-flex items-center gap-2 border-2 border-[#0f1923] text-[#0f1923] hover:bg-[#0f1923] hover:text-white px-8 py-3 text-sm tracking-wider transition-colors duration-200 font-medium"
          >
            <span>VIEW ALL PROPERTIES</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
