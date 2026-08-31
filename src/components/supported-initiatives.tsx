import type { getTranslations } from '@/lib/layout.shared'
import langitKetujuhLogo from '../../content/assets/langitketujuh_logo_horizontal.webp'
import jktlugLogo from '../../content/assets/jktlug.png'
import osas2026Logo from '../../content/assets/osas2026.png'
import belajarFreeBSDLogo from '../../content/assets/belajarfreebsdindonesia.jpeg'

const supportedInitiativeLogos: Record<string, string> = {
  LangitKetujuh: langitKetujuhLogo,
  'Jakarta Linux Users Group': jktlugLogo,
  'openSUSE.Asia Summit 2026': osas2026Logo,
  'Belajar FreeBSD Indonesia': belajarFreeBSDLogo,
}

export function SupportedInitiativesList({
  t,
}: {
  t: ReturnType<typeof getTranslations>
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {t.hero.supportedInitiatives.items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-sm flex-col rounded-2xl border border-fd-border bg-fd-card p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:hover:border-blue-700"
          >
            <div className="mb-6 flex h-20 items-center">
              {supportedInitiativeLogos[item.name] ? (
                <img
                  src={supportedInitiativeLogos[item.name]}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white">
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
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.549 1.549a3 3 0 01-.621 4.72"
                    />
                  </svg>
                </div>
              )}
            </div>
            <h3 className="mb-2 text-lg font-bold text-fd-foreground">
              {item.name}
            </h3>
            <div className="mb-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-6 flex-1 text-sm text-fd-muted-foreground">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300">
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-fd-muted-foreground">
        {t.hero.supportedInitiatives.contact.text}{' '}
        <a
          href={`mailto:${t.hero.supportedInitiatives.contact.email}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          {t.hero.supportedInitiatives.contact.email}
        </a>
      </p>
    </>
  )
}
