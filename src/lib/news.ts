import { marked } from 'marked'

marked.setOptions({ gfm: true })

export type NewsLang = 'id' | 'en'

export const NEWS_LABELS = [
  'event',
  'sponsor',
  'support',
  'release',
  'announcement',
] as const

export type NewsLabel = (typeof NEWS_LABELS)[number]

export interface NewsArticle {
  slug: string
  date: string
  lang: NewsLang
  labels: Array<NewsLabel>
  title: string
  excerpt: string
  html: string
}

const FILENAME_PATTERN = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)\.(id|en)\.md$/
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/

const rawFiles = import.meta.glob<string>('/content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const assetUrls = import.meta.glob<string>('/content/assets/*', {
  query: '?url',
  import: 'default',
  eager: true,
})

function resolveAssetPaths(raw: string): string {
  return raw.replace(
    /(["'(])(?:\.?\/)?content\/assets\/([^"')\s]+)/g,
    (match, prefix, filename) => {
      const url = assetUrls[`/content/assets/${filename}`]
      return url ? `${prefix}${url}` : match
    },
  )
}

// Splits off a leading `---` block; only `labels: [a, b]` is read from it.
function parseFrontmatter(raw: string): {
  labels: Array<NewsLabel>
  body: string
} {
  const match = raw.match(FRONTMATTER_PATTERN)
  if (!match) return { labels: [], body: raw }

  const labelsLine = match[1].match(/^labels:\s*\[([^\]]*)\]\s*$/m)
  const labels = (labelsLine ? labelsLine[1].split(',') : [])
    .map((label) => label.trim().replace(/^["']|["']$/g, ''))
    .filter((label): label is NewsLabel =>
      (NEWS_LABELS as ReadonlyArray<string>).includes(label),
    )

  return { labels, body: raw.slice(match[0].length) }
}

function extractTitle(raw: string): string {
  const match = raw.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : ''
}

function stripImages(text: string): string {
  return text
    .replace(/<img[^>]*>/gi, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .trim()
}

function extractExcerpt(raw: string): string {
  for (const line of raw.split('\n')) {
    const trimmed = stripImages(line.trim())
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
    const { labels, body } = parseFrontmatter(raw)
    return {
      slug,
      date,
      lang: lang as NewsLang,
      labels,
      title: extractTitle(body),
      excerpt: extractExcerpt(body),
      html: marked.parse(resolveAssetPaths(body), { async: false }),
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
