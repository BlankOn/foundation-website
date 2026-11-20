import { useState } from 'react'
import type { FormEvent } from 'react'

/** The buletin service behind the sign-up form; override for local testing. */
const SUBSCRIBE_URL =
  (import.meta.env.VITE_NEWSLETTER_API_URL as string | undefined) ??
  'https://buletin.blankon.id/subscribe'

const content = {
  id: {
    title: 'Berlangganan Buletin',
    description:
      'Dapatkan kabar terbaru tentang kegiatan, proyek, dan rilis dari Yayasan BlankOn langsung di kotak masuk Anda.',
    emailLabel: 'Alamat email',
    placeholder: 'nama@contoh.com',
    submit: 'Berlangganan',
    submitting: 'Mengirim...',
    success:
      'Terima kasih! Anda sudah berlangganan. Cek kotak masuk Anda untuk email konfirmasi.',
    invalid: 'Mohon masukkan alamat email yang valid.',
    tooMany: 'Terlalu banyak percobaan. Silakan coba lagi nanti.',
    failed: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.',
    note: 'Kami tidak akan membagikan email Anda. Anda bisa berhenti berlangganan kapan saja.',
  },
  en: {
    title: 'Subscribe to Our Newsletter',
    description:
      'Get the latest on BlankOn Foundation events, projects, and releases straight to your inbox.',
    emailLabel: 'Email address',
    placeholder: 'name@example.com',
    submit: 'Subscribe',
    submitting: 'Submitting...',
    success:
      "Thank you! You're subscribed. Check your inbox for a confirmation email.",
    invalid: 'Please enter a valid email address.',
    tooMany: 'Too many attempts. Please try again later.',
    failed: 'Sorry, something went wrong. Please try again later.',
    note: "We won't share your email. You can unsubscribe at any time.",
  },
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Newsletter({ lang }: { lang: string }) {
  const c = content[lang as keyof typeof content] ?? content.en
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('submitting')

    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          website: data.get('website'),
        }),
      })
      if (res.ok) {
        setStatus('success')
        setMessage(c.success)
        form.reset()
        return
      }
      setStatus('error')
      setMessage(
        res.status === 400
          ? c.invalid
          : res.status === 429
            ? c.tooMany
            : c.failed,
      )
    } catch {
      setStatus('error')
      setMessage(c.failed)
    }
  }

  return (
    <section className="bg-slate-50 py-14 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
            {c.title}
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            {c.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {c.emailLabel}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={c.placeholder}
            className="min-w-0 flex-1 rounded-lg border border-fd-border bg-fd-background px-4 py-3 text-fd-foreground placeholder:text-fd-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          {/* Honeypot: hidden from people, bots fill it in and get dropped. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? c.submitting : c.submit}
          </button>
        </form>

        <p
          role="status"
          aria-live="polite"
          className={`mx-auto mt-4 max-w-xl text-center text-sm ${
            status === 'success'
              ? 'text-green-700 dark:text-green-400'
              : status === 'error'
                ? 'text-red-600 dark:text-red-400'
                : 'text-fd-muted-foreground'
          }`}
        >
          {status === 'success' || status === 'error' ? message : c.note}
        </p>
      </div>
    </section>
  )
}
