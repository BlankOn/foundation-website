import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/donate')({
  component: Donate,
})

const donateContent = {
  id: {
    title: 'Donasi',
    subtitle: 'Dukung Gerakan Teknologi Bebas Terbuka',
    description:
      'Kontribusi Anda membantu kami terus mengembangkan teknologi bebas terbuka, menyelenggarakan program edukasi, dan memperkuat komunitas open source di Indonesia. Setiap dukungan, sekecil apapun, sangat berarti bagi keberlanjutan misi kami.',
    why: {
      title: 'Mengapa Donasi Anda Penting',
      items: [
        {
          title: 'Pengembangan Perangkat Lunak',
          description:
            'Mendukung pengembangan dan pemeliharaan proyek-proyek open source seperti BlankOn Linux dan proyek-proyek open source lainnya.',
          icon: 'code',
        },
        {
          title: 'Program Edukasi',
          description:
            'Menyelenggarakan lokakarya, pelatihan, dan konferensi untuk meningkatkan literasi teknologi bebas terbuka di Indonesia.',
          icon: 'education',
        },
        {
          title: 'Infrastruktur',
          description:
            'Membiayai server, hosting, dan infrastruktur yang diperlukan untuk menjalankan layanan dan platform komunitas.',
          icon: 'server',
        },
        {
          title: 'Komunitas',
          description:
            'Memfasilitasi kegiatan komunitas, dokumentasi, dan dukungan untuk kontributor dan pengguna di seluruh Indonesia.',
          icon: 'community',
        },
      ],
    },
    howToDonate: {
      title: 'Cara Berdonasi',
      description:
        'Kami menyediakan berbagai metode donasi untuk kemudahan Anda:',
      methods: [
        {
          name: 'Transfer Bank',
          description: 'Donasi melalui transfer bank lokal',
          details: [
            'Bank: Bank Jago',
            'No. Rekening: 102223737703',
            'Atas Nama: Herpiko Dwi Aguno',
          ],
        },
      ],
    },
    otherWays: {
      title: 'Cara Lain untuk Mendukung',
      description:
        'Selain donasi finansial, ada berbagai cara untuk mendukung misi kami:',
      items: [
        'Berkontribusi kode atau dokumentasi ke proyek-proyek kami',
        'Menjadi mentor atau pembicara di acara kami',
        'Berbagi pengetahuan melalui artikel atau tutorial',
        'Membantu moderasi dan dukungan komunitas',
        'Mempromosikan yayasan dan proyek-proyek kami',
        'Menyumbangkan perangkat keras (hardware) dalam berbagai bentuk, seperti mesin server, SSD, HDD, RAM, dan sebagainya',
      ],
    },
    transparency: {
      title: 'Transparansi & Akuntabilitas',
      description:
        'Kami berkomitmen untuk mengelola dana donasi dengan transparan dan bertanggung jawab. Laporan keuangan kami dipublikasikan secara berkala dan dapat diakses oleh publik.',
      cta: 'Lihat Laporan Keuangan',
    },
    contact: {
      title: 'Pertanyaan?',
      description:
        'Jika Anda memiliki pertanyaan tentang donasi atau ingin mendiskusikan bentuk dukungan lainnya, silakan hubungi kami.',
      email: 'humas@blankon.id',
    },
  },
  en: {
    title: 'Donate',
    subtitle: 'Support the Open Source Technology Movement',
    description:
      'Your contribution helps us continue developing open source technology, organizing educational programs, and strengthening the open source community in Indonesia. Every donation, no matter how small, is meaningful to the sustainability of our mission.',
    why: {
      title: 'Why Your Donation Matters',
      items: [
        {
          title: 'Software Development',
          description:
            'Supporting the development and maintenance of open source projects like BlankOn Linux and other open source projects.',
          icon: 'code',
        },
        {
          title: 'Educational Programs',
          description:
            'Organizing workshops, training sessions, and conferences to increase open source technology literacy in Indonesia.',
          icon: 'education',
        },
        {
          title: 'Infrastructure',
          description:
            'Funding servers, hosting, and infrastructure needed to run community services and platforms.',
          icon: 'server',
        },
        {
          title: 'Community',
          description:
            'Facilitating community activities, documentation, and support for contributors and users across Indonesia.',
          icon: 'community',
        },
      ],
    },
    howToDonate: {
      title: 'How to Donate',
      description: 'We provide various donation methods for your convenience:',
      methods: [
        {
          name: 'Bank Transfer',
          description: 'Donate via local bank transfer',
          details: [
            'Bank: Bank Jago',
            'Account Number: 102223737703',
            'Account Name: Herpiko Dwi Aguno',
          ],
        },
      ],
    },
    otherWays: {
      title: 'Other Ways to Support',
      description:
        'Beyond financial donations, there are various ways to support our mission:',
      items: [
        'Contribute code or documentation to our projects',
        'Become a mentor or speaker at our events',
        'Share knowledge through articles or tutorials',
        'Help with community moderation and support',
        'Promote the foundation and our projects',
        'Donate hardware in various forms, such as servers, SSDs, HDDs, RAM, and more',
      ],
    },
    transparency: {
      title: 'Transparency & Accountability',
      description:
        'We are committed to managing donation funds transparently and responsibly. Our financial reports are published regularly and accessible to the public.',
      cta: 'View Financial Reports',
    },
    contact: {
      title: 'Questions?',
      description:
        'If you have questions about donations or want to discuss other forms of support, please contact us.',
      email: 'humas@blankon.id',
    },
  },
}

function Donate() {
  const { lang } = Route.useParams()
  const content = donateContent[lang as keyof typeof donateContent]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        )
      case 'education':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        )
      case 'server':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        )
      case 'community':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        )
      default:
        return null
    }
  }

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
          <div className="container relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mb-6 text-xl text-blue-200">{content.subtitle}</p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
              {content.description}
            </p>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.why.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {content.why.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {getIcon(item.icon)}
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-fd-foreground">
                    {item.title}
                  </h3>
                  <p className="text-fd-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Donate Section */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.howToDonate.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mx-auto mt-6 max-w-2xl text-fd-muted-foreground">
                {content.howToDonate.description}
              </p>
            </div>

            <div className="mx-auto max-w-md">
              {content.howToDonate.methods.map((method, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-fd-foreground">
                      {method.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-fd-muted-foreground">
                    {method.description}
                  </p>
                  <div className="space-y-2 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm font-mono text-fd-foreground"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Support */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.otherWays.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mx-auto mt-6 max-w-2xl text-fd-muted-foreground">
                {content.otherWays.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.otherWays.items.map((item, index) => (
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

        {/* Transparency Section */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
              <svg
                className="h-8 w-8 text-blue-600 dark:text-blue-400"
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
            <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
              {content.transparency.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-fd-muted-foreground">
              {content.transparency.description}
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1oQKe2ehnWqNHIseqbp3yJTvbCSzGctdV0JWAERF1IUg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
            >
              {content.transparency.cta}
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              {content.contact.description}
            </p>
            <a
              href={`mailto:${content.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {content.contact.email}
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
