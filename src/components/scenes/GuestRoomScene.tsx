'use client'

import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import TreeShadow from '@/components/atmosphere/TreeShadow'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import ReturnNav from '@/components/navigation/ReturnNav'

interface Props {
  onNavigate: (target: SceneId) => void
}

export default function GuestRoomScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scene image */}
      <div className="absolute inset-0">
        <img
          src="/images/guest-room.png"
          alt="爸妈的房间"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmosphere — warm, quiet, lived-in */}
      <LightOverlay position="right" color="rgba(255, 190, 140, 0.12)" />
      <TreeShadow />
      <FloatingDust count={15} opacity={0.2} color="rgba(255,210,180,0.3)" />

      {/* Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      {/* Scene label */}
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Guest Room · 爸妈的房间
        </p>
      </div>

      {/* Return navigation */}
      <ReturnNav onNavigate={() => onNavigate('livingRoom')} label="Living Room" />
    </div>
  )
}
