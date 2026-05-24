'use client'

import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import OpeningScene from '@/components/scenes/OpeningScene'
import LivingRoomScene from '@/components/scenes/LivingRoomScene'
import UpstairsScene from '@/components/scenes/UpstairsScene'
import StudyScene from '@/components/scenes/StudyScene'
import TeaCornerScene from '@/components/scenes/TeaCornerScene'
import CourtyardScene from '@/components/scenes/CourtyardScene'
import GuestRoomScene from '@/components/scenes/GuestRoomScene'
import MasterBedroomScene from '@/components/scenes/MasterBedroomScene'
import SisterBedroomScene from '@/components/scenes/SisterBedroomScene'
import GrainLayer from '@/components/atmosphere/GrainLayer'
import Minimap from '@/components/navigation/Minimap'

export type SceneId =
  | 'opening'
  | 'livingRoom'
  | 'upstairs'
  | 'study'
  | 'teaCorner'
  | 'courtyard'
  | 'guestRoom'
  | 'masterBedroom'
  | 'sisterBedroom'

export default function Home() {
  const [scene, setScene] = useState<SceneId>('opening')
  const [overlayVisible, setOverlayVisible] = useState(false)
  const transitioningRef = useRef(false)

  const navigate = useCallback((target: SceneId) => {
    if (transitioningRef.current) return
    transitioningRef.current = true

    setOverlayVisible(true)

    setTimeout(() => {
      setScene(target)
      setTimeout(() => {
        setOverlayVisible(false)
        transitioningRef.current = false
      }, 200)
    }, 800)
  }, [])

  const renderScene = () => {
    const props = { onNavigate: navigate }
    switch (scene) {
      case 'opening': return <OpeningScene key="opening" {...props} />
      case 'livingRoom': return <LivingRoomScene key="livingRoom" {...props} />
      case 'upstairs': return <UpstairsScene key="upstairs" {...props} />
      case 'study': return <StudyScene key="study" {...props} />
      case 'teaCorner': return <TeaCornerScene key="teaCorner" {...props} />
      case 'courtyard': return <CourtyardScene key="courtyard" {...props} />
      case 'guestRoom': return <GuestRoomScene key="guestRoom" {...props} />
      case 'masterBedroom': return <MasterBedroomScene key="masterBedroom" {...props} />
      case 'sisterBedroom': return <SisterBedroomScene key="sisterBedroom" {...props} />
    }
  }

  return (
    <main className="fixed inset-0 bg-[#0a0a0a] overflow-hidden">
      <motion.div
        key={scene + '-container'}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: overlayVisible ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {renderScene()}
      </motion.div>

      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={false}
        animate={{
          opacity: overlayVisible ? 1 : 0,
          backgroundColor: overlayVisible ? 'rgba(10, 10, 10, 1)' : 'rgba(10, 10, 10, 0)',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {scene !== 'opening' && (
        <Minimap currentScene={scene} onNavigate={navigate} />
      )}

      <GrainLayer />
    </main>
  )
}
