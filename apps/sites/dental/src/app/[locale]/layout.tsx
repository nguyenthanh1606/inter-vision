import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { SpriteSheet } from '@repo/icons'
import { routing } from '@/i18n/routing'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Nha Khoa I-Dent | Hệ Thống Nha Khoa Tiêu Chuẩn Quốc Tế',
  description:
    'I-DENT Là Một Trong Những Phòng khám Nha Khoa Uy Tín Số 1 tại HCM. Chuyên Sâu Về Cấy Ghép Implant Với Đội Ngũ Bác Sĩ Mát Tay Tu Nghiệp Nhiều Năm Tại Pháp'
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const smartPopupConfig = JSON.stringify({
  domain: 'nhakhoaident.com',
  proxyUrl: '/api/smart-popup',
  dataUrl: '/api/popup-data',
  primaryColor: '#025899',
  greeting: 'Xin chào! Tôi có thể giúp gì cho bạn?',
  language: 'vi'
})

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <SpriteSheet />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </NextIntlClientProvider>
        <Script
          src="/smart-popup.js"
          data-smart-config={smartPopupConfig}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
