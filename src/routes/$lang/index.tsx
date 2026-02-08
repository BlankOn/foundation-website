import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions, getTranslations } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/')({
  component: Home,
})

function HeroAbout({
  t,
}: {
  t: ReturnType<typeof getTranslations>
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22batik%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22120%22%20height%3D%22120%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2225%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2215%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%228%22%2F%3E%3Cpath%20d%3D%22M60%2035%20Q%2050%2045%2060%2055%20T%2060%2075%20T%2060%2095%22%2F%3E%3Cpath%20d%3D%22M35%2060%20Q%2045%2050%2055%2060%20T%2075%2060%20T%2095%2060%22%2F%3E%3Cpath%20d%3D%22M45%2045%20Q%2055%2055%2045%2065%22%2F%3E%3Cpath%20d%3D%22M75%2045%20Q%2065%2055%2075%2065%22%2F%3E%3Cpath%20d%3D%22M45%2075%20Q%2055%2065%2045%2055%22%2F%3E%3Cpath%20d%3D%22M75%2075%20Q%2065%2065%2075%2055%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%22105%22%20cy%3D%2215%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%22105%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3Ccircle%20cx%3D%22105%22%20cy%3D%22105%22%20r%3D%224%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fg%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22url(%23batik)%22%2F%3E%3C%2Fsvg%3E')] opacity-60" />
      <div className="container relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t.hero.about.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {t.hero.about.description}
          </p>
        </div>
      </div>
    </section>
  )
}

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

        <div className="grid gap-4 md:grid-cols-2">
          {t.hero.vision.missions.map((mission, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-fd-border bg-fd-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-fd-muted-foreground">{mission}</p>
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
              className="group rounded-2xl border border-fd-border bg-fd-card p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:hover:border-blue-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400">
                {index === 0 ? (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ) : index === 1 ? (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                ) : index === 2 ? (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
              </div>
              <h3 className="mb-3 text-xl font-bold text-fd-foreground">
                {item.name}
              </h3>
              <p className="mb-6 text-fd-muted-foreground">{item.description}</p>
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
          ))}
        </div>
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
        <HeroAbout t={t} />
        <HeroVision t={t} />
        <HeroDonate t={t} lang={lang} />
        <HeroProducts t={t} />
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
