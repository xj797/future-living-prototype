'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { type SceneId } from '@/app/page'

interface HotspotProps {
  x: number
  y: number
  width: number
  height: number
  target: SceneId
  label: string
  onNavigate: (target: SceneId) => void
}

export default function Hotspot({
  x,
  y,
  width,
  height,
  target,
  label,
  onNavigate,
}: HotspotProps) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (clicked) return
    setClicked(true)
    onNavigate(target)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <div
      className="absolute cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        {/* Subtle persistent center dot — always visible */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-all duration-700" />

        {/* Click flash feedback */}
        {clicked && (
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-sm"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        )}

        {/* Dashed border — barely visible, appears on hover */}
        <div
          className="absolute inset-0 rounded-sm transition-all duration-500
                     border border-dashed border-white/0 group-hover:border-white/[0.06]"
        />

        {/* Corner accents — subtly visible by default, brighten on hover */}
        <div className="absolute top-0 left-0 w-3 h-[1px] bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-[1px] h-3 bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute top-0 right-0 w-3 h-[1px] bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute top-0 right-0 w-[1px] h-3 bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-white/10 group-hover:bg-white/30 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-white/10 group-hover:bg-white/30 transition-all duration-500" />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-700
                     bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]"
        />

        {/* Label — appears on hover */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-3 bg-white/20" />
            <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase whitespace-nowrap">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
