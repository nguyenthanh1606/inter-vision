import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import styles from "../../inner.module.css";

export default async function FacilitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}
function Content() {
  const t = useTranslations("pages.facilities");
  const tc = useTranslations("common");
  const galleryItems = [t("gallery1"), t("gallery2"), t("gallery3"), t("gallery4"), t("gallery5"), t("gallery6")];
  return (
    <div className={styles.pageLayout}>
      <div className={styles.pageBanner}>
        <div className={styles.bannerTitle}>{t("bannerTitle")}</div>
        <div className={styles.bannerSub}>{t("bannerSub")}</div>
      </div>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbsInner}>
          <Link href="/" className={styles.breadcrumbLink}>{tc("home")}</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/about/about-i-dent" className={styles.breadcrumbLink}>{t("breadcrumbIntro")}</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{t("breadcrumbCurrent")}</span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, maxWidth: 800, margin: '0 auto' }}>{t("intro")}</p>
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}><div className={styles.infoIcon}>🖥️</div><h4>{t("ct3d")}</h4><p>{t("ct3dDesc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>🔬</div><h4>{t("scanner")}</h4><p>{t("scannerDesc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>💡</div><h4>{t("laser")}</h4><p>{t("laserDesc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>🧪</div><h4>{t("sterilization")}</h4><p>{t("sterilizationDesc")}</p></div>
        </div>
        <div className={styles.cardsGrid} style={{ marginTop: 40 }}>
          {galleryItems.map((title, i) => (
            <div key={i} className={styles.listCard}>
              <div className={styles.listCardImage}><span>🏥</span></div>
              <div className={styles.listCardInfo}><div className={styles.listCardTitle}>{title}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
