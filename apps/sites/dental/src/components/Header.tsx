"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "vi" ? "en" : "vi";

  const handleSwitchLocale = () => {
    router.replace(pathname as any, { locale: otherLocale });
  };

  const menuItems = [
    {
      label: t("menu.gioiThieu"),
      href: "/about" as const,
      children: [
        { label: t("menu.gioiThieu_veIDent"), href: "/about/about-i-dent" as const },
        { label: t("menu.gioiThieu_tsbs"), href: "/about/dr-nguyen-hieu-tung" as const },
        { label: t("menu.gioiThieu_doiNgu"), href: "/about/dental-team" as const },
        { label: t("menu.gioiThieu_camKet"), href: "/about/quality-commitment" as const },
        { label: t("menu.gioiThieu_taiSao"), href: "/about/why-choose-us" as const },
        { label: t("menu.gioiThieu_coSo"), href: "/about/facilities" as const },
        { label: t("menu.gioiThieu_doiTac"), href: "/about/about-i-dent" as const },
      ],
    },
    {
      label: t("menu.implant"),
      href: "/services/dental-implants" as const,
      children: [
        { label: t("menu.implant_bangGia"), href: "/pricing/implants" as const },
        { label: t("menu.implant_congNghe"), href: "/services/dental-implants" as const },
        { label: t("menu.implant_toanHam"), href: "/services/dental-implants" as const },
        { label: t("menu.implant_phacDo"), href: "/services/dental-implants" as const },
        { label: t("menu.implant_vietKieu"), href: "/services/dental-implants" as const },
        { label: t("menu.implant_khachHang"), href: "/patient-stories/implants" as const },
      ],
    },
    {
      label: t("menu.bocSu"),
      href: "/services/dental-crowns" as const,
      children: [
        { label: t("menu.bocSu_bangGia"), href: "/pricing/implants" as const },
        { label: t("menu.bocSu_thamMy"), href: "/services/dental-crowns" as const },
        { label: t("menu.bocSu_veneer"), href: "/services/dental-crowns" as const },
        { label: t("menu.bocSu_khachHang"), href: "/patient-stories/implants" as const },
      ],
    },
    {
      label: t("menu.niengRang"),
      href: "/services/orthodontics" as const,
      children: [
        { label: t("menu.niengRang_bangGia"), href: "/pricing/implants" as const },
        { label: t("menu.niengRang_thamMy"), href: "/services/orthodontics" as const },
      ],
    },
    {
      label: t("menu.dichVuKhac"),
      href: "/services/dental-implants" as const,
      children: [
        { label: t("menu.dichVu_tramRang"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_caoVoi"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_tayTrang"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_nhoRang"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_nhoRangKhon"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_viemTuy"), href: "/services/dental-implants" as const },
        { label: t("menu.dichVu_taoHinh"), href: "/services/dental-implants" as const },
      ],
    },
    {
      label: t("menu.uuDai"),
      href: "/pricing/implants" as const,
      children: [
        { label: t("menu.uuDai_vang"), href: "/pricing/implants" as const },
        { label: t("menu.uuDai_implant"), href: "/pricing/implants" as const },
        { label: t("menu.uuDai_rangSu"), href: "/pricing/implants" as const },
        { label: t("menu.uuDai_niengRang"), href: "/pricing/implants" as const },
        { label: t("menu.uuDai_dichVuKhac"), href: "/pricing/implants" as const },
      ],
    },
    {
      label: t("menu.khachHang"),
      href: "/patient-stories/implants" as const,
      children: [
        { label: t("menu.khachHang_implant"), href: "/patient-stories/implants" as const },
        { label: t("menu.khachHang_bocSu"), href: "/patient-stories/implants" as const },
        { label: t("menu.khachHang_niengRang"), href: "/patient-stories/implants" as const },
      ],
    },
    { label: t("menu.tinTuc"), href: "/knowledge/news" as const },
    {
      label: t("menu.kienThuc"),
      href: "/knowledge/news" as const,
      children: [
        { label: t("menu.kienThuc_implant"), href: "/knowledge/news" as const },
        { label: t("menu.kienThuc_rangSu"), href: "/knowledge/news" as const },
        { label: t("menu.kienThuc_niengRang"), href: "/knowledge/news" as const },
        { label: t("menu.kienThuc_tongHop"), href: "/knowledge/news" as const },
      ],
    },
    {
      label: t("menu.lienHe"),
      href: "/contact" as const,
      children: [{ label: t("menu.tuyenDung"), href: "/contact" as const }],
    },
  ];

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoText}>
              <span className={styles.logoIcon}>🦷</span>
              <div>
                <div className={styles.logoName}>NHA KHOA I-DENT</div>
                <div className={styles.logoSub}>International Dental Implant Center</div>
              </div>
            </div>
          </Link>
          <div className={styles.topRight}>
            <a href="tel:0941818616" className={styles.hotline}>
              <span className={styles.hotlineIcon}>📞</span>
              <span className={styles.hotlineLabel}>{tc("hotline")}</span>
              <span className={styles.hotlineNumber}>{tc("hotlineNumber")}</span>
            </a>
            <button onClick={handleSwitchLocale} className={styles.langSwitch}>
              {t("langSwitch")}
            </button>
          </div>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`${styles.navBar} ${mobileOpen ? styles.navOpen : ""}`}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && <span className={styles.arrow}>▾</span>}
                </Link>
                {item.children && activeDropdown === idx && (
                  <ul className={styles.dropdown}>
                    {item.children.map((child, cIdx) => (
                      <li key={cIdx}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
