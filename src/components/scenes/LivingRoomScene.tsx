'use client'

import { type SceneId } from '@/app/page'
import LightOverlay from '@/components/atmosphere/LightOverlay'
import TreeShadow from '@/components/atmosphere/TreeShadow'
import FloatingDust from '@/components/atmosphere/FloatingDust'
import Hotspot from '@/components/navigation/Hotspot'

interface Props {
  onNavigate: (target: SceneId) => void
}

// Hotspot positions mapped to the living room image composition
// Percentage-based positions that align with logical transition points
const hotspots = [
  {
    id: 'upstairs',
    x: 6,
    y: 8,
    width: 16,
    height: 28,
    target: 'upstairs' as SceneId,
    label: 'Upstairs',
  },
  {
    id: 'study',
    x: 72,
    y: 30,
    width: 20,
    height: 22,
    target: 'study' as SceneId,
    label: 'Study',
  },
  {
    id: 'teaCorner',
    x: 8,
    y: 58,
    width: 18,
    height: 22,
    target: 'teaCorner' as SceneId,
    label: 'Tea Corner',
  },
  {
    id: 'courtyard',
    x: 72,
    y: 58,
    width: 22,
    height: 24,
    target: 'courtyard' as SceneId,
    label: 'Courtyard',
  },
  {
    id: 'guestRoom',
    x: 60,
    y: 72,
    width: 28,
    height: 20,
    target: 'guestRoom' as SceneId,
    label: 'Guest Room',
  },
  {
    id: 'masterBedroom',
    x: 58,
    y: 6,
    width: 22,
    height: 22,
    target: 'masterBedroom' as SceneId,
    label: 'Master Bedroom',
  },
  {
    id: 'sisterBedroom',
    x: 50,
    y: 82,
    width: 22,
    height: 16,
    target: 'sisterBedroom' as SceneId,
    label: "Sister's Room",
  },
]

export default function LivingRoomScene({ onNavigate }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scene image */}
      <div className="absolute inset-0">
        <img
          src="/images/living-room.png"
          alt="晨光客厅"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmosphere — warm morning light */}
      <LightOverlay position="left" color="rgba(255, 200, 150, 0.15)" intensity={1.2} />
      <TreeShadow />
      <FloatingDust count={35} opacity={0.3} color="rgba(255,220,180,0.3)" />

      {/* Ambient depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />

      {/* Embedded navigation hotspots */}
      {hotspots.map((h) => (
        <Hotspot
          key={h.id}
          x={h.x}
          y={h.y}
          width={h.width}
          height={h.height}
          target={h.target}
          label={h.label}
          onNavigate={onNavigate}
        />
      ))}

      {/* Scene context hint — always visible, very faint */}
      <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Living Room · 客厅
        </p>
      </div>
    </div>
  )
}
