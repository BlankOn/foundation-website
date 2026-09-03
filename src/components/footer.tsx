const footerContent = {
  id: {
    columns: [
      {
        title: 'Yayasan',
        links: [
          { label: 'BlankOn Foundation', url: 'https://blankon.id' },
          { label: 'Tim', url: '/$lang/team' },
          { label: 'Keanggotaan', url: '/$lang/membership' },
          { label: 'Legal & Trademark', url: '/$lang/legal' },
          { label: 'Lisensi', url: '/$lang/license' },
          { label: 'Syarat & Ketentuan', url: '/$lang/terms-and-conditions' },
          { label: 'Inisiatif yang Kami Dukung', url: '/$lang/supported-initiatives' },
          { label: 'Donasi', url: '/$lang/donate' },
          { label: 'Laporan Keuangan', url: 'https://docs.google.com/spreadsheets/d/1oQKe2ehnWqNHIseqbp3yJTvbCSzGctdV0JWAERF1IUg/edit?usp=sharing' },
          { label: 'Hubungi Kami', url: '/$lang/contact-us' },
        ],
      },
      {
        title: 'Referensi',
        links: [
          { label: 'BlankOn Linux', url: 'https://blankonlinux.id' },
          { label: 'Warta', url: 'https://warta.blankon.id' },
          { label: 'Lokakarya', url: 'https://www.youtube.com/@blankonlinux_official' },
          { label: 'Code of Conduct', url: '/$lang/code-of-conduct' },
          { label: 'Kebijakan AI', url: '/$lang/ai-policy' },
        ],
      },
      {
        title: 'Sosial Media',
        links: [
          { label: 'X / Twitter', url: 'https://x.com/BlankOnLinux' },
          { label: 'Facebook', url: 'https://www.facebook.com/blankon.linux' },
          { label: 'Instagram', url: 'https://www.instagram.com/blankonlinux/' },
          { label: 'Telegram', url: 'https://t.me/BlankOnLinux' },
        ],
      },
    ],
  },
  en: {
    columns: [
      {
        title: 'Foundation',
        links: [
          { label: 'BlankOn Foundation', url: 'https://blankon.id' },
          { label: 'Team', url: '/$lang/team' },
          { label: 'Membership', url: '/$lang/membership' },
          { label: 'Legal & Trademark', url: '/$lang/legal' },
          { label: 'License', url: '/$lang/license' },
          { label: 'Terms & Conditions', url: '/$lang/terms-and-conditions' },
          { label: 'Supported Initiatives', url: '/$lang/supported-initiatives' },
          { label: 'Donate', url: '/$lang/donate' },
          { label: 'Financial Report', url: 'https://docs.google.com/spreadsheets/d/1oQKe2ehnWqNHIseqbp3yJTvbCSzGctdV0JWAERF1IUg/edit?usp=sharing' },
          { label: 'Contact Us', url: '/$lang/contact-us' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'BlankOn Linux', url: 'https://blankonlinux.id' },
          { label: 'Warta', url: 'https://warta.blankon.id' },
          { label: 'Lokakarya', url: 'https://www.youtube.com/@blankonlinux_official' },
          { label: 'Code of Conduct', url: '/$lang/code-of-conduct' },
          { label: 'AI Policy', url: '/$lang/ai-policy' },
        ],
      },
      {
        title: 'Social Media',
        links: [
          { label: 'X / Twitter', url: 'https://x.com/BlankOnLinux' },
          { label: 'Facebook', url: 'https://www.facebook.com/blankon.linux' },
          { label: 'Instagram', url: 'https://www.instagram.com/blankonlinux/' },
          { label: 'Telegram', url: 'https://t.me/BlankOnLinux' },
        ],
      },
    ],
  },
}

export function Footer({ lang }: { lang: string }) {
  const content = footerContent[lang as keyof typeof footerContent] || footerContent.en

  return (
    <footer className="border-t border-fd-border bg-fd-background py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {content.columns.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fd-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, idx) => {
                  const href = link.url.includes('$lang')
                    ? link.url.replace('$lang', lang)
                    : link.url
                  const isExternal = href.startsWith('http')
                  return (
                    <li key={idx}>
                      <a
                        href={href}
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
