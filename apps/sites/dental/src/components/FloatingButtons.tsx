'use client'

import { useTranslations } from 'next-intl'
import { Phone, CalendarDays, MapPin } from 'lucide-react'
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
        <Phone size={20} />
        <span>{t('call')}</span>
      </a>

      <a
        href="#popup-dlh"
        className={`${styles.btn} ${styles.appointment}`}
        title={t('appointment')}
      >
        <CalendarDays size={20} />
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
        <MapPin size={20} />
        <span>{t('address')}</span>
      </Link>
    </div>
  )
}
