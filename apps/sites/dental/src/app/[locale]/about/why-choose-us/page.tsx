import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import styles from '../../inner.module.css'

export default async function WhyChooseUsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}
function Content() {
  const t = useTranslations('pages.whyUs')
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
      <div className={styles.contentArea}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>👨‍⚕️</div>
            <h4>{t('card1Title')}</h4>
            <p>{t('card1Desc')}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🇫🇷</div>
            <h4>{t('card2Title')}</h4>
            <p>{t('card2Desc')}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏆</div>
            <h4>{t('card3Title')}</h4>
            <p>{t('card3Desc')}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📊</div>
            <h4>{t('card4Title')}</h4>
            <p>{t('card4Desc')}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🌏</div>
            <h4>{t('card5Title')}</h4>
            <p>{t('card5Desc')}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>💰</div>
            <h4>{t('card6Title')}</h4>
            <p>{t('card6Desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
