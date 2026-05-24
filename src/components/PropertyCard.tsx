export default function PropertyCard({
  image,
  title,
  subtitle,
  type,
  price,
  badge,
  beds,
}: {
  image: string
  title: string
  subtitle: string
  type: string
  price: string
  badge: string
  beds?: string
}) {
  return (
    <div className="group cursor-pointer bg-white">
      <div className="relative overflow-hidden">
        <div
          className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <span className="absolute top-4 left-4 bg-[#c8a96e] text-white text-[10px] font-medium px-3 py-1 tracking-wider uppercase">
          {badge}
        </span>
        {beds && (
          <span className="absolute bottom-4 left-4 bg-black/50 text-white text-[10px] font-medium px-3 py-1 tracking-wider">
            {beds} BR
          </span>
        )}
        <button
          className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Save property"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
      </div>
      <div className="p-5 border border-t-0 border-gray-100">
        <h3 className="text-base font-semibold tracking-wide">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-[11px] uppercase tracking-wider text-gray-400">{type}</span>
          <span className="text-sm font-medium text-[#c8a96e]">{price}</span>
        </div>
      </div>
    </div>
  )
}
