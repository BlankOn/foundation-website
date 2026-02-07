import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'

export const Route = createFileRoute('/$lang/membership')({
  component: Membership,
  loader: ({ params }) => ({ lang: params.lang }),
})

const membershipContent = {
  id: {
    title: 'Keanggotaan',
    subtitle: 'Bergabunglah dengan Komunitas Yayasan BlankOn',
    description:
      'Menjadi anggota Yayasan BlankOn berarti turut serta dalam misi memajukan teknologi bebas terbuka di Indonesia. Kami menyambut siapa saja yang memiliki semangat untuk berkontribusi dalam ekosistem open source.',
    organization: {
      title: 'Struktur Organisasi',
      description:
        'BlankOn dikelola oleh tim yang berpengalaman dan berdedikasi dalam memajukan teknologi bebas terbuka di Indonesia.',
      team: [
        {
          name: 'Akhmat Safrudin',
          position: 'Pengawas',
          bio: 'Mengawasi dan memastikan tata kelola yayasan berjalan sesuai dengan visi, misi, dan peraturan yang berlaku.',
          photo: 'https://ui-avatars.com/api/?name=Akhmat+Safrudin&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Rusmanto',
          position: 'Pembina',
          bio: 'Memberikan arahan strategis dan pembinaan untuk pengembangan yayasan dan pencapaian tujuan jangka panjang.',
          photo: 'https://ui-avatars.com/api/?name=Rusmanto&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Slamet Santoso',
          position: 'Ketua',
          bio: 'Memimpin operasional yayasan dan mengkoordinasikan seluruh kegiatan untuk mencapai visi dan misi organisasi.',
          photo: 'https://ui-avatars.com/api/?name=Slamet+Santoso&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Iwan Setiawan',
          position: 'Sekretaris',
          bio: 'Mengelola administrasi, dokumentasi, dan komunikasi internal serta eksternal yayasan.',
          photo: 'https://ui-avatars.com/api/?name=Iwan+Setiawan&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Herpiko Dwi Aguno',
          position: 'Bidang Program',
          bio: 'Merancang dan mengelola program-program yayasan untuk mendukung pengembangan teknologi bebas terbuka.',
          photo: 'https://ui-avatars.com/api/?name=Herpiko+Dwi+Aguno&size=400&background=2563eb&color=fff',
        },
      ],
    },
    types: {
      title: 'Jenis Keanggotaan',
      items: [
        {
          name: 'Anggota Biasa',
          description:
            'Terbuka untuk siapa saja yang ingin mendukung gerakan teknologi bebas terbuka di Indonesia. Anggota biasa dapat berpartisipasi dalam kegiatan komunitas, forum diskusi, dan mendapatkan akses ke sumber daya edukatif.',
          benefits: [
            'Akses ke forum dan diskusi komunitas',
            'Newsletter bulanan tentang perkembangan teknologi bebas terbuka',
            'Undangan ke acara dan lokakarya',
            'Kesempatan berkontribusi dalam proyek-proyek yayasan',
          ],
        },
        {
          name: 'Kontributor Aktif',
          description:
            'Bagi mereka yang berkontribusi secara aktif dalam pengembangan proyek, dokumentasi, atau kegiatan komunitas. Status kontributor aktif diberikan berdasarkan kontribusi yang telah dilakukan.',
          benefits: [
            'Semua benefit anggota biasa',
            'Pengakuan atas kontribusi di website dan media yayasan',
            'Prioritas akses ke program pelatihan dan mentoring',
            'Kesempatan menjadi pembicara di acara yayasan',
            'Akses ke infrastruktur dan tools pengembangan',
          ],
        },
      ],
    },
    howToJoin: {
      title: 'Cara Bergabung',
      steps: [
        {
          title: 'Kenali Komunitas',
          description:
            'Pelajari tentang yayasan, proyek-proyek kami, dan bergabunglah dengan forum diskusi untuk mengenal komunitas lebih dekat.',
        },
        {
          title: 'Daftar Keanggotaan',
          description:
            'Isi formulir pendaftaran keanggotaan dengan informasi yang diperlukan. Tidak ada biaya pendaftaran untuk menjadi anggota.',
        },
        {
          title: 'Mulai Berkontribusi',
          description:
            'Pilih cara berkontribusi yang sesuai dengan minat dan keahlian Anda. Baik melalui kode, dokumentasi, desain, atau berbagi pengetahuan.',
        },
        {
          title: 'Tumbuh Bersama',
          description:
            'Kembangkan kemampuan Anda, bangun jaringan dengan sesama kontributor, dan bersama-sama memajukan ekosistem open source Indonesia.',
        },
      ],
    },
    contribute: {
      title: 'Cara Berkontribusi',
      description:
        'Ada banyak cara untuk berkontribusi dalam yayasan, sesuai dengan minat dan keahlian Anda:',
      items: [
        'Pengembangan perangkat lunak dan pemrograman',
        'Penulisan dan penerjemahan dokumentasi',
        'Desain grafis dan UI/UX',
        'Testing dan pelaporan bug',
        'Penyelenggaraan acara dan lokakarya',
        'Berbagi pengetahuan melalui artikel atau presentasi',
        'Dukungan komunitas dan moderasi forum',
        'Pengelolaan infrastruktur dan sistem',
      ],
    },
    cta: {
      title: 'Siap Bergabung?',
      description:
        'Bergabunglah dengan komunitas kami dan mulai berkontribusi untuk masa depan teknologi bebas terbuka di Indonesia.',
      button: 'Daftar Sekarang',
      contact: 'Hubungi Kami',
    },
  },
  en: {
    title: 'Membership',
    subtitle: 'Join the BlankOn Foundation Community',
    description:
      'Becoming a member of BlankOn Foundation means participating in the mission to advance open source technology in Indonesia. We welcome anyone with a passion to contribute to the open source ecosystem.',
    organization: {
      title: 'Organization Structure',
      description:
        'BlankOn is managed by an experienced and dedicated team committed to advancing open source technology in Indonesia.',
      team: [
        {
          name: 'Akhmat Safrudin',
          position: 'Supervisor',
          bio: 'Oversees and ensures foundation governance operates in accordance with vision, mission, and applicable regulations.',
          photo: 'https://ui-avatars.com/api/?name=Akhmat+Safrudin&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Rusmanto',
          position: 'Trustee',
          bio: 'Provides strategic direction and guidance for foundation development and achievement of long-term goals.',
          photo: 'https://ui-avatars.com/api/?name=Rusmanto&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Slamet Santoso',
          position: 'Chairman',
          bio: 'Leads foundation operations and coordinates all activities to achieve organizational vision and mission.',
          photo: 'https://ui-avatars.com/api/?name=Slamet+Santoso&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Iwan Setiawan',
          position: 'Secretary',
          bio: 'Manages administration, documentation, and internal and external communications of the foundation.',
          photo: 'https://ui-avatars.com/api/?name=Iwan+Setiawan&size=400&background=2563eb&color=fff',
        },
        {
          name: 'Herpiko Dwi Aguno',
          position: 'Head of Programs',
          bio: 'Designs and manages foundation programs to support open source technology development.',
          photo: 'https://ui-avatars.com/api/?name=Herpiko+Dwi+Aguno&size=400&background=2563eb&color=fff',
        },
      ],
    },
    types: {
      title: 'Membership Types',
      items: [
        {
          name: 'Regular Member',
          description:
            'Open to anyone who wants to support the open source technology movement in Indonesia. Regular members can participate in community activities, discussion forums, and gain access to educational resources.',
          benefits: [
            'Access to community forums and discussions',
            'Monthly newsletter on open source technology developments',
            'Invitations to events and workshops',
            'Opportunities to contribute to foundation projects',
          ],
        },
        {
          name: 'Active Contributor',
          description:
            'For those who actively contribute to project development, documentation, or community activities. Active contributor status is granted based on contributions made.',
          benefits: [
            'All regular member benefits',
            'Recognition for contributions on foundation website and media',
            'Priority access to training and mentoring programs',
            'Opportunities to speak at foundation events',
            'Access to development infrastructure and tools',
          ],
        },
      ],
    },
    howToJoin: {
      title: 'How to Join',
      steps: [
        {
          title: 'Get to Know the Community',
          description:
            'Learn about the foundation, our projects, and join discussion forums to get familiar with the community.',
        },
        {
          title: 'Register for Membership',
          description:
            'Fill out the membership registration form with the required information. There is no registration fee to become a member.',
        },
        {
          title: 'Start Contributing',
          description:
            'Choose a way to contribute that matches your interests and skills. Whether through code, documentation, design, or knowledge sharing.',
        },
        {
          title: 'Grow Together',
          description:
            'Develop your skills, build networks with fellow contributors, and together advance the Indonesian open source ecosystem.',
        },
      ],
    },
    contribute: {
      title: 'Ways to Contribute',
      description:
        'There are many ways to contribute to the foundation, according to your interests and skills:',
      items: [
        'Software development and programming',
        'Writing and translating documentation',
        'Graphic design and UI/UX',
        'Testing and bug reporting',
        'Event organization and workshops',
        'Knowledge sharing through articles or presentations',
        'Community support and forum moderation',
        'Infrastructure and systems management',
      ],
    },
    cta: {
      title: 'Ready to Join?',
      description:
        'Join our community and start contributing to the future of open source technology in Indonesia.',
      button: 'Register Now',
      contact: 'Contact Us',
    },
  },
}

function Membership() {
  const { lang } = Route.useLoaderData()
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
              <p className="mx-auto mt-6 max-w-2xl text-fd-muted-foreground">
                {content.organization.description}
              </p>
	      <br/>
	      <br/>
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
                    <p className="mb-3 text-base font-medium text-blue-600 dark:text-blue-400">
                      {member.position}
                    </p>
                    <p className="leading-relaxed text-fd-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.types.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {content.types.items.map((type, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-fd-border bg-fd-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-fd-foreground">
                      {type.name}
                    </h3>
                  </div>
                  <p className="mb-6 text-fd-muted-foreground">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
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
                        <span className="text-sm text-fd-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="bg-fd-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.howToJoin.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.howToJoin.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-fd-border bg-fd-card p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-fd-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fd-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
                {content.contribute.title}
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mx-auto mt-6 max-w-2xl text-fd-muted-foreground">
                {content.contribute.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.contribute.items.map((item, index) => (
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

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {content.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              {content.cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@blankon.id"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg"
              >
                {content.cta.button}
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
              <a
                href="mailto:info@blankon.id"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                {content.cta.contact}
              </a>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  )
}
