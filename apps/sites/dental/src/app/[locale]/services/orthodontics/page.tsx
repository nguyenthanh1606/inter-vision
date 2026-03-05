import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import styles from "../../inner.module.css";

export default async function OrthodonticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}
function Content() {
  const t = useTranslations("pages.bracesService");
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
          <span className={styles.breadcrumbCurrent}>{t("breadcrumbCurrent")}</span>
        </div>
      </div>
      <div className={styles.contentWithSidebar}>
        <div className={styles.mainContent}>
          <h2>{t("whatIsTitle")}</h2>
          <p>{t("whatIsDesc")}</p>
          <h2>{t("methodsTitle")}</h2>
          <ul><li>{t("method1")}</li><li>{t("method2")}</li><li>{t("method3")}</li><li>{t("method4")}</li></ul>
          <h2>{t("priceTitle")}</h2>
          <table className={styles.priceTable}>
            <thead><tr><th>{t("thMethod")}</th><th>{t("thPrice")}</th></tr></thead>
            <tbody>
              <tr><td>Mắc cài kim loại</td><td className={styles.priceHighlight}>25.000.000 – 35.000.000</td></tr>
              <tr><td>Mắc cài sứ</td><td className={styles.priceHighlight}>30.000.000 – 45.000.000</td></tr>
              <tr><td>Mắc cài tự buộc</td><td className={styles.priceHighlight}>35.000.000 – 50.000.000</td></tr>
              <tr><td>Invisalign</td><td className={styles.priceHighlight}>60.000.000 – 120.000.000</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h4>{t("sidebarTitle")}</h4>
            <p>{t("sidebarDesc")}</p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder={tc("fullName")} />
              <input type="tel" placeholder={tc("phone")} />
              <button className="btn-gold" style={{ width: '100%' }}>{tc("register")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
