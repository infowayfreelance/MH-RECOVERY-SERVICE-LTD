import type { Metadata } from 'next'
import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Breakdown Recovery Sheffield 24/7 | MH Recovery Service',
  description:
    'Broken down in Sheffield? MH Recovery Service Ltd recovers cars and vans from roads, car parks and driveways across South Yorkshire. Call 07799 180009.',
  alternates: {
    canonical: '/services/breakdown-recovery-sheffield',
  },
  openGraph: {
    title: 'Breakdown Recovery Sheffield 24/7 | MH Recovery Service',
    description:
      'Broken down in Sheffield? MH Recovery Service Ltd recovers cars and vans from roads, car parks and driveways across South Yorkshire. Call 07799 180009.',
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
    title: 'Breakdown Recovery Sheffield 24/7 | MH Recovery Service',
    description:
      'Broken down in Sheffield? MH Recovery Service Ltd recovers cars and vans from roads, car parks and driveways across South Yorkshire. Call 07799 180009.',
    images: [OG_IMAGE],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mhrecoveryserviceltd.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://mhrecoveryserviceltd.co.uk/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Breakdown Recovery Sheffield",
          "item": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield#service",
      "name": "Breakdown Recovery Sheffield",
      "serviceType": "Breakdown recovery",
      "url": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield",
      "description": "Breakdown recovery in Sheffield and South Yorkshire. MH Recovery Service Ltd collects broken-down cars and vans from roads, car parks and driveways and transports them to a garage or agreed address.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Sheffield"
        },
        {
          "@type": "City",
          "name": "Rotherham"
        },
        {
          "@type": "City",
          "name": "Barnsley"
        },
        {
          "@type": "City",
          "name": "Doncaster"
        },
        {
          "@type": "AdministrativeArea",
          "name": "South Yorkshire"
        }
      ],
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "MH Recovery Service Ltd",
        "url": "https://mhrecoveryserviceltd.co.uk",
        "telephone": "+447799180009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Coupe Road",
          "addressLocality": "Sheffield",
          "postalCode": "S3 9DP",
          "addressCountry": "GB"
        },
        "areaServed": "Sheffield",
        "openingHours": "Mo-Su 00:00-23:59"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is breakdown recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Breakdown recovery is the process of collecting a vehicle that cannot be driven and transporting it to a garage or another agreed location. We use a flatbed truck or suitable recovery equipment depending on the vehicle and its condition."
          }
        },
        {
          "@type": "Question",
          "name": "How much does breakdown recovery in Sheffield cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on your location, the vehicle's condition and where it needs to go. Contact us with these details and we will give you a quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover South Yorkshire as well as Sheffield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover Sheffield and South Yorkshire. If your vehicle is outside this area, contact us to check whether we can help."
          }
        },
        {
          "@type": "Question",
          "name": "My vehicle will not start — can you recover it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tell us where the vehicle is and what has happened. If it cannot be driven, we can arrange to collect it and take it to a garage. For more advice, see our guide on recovering a car without keys."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover a vehicle after an accident?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your vehicle has been damaged and cannot be driven, tell us about its condition and location. We will check whether our equipment is right for the job before we agree to collect it. See our dedicated accident recovery in Sheffield page for more details."
          }
        },
        {
          "@type": "Question",
          "name": "What information do I need when I call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Have your location or postcode ready, along with your vehicle make and model, a description of the problem and the address you want the vehicle taken to. Tell us if the vehicle cannot roll or has any access problems. Send us a message if you prefer to share these details in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need breakdown cover to use your service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can call us directly without breakdown cover or a membership. We'll give you a quote for the job before you agree, based on where the vehicle is, its condition and where it needs to go."
          }
        },
        {
          "@type": "Question",
          "name": "I've broken down on the M1 near Sheffield. What should I do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Get off the carriageway if you can, ideally at the next exit or into an emergency area. Switch on your hazard lights, get out on the side away from traffic if it's safe and wait behind the barrier. If you're stuck in a live lane or can't get out safely, stay in the vehicle with your seat belt on and call 999. Then call us on 07799 180009 with the junction number or the nearest marker post."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover my car from a car park or driveway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Tell us the car park name, the entrance and level, or the driveway access, and whether the car rolls and steers. We'll check access before we set off and tell you how we'll move it."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover Rotherham, Barnsley and Doncaster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're based on Coupe Road in Sheffield and regularly work in Rotherham, Barnsley and Doncaster as well as across Sheffield. Call 07799 180009 with your postcode and we'll confirm."
          }
        }
      ]
    }
  ]
}

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What is breakdown recovery?',
    a: 'Breakdown recovery is the process of collecting a vehicle that cannot be driven and transporting it to a garage or another agreed location. We use a flatbed truck or suitable recovery equipment depending on the vehicle and its condition.',
  },
  {
    q: 'How much does breakdown recovery in Sheffield cost?',
    a: (
      <>
        The cost depends on your location, the vehicle&apos;s condition and where it needs to go.{' '}
        <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          Contact us
        </Link>{' '}
        with these details and we will give you a quote.
      </>
    ),
  },
  {
    q: 'Do you cover South Yorkshire as well as Sheffield?',
    a: (
      <>
        We cover Sheffield and South Yorkshire. If your vehicle is outside this area,{' '}
        <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          contact us
        </Link>{' '}
        to check whether we can help.
      </>
    ),
  },
  {
    q: 'My vehicle will not start — can you recover it?',
    a: (
      <>
        Yes. Tell us where the vehicle is and what has happened. If it cannot be driven, we can arrange to collect it and take it to a garage. For more advice, see our guide on{' '}
        <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          recovering a car without keys
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Can you recover a vehicle after an accident?',
    a: (
      <>
        If your vehicle has been damaged and cannot be driven, tell us about its condition and location. We will check whether our equipment is right for the job before we agree to collect it. See our dedicated{' '}
        <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          accident recovery in Sheffield
        </Link>{' '}
        page for more details.
      </>
    ),
  },
  {
    q: 'What information do I need when I call?',
    a: (
      <>
        Have your location or postcode ready, along with your vehicle make and model, a description of the problem and the address you want the vehicle taken to. Tell us if the vehicle cannot roll or has any access problems.{' '}
        <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          Send us a message
        </Link>{' '}
        if you prefer to share these details in writing.
      </>
    ),
  },
  {"q": "Do I need breakdown cover to use your service?", "a": "No. You can call us directly without breakdown cover or a membership. We'll give you a quote for the job before you agree, based on where the vehicle is, its condition and where it needs to go."},
  {"q": "I've broken down on the M1 near Sheffield. What should I do?", "a": "Get off the carriageway if you can, ideally at the next exit or into an emergency area. Switch on your hazard lights, get out on the side away from traffic if it's safe and wait behind the barrier. If you're stuck in a live lane or can't get out safely, stay in the vehicle with your seat belt on and call 999. Then call us on 07799 180009 with the junction number or the nearest marker post."},
  {"q": "Can you recover my car from a car park or driveway?", "a": "Often, yes. Tell us the car park name, the entrance and level, or the driveway access, and whether the car rolls and steers. We'll check access before we set off and tell you how we'll move it."},
  {"q": "Do you cover Rotherham, Barnsley and Doncaster?", "a": "We're based on Coupe Road in Sheffield and regularly work in Rotherham, Barnsley and Doncaster as well as across Sheffield. Call 07799 180009 with your postcode and we'll confirm."},
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
    desc: (
      <>
        A <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">flat battery</Link>, fuel problem or mechanical fault can leave you stranded at home or in a car park. We can recover the vehicle if it cannot be driven. If you have <Link href="/services/lost-car-keys-help-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">lost your car keys</Link> or been locked out, we can help with that too.
      </>
    ),
  },
  {
    icon: 'build',
    title: 'Needs to Reach a Garage',
    desc: (
      <>
        If your vehicle cannot be driven to a garage for repairs, our <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing service</Link> can collect it and take it to the mechanic you have chosen.
      </>
    ),
  },
  {
    icon: 'warning',
    title: 'Damaged After an Accident',
    desc: (
      <>
        A vehicle damaged in an accident may not be safe to drive. Tell us the condition and location and we will check if we can help. Our <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">accident recovery service</Link> handles vehicles that cannot be driven after a collision.
      </>
    ),
  },
]

export default function BreakdownRecoverySheffield() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[320px] md:min-h-[500px] flex items-center pt-24 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Recovery truck attending a broken-down car in Sheffield"
              className="object-cover"
              src="/breakdown-recovery-sheffield-night.webp"
              fill
              priority
              sizes="100vw"
              quality={50}
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

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Broken Down in Sheffield? What to Do First
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <ol className="flex flex-col gap-4">
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">1</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Get somewhere safe.</strong> If the car still moves, pull off the road or into a car park or lay-by.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">2</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Hazard lights on.</strong> At night, keep your sidelights on too.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">3</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Get out on the side away from traffic</strong> if it's safe, and wait behind a barrier or well back from the road.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">4</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">If anyone is hurt, or you're stuck in a live lane, call 999 first.</strong> </p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">5</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Call us on 07799 180009</strong> with your postcode, street name, or the road and nearest junction, plus your vehicle details.</p>
                </li>
              </ol>
              <p>Based on the <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code breakdown rules</a>.</p>
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
                We use a <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">flatbed recovery truck</Link> or appropriate equipment to transport your vehicle without putting further strain on it. Tell us your location, the vehicle type and what has happened and we will check whether we can help.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                We serve Sheffield and the surrounding South Yorkshire area. If you are not sure whether we cover your location, <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact us</Link> and we will check.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="Broken-down car loaded onto a flatbed recovery truck"
                className="object-cover"
                src="/breakdown-recovery-van-loaded.webp"
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

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Common Reasons Cars Break Down
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Flat or failing battery:</strong> often after cold nights or short trips. Try a <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">jump start</Link> first; if the car still won't run, we can recover it.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Starter motor, clutch or gearbox problems:</strong> the car won't turn over, won't go into gear or won't drive. These usually need a garage, so we take it there.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Overheating:</strong> if the temperature warning comes on, stop when it's safe and switch off. Don't keep driving.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Tyre damage:</strong> a puncture or blowout. See <Link href="/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">tyre damage assistance</Link>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Fuel problems:</strong> running out, or putting the wrong fuel in. Don't start the engine if you've misfuelled.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Warning lights and limp mode:</strong> if the car won't drive normally, it's safer to recover it than to push on.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Broken Down on the M1 or Sheffield Parkway
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>On the M1 around Sheffield (junctions 33 to 36), the Sheffield Parkway or a fast dual carriageway, try to leave at the next exit or stop in an emergency area. Switch on your hazard lights, get out on the side away from traffic if it's safe, and wait behind the barrier. Don't put out a warning triangle on a motorway. If you're stuck in a live lane or can't get out safely, stay in the vehicle with your seat belt on and call 999. Then call us with the junction number, the direction you were travelling, or the number on the nearest marker post, so we can find you.</p>
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
                We&apos;re a local Sheffield business and we answer the phone day and night. <Link href="/about" className="text-primary font-semibold hover:opacity-80 transition-opacity">Find out more about MH Recovery Service Ltd</Link>.
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
                <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                  Contact us
                </Link>{' '}
                or <a href="tel:+447799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">call us</a> and explain what help you need.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="Recovery truck attending a broken-down car in Sheffield"
                className="object-cover"
                src="/breakdown-recovery-roadside.webp"
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
              We recover broken-down cars and vans across Sheffield, including the city centre, Hillsborough, Crookes, Meadowhall, Attercliffe, Darnall, Handsworth, Heeley, Woodseats and Ecclesall, and the S1, S2 and S3 postcodes. On the roads, we cover the M1, the A61, the A57 and the Sheffield Parkway. We're based on Coupe Road, Sheffield S3 9DP, and regularly work in Rotherham, Barnsley and Doncaster.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              When you call, share your exact location or postcode and we'll check whether we can reach you. If your vehicle is outside this area, <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact us</Link> and we'll let you know whether we can help. For longer journeys, see our <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long distance recovery from Sheffield</Link>.
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
              ,{' '}
              <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car towing in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                jump starts in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                accident recovery in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                tyre damage assistance in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/lost-car-keys-help-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                lost car keys help in Sheffield
              </Link>
              {' '}and{' '}
              <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                long distance recovery from Sheffield
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
