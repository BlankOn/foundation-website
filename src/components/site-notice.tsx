import { useEffect, useState } from 'react'

const STORAGE_KEY = 'blankon-foundation-site-notice-dismissed'
const BLANKON_LINUX_URL = 'https://blankonlinux.id'

const siteNoticeContent = {
  id: {
    label: 'Pemberitahuan situs',
    title: 'Ini bukan situs BlankOn Linux',
    description:
      'blankon.id adalah situs BlankOn Foundation (Yayasan Penggiat Sumber Terbuka), sebuah organisasi nirlaba yang merupakan entitas terpisah dari proyek BlankOn Linux. Jika Anda mencari situs BlankOn Linux, silakan kunjungi blankonlinux.id.',
    cta: 'Buka blankonlinux.id',
    dismiss: 'Mengerti, jangan tampilkan lagi',
  },
  en: {
    label: 'Site notice',
    title: 'This is not the BlankOn Linux website',
    description:
      'blankon.id is the website of BlankOn Foundation (Yayasan Penggiat Sumber Terbuka), a non-profit organization that is a separate entity from the BlankOn Linux project. If you are looking for the BlankOn Linux website, please visit blankonlinux.id.',
    cta: 'Go to blankonlinux.id',
    dismiss: "Got it, don't show this again",
  },
}

export function SiteNotice({ lang }: { lang?: string }) {
  const content =
    siteNoticeContent[lang as keyof typeof siteNoticeContent] ??
    siteNoticeContent.id
  const [visible, setVisible] = useState(false)

  // Decide on the client only, so the server-rendered markup stays the same
  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== '1')
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Storage unavailable, the notice will show again on the next visit
    }
  }

  return (
    <div
      role="region"
      aria-label={content.label}
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="container mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-lg dark:border-yellow-900 dark:bg-yellow-950 md:flex-row md:items-center">
        <div className="min-w-0 flex-1">
          <h2 className="mb-1 text-base font-bold text-fd-foreground">
            {content.title}
          </h2>
          <p className="text-sm leading-relaxed text-fd-muted-foreground">
            {content.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={BLANKON_LINUX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-yellow-300 px-4 py-2 text-sm font-semibold text-fd-foreground transition-colors hover:bg-yellow-100 dark:border-yellow-800 dark:hover:bg-yellow-900"
          >
            {content.cta}
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {content.dismiss}
          </button>
        </div>
      </div>
    </div>
  )
}
