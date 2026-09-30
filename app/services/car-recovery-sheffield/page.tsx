import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: '24/7 Car Recovery Sheffield | Vehicle Towing | MH Recovery',
  description:
    '24/7 car recovery in Sheffield & South Yorkshire. Breakdown, accident and garage transfers. Call MH Recovery for a clear quote before you book.',
  alternates: {
    canonical: '/services/car-recovery-sheffield',
  },
  openGraph: {
    title: '24/7 Car Recovery Sheffield | Vehicle Towing | MH Recovery',
    description:
      '24/7 car recovery in Sheffield & South Yorkshire. Breakdown, accident and garage transfers. Call MH Recovery for a clear quote before you book.',
    url: `${SITE_URL}/services/car-recovery-sheffield`,
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
    title: '24/7 Car Recovery Sheffield | Vehicle Towing | MH Recovery',
    description:
      '24/7 car recovery in Sheffield & South Yorkshire. Breakdown, accident and garage transfers. Call MH Recovery for a clear quote before you book.',
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
      name: 'Car Recovery Sheffield',
      item: `${SITE_URL}/services/car-recovery-sheffield`,
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Recovery Sheffield',
  description:
    'Car recovery service in Sheffield. MH Recovery Service Ltd can collect your car from an agreed location and move it to a garage or another agreed place.',
  areaServed: {
    '@type': 'City',
    name: 'Sheffield',
  },
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
  url: `${SITE_URL}/services/car-recovery-sheffield`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does car recovery in Sheffield cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost depends on your car\'s location, its condition and where it needs to go. Share these details so we can give you a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How soon can you collect my car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Collection time depends on availability, your location and the job. Call us for the current estimated time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you collect a car from my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact us with your address and car details. Tell us if there is a narrow drive, low entrance or limited space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you take my car to my chosen garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell us the garage address when you ask for a quote. We will check the route and agree on the destination with you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you recover a damaged car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell us how the car is damaged and whether its wheels can move. We will check if we can handle the job and what equipment is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What details do you need when I call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We need your location, car make and model, what has happened and the delivery address. Tell us if the car cannot roll or is hard to reach.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'How much does car recovery in Sheffield cost?',
    a: "The cost depends on your car's location, its condition and where it needs to go. Share these details so we can give you a quote.",
  },
  {
    q: 'How soon can you collect my car?',
    a: 'Collection time depends on availability, your location and the job. Call us for the current estimated time.',
  },
  {
    q: 'Can you collect a car from my home?',
    a: 'Contact us with your address and car details. Tell us if there is a narrow drive, low entrance or limited space.',
  },
  {
    q: 'Can you take my car to my chosen garage?',
    a: 'Tell us the garage address when you ask for a quote. We will check the route and agree on the destination with you.',
  },
  {
    q: 'Can you recover a damaged car?',
    a: 'Tell us how the car is damaged and whether its wheels can move. We will check if we can handle the job and what equipment is needed.',
  },
  {
    q: 'What details do you need when I call?',
    a: "We need your location, car make and model, what has happened and the delivery address. Tell us if the car cannot roll or is hard to reach.",
  },
]

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call or Ask for a Quote',
    desc: 'Tell us your location, car details and what has happened.',
  },
  {
    num: '2',
    icon: 'handshake',
    title: 'Agree on the Job',
    desc: 'Tell us where the car needs to go. We will check availability and explain the price before you agree.',
  },
  {
    num: '3',
    icon: 'build',
    title: 'Arrange Collection',
    desc: 'Once the job is agreed, we will explain the collection details. Tell us about any access problems.',
  },
  {
    num: '4',
    icon: 'local_shipping',
    title: 'Move Your Car',
    desc: 'Your car will be taken to the agreed place.',
  },
]

const situations = [
  {
    icon: 'car_crash',
    title: 'Your Car Has Broken Down',
    desc: 'Your car may stop while you are driving. If it cannot be driven, call us to discuss recovery.',
  },
  {
    icon: 'no_crash',
    title: 'Your Car Will Not Start',
    desc: 'If your car will not start at home or in a car park, we can check whether recovery is the right option.',
  },
  {
    icon: 'garage',
    title: 'Your Car Needs to Reach a Garage',
    desc: 'You may have a repair booked but no way to drive your car there. Tell us the collection point and garage address.',
  },
  {
    icon: 'warning',
    title: 'Your Car Has Been Damaged',
    desc: 'If your car has been damaged, tell us about its condition before collection. We will check what equipment the job needs.',
  },
]

const whyPoints = [
  { icon: 'checklist', title: 'Clear steps', desc: 'We explain what happens next.' },
  { icon: 'directions_car', title: "Your car's needs", desc: 'We ask about its condition before collection.' },
  { icon: 'location_on', title: 'An agreed destination', desc: 'We confirm where your car needs to go.' },
  { icon: 'request_quote', title: 'A quote before you agree', desc: 'You can check the cost before booking.' },
]

export default function CarRecoverySheffield() {
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
              alt="Car recovery truck in Sheffield"
              className="object-cover"
              src="/car-recovery-sheffield.jpg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>

          {/* Breadcrumb */}
          <div className="absolute top-20 md:top-24 left-4 md:left-6 z-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-on-surface-variant flex-wrap">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true"><span className="material-symbols-outlined text-xs" style={{ fontSize: '12px' }}>chevron_right</span></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li aria-hidden="true"><span className="material-symbols-outlined text-xs" style={{ fontSize: '12px' }}>chevron_right</span></li>
                <li className="text-primary font-medium" aria-current="page">Car Recovery Sheffield</li>
              </ol>
            </nav>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Car Recovery <span className="text-primary">in Sheffield</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-xl leading-relaxed font-sans">
                Car broken down? Need help moving it? MH Recovery Service Ltd can help with car recovery in Sheffield. Tell us where your car is and where it needs to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07799180009"
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
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                Help When Your Car <span className="text-primary">Cannot Be Driven</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                A car problem can stop your day. You may be at home, in a car park or on the road.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                Our car recovery service helps move a car that cannot be driven. You can ask us to take it to a garage, your home or another agreed place.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                When you call, tell us what has happened. We will check whether we can help with your car and location.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="Car being loaded onto a recovery truck in Sheffield"
                className="object-cover"
                src="/car-towing-sheffield.jpg"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* What Is Included */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                What Our Car Recovery Service Includes
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: 'location_on', text: 'Collection from an agreed location.' },
                { icon: 'rv_hookup', text: 'Loading your car onto suitable recovery equipment.' },
                { icon: 'local_shipping', text: 'Moving your car to an agreed place.' },
                { icon: 'garage', text: 'Delivery to a garage for repairs.' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 bg-surface-container-high p-5 rounded-xl border border-outline/20">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
                  <p className="text-on-surface text-sm font-sans leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-on-surface-variant text-sm font-sans text-center mt-6 max-w-2xl mx-auto">
              Tell us if your car has damage, locked wheels or another problem. These details help us plan the collection.
            </p>
          </div>
        </section>

        {/* Common Situations */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                When You May Need Car Recovery
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {situations.map(({ icon, title, desc }) => (
                <div key={title} className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-3 border border-outline/20">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">{icon}</span>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-on-surface">{title}</h3>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-2 bg-surface-container p-4 rounded-xl border border-outline/20 max-w-2xl mx-auto">
              <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">emergency</span>
              <p className="text-on-surface-variant text-sm font-sans">
                If anyone is hurt or in immediate danger, call <strong className="text-on-surface">999</strong> first.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How Car Recovery Works
              </h2>
              <div className="h-1 w-12 md:w-16 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ num, icon, title, desc }) => (
                <div key={num} className="relative flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-5xl font-black text-primary/20 leading-none select-none">{num}</span>
                    <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">{icon}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-on-surface">{title}</h3>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                Why Choose <span className="text-primary">MH Recovery Service Ltd?</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-6 leading-relaxed">
                We keep the recovery process simple.
              </p>
              <ul className="flex flex-col gap-4">
                {whyPoints.map(({ icon, title, desc }) => (
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
                <a href="tel:07799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                  Call us
                </a>{' '}
                and explain what help you need.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="MH Recovery Service Ltd recovery truck on a Sheffield road"
                className="object-cover"
                src="/breakdown-recovery-sheffield.jpg"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
              Car Recovery Across Sheffield
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              Need car recovery in Sheffield? Send us your exact location or postcode. We will check whether we can reach your car and collect it from that spot.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              If your car is outside Sheffield, contact us to check coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:07799180009"
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

        {/* FAQs */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Car Recovery Sheffield FAQs
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
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6 border-t border-outline/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
              Need Help With Another Vehicle?
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              We also help with other recovery needs in Sheffield, including{' '}
              <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                breakdown recovery in Sheffield
              </Link>
              {' '}and{' '}
              <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car towing in Sheffield
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
              <a
                href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20help%20with%20motorcycle%20recovery%20please."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-surface-container-high border border-outline/20 text-on-surface py-4 px-6 font-bold text-sm tracking-tight rounded active:scale-95 transition-all hover:border-primary min-h-[48px]"
              >
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">two_wheeler</span>
                Motorcycle Recovery
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-14 bg-primary px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>directions_car</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Need Car Recovery in Sheffield?
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-8 leading-relaxed">
              Tell us where your car is and where it needs to go. We will check availability and help you plan the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:07799180009"
                className="flex items-center justify-center gap-2 bg-on-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px] hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                Call Now
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
