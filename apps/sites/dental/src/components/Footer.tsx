'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const t = useTranslations('footer')
  const tc = useTranslations('common')

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Column 1: Logo + Social */}
            <div className={styles.col}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>🦷</span>
                <div>
                  <div className={styles.logoName}>NHA KHOA I-DENT</div>
                  <div className={styles.logoSub}>
                    International Dental Implant Center
                  </div>
                </div>
              </div>
              <div className={styles.social}>
                <h4>{t('connect')}</h4>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIcon}
                  >
                    f
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIcon}
                  >
                    ▶
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIcon}
                  >
                    ♪
                  </a>
                </div>
              </div>
              <div className={styles.payment}>
                <h4>{t('paymentPartner')}</h4>
                <div className={styles.paymentIcons}>
                  <span className={styles.payCard}>VISA</span>
                  <span className={styles.payCard}>MC</span>
                  <span className={styles.payCard}>JCB</span>
                </div>
              </div>
            </div>

            {/* Column 2: Branch Addresses */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t('branches')}</h4>
              <div className={styles.branch}>
                <p>
                  <strong>CS1:</strong> {t('branch1')}
                </p>
                <p>ĐT: (028) 38406854</p>
              </div>
              <div className={styles.branch}>
                <p>
                  <strong>CS2:</strong> {t('branch2')}
                </p>
                <p>ĐT: (028) 38336818</p>
              </div>
              <div className={styles.branch}>
                <p>
                  <strong>CS3:</strong> {t('branch3')}
                </p>
                <p>ĐT: (028) 22036818</p>
              </div>
              <p className={styles.hotline}>
                <strong>Hotline:</strong> 094 1818 616
              </p>
            </div>

            {/* Column 3: Info */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t('needToKnow')}</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/about/about-i-dent">{t('aboutIDent')}</Link>
                </li>
                <li>
                  <Link href="/about/dr-nguyen-hieu-tung">{t('drTung')}</Link>
                </li>
                <li>
                  <Link href="/about/dental-team">{t('doctorTeam')}</Link>
                </li>
                <li>
                  <Link href="/about/quality-commitment">
                    {t('qualityCommit')}
                  </Link>
                </li>
                <li>
                  <Link href="/about/why-choose-us">{t('whyUs')}</Link>
                </li>
                <li>
                  <Link href="/contact">{t('contactUs')}</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Working hours + Blog links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t('workingHours')}</h4>
              <p>
                {t('weekday')} <strong>{t('weekdayHours')}</strong>
              </p>
              <p>
                {t('sunday')} <strong>{t('sundayHours')}</strong>
              </p>

              <h4 className={styles.colTitle} style={{ marginTop: 20 }}>
                {t('articles')}
              </h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/knowledge/news">{t('implantArticles')}</Link>
                </li>
                <li>
                  <Link href="/knowledge/news">{t('ceramicArticles')}</Link>
                </li>
                <li>
                  <Link href="/knowledge/news">{t('bracesArticles')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <p>{t('copyright1')}</p>
          <p>
            © {new Date().getFullYear()} {t('copyright2')}
          </p>
        </div>
      </div>

      {/* Floating Contact Form */}
      <div className={styles.footerForm}>
        <div className={styles.container}>
          <p className={styles.formLabel}>{t('formLabel')}</p>
          <form className={styles.formRow}>
            <input
              type="text"
              placeholder={tc('fullName')}
              className={styles.formInput}
            />
            <input
              type="tel"
              placeholder={tc('phone')}
              className={styles.formInput}
            />
            <textarea
              placeholder={t('dentalCondition')}
              className={styles.formTextarea}
              rows={2}
            />
            <button type="submit" className={styles.formBtn}>
              {t('submitForm')}
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
