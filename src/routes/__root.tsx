import { createRootRoute, Outlet, useParams } from '@tanstack/react-router'
import { RootProvider } from 'fumadocs-ui/provider/base'
import { TanstackProvider } from 'fumadocs-core/framework/tanstack'
import { defineI18nUI } from 'fumadocs-ui/i18n'
import { i18n } from '@/lib/i18n'

const { provider } = defineI18nUI(i18n, {
  translations: {
    id: {
      displayName: 'Indonesia',
      searchNoResult: 'Tidak ada hasil',
      toc: 'Daftar Isi',
      tocNoHeadings: 'Tidak ada heading',
      lastUpdate: 'Terakhir diperbarui',
      chooseLanguage: 'Pilih bahasa',
      nextPage: 'Selanjutnya',
      previousPage: 'Sebelumnya',
      chooseTheme: 'Pilih tema',
      editOnGithub: 'Edit di GitHub',
    },
    en: {
      displayName: 'English',
    },
  },
})

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { lang } = useParams({ strict: false })

  return (
    <TanstackProvider>
      <RootProvider i18n={provider(lang)}>
        <Outlet />
      </RootProvider>
    </TanstackProvider>
  )
}
