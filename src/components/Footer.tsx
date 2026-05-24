import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#020405] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"
              alt="KYR Real Estate"
              width={110} height={44}
              className="h-10 w-auto mb-6"
              unoptimized
            />
            <p className="text-white/22 text-sm leading-relaxed max-w-xs mb-8">
              Redefining real estate through transparency, expertise, and precision.
              UAE-based specialists in premium properties and investment.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'WhatsApp', href: 'https://wa.me/971585820297' },
                { label: 'TikTok', href: '#' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.28em] text-white/18 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-white/18 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Properties', href: '/opportunities' },
                { label: 'Invest', href: '/invest' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/28 hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-white/18 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+971585820297" className="block text-sm text-white/28 hover:text-[#c9a84c] transition-colors">
                +971 58 582 0297
              </a>
              <a href="mailto:info@kyr.ae" className="block text-sm text-white/28 hover:text-[#c9a84c] transition-colors">
                info@kyr.ae
              </a>
              <a href="mailto:sales@kyr.ae" className="block text-sm text-white/28 hover:text-[#c9a84c] transition-colors">
                sales@kyr.ae
              </a>
              <p className="text-sm text-white/18">Dubai, United Arab Emirates</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/14">
            © {new Date().getFullYear()} KYR Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map(item => (
              <a key={item} href="#" className="text-[11px] text-white/14 hover:text-white/28 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
