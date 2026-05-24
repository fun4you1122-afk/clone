'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
    x: ['0%', '3%'], y: ['0%', '-2%'], scale: [1.06, 1.13],
  },
  {
    src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=90',
    x: ['2%', '-2%'], y: ['-1%', '2%'], scale: [1.08, 1.14],
  },
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90',
    x: ['-2%', '1%'], y: ['0%', '-3%'], scale: [1.05, 1.12],
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90',
    x: ['0%', '-3%'], y: ['-1%', '2%'], scale: [1.07, 1.14],
  },
]

const DURATION = 6000

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [cur, setCur] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const slideUp = useTransform(scrollYProgress, [0, 0.45], ['0%', '-10%'])

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(cur)
      setCur(c => (c + 1) % slides.length)
    }, DURATION)
    return () => clearInterval(id)
  }, [cur])

  const slide = slides[cur]
  const prevSlide = prev !== null ? slides[prev] : null

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        {prevSlide && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${prevSlide.src})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        )}
        <motion.div
          key={`cur-${cur}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.src})` }}
          initial={{ opacity: 0, scale: slide.scale[0], x: slide.x[0], y: slide.y[0] }}
          animate={{ opacity: 1, scale: slide.scale[1], x: slide.x[1], y: slide.y[1] }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeInOut' },
            scale: { duration: DURATION / 1000 + 2, ease: 'linear' },
            x: { duration: DURATION / 1000 + 2, ease: 'linear' },
            y: { duration: DURATION / 1000 + 2, ease: 'linear' },
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030507]/40 via-[#030507]/10 to-[#030507]" />
        <div className="absolute inset-0 bg-[#030507]/20" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: fadeOut, y: slideUp }}
        className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-[860px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Image
            src="https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"
            alt="KYR Real Estate"
            width={200} height={80}
            className="h-14 md:h-[72px] w-auto mx-auto"
            priority
            unoptimized
          />
        </motion.div>

        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[54px] md:text-[82px] lg:text-[100px] font-light text-white leading-[0.92] tracking-[0.02em]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your Home.
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
            className="text-[54px] md:text-[82px] lg:text-[100px] font-light italic leading-[0.92] tracking-[0.02em] gold-text"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your Story.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.35 }}
          className="text-white/35 text-[11px] tracking-[0.45em] uppercase mb-12"
        >
          Transparency · Expertise · Precision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/opportunities"
            className="bg-[#c9a84c] hover:bg-[#b8954e] text-black text-[11px] font-bold px-10 py-4 tracking-[0.28em] uppercase transition-colors duration-300"
          >
            Explore Properties
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 hover:border-[#c9a84c]/55 text-white/55 hover:text-[#c9a84c] text-[11px] px-10 py-4 tracking-[0.28em] uppercase transition-all duration-300"
          >
            Book a Call
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(cur); setCur(i) }}
            className="relative overflow-hidden h-px transition-all duration-400"
            style={{ width: i === cur ? 36 : 14 }}
          >
            <span className="absolute inset-0 bg-white/20" />
            {i === cur && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-[#c9a84c]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity: fadeOut }}
        className="absolute bottom-9 right-8 z-10 flex flex-col items-center gap-2.5"
      >
        <span
          className="text-white/20 text-[9px] tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
