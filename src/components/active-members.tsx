import { useState } from 'react'
import data from '@/active-members.json'

const avatarColors = [
  '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b',
  '#10b981', '#06b6d4', '#6366f1', '#e11d48',
]

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function getColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

function AvatarFallback({ name }: { name: string }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
      style={{ backgroundColor: getColor(name) }}
    >
      {getInitials(name)}
    </div>
  )
}

function Avatar({ name, github }: { name: string; github: string }) {
  const [failed, setFailed] = useState(false)

  if (!github || failed) {
    return <AvatarFallback name={name} />
  }

  return (
    <img
      src={`https://github.com/${github}.png?size=80`}
      alt={name}
      className="h-14 w-14 shrink-0 rounded-full bg-fd-border object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

const { contributors: activeMembers, donors: recurringDonors } = data

const sectionContent = {
  id: {
    heading: 'Anggota Aktif',
    contributors: 'Kontributor inti yang secara aktif mengembangkan proyek-proyek BlankOn.',
    donorsSub: 'Pendukung setia yang secara rutin berdonasi untuk keberlangsungan BlankOn.',
  },
  en: {
    heading: 'Active Members',
    contributors: 'Core contributors actively involved in BlankOn projects.',
    donorsSub: 'Loyal supporters who regularly donate to sustain BlankOn.',
  },
}

export function ActiveMembers({ lang }: { lang: string }) {
  const content = sectionContent[lang as keyof typeof sectionContent]

  return (
    <section className="bg-fd-background py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            {content.heading}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
        </div>

        {/* Core Contributors */}
        <p className="mb-6 text-center text-fd-muted-foreground">
          {content.contributors}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeMembers.map((member) => (
            <a
              key={member.github}
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-fd-border bg-fd-card p-5 transition-all hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-700"
            >
              <Avatar name={member.name} github={member.github} />
              <div className="min-w-0">
                <p className="truncate font-semibold text-fd-foreground">
                  {member.name}
                </p>
                <p className="truncate text-sm text-fd-muted-foreground">
                  {member.contribution[lang as keyof typeof member.contribution]}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Recurring Donors */}
        <p className="mt-16 mb-6 text-center text-fd-muted-foreground">
          {content.donorsSub}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recurringDonors.map((donor, i) => {
            const inner = (
              <>
                <Avatar name={donor.name} github={donor.github} />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-fd-foreground">
                    {donor.name}
                  </p>
                </div>
              </>
            )
            const cls = "flex items-center gap-4 rounded-2xl border border-fd-border bg-fd-card p-5 transition-all hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-700"
            return donor.github ? (
              <a
                key={donor.github}
                href={`https://github.com/${donor.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={`donor-${i}`} className={cls}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
