import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import FontLoader from '@/components/FontLoader'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Car Recovery Sheffield | 24/7 Vehicle Recovery – MH Recovery Service Ltd',
    template: '%s | MH Recovery Service Ltd',
  },
  description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, and vehicle towing across Sheffield. Call for a clear quote before you book.',
  openGraph: {
    title: 'Car Recovery Sheffield | 24/7 Vehicle Recovery – MH Recovery Service Ltd',
    description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, and vehicle towing across Sheffield. Call for a clear quote before you book.',
    url: SITE_URL,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Car Recovery Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Recovery Sheffield | 24/7 Vehicle Recovery – MH Recovery Service Ltd',
    description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, and vehicle towing. Call now.',
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
      </body>
    </html>
  )
}
