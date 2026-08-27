import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/contact-us')({
  component: ContactUs,
})

const socialLinks = [
  { label: 'X / Twitter', url: 'https://x.com/BlankOnLinux' },
  { label: 'Facebook', url: 'https://www.facebook.com/blankon.linux' },
  { label: 'Instagram', url: 'https://www.instagram.com/blankonlinux/' },
  { label: 'Telegram', url: 'https://t.me/BlankOnLinux' },
]

const contactContent = {
  id: {
    title: 'Hubungi Kami',
    subtitle: 'Kami senang mendengar dari Anda',
    intro:
      'Untuk pertanyaan, kerja sama, sponsorship, keanggotaan, atau hal lain seputar Yayasan BlankOn Penggiat Sumber Terbuka, silakan hubungi kami melalui surel berikut.',
    socialTitle: 'Sosial Media',
    socialDescription:
      'Anda juga dapat mengikuti dan menghubungi kami melalui kanal sosial media berikut.',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'We would love to hear from you',
    intro:
      'For questions, collaboration, sponsorship, membership, or anything else regarding Yayasan BlankOn Penggiat Sumber Terbuka, please reach us at the email address below.',
    socialTitle: 'Social Media',
    socialDescription:
      'You can also follow and reach us through the following social media channels.',
  },
}

function ContactUs() {
  const { lang } = Route.useParams()
  const content =
    contactContent[lang as keyof typeof contactContent] ?? contactContent.id

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

        {/* Email */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <p className="mb-10 text-lg leading-relaxed text-fd-muted-foreground">
              {content.intro}
            </p>
            <a
              href="mailto:humas@blankon.id"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
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
              humas@blankon.id
            </a>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-fd-foreground md:text-3xl">
              {content.socialTitle}
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            <p className="mb-8 text-lg leading-relaxed text-fd-muted-foreground">
              {content.socialDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-fd-border bg-fd-card px-6 py-3 font-medium text-fd-foreground transition-all hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-700"
                >
                  {link.label}
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
