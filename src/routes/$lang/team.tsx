import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions, getTranslations } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/team')({
  component: Team,
})

const teamContent = {
  id: {
    title: 'Tim',
    subtitle: 'Kenali Tim di Balik Yayasan BlankOn',
    description:
      'BlankOn dikelola oleh tim yang berpengalaman dan berdedikasi dalam memajukan teknologi bebas terbuka dan kemandirian teknologi di Indonesia.',
    organization: {
      title: 'Struktur Organisasi',
      team: [
        {
          name: 'Rusmanto',
          email: 'rusmanto@blankon.id',
          position: 'Pembina',
          bio: 'Dikenal luas sebagai "Bapak Linux Indonesia," pendiri majalah legendaris InfoLINUX, YPLI (Yayasan Penggerak Linux Indonesia), dan ILC (Indonesia Linux Conference).',
          photo: '/images/rusmanto.jpg',
        },
        {
          name: 'Akhmat Safrudin',
          email: 'asafrudin@blankon.id',
          position: 'Pengawas',
          bio: (
            <>
              Mantan kontributor{' '}
              <a
                href="https://blankonlinux.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                BlankOn Linux
              </a>{' '}
              sejak era 2000-an dengan keterlibatan mendalam di sisi teknis
              maupun strategis. Berpengalaman lebih dari satu dekade dalam
              pengelolaan organisasi nirlaba seperti AirPutih.
            </>
          ),
          photo: '/images/akhmat-safrudin.png',
        },
        {
          name: 'Herpiko Dwi Aguno',
          email: 'herpiko@blankon.id',
          position: 'Direktur Eksekutif',
          bio: (
            <>
              Kontributor aktif{' '}
              <a
                href="https://blankonlinux.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                BlankOn Linux
              </a>{' '}
              sejak 2009 yang saat ini memimpin seluruh tim pengembangan
              distribusi Linux derivatif. Mantan hacktivist di beberapa Linux
              User Group (KPLI NTB dan GLiBogor).
            </>
          ),
          photo: '/images/herpiko-v2.png',
        },
        {
          name: 'Iwan stwn',
          email: 'stwn@blankon.id',
          position: 'Koordinator Program',
          bio: (
            <>
              Pencetus proyek dan pengelola{' '}
              <a
                href="https://speakerdeck.com/stwn/linux-distribution-for-higher-education-still-relevant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Kuliax
              </a>
              , distribusi GNU/Linux yang menyasar pendidikan tinggi. Ia
              terlibat dalam beberapa proyek dan komunitas perangkat lunak
              free/open-source di Indonesia sejak tahun 2001. Saat ini aktif
              sebagai dosen/peneliti Teknik Elektro di Universitas Jenderal
              Soedirman.
            </>
          ),
          photo: '/images/iwan.png',
        },
      ],
    },
  },
  en: {
    title: 'Team',
    subtitle: 'Meet the Team Behind BlankOn Foundation',
    description:
      'BlankOn is managed by an experienced and dedicated team committed to advancing open source technology and technological independence in Indonesia.',
    organization: {
      title: 'Organization Structure',
      team: [
        {
          name: 'Rusmanto',
          email: 'rusmanto@blankon.id',
          position: 'Advisor',
          bio: 'Widely recognized as the "Father of Linux Indonesia," founder of the legendary InfoLINUX magazine, YPLI (Yayasan Penggerak Linux Indonesia), and ILC (Indonesia Linux Conference).',
          photo: '/images/rusmanto.jpg',
        },
        {
          name: 'Akhmat Safrudin',
          email: 'asafrudin@blankon.id',
          position: 'Supervisor',
          bio: (
            <>
              A former{' '}
              <a
                href="https://blankonlinux.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                BlankOn Linux
              </a>{' '}
              contributor since the 2000s, deeply involved in both technical
              development and strategic direction. Brings over a decade of
              experience in non-profit management through his work with
              AirPutih.
            </>
          ),
          photo: '/images/akhmat-safrudin.png',
        },
        {
          name: 'Herpiko Dwi Aguno',
          email: 'herpiko@blankon.id',
          position: 'Executive Director',
          bio: (
            <>
              An active{' '}
              <a
                href="https://blankonlinux.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                BlankOn Linux
              </a>{' '}
              contributor since 2009 who currently leads the entire derivative
              Linux distribution development team. Former hacktivist for a few
              Linux User Groups (KPLI NTB and GLiBogor).
            </>
          ),
          photo: '/images/herpiko-v2.png',
        },
        {
          name: 'Iwan stwn',
          email: 'stwn@blankon.id',
          position: 'Program Manager',
          bio: (
            <>
              The project initiator and maintainer of{' '}
              <a
                href="https://speakerdeck.com/stwn/linux-distribution-for-higher-education-still-relevant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Kuliax
              </a>
              , a GNU/Linux distribution targeting higher education. He has been
              involved in several free/open-source software projects and
              communities in Indonesia since 2001. He is currently an EE
              lecturer/researcher at Universitas Jenderal Soedirman.
            </>
          ),
          photo: '/images/iwan.png',
        },
      ],
    },
  },
}

function Team() {
  const { lang } = Route.useParams()
  const content = teamContent[lang as keyof typeof teamContent]
  const t = getTranslations(lang)

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
            <p className="mb-6 text-xl text-blue-200">{content.subtitle}</p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
              {content.description}
            </p>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="space-y-8">
              {content.organization.team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 sm:flex-row sm:items-start"
                >
                  <div className="flex shrink-0 justify-center sm:justify-start">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-blue-600/20">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="mb-1 text-xl font-bold text-fd-foreground">
                      {member.name}
                    </h3>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                      {member.position}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="mb-3 inline-block text-sm text-fd-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {member.email}
                    </a>
                    <p className="leading-relaxed text-fd-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {t.hero.timeline.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600/20 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-10">
                {t.hero.timeline.events.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 md:gap-10 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content card */}
                    <div className="ml-14 flex-1 md:ml-0 md:w-[calc(50%-28px)]">
                      <div className="rounded-xl border border-fd-border bg-fd-card p-5 transition-shadow hover:shadow-md">
                        <span className="mb-1 inline-block text-sm font-bold text-blue-600 dark:text-blue-400">
                          {event.year}
                        </span>
                        <h3 className="mb-2 text-lg font-bold text-fd-foreground">
                          {event.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-fd-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot on the line */}
                    <div className="absolute left-[16px] top-5 flex h-[15px] w-[15px] items-center justify-center md:left-1/2 md:-translate-x-1/2">
                      <div className="h-3 w-3 rounded-full border-2 border-blue-500 bg-fd-background" />
                    </div>

                    {/* Spacer for the other side (desktop) */}
                    <div className="hidden flex-1 md:block md:w-[calc(50%-28px)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
