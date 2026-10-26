import { Link, createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { NewsLabel, NewsLang } from '@/lib/news'
import { baseOptions, getTranslations } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import { NewsLabels } from '@/components/news-labels'
import { NEWS_LABELS, getNewsList } from '@/lib/news'

export const Route = createFileRoute('/$lang/news')({
  component: News,
  validateSearch: (search: Record<string, unknown>): { label?: NewsLabel } => {
    const label = search.label
    // Unknown labels must be cleared explicitly; the router merges raw search params.
    return {
      label:
        typeof label === 'string' &&
        (NEWS_LABELS as ReadonlyArray<string>).includes(label)
          ? (label as NewsLabel)
          : undefined,
    }
  },
})

const newsContent = {
  id: {
    title: 'Berita',
    subtitle: 'Kabar Terbaru dari Yayasan BlankOn',
    empty: 'Belum ada berita. Nantikan kabar terbaru dari kami.',
    emptyFiltered: 'Belum ada berita dengan label ini.',
    all: 'Semua',
    filterLabel: 'Saring berita berdasarkan label',
    readMore: 'Baca Selengkapnya',
  },
  en: {
    title: 'News',
    subtitle: 'Latest Updates from BlankOn Foundation',
    empty: 'No news yet. Stay tuned for updates.',
    emptyFiltered: 'No news with this label yet.',
    all: 'All',
    filterLabel: 'Filter news by label',
    readMore: 'Read More',
  },
}

const filterChipClassName =
  'rounded-full border px-3 py-1 text-sm font-medium transition-colors'
const filterChipActiveClassName = 'border-blue-600 bg-blue-600 text-white'
const filterChipInactiveClassName =
  'border-fd-border text-fd-muted-foreground hover:border-blue-400 hover:text-fd-foreground'

function formatDate(date: string, lang: string) {
  return new Date(date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function News() {
  const { lang } = Route.useParams()
  const content = newsContent[lang as keyof typeof newsContent]
  const { label } = Route.useSearch()
  const t = getTranslations(lang)
  const allArticles = getNewsList(lang as NewsLang)
  const articles = label
    ? allArticles.filter((article) => article.labels.includes(label))
    : allArticles

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
          <div className="container relative mx-auto max-w-5xl px-6 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-200">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* News list */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            {allArticles.length > 0 ? (
              <nav
                aria-label={content.filterLabel}
                className="mb-8 flex flex-wrap gap-2"
              >
                <Link
                  to="/$lang/news"
                  params={{ lang }}
                  search={{}}
                  className={`${filterChipClassName} ${label ? filterChipInactiveClassName : filterChipActiveClassName}`}
                >
                  {content.all}
                </Link>
                {NEWS_LABELS.map((item) => (
                  <Link
                    key={item}
                    to="/$lang/news"
                    params={{ lang }}
                    search={{ label: item }}
                    className={`${filterChipClassName} ${label === item ? filterChipActiveClassName : filterChipInactiveClassName}`}
                  >
                    {t.newsLabels[item]}
                  </Link>
                ))}
              </nav>
            ) : null}
            {articles.length === 0 ? (
              <p className="text-center text-lg text-fd-muted-foreground">
                {label ? content.emptyFiltered : content.empty}
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    to="/$lang/news/$slug"
                    params={{ lang, slug: article.slug }}
                    className="flex flex-col rounded-2xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-blue-400"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-sm text-fd-muted-foreground">
                        {formatDate(article.date, lang)}
                      </span>
                      <NewsLabels labels={article.labels} lang={lang} />
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-fd-foreground">
                      {article.title}
                    </h2>
                    <p className="mb-4 flex-1 text-fd-muted-foreground">
                      {article.excerpt}
                    </p>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {content.readMore} →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
