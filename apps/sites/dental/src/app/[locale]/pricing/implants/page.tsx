import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import styles from "../../inner.module.css";

export default async function ImplantPricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}
function Content() {
  const t = useTranslations("pages.implantPricing");
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
          <h2>{t("implantTitle")}</h2>
          <table className={styles.priceTable}>
            <thead><tr><th>{t("thImplant")}</th><th>{t("thOrigin")}</th><th>{t("thPrice")}</th></tr></thead>
            <tbody>
              <tr><td>Implant Osstem</td><td>Hàn Quốc</td><td className={styles.priceHighlight}>15.000.000 – 18.000.000</td></tr>
              <tr><td>Implant Dentium</td><td>Hàn Quốc</td><td className={styles.priceHighlight}>16.000.000 – 20.000.000</td></tr>
              <tr><td>Implant Anthogyr</td><td>Pháp</td><td className={styles.priceHighlight}>20.000.000 – 25.000.000</td></tr>
              <tr><td>Implant Straumann SLA</td><td>Thụy Sĩ</td><td className={styles.priceHighlight}>25.000.000 – 30.000.000</td></tr>
              <tr><td>Implant Straumann SLActive</td><td>Thụy Sĩ</td><td className={styles.priceHighlight}>30.000.000 – 38.000.000</td></tr>
              <tr><td>Implant Nobel Biocare</td><td>Thụy Điển</td><td className={styles.priceHighlight}>28.000.000 – 35.000.000</td></tr>
            </tbody>
          </table>
          <h2>{t("crownTitle")}</h2>
          <table className={styles.priceTable}>
            <thead><tr><th>{t("thCrown")}</th><th>{t("thCrownPrice")}</th></tr></thead>
            <tbody>
              <tr><td>Mão sứ Zirconia</td><td className={styles.priceHighlight}>4.000.000 – 6.000.000</td></tr>
              <tr><td>Mão sứ E.max</td><td className={styles.priceHighlight}>6.000.000 – 8.000.000</td></tr>
              <tr><td>Mão sứ Cercon</td><td className={styles.priceHighlight}>5.000.000 – 7.000.000</td></tr>
            </tbody>
          </table>
          <h2>{t("fullArchTitle")}</h2>
          <table className={styles.priceTable}>
            <thead><tr><th>{t("thMethod")}</th><th>{t("thFullArchPrice")}</th></tr></thead>
            <tbody>
              <tr><td>All-on-4 (1 hàm)</td><td className={styles.priceHighlight}>120.000.000 – 180.000.000</td></tr>
              <tr><td>All-on-6 (1 hàm)</td><td className={styles.priceHighlight}>160.000.000 – 250.000.000</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#999', fontStyle: 'italic', marginTop: 20 }}>{t("priceNote")}</p>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h4>{t("sidebarTitle")}</h4>
            <p>{t("sidebarDesc")}</p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder={tc("fullName")} />
              <input type="tel" placeholder={tc("phone")} />
              <button className="btn-gold" style={{ width: '100%' }}>{t("sidebarSubmit")}</button>
            </form>
          </div>
          <div className={styles.sidebarWidget}>
            <div className={styles.sidebarTitle}>{t("sidebarOtherTitle")}</div>
            <ul className={styles.sidebarLinks}>
              <li><Link href="/pricing/implants">{t("sidebarCeramic")}</Link></li>
              <li><Link href="/pricing/implants">{t("sidebarBraces")}</Link></li>
              <li><Link href="/pricing/implants">{t("sidebarOther")}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
