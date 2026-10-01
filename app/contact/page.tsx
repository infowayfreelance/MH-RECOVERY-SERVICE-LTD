import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactForm'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Contact MH Recovery Sheffield | Call 24/7',
  description:
    'Call MH Recovery Service Ltd on 07799 180009 or message us on WhatsApp for vehicle recovery in Sheffield. Coupe Road, S3 9DP. Open 24/7.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact MH Recovery Sheffield | Call 24/7',
    description:
      'Call MH Recovery Service Ltd on 07799 180009 or message us on WhatsApp for vehicle recovery in Sheffield. Coupe Road, S3 9DP. Open 24/7.',
    url: `${SITE_URL}/contact`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Contact Sheffield',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MH Recovery Sheffield | Call 24/7',
    description:
      'Call MH Recovery Service Ltd on 07799 180009 or message us on WhatsApp for vehicle recovery in Sheffield. Coupe Road, S3 9DP. Open 24/7.',
    images: [OG_IMAGE],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
