import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import styles from '../../inner.module.css'

export default async function DrTungPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}

function Content() {
  const t = useTranslations('pages.doctor')
  const tc = useTranslations('common')

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
      <div className={styles.contentWithSidebar}>
        <div className={styles.mainContent}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e8f4fd, #b3d9f2)',
                border: '4px solid #dfaa23',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80,
                margin: '0 auto 20px'
              }}
            >
              👨‍⚕️
            </div>
          </div>
          <h2>{t('educationTitle')}</h2>
          <ul>
            <li>{t('edu1')}</li>
            <li>{t('edu2')}</li>
            <li>{t('edu3')}</li>
          </ul>
          <h2>{t('experienceTitle')}</h2>
          <ul>
            <li>{t('exp1')}</li>
            <li>{t('exp2')}</li>
            <li>{t('exp3')}</li>
            <li>{t('exp4')}</li>
          </ul>
          <h2>{t('specialtyTitle')}</h2>
          <ul>
            <li>{t('spec1')}</li>
            <li>{t('spec2')}</li>
            <li>{t('spec3')}</li>
            <li>{t('spec4')}</li>
          </ul>
          <h2>{t('mediaTitle')}</h2>
          <p>{t('mediaDesc')}</p>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h4>{t('sidebarTitle')}</h4>
            <p>{t('sidebarDesc')}</p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder={tc('fullName')} />
              <input type="tel" placeholder={tc('phone')} />
              <button className="btn-gold" style={{ width: '100%' }}>
                {tc('register')}
              </button>
            </form>
          </div>
          <div className={styles.sidebarWidget}>
            <div className={styles.sidebarTitle}>{t('sidebarServices')}</div>
            <ul className={styles.sidebarLinks}>
              <li>
                <Link href="/services/dental-implants">
                  {t('sidebarImplant')}
                </Link>
              </li>
              <li>
                <Link href="/services/dental-crowns">
                  {t('sidebarCeramic')}
                </Link>
              </li>
              <li>
                <Link href="/services/orthodontics">{t('sidebarBraces')}</Link>
              </li>
              <li>
                <Link href="/services/dental-crowns">{t('sidebarVeneer')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
