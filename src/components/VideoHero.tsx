'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// High-resolution Dubai aerial / skyline images for cinematic slideshow
const slides = [
  {
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
    panX: ['0%', '4%'],
    panY: ['0%', '-3%'],
    scale: [1.05, 1.12],
  },
  {
    src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=90',
    panX: ['2%', '-2%'],
    panY: ['-2%', '2%'],
    scale: [1.08, 1.14],
  },
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90',
    panX: ['-3%', '1%'],
    panY: ['0%', '-4%'],
    scale: [1.06, 1.13],
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90',
    panX: ['0%', '-3%'],
    panY: ['-1%', '3%'],
    scale: [1.07, 1.15],
  },
]

const SLIDE_DURATION = 6000 // ms per slide

export default function VideoHero() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-15%'])

  // Auto-advance slides
  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(id)
  }, [current])

  const slide = slides[current]
  const prevSlide = prev !== null ? slides[prev] : null

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Cinematic background — Ken Burns effect */}
      <div className="absolute inset-0">
        {/* Previous slide fading out */}
        {prevSlide && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${prevSlide.src})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        )}

        {/* Current slide — Ken Burns zoom + pan */}
        <motion.div
          key={`slide-${current}`}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${slide.src})` }}
          initial={{ opacity: 0, scale: slide.scale[0], x: slide.panX[0], y: slide.panY[0] }}
          animate={{ opacity: 1, scale: slide.scale[1], x: slide.panX[1], y: slide.panY[1] }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeInOut' },
            scale: { duration: SLIDE_DURATION / 1000 + 2, ease: 'linear' },
            x: { duration: SLIDE_DURATION / 1000 + 2, ease: 'linear' },
            y: { duration: SLIDE_DURATION / 1000 + 2, ease: 'linear' },
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Image
            src="https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"
            alt="KYR Real Estate"
            width={220}
            height={88}
            className="h-16 md:h-20 w-auto object-contain"
            priority
            unoptimized
          />
        </motion.div>

        {/* Line 1 */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[88px] font-light text-white leading-none tracking-[0.03em]"
          >
            Your Home.
          </motion.h1>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[88px] font-light italic gold-text leading-none tracking-[0.03em]"
          >
            Your Story.
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="text-white/50 text-xs md:text-sm tracking-[0.35em] uppercase mb-12"
        >
          Transparency · Expertise · Precision
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/opportunities"
            className="bg-[#c9a84c] hover:bg-[#b8954e] text-black text-xs font-bold px-10 py-4 tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Explore Properties
          </Link>
          <Link
            href="#journey"
            className="border border-white/25 hover:border-[#c9a84c]/60 text-white/70 hover:text-[#c9a84c] text-xs font-medium px-10 py-4 tracking-[0.25em] uppercase transition-all duration-300"
          >
            Our Process
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className="relative h-px overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 32 : 16 }}
          >
            <span className="absolute inset-0 bg-white/20" />
            {i === current && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-[#c9a84c]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ opacity }}
        className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
