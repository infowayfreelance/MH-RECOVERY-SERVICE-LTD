import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Can a Car Be Recovered Without Keys? | MH Recovery',
  description:
    'Can a car be recovered without keys? Learn how recovery works, what can make it harder, what details to share and how to arrange help in Sheffield.',
  alternates: {
    canonical: '/blog/car-recovery-without-keys',
  },
  openGraph: {
    title: 'Can a Car Be Recovered Without Keys?',
    description:
      'Find out how a car can be recovered without keys, what can make collection harder and what to tell a recovery company.',
    url: `${SITE_URL}/blog/car-recovery-without-keys`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'article',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Can a Car Be Recovered Without Keys? | MH Recovery Service Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can a Car Be Recovered Without Keys?',
    description:
      'Find out how a car can be recovered without keys, what can make collection harder and what to tell a recovery company.',
    images: [OG_IMAGE],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Can a Car Be Recovered Without Keys?',
      item: `${SITE_URL}/blog/car-recovery-without-keys`,
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Can a Car Be Recovered Without Keys?',
  description:
    'Can a car be recovered without keys? Learn how recovery works, what can make it harder, what details to share and how to arrange help in Sheffield.',
  url: `${SITE_URL}/blog/car-recovery-without-keys`,
  publisher: {
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SITE_URL,
  },
  author: {
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SITE_URL,
  },
  image: `${SITE_URL}/blog-recovery-without-keys-calling.webp`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/car-recovery-without-keys`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I arrange recovery if I am not with the car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask the provider. It may accept an absent owner if permission, identification, access and handover arrangements are agreed. Someone may need to attend collection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the car be taken straight to a main dealer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly, if the provider accepts the journey. Check that the dealer will receive the vehicle outside opening hours, and explain that no keys are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does recovery include a replacement car key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not automatically. Recovery moves the vehicle; replacement keys need an agreement. Ask whether the quote covers transport only, and arrange key replacement with a suitable locksmith or dealer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a missing locking wheel nut key affect recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can matter if a wheel needs removing. Tell the operator before collection. This is different from missing ignition keys and does not always prevent transport.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a car with no MOT be transported without keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask for transport and explain its MOT status. Being carried on a truck differs from being driven. Do not assume you can drive it after delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I think my keys were stolen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact your insurer and ask a locksmith or dealer about securing the car. If your vehicle is stolen, report it to police and follow instructions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a car be collected from a police pound without keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact the pound. Release checks, documents and rules must be met before transport. Explain that keys are missing and ask what arrangements they require.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can passengers travel with the recovery driver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask before booking. Passenger space varies between vehicles and providers. Share how many people need transport, including children, and check seating arrangements. You may need to travel separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I find the keys after booking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell the provider straight away. The collection plan may change, but a callout or cancellation charge could still apply. Check the terms agreed when you booked.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I check when the car reaches its destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm the handover location, note the vehicle\'s condition and keep the receipt. Make sure the garage knows there are no keys beforehand.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'Can I arrange recovery if I am not with the car?',
    a: 'Ask the provider. It may accept an absent owner if permission, identification, access and handover arrangements are agreed. Someone may need to attend collection.',
  },
  {
    q: 'Can the car be taken straight to a main dealer?',
    a: 'Possibly, if the provider accepts the journey. Check that the dealer will receive the vehicle outside opening hours, and explain that no keys are available.',
  },
  {
    q: 'Does recovery include a replacement car key?',
    a: 'Not automatically. Recovery moves the vehicle; replacement keys need an agreement. Ask whether the quote covers transport only, and arrange key replacement with a suitable locksmith or dealer.',
  },
  {
    q: 'Does a missing locking wheel nut key affect recovery?',
    a: 'It can matter if a wheel needs removing. Tell the operator before collection. This is different from missing ignition keys and does not always prevent transport.',
  },
  {
    q: 'Can a car with no MOT be transported without keys?',
    a: 'Ask for transport and explain its MOT status. Being carried on a truck differs from being driven. Do not assume you can drive it after delivery.',
  },
  {
    q: 'What should I do if I think my keys were stolen?',
    a: 'Contact your insurer and ask a locksmith or dealer about securing the car. If your vehicle is stolen, report it to police and follow instructions.',
  },
  {
    q: 'Can a car be collected from a police pound without keys?',
    a: 'Contact the pound. Release checks, documents and rules must be met before transport. Explain that keys are missing and ask what arrangements they require.',
  },
  {
    q: 'Can passengers travel with the recovery driver?',
    a: 'Ask before booking. Passenger space varies between vehicles and providers. Share how many people need transport, including children, and check seating arrangements. You may need to travel separately.',
  },
  {
    q: 'What happens if I find the keys after booking?',
    a: 'Tell the provider straight away. The collection plan may change, but a callout or cancellation charge could still apply. Check the terms agreed when you booked.',
  },
  {
    q: 'What should I check when the car reaches its destination?',
    a: 'Confirm the handover location, note the vehicle\'s condition and keep the receipt. Make sure the garage knows there are no keys beforehand.',
  },
]

export default function CarRecoveryWithoutKeysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image
              alt="Person calling MH Recovery Service Ltd while holding a business card next to their car"
              className="object-cover"
              src="/blog-recovery-without-keys-calling.webp"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">
                Can a Car Be Recovered Without Keys?
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">
                Yes, car recovery without keys is often possible. The recovery company must check the vehicle and its location before choosing a safe way to move it.
              </p>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <section className="mb-10">
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Locked steering, a gearbox stuck in park or a parking brake that will not release can make collection harder. Tight parking spaces can also affect access.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Recovery moves your car to another place. It does not replace your keys or make the car ready to drive. Depending on the problem, a spare key or an auto locksmith may help first.
              </p>
            </section>

            {/* What Should You Do First */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                What Should You Do First?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">If the Car Is Parked Safely</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                If your car is safely parked, check whether someone can bring you a working spare key. If the keys are locked inside, an auto locksmith may help you get back in.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                If no spare is available, call a recovery company or your breakdown provider. Explain the key problem before booking, so they can check what help you need.
              </p>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">If the Car Is Beside Moving Traffic</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Put your safety first. Do not try to push the car, force a door open or search for keys beside passing traffic.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                On a motorway, leave through the side away from traffic only if it is safe. Wait well away from the road, behind a safety barrier where possible.
              </p>
              <div className="flex items-start gap-3 bg-surface-container p-4 rounded-xl border border-outline/20 mb-4">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" aria-hidden="true">emergency</span>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                  If you cannot leave safely, stay inside with your seat belt on, use hazard lights if available, and call <strong className="text-on-surface">999</strong> for the police. Follow the Highway Code&apos;s breakdown safety advice. Never place a warning triangle on a motorway.
                </p>
              </div>
            </section>

            {/* How Does Car Recovery Without Keys Work */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                How Does Car Recovery Without Keys Work?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Checking Whether the Car Can Roll and Steer</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Before moving the car, the recovery operator checks its make, model and condition. They also check the space around it and whether the wheels can turn.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                Missing keys may leave the steering locked or stop the gearbox from moving out of park. A parking brake may also stay on. Tell the operator what you know, but do not try to force anything.
              </p>

              {/* Image 2 - Wheel dollies */}
              <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
                <Image
                  alt="Recovery technician using wheel dollies to move a car with locked wheels onto a flatbed"
                  className="object-cover"
                  src="/blog-recovery-without-keys-dollies.webp"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Loading a Car With Locked Wheels</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                A flatbed carries the car on the back of a recovery truck. However, getting a locked car onto that bed may need extra equipment.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Depending on the vehicle, an operator may use wheel skates or dollies to support wheels that cannot turn. This helps move the car without dragging its tyres along the ground.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                A winch can help pull a vehicle onto the truck, but it does not solve every problem with locked wheels. The operator must choose equipment and follow the vehicle maker&apos;s guidance.
              </p>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Loading Is Different From Road Towing</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Moving a car a short distance onto a truck is different from towing it along a road. A method used for loading may not be safe for the journey.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Some vehicles must travel with all wheels off the road. For example, Tesla&apos;s Model 3 guidance sets separate rules for loading and transport.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Do not attempt a rope tow when the steering or brakes cannot be used safely. Ask the operator how your car will be moved.
              </p>
            </section>

            {/* What Can Make Recovery More Difficult */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                What Can Make Recovery More Difficult?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">An Automatic Gearbox Stuck in Park</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                An automatic car left in park may not roll freely. Without a working key, the driver may be unable to change the gear setting.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                This does not always prevent recovery, but it changes how the car must be handled safely. Give the recovery company the exact make, model and year. Do not force the gear lever or try a release method found online.
              </p>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">A Locked Steering Wheel or Parking Brake</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                A locked steering wheel can stop the operator from guiding the car during loading. If the front wheels point sideways, a narrow parking space may make the job harder.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                A parking brake that will not release can also stop the wheels turning. Some electronic parking brakes depend on battery power, but their behaviour varies between models. Tell the operator about these problems if you already know. There is no need to test them or move the car yourself.
              </p>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Electric Cars, Hybrids and Flat Batteries</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Electric cars and hybrids need the transport method stated in their own handbook. Do not assume they can be towed like another car.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                For example, Tesla&apos;s Model 3 guidance requires all four wheels off the ground during transport. Its Tow Mode needs a detected key and low voltage power.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                A flat battery can also affect access or controls. Tell the operator if the car has no power, and leave the recovery checks to them.
              </p>
            </section>

            {/* Should You Call a Locksmith or a Recovery Service */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                Should You Call a Locksmith or a Recovery Service?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                The right choice depends on whether you need access to the car, a working key or transport. If the car is parked safely, getting a spare key brought to you may be the simplest option.
              </p>

              <div className="overflow-x-auto rounded-xl border border-outline/20 mb-6">
                <table className="w-full text-sm font-sans">
                  <thead>
                    <tr className="bg-surface-container-high border-b border-outline/20">
                      <th className="text-left px-4 py-3 font-bold text-on-surface uppercase tracking-tight text-xs">Situation</th>
                      <th className="text-left px-4 py-3 font-bold text-on-surface uppercase tracking-tight text-xs">Who to contact first</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline/10">
                    {[
                      ['A spare key is available', 'Ask someone to bring it.'],
                      ['Keys are locked inside', 'Contact an auto locksmith or your breakdown provider.'],
                      ['All keys are lost or damaged', 'Ask an auto locksmith or dealer about replacement keys.'],
                      ['The car needs moving before keys can be replaced', 'Contact a recovery company.'],
                      ['The car also has a fault', 'Explain both problems to your breakdown provider or recovery company.'],
                    ].map(([situation, contact]) => (
                      <tr key={situation} className="bg-surface hover:bg-surface-container transition-colors">
                        <td className="px-4 py-3 text-on-surface-variant">{situation}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Check that the locksmith can help with your exact vehicle. Some key replacements need dealer support.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Recovery and key replacement are separate jobs. Booking transport does not mean a new key is included.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                If you are unsure, explain what happened before booking. Ask exactly what the service covers and whether another provider will be needed.
              </p>
            </section>

            {/* What Documents and Permission Might You Need */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                What Documents and Permission Might You Need?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Identification and Your Connection to the Car</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Ask the recovery company what it needs before collection. It may request photo identification and documents showing your connection to the vehicle.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                A purchase receipt or invoice may help show ownership. A V5C log book records the registered keeper; it is not proof of ownership. If your documents are locked inside, explain this when booking. Ask what other evidence the provider can accept. Do not assume you must break into the car to retrieve them.
              </p>

              <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Company, Leased or Someone Else&apos;s Car</h3>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                If the car belongs to an employer, leasing company or another person, check that you have permission to arrange its movement.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                The provider may need confirmation from the owner or fleet manager. Requirements vary, so agree these checks in advance. Having permission to use a car does not always mean you can authorise its recovery.
              </p>
            </section>

            {/* What Should You Tell the Recovery Company */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                What Should You Tell the Recovery Company?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Clear details help the recovery company assess the job before sending a vehicle. Say that you have no usable keys at the start of the call.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have these details ready:</p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'Your car\'s registration number, make, model and year, if known.',
                  'Whether the keys are lost, damaged, stolen or locked inside.',
                  'Whether the car is manual, automatic, electric or hybrid.',
                  'Whether it has battery power, if you already know.',
                  'Any known problems with the steering, wheels or parking brake.',
                  'The collection postcode, road name and exact parking position.',
                  'The destination address and who will receive the car.',
                  'Any damage, flat tyres or other problems.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Describe access too. Mention a steep driveway, narrow entrance, blocked parking space, locked gate or underground car park. Share any posted height limit.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                If safe, send photos showing the car and surrounding space. Never stand in traffic to take them.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                Do not guess or test whether the car will move. Tell the operator when something is unknown.
              </p>
            </section>

            {/* What Affects the Cost */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                What Affects the Cost of Recovery Without Keys?
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                The cost depends on the journey and how difficult the car is to collect. Missing keys may mean extra equipment or more loading time is needed.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Distance, vehicle size, locked wheels and restricted access can affect the quote. Key replacement, storage or another service may be charged separately.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before agreeing, ask:</p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'Does the quote include collection and delivery?',
                  'Have the missing keys and access problems been allowed for?',
                  'Does it include VAT, where applicable?',
                  'Could any extra charges apply?',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Check your breakdown cover or insurance before booking. Lost keys and vehicle transport may have different limits or exclusions.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed">
                Ask the provider to explain what is covered rather than assuming recovery is included.
              </p>
            </section>

            {/* Arranging Car Recovery in Sheffield */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                Arranging Car Recovery in Sheffield
              </h2>
              <div className="h-1 w-10 bg-primary mb-6" />

              {/* Image 3 - Sheffield technician + customer */}
              <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
                <Image
                  alt="MH Recovery Service Ltd technician discussing recovery of a car with a customer in Sheffield"
                  className="object-cover"
                  src="/blog-recovery-without-keys-sheffield.webp"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                If you need car recovery without keys in Sheffield, contact MH Recovery Service Ltd to discuss the job.
                {' '}If your keys are locked inside the car, see our{' '}
                <Link href="/services/lost-car-keys-help-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                  lost car keys help in Sheffield
                </Link>.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Share your vehicle details, collection location and destination. Explain that the keys are unavailable and mention any access problems.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
                Ask whether the team can handle your vehicle in its current position. Confirm the collection arrangements, destination and full quote before booking.
              </p>
              <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-6">
                If the car needs replacement keys, check that your chosen garage or locksmith can receive it safely.
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
            </section>

          </div>
        </article>

        {/* FAQ Section */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Frequently Asked Questions
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
              Need Recovery Help in Sheffield?
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto mb-6" />
            <p className="text-on-surface-variant text-base font-sans mb-8 leading-relaxed">
              We also help with{' '}
              <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                car recovery in Sheffield
              </Link>
              ,{' '}
              <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                breakdown recovery
              </Link>
              ,{' '}
              <Link href="/services/lost-car-keys-help-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                lost car keys help
              </Link>
              ,{' '}
              <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                accident recovery
              </Link>
              {' '}and{' '}
              <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                long distance recovery
              </Link>
              .
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">grid_view</span>
              View All Services
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 md:py-14 bg-primary px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>directions_car</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Need Car Recovery Without Keys?
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-8 leading-relaxed">
              Tell us your vehicle details, where it is and where it needs to go. We will check whether we can help.
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
