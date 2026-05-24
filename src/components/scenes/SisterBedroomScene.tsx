'use client'

import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import TreeShadow from '@/components/atmosphere/TreeShadow'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import ReturnNav from '@/components/navigation/ReturnNav'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function SisterBedroomScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/sister-bedroom.png"
          alt="妹妹的卧室"
          className="w-full h-full object-cover"
        />
      </div>

      <LightOverlay position="left" color="rgba(255, 200, 160, 0.10)" />
      <TreeShadow />
      <FloatingDust count={18} opacity={0.25} color="rgba(255,230,200,0.3)" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Sister&apos;s Bedroom · 妹妹的卧室
        </p>
      </div>

      <ReturnNav onNavigate={() => onNavigate('livingRoom')} label="Living Room" />
    </div>
  )
}
