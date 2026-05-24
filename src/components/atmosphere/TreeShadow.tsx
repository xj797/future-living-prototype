'use client'

import { motion } from 'framer-motion'

export default function TreeShadow() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 120% 40% at 30% 60%, rgba(0,0,0,0.04) 0%, transparent 50%),
          radial-gradient(ellipse 80% 30% at 70% 40%, rgba(0,0,0,0.03) 0%, transparent 40%),
          radial-gradient(ellipse 60% 20% at 50% 80%, rgba(0,0,0,0.02) 0%, transparent 30%)
        `,
      }}
      animate={{
        backgroundPosition: ['0% 0%', '2% 1%', '-1% -0.5%', '0% 0%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
