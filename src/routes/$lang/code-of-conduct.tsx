import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/code-of-conduct')({
  component: CodeOfConduct,
})

const codeOfConductContent = {
  id: {
    title: 'Kode Etik Berkomunitas',
    subtitle:
      'Proyek BlankOn bertujuan menyelesaikan misi-misinya. Kita bisa mencapai hal tersebut dengan bersikap saling menghormati satu sama lain.',
    intro:
      'Dokumen ini menjabarkan seperti apa sikap ideal yang perlu dipegang sehingga Anda tahu apa yang perlu dilakukan ketika bergabung dengan BlankOn. Ini tentang siapa kita dan akan menjadi apa kita nantinya. Tidak ada paksaan resmi atas kode etik ini. Dokumen ini tidak perlu dianggap sebagai dokumen hukum.',
    adviceTitle: 'Saran',
    advice: [
      {
        title: 'Saling menghormati dan berhati-hati',
        description:
          'Perbedaan pendapat bukanlah dalih untuk bersikap buruk atau menyerang orang lain. Ingatlah bahwa komunitas dengan suasana komunikasi yang tidak nyaman biasanya tidak akan produktif.',
      },
      {
        title: 'Bersabarlah',
        description:
          'Setiap orang yang meminta bantuan berarti dia sedang membutuhkan bantuan. Dengan sopan, berilah saran untuk membaca dokumentasi yang terkait atau rujukan-rujukan yang tepat. Hindarilah sikap agresif atau balasan yang tidak jelas seperti RTFM atau bentuk pelecehan lainnya (bully).',
      },
      {
        title: 'Berprasangka baik',
        description:
          'Ingatlah bahwa beberapa keputusan seringkali merupakan pilihan-pilihan yang sulit di antara beberapa prioritas. Jika kita tidak setuju, tolong sampaikan secara sopan. Jika ada hal yang terasa menyakitkan hati atau tidak pantas, pastikan bahwa kita tidak sedang salah paham. Mintalah klarifikasi, bukan langsung berburuk sangka.',
      },
      {
        title: 'Singkat saja',
        description:
          'Mari kita hindari pengulangan apa yang sudah dikatakan. Percakapan besar sulit dikendalikan. Orang kadang merasa diserang bila menerima banyak pesan yang intinya sama.',
      },
    ],
    boundariesTitle: 'Batasan',
    boundaries:
      'Komunitas maupun acara yang diselenggarakan di dalamnya ini didedikasikan untuk memberikan pengalaman berbagi yang bebas dari tindakan pelecehan untuk semua orang, terlepas dari jenis kelamin, identitas dan ekspresi gender, usia, orientasi seksual, kecacatan, penampilan fisik, ukuran tubuh, ras, etnisitas, agama (atau kekurangannya), sudut pandang politik, atau pilihan teknologi. Kami tidak mentolerir pelecehan terhadap individu menyangkut hal-hal di atas dalam bentuk apapun baik di tempat penyelenggaraan komunitas/acara maupun publikasi media sosial dan media online lainnya. Individu yang melanggar peraturan ini dapat dikenai sanksi atau diusir dari komunitas/acara tanpa pengembalian dana (jika ada) atas kebijaksanaan pengurus komunitas.',
    reporting: {
      title: 'Melaporkan pelanggaran',
      beforeEmail:
        'Jika menurut Anda ada pihak yang melanggar kode etik ini, silakan laporkan kepada kami melalui surel ke',
      email: 'humas@blankon.id',
      afterEmail: 'Setiap laporan yang masuk akan kami tinjau.',
    },
    scopeTitle: 'Kode etik ini berlaku pada',
    scope: [
      'Milis',
      'Grup Facebook',
      'Grup Telegram',
      'Kegiatan-kegiatan luring',
    ],
    attribution: {
      before: 'Kode etik ini disadur dari',
      and: 'dan',
      adaInitiative: 'The Ada Initiative',
      after:
        'Tata cara berkomunitas yang lebih detail (semisal tata cara berkomunikasi di milis, berbagi kutipan kode, dan hal-hal lain) sedang dalam proses penyusunan. Silakan mengirim pull request bila ingin memperbaiki dokumen ini.',
    },
  },
  en: {
    title: 'Community Code of Conduct',
    subtitle:
      'The BlankOn project sets out to accomplish its missions. We get there by treating one another with respect.',
    intro:
      'This page describes the conduct we hold ourselves to, so that you know what is expected of you when you join BlankOn. It is about who we are and who we want to become. There is no formal enforcement of this code of conduct, and this document is not meant to be read as a legal one.',
    adviceTitle: 'Advice',
    advice: [
      {
        title: 'Be respectful and considerate',
        description:
          'A difference of opinion is no excuse for poor manners or for attacking other people. Remember that a community where people are uncomfortable communicating is rarely a productive one.',
      },
      {
        title: 'Be patient',
        description:
          'Anyone who asks for help genuinely needs it. Politely point them to the relevant documentation or the right references. Avoid aggression and dismissive replies such as RTFM, or any other form of bullying.',
      },
      {
        title: 'Assume good faith',
        description:
          'Remember that decisions are often difficult trade-offs between competing priorities. If you disagree, please say so politely. If something feels hurtful or inappropriate, first make sure it is not a misunderstanding. Ask for clarification rather than assuming the worst.',
      },
      {
        title: 'Keep it brief',
        description:
          'Let us avoid repeating what has already been said. Large conversations are hard to follow, and people can feel piled on when they receive many messages making the same point.',
      },
    ],
    boundariesTitle: 'Boundaries',
    boundaries:
      'This community and the events held within it are dedicated to providing a harassment-free shared experience for everyone, regardless of sex, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack of it), political views, or technology choices. We do not tolerate harassment of individuals on any of these grounds in any form, whether at community or event venues or in posts on social media and other online media. Individuals who break these rules may be sanctioned or expelled from the community or event without a refund (if any), at the discretion of the community organizers.',
    reporting: {
      title: 'Reporting a breach',
      beforeEmail:
        'If you believe someone has breached this code of conduct, please let us know by email at',
      email: 'humas@blankon.id',
      afterEmail: 'Every report we receive will be reviewed.',
    },
    scopeTitle: 'This code of conduct applies to',
    scope: [
      'The mailing list',
      'The Facebook group',
      'The Telegram group',
      'In-person activities',
    ],
    attribution: {
      before: 'This code of conduct is adapted from',
      and: 'and',
      adaInitiative: 'The Ada Initiative',
      after:
        'More detailed community guidelines (such as how to communicate on the mailing list, how to share code snippets, and other matters) are still being drafted. Please send a pull request if you would like to improve this document.',
    },
  },
}

const attributionSources = [
  {
    label: 'wiki.gnome.org',
    url: 'https://wiki.gnome.org/action/show/Foundation/CodeOfConduct',
  },
  {
    label: '2012.jsconf.us',
    url: 'http://2012.jsconf.us/#/about',
  },
]

function CodeOfConduct() {
  const { lang } = Route.useParams()
  const content =
    codeOfConductContent[lang as keyof typeof codeOfConductContent] ??
    codeOfConductContent.id

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

        {/* Intro */}
        <section className="bg-fd-background pt-20">
          <div className="container mx-auto max-w-3xl px-6">
            <p className="text-center text-lg leading-relaxed text-fd-muted-foreground">
              {content.intro}
            </p>
          </div>
        </section>

        {/* Advice */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.adviceTitle}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {content.advice.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-fd-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fd-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boundaries */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.boundariesTitle}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="rounded-2xl border border-fd-border bg-fd-card p-8">
              <p className="leading-relaxed text-fd-muted-foreground">
                {content.boundaries}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/40">
              <h3 className="mb-2 text-lg font-bold text-fd-foreground">
                {content.reporting.title}
              </h3>
              <p className="leading-relaxed text-fd-muted-foreground">
                {content.reporting.beforeEmail}{' '}
                <a
                  href={`mailto:${content.reporting.email}`}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  {content.reporting.email}
                </a>
                . {content.reporting.afterEmail}
              </p>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.scopeTitle}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <ul className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
              {content.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-fd-border bg-fd-card p-4"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-fd-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-fd-muted-foreground">
              {content.attribution.before}{' '}
              <a
                href={attributionSources[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                {attributionSources[0].label}
              </a>
              ,{' '}
              <a
                href={attributionSources[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                {attributionSources[1].label}
              </a>{' '}
              {content.attribution.and} {content.attribution.adaInitiative}.{' '}
              {content.attribution.after}
            </p>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
