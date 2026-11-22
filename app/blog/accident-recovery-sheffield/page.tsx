import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL, BUSINESS } from '@/lib/siteConfig';
const title = "Been in a Car Accident in Sheffield? What to Do Next, and How Recovery Usually Works";
const description = "What to do after a car accident in Sheffield: safety first, which details to exchange, when to call the police, and how vehicle recovery usually works.";
const path = "/blog/accident-recovery-sheffield";
const featuredImage = "/blog-accident-recovery-sheffield-featured.webp";
export const metadata: Metadata = {
    title: "Accident Recovery in Sheffield: What to Do Next", description,
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
    url: `${SITE_URL}${path}`, image: `${SITE_URL}${featuredImage}`,
    dateModified: '2026-11-23',
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
};
const faqs = [
  {
    "q": "What should I do first after a car accident in Sheffield?",
    "a": "Put safety first. Stop safely, use your hazard lights and check everyone. Call 999 for immediate danger or serious injury. Once it is safe, exchange details and consider how to move the car."
  },
  {
    "q": "Do I need to report a small collision to the police?",
    "a": "It depends on the circumstances. South Yorkshire Police requires a report if details could not be exchanged, anyone was injured or you suspect a driving offence. Check its guidance or call 101 if unsure."
  },
  {
    "q": "What information should I exchange with the other driver?",
    "a": "Exchange names, addresses and registrations, and provide insurance details if requested. Save contact numbers too. Make a note of the location and any witnesses, without putting yourself near moving traffic to gather information."
  },
  {
    "q": "Can I drive away because the car still starts?",
    "a": "A running engine does not prove the car is roadworthy. Damage to wheels, steering, brakes or other parts may make driving unsafe. If you have doubts, arrange an assessment or recovery rather than testing it on the road."
  },
  {
    "q": "Should my insurer book recovery or can I call someone myself?",
    "a": "Ask your insurer what your policy covers and whether it is arranging collection. You can also call a local operator. Tell each party about any existing arrangements and check the position before making a separate booking."
  },
  {
    "q": "Who will pay for recovering the car?",
    "a": "That depends on cover, liability and the arrangements you agree. Ask your insurer about your own situation. A recovery booking does not establish fault or guarantee that another person or insurer will meet the bill."
  },
  {
    "q": "Can MH Recovery Service Ltd help after a Sheffield collision?",
    "a": "Yes. Contact MH Recovery Service Ltd about accident recovery in Sheffield and South Yorkshire. Explain the location, visible damage, access and destination. Say if you do not know whether the car will roll or steer."
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
export default function AccidentRecoverySheffieldPage() {
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
            <Image alt="Hatchback with mild front bumper damage parked safely beside a Sheffield street" className="object-cover" src="/blog-accident-recovery-sheffield-featured.webp" fill priority fetchPriority="high" sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">
                Been in a Car Accident in Sheffield? What to Do Next, and How Recovery Usually Works
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">
                What to do after a car accident in Sheffield: safety first, which details to exchange, when to call the police, and how vehicle recovery usually works.
              </p>
            </div>
          </div>
        </section>

<article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto">
<p className="text-on-surface-variant text-sm font-sans mb-6">Last updated: <time dateTime="2026-11-23">23 November 2026</time></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A collision can leave you standing beside a damaged car with several decisions to make at once. You may need to ring someone at home, speak to the other driver and work out whether the car can move.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This guide to accident recovery in Sheffield puts those jobs in order. Start with people and traffic, then record what happened. Once the immediate danger has passed, you can decide who to call and where the vehicle should go.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you do first after a collision?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Stop safely, check everyone and get emergency help where needed. Recovery comes after those first steps, even if the car is blocking your plans for the rest of the day.</p>
<ol className="list-decimal pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Stop as soon as it is safe. Switch off the engine and turn on the hazard lights.</li><li>Check yourself and your passengers. Call 999 for serious injury, immediate danger, a suspected serious offence or a blocked or dangerously obstructed road.</li><li>Keep away from moving traffic. Follow the emergency services' instructions if they are there.</li><li>Exchange the necessary details when you can do that safely. Make notes rather than relying on memory.</li><li>Decide how to deal with the car only after people are safe. Contact your insurer or a recovery operator if it cannot be driven.</li></ol>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You may hear someone call the incident an RTC. That means road traffic collision. You do not need to know that term to explain what has happened when you phone for help.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A useful starting point is the <a href="https://www.southyorkshire.police.uk/advice/advice-and-information/rs/road-safety/collisions/" className="text-primary font-semibold hover:opacity-80 transition-opacity">South Yorkshire Police collision guidance</a>. This article offers practical guidance, not legal or insurance advice. The police and emergency services take priority over any checklist you read here.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Where should you wait while help is coming?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-accident-scene-stay-safe.webp" alt="Safe position away from traffic beside a Sheffield accident scene" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Wait somewhere away from traffic if you can reach it safely. A car stopped after a collision can still be struck by another vehicle, so standing beside its bumper does not make you safe.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">On an ordinary Sheffield street, look for a pavement or another place clear of passing vehicles. Do not stand between the damaged cars. Keep children with you and avoid gathering a group around the damage.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">On a motorway or other high-speed road, the <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code's incident guidance</a> explains what to do. If safe to leave, use the side away from traffic and get well away, behind a barrier where there is one.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot reach safety or leave safely on a motorway, keep your seat belt and hazard lights on and call 999 for the police. Do not step into a live lane to try to make the situation better.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not move an injured person unless they face immediate danger. Describe the situation to the emergency call handler and follow their instructions. Avoid trying to inspect underneath the car or collect belongings while traffic is passing close by.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Never put a warning triangle on a motorway. On other roads, only use one if you can do so safely. No photograph, broken trim or dropped bag is worth walking into traffic for.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What information should you save before you leave?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-accident-details-and-photos.webp" alt="Recording vehicle details and photographs after a collision" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Make one clear record of the people, vehicles and location. It is easier to deal with the next call when those details are together, rather than scattered across messages and half-remembered conversations.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The <a href="https://www.mib.org.uk/learn-about-insurance/what-to-do-after-an-accident/" className="text-primary font-semibold hover:opacity-80 transition-opacity">Motor Insurers' Bureau advice after an accident</a> covers exchanging information and recording evidence. Note names, addresses, contact numbers, registrations and insurance details. Ask witnesses whether they are willing to give you a contact number.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If safe, photograph the damage and the wider scene. Keep a note of the date, time and place. Speak factually; do not guess what caused the crash or agree responsibility at the roadside.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For your own record, separate what you saw from what someone told you. For example, record that a wheel appears pushed backwards rather than trying to name a damaged part. You can pass on another person's account without treating it as your own observation.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you have several photos, keep the originals together. Give your insurer the information it asks for and save any reference numbers with your notes. You should not have to recreate the whole conversation each time someone calls back.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If another driver leaves or refuses to give details, call 101 while still at the scene, as the police advise. Record whatever you can safely see. Do not follow them or put yourself at risk trying to get a better photograph.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Does every bump need a police report?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Not every collision needs reporting, but certain circumstances do. South Yorkshire Police says a report is required if details could not be exchanged, someone was injured or you suspect the other person committed a driving offence.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The same guidance says no report is needed where details have been exchanged, nobody was injured and there are no allegations of driving offences. If your situation does not fit neatly, check the official guidance or call 101.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Use 999 for an emergency rather than waiting to complete an online form. For a non-emergency report, follow the reporting route on the police website. Keep your submission and reference number for your records.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Telling a recovery operator what happened does not replace reporting to the police or informing your insurer. These are separate conversations with different purposes. The recovery call concerns moving the vehicle; it does not settle your reporting duties.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The MIB also advises contacting your insurer promptly, including when you do not intend to claim. Ask what information it needs from you and what you should do next under your policy.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Can you drive it home if the engine still runs?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">An engine starting does not tell you whether the whole car is safe. After a collision, damaged steering, wheels, brakes or loose bodywork can make a short trip a poor choice.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not attempt a test drive to see whether something is wrong. If you already know a tyre is damaged, a wheel is out of position, fluid is escaping or a panel is hanging loose, explain that when you call.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Other concerns include deployed airbags, damaged lights, poor visibility through the windscreen or controls that no longer feel normal. A photograph or a running engine cannot prove roadworthiness. If you are unsure, seek a proper assessment and arrange recovery instead of guessing.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">accident recovery in Sheffield service</Link> page explains how to ask for help moving a collision-damaged vehicle. Describe the damage in everyday language. You do not need a diagnosis before making the call.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car is already parked somewhere safe but needs taking elsewhere, see <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield</Link>. Give the collection point and proposed destination so the operator can discuss the actual move.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A collision in a multi-storey brings another question: can the operator reach the car? Tell them about the entrance, level and tight turns. Our <Link href="/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery guide</Link> covers those access details without assuming every location is reachable.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the keys have gone missing or are locked inside, mention that before collection. The <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to car recovery without keys</Link> explains why the operator needs to know. Do not force the car to move just to answer a question.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you tell the recovery operator?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give the operator enough information to plan collection without asking you to take risks. Start with where you are and whether emergency services are controlling the scene.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A simple call note can include:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Collection: the street, postcode or nearby landmark, plus which entrance reaches the car.</li><li>Vehicle: make, model and registration, with any damage you can see from safety.</li><li>Movement: whether you know it will roll and steer, and whether the keys are available.</li><li>Access: surrounding vehicles, a narrow approach or any restrictions you already know about.</li><li>Destination: the full address, who will receive it and whether that place is open.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">It is fine to say you do not know whether the wheels turn. Explain what you can see and leave the inspection to the operator. Do not release the handbrake or push a damaged car to find out.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Agree the destination before the vehicle leaves. If your insurer names a garage or another receiving address, pass that on. If you want it taken home, discuss access there as well as at the collection point.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a garage drop-off, ask who will accept the keys. A workshop name alone may leave the driver looking for the right entrance or person. Have a contact ready if the receiving business needs to explain where the vehicle should go.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How does collection usually work?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-accident-flatbed-recovery-sheffield.webp" alt="Damaged car being loaded onto a flatbed recovery vehicle in Sheffield" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The operator assesses the car and the space around it before choosing a loading method. The damage, wheel position and available access all matter. Two cars with similar-looking bumper damage may need different handling.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A flatbed carries the vehicle on its platform. This can suit collision damage where relying on the car's own wheels would be unsuitable. It is not a promise that one method works for every damaged vehicle or collection point.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep clear while the operator loads. Let them manage the equipment and tell you where to stand. If the police or traffic officers still control the scene, their directions remain important throughout collection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Take necessary belongings only when access is safe and permitted. Think about house keys, medicines, work items and anything you need that evening. Ask before returning to the vehicle once loading has started.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before leaving, confirm where the car is going and how you will receive an update. Do not assume you can travel in the recovery vehicle; ask about your own onward arrangements separately.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery service</Link> covers moving a car that cannot be driven. If a mechanical fault caused the stop without a collision, the <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery page</Link> may better match what has happened.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Should you call your insurer or arrange recovery yourself?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Start with your insurer where practical, especially if you want to understand your cover before booking. You can also speak to a local recovery firm. Explain if another operator is already involved so the arrangements stay clear.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask your insurer whether it is arranging collection, whether it needs to approve a destination and what your policy covers. If you make your own booking, ask how that affects any claim. This guide cannot answer those policy questions for you.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not treat a roadside opinion about blame as confirmation that someone else will pay. Recovery, repair and storage arrangements can involve different decisions. Ask who you are booking with, what you are agreeing to and what records to keep.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">No article can set storage terms for a vehicle it has not assessed or decide how long it will remain somewhere. Ask the receiving garage or operator about those arrangements directly. Keep their answers alongside your insurer's instructions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If accounts differ between people involved, record each conversation and ask the relevant organisation to clarify its own position. Moving the car does not, by itself, resolve responsibility for the collision or the final insurance outcome.</p>
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
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need help moving the car in Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Once everyone is safe, call MH Recovery Service Ltd to discuss moving your damaged car. Have the collection location and a possible destination ready. Tell us about anything you cannot check safely, rather than trying to find out yourself.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We provide vehicle recovery in Sheffield and South Yorkshire from Coupe Road, Sheffield S3 9DP. Call <strong>07799 180009</strong> to discuss the job. Our phone line is open 24/7.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Prefer to send the details? Use our <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>. Keep following any police instructions while you arrange collection, and ask your insurer about cover and the next steps for your claim.</p>
</section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
