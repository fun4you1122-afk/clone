const pillars = [
  {
    number: '01',
    title: 'Transparency',
    description:
      'No hidden fees, no inflated prices. We share full market data so you make informed decisions — always.',
  },
  {
    number: '02',
    title: 'Expertise',
    description:
      'Our specialists have deep knowledge of every Dubai district, developer, and project cycle — from JVC to Palm Jumeirah.',
  },
  {
    number: '03',
    title: 'Precision',
    description:
      'Data-driven recommendations, not speculation. We analyse yield, supply pipeline, and demand trends before advising.',
  },
]

const stats = [
  { value: '500+', label: 'Transactions Closed' },
  { value: 'AED 2B+', label: 'Portfolio Value' },
  { value: '97%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Developer Partnerships' },
]

export default function WhyKYR() {
  return (
    <section className="section-padding bg-[#0f1923] text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-4 font-medium">
              Why KYR
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Redefining Real Estate<br />
              <span className="font-bold">Through Precision</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
              KYR Real Estate was built on a single belief: buyers and investors deserve
              honest, data-backed guidance — not sales pressure. We serve a high-profile
              clientele who value results over rhetoric.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="flex gap-6">
                  <span className="text-3xl font-bold text-[#c8a96e]/30 leading-none flex-shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-wide mb-2">{pillar.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0f1923] p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#c8a96e] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-white/10 p-6">
              <p className="text-[#c8a96e] text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                Golden Visa Guidance
              </p>
              <h4 className="text-lg font-semibold mb-2">Qualify Through Property</h4>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Properties from AED 2M qualify for the UAE 10-Year Golden Visa. Our consultants
                guide you through the full process — selection, purchase, and visa application.
              </p>
              <a
                href="/invest#golden-visa"
                className="inline-flex items-center gap-2 text-sm text-[#c8a96e] hover:text-[#d4b87a] transition-colors font-medium tracking-wide group"
              >
                <span>Learn more</span>
                <svg
                  width="14"
                  height="14"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
