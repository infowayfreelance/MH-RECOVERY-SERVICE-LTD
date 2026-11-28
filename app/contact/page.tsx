import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactForm'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://mhrecoveryserviceltd.co.uk/contact#page",
  "url": "https://mhrecoveryserviceltd.co.uk/contact",
  "name": "Contact MH Recovery Service Ltd",
  "description": "Contact MH Recovery Service Ltd for 24/7 vehicle recovery in Sheffield and South Yorkshire. Call 07799 180009 or send a WhatsApp message.",
  "mainEntity": {
    "@type": "AutomotiveBusiness",
    "name": "MH Recovery Service Ltd",
    "url": "https://mhrecoveryserviceltd.co.uk",
    "telephone": "+447799180009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Coupe Road",
      "addressLocality": "Sheffield",
      "postalCode": "S3 9DP",
      "addressRegion": "South Yorkshire",
      "addressCountry": "GB"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
      "Sheffield",
      "South Yorkshire"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447799180009",
      "contactType": "emergency",
      "areaServed": [
        "Sheffield",
        "South Yorkshire"
      ],
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mhrecoveryserviceltd.co.uk/contact#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is your phone line really open 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our phone line is open 24 hours a day, 7 days a week, including bank holidays. Call 07799 180009 at any time."
      }
    },
    {
      "@type": "Question",
      "name": "Should I call or send a WhatsApp message?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call 07799 180009 if you need help now or you are somewhere unsafe. Use the WhatsApp form if you are safe and want a quote, or if you want to send details or photos of the vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "What should I write in the Situation Details box?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "What has happened, the make and model, whether the car starts, rolls and steers, whether you have the keys, and where you want it taken. A short, clear message is enough."
      }
    },
    {
      "@type": "Question",
      "name": "What if I don't know exactly where I am?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Give us the road name, a nearby shop, pub or junction, and which way you were travelling. If you can, share your location pin on WhatsApp so we can see where you are."
      }
    },
    {
      "@type": "Question",
      "name": "Will you give me a price before you come out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fill in the form and we will send you a quote via WhatsApp, or ask for a price when you call. Nothing is booked until you agree."
      }
    },
    {
      "@type": "Question",
      "name": "Can someone else contact you for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A friend or family member can call or message us, but they will need your exact location, your phone number and the vehicle details, and we may need to speak to you to confirm them."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only cover Sheffield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide 24/7 vehicle recovery in Sheffield and South Yorkshire. For longer journeys, see our long distance recovery service."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a planned collection rather than an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your car needs to go to a garage, an MOT or a new address, call or use the form to tell us where it is, where it needs to go and when. Our guide to getting your car towed to a garage in Sheffield explains what to expect."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do while I wait for you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stay somewhere safe, away from traffic, and keep your phone switched on so we can reach you. If you are on a busy road, the Highway Code's breakdown rules explain where to wait."
      }
    }
  ]
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
  title: 'Contact MH Recovery Sheffield | 07799 180009, Open 24/7',
  description:
    'Call MH Recovery Service Ltd on 07799 180009 or send a WhatsApp message for 24/7 vehicle recovery in Sheffield and South Yorkshire. Coupe Road, S3 9DP.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact MH Recovery Sheffield | 07799 180009, Open 24/7',
    description:
      'Call MH Recovery Service Ltd on 07799 180009 or send a WhatsApp message for 24/7 vehicle recovery in Sheffield and South Yorkshire. Coupe Road, S3 9DP.',
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
    title: 'Contact MH Recovery Sheffield | 07799 180009, Open 24/7',
    description:
      'Call MH Recovery Service Ltd on 07799 180009 or send a WhatsApp message for 24/7 vehicle recovery in Sheffield and South Yorkshire. Coupe Road, S3 9DP.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContactPageClient />
    </>
  )
}

