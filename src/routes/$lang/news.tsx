import { Link, createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { NewsLang } from '@/lib/news'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import { getNewsList } from '@/lib/news'

export const Route = createFileRoute('/$lang/news')({
  component: News,
})

const newsContent = {
  id: {
    title: 'Berita',
    subtitle: 'Kabar Terbaru dari Yayasan BlankOn',
    empty: 'Belum ada berita. Nantikan kabar terbaru dari kami.',
    readMore: 'Baca Selengkapnya',
  },
  en: {
    title: 'News',
    subtitle: 'Latest Updates from BlankOn Foundation',
    empty: 'No news yet. Stay tuned for updates.',
    readMore: 'Read More',
  },
}

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
  const articles = getNewsList(lang as NewsLang)

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
            {articles.length === 0 ? (
              <p className="text-center text-lg text-fd-muted-foreground">
                {content.empty}
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    to="/$lang/news/$slug"
                    params={{ lang, slug: article.slug }}
                    className="flex flex-col rounded-2xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-blue-400"
                  >
                    <span className="mb-2 text-sm text-fd-muted-foreground">
                      {formatDate(article.date, lang)}
                    </span>
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
