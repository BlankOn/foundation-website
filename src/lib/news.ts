import { marked } from 'marked'

marked.setOptions({ gfm: true })

export type NewsLang = 'id' | 'en'

export interface NewsArticle {
  slug: string
  date: string
  lang: NewsLang
  title: string
  excerpt: string
  html: string
}

const FILENAME_PATTERN = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)\.(id|en)\.md$/

const rawFiles = import.meta.glob<string>('/content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function extractTitle(raw: string): string {
  const match = raw.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : ''
}

function extractExcerpt(raw: string): string {
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || /^-{3,}$/.test(trimmed)) {
      continue
    }
    return trimmed.length > 160 ? `${trimmed.slice(0, 160).trim()}…` : trimmed
  }
  return ''
}

const articles: Array<NewsArticle> = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const filename = path.split('/').pop() ?? ''
    const match = filename.match(FILENAME_PATTERN)
    if (!match) return null

    const [, date, slug, lang] = match
    return {
      slug,
      date,
      lang: lang as NewsLang,
      title: extractTitle(raw),
      excerpt: extractExcerpt(raw),
      html: marked.parse(raw, { async: false }),
    }
  })
  .filter((article): article is NewsArticle => article !== null)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getNewsList(lang: NewsLang): Array<NewsArticle> {
  const bySlug = new Map<string, NewsArticle>()

  for (const article of articles) {
    if (article.lang === lang || !bySlug.has(article.slug)) {
      bySlug.set(article.slug, article)
    }
  }

  return Array.from(bySlug.values()).sort((a, b) =>
    b.date.localeCompare(a.date),
  )
}

export function getNewsArticle(
  slug: string,
  lang: NewsLang,
): NewsArticle | undefined {
  return (
    articles.find(
      (article) => article.slug === slug && article.lang === lang,
    ) ?? articles.find((article) => article.slug === slug)
  )
}
