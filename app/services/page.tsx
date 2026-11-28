import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'
import { liveServices } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: "Recovery Services Sheffield | MH Recovery Service Ltd",
  description: "24/7 car recovery, breakdown, towing, jump starts, tyre help, lost keys and accident recovery in Sheffield. Call MH Recovery Service Ltd: 07799 180009.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Recovery Services Sheffield | MH Recovery Service Ltd",
    description: "24/7 car recovery, breakdown, towing, jump starts, tyre help, lost keys and accident recovery in Sheffield. Call MH Recovery Service Ltd: 07799 180009.",
    url: `${SITE_URL}/services`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Recovery Services Sheffield',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Recovery Services Sheffield | MH Recovery Service Ltd",
    description: "24/7 car recovery, breakdown, towing, jump starts, tyre help, lost keys and accident recovery in Sheffield. Call MH Recovery Service Ltd: 07799 180009.",
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    "q": "What recovery services do you offer?",
    "a": "We offer car recovery, breakdown recovery, car towing, jump starts, tyre damage assistance, lost car keys help, accident recovery and long distance recovery. Call us to discuss the help you need."
  },
  {
    "q": "Are you available 24/7?",
    "a": "Yes, our phone line is open 24 hours a day, 7 days a week, including nights, weekends and bank holidays."
  },
  {
    "q": "Which areas do you cover?",
    "a": "We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage."
  },
  {
    "q": "How much does recovery cost?",
    "a": "The price depends on the distance, the vehicle, its condition and the time of day. We give you a quote before you agree to the job."
  },
  {
    "q": "How soon can you reach me?",
    "a": "We give you an estimated arrival time when you call. It depends on your location and how busy we are."
  },
  {
    "q": "What details do you need?",
    "a": "We need your exact location, your vehicle's make and model, a short description of the problem and where it needs to go."
  },
  {
    "q": "Which service do I need if I am not sure?",
    "a": "Call 07799 180009 and tell us what happened. As a guide: if the car will not start, see jump starts; if it has stopped on the road, breakdown recovery; if it needs moving to a garage or home, car recovery or vehicle towing; after a collision, accident recovery. We will help you work out which fits."
  },
  {
    "q": "What should I do first if I break down on a Sheffield road?",
    "a": "Get yourself and your passengers to a place of relative safety if you can, switch on your hazard lights and keep away from moving traffic. The Highway Code's breakdown and incident rules explain the steps. Once you are safe, call us on 07799 180009 with your location."
  },
  {
    "q": "Why do you ask whether the vehicle rolls and steers?",
    "a": "These details affect how the vehicle can be loaded. A car that cannot roll or steer may need different equipment, so tell us before we arrive."
  },
  {
    "q": "Can you help if my car is in a car park?",
    "a": "Often, yes. Tell us which car park and where the car is parked, and about any barrier heights or tight spaces. Our guide to car park recovery in Sheffield explains what to expect."
  },
  {
    "q": "Can you recover my car if I have lost the keys?",
    "a": "Tell us when you call. Lost keys can change how a car is loaded, and our lost car keys help page and the guide on recovering a car without keys explain more."
  },
  {
    "q": "Can you recover a motorcycle?",
    "a": "We also offer motorcycle recovery for bikes that cannot be ridden. Tell us the make and model and whether the bike starts, rolls and steers when you call."
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/services#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://mhrecoveryserviceltd.co.uk/services#page",
  "name": "Recovery Services in Sheffield",
  "url": "https://mhrecoveryserviceltd.co.uk/services",
  "description": "Car recovery, breakdown recovery, towing, jump starts, tyre damage assistance, lost car keys help, accident recovery and long distance recovery in Sheffield and South Yorkshire from MH Recovery Service Ltd.",
  "about": {
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
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Car Recovery",
        "url": "https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Breakdown Recovery",
        "url": "https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Vehicle Towing",
        "url": "https://mhrecoveryserviceltd.co.uk/services/car-towing-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Jump Starts",
        "url": "https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Tyre Damage Assistance",
        "url": "https://mhrecoveryserviceltd.co.uk/services/tyre-damage-assistance-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Lost Car Keys Help",
        "url": "https://mhrecoveryserviceltd.co.uk/services/lost-car-keys-help-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Accident Recovery",
        "url": "https://mhrecoveryserviceltd.co.uk/services/accident-recovery-sheffield"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Long Distance Recovery",
        "url": "https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield"
      }
    ]
  }
}

const faqAnswers = [
  <>We offer car recovery, breakdown recovery, car towing, jump starts, tyre damage assistance, lost car keys help, accident recovery and long distance recovery. Call us to discuss the help you need.</>,
  <>Yes, our phone line is open 24 hours a day, 7 days a week, including nights, weekends and bank holidays.</>,
  <>We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.</>,
  <>The price depends on the distance, the vehicle, its condition and the time of day. We give you a quote before you agree to the job.</>,
  <>We give you an estimated arrival time when you call. It depends on your location and how busy we are.</>,
  <>We need your exact location, your vehicle&apos;s make and model, a short description of the problem and where it needs to go.</>,
  <>Call 07799 180009 and tell us what happened. As a guide: if the car will not start, see <Link href="/services/jump-starts-sheffield" className="text-primary underline">jump starts</Link>; if it has stopped on the road, <Link href="/services/breakdown-recovery-sheffield" className="text-primary underline">breakdown recovery</Link>; if it needs moving to a garage or home, <Link href="/services/car-recovery-sheffield" className="text-primary underline">car recovery</Link> or <Link href="/services/car-towing-sheffield" className="text-primary underline">vehicle towing</Link>; after a collision, <Link href="/services/accident-recovery-sheffield" className="text-primary underline">accident recovery</Link>. We will help you work out which fits.</>,
  <>Get yourself and your passengers to a place of relative safety if you can, switch on your hazard lights and keep away from moving traffic. The Highway Code&apos;s <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="text-primary underline">breakdown and incident rules</a> explain the steps. Once you are safe, call us on 07799 180009 with your location.</>,
  <>These details affect how the vehicle can be loaded. A car that cannot roll or steer may need different equipment, so tell us before we arrive.</>,
  <>Often, yes. Tell us which car park and where the car is parked, and about any barrier heights or tight spaces. Our guide to <Link href="/blog/car-park-recovery-sheffield" className="text-primary underline">car park recovery in Sheffield</Link> explains what to expect.</>,
  <>Tell us when you call. Lost keys can change how a car is loaded, and our <Link href="/services/lost-car-keys-help-sheffield" className="text-primary underline">lost car keys help</Link> page and the guide on <Link href="/blog/car-recovery-without-keys" className="text-primary underline">recovering a car without keys</Link> explain more.</>,
  <>We also offer motorcycle recovery for bikes that cannot be ridden. Tell us the make and model and whether the bike starts, rolls and steers when you call.</>
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call Us',
    desc: 'Tell us your exact location, vehicle details, and what has happened. Share the drop-off address if you already know where the vehicle needs to go.',
  },
  {
    num: '2',
    icon: 'mms',
    title: 'Arrange Help',
    desc: 'We will discuss the help needed, availability, and price. You can also ask for an estimated arrival time.',
  },
  {
    num: '3',
    icon: 'local_shipping',
    title: 'Move Your Vehicle',
    desc: 'We will arrange to load and secure your vehicle for transport. It will then be taken to the place agreed with you.',
  },
]


export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[420px] md:min-h-[600px] flex items-center pt-24 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="MH Recovery Service Ltd flatbed recovery truck in Sheffield"
              className="object-cover"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20image-TDUJ1HnPhVR1WhekWwkpOOOSw5v25V.jpeg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <span className="inline-block bg-primary-container text-white text-[0.6rem] font-bold tracking-widest px-3 py-1 mb-4 uppercase border border-primary/30">
                Available 24/7
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Vehicle Recovery <span className="text-primary">Services</span> in Sheffield
              </h1>
              <p className="text-on-surface-variant text-sm md:text-base mb-2">Car broken down or bike stopped working?</p>
              <p className="text-on-surface-variant text-sm md:text-base mb-2">Tell us where you are and what has happened.</p>
              <p className="text-on-surface-variant text-sm md:text-base mb-8">Get help day or night.</p>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl leading-relaxed font-sans">
                MH Recovery Service Ltd offers vehicle recovery services in Sheffield. We help when your car breaks down, needs towing, or will not start. We also offer motorcycle recovery for bikes that cannot be ridden.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+447799180009"
                  className="flex items-center justify-center bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
                >
                  Call for Help
                </a>
                <a
                  href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20help%20please."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 font-extrabold text-base tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded min-h-[52px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-on-surface">Our Recovery Services</h2>
              <div className="h-1 w-16 bg-primary mb-4 mx-auto" />
              <p className="text-on-surface-variant text-base md:text-lg font-sans max-w-2xl leading-relaxed mx-auto">
                From a flat battery to a vehicle that needs moving, we help with common problems on the road. Choose a service below, or call us if you are unsure what help you need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {liveServices.map((service) => (
                <div key={service.slug} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col">
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">{service.icon}</span>
                      <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-on-surface">{service.name}</h3>
                    </div>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed mb-5 flex-1">{service.summary}</p>
                    <Link
                      href={service.route}
                      className="text-primary text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity mb-3 flex items-center gap-1"
                    >
                      Learn more
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                    </Link>
                    <a
                      href="tel:+447799180009"
                      className="flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:opacity-90 min-h-[48px]"
                      aria-label={`Call us about ${service.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">Which Recovery Service Do You Need?</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">Not sure which service fits? Match what has happened to the page below, or call 07799 180009 and we&apos;ll help you work it out.</p>
            <ul className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              <li><strong>The car won&apos;t start or has a flat battery:</strong> <Link href="/services/jump-starts-sheffield" className="text-primary underline">jump starts</Link>.</li>
              <li><strong>The car has stopped working on the road:</strong> <Link href="/services/breakdown-recovery-sheffield" className="text-primary underline">breakdown recovery</Link>.</li>
              <li><strong>The car can&apos;t be driven and needs moving to a garage, home or another agreed place:</strong> <Link href="/services/car-recovery-sheffield" className="text-primary underline">car recovery</Link>.</li>
              <li><strong>You need a car taken from one place to another:</strong> <Link href="/services/car-towing-sheffield" className="text-primary underline">vehicle towing</Link>.</li>
              <li><strong>You have a flat or damaged tyre and no spare or tools:</strong> <Link href="/services/tyre-damage-assistance-sheffield" className="text-primary underline">tyre damage assistance</Link>.</li>
              <li><strong>You are locked out or have lost your keys:</strong> <Link href="/services/lost-car-keys-help-sheffield" className="text-primary underline">lost car keys help</Link>.</li>
              <li><strong>You have had a collision:</strong> <Link href="/services/accident-recovery-sheffield" className="text-primary underline">accident recovery</Link>.</li>
              <li><strong>The vehicle needs to go further afield:</strong> <Link href="/services/long-distance-recovery-sheffield" className="text-primary underline">long distance recovery</Link>.</li>
            </ul>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <Image
                alt="Recovery truck equipment"
                className="w-full aspect-square object-cover rounded-xl"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Breakdown-opt-y73ndhbUFt5iANdjovdSfsAThW78ws.webp"
                width={800}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-tight text-on-surface">
                Our Recovery <span className="text-primary">Equipment</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans mb-4 leading-relaxed">
                The right equipment helps us load and move your vehicle. When you call, let us know if it has low ground clearance, damaged wheels, or any other loading problems.
              </p>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                These details help us plan the recovery. Please also tell us if the vehicle cannot roll or steer.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How It Works
              </h2>
              <div className="h-1 w-12 md:w-16 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step) => (
                <div key={step.num} className="relative text-center">
                  <div className="text-[80px] md:text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none select-none" aria-hidden="true">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8 relative z-10 border border-primary/20">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary" aria-hidden="true">{step.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase mb-3 text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm px-2 md:px-4 leading-relaxed font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">What Happens When You Call</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">We will ask where you are, what the vehicle is and what has happened, and where it needs to go. We will ask whether the vehicle starts, rolls and steers, because that affects how it is loaded. We will then discuss the help needed, availability and price, and you can ask for an estimated arrival time. You agree the job before we start. If you are still choosing a garage, tell us and we can talk it through while you decide.</p>
          </div>
        </section>

        {/* Sheffield Coverage */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              Sheffield Coverage
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">
              We help drivers who need local recovery in Sheffield. Give us your postcode, road name, or a nearby landmark so we can find your location.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              If you are outside Sheffield, call to check coverage. Tell us both the pickup and drop-off locations before arranging the job. For breakdowns on the M1 around Sheffield, see our guide to <Link href="/blog/broken-down-on-the-m1-near-sheffield" className="text-primary underline">what to do on the M1 near Sheffield</Link>.
            </p>
          </div>
        </section>

        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">Telling Us Where You Are in Sheffield</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">Sheffield has steep hills, narrow terraced streets and busy main roads, so a precise location helps. Give us your postcode, the road name or a nearby landmark. If you are on the M1, tell us your direction of travel and the nearest junction number or marker post. If you are stopped on a main road, say which one and which way you were heading. If you are in a car park, tell us which one and which level. If you are somewhere dangerous, move to a place of relative safety first if you can; the Highway Code&apos;s <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="text-primary underline">breakdown and incident rules</a> explain how. For guides to specific places, see <Link href="/blog/broken-down-on-the-m1-near-sheffield" className="text-primary underline">broken down on the M1 near Sheffield</Link> and <Link href="/blog/broken-down-on-the-snake-pass-a57" className="text-primary underline">broken down on the Snake Pass (A57)</Link>.</p>
          </div>
        </section>

        {/* Before You Call */}
        <section className="bg-surface-container py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              Before You Call
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">
              Have your vehicle make, model, and registration ready if you can. Tell us whether it starts, rolls, and steers, as these details can affect how it is loaded.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              If you are still choosing a garage, let us know. We can discuss the recovery while you confirm where the vehicle should go. If you want to know what to expect when your car is towed to a garage, read <Link href="/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary underline">how to get your car towed to a garage in Sheffield</Link>.
            </p>
          </div>
        </section>

        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">Sheffield Driver Guides</h2>
            <ul className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              <li><Link href="/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary underline">How to get your car towed to a garage in Sheffield</Link>: what to sort with the garage first and what to tell the recovery driver.</li>
              <li><Link href="/blog/car-park-recovery-sheffield" className="text-primary underline">Car park recovery in Sheffield</Link>: what to expect if your car breaks down in a car park or multi-storey.</li>
              <li><Link href="/blog/accident-recovery-sheffield" className="text-primary underline">Accident recovery in Sheffield</Link>: what to do next after a collision.</li>
              <li><Link href="/blog/jump-start-car-on-a-hill-sheffield" className="text-primary underline">Can you jump start a car on a hill?</Link>: when it&apos;s safe and when to call for help.</li>
              <li><Link href="/blog/leaving-a-broken-down-car-on-the-road-sheffield" className="text-primary underline">Can I leave a broken-down car on the road?</Link>: how long it can stay and how to move it.</li>
              <li><Link href="/blog/car-recovery-without-keys" className="text-primary underline">Can a car be recovered without keys?</Link> and <Link href="/blog/long-distance-car-recovery-cost-sheffield" className="text-primary underline">long-distance car recovery: what affects the cost</Link>.</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">
                Common <span className="text-primary">Questions</span>
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-outline">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                    <h3 className="flex-1">{faq.q}</h3>
                    <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">{faqAnswers[index]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-on-primary py-16 md:py-24 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none text-balance">
              Need Recovery Help?
            </h2>
            <p className="text-base md:text-lg font-sans mb-8 md:mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
              Call MH Recovery Service Ltd and tell us where your vehicle is. We will discuss the help you need, the price, and where it should be taken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447799180009"
                className="flex items-center justify-center bg-on-primary text-primary py-4 px-8 font-black text-lg tracking-tight active:scale-95 transition-transform rounded hover:opacity-90"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20help%20please."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 font-black text-lg tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

