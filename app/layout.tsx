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
  title: 'Car Recovery Sheffield | 24/7 Help – MH Recovery Service Ltd',
  description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, vehicle towing, and jump starts across Sheffield. Call now.',
  keywords: 'car recovery Sheffield, breakdown recovery Sheffield, vehicle recovery Sheffield, car towing Sheffield, jump start Sheffield, 24/7 recovery Sheffield',
  openGraph: {
    title: 'Car Recovery Sheffield | 24/7 Help – MH Recovery Service Ltd',
    description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, vehicle towing, and jump starts across Sheffield. Call now.',
    url: 'https://mhrrecoveryservice.co.uk',
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/Open Graph MH-airanko.webp',
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Car Recovery Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Recovery Sheffield | 24/7 Help – MH Recovery Service Ltd',
    description: 'Need car recovery in Sheffield? MH Recovery Service Ltd is available 24/7 for car recovery, breakdown recovery, vehicle towing, and jump starts. Call now.',
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
