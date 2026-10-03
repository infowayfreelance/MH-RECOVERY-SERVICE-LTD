import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS, REVIEWS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Long Distance Recovery Sheffield',
  description:
    'Long distance recovery Sheffield from MH Recovery Service Ltd. Sheffield and South Yorkshire collections. Call our 24/7 line to discuss your journey.',
  alternates: {
    canonical: '/services/long-distance-recovery-sheffield',
  },
  openGraph: {
    title: 'Long Distance Recovery Sheffield',
    description:
      'Long distance recovery Sheffield from MH Recovery Service Ltd. Sheffield and South Yorkshire collections. Call our 24/7 line to discuss your journey.',
    url: `${SITE_URL}/services/long-distance-recovery-sheffield`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Long Distance Recovery Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long Distance Recovery Sheffield',
    description:
      'Long distance recovery Sheffield from MH Recovery Service Ltd. Sheffield and South Yorkshire collections. Call our 24/7 line to discuss your journey.',
    images: [OG_IMAGE],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Long Distance Recovery Sheffield',
      item: `${SITE_URL}/services/long-distance-recovery-sheffield`,
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Long Distance Recovery Sheffield',
  serviceType: 'Long distance vehicle recovery',
  description:
    'Long distance recovery from Sheffield to an agreed destination. MH Recovery Service Ltd collects vehicles in Sheffield and South Yorkshire and delivers them to the agreed address.',
  areaServed: [
    { '@type': 'City', name: 'Sheffield' },
    { '@type': 'AdministrativeArea', name: 'South Yorkshire' },
  ],
  provider: {
    '@type': 'AutomotiveBusiness',
    name: 'MH Recovery Service Ltd',
    url: SITE_URL,
    telephone: '+447799180009',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Coupe Road',
      addressLocality: 'Sheffield',
      postalCode: 'S3 9DP',
      addressCountry: 'GB',
    },
    areaServed: 'Sheffield',
    openingHours: 'Mo-Su 00:00-23:59',
  },
  url: `${SITE_URL}/services/long-distance-recovery-sheffield`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you take my car outside Sheffield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we arrange longer journeys from Sheffield to agreed destinations. Give us the delivery postcode so coverage can be confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you collect a car that will not start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we transport non-running cars on agreed long distance jobs. Tell us whether the car can roll and steer, and whether you have its keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'What details do you need for a quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We need both addresses, your vehicle details and its condition. Include access restrictions and the receiving contact\'s details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you deliver to my chosen garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can deliver to a garage agreed when booking. Confirm that it will accept the vehicle and where it should be left.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel with my car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Passenger travel is not automatically included in a vehicle recovery booking. Tell us how many people need transport before agreeing to the job.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I arrange long distance recovery in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, planned collection arrangements can be agreed in advance. Call with your preferred collection date and destination details.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'Can you take my car outside Sheffield?',
    a: 'Yes, we arrange longer journeys from Sheffield to agreed destinations. Give us the delivery postcode so coverage can be confirmed.',
  },
  {
    q: 'Can you collect a car that will not start?',
    a: 'Yes, we transport non-running cars on agreed long distance jobs. Tell us whether the car can roll and steer, and whether you have its keys.',
  },
  {
    q: 'What details do you need for a quote?',
    a: "We need both addresses, your vehicle details and its condition. Include access restrictions and the receiving contact's details.",
  },
  {
    q: 'Can you deliver to my chosen garage?',
    a: 'Yes, we can deliver to a garage agreed when booking. Confirm that it will accept the vehicle and where it should be left.',
  },
  {
    q: 'Can I travel with my car?',
    a: 'Passenger travel is not automatically included in a vehicle recovery booking. Tell us how many people need transport before agreeing to the job.',
  },
  {
    q: 'Can I arrange long distance recovery in advance?',
    a: 'Yes, planned collection arrangements can be agreed in advance. Call with your preferred collection date and destination details.',
  },
]

export default function LongDistanceRecoverySheffield() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[320px] md:min-h-[500px] flex items-center pt-24 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Long distance recovery vehicle ready for a Sheffield collection"
              className="object-cover"
              src="/car-recovery-sheffield.jpg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>

          {/* Breadcrumb */}
          <div className="hidden absolute top-20 md:top-24 left-4 md:left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-on-surface-variant flex-wrap">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true"><span className="material-symbols-outlined text-xs" style={{ fontSize: '12px' }}>chevron_right</span></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li aria-hidden="true"><span className="material-symbols-outlined text-xs" style={{ fontSize: '12px' }}>chevron_right</span></li>
                <li className="text-primary font-medium" aria-current="page">Long Distance Recovery Sheffield</li>
              </ol>
            </nav>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Long Distance Recovery <span className="text-primary">in Sheffield</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-xl leading-relaxed font-sans">
                {BUSINESS.name} provides long distance recovery from Sheffield to an agreed destination. Based on {BUSINESS.address.street}, we help arrange vehicle moves when a local drop-off does not meet your needs. Call {BUSINESS.phonePrimary} on our 24/7 phone line for a quote and an estimated arrival time before agreeing to the job.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS.phonePrimaryTel}
                  className="flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20long%20distance%20recovery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-[#1ebe5d]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-primary hover:text-on-primary"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When Your Vehicle Needs a Longer Journey */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                When Your Vehicle Needs <span className="text-primary">a Longer Journey</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                A breakdown away from home may leave you needing more than transport to the nearest garage. You might want the car returned to your usual repairer or taken to an address where someone can receive it.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                Long distance recovery is also useful when a stopped vehicle is already parked safely but needs moving further away. The main question is where it needs to go, rather than how close the nearest garage is.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                Give us both locations when you call. Explain whether the vehicle is beside a road, outside a home or already with a garage. Tell us if collection or delivery must fit around someone&apos;s opening hours.
              </p>
              <div className="flex items-start gap-3 bg-surface-container-high border-l-4 border-primary p-4 rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">warning</span>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                  If you are still at a breakdown scene, put safety before journey planning. If anyone is hurt or in danger, call 999 first.
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="MH Recovery Service Ltd vehicle ready for a long distance recovery from Sheffield"
                className="object-cover"
                src="/car-towing-sheffield.webp"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Planning Collection and Delivery */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Planning Collection and Delivery
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>
                A longer move needs clear details at both ends. Provide the full collection and delivery addresses, postcodes and a contact number for the person receiving the vehicle.
              </p>
              <p>
                Tell us your registration, vehicle make and model, and whether it starts, rolls and steers. Mention missing keys, damaged wheels or any known fault that could affect loading. We use these details to agree a suitable recovery method.
              </p>
              <p>
                Explain access at the destination as well as the collection point. A narrow driveway, locked gate or low entrance can affect where a vehicle can be delivered. Tell the receiving garage that the car is arriving by recovery and confirm where it should be left.
              </p>
              <p>
                Passenger travel must be agreed separately. Do not assume that a vehicle recovery booking includes seats for you, your family or pets.
              </p>
              <p>
                We confirm the proposed route and destination during the call. This page does not promise collection or delivery at every UK address.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How It Works
              </h2>
              <div className="h-1 w-12 md:w-16 bg-primary mx-auto" />
            </div>
            <div className="max-w-3xl mx-auto text-on-surface-variant text-base font-sans leading-relaxed text-center">
              <p>
                Call with the collection point, destination and vehicle condition. We discuss the full journey, give you a quote and provide an estimated arrival time before you agree. Once the arrangements are confirmed, we collect the vehicle and deliver it to the agreed address. Tell us promptly if either location or the receiving contact changes.
              </p>
            </div>
          </div>
        </section>

        {/* Long Distance Recovery Across Sheffield */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
              Long Distance Recovery Across Sheffield
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              We serve Sheffield and South Yorkshire. Collection enquiries can come from homes, workplaces and garages in Hillsborough, Crookes, Ecclesall, Heeley and Woodseats, as well as Meadowhall, Attercliffe, Handsworth, Darnall and the city centre.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              Include your full postcode when arranging the journey. Addresses in S1, S2 and S3 may have different access needs, so share the exact entrance or parking position.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              If collection is on or near the M1, A61 or Sheffield Parkway, give your direction of travel and nearest junction or landmark. Attendance at these road locations needs confirmation on the call.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage. For a longer delivery, give us the destination postcode so the journey can be agreed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS.phonePrimaryTel}
                className="flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-primary hover:text-on-primary"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                Why Choose <span className="text-primary">{BUSINESS.name}?</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                We are a Sheffield business with a phone line that answers enquiries day and night. You can discuss both ends of the journey and receive a quote before committing to the move.
              </p>
              {BUSINESS.insuranceDetails && (
                <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                  {BUSINESS.insuranceDetails}
                </p>
              )}
              {BUSINESS.yearsInBusinessNote && (
                <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                  {BUSINESS.yearsInBusinessNote}
                </p>
              )}
              {REVIEWS.length > 0 && (
                <div className="flex flex-col gap-3 mt-4">
                  {REVIEWS.map((review) => (
                    <div key={review.author + review.date} className="bg-surface-container-high border border-outline/20 rounded-xl p-4">
                      <p className="text-on-surface-variant text-sm font-sans leading-relaxed mb-2">&ldquo;{review.text}&rdquo;</p>
                      <p className="text-on-surface text-xs font-bold">{review.author} &mdash; <span className="text-on-surface-variant font-normal">{review.date}</span></p>
                    </div>
                  ))}
                </div>
              )}
              <ul className="flex flex-col gap-4 mt-6">
                {[
                  { icon: 'schedule', title: 'Available 24/7', desc: 'You can call us any time, including nights and weekends.' },
                  { icon: 'request_quote', title: 'Quote before you agree', desc: 'We give you a quote and an estimated arrival time before the job starts.' },
                  { icon: 'location_on', title: 'Local to Sheffield', desc: 'We know the area and cover Sheffield and South Yorkshire.' },
                  { icon: 'checklist', title: 'Clear process', desc: 'We discuss both collection and delivery points before we come out.' },
                ].map(({ icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                      <strong className="text-on-surface">{title}:</strong> {desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-on-surface-variant text-sm font-sans mt-6">
                Have a question?{' '}
                <a href={BUSINESS.phonePrimaryTel} className="text-primary font-semibold hover:opacity-80 transition-opacity">
                  Call us
                </a>{' '}
                and explain what help you need.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="MH Recovery Service Ltd collecting a vehicle for long distance recovery in Sheffield"
                className="object-cover"
                src="/car-recovery-sheffield.jpg"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Long Distance Recovery Sheffield FAQs
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto" />
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group bg-surface-container-high border border-outline/20 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-bold text-sm text-on-surface uppercase tracking-tight select-none hover:text-primary transition-colors">
                    {q}
                    <span className="material-symbols-outlined text-primary text-xl shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6 border-t border-outline/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
              Related Services
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              For other recovery needs, explore{' '}
              <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                vehicle towing in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                breakdown recovery in Sheffield
              </Link>
              {' '}and{' '}
              <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                accident recovery in Sheffield
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 px-6 font-bold text-sm tracking-tight rounded active:scale-95 transition-all hover:bg-primary hover:text-on-primary min-h-[48px]"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">grid_view</span>
                View All Services
              </Link>
              <Link
                href="/services/breakdown-recovery-sheffield"
                className="flex items-center justify-center gap-2 bg-surface-container-high border border-outline/20 text-on-surface py-4 px-6 font-bold text-sm tracking-tight rounded active:scale-95 transition-all hover:border-primary min-h-[48px]"
              >
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">build</span>
                Breakdown Recovery
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-14 bg-primary px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>local_shipping</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Discuss Your Long Distance Recovery
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-2 leading-relaxed">
              Call {BUSINESS.phonePrimary} with the collection and delivery postcodes. We will discuss the journey and give you a quote before you agree.
            </p>
            <p className="text-on-primary/80 text-sm font-sans mb-8">
              {BUSINESS.name}, {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.postcode}. {BUSINESS.hours}.
            </p>
            <p className="text-on-primary/70 text-sm font-sans mb-8">
              The phone line is open 24/7. Your estimated arrival time is given on the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS.phonePrimaryTel}
                className="flex items-center justify-center gap-2 bg-on-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px] hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20long%20distance%20recovery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-[#1ebe5d]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-on-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-on-primary hover:text-primary"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
