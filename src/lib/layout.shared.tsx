import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { i18n } from '@/lib/i18n'
import { useEffect, useState } from 'react'

function Logo() {
  const [clipPercent, setClipPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const start = pageHeight * 0.3
      const end = pageHeight * 0.5
      if (y <= start) {
        setClipPercent(0)
      } else if (y >= end) {
        setClipPercent(78)
      } else {
        setClipPercent(((y - start) / (end - start)) * 78)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const clipPath = `inset(0 ${clipPercent}% 0 0)`

  return (
    <>
      <img
        src="/logo-black.png"
        alt="BlankOn"
        className="block h-6 w-auto dark:hidden"
        style={{ clipPath }}
      />
      <img
        src="/logo-white.png"
        alt="BlankOn"
        className="hidden h-4 w-auto dark:block"
        style={{ clipPath }}
      />
    </>
  )
}

const translations = {
  id: {
    home: 'Beranda',
    team: 'Tim',
    membership: 'Keanggotaan',
    sponsorship: 'Sponsorship',
    news: 'Berita',
    donate: 'Donasi',
    welcome: 'Selamat datang di BlankOn',
    hero: {
      about: {
        title: 'Yayasan BlankOn',
        description:
          'Kami adalah organisasi nirlaba yang berdedikasi untuk memajukan ekosistem teknologi bebas terbuka dan kemandirian teknologi di Indonesia. Melalui kolaborasi komunitas dan inisiatif berkelanjutan, kami membangun masa depan digital yang lebih inklusif dan berdaulat.',
        cta: 'Pelajari Lebih Lanjut',
      },
      timeline: {
        title: 'Perjalanan Kami',
        events: [
          {
            year: '2000',
            title: 'YPLI Didirikan',
            description:
              'Yayasan Penggerak Linux Indonesia (YPLI) terbentuk, mendukung kelompok pengguna Linux di seluruh Indonesia dan menjadi fondasi gerakan open source nasional.',
          },
          {
            year: '2004',
            title: 'BlankOn Linux Dirilis',
            description:
              'Versi pertama BlankOn Linux resmi dirilis berbasis Fedora, digagas dan didukung penuh oleh YPLI sebagai salah satu distribusi Linux buatan Indonesia yang tertua. Sejak versi kedua dan seterusnya, BlankOn beralih ke basis Debian yang digunakan hingga saat ini.',
          },
          {
            year: '2009',
            title: 'BlanKonf Pertama',
            description:
              'Konferensi BlankOn pertama diselenggarakan di Bogor, mempertemukan para pengembang dan penggiat open source dari berbagai daerah.',
          },
          {
            year: '2010',
            title: 'BlanKonf Kedua',
            description:
              'BlanKonf kedua digelar di Jawa Timur, memperluas jangkauan komunitas ke wilayah timur Pulau Jawa.',
          },
          {
            year: '2011',
            title: 'BlanKonf Ketiga',
            description:
              'BlanKonf ketiga berlangsung di Semarang, semakin memperkuat jaringan komunitas open source di Jawa Tengah.',
          },
          {
            year: '2012',
            title: 'BlanKonf Keempat',
            description:
              'BlanKonf keempat kembali diadakan di Bogor, mengukuhkan tradisi konferensi tahunan komunitas BlankOn.',
          },
          {
            year: '2026',
            title: 'Yayasan BlankOn Berdiri',
            description:
              'Yayasan BlankOn resmi didirikan, melanjutkan warisan YPLI untuk memajukan ekosistem teknologi bebas terbuka dan kemandirian teknologi di Indonesia.',
          },
        ],
      },
      vision: {
        title: 'Misi',
        mission: 'Misi',
        missions: [
          'Mendorong edukasi dan literasi teknologi bebas terbuka dan kemandirian teknologi melalui penguatan kapasitas di bidang sistem, infrastruktur, dan keamanan.',
          'Menumbuhkan dan menaungi proyek serta kegiatan teknologi bebas terbuka melalui dukungan dan penguatan komunitas.',
          'Mendorong akses yang setara terhadap teknologi, internet, dan pengetahuan digital, sehingga setiap orang dapat berpartisipasi, berkarya, dan memperoleh manfaat dari dunia digital.',
          'Merawat BlankOn Linux sebagai proyek teknologi bebas terbuka yang dikelola dengan baik, dikembangkan secara terbuka dan berkelanjutan.',
        ],
      },
      donate: {
        title: 'Dukung Gerakan Kami',
        description:
          'Kontribusi Anda membantu kami terus mengembangkan teknologi bebas terbuka, menyelenggarakan program edukasi, dan memperkuat komunitas open source di Indonesia.',
        cta: 'Donasi Sekarang',
      },
      events: {
        title: 'Kegiatan',
        description:
          'Kegiatan yang kami selenggarakan atau ikuti bersama komunitas.',
        upcoming: 'Kegiatan Mendatang',
        past: 'Kegiatan Terdahulu',
        noUpcoming: 'Belum ada kegiatan mendatang yang dijadwalkan.',
        noPast: 'Belum ada catatan kegiatan terdahulu.',
        seeMore: 'Lihat selengkapnya...',
      },
      products: {
        title: 'Proyek dan Inisiatif',
        description:
          'Jelajahi berbagai proyek, platform, dan inisiatif yang kami kembangkan dan dukung untuk komunitas.',
        items: [
          {
            name: 'BlankOn Linux',
            description:
              'Distribusi Linux berbasis Debian yang dikembangkan khusus untuk pengguna Indonesia dengan dukungan bahasa dan kebutuhan lokal.',
            cta: 'Unduh Sekarang',
            url: 'https://blankonlinux.id/en/download',
          },
          {
            name: 'BlanKonf',
            description:
              'Konferensi teknologi bebas terbuka yang mempertemukan praktisi, pengembang, dan penggiat open source dari seluruh Indonesia.',
          },
          {
            name: 'Lokakarya',
            description:
              'Program pembelajaran dan pelatihan teknologi bebas terbuka melalui kelas daring dan luring serta lokakarya praktis seputar dunia teknologi.',
            cta: 'Lihat Rekaman Lokakarya',
            url: 'https://www.youtube.com/@blankonlinux_official',
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
      supportedInitiatives: {
        title: 'Inisiatif yang Kami Dukung',
        description:
          'Selain mengembangkan proyek sendiri, kami juga turut mendukung inisiatif sumber terbuka dan komunitas lain yang sejalan dengan visi kami.',
        items: [
          {
            name: 'LangitKetujuh',
            description:
              'Distribusi Linux berbasis Void Linux dengan lingkungan desktop KDE Plasma, dirancang khusus untuk desainer dan pekerja kreatif.',
            cta: 'Kunjungi LangitKetujuh',
            url: 'https://langitketujuh.id/',
            tags: ['Infrastruktur', 'Server'],
          },
          {
            name: 'Jakarta Linux Users Group',
            description:
              'Komunitas pengguna Linux di Jakarta yang bercita-cita menjadi rumah bagi para kontributor proyek bebas dan sumber terbuka, baik lokal maupun global.',
            cta: 'Kunjungi JKTLUG',
            url: 'https://jktlug.id/',
            tags: ['Pendanaan', 'Legal', 'Komunitas'],
          },
          {
            name: 'openSUSE.Asia Summit 2026',
            description:
              'Pertemuan komunitas openSUSE terbesar di Asia yang tahun ini digelar di Yogyakarta pada 3-4 Oktober 2026, dengan BlankOn Foundation sebagai Custom Sponsor.',
            cta: 'Kunjungi Laman Kegiatan',
            url: 'https://events.opensuse.org/conferences/oSAS26',
            tags: ['Sponsorship'],
          },
          {
            name: 'Belajar FreeBSD Indonesia',
            description:
              'Komunitas yang mewadahi kegiatan belajar dan berbagi pengetahuan seputar FreeBSD di Indonesia.',
            cta: 'Kunjungi Belajar FreeBSD Indonesia',
            url: 'https://www.belajarfreebsd.or.id',
            tags: ['Infrastruktur', 'Server'],
          },
          {
            name: 'GNOME Indonesia',
            description:
              'Komunitas pengguna dan kontributor GNOME di Indonesia, yang menjadi wadah belajar dan berbagi seputar lingkungan desktop GNOME.',
            cta: 'Kunjungi GNOME Indonesia',
            url: 'https://t.me/gnomeid',
            tags: ['Sponsorship', 'Komunitas'],
          },
        ],
        contact: {
          text: 'Jika proyek, inisiatif, atau komunitasmu membutuhkan dukungan, baik berupa infrastruktur, pendanaan, maupun bentuk lainnya, silakan menghubungi kami. Kami tidak selalu dapat menjamin ketersediaan sumber daya, tetapi kami dengan senang hati berdiskusi dan mencari solusi terbaik bersama. Hubungi kami di',
          email: 'humas@blankon.id',
        },
      },
    },
  },
  en: {
    home: 'Home',
    team: 'Team',
    membership: 'Membership',
    sponsorship: 'Sponsorship',
    news: 'News',
    donate: 'Donate',
    welcome: 'Welcome to BlankOn',
    hero: {
      about: {
        title: 'The BlankOn Foundation',
        description:
          'We are a non-profit organization dedicated to advancing the open source technology ecosystem and technological independence in Indonesia. Through community collaboration and sustainable initiatives, we build a more inclusive and sovereign digital future.',
        cta: 'Learn More',
      },
      timeline: {
        title: 'Our Journey',
        events: [
          {
            year: '2000',
            title: 'YPLI Founded',
            description:
              'Yayasan Penggerak Linux Indonesia (YPLI) was established, supporting Linux user groups across Indonesia and laying the foundation for the national open source movement.',
          },
          {
            year: '2004',
            title: 'BlankOn Linux Released',
            description:
              'The first version of BlankOn Linux was released based on Fedora, initiated and fully supported by YPLI as one of the oldest Linux distributions built in Indonesia. From the second version onward, BlankOn switched to a Debian base, which it continues to use today.',
          },
          {
            year: '2009',
            title: 'First BlanKonf',
            description:
              'The inaugural BlankOn Conference was held in Bogor, bringing together developers and open source enthusiasts from across the nation.',
          },
          {
            year: '2010',
            title: 'Second BlanKonf',
            description:
              'BlanKonf expanded to East Java, broadening the community\'s reach to the eastern part of Java island.',
          },
          {
            year: '2011',
            title: 'Third BlanKonf',
            description:
              'BlanKonf took place in Semarang, further strengthening the open source community network in Central Java.',
          },
          {
            year: '2012',
            title: 'Fourth BlanKonf',
            description:
              'BlanKonf returned to Bogor, solidifying the tradition of an annual BlankOn community conference.',
          },
          {
            year: '2026',
            title: 'The BlankOn Foundation Established',
            description:
              'The BlankOn Foundation was officially established, continuing the legacy of YPLI to advance the open source technology ecosystem and technological independence in Indonesia.',
          },
        ],
      },
      vision: {
        title: 'Mission',
        mission: 'Mission',
        missions: [
          'Promote education and literacy in open source technology and technological independence through capacity building in systems, infrastructure, and security.',
          'Nurture and support open source projects and activities through community strengthening and support.',
          'Promote equitable access to technology, the internet and digital knowledge, enabling everyone to participate, create and benefit from the digital world.',
          'Maintain BlankOn Linux as a well-managed open source technology project, developed openly and sustainably.',
        ],
      },
      donate: {
        title: 'Support Our Movement',
        description:
          'Your contribution helps us continue developing open source technology, organizing educational programs, and strengthening the open source community in Indonesia.',
        cta: 'Donate Now',
      },
      events: {
        title: 'Events',
        description:
          'Events we host or take part in together with the community.',
        upcoming: 'Upcoming Events',
        past: 'Past Events',
        noUpcoming: 'No upcoming events are scheduled yet.',
        noPast: 'No past events recorded yet.',
        seeMore: 'See more...',
      },
      products: {
        title: 'Projects and Initiatives',
        description:
          'Explore various projects, platforms and initiatives we develop for the community.',
        items: [
          {
            name: 'BlankOn Linux',
            description:
              'A Debian-based Linux distribution developed specifically for Indonesian users with local language support and needs.',
            cta: 'Download Now',
            url: 'https://blankonlinux.id/en/download',
          },
          {
            name: 'BlanKonf',
            description:
              'Open source technology conference bringing together practitioners, developers, and open source enthusiasts from across Indonesia.',
          },
          {
            name: 'Lokakarya',
            description:
              'Open source technology learning and training programs through online and offline classes and hands-on workshops.',
            cta: 'Watch Workshop Recordings',
            url: 'https://www.youtube.com/@blankonlinux_official',
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
      supportedInitiatives: {
        title: 'Supported Initiatives',
        description:
          'Beyond our own projects, we also support other open source and community initiatives that share our vision.',
        items: [
          {
            name: 'LangitKetujuh',
            description:
              'A Void Linux-based distribution featuring the KDE Plasma desktop environment, built specifically for designers and creative professionals.',
            cta: 'Visit LangitKetujuh',
            url: 'https://langitketujuh.id/',
            tags: ['Infrastructure', 'Server'],
          },
          {
            name: 'Jakarta Linux Users Group',
            description:
              "A Linux user community in Jakarta, aiming to be a home for local and global free and open source projects' contributors.",
            cta: 'Visit JKTLUG',
            url: 'https://jktlug.id/',
            tags: ['Funding', 'Legal', 'Community'],
          },
          {
            name: 'openSUSE.Asia Summit 2026',
            description:
              'One of Asia\'s largest gatherings of the openSUSE community, hosted in Yogyakarta on October 3-4, 2026, with The BlankOn Foundation as a Custom Sponsor.',
            cta: 'Visit the Event Page',
            url: 'https://events.opensuse.org/conferences/oSAS26',
            tags: ['Sponsorship'],
          },
          {
            name: 'Belajar FreeBSD Indonesia',
            description:
              'A community dedicated to learning and sharing knowledge about FreeBSD in Indonesia.',
            cta: 'Visit Belajar FreeBSD Indonesia',
            url: 'https://www.belajarfreebsd.or.id',
            tags: ['Infrastructure', 'Server'],
          },
          {
            name: 'GNOME Indonesia',
            description:
              'A community of GNOME users and contributors in Indonesia, offering a space to learn and share around the GNOME desktop environment.',
            cta: 'Visit GNOME Indonesia',
            url: 'https://t.me/gnomeid',
            tags: ['Sponsorship', 'Community'],
          },
        ],
        contact: {
          text: "If your open source project, initiative, or community needs support, whether in the form of infrastructure, funding, or something else, please get in touch. We can't always guarantee that resources will be available, but we're happy to talk and see what we can work out together. Reach us at",
          email: 'humas@blankon.id',
        },
      },
    },
  },
}

export function getTranslations(locale: string) {
  if (locale in translations) {
    return translations[locale as keyof typeof translations]
  }
  return translations.en
}

export function baseOptions(locale: string): BaseLayoutProps {
  const t = getTranslations(locale)

  return {
    i18n,
    searchToggle: { enabled: false },
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
        text: t.team,
        url: `/${locale}/team`,
        active: 'nested-url',
      },
      {
        text: t.membership,
        url: `/${locale}/membership`,
        active: 'nested-url',
      },
      {
        text: t.sponsorship,
        url: `/${locale}/sponsorship`,
        active: 'nested-url',
      },
      {
        text: t.news,
        url: `/${locale}/news`,
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
