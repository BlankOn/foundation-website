import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'
import guidelinesPdf from '../../../content/assets/BlankOn-Brand-Guidelines-v1.0.0.pdf?url'
import logoZip from '../../../content/assets/BlankOn-Foundation-Logo.zip?url'
import guidelinesCover from '../../../content/assets/blankon-brand-guidelines-cover.png'

export const Route = createFileRoute('/$lang/brand-guidelines')({
  component: BrandGuidelines,
})

const guidelinesFileName = 'BlankOn-Brand-Guidelines-v1.0.0.pdf'
const guidelinesVersion = '1.0.0'
const logoFileName = 'BlankOn-Foundation-Logo.zip'

const brandGuidelinesContent = {
  id: {
    title: 'BlankOn Brand Guidelines',
    subtitle:
      'Panduan untuk menggunakan identitas visual BlankOn secara tepat dan konsisten.',
    intro: [
      'Nama BlankOn berasal dari bahasa komputer yang paling dasar: "Blank" sebagai 0 dan "On" sebagai 1. Keduanya menggambarkan perjalanan seseorang dari keadaan kosong menuju keadaan berdaya, dari pemula menjadi cakap secara digital. Identitas visual kami dibangun di atas gagasan tersebut.',
      'Bagaimana cara melafalkannya? BlankOn dibaca "blank on" seperti dalam bahasa Inggris. Namun, melafalkannya sebagai "blangkon", seperti penutup kepala khas Jawa, juga tidak salah. Silakan ucapkan dengan gaya bahasa Inggris maupun gaya Indonesia, mana pun yang terasa paling nyaman bagi Anda.',
      'Panduan ini kami susun agar siapa pun, baik kontributor, komunitas, mitra, maupun media, dapat menampilkan BlankOn dengan cara yang tepat. Identitas yang konsisten membantu orang mengenali BlankOn dengan mudah, di mana pun mereka menjumpainya.',
      'Silakan gunakan logo dan elemen visual BlankOn untuk membicarakan, mempromosikan, atau mendukung proyek dan kegiatan kami. Untuk penggunaan yang dapat menimbulkan kesan dukungan resmi, seperti produk komersial atau merchandise, hubungi kami terlebih dahulu.',
    ],
    download: {
      title: 'Unduhan',
      description:
        'Berisi logo, variasi warna, palet, tipografi, contoh penggunaan yang keliru, dan supergrafis.',
      button: 'Unduh PDF',
      version: 'Versi',
      format: 'PDF · 14 halaman · 18,8 MB',
      logoButton: 'Unduh Logo',
      logoFormat: 'SVG dalam ZIP · warna, putih, dan serba putih',
      coverAlt: 'Sampul BlankOn Brand Guidelines',
    },
  },
  en: {
    title: 'BlankOn Brand Guidelines',
    subtitle:
      'A guide to using the BlankOn visual identity correctly and consistently.',
    intro: [
      'The name BlankOn comes from the most basic language of computing: "Blank" as 0 and "On" as 1. Together they describe a journey from an empty state to an empowered one, from novice to digitally capable. Our visual identity is built on that idea.',
      'How do you pronounce it? BlankOn is read as "blank on", as in English. That said, pronouncing it "blangkon", like the traditional Javanese headdress, is not wrong either. Feel free to say it the English way or the Indonesian way, whichever feels most natural to you.',
      'We put this guide together so that anyone, whether contributors, communities, partners, or the press, can present BlankOn the right way. A consistent identity helps people recognise BlankOn easily, wherever they come across it.',
      'You are welcome to use the BlankOn logo and visual elements to talk about, promote, or support our projects and activities. For uses that may suggest official endorsement, such as commercial products or merchandise, please contact us first.',
    ],
    download: {
      title: 'Downloads',
      description:
        'Covers the logo, colour variations, palette, typography, examples of misuse, and supergraphics.',
      button: 'Download PDF',
      version: 'Version',
      format: 'PDF · 14 pages · 18.8 MB',
      logoButton: 'Download Logo',
      logoFormat: 'SVG in ZIP · colour, white, and all-white',
      coverAlt: 'BlankOn Brand Guidelines cover',
    },
  },
}

function BrandGuidelines() {
  const { lang } = Route.useParams()
  const content =
    brandGuidelinesContent[lang as keyof typeof brandGuidelinesContent] ??
    brandGuidelinesContent.id

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

        {/* Introduction & Download */}
        <section className="bg-fd-background py-14">
          <div className="container mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-5">
            <div className="flex flex-col gap-4 md:col-span-3">
              {content.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-fd-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card">
                <a
                  href={guidelinesPdf}
                  download={guidelinesFileName}
                  className="block"
                >
                  <img
                    src={guidelinesCover}
                    alt={content.download.coverAlt}
                    className="aspect-[800/566] w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h2 className="mb-2 text-lg font-bold text-fd-foreground">
                    {content.download.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-fd-muted-foreground">
                    {content.download.description}
                  </p>
                  <a
                    href={guidelinesPdf}
                    download={guidelinesFileName}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    {content.download.button}
                  </a>
                  <p className="mt-3 text-center text-xs text-fd-muted-foreground">
                    {content.download.version} {guidelinesVersion} ·{' '}
                    {content.download.format}
                  </p>
                  <a
                    href={logoZip}
                    download={logoFileName}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-fd-border bg-fd-background px-5 py-3 font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    {content.download.logoButton}
                  </a>
                  <p className="mt-3 text-center text-xs text-fd-muted-foreground">
                    {content.download.logoFormat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
