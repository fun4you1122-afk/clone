export default function Ticker() {
  const items = [
    'KYR Real Estate',
    'Dubai',
    'Off-Plan Properties',
    'Premium Living',
    'Transparency',
    'Expertise',
    'Precision',
    'Golden Visa',
    'Luxury Residences',
    'Investment Returns',
  ]

  const text = items.join('  ·  ')

  return (
    <div className="bg-[#c9a84c]/6 border-y border-[#c9a84c]/12 py-3.5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap run-ticker">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-[10px] tracking-[0.38em] uppercase text-[#c9a84c]/55 px-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
