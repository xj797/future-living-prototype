'use client'

import { motion } from 'framer-motion'
import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import TreeShadow from '@/components/atmosphere/TreeShadow'
import FloatingDust from '@/components/atmosphere/FloatingDust'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function OpeningScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image with slow float */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          src="/images/opening-house.png"
          alt="城市中的未来之家"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Atmosphere layers */}
      <LightOverlay position="right" color="rgba(255, 180, 120, 0.10)" />
      <TreeShadow />
      <FloatingDust count={20} opacity={0.2} />

      {/* Depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Title — minimal, warm */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <motion.p
          className="text-[10px] md:text-xs tracking-[0.3em] text-white/40 uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          Future Living Prototype
        </motion.p>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-light text-white text-center leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        >
          What would your<br />future life feel like?
        </motion.h1>

        <motion.p
          className="text-xs md:text-sm text-white/30 mt-5 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        >
          未来的你，会住进怎样的生活？
        </motion.p>
      </div>

      {/* Enter Home CTA */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
      >
        <button
          onClick={() => onNavigate('livingRoom')}
          className="group cursor-pointer bg-transparent border-none outline-none"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Animated line */}
            <motion.div
              className="w-12 h-px bg-white/30 group-hover:bg-white/60 transition-all duration-1000"
              animate={{ width: [48, 56, 48] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <span className="text-[11px] tracking-[0.35em] text-white/40 group-hover:text-white/70 transition-all duration-1000 uppercase">
              Enter Home
            </span>

            {/* Subtle glow on hover */}
            <div className="w-16 h-16 rounded-full bg-white/0 group-hover:bg-white/[0.03] absolute -bottom-4 blur-xl transition-all duration-1000" />
          </div>
        </button>
      </motion.div>
    </div>
  )
}
