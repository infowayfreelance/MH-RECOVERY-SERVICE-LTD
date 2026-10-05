import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactForm'
import { SITE_URL, OG_IMAGE, BUSINESS } from '@/lib/siteConfig'

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact MH Recovery Service Ltd',
  description: 'Contact MH Recovery Service Ltd for 24/7 vehicle recovery in Sheffield. Call 07799 180009 or send a WhatsApp message.',
  mainEntity: {
    '@type': 'AutomotiveBusiness',
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phonePrimaryIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: ['Sheffield', 'South Yorkshire'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
}

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  )
}
