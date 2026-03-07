import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import styles from '../inner.module.css'

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}
function Content() {
  const t = useTranslations('pages.contact')
  const tc = useTranslations('common')
  const branches = [
    {
      name: t('branch1Name'),
      address: t('branch1Address'),
      phone: '(028) 38406854'
    },
    {
      name: t('branch2Name'),
      address: t('branch2Address'),
      phone: '(028) 38336818'
    },
    {
      name: t('branch3Name'),
      address: t('branch3Address'),
      phone: '(028) 22036818'
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
          <span className={styles.breadcrumbCurrent}>
            {t('breadcrumbCurrent')}
          </span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div
          style={{
            background: 'linear-gradient(135deg, #025899, #01416f)',
            borderRadius: 16,
            padding: '40px',
            marginBottom: 40,
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
            {t('formTitle')}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 24
            }}
          >
            {t('formDesc')}
          </p>
          <form
            style={{
              maxWidth: 600,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: 12
            }}
          >
            <input
              type="text"
              placeholder={`${tc('fullName')} *`}
              style={{
                padding: '12px 18px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: 14,
                outline: 'none'
              }}
            />
            <input
              type="tel"
              placeholder={`${tc('phone')} *`}
              style={{
                padding: '12px 18px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: 14,
                outline: 'none'
              }}
            />
            <input
              type="email"
              placeholder={tc('email')}
              style={{
                padding: '12px 18px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: 14,
                outline: 'none'
              }}
            />
            <textarea
              placeholder={t('descCondition')}
              rows={4}
              style={{
                padding: '12px 18px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: 14,
                outline: 'none',
                resize: 'none' as const
              }}
            />
            <button
              type="submit"
              className="btn-gold"
              style={{
                alignSelf: 'center',
                fontSize: 16,
                padding: '14px 48px'
              }}
            >
              {t('formTitle')}
            </button>
          </form>
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#025899',
            textAlign: 'center',
            marginBottom: 30
          }}
        >
          {t('branchesTitle')}
        </h2>
        <div className={styles.contactGrid}>
          {branches.map((b, i) => (
            <div key={i} className={styles.branchCard}>
              <div className={styles.branchMap}>📍</div>
              <div className={styles.branchInfo}>
                <div className={styles.branchName}>{b.name}</div>
                <div className={styles.branchAddress}>{b.address}</div>
                <div className={styles.branchPhone}>☎ {b.phone}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: 40,
            padding: '30px',
            background: '#f9f9f9',
            borderRadius: 12
          }}
        >
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#025899',
              marginBottom: 16
            }}
          >
            {t('hoursTitle')}
          </h3>
          <p style={{ fontSize: 15, marginBottom: 6 }}>
            {t('weekday')} <strong>{t('weekdayHours')}</strong>
          </p>
          <p style={{ fontSize: 15, marginBottom: 10 }}>
            {t('sunday')} <strong>{t('sundayHours')}</strong>
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#dfaa23' }}>
            Hotline: 094 1818 616
          </p>
        </div>
      </div>
    </div>
  )
}
