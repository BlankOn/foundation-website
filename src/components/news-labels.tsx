import type { NewsLabel } from '@/lib/news'
import { getTranslations } from '@/lib/layout.shared'

const labelStyles: Record<NewsLabel, string> = {
  event: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
  sponsor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  support:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
  release:
    'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300',
  announcement:
    'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
}

export function NewsLabels({
  labels,
  lang,
  className = '',
}: {
  labels: Array<NewsLabel>
  lang: string
  className?: string
}) {
  if (labels.length === 0) return null
  const t = getTranslations(lang)

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {labels.map((label) => (
        <li
          key={label}
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${labelStyles[label]}`}
        >
          {t.newsLabels[label]}
        </li>
      ))}
    </ul>
  )
}
