import { Link } from '@tanstack/react-router'
import data from '@/events.json'
import { getTranslations } from '@/lib/layout.shared'

/** content/assets images are bundled by Vite, so their paths need resolving. */
const assetUrls = import.meta.glob<string>('/content/assets/*', {
  query: '?url',
  import: 'default',
  eager: true,
})

function resolveImage(path: string) {
  return assetUrls[path] ?? path
}

type Localized = string | { id: string; en: string }

type EventItem = {
  title: Localized
  date: string
  endDate?: string
  place?: Localized
  link?: string
  image?: string
}

function localize(value: Localized | undefined, lang: string) {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value[lang as keyof typeof value] ?? value.en
}

/** Turns a YYYY, YYYY-MM or YYYY-MM-DD string into a sortable Date. */
function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, (month ?? 1) - 1, day ?? 1)
}

/** Formats with only as much precision as the source string carries. */
function formatDate(value: string, endValue: string | undefined, lang: string) {
  const locale = lang === 'id' ? 'id-ID' : 'en-US'
  const parts = value.split('-').length

  if (parts === 1) return value

  const options: Intl.DateTimeFormatOptions =
    parts === 2
      ? { year: 'numeric', month: 'long' }
      : { year: 'numeric', month: 'long', day: 'numeric' }

  const start = parseDate(value).toLocaleDateString(locale, options)
  if (!endValue) return start

  const end = parseDate(endValue).toLocaleDateString(locale, options)
  return start === end ? start : `${start} – ${end}`
}

function isUpcoming(event: EventItem) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return parseDate(event.endDate ?? event.date) >= today
}

function EventCard({ event, lang }: { event: EventItem; lang: string }) {
  const title = localize(event.title, lang)
  const place = localize(event.place, lang)

  const card = (
    <>
      {event.image ? (
        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={resolveImage(event.image)}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-fd-foreground">
          {title}
        </h3>
        <div className="flex flex-col gap-1 text-sm text-fd-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(event.date, event.endDate, lang)}
          </span>
          {place ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {place}
            </span>
          ) : null}
        </div>
      </div>
    </>
  )

  const className =
    'group flex flex-col overflow-hidden rounded-2xl border border-fd-border bg-fd-card transition-all'

  if (!event.link) {
    return <div className={className}>{card}</div>
  }

  const linkClassName = `${className} hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg`

  // Site-relative links are stored without the language prefix.
  if (event.link.startsWith('/')) {
    return (
      <Link to={`/${lang}${event.link}`} className={linkClassName}>
        {card}
      </Link>
    )
  }

  return (
    <a
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {card}
    </a>
  )
}

function EventGroup({
  title,
  events,
  emptyText,
  lang,
}: {
  title: string
  events: Array<EventItem>
  emptyText: string
  lang: string
}) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-fd-foreground">{title}</h3>
      {events.length === 0 ? (
        <p className="text-fd-muted-foreground">{emptyText}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard
              key={`${localize(event.title, lang)}-${event.date}`}
              event={event}
              lang={lang}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function EventsList({
  t,
  lang,
}: {
  t: ReturnType<typeof getTranslations>
  lang: string
}) {
  const events = data.events as Array<EventItem>

  const upcoming = events
    .filter(isUpcoming)
    .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime())

  const past = events
    .filter((event) => !isUpcoming(event))
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())

  return (
    <div className="flex flex-col gap-12">
      <EventGroup
        title={t.hero.events.upcoming}
        events={upcoming}
        emptyText={t.hero.events.noUpcoming}
        lang={lang}
      />
      <div>
        <EventGroup
          title={t.hero.events.past}
          events={past}
          emptyText={t.hero.events.noPast}
          lang={lang}
        />
        {past.length > 0 ? (
          <div className="mt-8 text-center">
            <Link
              to="/$lang/news"
              params={{ lang }}
              className="inline-flex items-center gap-1 font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t.hero.events.seeMore}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}
