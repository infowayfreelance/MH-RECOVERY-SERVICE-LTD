import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Tyre Damage Assistance Sheffield | 24/7',
  description:
    'Tyre damage assistance Sheffield from MH Recovery Service Ltd. Serving Sheffield and South Yorkshire. Call our 24/7 phone line to discuss help.',
  alternates: {
    canonical: '/services/tyre-damage-assistance-sheffield',
  },
  openGraph: {
    title: 'Tyre Damage Assistance Sheffield | 24/7',
    description:
      'Tyre damage assistance Sheffield from MH Recovery Service Ltd. Serving Sheffield and South Yorkshire. Call our 24/7 phone line to discuss help.',
    url: `${SITE_URL}/services/tyre-damage-assistance-sheffield`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Tyre Damage Assistance Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Damage Assistance Sheffield | 24/7',
    description:
      'Tyre damage assistance Sheffield from MH Recovery Service Ltd. Serving Sheffield and South Yorkshire. Call our 24/7 phone line to discuss help.',
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
      name: 'Tyre Damage Assistance Sheffield',
      item: `${SITE_URL}/services/tyre-damage-assistance-sheffield`,
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tyre Damage Assistance Sheffield',
  serviceType: 'Tyre damage assistance',
  description:
    'Tyre damage assistance in Sheffield and South Yorkshire. MH Recovery Service Ltd provides spare wheel fitting and vehicle recovery when a tyre cannot be repaired roadside.',
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
  url: `${SITE_URL}/services/tyre-damage-assistance-sheffield`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you help with a flat tyre in Sheffield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide flat tyre assistance in Sheffield. Tell us your location and whether you have a usable spare wheel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fit my spare wheel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can fit a usable spare where there is safe working space. Mention whether you have the locking wheel nut key.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have no spare tyre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can recover your car to an agreed destination if you have no usable spare. Share the tyre centre or garage address when arranging collection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you repair or replace tyres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This page covers spare wheel assistance and recovery. Tell us if you need puncture repair or a new tyre so the service included in your quote is clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'What details should I give you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Give us your location, registration, vehicle model and which tyre is damaged. Also describe your spare wheel and any access restrictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I call for tyre help at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time on the call.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'Can you help with a flat tyre in Sheffield?',
    a: 'Yes, we provide flat tyre assistance in Sheffield. Tell us your location and whether you have a usable spare wheel.',
  },
  {
    q: 'Can you fit my spare wheel?',
    a: 'Yes, we can fit a usable spare where there is safe working space. Mention whether you have the locking wheel nut key.',
  },
  {
    q: 'What if I have no spare tyre?',
    a: 'We can recover your car to an agreed destination if you have no usable spare. Share the tyre centre or garage address when arranging collection.',
  },
  {
    q: 'Do you repair or replace tyres?',
    a: 'This page covers spare wheel assistance and recovery. Tell us if you need puncture repair or a new tyre so the service included in your quote is clear.',
  },
  {
    q: 'What details should I give you?',
    a: 'Give us your location, registration, vehicle model and which tyre is damaged. Also describe your spare wheel and any access restrictions.',
  },
  {
    q: 'Can I call for tyre help at night?',
    a: 'Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time on the call.',
  },
]

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call with Your Details',
    desc: 'Call with your location, vehicle details and tyre problem.',
  },
  {
    num: '2',
    icon: 'tire_repair',
    title: 'Describe Your Spare',
    desc: 'Tell us about your spare wheel and access around the car.',
  },
  {
    num: '3',
    icon: 'request_quote',
    title: 'Get a Quote',
    desc: 'We explain the proposed help, give you a quote and provide an estimated arrival time before you agree.',
  },
  {
    num: '4',
    icon: 'local_shipping',
    title: 'We Attend or Recover',
    desc: 'We attend for spare wheel assistance or collect and deliver the vehicle if recovery is needed.',
  },
]

export default function TyreDamageAssistanceSheffield() {
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
              alt="Roadside assistance vehicle attending a tyre damage call in Sheffield"
              className="object-cover"
              src="/roadside-assistance-sheffield.jpg"
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
                <li className="text-primary font-medium" aria-current="page">Tyre Damage Assistance Sheffield</li>
              </ol>
            </nav>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Tyre Damage Assistance <span className="text-primary">in Sheffield</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-xl leading-relaxed font-sans">
                {BUSINESS.name} provides tyre damage assistance in Sheffield for drivers stopped by a flat or damaged tyre. We are based on {BUSINESS.address.street}, and our phone line is open 24 hours a day, 7 days a week. Call {BUSINESS.phonePrimary} for a quote and an estimated arrival time before agreeing to the job.
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
                  href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20tyre%20damage%20assistance.`}
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

        {/* When a Damaged Tyre Stops Your Journey */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                When a Damaged Tyre <span className="text-primary">Stops Your Journey</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                You may find a flat tyre before leaving home, after parking at work or during a journey. The problem may follow a puncture, a kerb strike or hitting a pothole. Explain what happened and whether one tyre or several tyres are affected.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                Do not continue driving on a flat or visibly damaged tyre. Do not try to change a wheel beside moving traffic. Your position matters as much as the tyre problem, so tell us if the car is in a road, parking bay or driveway.
              </p>
              <div className="flex items-start gap-3 bg-surface-container-high border-l-4 border-primary p-4 rounded-r-xl mb-4">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">warning</span>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                  If anyone is hurt or in danger, call 999 first.
                </p>
              </div>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                If you are already parked safely, leave the vehicle where it is while you arrange help. You do not need to move it closer to a main road for collection.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="MH Recovery Service Ltd attending a roadside tyre assistance call in Sheffield"
                className="object-cover"
                src="/roadside-assistance-sheffield.jpg"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Spare Wheel Help or Vehicle Recovery */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Spare Wheel Help or Vehicle Recovery
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>
                We can fit your usable spare wheel where there is safe space to work. Tell us whether you have a full-size spare or a smaller temporary spare, and whether the locking wheel nut key is with the car.
              </p>
              <p>
                If a spare cannot be fitted, we can recover the vehicle to an agreed tyre centre, garage or address. Mention any visible wheel damage, more than one flat tyre or a spare that is also flat. These details help us plan the job.
              </p>
              <p>
                When calling, give your registration, make and model. Describe the affected wheel as front left, front right, rear left or rear right. Say whether the tyre has lost air slowly or became flat suddenly.
              </p>
              <p>
                You can send photos through WhatsApp if it is safe to take them. A photo should show the tyre and the space around the vehicle. Do not step into traffic or reach underneath the car to get a better view.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How It Works
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

        {/* Coverage */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
              Tyre Damage Assistance Across Sheffield
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              We serve Sheffield and South Yorkshire. Call from Hillsborough, Crookes, Ecclesall, Woodseats or Heeley, as well as the city centre, Meadowhall, Attercliffe, Handsworth and Darnall.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              Provide the street name and full postcode where possible, including addresses in S1, S2 and S3. In a large car park, share the entrance, parking level and a nearby shop or sign. Tell us about height limits, gates or tight spaces around the damaged wheel.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              If you are on or near the M1, A61 or Sheffield Parkway, give the road and direction of travel. Attendance at these road locations must be confirmed during the call. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.
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
              <p className="text-on-surface-variant text-base font-sans mb-6 leading-relaxed">
                {BUSINESS.name} is based in Sheffield, with a phone line open day and night. We explain the proposed job and give you a quote and an estimated arrival time before you agree.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: 'schedule', title: 'Available 24/7', desc: 'You can call us any time, including nights and weekends.' },
                  { icon: 'request_quote', title: 'Quote before you agree', desc: 'We tell you the cost and estimated arrival time before the job starts.' },
                  { icon: 'location_on', title: 'Local to Sheffield', desc: 'We know the area and cover Sheffield and South Yorkshire.' },
                  { icon: 'checklist', title: 'Clear process', desc: 'We explain what we plan to do before we come out.' },
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
                alt="MH Recovery Service Ltd vehicle recovery truck in Sheffield"
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
                Tyre Damage Assistance Sheffield FAQs
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
              See{' '}
              <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                breakdown recovery in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car recovery in Sheffield
              </Link>
              {' '}and{' '}
              <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                vehicle towing in Sheffield
              </Link>
              . Roadside assistance in Sheffield is also available — call us to discuss your needs.
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
                Breakdown Recovery Sheffield
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-14 bg-primary px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>tire_repair</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Call for Tyre Damage Assistance
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-2 leading-relaxed">
              Call {BUSINESS.phonePrimary} and tell us where you are, which tyre is affected and whether you have a spare.
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
                href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20tyre%20damage%20assistance.`}
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
