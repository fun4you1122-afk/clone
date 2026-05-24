const offPlanProjects = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: 'Sobha Hartland II',
    developer: 'Sobha Realty',
    location: 'Mohammed Bin Rashid City',
    price: 'From AED 1.6M',
    handover: 'Q4 2026',
    roi: '7–9%',
    badge: 'High Demand',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: 'Emaar Grand Polo',
    developer: 'Emaar Properties',
    location: 'Dubai Hills Estate',
    price: 'From AED 5.2M',
    handover: 'Q2 2027',
    roi: '6–8%',
    badge: 'New Launch',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: 'Binghatti Aquarise',
    developer: 'Binghatti',
    location: 'Business Bay',
    price: 'From AED 1.2M',
    handover: 'Q1 2026',
    roi: '8–10%',
    badge: 'Near Handover',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
    title: 'Danube Sportz',
    developer: 'Danube Properties',
    location: 'Motor City',
    price: 'From AED 650K',
    handover: 'Q3 2027',
    roi: '7–9%',
    badge: 'Best Value',
  },
]

const goldenVisaSteps = [
  {
    step: '01',
    title: 'Choose an Eligible Property',
    description: 'Select a property worth AED 2M or more — off-plan or ready.',
  },
  {
    step: '02',
    title: 'Complete the Purchase',
    description: 'We handle the full transaction, DLD registration, and title deed.',
  },
  {
    step: '03',
    title: 'Apply for the Visa',
    description: 'Our consultants guide you through the ICA application process end to end.',
  },
  {
    step: '04',
    title: 'Receive Your 10-Year Visa',
    description: 'You and your family enjoy long-term UAE residency and stability.',
  },
]

const managementServices = [
  {
    title: 'Tenant Sourcing',
    description: 'We find vetted, reliable tenants quickly, minimising vacancy periods.',
  },
  {
    title: 'Rent Collection',
    description: 'Automated rent collection with monthly reporting and owner statements.',
  },
  {
    title: 'Maintenance Coordination',
    description: 'Licensed contractors handle all maintenance requests promptly.',
  },
  {
    title: 'Legal & RERA Compliance',
    description: 'Full compliance with RERA regulations, Ejari registration, and renewals.',
  },
]

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[#c8a96e] tracking-[0.3em] text-sm uppercase mb-3 font-medium">
            Investment
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
            Invest <span className="font-bold">With Confidence</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
            Off-plan opportunities, Golden Visa properties, and full property management
            — guided by data, not speculation.
          </p>
        </div>
      </section>

      {/* Off-plan projects */}
      <section id="off-plan" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
              Off-Plan
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Curated <span className="font-bold">Off-Plan Projects</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Hand-picked projects from Dubai&apos;s top developers with strong yield potential
              and proven delivery records.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offPlanProjects.map((project) => (
              <div
                key={project.title}
                className="group cursor-pointer bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden relative">
                  <div
                    className="h-60 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <span className="absolute top-4 left-4 bg-[#c8a96e] text-white text-[10px] font-medium px-3 py-1 tracking-wider uppercase">
                    {project.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold tracking-wide">{project.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">
                        {project.developer}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#c8a96e]">{project.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400">Handover</p>
                      <p className="text-sm font-medium mt-0.5">{project.handover}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400">
                        Est. Gross ROI
                      </p>
                      <p className="text-sm font-medium text-[#c8a96e] mt-0.5">{project.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa */}
      <section id="golden-visa" className="section-padding bg-[#0f1923] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
                UAE Residency
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
                10-Year Golden Visa<br />
                <span className="font-bold">Through Property</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
                Purchase a property worth AED 2 million or more and qualify for the UAE
                Golden Visa — 10-year residency for you and your family.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goldenVisaSteps.map((step) => (
                <div key={step.step} className="flex gap-5 p-6 border border-white/10">
                  <span className="text-3xl font-bold text-[#c8a96e]/30 leading-none flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide mb-2">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c8a96e] hover:bg-[#b8954e] text-white px-8 py-3 text-sm tracking-wider transition-colors duration-200 font-medium"
              >
                GET GOLDEN VISA GUIDANCE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management */}
      <section id="management" className="section-padding bg-[#f8f6f3]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
                Property Management
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
                We Manage.<br />
                <span className="font-bold">You Earn.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                Own a Dubai property but not based here? Our full-service property
                management team handles everything — so your investment earns without
                the hassle.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0f1923] hover:bg-[#1a2535] text-white px-6 py-3 text-sm tracking-wider transition-colors duration-200 group"
              >
                <span>ENQUIRE NOW</span>
                <svg
                  width="15"
                  height="15"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {managementServices.map((service) => (
                <div key={service.title} className="bg-white p-6 border border-gray-100">
                  <h3 className="text-sm font-semibold tracking-wide mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market insights anchor */}
      <section id="insights" className="section-padding bg-white">
        <div className="container text-center">
          <p className="text-[#c8a96e] tracking-[0.3em] text-xs uppercase mb-3 font-medium">
            Stay Informed
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Market <span className="font-bold">Intelligence</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We publish regular market reports on rental yields, price trends, developer
            performance, and district-level analysis. Available to our clients.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-[#0f1923] text-[#0f1923] hover:bg-[#0f1923] hover:text-white px-8 py-3 text-sm tracking-wider transition-colors duration-200 font-medium"
          >
            REQUEST A REPORT
          </a>
        </div>
      </section>
    </>
  )
}
