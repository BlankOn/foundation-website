import { Link, createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { NewsLang } from '@/lib/news'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import { getNewsArticle } from '@/lib/news'

export const Route = createFileRoute('/$lang/news_/$slug')({
  component: NewsArticlePage,
})

const articleContent = {
  id: {
    back: '← Kembali ke Berita',
    notFoundTitle: 'Berita Tidak Ditemukan',
    notFoundDescription: 'Berita yang Anda cari tidak tersedia.',
  },
  en: {
    back: '← Back to News',
    notFoundTitle: 'News Not Found',
    notFoundDescription:
      'The news article you are looking for is not available.',
  },
}

function formatDate(date: string, lang: string) {
  return new Date(date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function NewsArticlePage() {
  const { lang, slug } = Route.useParams()
  const content = articleContent[lang as keyof typeof articleContent]
  const article = getNewsArticle(slug, lang as NewsLang)

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col">
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-3xl px-6">
            <Link
              to="/$lang/news"
              params={{ lang }}
              className="mb-8 inline-block font-medium text-blue-600 dark:text-blue-400"
            >
              {content.back}
            </Link>

            {article ? (
              <>
                <p className="mb-2 text-sm text-fd-muted-foreground">
                  {formatDate(article.date, lang)}
                </p>
                <article
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.html }}
                />
              </>
            ) : (
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-fd-foreground">
                  {content.notFoundTitle}
                </h1>
                <p className="text-fd-muted-foreground">
                  {content.notFoundDescription}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
