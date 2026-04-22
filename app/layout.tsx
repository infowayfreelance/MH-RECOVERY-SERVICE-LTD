import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'HUSSNAIN CAR RECOVERY | 24/7 Professional Recovery Sheffield',
  description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
  openGraph: {
    title: 'HUSSNAIN CAR RECOVERY | 24/7 Professional Recovery Sheffield',
    description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
    url: 'https://hussnaincarrecovery.co.uk',
    siteName: 'Hussnain Car Recovery',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hussnain%20Car%20Recovery%20%20%281%29-XaXQs3zDtYmDJjNuKL1uydY4WTMgrG.png',
        width: 1200,
        height: 630,
        alt: 'Hussnain Car Recovery - Fast. Reliable. 24/7 Service.',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUSSNAIN CAR RECOVERY | 24/7 Professional Recovery Sheffield',
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />    
          </head>
      <body className="bg-surface text-on-surface">{children}</body>
    </html>
  )
}
