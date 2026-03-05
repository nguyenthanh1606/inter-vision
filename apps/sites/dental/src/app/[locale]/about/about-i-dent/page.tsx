import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import styles from "../../inner.module.css";

export default async function AboutIDentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("pages.aboutIDent");
  const tc = useTranslations("common");

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
          <span className={styles.breadcrumbCurrent}>{t("breadcrumb")}</span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: '#025899', marginBottom: 20 }}>{t("mainTitle")}</h2>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 16 }}>{t("intro1")}</p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 30 }}>{t("intro2")}</p>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}><div className={styles.valueIcon}>🎯</div><h4>{t("visionTitle")}</h4><p>{t("visionDesc")}</p></div>
          <div className={styles.valueCard}><div className={styles.valueIcon}>💎</div><h4>{t("missionTitle")}</h4><p>{t("missionDesc")}</p></div>
          <div className={styles.valueCard}><div className={styles.valueIcon}>🏅</div><h4>{t("coreValuesTitle")}</h4><p>{t("coreValuesDesc")}</p></div>
          <div className={styles.valueCard}><div className={styles.valueIcon}>🤝</div><h4>{t("commitmentTitle")}</h4><p>{t("commitmentDesc")}</p></div>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#025899', margin: '30px 0 15px' }}>{t("whyTitle")}</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}><div className={styles.infoIcon}>👨‍⚕️</div><h4>{t("why1Title")}</h4><p>{t("why1Desc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>🔬</div><h4>{t("why2Title")}</h4><p>{t("why2Desc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>🏆</div><h4>{t("why3Title")}</h4><p>{t("why3Desc")}</p></div>
          <div className={styles.infoCard}><div className={styles.infoIcon}>❤️</div><h4>{t("why4Title")}</h4><p>{t("why4Desc")}</p></div>
        </div>
      </div>
    </div>
  );
}
