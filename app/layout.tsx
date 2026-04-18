import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HUSSNIN CAR RECOVERY | 24/7 Professional Recovery Sheffield',
  description: 'Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-surface text-on-surface">{children}</body>
    </html>
  )
}