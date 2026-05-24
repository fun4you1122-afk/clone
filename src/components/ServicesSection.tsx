import Link from 'next/link'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Rent',
    subtitle: 'Flexible Living Arrangements',
    description:
      'Access luxury apartments and villas curated for lifestyle, location, and value. We handle viewings, negotiations, and paperwork so you can move in with confidence.',
    cta: 'Browse Rentals',
    href: '/opportunities?mode=rent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Buy',
    subtitle: 'Off-Plan & Ready Properties',
    description:
      'From affordable entry points to ultra-luxury residences — we source off-plan and ready properties across every budget. Data-driven advice, not guesswork.',
    cta: 'Explore Properties',
    href: '/opportunities?mode=buy',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Consultation',
    subtitle: 'Expert Market Analysis',
    description:
      'Get independent market analysis and valuation guidance from specialists who understand Dubai&apos;s real estate landscape inside out. Golden Visa advice included.',
    cta: 'Book a Call',
    href: '/contact',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#f8f6f3]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Our <span className="font-bold">Services</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you are renting, buying, or investing — we provide the expertise and
            data-driven guidance to make the right move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 group hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-[#f8f6f3] flex items-center justify-center mb-6 group-hover:bg-[#c8a96e]/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-wide mb-1">{service.title}</h3>
              <p className="text-[11px] uppercase tracking-wider text-[#c8a96e] mb-4">
                {service.subtitle}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1c1c1c] hover:text-[#c8a96e] transition-colors duration-200 tracking-wide group/link"
              >
                <span>{service.cta}</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
