import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { i18n } from '@/lib/i18n'
import { useEffect, useState } from 'react'

function Logo() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <img
        src="/logo-black.png"
        alt="BlankOn"
        className="block h-6 w-auto dark:hidden"
        style={{
          clipPath: scrolled ? 'inset(0 50% 0 0)' : 'inset(0 0 0 0)',
          transition: 'clip-path 300ms ease-in-out',
        }}
      />
      <img
        src="/logo-white.png"
        alt="BlankOn"
        className="hidden h-4 w-auto dark:block"
        style={{
          clipPath: scrolled ? 'inset(0 50% 0 0)' : 'inset(0 0 0 0)',
          transition: 'clip-path 300ms ease-in-out',
        }}
      />
    </>
  )
}

const translations = {
  id: {
    home: 'Beranda',
    membership: 'Keanggotaan',
    donate: 'Donasi',
    welcome: 'Selamat datang di BlankOn',
    feedback: {
      question: 'Bagaimana panduan ini?',
      good: 'Bagus',
      bad: 'Kurang',
      placeholder: 'Tulis masukan Anda...',
      submit: 'Kirim',
      thanks: 'Terima kasih atas masukan Anda!',
      viewOnGithub: 'Lihat di GitHub',
      submitAgain: 'Kirim Lagi',
    },
    hero: {
      about: {
        title: 'Yayasan BlankOn',
        subtitle: 'Didukung oleh Yayasan Penggiat Sumber Terbuka',
        description:
          'Kami adalah organisasi nirlaba yang berdedikasi untuk memajukan ekosistem teknologi bebas terbuka di Indonesia. Melalui kolaborasi komunitas dan inovasi berkelanjutan, kami membangun masa depan digital yang lebih inklusif dan berdaulat.',
        cta: 'Pelajari Lebih Lanjut',
      },
      vision: {
        title: 'Misi',
        mission: 'Misi',
        missions: [
          'Menggiatkan dan merawat BlankOn Linux sebagai proyek teknologi bebas terbuka yang dikelola dengan baik, dikembangkan secara terbuka dan berkelanjutan.',
          'Mendorong edukasi dan literasi teknologi bebas terbuka melalui penguatan kapasitas di bidang sistem, infrastruktur, dan keamanan.',
          'Menumbuhkan dan menaungi proyek serta kegiatan teknologi bebas terbuka melalui dukungan dan penguatan komunitas.',
          'Menguatkan tata kelola organisasi melalui pengelolaan yang transparan, partisipatif, dan bertanggung jawab.',
        ],
      },
      donate: {
        title: 'Dukung Gerakan Kami',
        description:
          'Kontribusi Anda membantu kami terus mengembangkan teknologi bebas terbuka, menyelenggarakan program edukasi, dan memperkuat komunitas open source di Indonesia.',
        cta: 'Donasi Sekarang',
      },
      products: {
        title: 'Proyek & Kegiatan',
        description:
          'Jelajahi berbagai proyek dan platform yang kami kembangkan untuk komunitas.',
        items: [
          {
            name: 'BlankOn Linux',
            description:
              'Distribusi Linux berbasis Debian yang dikembangkan khusus untuk pengguna Indonesia dengan dukungan bahasa dan kebutuhan lokal.',
            cta: 'Unduh Sekarang',
          },
          {
            name: 'Warta BlankOn',
            description:
              'Platform berita dan diskusi teknologi ala Hacker News untuk komunitas teknologi Indonesia.',
            cta: 'Kunjungi Warta',
            url: 'https://warta.blankon.id',
          },
          {
            name: 'Lokakarya',
            description:
              'Program pembelajaran dan pelatihan teknologi bebas terbuka melalui kelas daring dan luring serta lokakarya praktis seputar dunia teknologi.',
            cta: 'Lihat Jadwal',
            url: 'https://blankon.id',
          },
          {
            name: 'BlanKonf',
            description:
              'Konferensi teknologi bebas terbuka tahunan yang mempertemukan praktisi, pengembang, dan penggiat open source dari seluruh Indonesia.',
            cta: 'Informasi Lebih Lanjut',
            url: 'https://blankon.id',
          },
        ],
      },
    },
  },
  en: {
    home: 'Home',
    membership: 'Membership',
    donate: 'Donate',
    welcome: 'Welcome to BlankOn',
    feedback: {
      question: 'How is this guide?',
      good: 'Good',
      bad: 'Bad',
      placeholder: 'Leave your feedback...',
      submit: 'Submit',
      thanks: 'Thank you for your feedback!',
      viewOnGithub: 'View on GitHub',
      submitAgain: 'Submit Again',
    },
    hero: {
      about: {
        title: 'BlankOn Foundation',
        subtitle: 'Supported by Yayasan Penggiat Sumber Terbuka',
        description:
          'We are a non-profit organization dedicated to advancing the open source technology ecosystem in Indonesia. Through community collaboration and sustainable innovation, we build a more inclusive and sovereign digital future.',
        cta: 'Learn More',
      },
      vision: {
        title: 'Mission',
        mission: 'Mission',
        missions: [
          'Activate and maintain BlankOn Linux as a well-managed open source technology project, developed openly and sustainably.',
          'Promote education and literacy in open source technology through capacity building in systems, infrastructure, and security.',
          'Nurture and support open source projects and activities through community strengthening and support.',
          'Strengthen organizational governance through transparent, participatory, and accountable management.',
        ],
      },
      donate: {
        title: 'Support Our Movement',
        description:
          'Your contribution helps us continue developing open source technology, organizing educational programs, and strengthening the open source community in Indonesia.',
        cta: 'Donate Now',
      },
      products: {
        title: 'Projects & Activities',
        description:
          'Explore various projects and platforms we develop for the community.',
        items: [
          {
            name: 'BlankOn Linux',
            description:
              'A Debian-based Linux distribution developed specifically for Indonesian users with local language support and needs.',
            cta: 'Download Now',
          },
          {
            name: 'Warta BlankOn',
            description:
              'A Hacker News-style news and discussion platform for the Indonesian technology community.',
            cta: 'Visit Warta',
            url: 'https://warta.blankon.id',
          },
          {
            name: 'Lokakarya',
            description:
              'Open source technology learning and training programs through online and offline classes and hands-on workshops.',
            cta: 'View Schedule',
            url: 'https://blankon.id',
          },
          {
            name: 'BlanKonf',
            description:
              'Annual open source technology conference bringing together practitioners, developers, and open source enthusiasts from across Indonesia.',
            cta: 'Learn More',
            url: 'https://blankon.id',
          },
        ],
      },
    },
  },
}

export function getTranslations(locale: string) {
  if (locale in translations) {
    return translations[locale as keyof typeof translations]
  }
  return translations.id
}

export function baseOptions(locale: string): BaseLayoutProps {
  const t = getTranslations(locale)

  return {
    i18n,
    nav: {
      title: <Logo />,
      url: `/${locale}`,
      transparentMode: 'none',
    },
    links: [
      {
        text: t.home,
        url: `/${locale}`,
        active: 'url',
      },
      {
        text: t.membership,
        url: `/${locale}/membership`,
        active: 'nested-url',
      },
      {
        text: t.donate,
        url: `/${locale}/donate`,
        active: 'nested-url',
      },
    ],
  }
}
