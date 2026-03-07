import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import styles from '../../inner.module.css'

const stories = [
  {
    nameKey: 's1Name' as const,
    originKey: 's1Origin' as const,
    storyKey: 's1Story' as const
  },
  {
    nameKey: 's2Name' as const,
    originKey: 's2Origin' as const,
    storyKey: 's2Story' as const
  },
  {
    nameKey: 's3Name' as const,
    originKey: 's3Origin' as const,
    storyKey: 's3Story' as const
  },
  {
    nameKey: 's4Name' as const,
    originKey: 's4Origin' as const,
    storyKey: 's4Story' as const
  },
  {
    nameKey: 's5Name' as const,
    originKey: 's5Origin' as const,
    storyKey: 's5Story' as const
  },
  {
    nameKey: 's6Name' as const,
    originKey: 's6Origin' as const,
    storyKey: 's6Story' as const
  }
]

export default async function PatientStoriesPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}
function Content() {
  const t = useTranslations('pages.customerStories')
  const ts = useTranslations('home.customerStories')
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
        <div className={styles.cardsGrid}>
          {stories.map((s, i) => (
            <div key={i} className={styles.listCard}>
              <div className={styles.listCardImage}>
                <span>📸</span>
                <div className={styles.listCardCategory}>{ts(s.originKey)}</div>
              </div>
              <div className={styles.listCardInfo}>
                <div className={styles.listCardTitle}>{ts(s.nameKey)}</div>
                <div className={styles.listCardExcerpt}>{ts(s.storyKey)}</div>
                <span className={styles.listCardLink}>{tc('viewDetails')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
