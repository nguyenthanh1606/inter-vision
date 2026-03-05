'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import styles from './FloatingButtons.module.css'

export default function FloatingButtons() {
  const t = useTranslations('floatingButtons')

  return (
    <div className={styles.floating}>
      <a
        href="tel:0941818616"
        className={`${styles.btn} ${styles.call}`}
        title={t('call')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span>{t('call')}</span>
      </a>

      <a
        href="#popup-dlh"
        className={`${styles.btn} ${styles.appointment}`}
        title={t('appointment')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
        </svg>
        <span>{t('appointment')}</span>
      </a>

      <a
        href="https://m.me/110665481943894?ref=website"
        target="_blank"
        rel="noreferrer"
        className={`${styles.btn} ${styles.messenger}`}
        title="Messenger"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.22V22l3.04-1.67c.84.23 1.74.37 2.81.37 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm1.07 13.07l-2.54-2.72L5.3 15.07l5.74-6.07 2.54 2.72 5.23-2.72-5.74 6.07z" />
        </svg>
        <span>Messenger</span>
      </a>

      <a
        href="https://zalo.me/4299371072036201150"
        target="_blank"
        rel="noreferrer"
        className={`${styles.btn} ${styles.zalo}`}
        title="Zalo"
      >
        <span className={styles.zaloText}>Zalo</span>
        <span>Zalo</span>
      </a>

      <Link
        href="/contact"
        className={`${styles.btn} ${styles.address}`}
        title={t('address')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span>{t('address')}</span>
      </Link>
    </div>
  )
}
