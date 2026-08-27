import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/legal')({
  component: Legal,
})

const legalDocuments = [
  {
    title:
      'Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0004533.AH.01.04 Tahun 2026 Tentang Pengesahan Pendirian Yayasan BlankOn Penggiat Sumber Terbuka',
    note: {
      id: 'Pengesahan pendirian yayasan sebagai badan hukum.',
      en: 'Decree of the Minister of Law of the Republic of Indonesia ratifying the establishment of the foundation as a legal entity.',
    },
  },
  {
    title:
      'Daftar Yayasan Nomor AHU-0006657.AH.01.12.Tahun 2026 Tanggal 13 Februari 2026',
    note: {
      id: 'Pencatatan yayasan dalam Daftar Yayasan.',
      en: 'Registration of the foundation in the national Register of Foundations, dated 13 February 2026.',
    },
  },
]

const legalContent = {
  id: {
    title: 'Legal & Trademark',
    subtitle: 'Dasar Hukum Yayasan BlankOn Penggiat Sumber Terbuka',
    intro:
      'Yayasan BlankOn Penggiat Sumber Terbuka adalah badan hukum yang terdaftar resmi di Republik Indonesia berdasarkan dokumen berikut.',
    documentsTitle: 'Dokumen Legal',
  },
  en: {
    title: 'Legal & Trademark',
    subtitle: 'Legal Basis of Yayasan BlankOn Penggiat Sumber Terbuka',
    intro:
      'Yayasan BlankOn Penggiat Sumber Terbuka is a legal entity officially registered in the Republic of Indonesia under the following documents.',
    documentsTitle: 'Legal Documents',
  },
}

function Legal() {
  const { lang } = Route.useParams()
  const content =
    legalContent[lang as keyof typeof legalContent] ?? legalContent.id
  const locale = lang === 'en' ? 'en' : 'id'

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

        {/* Legal Documents */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-3xl px-6">
            <p className="mb-12 text-center text-lg leading-relaxed text-fd-muted-foreground">
              {content.intro}
            </p>

            <h2 className="mb-6 text-center text-2xl font-bold text-fd-foreground md:text-3xl">
              {content.documentsTitle}
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />

            <ul className="space-y-4">
              {legalDocuments.map((doc) => (
                <li
                  key={doc.title}
                  className="flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold leading-relaxed text-fd-foreground">
                      {doc.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">
                      {doc.note[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
