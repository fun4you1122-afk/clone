'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/invest', label: 'Invest' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#07090d]/95 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"
                alt="KYR Real Estate"
                width={120}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+971585820297"
                className="text-xs tracking-[0.15em] text-white/50 hover:text-[#c9a84c] transition-colors"
              >
                +971 58 582 0297
              </a>
              <Link
                href="/contact"
                className="relative group overflow-hidden border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] text-xs font-medium px-6 py-2.5 tracking-[0.2em] uppercase transition-colors duration-300"
              >
                <span className="relative z-10">Book a Call</span>
                <span className="absolute inset-0 bg-[#c9a84c] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="absolute inset-0 group-hover:text-black relative z-10 flex items-center justify-center text-xs font-medium tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book a Call
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#07090d]/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-4xl font-light text-white hover:text-[#c9a84c] transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex flex-col items-center gap-4">
              <a href="tel:+971585820297" className="text-sm text-white/40">+971 58 582 0297</a>
              <a href="mailto:info@kyr.ae" className="text-sm text-white/40">info@kyr.ae</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
