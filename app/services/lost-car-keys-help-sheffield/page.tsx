import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: "Lost Car Keys Sheffield | Entry & Recovery | MH Recovery",
  description:
    "Lost or locked-in car keys in Sheffield? MH Recovery Service Ltd helps with vehicle entry and recovery without keys. Phone line open 24/7: 07799 180009.",
  alternates: {
    canonical: '/services/lost-car-keys-help-sheffield',
  },
  openGraph: {
    title: "Lost Car Keys Sheffield | Entry & Recovery | MH Recovery",
    description:
    "Lost or locked-in car keys in Sheffield? MH Recovery Service Ltd helps with vehicle entry and recovery without keys. Phone line open 24/7: 07799 180009.",
    url: `${SITE_URL}/services/lost-car-keys-help-sheffield`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Lost Car Keys Help Sheffield 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lost Car Keys Sheffield | Entry & Recovery | MH Recovery",
    description:
    "Lost or locked-in car keys in Sheffield? MH Recovery Service Ltd helps with vehicle entry and recovery without keys. Phone line open 24/7: 07799 180009.",
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
      name: 'Lost Car Keys Help Sheffield',
      item: `${SITE_URL}/services/lost-car-keys-help-sheffield`,
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lost Car Keys Help Sheffield',
  serviceType: 'Lost car keys help',
  description:
    'Lost car keys help in Sheffield and South Yorkshire. MH Recovery Service Ltd provides vehicle entry assistance and recovery when needed.',
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
  url: `${SITE_URL}/services/lost-car-keys-help-sheffield`,
}

const faqs = [
  {
    "q": "Can you help if my keys are locked inside the car?",
    "a": "Yes, we provide vehicle entry assistance for locked-in keys. Call us with your location, vehicle make and model, and we will explain the next step."
  },
  {
    "q": "Can you recover my car if I have lost my keys completely?",
    "a": "Yes, we can arrange recovery without keys using a suitable collection method. Give us the vehicle location, registration and make and model on the call."
  },
  {
    "q": "What if my key fob has stopped working?",
    "a": "Call us and describe the problem. Tell us whether the physical key blade still turns the lock. We can discuss what assistance is possible based on your vehicle and situation."
  },
  {
    "q": "Can you cut or programme a new key for my car?",
    "a": "This page covers vehicle entry assistance and recovery. An auto locksmith or vehicle dealer can explain replacement key options."
  },
  {
    "q": "What details should I give when I call?",
    "a": "Give us your location, vehicle registration, make and model, and describe the key problem. Tell us whether the keys are inside the car, lost entirely or not working."
  },
  {
    "q": "Is the phone line open at night?",
    "a": "Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time on the call."
  },
  {
    "q": "What documents do I need if I've lost my car keys?",
    "a": "Auto locksmiths and dealers usually ask for proof that you own the vehicle, such as the V5C logbook, and photo ID before they make a new key. Before any entry or collection, we'll tell you on the call what we need to see."
  },
  {
    "q": "My keyless fob has stopped working. Does that mean the key is lost?",
    "a": "Not necessarily. Many keyless fobs have a hidden emergency key blade for the door, and some cars will start if you hold the fob against a marked spot near the steering column or start button. Check your handbook. If the car still won't open or start, call us and describe what happens."
  },
  {
    "q": "Can you take my car to a main dealer or an auto locksmith?",
    "a": "Yes. Where recovery is arranged, we collect the car and deliver it to the destination you agree on the call, such as a main dealer, an auto locksmith's premises or your home."
  },
  {
    "q": "Do you help with lost car keys in Rotherham, Barnsley or Doncaster?",
    "a": "Call us with the vehicle's location and we'll confirm whether we can cover it before you agree to anything."
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call with Your Details',
    desc: 'Phone us and explain the key problem, your vehicle details and its location.',
  },
  {
    num: '2',
    icon: 'key',
    title: 'Agree the Assistance',
    desc: 'We agree the type of assistance.',
  },
  {
    num: '3',
    icon: 'request_quote',
    title: 'Get a Quote',
    desc: 'We give you a quote and an estimated arrival time before you decide.',
  },
  {
    num: '4',
    icon: 'local_shipping',
    title: 'We Attend or Recover',
    desc: 'We attend for the agreed entry assistance or, where recovery is arranged, collect and deliver the car to the agreed destination.',
  },
]

export default function LostCarKeysHelpSheffield() {
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
              alt="MH Recovery Service Ltd vehicle attending a lost car keys call in Sheffield"
              className="object-cover"
              src="/lost-car-keys-sheffield-hero.webp"
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
                <li className="text-primary font-medium" aria-current="page">Lost Car Keys Help Sheffield</li>
              </ol>
            </nav>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Lost or Locked-In Car Keys <span className="text-primary">in Sheffield</span>
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg mb-6 max-w-xl leading-relaxed font-sans">
                {BUSINESS.name} provides lost car keys help in Sheffield, including vehicle entry assistance and recovery when needed. We are based on {BUSINESS.address.street}, and our phone line is open 24 hours a day, 7 days a week. Call {BUSINESS.phonePrimary} for a quote and an estimated arrival time before agreeing to the job.
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
                  href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20lost%20car%20keys%20help.`}
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

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Lost Your Car Keys in Sheffield? What to Do First
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <ol className="flex flex-col gap-4">
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">1</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Make sure you're safe.</strong> If the car is beside moving traffic, stand well away from the road. If anyone is hurt or in danger, call 999.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">2</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Check for a spare.</strong> If there's a spare key at home, someone bringing it to you is usually the quickest fix.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">3</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Check your cover.</strong> Some motor insurance and breakdown policies include key cover. It's worth checking before you pay for a replacement.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">4</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Think about security.</strong> If your keys were stolen, or were lost with something showing your address, report it to the police and ask the locksmith or dealer to remove the lost key from the car's system.</p>
                </li>
                <li className="relative flex items-start gap-3">
                  <span className="text-5xl font-black text-primary/20 leading-none select-none">5</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong className="text-on-surface">Decide what you need:</strong> getting into the car, a new key, or moving the car somewhere it can be dealt with. Then call us on 07799 180009 and we'll explain the options.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Lost Keys, Locked-In Keys or Non-Working Keys */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight text-on-surface">
                Lost Keys, Locked-In Keys <span className="text-primary">or Non-Working Keys</span>
              </h2>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                A key problem can take several forms. The key may be locked inside the car, lost entirely or physically present but not working. Tell us which situation applies when you call.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                We provide vehicle entry assistance for keys locked inside a car. If you need entry, tell us the vehicle make, model, year and its exact location. Explain whether all doors and windows are fully closed.
              </p>
              <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
                If the car needs moving without a working key, we plan collection around its condition and parking position. Tell us whether the car is on a public road, in a private car park or on private land.
              </p>
              <div className="flex items-start gap-3 bg-surface-container-high border-l-4 border-primary p-4 rounded-r-xl mb-4">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">warning</span>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                  If anyone is hurt or in danger, call 999 first.
                </p>
              </div>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                The documents required before entry or collection will be explained when you call.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-xl">
              <Image
                alt="MH Recovery Service Ltd attending a vehicle in Sheffield"
                className="object-cover"
                src="/lost-car-keys-sheffield-recovery.webp"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* What Help Does Your Car Need */}
        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                What Help Does Your Car Need?
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>
                The type of help depends on where the key is and the condition of the car. Describe the problem clearly so we can plan the right assistance.
              </p>
              <p>
                If the keys are locked inside, tell us whether the car is locked from the outside or whether a door is physically closed on the key. Mention if a window is open slightly, as this can affect the approach.
              </p>
              <p>
                If the keys are lost and the car cannot be moved, we can discuss recovery options. Give us the vehicle registration and a detailed description of its position, including nearby landmarks or a full postcode.
              </p>
              <p>
                For a replacement key, contact an auto locksmith or your vehicle's main dealer. They can cut and programme a new key once the car is accessible, and can usually remove the lost key from the car's system so it no longer works.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Proof of Ownership and What to Have Ready
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>Anyone who opens, moves or makes a key for a car has to be sure it's yours. Locksmiths and dealers usually ask for the <strong>V5C logbook</strong> and <strong>photo ID</strong> before cutting a new key. Before any entry or collection, we'll tell you on the call what we need to see. It also helps to have:</p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed">the registration, make, model and year;</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed">the exact location: full postcode, street name, or the car park entrance and level;</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed">whether the car is on a public road, in a private car park or on private land.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Moving a Car Without Keys
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <p>Without a key, the steering may stay locked, an automatic may be stuck in Park and the parking brake may not release. Tight parking spaces make it harder too. Tell us what you know about these when you call, but don't force anything. If the car is electric or hybrid, tell us that as well. Recovery moves the car somewhere safe, such as a dealer, an auto locksmith or your home; it doesn't replace the key. Read more in our guide: <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">can a car be recovered without keys?</Link></p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-surface px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Locksmith, Dealer or Recovery: Who Should You Call?
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4 text-on-surface-variant text-base font-sans leading-relaxed">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>A spare key is available</strong> — ask someone to bring it.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>Keys locked inside the car</strong> — call us for vehicle entry assistance.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>All keys lost or damaged</strong> — an auto locksmith or main dealer for a replacement key.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>The car needs moving before a new key can be made</strong> — call us for <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery</Link>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>The car also has a flat battery or a fault</strong> — tell us both problems; see <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">jump starts</Link> and <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery</Link>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                  <p className="text-on-surface-variant text-sm font-sans leading-relaxed"><strong>The dealer is outside Sheffield</strong> — ask about <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long-distance recovery</Link>.</p>
                </li>
              </ul>
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
              Lost Car Keys Help Across Sheffield
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              We serve Sheffield and South Yorkshire. Call from Hillsborough, Crookes, Ecclesall, Woodseats or Heeley, as well as the city centre, Meadowhall, Attercliffe, Handsworth and Darnall.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-4 leading-relaxed">
              Provide the street name and full postcode where possible, including addresses in S1, S2 and S3. In a large car park, share the entrance, parking level and a nearby shop or sign. Tell us whether there are height restrictions or barriers we should know about.
            </p>
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.
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
                src="/lost-car-keys-sheffield-locked-in.webp"
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
                Lost Car Keys Help Sheffield FAQs
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
              <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car recovery in Sheffield
              </Link>
              {' '}and{' '}
              <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                vehicle towing in Sheffield
              </Link>
              . Roadside assistance in Sheffield is also available — call us to discuss your needs.
              {' '}If your car has to be moved without keys, read our guide:{' '}
              <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                can a car be recovered without keys?
              </Link>
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
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>key</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Call for Lost Car Keys Help
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-2 leading-relaxed">
              Call {BUSINESS.phonePrimary} and tell us where you are, your vehicle details and the key problem.
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
                href={`https://wa.me/${BUSINESS.phonePrimaryWA}?text=Hello%2C%20I%20need%20help%20with%20lost%20car%20keys%20help.`}
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
