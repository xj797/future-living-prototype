'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingDustProps {
  count?: number
  opacity?: number
  color?: string
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  driftX: number
}

export default function FloatingDust({
  count = 25,
  opacity = 0.3,
  color = 'rgba(255,255,255,0.5)',
}: FloatingDustProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 15,
        driftX: (Math.random() - 0.5) * 30,
      })),
    )
  }, [count])

  // Don't render during SSR to avoid hydration mismatch
  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, p.driftX, 0],
            opacity: [opacity * 0.2, opacity, opacity * 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
