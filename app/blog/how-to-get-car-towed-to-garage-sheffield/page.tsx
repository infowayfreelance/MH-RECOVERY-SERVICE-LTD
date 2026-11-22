import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL, BUSINESS } from '@/lib/siteConfig';
const title = "How to Get Your Car Towed to a Garage in Sheffield: A Step-by-Step Guide";
const description = "Need your car towed to a garage in Sheffield? What to sort with the garage first, what to tell the recovery driver, MOT rules, and how the tow usually works.";
const path = "/blog/how-to-get-car-towed-to-garage-sheffield";
const featuredImage = "/blog-car-towed-to-garage-sheffield-featured.webp";
export const metadata: Metadata = {
    title: "How to Get Your Car Towed to a Garage in Sheffield", description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name, locale: 'en_GB', type: 'article', images: [{ url: featuredImage, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [featuredImage] },
};
const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}${path}` },
    ],
};
const articleSchema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2026-11-21',
    dateModified: '2026-11-23',
    url: `${SITE_URL}${path}`, image: `${SITE_URL}${featuredImage}`,
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
};
const faqs = [
  {
    "q": "How do I book car recovery to a garage in Sheffield?",
    "a": "Confirm the garage can receive the car, then contact a recovery operator with both addresses and the vehicle details. Explain any movement or access problems. Agree the quote and handover before collection."
  },
  {
    "q": "Can I drive to a repairer after an MOT failure?",
    "a": "GOV.UK says you can take the vehicle away if its current MOT is valid and no dangerous problems were listed. It must still be roadworthy. Otherwise, repairs are needed before driving; discuss recovery if it needs moving."
  },
  {
    "q": "What happens if I cannot attend collection?",
    "a": "Tell the operator before booking. Agree who can provide access and hand over the keys, and make sure the garage understands the delivery arrangements. Do not assume an unattended collection is possible without discussing it."
  },
  {
    "q": "Can a car that has been unused for months go to a garage?",
    "a": "Ask about collection and describe its condition. Mention the time it has been standing, flat tyres, stuck brakes or missing keys. The operator needs those details to check access and plan loading."
  },
  {
    "q": "Can I arrange a tow without the car keys?",
    "a": "Tell the operator that the keys are missing before agreeing the job. Explain anything you know about steering, locked wheels and access. The loading arrangements depend on the vehicle and its condition."
  },
  {
    "q": "How is the price of a garage tow worked out?",
    "a": "The distance, collection and delivery access, and vehicle condition affect the job. Give the operator those details and confirm the quote before agreeing. Report any later change to the destination or condition."
  }
];
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}
export default function CarTowedToGarageSheffieldPage() {
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
            <Image alt="Car loaded on a flatbed recovery truck outside a garage workshop in Sheffield" className="object-cover" src="/blog-car-towed-to-garage-sheffield-featured.webp" fill priority fetchPriority="high" sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">
                How to Get Your Car Towed to a Garage in Sheffield: A Step-by-Step Guide
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">
                Need your car towed to a garage in Sheffield? What to sort with the garage first, what to tell the recovery driver, MOT rules, and how the tow usually works.
              </p>
            </div>
          </div>
        </section>

<article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto">
<p className="text-on-surface-variant text-sm font-sans mb-6">Last updated: <time dateTime="2026-11-23">23 November 2026</time></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You have found a garage to look at the car. Now you need to get it there. Perhaps it will not start outside your house, or it is sitting at a workshop that cannot do the repair you need.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Getting your car to a garage starts with confirming that someone can receive it. This Sheffield guide takes you through the calls, the collection details and the handover, so everyone knows what is happening.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What is the easiest way to arrange a tow to a garage?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Confirm the destination first, then book collection with a recovery operator. A garage appointment and a tow are separate arrangements, and both need to fit together.</p>
<ol className="list-decimal pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Check whether the car can safely and legally be driven. If it cannot, explain the problem when asking about recovery.</li><li>Ask the garage to accept the car and give you its delivery instructions.</li><li>Share the collection point, destination, vehicle details and access information with the operator.</li><li>Agree the quote and collection arrangements before booking.</li><li>Get the keys and belongings sorted, then confirm the handover at the garage.</li></ol>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a car already parked safely, you can work through these steps without rushing. If you have stopped beside a busy road, deal with safety first. Call 999 if anyone is in immediate danger.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield service</Link> covers planned moves as well as cars that cannot be driven. Tell us which situation you are in, rather than worrying about choosing the right recovery term.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Does your car need towing, or could you drive it?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">That depends on its condition and legal status. Being close to the garage does not make an unsafe car suitable for the road, and a running engine does not answer every roadworthiness question.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a serious fault affects the brakes, steering or wheels, do not set off simply to avoid arranging transport. Explain what has happened to the garage and ask about getting the car there without driving it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For an MOT failure, read the <a href="https://www.gov.uk/getting-an-mot/after-the-test" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK guidance on driving after the test</a>. It says you can take the vehicle away if the current MOT remains valid and the result lists no dangerous problems.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The vehicle must also remain roadworthy. Otherwise, GOV.UK says repairs are needed before driving. If you need it moved to another repairer, discuss recovery rather than assuming a booked appointment makes the journey acceptable. This is practical guidance, not legal advice.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A car that will not start may need a different first step. Explain the symptoms when you call. If a battery problem seems likely, our <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">jump starts page</Link> explains that service, without assuming every non-starter needs a tow.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a damaged tyre, ask about <Link href="/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">tyre damage assistance</Link>. Do not drive on a flat just because the garage is nearby. The useful question is what help suits the fault, rather than how little distance you could risk travelling.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Step 1: What should you agree with the garage?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-towed-garage-call-garage-first.webp" alt="Driver on the phone to a garage beside a car that will not start on a driveway" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Get a clear yes that the garage will receive the car by recovery. An appointment for a repair does not tell the recovery driver where to unload a vehicle that may not move under its own power.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask these questions before you book collection:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Can you accept the car in its current condition, including if it does not roll or start?</li><li>Which entrance should the recovery driver use?</li><li>Where should the car be unloaded, and will that space be available?</li><li>Who should receive the keys, and is there a contact number for them?</li><li>What arrival arrangements work with your opening hours?</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Write down the answers in one place. If you have spoken to someone on reception, ask whether the workshop needs any further information. Pass on what you know about the fault so the garage expects the right kind of delivery.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Use the full address, not just the business name. A garage may have its office on one side and vehicle access elsewhere. If the entrance is easy to miss, ask for a short description you can share with the operator.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the plan again if anything changes. A different garage, a changed appointment or an unavailable unloading space can affect the recovery booking. Tell the operator before collection, rather than leaving the driver to sort it out on arrival.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Step 2: Which details help the operator plan collection?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Describe the car, its exact position and the route into that position. A postcode gets someone to the area; it may not identify the driveway, yard or parking level where your car is waiting.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a Sheffield collection, mention a steep approach, closely parked cars or a narrow terrace if they affect access. Explain where the vehicle sits in relation to the road. Do not assume there will be space beside it when the driver arrives.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have this information ready:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Collection address and postcode, plus the car's position within the site.</li><li>Garage address and the delivery instructions you have agreed.</li><li>Make, model and registration.</li><li>Whether the car starts, rolls, steers and goes into neutral, as far as you know.</li><li>Any flat tyres, accident damage, locked wheels or handbrake problems.</li><li>Whether you have the keys and can be present for collection.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you do not know an answer, say so. You should not push a car down a slope, release its handbrake or attempt a test drive just to provide more information. Describe what you have already observed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For cars in a multi-storey or behind a barrier, share the entrance and level as well as the car park name. Our <Link href="/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery guide</Link> explains the access details worth passing on. Access needs checking for each job.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Missing keys also change the conversation. Tell the operator at the start, even if you think the car is easy to reach. The <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys guide</Link> explains why steering and loading may need a different plan.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Step 3: What should the quote cover?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Agree the job using the actual collection point, destination and vehicle condition. MH Recovery Service Ltd explains the price before you agree, so share the details that could affect the move before making the booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Distance is one part of the job. Access at both ends and a car that cannot roll or steer also matter. A clear description helps the operator discuss the right collection arrangements with you.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before agreeing, check that both of you mean the same destination and handover. If you want the car taken to a garage outside Sheffield, say so straight away. Our <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long distance recovery service</Link> covers enquiries about those longer moves.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask how to communicate any changes after booking. For example, the garage might request another unloading point, or someone may park across your driveway. Passing that on gives the operator a chance to discuss it before reaching the car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep your booking details somewhere you can find them. Save the agreed addresses and the garage contact alongside the recovery contact. That is more useful than trying to remember which person was told which part of the plan.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Step 4: How do you prepare without moving the car?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-towed-garage-photos-before-collection.webp" alt="Car owner taking photos of their car&#x27;s condition before it is collected for towing" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Sort the small handover jobs while leaving the vehicle safely where it is. You do not need to line it up with the road or try to free a stuck wheel yourself.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have the car keys ready. Include the locking wheel nut key if you have it, and tell the garage where it will be. If there are special instructions for accessing the vehicle, explain those when booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Take out personal items you will need, including valuables and anything in the boot. Think beyond the repair itself: house keys, a work bag or a child's belongings may be needed before you next see the car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Photograph the vehicle's condition from safe positions before loading. Keep the pictures together with your collection notes. There is no reason to stand in traffic or crawl around the car to get every angle.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Where safe, clear loose items that block the approach, such as bins on your own driveway. Do not try to control passing traffic or move someone else's property. Tell the operator about an obstruction you cannot remove.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A car that has stood for a long time needs an honest description. Mention how long it has been unused and any visible tyre or brake issues. Do not assume that having started it once means it will roll normally on collection day.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot attend, agree who will be there or how access and keys will work. Do this before the booking, with the garage aware of the handover too. Avoid leaving the driver to contact several people for basic instructions.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Step 5: What happens between collection and garage drop-off?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-towed-garage-flatbed-loading-sheffield.webp" alt="Non-running car being winched onto a flatbed recovery truck on a hilly Sheffield street" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The driver checks the vehicle and available space, then decides how to load it for the agreed move. Let the operator manage that process and follow their instructions about where to stand.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the driver if the condition has changed since your call. A tyre may have gone flat or the car may now be blocked in. A quick update is better than letting the loading plan rely on information that is no longer right.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep children and anyone watching clear of the working area. Do not climb into the vehicle or try to help with equipment unless the operator specifically directs you. Loading is not the time to retrieve an item you forgot in the boot.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">At the destination, the agreed receiving instructions should explain where the car and keys go. If the garage has named a staff member, make sure that detail travels with the booking. Confirm any key-drop arrangement with the garage itself.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">After delivery, check with the garage that it has the vehicle and keys. Confirm the next repair step separately. Getting the car to the workshop does not by itself confirm a diagnosis or mean repair work has already begun.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if the garage cannot receive it yet?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Agree another plan before arranging delivery. Do not send the car towards a closed workshop on the assumption that someone will find a place for it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether the garage accepts out-of-hours deliveries and exactly how those work. An unlocked gate is not permission to leave a car. Get the unloading and key instructions from the receiving business.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car is safely parked and can remain there, discuss collection when the garage can accept it. If it cannot stay, ask about a move to another agreed address, such as home, followed by a separate garage move later.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Explain the whole plan when asking for a quote. Moving a car home and then to a workshop involves different arrangements from one direct journey. Do not assume the second trip is already part of the first booking.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Could a friend tow it with a rope instead?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not treat a rope as a simple substitute for a planned recovery. The vehicle's towing instructions, its condition and the road situation all need consideration. A short journey through Sheffield can still involve junctions, slopes and difficult stopping points.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the vehicle handbook before considering any towing method. Tell a recovery operator about the transmission and any steering or brake fault. Avoid assuming that a method which worked for another car is suitable for yours.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you are unsure, discuss professional collection rather than experimenting. The aim is to get the car to the mechanic without creating another problem on the journey.</p>
</section></div></article>{/* FAQ Section */}
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
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Shall we discuss getting your car to the garage?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ready to arrange the move? Call MH Recovery Service Ltd on <strong>07799 180009</strong> with the collection point, garage address and what you know about the car. Our phone line is open 24/7, and we are based on Coupe Road, Sheffield S3 9DP.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a car that has stopped unexpectedly, see <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link>. For other non-driving vehicle moves, visit our <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery page</Link>.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can also send your enquiry through the <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>. Keep the garage's receiving instructions handy so we can discuss the full journey. More practical guides are available on the <Link href="/blog" className="text-primary font-semibold hover:opacity-80 transition-opacity">MH Recovery blog</Link>.</p>
</section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
