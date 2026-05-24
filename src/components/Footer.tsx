import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#050709] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="https://i.ibb.co/8gCVs4Lf/Untitled-design-2.png"
              alt="KYR Real Estate"
              width={100}
              height={40}
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-8">
              Redefining real estate through transparency, expertise, and precision.
              UAE-based specialists in premium properties.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'WhatsApp', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href={s === 'WhatsApp' ? 'https://wa.me/971585820297' : '#'}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/20 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Opportunities', 'Invest', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+971585820297" className="block text-sm text-white/30 hover:text-[#c9a84c] transition-colors">+971 58 582 0297</a>
              <a href="mailto:info@kyr.ae" className="block text-sm text-white/30 hover:text-[#c9a84c] transition-colors">info@kyr.ae</a>
              <a href="mailto:sales@kyr.ae" className="block text-sm text-white/30 hover:text-[#c9a84c] transition-colors">sales@kyr.ae</a>
              <p className="text-sm text-white/20">Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/15">
            © {new Date().getFullYear()} KYR Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className="text-[11px] text-white/15 hover:text-white/30 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
