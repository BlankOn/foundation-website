import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/sponsorship')({
  component: Sponsorship,
})

const sponsors = [
  {
    name: 'STT Terpadu Nurul Fikri',
    logo: '/images/sponsorship-logo-sttnf-brand.png',
    url: 'https://www.nurulfikri.ac.id',
  },
  {
    name: 'HostBadak',
    logo: '/images/sponsorship-logo-hostbadak.png',
    url: 'https://hostbadak.com',
  },
]

const sponsorshipContent = {
  id: {
    title: 'Sponsorship',
    subtitle: 'Dukung Kemandirian Teknologi Indonesia',
    intro:
      'Yayasan BlankOn didanai sepenuhnya oleh sponsorship dan donasi dari individu maupun organisasi yang peduli terhadap ekosistem teknologi bebas terbuka di Indonesia.',
    principles: {
      title: 'Prinsip Kami',
      items: [
        'Seluruh sponsorship berbentuk donasi tanpa syarat. Posisi di kepengurusan dan segala bentuk pengaruh terhadap arah organisasi tidak dapat dibeli.',
        'Dana sponsorship digunakan untuk pengembangan proyek, penyelenggaraan program edukasi, dan penguatan komunitas open source.',
      ],
    },
    howTo: {
      title: 'Menjadi Sponsor',
      description:
        'Kami menerima donasi satu kali maupun donasi rutin bulanan. Jika Anda atau organisasi Anda ingin memberikan dukungan besar, kami dengan senang hati akan menampilkan logo Anda di situs web ini.',
      cta: 'Hubungi kami untuk menjadi sponsor.',
    },
    currentSponsors: 'Sponsor Kami',
  },
  en: {
    title: 'Sponsorship',
    subtitle: 'Support Technological Independence in Indonesia',
    intro:
      'BlankOn Foundation is funded entirely by sponsorships and donations from individuals and organizations who care about the open source technology ecosystem in Indonesia.',
    principles: {
      title: 'Our Principles',
      items: [
        'All sponsorships are in the form of unrestricted donations. Board seats and any form of influence over the direction of the organization are not for sale.',
        'Sponsorship funds are used for project development, educational programs, and strengthening the open source community.',
      ],
    },
    howTo: {
      title: 'Become a Sponsor',
      description:
        'We accept one-time and recurring monthly donations. If you or your organization would like to make a significant contribution, we would be happy to display your logo on this website.',
      cta: 'Contact us to become a sponsor.',
    },
    currentSponsors: 'Our Sponsors',
  },
}

function Sponsorship() {
  const { lang } = Route.useParams()
  const content = sponsorshipContent[lang as keyof typeof sponsorshipContent]

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

        {/* Intro + Principles */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-3xl px-6">
            <p className="mb-12 text-center text-lg leading-relaxed text-fd-muted-foreground">
              {content.intro}
            </p>

            <div className="mb-12">
              <h2 className="mb-6 text-center text-2xl font-bold text-fd-foreground md:text-3xl">
                {content.principles.title}
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="space-y-4">
                {content.principles.items.map((item, index) => (
                  <div
                    key={index}
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="leading-relaxed text-fd-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to become a sponsor */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-fd-foreground md:text-3xl">
              {content.howTo.title}
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            <p className="mb-6 text-lg leading-relaxed text-fd-muted-foreground">
              {content.howTo.description}
            </p>
            <p className="mb-8 text-lg text-fd-muted-foreground">
              {content.howTo.cta}
            </p>
            <a
              href="mailto:humas@blankon.id"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              humas@blankon.id
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                {content.currentSponsors}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  title={sponsor.name}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto object-contain md:h-20"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
