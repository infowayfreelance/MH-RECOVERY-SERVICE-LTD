import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, BUSINESS } from '@/lib/siteConfig'
const title = "Broken Down on the M1 Near Sheffield? What to Do, Step by Step"
const description = "Broken down on the M1 around Sheffield? Where to stop, how to stay safe, what to do in a live lane, who to call and how recovery to a garage or home works."
const path = "/blog/broken-down-on-the-m1-near-sheffield"
const featuredImage = "/broken-down-on-the-m1-near-sheffield-featured.webp"
export const metadata: Metadata = {
 title: "Broken Down on the M1 Near Sheffield? What to Do Next", description,
 alternates: { canonical: path },
 openGraph: { title: "Broken Down on the M1 Near Sheffield? What to Do Next", description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name, locale: 'en_GB', type: 'article', publishedTime: '2026-11-24', modifiedTime: '2026-11-24', images: [{ url: featuredImage, width: 1200, height: 630, alt: "Car stopped in a motorway emergency area with people waiting safely behind the barrier." }] },
 twitter: { card: 'summary_large_image', title: "Broken Down on the M1 Near Sheffield? What to Do Next", description, images: [featuredImage] },
}
const articleSchema = {
 '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
 image: `${SITE_URL}${featuredImage}`, datePublished: '2026-11-24', dateModified: '2026-11-24',
 author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
 publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
 mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` }, url: `${SITE_URL}${path}`, inLanguage: 'en-GB',
}
const breadcrumbSchema = {
 '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
 { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
 { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}${path}` },
 ],
}
const faqs = [
  {
    "q": "What should I do first if I break down on the M1?",
    "a": "Reach a place away from live traffic if safely possible. If you cannot leave safely, remain belted in, keep hazards on and call 999 for the police."
  },
  {
    "q": "Should I stay inside or get out?",
    "a": "Get out on the side away from traffic only when it is safe and possible. Otherwise, stay inside with seat belts fastened and call 999. Explain any difficulty leaving."
  },
  {
    "q": "What if there is no hard shoulder?",
    "a": "Reach an emergency area, services or an exit if you safely can. If stranded in a live lane, do not push the car or walk across traffic. Call 999."
  },
  {
    "q": "Can I put a warning triangle out?",
    "a": "No. Do not put a warning triangle on a motorway, including the hard shoulder. Keep yourself away from traffic and follow the emergency operator’s instructions."
  },
  {
    "q": "How do I explain my motorway location?",
    "a": "Give the M1, direction of travel and any junction or location-sign reference you know. Use information visible from safety; do not walk along the road looking for a marker."
  },
  {
    "q": "Can my car go home or to my own garage?",
    "a": "Discuss your chosen destination with the operator before booking. Confirm the full address, access and receiving arrangements. Ask what can be agreed for your particular journey."
  }
]
const faqSchema = {
 '@context': 'https://schema.org', '@type': 'FAQPage',
 mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}
export default function BrokenDownM1SheffieldPage() {
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
            <Image src="/broken-down-on-the-m1-near-sheffield-featured.webp" alt="Car stopped in a motorway emergency area with people waiting safely behind the barrier." fill priority fetchPriority="high" sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">Broken Down on the M1 Near Sheffield? What to Do, Step by Step</h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">Broken down on the M1 around Sheffield? Where to stop, how to stay safe, what to do in a live lane, who to call and how recovery to a garage or home works.</p>
            </div>
          </div>
        </section>

<article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto">
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A warning light appears, the car loses power, or a tyre suddenly feels wrong. On the M1 near Sheffield, it can be hard to think clearly while traffic keeps moving around you.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>Reach an exit, services or another place away from live traffic if you safely can. If you are stranded in a live lane and cannot get out safely, stay inside, keep seat belts and hazard lights on, and call 999 for the police.</strong></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The immediate job is protecting people. Choosing a garage and arranging recovery come afterwards.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Broken down on the M1? The two-line answer</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Get left and reach a place of relative safety if possible. If leaving the vehicle would put you in danger, remain belted in and call 999.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code’s breakdowns and incidents guidance</a> explains the motorway precautions. Never walk into a live lane, push the car or put out a warning triangle on the motorway.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not need to diagnose the fault before asking for help. Start by explaining where you are and whether the vehicle is clear of moving traffic.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Can you get off at the next exit or services?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car remains controllable and you can safely leave the motorway, take that opportunity. Do not keep travelling towards home simply because the engine has not stopped completely.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Services provide a stopping place away from the carriageway. An exit may also let you leave motorway traffic, but reaching either depends on what the vehicle can safely do.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A warning light, sudden vibration or loss of power needs attention. Do not stretch the journey because your preferred garage is nearby. Equally, do not stop abruptly in a running lane when you can safely reach somewhere better.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Your circumstances matter more than a familiar junction number. Tell the emergency operator what the vehicle is doing rather than trying to predict how much further it will travel.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Hard shoulder or emergency area: where should you stop?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/waiting-behind-motorway-barrier.webp" alt="Driver waiting safely behind the barrier after breaking down." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Use an emergency area or hard shoulder if you cannot leave the motorway and can reach one safely. Neither should be treated like an ordinary parking space.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A hard shoulder runs beside the carriageway. An emergency area is a separate refuge beside it, often identifiable by its orange surface and signs. Do not assume every stretch has a continuous hard shoulder.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Once stopped, the next question is whether everyone can leave safely. Where possible, exit on the side away from traffic and wait well away from the vehicle, behind a barrier where available.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the ground beyond the barrier for drops or other hazards. Keep children close. Do not stand where your car could be pushed into you if another vehicle strikes it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Follow <a href="https://nationalhighways.co.uk/safety/driving-on-our-roads/driving-on-motorways/" className="text-primary font-semibold hover:opacity-80 transition-opacity">National Highways’ motorway breakdown advice</a>. Do not return to the car simply because it is cold or raining, and do not attempt repairs beside passing traffic.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if you're stuck in a live lane?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot reach a place of relative safety or leave without entering danger, stay inside. Keep everyone’s seat belt fastened, switch on the hazard lights and call 999 immediately. Ask for the police.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the call handler that the vehicle is stopped in a live motorway lane. Give your location as clearly as you can and follow their instructions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not get out to warn approaching drivers, inspect the damage or push the car. Do not cross the motorway to reach a telephone.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a disability or another difficulty prevents you or a passenger from following the usual exit advice, explain that immediately. Do not attempt a dangerous exit because you think everyone must get behind a barrier.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A recovery booking does not replace this emergency call. The road situation needs managing before collecting the vehicle.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Who should you call, and in what order?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>Call 999 first if anyone is in danger.</strong> That includes being stranded where you cannot safely leave the vehicle.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you have reached a suitable stopping place and can safely use an emergency telephone, use it to contact National Highways. Its official motorway page also provides contact options for advice and assistance.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Then contact your breakdown provider or a recovery operator. If someone else has already arranged collection, say so before making another booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For <Link href="https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link>, tell MH Recovery Service Ltd that you are on the M1. Explain whether you are in services, an emergency area, on the hard shoulder or still in a live lane.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Be clear about any instructions the police or National Highways have given you. Do not assume a private operator has already received the same information.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How do you tell the recovery driver exactly where you are?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/motorway-marker-post-close-up.webp" alt="Blue motorway sign on a grass verge beside the carriageway." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give the motorway, direction of travel and the best location reference available. “On the M1 near Sheffield” is a starting point, but it may not identify the correct carriageway.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Useful details include:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Whether you were travelling northbound or southbound.</li><li>The last junction you passed, if you know it.</li><li>Letters and numbers on a driver location sign or marker post visible from safety.</li><li>Whether you are in an emergency area, services or on the hard shoulder.</li><li>Your vehicle’s make, model, registration and colour.</li><li>How many people are with you and any support needs.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A mapping app may help you describe your position. Share its information if requested, but do not walk along the verge or towards traffic to improve a location reading.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you are unsure about a junction or direction, say so. A clear uncertainty is more useful than a confident guess.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Describe the symptoms separately from the location. “The engine stopped and will not restart” is enough to begin the conversation; you do not need to name the failed part.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What happens when the recovery truck arrives?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/recovery-truck-loading-car-hard-shoulder.webp" alt="Recovery truck loading a broken-down car on a motorway hard shoulder." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Follow the operator’s instructions and any directions from police or traffic officers. The truck arriving is not a signal to walk back to the car immediately.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Explain anything that has changed since your call. That could include a tyre losing more air, smoke appearing or the vehicle being moved under official instructions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The operator needs to assess the car and collection position before loading. Tell them what you already know about steering, wheels and keys. Do not try moving the vehicle to demonstrate a fault.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a tyre problem, discuss <Link href="https://mhrecoveryserviceltd.co.uk/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">tyre damage assistance</Link>, but do not attempt a motorway wheel change yourself.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a collision caused the stop, explain the damage when asking about <Link href="https://mhrecoveryserviceltd.co.uk/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">accident recovery in Sheffield</Link>. Our <Link href="https://mhrecoveryserviceltd.co.uk/blog/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to what to do after an accident</Link> covers details and reporting once immediate safety has been dealt with.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask about passengers’ onward arrangements rather than assuming everyone can travel in the recovery vehicle.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car becomes driveable in an emergency area, do not leave without speaking to National Highways first. Follow its instructions for rejoining.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Where can your car be taken?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Discuss the destination before agreeing to the move. Home, a garage or another address may be options, subject to the collection and delivery arrangements.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our <Link href="https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link> and <Link href="https://mhrecoveryserviceltd.co.uk/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing service</Link> pages explain moves to agreed addresses. Give the full destination rather than just naming a garage.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check that the receiving place can accept a non-running car. Ask where it should be unloaded, who will receive the keys and whether the entrance will be open.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your usual repairer is further away, ask about <Link href="https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long-distance recovery from Sheffield</Link>. Do not assume your preferred destination is included until it has been discussed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our <Link href="https://mhrecoveryserviceltd.co.uk/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to getting your car towed to a garage</Link> explains those receiving arrangements. If the garage is closed, agree an alternative rather than sending the car towards a locked gate.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How can you lower the risk before a long M1 trip?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the vehicle before setting off and deal with known problems. Preparation cannot prevent every breakdown, but it gives you fewer avoidable issues to manage during the journey.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><a href="https://nationalhighways.co.uk/safety/driving-advice/how-to-check-your-vehicle/" className="text-primary font-semibold hover:opacity-80 transition-opacity">National Highways’ vehicle-check guidance</a> covers tyres, fuel, oil, screenwash and lights. Follow your handbook when checking fluid levels or tyre pressures.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Look for tyre damage and make sure pressures suit the vehicle and load. Arrange attention for a repeated warning light or starting problem rather than hoping motorway driving will cure it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Charge your phone and keep necessary medication, warm clothing and breakdown details accessible. Think about passengers who may need extra help if the journey is interrupted.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before leaving, tell another adult travelling with you where the assistance details are. If something happens, you should not have to search through old emails while trying to explain your location.
</p>
</section>
</div></article>{/* FAQ Section */}
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
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need recovery on the M1 near Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6" /><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>If anyone is in danger, call 999 first.</strong> Once safe, call <strong>MH Recovery Service Ltd on 07799 180009</strong> to discuss collection. Explain your location, vehicle and any instructions from the emergency services.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our phone line is open 24 hours a day, seven days a week. We are based on <strong>Coupe Road, Sheffield S3 9DP</strong>. You can also use our <Link href="https://mhrecoveryserviceltd.co.uk/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link> for an enquiry once the immediate situation is safe.</p></section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
