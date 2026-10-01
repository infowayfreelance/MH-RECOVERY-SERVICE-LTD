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
  title: {
    default: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
    template: '%s',
  },
  description: '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
  openGraph: {
    title: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
    description: '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
    url: SITE_URL,
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
    title: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
    description: '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
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
      </head>
      <body className="bg-surface text-on-surface">
        <FontLoader />
        {children}
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  )
}
