import Link from 'next/link'

const insights = [
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
    title: "Dubai's Off-Plan Boom: Which Districts Offer the Best ROI in 2026",
    category: 'Market Intelligence',
    date: 'May 18, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: 'Golden Visa Through Property: Everything You Need to Know',
    category: 'Investment Guide',
    date: 'May 10, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80',
    title: 'Renting vs Buying in Dubai: A Data-Driven 2026 Analysis',
    category: 'Expert Advice',
    date: 'Apr 28, 2026',
  },
]

export default function MarketInsights() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
            Market Intelligence
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Latest <span className="font-bold">Insights</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            Data-driven analysis, investment guides, and expert commentary on Dubai&apos;s
            real estate market — updated regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden">
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                  <span className="text-[#c8a96e]">{item.category}</span>
                  <span className="w-px h-3 bg-gray-300" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base font-medium leading-relaxed group-hover:text-[#c8a96e] transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/invest#insights"
            className="group inline-flex items-center gap-2 border-2 border-[#0f1923] text-[#0f1923] hover:bg-[#0f1923] hover:text-white px-8 py-3 text-sm tracking-wider transition-colors duration-200 font-medium"
          >
            <span>VIEW ALL INSIGHTS</span>
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
