'use client'

import { motion } from 'framer-motion'
import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import ReturnNav from '@/components/navigation/ReturnNav'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function UpstairsScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scene image with subtle upward drift */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: ['0%', '-1.5%', '0%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/images/upstairs.png"
          alt="二楼俯瞰"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Atmosphere */}
      <LightOverlay position="center" color="rgba(255, 190, 140, 0.08)" />
      <FloatingDust count={20} opacity={0.2} color="rgba(255,255,255,0.3)" />

      {/* Depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      {/* Scene label */}
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Upstairs · 二楼
        </p>
      </div>

      {/* Return navigation */}
      <ReturnNav onNavigate={() => onNavigate('livingRoom')} label="Living Room" />
    </div>
  )
}
