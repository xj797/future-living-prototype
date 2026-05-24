'use client'

import { motion } from 'framer-motion'
import { type SceneId } from '@/app/page'

interface MapLocation {
  id: SceneId
  x: number
  y: number
  label: string
  labelShort: string
}

interface MinimapProps {
  currentScene: SceneId
  onNavigate: (target: SceneId) => void
}

const locations: MapLocation[] = [
  { id: 'livingRoom', x: 35, y: 52, label: 'Living Room', labelShort: '客厅' },
  { id: 'upstairs', x: 50, y: 7, label: 'Upstairs', labelShort: '二楼' },
  { id: 'masterBedroom', x: 74, y: 12, label: 'Master Bedroom', labelShort: '主卧' },
  { id: 'courtyard', x: 50, y: 20, label: 'Courtyard', labelShort: '庭院' },
  { id: 'study', x: 74, y: 38, label: 'Study', labelShort: '书房' },
  { id: 'sisterBedroom', x: 76, y: 58, label: "Sister's Room", labelShort: '妹妹房' },
  { id: 'teaCorner', x: 16, y: 58, label: 'Tea Corner', labelShort: '茶角' },
  { id: 'guestRoom', x: 76, y: 72, label: 'Guest Room', labelShort: '客房' },
]

const entrance = { x: 46, y: 81 }

const sceneImages: Record<SceneId, string> = {
  livingRoom: '/images/living-room.png',
  upstairs: '/images/upstairs.png',
  study: '/images/study.png',
  teaCorner: '/images/tea-corner.png',
  courtyard: '/images/courtyard.png',
  guestRoom: '/images/guest-room.png',
  masterBedroom: '/images/master-bedroom.png',
  sisterBedroom: '/images/sister-bedroom.png',
  opening: '',
}

export default function Minimap({ currentScene, onNavigate }: MinimapProps) {
  const currentLoc = locations.find((l) => l.id === currentScene)

  return (
    <div className="fixed bottom-5 right-5 z-30 select-none">
      <div className="group">
        <motion.div
          className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-black/50 backdrop-blur-sm
                     w-36 md:w-44 aspect-[3/4]
                     opacity-40 group-hover:opacity-95 transition-all duration-700"
        >
          <div className="absolute inset-0">
            <img
              src="/images/floor-plan.png"
              alt="Floor Plan"
              className="w-full h-full object-cover opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700"
            />
          </div>

          {currentLoc && sceneImages[currentLoc.id] && (
            <div className="absolute bottom-2 left-2 w-10 h-10 rounded overflow-hidden opacity-0 group-hover:opacity-60 transition-opacity duration-700">
              <img
                src={sceneImages[currentLoc.id]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="absolute inset-0 p-3">
            <p className="text-[8px] tracking-[0.2em] text-white/20 uppercase mb-2">
              Floor Plan
            </p>

            <div className="relative w-full h-[80%]">
              {locations.map((loc) => {
                const isCurrent = currentScene === loc.id
                return (
                  <button
                    key={loc.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none border-none bg-transparent"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onClick={() => onNavigate(loc.id)}
                    title={loc.label}
                  >
                    <div className="relative flex items-center justify-center">
                      {isCurrent ? (
                        <>
                          <motion.div
                            className="w-2 h-2 rounded-full bg-white/80"
                            animate={{
                              boxShadow: [
                                '0 0 4px 0px rgba(255,255,255,0.2)',
                                '0 0 8px 4px rgba(255,255,255,0.1)',
                                '0 0 4px 0px rgba(255,255,255,0.2)',
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          />
                          <motion.div
                            className="absolute inset-[-3px] rounded-full border border-white/30"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-white/50 transition-all duration-500" />
                      )}

                      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap">
                        <span className="text-[8px] tracking-[0.15em] text-white/50 ml-1">
                          {loc.label}
                        </span>
                      </div>
                    </div>

                    {loc.id === 'upstairs' && !isCurrent && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-white/20">
                        ↑
                      </div>
                    )}
                  </button>
                )
              })}

              <div
                className="absolute w-1 h-1 rounded-full bg-white/5"
                style={{ left: `${entrance.x}%`, top: `${entrance.y}%` }}
              />
            </div>
          </div>
        </motion.div>

        <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-white/10 group-hover:opacity-0 transition-opacity duration-500" />
      </div>
    </div>
  )
}
