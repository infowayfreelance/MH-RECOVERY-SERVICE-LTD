import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import FontLoader from '@/components/FontLoader'
import CookieBanner from '@/components/CookieBanner'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Vehicle Recovery Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-surface ${ubuntu.variable}`}>
      <head>
        <link rel="icon" type="image/webp" href="/site-icon.webp" />
        <link rel="apple-touch-icon" href="/site-icon.webp" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NB6TMS9G');` }} />
      </head>
      <body className="bg-surface text-on-surface">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NB6TMS9G" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <FontLoader />
        {children}
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  )
}
