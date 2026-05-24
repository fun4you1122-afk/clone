'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/opportunities', label: 'Properties' },
  { href: '/invest', label: 'Invest' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#030507]/92 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="container flex items-center justify-between h-[72px] md:h-[88px]">
          <Link href="/" className="shrink-0">
            <Image
              src="https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"
              alt="KYR Real Estate"
              width={120} height={48}
              className="h-9 md:h-11 w-auto"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.22em] uppercase text-white/45 hover:text-[#c9a84c] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:+971585820297"
              className="hidden lg:block text-[11px] text-white/30 hover:text-[#c9a84c] tracking-wider transition-colors"
            >
              +971 58 582 0297
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center border border-[#c9a84c]/40 hover:bg-[#c9a84c] hover:border-[#c9a84c] text-[#c9a84c] hover:text-black text-[11px] font-medium px-5 py-2.5 tracking-[0.2em] uppercase transition-all duration-300"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-7 h-7"
              aria-label="Toggle menu"
            >
              <span className={`block h-px bg-white/60 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-white/60 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-px bg-white/60 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#030507]/97 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-7">
              {nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[44px] md:text-5xl font-light text-white hover:text-[#c9a84c] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col items-center gap-2 text-center"
            >
              <a href="tel:+971585820297" className="text-sm text-white/30 hover:text-[#c9a84c] transition-colors">+971 58 582 0297</a>
              <a href="mailto:info@kyr.ae" className="text-sm text-white/30 hover:text-[#c9a84c] transition-colors">info@kyr.ae</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
