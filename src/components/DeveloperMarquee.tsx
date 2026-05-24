const developers = [
  'EMAAR', 'SOBHA', 'DAMAC', 'BINGHATTI', 'ALDAR', 'MERAAS',
  'NAKHEEL', 'DANUBE', 'ELLINGTON', 'SELECT GROUP', 'MAG', 'TIGER',
]

export default function DeveloperMarquee() {
  return (
    <div className="py-8 border-y border-white/5 overflow-hidden bg-[#07090d]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...developers, ...developers].map((name, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-[10px] tracking-[0.4em] text-white/20 font-medium uppercase">
              {name}
            </span>
            <span className="text-[#c9a84c]/20 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
