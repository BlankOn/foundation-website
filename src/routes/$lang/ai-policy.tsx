import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/ai-policy')({
  component: AiPolicy,
})

const commitExample = 'feat(gen): add support for multi-language rendering'

const aiPolicyContent = {
  id: {
    title: 'Kebijakan AI',
    subtitle:
      'Proyek ini memperbolehkan penggunaan teknologi Gen-AI dalam proses penulisan kode, mulai dari auto-complete hingga agen generatif penuh, dengan ketentuan tertentu untuk menjaga kualitas, keamanan, dan transparansi kontribusi.',
    guidelinesTitle: 'Pedoman Kontribusi',
    guidelinesIntro:
      'Kode yang dibuat atau dibantu oleh Gen-AI, khususnya yang melibatkan agen generatif, dianjurkan mengikuti ketentuan berikut:',
    guidelines: [
      {
        title: 'Tinjauan Rekan Sejawat',
        description:
          'Setiap kontribusi yang melibatkan kolaborasi wajib melalui proses code review dan memperoleh minimal satu persetujuan dari rekan sejawat atau pemimpin tim.',
      },
      {
        title: 'Penandaan pada Pesan Commit',
        description: 'Sertakan penanda gen pada pesan commit. Contoh:',
        code: commitExample,
      },
      {
        title: 'Transparansi Kontribusi',
        description:
          'Kontributor diminta untuk mengungkapkan bagian mana dalam kode yang dihasilkan atau dibantu oleh Gen-AI, baik dalam pull request, komentar review, atau dokumentasi perubahan.',
      },
      {
        title: 'Pemahaman atas Kode',
        description:
          'Meskipun kode dibantu AI, kontributor tetap bertanggung jawab penuh atas kode tersebut dan harus dapat menjelaskan logika, maksud, dan konsekuensi teknisnya apabila diminta oleh pengulas kode.',
      },
      {
        title: 'Komunikasi Proaktif',
        description:
          'Kontributor diharapkan menjaga komunikasi yang jelas untuk membantu kolaborator memahami konteks, asumsi, serta batasan dari kode yang dibantu oleh Gen-AI.',
      },
    ],
    prohibitionsTitle: 'Larangan',
    prohibitionsIntro:
      'Penggunaan Agentic AI (AI dengan kemampuan eksekusi otomatis dan tindakan mandiri) tidak diperbolehkan untuk:',
    prohibitions: [
      'Melakukan eksekusi pada mesin, server, atau infrastruktur milik proyek BlankOn.',
      'Digunakan dengan kredensial, token, atau kunci akses yang terkait dengan akun atau sistem dalam ekosistem BlankOn.',
    ],
    updates: {
      title: 'Pembaruan Kebijakan',
      description:
        'Kebijakan ini dapat diperbarui dari waktu ke waktu, mengingat teknologi ini terus berkembang seiring berjalannya waktu.',
    },
  },
  en: {
    title: 'AI Policy',
    subtitle:
      'This project permits the use of Gen-AI technology in the code writing process, from auto-complete through to fully generative agents, subject to certain conditions that safeguard the quality, security, and transparency of contributions.',
    guidelinesTitle: 'Contribution Guidelines',
    guidelinesIntro:
      'Code created or assisted by Gen-AI, particularly where generative agents are involved, is expected to follow these provisions:',
    guidelines: [
      {
        title: 'Peer Review',
        description:
          'Every contribution involving collaboration must go through a code review process and obtain at least one approval from a peer or team lead.',
      },
      {
        title: 'Commit Message Tagging',
        description: 'Include the gen marker in the commit message. Example:',
        code: commitExample,
      },
      {
        title: 'Contribution Transparency',
        description:
          'Contributors are asked to disclose which parts of the code were generated or assisted by Gen-AI, whether in the pull request, in review comments, or in the change documentation.',
      },
      {
        title: 'Understanding the Code',
        description:
          'Even where code is AI-assisted, contributors remain fully responsible for that code and must be able to explain its logic, intent, and technical consequences when asked by a reviewer.',
      },
      {
        title: 'Proactive Communication',
        description:
          'Contributors are expected to maintain clear communication so that collaborators can understand the context, assumptions, and limitations of Gen-AI-assisted code.',
      },
    ],
    prohibitionsTitle: 'Prohibitions',
    prohibitionsIntro:
      'The use of Agentic AI (AI capable of automated execution and autonomous action) is not permitted for:',
    prohibitions: [
      'Executing on machines, servers, or infrastructure belonging to the BlankOn project.',
      'Use with credentials, tokens, or access keys associated with accounts or systems within the BlankOn ecosystem.',
    ],
    updates: {
      title: 'Policy Updates',
      description:
        'This policy may be updated from time to time, given how this technology continues to evolve.',
    },
  },
}

function AiPolicy() {
  const { lang } = Route.useParams()
  const content =
    aiPolicyContent[lang as keyof typeof aiPolicyContent] ?? aiPolicyContent.id

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

        {/* Guidelines */}
        <section className="bg-fd-background py-14">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.guidelinesTitle}
              </h2>
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mx-auto max-w-2xl text-fd-muted-foreground">
                {content.guidelinesIntro}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {content.guidelines.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-lg font-bold text-fd-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-fd-muted-foreground">
                        {item.description}
                      </p>
                      {'code' in item && item.code ? (
                        <pre className="mt-3 overflow-x-auto rounded-xl border border-fd-border bg-slate-50 p-4 dark:bg-slate-900/60">
                          <code className="text-sm text-fd-foreground">
                            {item.code}
                          </code>
                        </pre>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibitions */}
        <section className="bg-slate-50 py-14 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.prohibitionsTitle}
              </h2>
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mx-auto max-w-2xl text-fd-muted-foreground">
                {content.prohibitionsIntro}
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {content.prohibitions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed text-fd-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Policy updates */}
        <section className="bg-fd-background py-14">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/40">
              <h2 className="mb-2 text-lg font-bold text-fd-foreground">
                {content.updates.title}
              </h2>
              <p className="leading-relaxed text-fd-muted-foreground">
                {content.updates.description}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
