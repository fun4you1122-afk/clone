'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const words = ['YOUR', 'HOME.', 'YOUR', 'STORY.']

export default function VideoHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%'])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background video / poster */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
        >
          <source src="/videos/call-us.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[#07090d]/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <Image
            src="https://i.ibb.co/8gCVs4Lf/Untitled-design-2.png"
            alt="KYR Real Estate"
            width={200}
            height={80}
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />
        </motion.div>

        {/* Headline — line 1 */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[96px] font-light text-white leading-none tracking-[0.04em]"
          >
            Your Home.
          </motion.h1>
        </div>

        {/* Headline — line 2 */}
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[96px] font-light italic gold-text leading-none tracking-[0.04em]"
          >
            Your Story.
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="text-white/50 text-xs md:text-sm tracking-[0.35em] uppercase mb-12 max-w-sm"
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
            className="group relative overflow-hidden bg-[#c9a84c] text-black text-xs font-semibold px-10 py-4 tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            <span className="relative z-10">Explore Properties</span>
          </Link>
          <Link
            href="#journey"
            className="border border-white/20 hover:border-[#c9a84c]/60 text-white/70 hover:text-[#c9a84c] text-xs font-medium px-10 py-4 tracking-[0.25em] uppercase transition-all duration-300"
          >
            Our Process
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-[#c9a84c] to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
