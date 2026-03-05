import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import styles from '../../inner.module.css'

export default async function DentalCrownsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <Content />
}
function Content() {
  const t = useTranslations('pages.ceramicService')
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
      <div className={styles.contentWithSidebar}>
        <div className={styles.mainContent}>
          <h2>{t('whatIsTitle')}</h2>
          <p>{t('whatIsDesc')}</p>
          <h2>{t('typesTitle')}</h2>
          <ul>
            <li>{t('type1')}</li>
            <li>{t('type2')}</li>
            <li>{t('type3')}</li>
            <li>{t('type4')}</li>
          </ul>
          <h2>{t('priceTitle')}</h2>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>{t('thType')}</th>
                <th>{t('thPrice')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Răng sứ kim loại thường</td>
                <td className={styles.priceHighlight}>2.000.000 – 3.000.000</td>
              </tr>
              <tr>
                <td>Răng sứ Zirconia</td>
                <td className={styles.priceHighlight}>4.000.000 – 6.000.000</td>
              </tr>
              <tr>
                <td>Răng sứ E.max</td>
                <td className={styles.priceHighlight}>6.000.000 – 8.000.000</td>
              </tr>
              <tr>
                <td>Dán sứ Veneer</td>
                <td className={styles.priceHighlight}>
                  8.000.000 – 12.000.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h4>{tc('freeConsult')}</h4>
            <p>{t('sidebarConsult')}</p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder={tc('fullName')} />
              <input type="tel" placeholder={tc('phone')} />
              <button className="btn-gold" style={{ width: '100%' }}>
                {tc('register')}
              </button>
            </form>
          </div>
          <div className={styles.sidebarWidget}>
            <div className={styles.sidebarTitle}>{t('sidebarRelated')}</div>
            <ul className={styles.sidebarLinks}>
              <li>
                <Link href="/services/dental-crowns">{t('sidebarVeneer')}</Link>
              </li>
              <li>
                <Link href="/pricing/implants">{t('sidebarPrice')}</Link>
              </li>
              <li>
                <Link href="/patient-stories/implants">
                  {t('sidebarCustomers')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
