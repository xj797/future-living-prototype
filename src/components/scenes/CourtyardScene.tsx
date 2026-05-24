'use client'

import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import ReturnNav from '@/components/navigation/ReturnNav'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function CourtyardScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scene image */}
      <div className="absolute inset-0">
        <img
          src="/images/courtyard.png"
          alt="庭院"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmosphere — bright outdoor light */}
      <LightOverlay position="right" color="rgba(255, 220, 170, 0.15)" intensity={1.3} />
      <FloatingDust count={25} opacity={0.25} color="rgba(255,240,200,0.4)" />

      {/* Depth — lighter for outdoor */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* Scene label */}
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
          Courtyard · 庭院
        </p>
      </div>

      {/* Return navigation */}
      <ReturnNav onNavigate={() => onNavigate('livingRoom')} label="Living Room" />
    </div>
  )
}
