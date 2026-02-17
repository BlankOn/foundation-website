import { useState, useEffect, useRef } from 'react'
import emeritusRaw from '@/members.csv?raw'

const emeritusNames = emeritusRaw
  .split('\n')
  .slice(1) // skip header
  .map((line) => line.replace(/^"(.*)"$/, '$1').trim())
  .filter(Boolean)

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const COL_COUNT = 2
const CARDS_PER_COL = 16

/**
 * A single card that periodically flips to reveal a new name.
 * Uses a single-face approach: animate scaleY to 0 (card goes edge-on),
 * swap text while invisible, then scaleY back to 1.
 */
function FlipCard({ names, startIndex }: { names: string[]; startIndex: number }) {
  const [idx, setIdx] = useState(startIndex)
  // 'idle' -> 'out' (shrink) -> 'in' (grow back)
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle')

  useEffect(() => {
    const initialDelay = Math.random() * 4000 + 1000
    let timeout: ReturnType<typeof setTimeout>
    let running = true

    const tick = () => {
      if (!running) return
      // Phase 1: shrink to edge-on
      setPhase('out')
      // Phase 2: at midpoint, swap name and grow back
      setTimeout(() => {
        if (!running) return
        setIdx((prev) => (prev + 1) % names.length)
        setPhase('in')
      }, 300)
      // Phase 3: back to idle
      setTimeout(() => {
        if (!running) return
        setPhase('idle')
      }, 600)
      const next = 3000 + Math.random() * 3000
      timeout = setTimeout(tick, next)
    }

    timeout = setTimeout(tick, initialDelay)
    return () => {
      running = false
      clearTimeout(timeout)
    }
  }, [names.length])

  const name = names[idx % names.length]

  return (
    <div
      className="flex h-10 w-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/40 px-3 backdrop-blur-sm transition-transform duration-300 ease-in-out"
      style={{
        transform:
          phase === 'out'
            ? 'perspective(600px) rotateX(90deg)'
            : phase === 'in'
              ? 'perspective(600px) rotateX(0deg)'
              : 'perspective(600px) rotateX(0deg)',
      }}
    >
      <span className="truncate text-sm font-medium text-blue-200">
        {name}
      </span>
    </div>
  )
}

/** A single column that scrolls infinitely. Content is duplicated for seamless loop. */
function ScrollColumn({
  names,
  direction,
  speed,
}: {
  names: string[]
  direction: 'up' | 'down'
  speed: number // seconds for one full cycle
}) {
  // Each card gets its own shuffled pool for flipping
  const flipPools = useRef<string[][]>([])
  if (flipPools.current.length === 0) {
    for (let i = 0; i < names.length; i++) {
      flipPools.current.push(shuffleArray(emeritusNames))
    }
  }

  const animationName = direction === 'up' ? 'scroll-up' : 'scroll-down'

  return (
    <div className="relative h-[360px] overflow-hidden">
      {/* Top/bottom fade masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-slate-950 to-transparent" />

      <div
        className="flex flex-col gap-2"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {/* Original set */}
        {names.map((name, i) => (
          <FlipCard
            key={`a-${i}`}
            names={flipPools.current[i]}
            startIndex={flipPools.current[i].indexOf(name)}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {names.map((name, i) => (
          <FlipCard
            key={`b-${i}`}
            names={flipPools.current[i]}
            startIndex={flipPools.current[i].indexOf(name)}
          />
        ))}
      </div>
    </div>
  )
}

export function EmeritusWall({ lang }: { lang: string }) {
  const content =
    lang === 'id'
      ? {
          heading: 'Dinding Kontributor',
          sub: `${emeritusNames.length}+ kontributor telah meninggalkan jejak mereka sejak 2004.`,
        }
      : {
          heading: 'Contributor Wall',
          sub: `${emeritusNames.length}+ contributors have left their mark since 2004.`,
        }

  // Build stable column data once
  const columns = useRef<{ names: string[]; direction: 'up' | 'down'; speed: number }[]>([])
  if (columns.current.length === 0) {
    for (let i = 0; i < COL_COUNT; i++) {
      const shuffled = shuffleArray(emeritusNames).slice(0, CARDS_PER_COL)
      columns.current.push({
        names: shuffled,
        direction: i % 2 === 0 ? 'down' : 'up',
        speed: 30 + Math.random() * 10, // 30-40s per loop, each col slightly different
      })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-16">
      {/* Keyframes */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 4px)); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(calc(-50% - 4px)); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {content.heading}
          </h2>
          <p className="text-lg text-blue-300/80">{content.sub}</p>
        </div>

        {/* Scrolling columns */}
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3">
          {columns.current.map((col, i) => (
            <ScrollColumn
              key={i}
              names={col.names}
              direction={col.direction}
              speed={col.speed}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
