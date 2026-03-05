import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  pathnames: {
    '/': '/',
    '/about': {
      vi: '/gioi-thieu',
      en: '/about'
    },
    '/about/about-i-dent': {
      vi: '/gioi-thieu/gioi-thieu-ve-nha-khoa-i-dent',
      en: '/about/about-i-dent'
    },
    '/about/dr-nguyen-hieu-tung': {
      vi: '/gioi-thieu/tien-si-bac-si-nguyen-hieu-tung',
      en: '/about/dr-nguyen-hieu-tung'
    },
    '/about/dental-team': {
      vi: '/gioi-thieu/doi-ngu-tien-si-bac-si',
      en: '/about/dental-team'
    },
    '/about/quality-commitment': {
      vi: '/gioi-thieu/cam-ket-ve-chat-luong',
      en: '/about/quality-commitment'
    },
    '/about/facilities': {
      vi: '/gioi-thieu/co-so-vat-chat',
      en: '/about/facilities'
    },
    '/about/why-choose-us': {
      vi: '/gioi-thieu/tai-sao-chon-chung-toi',
      en: '/about/why-choose-us'
    },
    '/services/dental-implants': {
      vi: '/dich-vu/trong-rang-implant',
      en: '/services/dental-implants'
    },
    '/services/dental-crowns': {
      vi: '/dich-vu/boc-rang-su-tham-my',
      en: '/services/dental-crowns'
    },
    '/services/orthodontics': {
      vi: '/dich-vu/nieng-rang-tham-my',
      en: '/services/orthodontics'
    },
    '/pricing/implants': {
      vi: '/bang-gia/implant',
      en: '/pricing/implants'
    },
    '/patient-stories/implants': {
      vi: '/cau-chuyen-khach-hang/implant',
      en: '/patient-stories/implants'
    },
    '/knowledge/news': {
      vi: '/chuyen-muc-kien-thuc/tin-tuc',
      en: '/knowledge/news'
    },
    '/contact': {
      vi: '/lien-he',
      en: '/contact'
    }
  }
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]
