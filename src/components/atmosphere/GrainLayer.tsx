'use client'

import { useEffect, useRef } from 'react'

export default function GrainLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Animated grain using persistent buffer
    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth * 0.5
      canvas.height = window.innerHeight * 0.5
    }
    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)

      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255
        imageData.data[i] = noise
        imageData.data[i + 1] = noise
        imageData.data[i + 2] = noise
        imageData.data[i + 3] = 18
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
        mixBlendMode: 'overlay',
        opacity: 0.25,
        zIndex: 100,
      }}
    />
  )
}
