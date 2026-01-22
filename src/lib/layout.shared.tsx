import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { i18n } from '@/lib/i18n'

function Logo() {
  return (
    <>
      <img
        src="/logo-black.png"
        alt="BlankOn"
        className="block h-6 w-auto dark:hidden"
      />
      <img
        src="/logo-white.png"
        alt="BlankOn"
        className="hidden h-4 w-auto dark:block"
      />
    </>
  )
}

const translations = {
  id: {
    home: 'Beranda',
    download: 'Unduh',
    docs: 'Panduan Pengguna',
    dev: 'Wiki Pengembangan',
    welcome: 'Selamat datang di BlankOn',
    downloadDesc: 'Halaman unduh BlankOn',
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
        title: 'Visi & Misi',
        vision: 'Visi',
        visionText:
          'Menjadi organisasi yang menggiatkan, menumbuhkan, dan menaungi komunitas dan teknologi bebas terbuka di Indonesia yang mandiri, berdaya, inklusif, berkelanjutan, dan memberikan dampak nyata bagi masyarakat.',
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
        ],
      },
    },
  },
  en: {
    home: 'Home',
    download: 'Download',
    docs: 'User Guide',
    dev: 'Developer Wiki',
    welcome: 'Welcome to BlankOn',
    downloadDesc: 'BlankOn download page',
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
        title: 'Vision & Mission',
        vision: 'Vision',
        visionText:
          'To become an organization that activates, nurtures, and supports open source communities and technologies in Indonesia that are independent, empowered, inclusive, sustainable, and create real impact for society.',
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
    },
    links: [
      {
        text: t.home,
        url: `/${locale}`,
        active: 'url',
      },
      {
        text: t.download,
        url: `/${locale}/download`,
        active: 'nested-url',
      },
      {
        text: t.docs,
        url: `/${locale}/docs`,
        active: 'nested-url',
      },
      {
        text: t.dev,
        url: `/${locale}/dev`,
        active: 'nested-url',
      },
    ],
  }
}
