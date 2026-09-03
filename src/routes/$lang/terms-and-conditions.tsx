import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/$lang/terms-and-conditions')({
  component: TermsAndConditions,
})

const foundationEmail = 'humas@blankon.id'
const publicLedgerUrl =
  'https://docs.google.com/spreadsheets/d/1oQKe2ehnWqNHIseqbp3yJTvbCSzGctdV0JWAERF1IUg/edit?usp=sharing'

type Section = {
  title: string
  paragraphs?: Array<string>
  items?: Array<string>
}

const termsContent = {
  id: {
    title: 'Syarat & Ketentuan',
    subtitle:
      'Ketentuan penggunaan situs serta donasi dan sponsorship kepada Yayasan BlankOn Penggiat Sumber Terbuka',
    effectiveDate: 'Berlaku sejak 3 September 2026',
    intro:
      'Syarat & Ketentuan ini mengatur penggunaan situs blankon.id serta seluruh transaksi donasi dan sponsorship yang dilakukan kepada Yayasan BlankOn Penggiat Sumber Terbuka ("Yayasan", "kami"). Dengan menggunakan situs ini atau melakukan donasi maupun sponsorship, Anda menyatakan telah membaca, memahami, dan menyetujui ketentuan di bawah ini. Apabila Anda tidak menyetujuinya, mohon untuk tidak menggunakan situs ini dan tidak melakukan transaksi.',
    sections: [
      {
        title: 'Identitas Penyelenggara',
        paragraphs: [
          'Situs ini dikelola oleh Yayasan BlankOn Penggiat Sumber Terbuka, sebuah yayasan nirlaba yang berbadan hukum di Republik Indonesia berdasarkan Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0004533.AH.01.04 Tahun 2026 dan tercatat dalam Daftar Yayasan Nomor AHU-0006657.AH.01.12 Tahun 2026 tanggal 13 Februari 2026.',
          `Seluruh korespondensi resmi terkait donasi, sponsorship, dan ketentuan ini dapat dikirimkan ke ${foundationEmail}.`,
        ],
      },
      {
        title: 'Ruang Lingkup Layanan',
        paragraphs: [
          'Yayasan adalah organisasi nirlaba yang bergerak di bidang pengembangan teknologi bebas terbuka, edukasi, dan penguatan komunitas open source di Indonesia. Kami tidak menjual barang maupun jasa melalui situs ini.',
          'Pembayaran yang diterima melalui situs ini semata-mata berupa donasi dan sponsorship untuk mendukung program dan operasional Yayasan, termasuk iuran keanggotaan bagi anggota yang memilih untuk berkontribusi secara rutin.',
        ],
      },
      {
        title: 'Sifat Donasi dan Sponsorship',
        items: [
          'Donasi dan sponsorship bersifat sukarela dan tanpa syarat (unrestricted), kecuali apabila donatur secara tertulis menyebutkan proyek atau inisiatif tertentu dan Yayasan menyetujuinya.',
          'Donasi dan sponsorship tidak menimbulkan hak atas barang, jasa, kepemilikan, saham, atau keuntungan komersial dalam bentuk apa pun.',
          'Segala manfaat, pengakuan, atau fasilitas yang kami tawarkan sehubungan dengan keanggotaan, donasi, atau sponsorship — misalnya manfaat keanggotaan, penempatan logo, pencantuman nama donatur, penyebutan dalam acara, atau akses ke program tertentu — bersifat penawaran atas kebijakan Yayasan dan tidak permanen. Penawaran tersebut dapat diubah, dibatasi ketersediaannya, ditangguhkan, atau dihentikan sewaktu-waktu, termasuk untuk donatur yang kontribusinya sedang berjalan. Yayasan akan berupaya memberitahukan perubahan tersebut melalui surel atau situs ini.',
          'Perubahan atau penghentian suatu manfaat tidak menimbulkan hak atas ganti rugi maupun pengembalian kontribusi yang telah diberikan. Anda dapat menghentikan donasi rutin Anda apabila tidak menyetujui perubahan tersebut.',
          'Posisi di kepengurusan dan segala bentuk pengaruh terhadap arah organisasi tidak dapat dibeli melalui donasi maupun sponsorship.',
          'Yayasan berhak menolak atau mengembalikan donasi yang sumbernya tidak jelas, patut diduga berasal dari tindak pidana, atau bertentangan dengan nilai dan tujuan Yayasan.',
          'Donasi bukan merupakan pembayaran yang dapat dikurangkan dari pajak, kecuali diatur lain oleh peraturan perundang-undangan yang berlaku.',
        ],
      },
      {
        title: 'Kelayakan Donatur',
        paragraphs: [
          'Donasi dapat dilakukan oleh perorangan yang telah berusia 18 tahun atau telah cakap hukum, serta oleh badan hukum melalui perwakilan yang berwenang. Anda menjamin bahwa dana yang Anda donasikan berasal dari sumber yang sah dan bahwa Anda berhak menggunakan metode pembayaran yang Anda pilih.',
        ],
      },
      {
        title: 'Metode Pembayaran',
        paragraphs: [
          'Donasi dan sponsorship dapat dilakukan melalui transfer bank ke rekening resmi Yayasan maupun melalui payment gateway pihak ketiga yang bekerja sama dengan kami. Seluruh transaksi dinyatakan dalam mata uang Rupiah (IDR), kecuali disepakati lain.',
          'Pemrosesan pembayaran melalui payment gateway tunduk pada syarat dan ketentuan serta kebijakan privasi penyedia layanan tersebut. Data kartu maupun kredensial pembayaran Anda diproses langsung oleh penyedia layanan pembayaran dan tidak disimpan oleh Yayasan.',
          'Biaya administrasi bank atau penyedia layanan pembayaran, apabila ada, dapat mengurangi jumlah donasi yang diterima Yayasan.',
        ],
      },
      {
        title: 'Konfirmasi dan Tanda Terima',
        paragraphs: [
          `Setelah transaksi berhasil, Anda akan menerima konfirmasi pembayaran dari penyedia layanan pembayaran. Untuk donasi melalui transfer bank, mohon kirimkan konfirmasi ke ${foundationEmail} agar donasi Anda dapat dicatat dengan benar.`,
          'Tanda terima donasi diterbitkan atas permintaan melalui surel. Donasi tidak melibatkan pengiriman barang fisik, sehingga tidak ada proses pengiriman maupun biaya pengiriman.',
        ],
      },
      {
        title: 'Donasi Berulang',
        paragraphs: [
          'Apabila Anda memilih donasi rutin bulanan, pembayaran akan diproses secara berkala sesuai jadwal dan nominal yang Anda pilih hingga Anda menghentikannya.',
          `Anda dapat menghentikan donasi rutin kapan saja dengan mengirimkan permintaan ke ${foundationEmail} atau melalui kanal penyedia layanan pembayaran yang Anda gunakan. Penghentian berlaku untuk penagihan berikutnya dan tidak membatalkan pembayaran yang telah diproses sebelumnya.`,
        ],
      },
      {
        title: 'Kebijakan Pembatalan dan Pengembalian Dana',
        paragraphs: [
          'Mengingat sifatnya sebagai donasi, pada dasarnya donasi dan sponsorship yang telah diterima bersifat final dan tidak dapat dikembalikan.',
        ],
        items: [
          'Pengembalian dana dapat dipertimbangkan untuk transaksi yang keliru, ganda, atau tidak sah, dengan permohonan diajukan paling lambat 14 (empat belas) hari kalender sejak tanggal transaksi.',
          `Permohonan diajukan melalui surel ke ${foundationEmail} dengan menyertakan bukti transaksi, tanggal, nominal, dan alasan permohonan.`,
          'Permohonan yang disetujui akan diproses dalam waktu paling lama 14 (empat belas) hari kerja sejak persetujuan, dan dikembalikan ke metode pembayaran atau rekening asal.',
          'Biaya administrasi bank atau penyedia layanan pembayaran yang telah timbul dapat dipotong dari jumlah yang dikembalikan.',
          'Dana yang telah tersalurkan atau digunakan untuk program tidak dapat dikembalikan.',
        ],
      },
      {
        title: 'Penggunaan Dana dan Transparansi',
        paragraphs: [
          'Dana donasi digunakan untuk pengembangan dan pemeliharaan proyek perangkat lunak bebas terbuka, program edukasi, infrastruktur, kegiatan komunitas, dan operasional Yayasan.',
          'Kami memelihara dua pembukuan: buku kas publik untuk dana yang terkumpul dari donasi perorangan yang dapat diakses publik kapan saja, dan buku kas internal yang mencakup keseluruhan keuangan Yayasan dan diringkas dalam laporan tahunan.',
        ],
      },
      {
        title: 'Data Pribadi dan Privasi',
        paragraphs: [
          'Kami mengumpulkan data pribadi seminimal mungkin, yaitu nama, alamat surel, dan keterangan transaksi, semata-mata untuk mencatat donasi, menerbitkan tanda terima, memenuhi kewajiban pembukuan, dan berkomunikasi dengan Anda.',
          'Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak lain. Data dapat dibagikan kepada penyedia layanan pembayaran dan pihak berwenang sepanjang diwajibkan oleh peraturan perundang-undangan.',
          `Anda dapat meminta agar nama Anda tidak ditampilkan sebagai donatur, serta meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi ${foundationEmail}, sepanjang tidak bertentangan dengan kewajiban pembukuan Yayasan.`,
        ],
      },
      {
        title: 'Penggunaan Situs dan Hak Kekayaan Intelektual',
        paragraphs: [
          'Merek dan logo BlankOn merupakan milik Yayasan. Konten pada situs ini, kecuali dinyatakan lain, dilindungi oleh hukum hak cipta Republik Indonesia dan perjanjian internasional yang berlaku. Perangkat lunak yang kami kembangkan dilisensikan secara terpisah di bawah lisensi bebas terbuka masing-masing.',
        ],
        items: [
          'Anda dilarang menggunakan situs ini untuk tujuan melanggar hukum, termasuk pencucian uang, pendanaan terorisme, atau penipuan.',
          'Anda dilarang menggunakan metode pembayaran milik pihak lain tanpa izin.',
          'Anda dilarang mengganggu, membebani secara berlebihan, atau mencoba memperoleh akses tidak sah ke situs maupun sistem kami.',
        ],
      },
      {
        title: 'Batasan Tanggung Jawab',
        paragraphs: [
          'Situs dan seluruh materi di dalamnya disediakan sebagaimana adanya. Kami berupaya menjaga keakuratan informasi, namun tidak menjamin bahwa situs akan selalu bebas dari kesalahan atau gangguan.',
          'Sepanjang diizinkan oleh hukum yang berlaku, Yayasan tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs atau dari kegagalan, keterlambatan, maupun gangguan pada layanan pihak ketiga, termasuk bank dan penyedia layanan pembayaran.',
        ],
      },
      {
        title: 'Perubahan Ketentuan',
        paragraphs: [
          'Kami dapat mengubah Syarat & Ketentuan ini dari waktu ke waktu. Versi terbaru akan selalu dipublikasikan pada halaman ini beserta tanggal berlakunya. Donasi yang dilakukan setelah perubahan berlaku dianggap tunduk pada ketentuan yang telah diperbarui.',
        ],
      },
      {
        title: 'Hukum yang Berlaku dan Penyelesaian Sengketa',
        paragraphs: [
          'Syarat & Ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia. Setiap sengketa yang timbul akan diupayakan diselesaikan secara musyawarah terlebih dahulu, dan apabila tidak tercapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Republik Indonesia.',
        ],
      },
    ] as Array<Section>,
    ledgerCta: 'Lihat Buku Kas Publik',
    contact: {
      title: 'Pertanyaan?',
      description:
        'Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, donasi, sponsorship, atau permohonan pengembalian dana, silakan hubungi kami.',
    },
  },
  en: {
    title: 'Terms & Conditions',
    subtitle:
      'Terms governing the use of this site and donations and sponsorships to Yayasan BlankOn Penggiat Sumber Terbuka',
    effectiveDate: 'Effective 3 September 2026',
    intro:
      'These Terms & Conditions govern the use of blankon.id and all donation and sponsorship transactions made to Yayasan BlankOn Penggiat Sumber Terbuka (the "Foundation", "we"). By using this site or making a donation or sponsorship, you confirm that you have read, understood, and agreed to the terms below. If you do not agree, please do not use this site and do not make a transaction.',
    sections: [
      {
        title: 'Who We Are',
        paragraphs: [
          'This site is operated by Yayasan BlankOn Penggiat Sumber Terbuka, a non-profit foundation established as a legal entity in the Republic of Indonesia under Decree of the Minister of Law of the Republic of Indonesia Number AHU-0004533.AH.01.04 of 2026 and registered in the Register of Foundations Number AHU-0006657.AH.01.12 of 2026, dated 13 February 2026.',
          `All official correspondence regarding donations, sponsorships, and these terms may be sent to ${foundationEmail}.`,
        ],
      },
      {
        title: 'Scope of Our Activities',
        paragraphs: [
          'The Foundation is a non-profit organization working on open source technology development, education, and community building in Indonesia. We do not sell goods or services through this site.',
          'Payments received through this site are solely donations and sponsorships supporting the Foundation’s programs and operations, including membership contributions from members who choose to give on a recurring basis.',
        ],
      },
      {
        title: 'Nature of Donations and Sponsorships',
        items: [
          'Donations and sponsorships are voluntary and unrestricted, unless a donor specifies a particular project or initiative in writing and the Foundation agrees to it.',
          'Donations and sponsorships do not create any entitlement to goods, services, ownership, shares, or commercial benefits of any kind.',
          'Any benefit, recognition, or facility we offer in connection with membership, donations, or sponsorships — such as membership benefits, logo placement, listing as a donor, a mention at our events, or access to particular programs — is offered at the Foundation’s discretion and is not permanent. Such offers may be changed, limited in availability, suspended, or discontinued at any time, including for donors whose contributions are ongoing. We will make reasonable efforts to announce any such change by email or on this site.',
          'A change to or discontinuation of a benefit does not give rise to any claim for compensation or to a refund of contributions already made. You may stop your recurring donation if you do not agree with the change.',
          'Board seats and any form of influence over the direction of the organization cannot be purchased through donations or sponsorships.',
          'The Foundation may decline or return any donation whose source is unclear, is reasonably suspected to derive from criminal activity, or conflicts with the Foundation’s values and objectives.',
          'Donations are not tax-deductible payments unless otherwise provided by applicable law.',
        ],
      },
      {
        title: 'Donor Eligibility',
        paragraphs: [
          'Donations may be made by individuals aged 18 or over or otherwise legally competent, and by legal entities through an authorized representative. You warrant that the funds you donate come from a lawful source and that you are entitled to use the payment method you select.',
        ],
      },
      {
        title: 'Payment Methods',
        paragraphs: [
          'Donations and sponsorships may be made by bank transfer to the Foundation’s official account or through third-party payment gateways we work with. All transactions are denominated in Indonesian Rupiah (IDR) unless otherwise agreed.',
          'Payment processing through a payment gateway is subject to that provider’s own terms and privacy policy. Your card details and payment credentials are processed directly by the payment service provider and are not stored by the Foundation.',
          'Bank or payment provider fees, where applicable, may reduce the amount of the donation received by the Foundation.',
        ],
      },
      {
        title: 'Confirmation and Receipts',
        paragraphs: [
          `Once a transaction succeeds, you will receive a payment confirmation from the payment service provider. For bank transfers, please send a confirmation to ${foundationEmail} so that your donation can be recorded correctly.`,
          'Donation receipts are issued on request by email. Donations do not involve the shipment of physical goods, so no delivery process or shipping charges apply.',
        ],
      },
      {
        title: 'Recurring Donations',
        paragraphs: [
          'If you choose a recurring monthly donation, payments will be processed periodically at the schedule and amount you select until you stop them.',
          `You may cancel a recurring donation at any time by sending a request to ${foundationEmail} or through the channel of the payment service provider you used. Cancellation applies to subsequent charges and does not reverse payments already processed.`,
        ],
      },
      {
        title: 'Cancellation and Refund Policy',
        paragraphs: [
          'Given their nature as donations, donations and sponsorships received are in principle final and non-refundable.',
        ],
        items: [
          'A refund may be considered for erroneous, duplicate, or unauthorized transactions, provided the request is submitted no later than 14 (fourteen) calendar days from the transaction date.',
          `Requests are submitted by email to ${foundationEmail}, including proof of the transaction, its date, the amount, and the reason for the request.`,
          'Approved requests are processed within a maximum of 14 (fourteen) business days from approval and returned to the original payment method or account.',
          'Bank or payment provider fees already incurred may be deducted from the refunded amount.',
          'Funds that have already been disbursed or spent on programs cannot be refunded.',
        ],
      },
      {
        title: 'Use of Funds and Transparency',
        paragraphs: [
          'Donated funds are used for the development and maintenance of open source software projects, educational programs, infrastructure, community activities, and the Foundation’s operations.',
          'We maintain two sets of books: a public cash book for funds collected from individual donations, accessible to the public at any time, and an internal cash book covering the Foundation’s finances as a whole, summarized in our annual report.',
        ],
      },
      {
        title: 'Personal Data and Privacy',
        paragraphs: [
          'We collect the minimum personal data necessary — your name, email address, and transaction details — solely to record donations, issue receipts, meet our bookkeeping obligations, and communicate with you.',
          'We do not sell, rent, or trade your personal data. Data may be shared with payment service providers and with authorities to the extent required by applicable law.',
          `You may ask not to be listed publicly as a donor, and may request access to, correction of, or deletion of your personal data by contacting ${foundationEmail}, to the extent this does not conflict with the Foundation’s bookkeeping obligations.`,
        ],
      },
      {
        title: 'Use of the Site and Intellectual Property',
        paragraphs: [
          'The BlankOn name and logo belong to the Foundation. Content on this site, unless stated otherwise, is protected by the copyright laws of the Republic of Indonesia and applicable international treaties. Software we develop is licensed separately under its respective open source licenses.',
        ],
        items: [
          'You may not use this site for unlawful purposes, including money laundering, terrorist financing, or fraud.',
          'You may not use another person’s payment method without their permission.',
          'You may not disrupt or overload the site, or attempt to gain unauthorized access to our systems.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'The site and all materials on it are provided as is. We work to keep the information accurate, but we do not warrant that the site will always be free of errors or interruptions.',
          'To the extent permitted by applicable law, the Foundation is not liable for indirect losses arising from use of the site or from any failure, delay, or disruption in third-party services, including banks and payment service providers.',
        ],
      },
      {
        title: 'Changes to These Terms',
        paragraphs: [
          'We may amend these Terms & Conditions from time to time. The current version will always be published on this page together with its effective date. Donations made after a change takes effect are subject to the updated terms.',
        ],
      },
      {
        title: 'Governing Law and Dispute Resolution',
        paragraphs: [
          'These Terms & Conditions are governed by the laws in force in the Republic of Indonesia. Any dispute will first be addressed through good-faith discussion and, failing agreement, resolved before the competent courts of the Republic of Indonesia.',
        ],
      },
    ] as Array<Section>,
    ledgerCta: 'View the Public Cash Book',
    contact: {
      title: 'Questions?',
      description:
        'If you have questions about these Terms & Conditions, donations, sponsorships, or a refund request, please get in touch.',
    },
  },
}

function TermsAndConditions() {
  const { lang } = Route.useParams()
  const content =
    termsContent[lang as keyof typeof termsContent] ?? termsContent.id

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
            <p className="mx-auto max-w-3xl text-xl text-blue-200">
              {content.subtitle}
            </p>
            <p className="mt-4 text-sm text-blue-300">
              {content.effectiveDate}
            </p>
          </div>
        </section>

        {/* Terms */}
        <section className="bg-fd-background py-16">
          <div className="container mx-auto max-w-3xl px-6">
            <p className="mb-12 text-[15px] leading-8 text-fd-muted-foreground">
              {content.intro}
            </p>

            <div className="flex flex-col gap-10">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="mb-3 text-base font-semibold tracking-tight text-fd-foreground">
                    <span className="mr-2 tabular-nums text-blue-600 dark:text-blue-400">
                      {index + 1}.
                    </span>
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="mb-4 text-[15px] leading-8 text-fd-muted-foreground last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 flex flex-col gap-3">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-[15px] leading-8 text-fd-muted-foreground"
                        >
                          <span className="shrink-0 tabular-nums text-fd-foreground/50">
                            {index + 1}.{idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-8 text-fd-muted-foreground">
              <a
                href={publicLedgerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-400"
              >
                {content.ledgerCta}
              </a>
            </p>

            {/* Contact */}
            <div className="mt-12 border-t border-fd-border pt-8">
              <h2 className="mb-3 text-base font-semibold tracking-tight text-fd-foreground">
                {content.contact.title}
              </h2>
              <p className="text-[15px] leading-8 text-fd-muted-foreground">
                {content.contact.description}{' '}
                <a
                  href={`mailto:${foundationEmail}`}
                  className="font-medium text-blue-600 underline underline-offset-4 hover:no-underline dark:text-blue-400"
                >
                  {foundationEmail}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </HomeLayout>
  )
}
