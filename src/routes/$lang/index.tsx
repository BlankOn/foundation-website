import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions, getTranslations } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import { SupportedInitiativesList } from '@/components/supported-initiatives'
import blankOnLinuxPreview from '../../../content/assets/blankon-linux.png'
import wartaBlankOnPreview from '../../../content/assets/retas.png'
import lokakaryaPreview from '../../../content/assets/lokakarya.jpeg'
import blanKonfPreview from '../../../content/assets/blankonf.jpeg'

const productPreviewImages: Record<string, string> = {
  'BlankOn Linux': blankOnLinuxPreview,
  'Warta BlankOn': wartaBlankOnPreview,
  Lokakarya: lokakaryaPreview,
  BlanKonf: blanKonfPreview,
}

export const Route = createFileRoute('/$lang/')({
  component: Home,
})

function BinaryMatrix() {
  const asciiArt = [
    "           `.:/++++/:.`            :oys+.",
    "        `./ohdNMMMMNmho+.`         .+oo:`",
    "      -smMMMMMMMMMMMMMMMMmy-`     `yyyyy+",
    "   `:dMMMMMMMMMMMMMMMMMMMMMMd/`   `yyyyys",
    "  .hMMMMMMMNmhso/++symNMMMMMMMh-  `yyyyys",
    " -mMMMMMMms-`         -omMMMMMMN- .yyyyys",
    ".mMMMMMMy.              .yMMMMMMm: yyyyys",
    "sMMMMMMy                 `sMMMMMMh yyyyys",
    "NMMMMMN:                  .NMMMMMN yyyyys",
    "MMMMMMm.                   NMMMMMN yyyyys",
    "hMMMMMM+                  /MMMMMMN yyyyys",
    ":NMMMMMN:                :mMMMMMM+ yyyyys",
    " oMMMMMMNs-            .sNMMMMMMs. yyyyys",
    "  +MMMMMMMNho:.`  `.:ohNMMMMMMNo  `yyyyys",
    "   -hMMMMMMMMNNNmmNNNMMMMMMMMh-   `yyyyys",
    "     :yNMMMMMMMMMMMMMMMMMMNy:`    `yyyyys",
    "       .:sdNMMMMMMMMMMNds/.       `yyyyyo",
    "           `.:/++++/:.`            :oys+.",
  ]

  const [binaryMask, setBinaryMask] = useState<boolean[][]>([])

  useEffect(() => {
    // Create initial binary mask based on ASCII art
    // Non-space characters will be randomly 0 or 1
    const initialMask = asciiArt.map(line =>
      line.split('').map(char => Math.random() > 0.5)
    )
    setBinaryMask(initialMask)

    // Animate by flipping random bits where there are non-space characters
    const interval = setInterval(() => {
      setBinaryMask(prevMask => {
        const newMask = prevMask.map(row => [...row])
        // Flip 5-10 random bits each frame
        const flips = Math.floor(Math.random() * 6) + 5
        for (let i = 0; i < flips; i++) {
          const row = Math.floor(Math.random() * asciiArt.length)
          const col = Math.floor(Math.random() * asciiArt[row].length)
          // Only flip if it's not a space
          if (asciiArt[row][col] !== ' ') {
            newMask[row][col] = !newMask[row][col]
          }
        }
        return newMask
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      <div className="font-mono text-sm leading-relaxed text-blue-300/60 scale-x-125">
        {asciiArt.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.split('').map((char, j) => {
              if (char === ' ') {
                return <span key={j}> </span>
              }
              const isBinary = binaryMask[i]?.[j]
              const displayChar = isBinary ? '1' : '0'
              return (
                <span
                  key={j}
                  className={`transition-all duration-100 ${
                    isBinary ? 'text-blue-400' : 'text-blue-600/40'
                  }`}
                >
                  {displayChar}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroAbout({
  t,
  lang,
}: {
  t: ReturnType<typeof getTranslations>
  lang: string
}) {
  const stats = {
    id: {
      contributors: 'Kontributor',
      yearsContributing: 'Tahun Berkontribusi',
      linuxReleases: 'Rilis Distribusi Linux',
      blankonfs: 'BlanKonf Terselenggara',
    },
    en: {
      contributors: 'Contributors',
      yearsContributing: 'Years Contributing',
      linuxReleases: 'Linux Distribution Releases',
      blankonfs: 'BlanKonfs Held',
    },
  }

  const statsText = stats[lang as keyof typeof stats] || stats.en

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-32 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22batik%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22120%22%20height%3D%22120%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2225%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2215%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%228%22%2F%3E%3Cpath%20d%3D%22M60%2035%20Q%2050%2045%2060%2055%20T%2060%2075%20T%2060%2095%22%2F%3E%3Cpath%20d%3D%22M35%2060%20Q%2045%2050%2055%2060%20T%2075%2060%20T%2095%2060%22%2F%3E%3Cpath%20d%3D%22M45%2045%20Q%2055%2055%2045%2065%22%2F%3E%3Cpath%20d%3D%22M75%2045%20Q%2065%2055%2075%2065%22%2F%3E%3Cpath%20d%3D%22M45%2075%20Q%2055%2065%2045%2055%22%2F%3E%3Cpath%20d%3D%22M75%2075%20Q%2065%2065%2075%2055%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%22105%22%20cy%3D%2215%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%22105%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%22105%22%20cy%3D%22105%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fg%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22url(%23batik)%22%2F%3E%3C%2Fsvg%3E')] opacity-60" />

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left content - takes 3 columns */}
          <div className="md:col-span-3 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              {t.hero.about.title}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl">
              {t.hero.about.description}
            </p>

            {/* Stats or highlights */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-400">381+</div>
                <div className="text-sm text-slate-400">{statsText.contributors}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-400">22+</div>
                <div className="text-sm text-slate-400">{statsText.yearsContributing}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-slate-400">{statsText.linuxReleases}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-400">4</div>
                <div className="text-sm text-slate-400">{statsText.blankonfs}</div>
              </div>
            </div>
          </div>

          {/* Right visual element - takes 2 columns */}
          <div className="md:col-span-2 relative hidden md:block">
            {/* Binary matrix animation */}
            <BinaryMatrix />
          </div>
        </div>
      </div>
    </section>
  )
}

const missionIcons = [
  // Maintain BlankOn Linux
  'M17.25 6.75L22.5 12l-5.25 5.25M6.75 6.75L1.5 12l5.25 5.25M14.25 4.5l-4.5 15',
  // Education & literacy
  'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25a8.987 8.987 0 00-3-.512c-2.305 0-4.408.867-6 2.292m0-14.25v14.25',
  // Nurture community & projects
  'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  // Equitable access
  'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582m-15.686 0A8.997 8.997 0 0112 3m7.843 4.582A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.959 8.959 0 013 12c0-1.605.42-3.113 1.157-4.418',
]

function HeroVision({ t }: { t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="bg-fd-background py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            {t.hero.vision.title}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.hero.vision.missions.map((mission, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-fd-border bg-fd-card p-6 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-700"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white transition-transform group-hover:scale-105">
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
                    d={missionIcons[index]}
                  />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-fd-muted-foreground">
                {mission}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroDonate({
  t,
  lang,
}: {
  t: ReturnType<typeof getTranslations>
  lang: string
}) {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {t.hero.donate.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          {t.hero.donate.description}
        </p>
        <Link
          to="/$lang/donate"
          params={{ lang }}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg"
        >
          {t.hero.donate.cta}
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}

function HeroProducts({
  t,
}: {
  t: ReturnType<typeof getTranslations>
}) {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            {t.hero.products.title}
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            {t.hero.products.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.hero.products.items.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-fd-border bg-fd-card transition-all hover:border-blue-300 hover:shadow-xl dark:hover:border-blue-700"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={productPreviewImages[item.name]}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-fd-foreground">
                  {item.name}
                </h3>
                <p className="mb-6 text-fd-muted-foreground">
                  {item.description}
                </p>
                {item.url && item.cta && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroSupportedInitiatives({
  t,
}: {
  t: ReturnType<typeof getTranslations>
}) {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            {t.hero.supportedInitiatives.title}
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            {t.hero.supportedInitiatives.description}
          </p>
        </div>

        <SupportedInitiativesList t={t} />
      </div>
    </section>
  )
}

function Home() {
  const { lang } = Route.useParams()
  const t = getTranslations(lang)

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col">
        <HeroAbout t={t} lang={lang} />
        <HeroVision t={t} />
        <HeroDonate t={t} lang={lang} />
        <HeroProducts t={t} />
        <HeroSupportedInitiatives t={t} />
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
