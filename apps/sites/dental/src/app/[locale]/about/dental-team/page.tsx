import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import styles from '../../inner.module.css'

export default async function DentalTeamPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}

function Content() {
  const t = useTranslations('pages.doctorTeam')
  const tc = useTranslations('common')
  const doctors = [
    {
      name: 'TS-BS CKII NGUYỄN HIẾU TÙNG',
      title: 'Giám đốc chuyên môn',
      spec: 'Chuyên sâu Implant – Tu nghiệp tại Pháp',
      href: '/about/dr-nguyen-hieu-tung' as const
    },
    {
      name: 'BS CKI MAI HỒNG THÁI',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Răng sứ, Veneer',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS CKI HOÀNG NGUYỄN ĐÌNH TÍN',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Veneer, Tiểu phẫu',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS CKI NGÔ THỊ PHƯƠNG THẢO',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Răng sứ, Nha chu',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS CKI NGUYỄN HOÀNG NHÂN',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Veneer, Smile design',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS NGUYỄN HOÀNG THẠNH QUÂN',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Niềng răng',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS NGUYỄN THANH PHONG',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Răng sứ, Veneer',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS TRẦN ĐOÀN LÊ NHÂN',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Răng sứ, Veneer',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'ThS LÊ ĐỖ TUẤN KIỆT',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Răng sứ, Điều trị',
      href: '/about/about-i-dent' as const
    },
    {
      name: 'BS CKI NGUYỄN QUANG LINH',
      title: 'ĐH Y Dược TP.HCM',
      spec: 'Chuyên Implant, Răng sứ, Veneer',
      href: '/about/about-i-dent' as const
    }
  ]
  return (
    <div className={styles.pageLayout}>
      <div className={styles.pageBanner}>
        <div className={styles.bannerTitle}>{t('bannerTitle')}</div>
        <div className={styles.bannerSub}>{t('bannerSub')}</div>
      </div>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbsInner}>
          <Link href="/" className={styles.breadcrumbLink}>
            {tc('home')}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/about/about-i-dent" className={styles.breadcrumbLink}>
            {t('breadcrumbIntro')}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>
            {t('breadcrumbCurrent')}
          </span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.doctorGrid}>
          {doctors.map((doc, i) => (
            <Link key={i} href={doc.href} className={styles.doctorProfileCard}>
              <div className={styles.doctorProfileAvatar}>👨‍⚕️</div>
              <div className={styles.doctorProfileName}>{doc.name}</div>
              <div className={styles.doctorProfileTitle}>{doc.title}</div>
              <div className={styles.doctorProfileSpec}>{doc.spec}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
