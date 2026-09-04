import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import FontLoader from '@/components/FontLoader'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mhrrecoveryservice.co.uk'),
  title: 'MH RECOVERY SERVICE LTD| 24/7 Professional Recovery Sheffield',
  description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
  openGraph: {
    title: 'MH RECOVERY SERVICE LTD| 24/7 Professional Recovery Sheffield',
    description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
    url: 'https://mhrrecoveryservice.co.uk',
    siteName: 'MH RECOVERY SERVICE LTD',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/Open Graph MH-airanko.webp',
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service LTD - Fast. Reliable. 24/7 Service.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MH RECOVERY SERVICE | 24/7 Professional Recovery Sheffield',
    description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hussnain%20Car%20Recovery%20%20%281%29-XaXQs3zDtYmDJjNuKL1uydY4WTMgrG.png'],
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
        <link rel="icon" type="image/webp" href="/Site-Icon MH.webp" />
        <link rel="apple-touch-icon" href="/Site-Icon MH.webp" />
      </head>
      <body className="bg-surface text-on-surface">
        <FontLoader />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
