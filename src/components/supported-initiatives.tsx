import { useEffect, useRef } from 'react'
import type { getTranslations } from '@/lib/layout.shared'
import langitKetujuhLogo from '../../content/assets/langitketujuh_logo_horizontal.webp'
import jktlugLogo from '../../content/assets/jktlug.png'
import osas2026Logo from '../../content/assets/osas2026.png'
import belajarFreeBSDLogo from '../../content/assets/belajarfreebsdindonesia.jpeg'
import gnomeIndonesiaLogo from '../../content/assets/gnome-id.png'
import farmAccessLogo from '../../content/assets/farmaccessorg.jpg'
import igosNusantaraLogo from '../../content/assets/igos-nusantara.jpeg'

const supportedInitiativeLogos: Record<string, string> = {
  LangitKetujuh: langitKetujuhLogo,
  'Jakarta Linux Users Group': jktlugLogo,
  'openSUSE.Asia Summit 2026': osas2026Logo,
  'Belajar FreeBSD Indonesia': belajarFreeBSDLogo,
  'GNOME Indonesia': gnomeIndonesiaLogo,
  FarmAccess: farmAccessLogo,
  'IGOS Nusantara': igosNusantaraLogo,
}

type Translations = ReturnType<typeof getTranslations>
type SupportedInitiative =
  Translations['hero']['supportedInitiatives']['items'][number]

const cardClassName =
  'group flex w-full max-w-sm flex-col rounded-2xl border border-fd-border bg-fd-card p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:hover:border-blue-700'

function SupportedInitiativeCard({
  item,
  className = cardClassName,
  hidden = false,
}: {
  item: SupportedInitiative
  className?: string
  // Marks the duplicated marquee copy so it is skipped by screen readers and tab order.
  hidden?: boolean
}) {
  const cardContent = (
    <>
      <div className="mb-6 flex h-20 items-center">
        {supportedInitiativeLogos[item.name] ? (
          <img
            src={supportedInitiativeLogos[item.name]}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.549 1.549a3 3 0 01-.621 4.72"
              />
            </svg>
          </div>
        )}
      </div>
      <h3 className="mb-2 text-lg font-bold text-fd-foreground">{item.name}</h3>
      <div className="mb-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mb-6 flex-1 text-sm text-fd-muted-foreground">
        {item.description}
      </p>
      {item.url && item.cta ? (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300">
          {item.cta}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      ) : null}
    </>
  )

  // Items without a url stay non-interactive.
  if (!item.url) {
    return (
      <div className={className} aria-hidden={hidden || undefined}>
        {cardContent}
      </div>
    )
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      {cardContent}
    </a>
  )
}

// Compact row used instead of the marquee on small screens.
function SupportedInitiativeListItem({ item }: { item: SupportedInitiative }) {
  const logo = supportedInitiativeLogos[item.name]
  const rowContent = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-fd-border bg-white p-1">
        {logo ? (
          <img
            src={logo}
            alt=""
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-sm font-bold text-blue-600">
            {item.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-fd-foreground">
          {item.name}
        </p>
        <p className="truncate text-xs text-fd-muted-foreground">
          {item.tags.join(' · ')}
        </p>
      </div>
      {item.url ? (
        <svg
          className="h-4 w-4 shrink-0 text-fd-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      ) : null}
    </>
  )
  const rowClassName = 'flex items-center gap-3 px-4 py-3'

  return (
    <li>
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${rowClassName} transition-colors hover:bg-fd-accent`}
        >
          {rowContent}
        </a>
      ) : (
        <div className={rowClassName}>{rowContent}</div>
      )}
    </li>
  )
}

// Auto-scroll speed in pixels per second.
const marqueeSpeed = 40

function SupportedInitiativesMarquee({ t }: { t: Translations }) {
  const items = t.hero.supportedInitiatives.items
  const marqueeCardClassName = `${cardClassName} w-80 shrink-0`
  const scrollerRef = useRef<HTMLDivElement>(null)

  // The track holds the items twice. Whenever the scroll position passes one
  // copy's width it jumps back by that width, so the loop looks seamless in
  // both directions. Auto-scrolling stops while the row is hovered, focused or
  // touched, leaving the visitor free to scroll it by hand.
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    let paused = false
    let position = scroller.scrollLeft
    let lastTime: number | null = null
    let frame = 0
    let touchTimeout: ReturnType<typeof setTimeout> | undefined

    const wrap = (value: number) => {
      const loopWidth = scroller.scrollWidth / 2
      if (loopWidth <= 0) return value
      if (value >= loopWidth) return value - loopWidth
      if (value < 0) return value + loopWidth
      return value
    }

    const tick = (time: number) => {
      // clientWidth is 0 while the marquee is hidden on small screens.
      if (
        lastTime !== null &&
        !paused &&
        !reduceMotion &&
        scroller.clientWidth > 0
      ) {
        position = wrap(position + ((time - lastTime) / 1000) * marqueeSpeed)
        scroller.scrollLeft = position
      }
      lastTime = time
      frame = requestAnimationFrame(tick)
    }

    const pause = () => {
      clearTimeout(touchTimeout)
      paused = true
    }
    const resume = () => {
      position = scroller.scrollLeft
      paused = false
    }
    const resumeAfterTouch = () => {
      clearTimeout(touchTimeout)
      touchTimeout = setTimeout(resume, 2000)
    }
    const onFocusOut = (event: FocusEvent) => {
      if (!scroller.contains(event.relatedTarget as Node | null)) resume()
    }
    const onScroll = () => {
      if (!paused) return
      // Hitting the left edge jumps to the same spot in the second copy, so
      // scrolling backwards never runs out either.
      const current = scroller.scrollLeft
      const loopWidth = scroller.scrollWidth / 2
      let wrapped = current
      if (current <= 0) wrapped = current + loopWidth
      else if (current > loopWidth) wrapped = current - loopWidth
      if (wrapped !== current) scroller.scrollLeft = wrapped
      position = wrapped
    }
    // Most mice only have a vertical wheel, so turn it into horizontal scrolling.
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      scroller.scrollLeft = wrap(scroller.scrollLeft + event.deltaY)
    }

    scroller.addEventListener('mouseenter', pause)
    scroller.addEventListener('mouseleave', resume)
    scroller.addEventListener('focusin', pause)
    scroller.addEventListener('focusout', onFocusOut)
    scroller.addEventListener('touchstart', pause, { passive: true })
    scroller.addEventListener('touchend', resumeAfterTouch)
    scroller.addEventListener('scroll', onScroll, { passive: true })
    scroller.addEventListener('wheel', onWheel, { passive: false })
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(touchTimeout)
      scroller.removeEventListener('mouseenter', pause)
      scroller.removeEventListener('mouseleave', resume)
      scroller.removeEventListener('focusin', pause)
      scroller.removeEventListener('focusout', onFocusOut)
      scroller.removeEventListener('touchstart', pause)
      scroller.removeEventListener('touchend', resumeAfterTouch)
      scroller.removeEventListener('scroll', onScroll)
      scroller.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div
      ref={scrollerRef}
      className="overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max py-4">
        {[false, true].map((hidden) => (
          <div key={String(hidden)} className="flex gap-6 pr-6">
            {items.map((item, index) => (
              <SupportedInitiativeCard
                key={index}
                item={item}
                className={marqueeCardClassName}
                hidden={hidden}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SupportedInitiativesList({
  t,
  variant = 'grid',
}: {
  t: Translations
  variant?: 'grid' | 'marquee'
}) {
  return (
    <>
      {variant === 'marquee' ? (
        <>
          <div className="px-6 md:hidden">
            <ul className="mx-auto max-w-md divide-y divide-fd-border overflow-hidden rounded-2xl border border-fd-border bg-fd-card">
              {t.hero.supportedInitiatives.items.map((item, index) => (
                <SupportedInitiativeListItem key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <SupportedInitiativesMarquee t={t} />
          </div>
        </>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {t.hero.supportedInitiatives.items.map((item, index) => (
            <SupportedInitiativeCard key={index} item={item} />
          ))}
        </div>
      )}

      <p className="mx-auto mt-12 max-w-2xl px-6 text-center text-sm text-fd-muted-foreground">
        {t.hero.supportedInitiatives.contact.text}{' '}
        <a
          href={`mailto:${t.hero.supportedInitiatives.contact.email}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          {t.hero.supportedInitiatives.contact.email}
        </a>
      </p>
    </>
  )
}
