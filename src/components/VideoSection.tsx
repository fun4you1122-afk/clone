'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VideoSection() {
  const ref = useRef<HTMLElement>(null)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '90vh' }}>
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        {/* ↓ REPLACE src with your property tour / interior video once uploaded */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          playsInline
          loop
          muted={false}
        >
          {/* <source src="/videos/property-tour.mp4" type="video/mp4" /> */}
        </video>
        <div className="absolute inset-0 bg-[#07090d]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090d]/60 to-[#07090d]/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Inside Every Property
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-light text-white mb-8"
        >
          Experience Before<br />
          <span className="italic gold-text">You Decide</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-sm max-w-md mb-12 leading-relaxed"
        >
          Private tours, immersive walk-throughs, and developer presentations —
          arranged exclusively for our clients.
        </motion.p>

        {/* Play button */}
        {!playing && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            className="group relative w-20 h-20 flex items-center justify-center"
            aria-label="Play video"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-[#c9a84c]/30 border-dashed"
            />
            <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 backdrop-blur-sm border border-[#c9a84c]/40 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a84c">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </motion.button>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-[10px] tracking-[0.3em] text-white/20 uppercase"
        >
          Property tour — upload video to activate
        </motion.p>
      </div>
    </section>
  )
}
