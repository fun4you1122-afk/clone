const values = [
  {
    title: 'Transparency',
    description:
      'We share full market data, comparable sales, and fee structures upfront. No surprises, no hidden costs.',
  },
  {
    title: 'Expertise',
    description:
      'Deep knowledge of every Dubai district, developer track record, and project cycle — built over years of transactions.',
  },
  {
    title: 'Precision',
    description:
      'Every recommendation is backed by data: rental yield benchmarks, supply pipeline, and demand trends.',
  },
  {
    title: 'Discretion',
    description:
      'We handle high-profile clients with absolute confidentiality. Your property search stays private.',
  },
]

const team = [
  {
    name: 'Khaled Al Rasi',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Yasmin Al Farsi',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Rami Khalil',
    role: 'Investment Advisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[#c8a96e] tracking-[0.3em] text-sm uppercase mb-3 font-medium">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Redefining <span className="font-bold">Real Estate</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
                Built on a <span className="font-bold">Single Belief</span>
              </h2>
              <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                <p>
                  KYR Real Estate was founded with one conviction: buyers and investors in
                  Dubai deserve honest, data-backed guidance — not sales pressure or
                  speculative hype.
                </p>
                <p>
                  We are a UAE-based agency specialising in premium residential and
                  investment properties. Our client base is high-profile, and our approach
                  is built on discretion, precision, and deep market knowledge.
                </p>
                <p>
                  From off-plan opportunities with leading developers to ready-to-move luxury
                  residences, we cover the full spectrum — always putting our clients&apos;
                  financial goals at the centre of every recommendation.
                </p>
                <p>
                  Our team also provides independent Golden Visa consultation, property
                  management, and market intelligence reports — making KYR a true
                  full-service real estate partner.
                </p>
              </div>
            </div>
            <div
              className="h-[480px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#f8f6f3]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Our <span className="font-bold">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-6 border border-gray-100 hover:border-[#c8a96e] transition-colors duration-200"
              >
                <h3 className="text-base font-semibold tracking-wide mb-3 text-[#0f1923]">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
              The People Behind KYR
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Our <span className="font-bold">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="overflow-hidden mb-4">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <h3 className="text-base font-semibold tracking-wide">{member.name}</h3>
                <p className="text-sm text-[#c8a96e] mt-1 tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
