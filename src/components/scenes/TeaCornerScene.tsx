'use client'

import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import ReturnNav from '@/components/navigation/ReturnNav'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function TeaCornerScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scene image */}
      <div className="absolute inset-0">
        <img
          src="/images/tea-corner.png"
          alt="茶角"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmosphere — intimate warm light */}
      <LightOverlay position="center" color="rgba(220, 180, 140, 0.15)" />
      <FloatingDust count={12} opacity={0.15} color="rgba(255,200,160,0.3)" />

      {/* Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Scene label */}
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Tea Corner · 茶角
        </p>
      </div>

      {/* Return navigation */}
      <ReturnNav onNavigate={() => onNavigate('livingRoom')} label="Living Room" />
    </div>
  )
}
