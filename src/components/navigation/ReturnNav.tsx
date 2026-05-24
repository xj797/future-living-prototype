'use client'

interface ReturnNavProps {
  onNavigate: () => void
  label?: string
}

export default function ReturnNav({ onNavigate, label = 'Living Room' }: ReturnNavProps) {
  return (
    <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
      <button
        onClick={onNavigate}
        className="pointer-events-auto group cursor-pointer bg-transparent border-none outline-none"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-6 bg-white/0 group-hover:bg-white/15 transition-all duration-1000" />
          <span className="text-[10px] tracking-[0.25em] text-white/20 group-hover:text-white/40 transition-all duration-1000 uppercase">
            ← {label}
          </span>
        </div>
      </button>
    </div>
  )
}
