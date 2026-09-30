import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Breakdown Recovery Sheffield | 24/7 Car Towing',
  description:
    '24/7 breakdown recovery in Sheffield & South Yorkshire. Flatbed recovery to your garage or home. Call MH Recovery Service Ltd for a clear quote.',
  alternates: {
    canonical: '/services/breakdown-recovery-sheffield',
  },
  openGraph: {
    title: 'Breakdown Recovery Sheffield | 24/7 Car Towing',
    description:
      '24/7 breakdown recovery in Sheffield & South Yorkshire. Flatbed recovery to your garage or home. Call MH Recovery Service Ltd for a clear quote.',
    url: `${SITE_URL}/services/breakdown-recovery-sheffield`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Breakdown Recovery Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breakdown Recovery Sheffield | 24/7 Car Towing',
    description:
      '24/7 breakdown recovery in Sheffield & South Yorkshire. Flatbed recovery to your garage or home. Call MH Recovery Service Ltd for a clear quote.',
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
      name: 'Breakdown Recovery Sheffield',
      item: `${SITE_URL}/services/breakdown-recovery-sheffield`,
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Breakdown Recovery Sheffield',
  serviceType: 'Breakdown recovery',
  description:
    '24/7 breakdown recovery in Sheffield and South Yorkshire. MH Recovery Service Ltd collects broken-down vehicles and transports them to a garage or agreed location.',
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
  url: `${SITE_URL}/services/breakdown-recovery-sheffield`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is breakdown recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Breakdown recovery is the process of collecting a vehicle that cannot be driven and transporting it to a garage or another agreed location. We use a flatbed truck or suitable recovery equipment depending on the vehicle and its condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does breakdown recovery in Sheffield cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost depends on your location, the vehicle\'s condition and where it needs to go. Call us or send a message with these details and we will give you a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover South Yorkshire as well as Sheffield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover Sheffield and South Yorkshire. If your vehicle is outside this area, contact us to check whether we can help.',
      },
    },
    {
      '@type': 'Question',
      name: 'My vehicle will not start — can you recover it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tell us where the vehicle is and what has happened. If it cannot be driven, we can arrange to collect it and take it to a garage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you recover a vehicle after an accident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your vehicle has been damaged and cannot be driven, tell us about its condition and location. We will check whether our equipment is right for the job before we agree to collect it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do I need when I call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Have your location or postcode ready, along with your vehicle make and model, a description of the problem and the address you want the vehicle taken to. Tell us if the vehicle cannot roll or has any access problems.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is breakdown recovery?',
    a: 'Breakdown recovery is the process of collecting a vehicle that cannot be driven and transporting it to a garage or another agreed location. We use a flatbed truck or suitable recovery equipment depending on the vehicle and its condition.',
  },
  {
    q: 'How much does breakdown recovery in Sheffield cost?',
    a: "The cost depends on your location, the vehicle's condition and where it needs to go. Call us or send a message with these details and we will give you a quote.",
  },
  {
    q: 'Do you cover South Yorkshire as well as Sheffield?',
    a: 'We cover Sheffield and South Yorkshire. If your vehicle is outside this area, contact us to check whether we can help.',
  },
  {
    q: 'My vehicle will not start — can you recover it?',
    a: 'Yes. Tell us where the vehicle is and what has happened. If it cannot be driven, we can arrange to collect it and take it to a garage.',
  },
  {
    q: 'Can you recover a vehicle after an accident?',
    a: 'If your vehicle has been damaged and cannot be driven, tell us about its condition and location. We will check whether our equipment is right for the job before we agree to collect it.',
  },
  {
    q: 'What information do I need when I call?',
    a: 'Have your location or postcode ready, along with your vehicle make and model, a description of the problem and the address you want the vehicle taken to. Tell us if the vehicle cannot roll or has any access problems.',
  },
]

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call or Message Us',
    desc: 'Tell us your location, vehicle details and what has happened.',
  },
  {
    num: '2',
    icon: 'request_quote',
    title: 'Get a Quote',
    desc: 'We will check the job details and give you a clear quote before you agree.',
  },
  {
    num: '3',
    icon: 'rv_hookup',
    title: 'We Collect Your Vehicle',
    desc: 'Our driver comes to your location and loads the vehicle safely onto the recovery truck.',
  },
  {
    num: '4',
    icon: 'local_shipping',
    title: 'Delivered to Your Destination',
    desc: 'Your vehicle is taken to the garage or address you have chosen.',
  },
]

const situations = [
  {
    icon: 'car_crash',
    title: 'Vehicle Broken Down on the Road',
    desc: 'If your car or van stops working while you are driving, pull over safely and call us. We will arrange recovery from your location.',
  },
  {
    icon: 'no_crash',
    title: 'Vehicle Will Not Start',
    desc: 'A flat battery, fuel problem or mechanical fault can leave you stranded at home or in a car park. We can recover the vehicle if it cannot be driven.',
  },
  {
    icon: 'build',
    title: 'Needs to Reach a Garage',
    desc: 'If your vehicle cannot be driven to a garage for repairs, we can collect it and take it to the mechanic you have chosen.',
  },
  {
    icon: 'warning',
    title: 'Damaged After an Accident',
    desc: 'A vehicle damaged in an accident may not be safe to drive. Tell us the condition and location and we will check if we can help.',
  },
]

export default function BreakdownRecoverySheffield() {
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
              alt="Recovery truck attending a broken-down car in Sheffield"
              className="object-cover"
              src="/breakdown-recovery-sheffield.jpg"
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
                <li className="text-primary font-medium" aria-current="page">Breakdown Recovery Sheffield</li>
              </ol>
            </nav>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Breakdown Recovery <span className="text-primary">in Sheffield</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-xl leading-relaxed font-sans">
                Vehicle broken down and cannot be driven? MH Recovery Service Ltd provides breakdown recovery across Sheffield and South Yorkshire. Call us with your location and we will arrange to collect your vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+447799180009"
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
                When Your Vehicle <span className="text-primary">Cannot Be Driven</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                A breakdown can happen anywhere — on a main road, in a car park or on your driveway. When your vehicle stops working and cannot be driven safely, we can arrange to collect it and take it where you need it to go.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                We use a flatbed recovery truck or appropriate equipment to transport your vehicle without putting further strain on it. Tell us your location, the vehicle type and what has happened and we will check whether we can help.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                We serve Sheffield and the surrounding South Yorkshire area. If you are not sure whether we cover your location, call us and we will check.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="Broken-down car loaded onto a flatbed recovery truck"
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
                What Our Breakdown Recovery Service Includes
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: 'location_on', text: 'Collection from your breakdown location.' },
                { icon: 'rv_hookup', text: 'Safe loading using flatbed or appropriate recovery equipment.' },
                { icon: 'local_shipping', text: 'Transport to your chosen garage or address.' },
                { icon: 'garage', text: 'Delivery to a mechanic or repair workshop.' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 bg-surface-container-high p-5 rounded-xl border border-outline/20">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
                  <p className="text-on-surface text-sm font-sans leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-on-surface-variant text-sm font-sans text-center mt-6 max-w-2xl mx-auto">
              If your vehicle has locked wheels, bodywork damage or any other complication, tell us when you call. These details help us choose the right equipment and plan the collection safely.
            </p>
          </div>
        </section>

        {/* Common Situations */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                When You May Need Breakdown Recovery
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
                If anyone is injured or in immediate danger, call <strong className="text-on-surface">999</strong> before calling us.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How Our Breakdown Recovery Works
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
                We&apos;re a local Sheffield business and we answer the phone day and night.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: 'schedule', title: 'Available 24/7', desc: 'You can call us any time, including nights and weekends.' },
                  { icon: 'request_quote', title: 'Quote before you agree', desc: 'We tell you the cost before the job starts.' },
                  { icon: 'location_on', title: 'Local to Sheffield', desc: 'We know the area and cover Sheffield and South Yorkshire.' },
                  { icon: 'checklist', title: 'Clear process', desc: 'We explain each step so you know what to expect.' },
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
                <a href="tel:+447799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                  Call us
                </a>{' '}
                and explain what help you need.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="Recovery truck attending a broken-down car in Sheffield"
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
              Breakdown Recovery Across Sheffield and South Yorkshire
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              We provide breakdown recovery throughout Sheffield and the wider South Yorkshire area. When you call, share your exact location or postcode and we will check whether we can reach you.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              If your vehicle is outside this area, contact us and we will let you know whether we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+447799180009"
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
                Breakdown Recovery Sheffield FAQs
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
              Other Recovery Services in Sheffield
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              We also offer{' '}
              <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car recovery in Sheffield
              </Link>
              {' '}and other recovery services across the area.
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
                href="/services/car-recovery-sheffield"
                className="flex items-center justify-center gap-2 bg-surface-container-high border border-outline/20 text-on-surface py-4 px-6 font-bold text-sm tracking-tight rounded active:scale-95 transition-all hover:border-primary min-h-[48px]"
              >
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">directions_car</span>
                Car Recovery Sheffield
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
              Need Breakdown Recovery in Sheffield?
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-4 leading-relaxed">
              Call us now and tell us where you are and what has happened. We will give you a clear quote and explain the next steps.
            </p>
            <p className="text-on-primary/80 text-sm font-sans mb-8">
              Coupe Road, Sheffield, S3 9DP
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+447799180009"
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
