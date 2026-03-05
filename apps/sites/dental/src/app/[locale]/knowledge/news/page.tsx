import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import styles from '../../inner.module.css'

const articleKeys = [
  { titleKey: 'p1Title' as const, excerptKey: 'p1Excerpt' as const },
  { titleKey: 'p2Title' as const, excerptKey: 'p2Excerpt' as const },
  { titleKey: 'p3Title' as const, excerptKey: 'p3Excerpt' as const },
  { titleKey: 'p4Title' as const, excerptKey: 'p4Excerpt' as const },
  { titleKey: 'p5Title' as const, excerptKey: 'p5Excerpt' as const },
  { titleKey: 'p6Title' as const, excerptKey: 'p6Excerpt' as const }
]

export default async function NewsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}
function Content() {
  const t = useTranslations('pages.news')
  const tb = useTranslations('home.blogPosts')
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
          <span className={styles.breadcrumbCurrent}>
            {t('breadcrumbCurrent')}
          </span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginBottom: 40,
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
          }}
        >
          <div
            style={{
              flex: 1,
              background: 'linear-gradient(135deg, #e8f4fd, #b3d9f2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              minHeight: 300
            }}
          >
            📰
          </div>
          <div
            style={{
              flex: 1,
              padding: 30,
              display: 'flex',
              flexDirection: 'column' as const,
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #dfaa23, #fbf08d, #dfaa23)',
                color: '#025899',
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 12px',
                borderRadius: 10,
                marginBottom: 12,
                width: 'fit-content'
              }}
            >
              Implant
            </span>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#025899',
                marginBottom: 12,
                lineHeight: 1.4
              }}
            >
              {tb('p1Title')}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: '#666',
                lineHeight: 1.6,
                marginBottom: 16
              }}
            >
              {tb('p1Excerpt')}
            </p>
            <span className="btn-gold" style={{ width: 'fit-content' }}>
              {tc('readMore')}
            </span>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {articleKeys.slice(1).map((a, i) => (
            <div key={i} className={styles.listCard}>
              <div className={styles.listCardImage}>
                <span>📝</span>
              </div>
              <div className={styles.listCardInfo}>
                <div className={styles.listCardTitle}>{tb(a.titleKey)}</div>
                <div className={styles.listCardExcerpt}>{tb(a.excerptKey)}</div>
                <span className={styles.listCardLink}>{tc('readMore')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
