import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import { EmeritusWall } from '@/components/emeritus-wall'

export const Route = createFileRoute('/$lang/membership')({
  component: Membership,
})

const membershipContent = {
  id: {
    title: 'Keanggotaan',
    subtitle: 'Jadilah Bagian dari Gerakan Teknologi Bebas Terbuka',
    howToJoin: {
      title: 'Cara Menjadi Anggota',
      ways: [
        {
          title: 'Berkontribusi pada Proyek',
          description:
            'Berkontribusilah pada proyek-proyek yang sedang kami dukung dan jalankan. Kontribusi dapat berupa kode, dokumentasi, desain, pengujian, atau bentuk lainnya.',
        },
        {
          title: 'Donasi Rutin Bulanan',
          description:
            'Berdonasi secara rutin setiap bulan dengan minimum Rp100.000 untuk mendukung keberlangsungan program dan kegiatan yayasan.',
        },
      ],
    },
    benefits: {
      title: 'Benefit Anggota',
      subtitle: 'Untuk kontributor aktif dan donatur tetap',
      items: [
        'Diskon atau gratis untuk acara dan konferensi',
        'Diskon atau gratis untuk merchandise',
        'Email forwarding di @pendekar.blankon.id',
        'Hak menggunakan badge untuk profil media sosial atau blog',
      ],
    },
    cta: {
      title: 'Tertarik Menjadi Anggota?',
      description:
        'Hubungi kami untuk informasi lebih lanjut mengenai keanggotaan.',
      button: 'Hubungi Kami',
    },
  },
  en: {
    title: 'Membership',
    subtitle: 'Be Part of the Open Source Technology Movement',
    howToJoin: {
      title: 'How to Become a Member',
      ways: [
        {
          title: 'Contribute to Our Projects',
          description:
            'Contribute to our current projects. Contributions can include code, documentation, design, testing, or other forms of involvement.',
        },
        {
          title: 'Monthly Recurring Donation',
          description:
            'Donate on a monthly basis with a minimum of IDR 100,000 to support the continuity of the foundation\'s programs and activities.',
        },
      ],
    },
    benefits: {
      title: 'Member Benefits',
      subtitle: 'For active contributors and regular donors',
      items: [
        'Discounted or complimentary access to events and conferences',
        'Discounted or complimentary merchandise',
        'Email forwarding at @pendekar.blankon.id',
        'Eligibility to use the member badge on your social media profile or blog',
      ],
    },
    cta: {
      title: 'Interested in Becoming a Member?',
      description:
        'Contact us for more information about membership.',
      button: 'Contact Us',
    },
  },
}

function Membership() {
  const { lang } = Route.useParams()
  const content = membershipContent[lang as keyof typeof membershipContent]

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

        {/* Emeritus Contributor Wall */}
        <EmeritusWall lang={lang} />

        {/* How to Become a Member */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.howToJoin.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {content.howToJoin.ways.map((way, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-fd-foreground">
                    {way.title}
                  </h3>
                  <p className="leading-relaxed text-fd-muted-foreground">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.benefits.title}
              </h2>
              <p className="mb-4 text-base text-fd-muted-foreground">
                {content.benefits.subtitle}
              </p>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.benefits.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border border-fd-border bg-fd-card p-5 transition-shadow hover:shadow-md"
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
                  <p className="text-fd-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mascot Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 py-20">
          <div className="container mx-auto max-w-4xl px-6 flex justify-center">
            <img
              src="/images/boni-pose-3.png"
              alt="Boni - BlankOn Mascot"
              className="h-64 w-auto object-contain md:h-80"
            />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
