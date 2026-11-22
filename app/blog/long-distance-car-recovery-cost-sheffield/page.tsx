import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, BUSINESS } from '@/lib/siteConfig'
const title = "How Is Long-Distance Car Recovery Priced? Questions to Ask Before You Book From Sheffield"
const description = "What affects the cost of long-distance car recovery from Sheffield, what to tell the operator for an accurate quote, and the questions to ask before you book."
const path = "/blog/long-distance-car-recovery-cost-sheffield"
const featuredImage = "/blog-long-distance-recovery-cost-sheffield-featured.webp"
export const metadata: Metadata = {
  title: "Long-Distance Car Recovery Cost: What Affects It?",
  description,
  alternates: { canonical: path },
  openGraph: {
    title, description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name,
    locale: 'en_GB', type: 'article', publishedTime: '2026-11-22',
    images: [{ url: featuredImage, alt: 'Flatbed recovery truck carrying a car on a motorway near Sheffield at dusk' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [featuredImage] },
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Is Long-Distance Car Recovery Priced? Questions to Ask Before You Book From Sheffield",
  "description": "What affects the cost of long-distance car recovery from Sheffield, what to tell the operator for an accurate quote, and the questions to ask before you book.",
  "image": "https://mhrecoveryserviceltd.co.uk/blog-long-distance-recovery-cost-sheffield-featured.webp",
  "datePublished": "2026-11-22",
  "dateModified": "2026-11-22",
  "author": {
    "@type": "Organization",
    "name": "MH Recovery Service Ltd",
    "url": "https://mhrecoveryserviceltd.co.uk/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MH Recovery Service Ltd",
    "url": "https://mhrecoveryserviceltd.co.uk/"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://mhrecoveryserviceltd.co.uk/blog/long-distance-car-recovery-cost-sheffield"
  },
  "url": "https://mhrecoveryserviceltd.co.uk/blog/long-distance-car-recovery-cost-sheffield",
  "inLanguage": "en-GB"
}
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mhrecoveryserviceltd.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://mhrecoveryserviceltd.co.uk/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How Is Long-Distance Car Recovery Priced? Questions to Ask Before You Book From Sheffield",
      "item": "https://mhrecoveryserviceltd.co.uk/blog/long-distance-car-recovery-cost-sheffield"
    }
  ]
}
const faqs = [
  {
    "q": "How much does long-distance car recovery cost from Sheffield?",
    "a": "It depends on the distance, the vehicle, its condition, access at each end and timing. Call with the collection and delivery postcodes and the car's details for a quote before you agree."
  },
  {
    "q": "Is long-distance car recovery charged per mile?",
    "a": "Some companies mention a rate per mile, but the total usually depends on the whole job, including the journey to and from the car and the work at each end. Compare the total price for your specific job."
  },
  {
    "q": "Can you move a car that won't start?",
    "a": "Yes. Non-running cars can be transported. Tell the operator whether it rolls, steers and brakes, so the right equipment is sent."
  },
  {
    "q": "Do I need to be there when the car is collected?",
    "a": "Someone usually needs to be there to hand over the keys and confirm the car, unless other arrangements are agreed. Someone should also be at the delivery address to receive it."
  },
  {
    "q": "Can you take my car outside Sheffield?",
    "a": "Yes. MH Recovery Service Ltd arranges longer journeys from Sheffield to agreed destinations. Give us the delivery postcode so we can confirm."
  },
  {
    "q": "What details do you need for a quote?",
    "a": "Both postcodes, the vehicle's make, model and registration, its condition, whether you have the keys, access at each end and when you need it moved. Photos help."
  },
  {
    "q": "Will the price change on the day?",
    "a": "A quote is based on the details you give. If the car's condition, location or access is different from what was described, ask the operator to explain any change before work goes ahead."
  }
]
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}
export default function LongDistanceRecoveryCostSheffieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
{/* Hero */}
        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image alt="Flatbed recovery truck carrying a car on a motorway near Sheffield at dusk" className="object-cover" src="/blog-long-distance-recovery-cost-sheffield-featured.webp" fill priority fetchPriority="high" sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">How Is Long-Distance Car Recovery Priced? Questions to Ask Before You Book From Sheffield</h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">
                What affects the cost of long-distance car recovery from Sheffield, what to tell the operator for an accurate quote, and the questions to ask before you book.
              </p>
            </div>
          </div>
        </section>

<article className="py-10 md:py-16 px-4 md:px-6">
<div className="max-w-3xl mx-auto">
<section className="mb-10">
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Maybe you have bought a car in Sheffield and need it taken home to the other end of the country. Maybe your car broke down while you were visiting family in Hillsborough and it needs to go back to your own garage. Or maybe a non-runner has been sat on a drive in Woodseats for months and it is finally time to move it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Whatever the reason, the first question is usually the same: "How much will it cost?" The honest answer is that it depends on the job. This guide explains what actually goes into a long-distance recovery price, what to tell the operator so your quote is accurate, and the questions worth asking before you agree to anything.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">The short answer</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Long-distance recovery is usually quoted per job, based on the whole journey, the vehicle and its condition.</strong> The more accurately you describe all three, the more accurate your quote will be.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The main things that affect the price are:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>the <strong>distance</strong> and route, including how the truck gets to the car and back;</li>
<li>the <strong>vehicle's size and weight</strong>;</li>
<li>the <strong>vehicle's condition</strong>: whether it starts, rolls, steers and brakes, and whether you have the keys;</li>
<li>
<strong>access</strong> at the collection and delivery points;</li>
<li>
<strong>timing</strong>, such as whether it is urgent or can be planned;</li>
<li>any <strong>extras</strong>, such as waiting time or a second stop.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Always ask for a quote before you agree, and check what it includes.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Why can't recovery companies just give a price per mile?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Because miles are only part of the job.</strong> A long trip with an easy, rolling car can be simpler than a shorter one with a car that has locked wheels in a tight back lane.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Some companies do talk about a rate per mile, but the total cost still depends on the work at each end of the journey. When you compare quotes, look at the total price for your specific job rather than a headline rate.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What affects the cost of long-distance car recovery?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">How far is it, and which way is the truck going?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Distance is the biggest single factor, but it is not just the miles from A to B.</strong> The recovery truck has to get to your car, carry it to the destination, and then return.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">So a quote will usually take into account:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>where the truck is starting from;</li>
<li>the collection address;</li>
<li>the delivery address;</li>
<li>the route, including motorways such as the M1 and any tolls or charges on the way.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">That is why operators ask for <strong>both postcodes</strong> before they quote.</p>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What kind of vehicle is it?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Bigger and heavier vehicles may need a different truck or more careful loading.</strong> A small hatchback is a different job from a large SUV, a long-wheelbase van or a lowered car with very little ground clearance.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the operator:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>the make and model;</li>
<li>whether it is a car, a van or something else;</li>
<li>any modifications, such as lowered suspension, a body kit or very wide wheels.</li>
</ul>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Does it start, roll, steer and brake?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>A car that rolls and steers is usually quicker and simpler to load than one that doesn't.</strong> If the wheels are locked, the steering is stuck, a tyre is flat or the car has been in an accident, the driver may need extra equipment or time.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Be honest about the car's condition. If you say it rolls freely and it turns out the handbrake is seized on, the job takes longer than planned, and that can affect the price or the timing on the day.</p>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Do you have the keys?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Having the keys makes things easier, but a car without keys can often still be moved.</strong> Without keys, the steering lock and gear position can make loading harder. If you have lost the keys, say so when you call. Our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys</Link> explains how that usually works.</p>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What is access like at each end?</h3>
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-long-distance-recovery-steep-street-access.webp" alt="Recovery truck parked on a steep terraced street in Sheffield" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>Narrow streets, steep hills, underground car parks and tight driveways can all add time.</strong> Sheffield has plenty of steep roads and terraced streets where parking is tight, so it is worth thinking about where the truck can safely stop and how close it can get to the car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Mention:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>whether the car is on a road, a driveway, in a garage or in a car park;</li>
<li>any height limits, gates or barriers;</li>
<li>whether there is space for a recovery truck at the delivery address.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car is in a multi-storey or underground car park, read our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery in Sheffield</Link>.</p>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">When do you need it moved?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>A planned move can often be scheduled more flexibly than an urgent one.</strong> If you can be flexible about the day or time, say so. If it has to happen at a specific time, for example because a garage or buyer is expecting it, mention that too.</p>
<h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Are there any extras?</h3>

<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether anything could be added on top of the quote, such as:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>waiting time if nobody is there at collection or delivery;</li>
<li>an extra stop on the way;</li>
<li>storage if the vehicle cannot be delivered straight away.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">There is nothing wrong with extras, as long as you know about them in advance.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should I tell the operator to get an accurate quote?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-long-distance-recovery-photos-before-loading.webp" alt="Car owner photographing their car on a driveway before collection" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>The more detail you give on the first call, the fewer surprises later.</strong> Have this ready:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>
<strong>Collection address and postcode</strong>, and where exactly the car is parked;</li>
<li>
<strong>Delivery address and postcode</strong>, and the name and number of whoever will receive it;</li>
<li>
<strong>Vehicle make, model and registration</strong>;</li>
<li>
<strong>Condition</strong>: does it start, roll, steer and brake? Any accident damage or flat tyres?</li>
<li>
<strong>Keys</strong>: do you have them, and will they travel with the car?</li>
<li>
<strong>Access</strong>: tight streets, height limits, gates, or anything else the driver should know;</li>
<li>
<strong>Timing</strong>: when it needs collecting and any delivery deadline;</li>
<li>
<strong>Photos</strong>, if you can send them, of the car and where it is parked.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">At MH Recovery Service Ltd, we discuss the full journey with you and give you a quote before you agree, so you know where you stand before anything is booked.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What questions should I ask before I book?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>A few simple questions can save a lot of hassle.</strong> Before you agree to a long-distance recovery, ask:</p>
<ol className="list-decimal pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>
<strong>Is the price for the whole journey, collection to delivery?</strong>
</li>
<li>
<strong>What does the quote include, and is there anything that could be added on the day?</strong>
</li>
<li>
<strong>What happens if the car doesn't roll, or the condition is different from what I described?</strong>
</li>
<li>
<strong>Will you carry the car on a flatbed, or tow it?</strong> For long trips, many owners prefer the car to be carried.</li>
<li>
<strong>Can you give me an estimated collection time?</strong>
</li>
<li>
<strong>Who needs to be there at collection and delivery, and what if they're late?</strong>
</li>
<li>
<strong>How do I pay, and when?</strong>
</li>
<li>
<strong>Is the vehicle insured while it is being transported?</strong> Ask the operator what cover applies and check your own policy too.</li>
</ol>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If an answer is not clear, ask again. A good operator will be happy to explain.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How can I keep the cost down?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>You can't change the distance, but you can make the job as smooth as possible.</strong>
</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>
<strong>Give accurate details</strong> so the right truck and equipment are sent first time.</li>
<li>
<strong>Have the keys ready</strong>, and the car unlocked if possible.</li>
<li>
<strong>Make sure the car can be reached</strong>: move other cars, open gates and clear the way.</li>
<li>
<strong>Have someone at both ends</strong> at the agreed times, to avoid waiting.</li>
<li>
<strong>Be flexible on timing</strong> if you can.</li>
<li>
<strong>Remove valuables and loose items</strong> from the car before collection.</li>
<li>
<strong>Take photos</strong> of the car's condition before it is loaded, for your own records.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For more on preparing a car for collection, see our step-by-step guide on <Link href="https://mhrecoveryserviceltd.co.uk/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">how to get your car towed to a garage in Sheffield</Link>.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What about the cheapest quote?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>The cheapest quote is only a good deal if it covers the same job.</strong> When you compare prices, check that each quote:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>is for the full journey;</li>
<li>includes the same type of transport, such as flatbed rather than towing;</li>
<li>accounts for the car's real condition;</li>
<li>doesn't leave out extras that you will be charged later.</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A clear quote from an operator who has asked the right questions is usually better value than a vague one that changes on the day.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Is it a recovery or a planned transport?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-long-distance-recovery-flatbed-motorway.webp" alt="Car strapped securely on a flatbed recovery truck travelling on a motorway" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>It can be either, and the questions are the same.</strong> If your car has broken down far from home, you need recovery. If you have bought a car, are moving house or need a non-runner moved, it is more of a planned transport. Both are covered by our <Link href="https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long distance recovery service</Link>.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your car has broken down locally and just needs to go to a nearby garage, our <Link href="https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link> and <Link href="https://mhrecoveryserviceltd.co.uk/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield</Link> pages explain how that works.</p>
</section>
</div>
</article>{/* FAQ Section */}
        <section className="py-10 md:py-16 bg-surface-container-low px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-surface">
                Frequently asked questions
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto"/>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map(({ q, a }) => (<details key={q} className="group bg-surface-container-high border border-outline/20 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-bold text-sm text-on-surface uppercase tracking-tight select-none hover:text-primary transition-colors">
                    {q}
                    <span className="material-symbols-outlined text-primary text-xl shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1">
                    <div className="text-on-surface-variant text-sm font-sans leading-relaxed">{a}</div>
                  </div>
                </details>))}
            </div>
          </div>
        </section>

<section className="py-10 md:py-14 px-4 md:px-6 bg-surface">
<div className="max-w-3xl mx-auto">
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need long-distance recovery from Sheffield?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">
<strong>MH Recovery Service Ltd</strong> arranges <Link href="https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long distance recovery</Link> from Sheffield and South Yorkshire to agreed destinations, from our base on Coupe Road, Sheffield S3 9DP. Call us on <strong>07799 180009</strong> or send a WhatsApp message with both postcodes and your car's details, and we will discuss the journey and give you a quote before you agree. Our phone line is open 24 hours a day, 7 days a week.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can also use our <Link href="https://mhrecoveryserviceltd.co.uk/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>, or read more guides on the <Link href="https://mhrecoveryserviceltd.co.uk/blog" className="text-primary font-semibold hover:opacity-80 transition-opacity">MH Recovery blog</Link>.</p>
</section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
