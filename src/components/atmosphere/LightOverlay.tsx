'use client'

import { motion } from 'framer-motion'

interface LightOverlayProps {
  position?: 'left' | 'right' | 'center'
  color?: string
  intensity?: number
}

export default function LightOverlay({
  position = 'left',
  color = 'rgba(255, 200, 150, 0.12)',
  intensity = 1,
}: LightOverlayProps) {
  const xMap = { left: '25%', right: '75%', center: '50%' }
  const xPos = xMap[position]

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 100% 80% at ${xPos} 10%, ${color}, transparent 70%)`,
      }}
      animate={{
        opacity: [intensity * 0.7, intensity, intensity * 0.7],
        backgroundPosition: ['0% 0%', '3% 2%', '0% 0%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
