import './global.css'
import { SpriteSheet } from '@repo/icons'
import Script from 'next/script'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { inter } from './lib/fonts'

export const metadata = {
  title: 'Metatus - AI Lead Generation',
  description:
    'Create AI-powered quiz funnels that capture real customer intent, qualify prospects instantly, and skyrocket your conversion rates.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head></head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 font-body antialiased selection:bg-primary selection:text-white">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >{`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`}</Script>
        <SpriteSheet />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
