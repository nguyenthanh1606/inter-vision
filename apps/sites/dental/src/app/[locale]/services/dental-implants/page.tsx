import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import styles from "../../inner.module.css";

export default async function DentalImplantsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}
function Content() {
  const t = useTranslations("pages.implantService");
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
          <h2>{t("advantageTitle")}</h2>
          <ul><li>{t("adv1")}</li><li>{t("adv2")}</li><li>{t("adv3")}</li><li>{t("adv4")}</li><li>{t("adv5")}</li><li>{t("adv6")}</li></ul>
          <h2>{t("processTitle")}</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}><div className={styles.infoIcon}>1️⃣</div><h4>{t("step1")}</h4><p>{t("step1Desc")}</p></div>
            <div className={styles.infoCard}><div className={styles.infoIcon}>2️⃣</div><h4>{t("step2")}</h4><p>{t("step2Desc")}</p></div>
            <div className={styles.infoCard}><div className={styles.infoIcon}>3️⃣</div><h4>{t("step3")}</h4><p>{t("step3Desc")}</p></div>
            <div className={styles.infoCard}><div className={styles.infoIcon}>4️⃣</div><h4>{t("step4")}</h4><p>{t("step4Desc")}</p></div>
          </div>
          <h2>{t("priceTitle")}</h2>
          <table className={styles.priceTable}>
            <thead><tr><th>{t("thType")}</th><th>{t("thOrigin")}</th><th>{t("thPrice")}</th></tr></thead>
            <tbody>
              <tr><td>Implant Osstem</td><td>Hàn Quốc</td><td className={styles.priceHighlight}>15.000.000 – 18.000.000</td></tr>
              <tr><td>Implant Straumann SLA</td><td>Thụy Sĩ</td><td className={styles.priceHighlight}>25.000.000 – 30.000.000</td></tr>
              <tr><td>Implant Nobel Biocare</td><td>Thụy Điển</td><td className={styles.priceHighlight}>28.000.000 – 35.000.000</td></tr>
              <tr><td>Implant Anthogyr</td><td>Pháp</td><td className={styles.priceHighlight}>20.000.000 – 25.000.000</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#999', fontStyle: 'italic' }}>{t("priceNote")}</p>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.ctaBox}>
            <h4>{tc("freeConsult")}</h4>
            <p>{t("sidebarConsult")}</p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder={tc("fullName")} />
              <input type="tel" placeholder={tc("phone")} />
              <button className="btn-gold" style={{ width: '100%' }}>{tc("registerConsult")}</button>
            </form>
          </div>
          <div className={styles.sidebarWidget}>
            <div className={styles.sidebarTitle}>{t("sidebarImplantTitle")}</div>
            <ul className={styles.sidebarLinks}>
              <li><Link href="/services/dental-implants">{t("sidebarImplant1")}</Link></li>
              <li><Link href="/services/dental-implants">{t("sidebarImplant2")}</Link></li>
              <li><Link href="/pricing/implants">{t("sidebarImplant3")}</Link></li>
              <li><Link href="/patient-stories/implants">{t("sidebarImplant4")}</Link></li>
            </ul>
          </div>
          <div className={styles.sidebarWidget}>
            <div className={styles.sidebarTitle}>{t("sidebarOtherTitle")}</div>
            <ul className={styles.sidebarLinks}>
              <li><Link href="/services/dental-crowns">{t("sidebarOther1")}</Link></li>
              <li><Link href="/services/orthodontics">{t("sidebarOther2")}</Link></li>
              <li><Link href="/services/dental-crowns">{t("sidebarOther3")}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
