import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/download')({
  component: Download,
})

function Download() {
  const { lang } = Route.useParams()

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Download</h1>
        <p className="mt-4 text-fd-muted-foreground">
          BlankOn Linux download page
        </p>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
