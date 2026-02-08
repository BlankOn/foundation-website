import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/legal')({
  component: Legal,
  loader: ({ params }) => ({ lang: params.lang }),
})

function Legal() {
  const { lang } = Route.useLoaderData()

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col" />
      <Footer lang={lang} />
    </HomeLayout>
  )
}
