import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, BUSINESS } from '@/lib/siteConfig'
const title = "Broken Down on the Snake Pass (A57)? What to Do Between Sheffield and the Peaks"
const metaTitle = "Broken Down on the Snake Pass (A57)? What to Do"
const description = "Broken down on the Snake Pass? Safe stopping, poor phone signal, winter road checks and what to tell recovery when arranging a move back to Sheffield."
const path = "/blog/broken-down-on-the-snake-pass-a57"
const featuredImage = "/blog/broken-down-on-the-snake-pass-a57/broken-down-snake-pass-a57-featured.webp"
export const metadata: Metadata = {
  title: { absolute: metaTitle }, description,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle, description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name,
    locale: 'en_GB', type: 'article', publishedTime: '2026-11-26', modifiedTime: '2026-11-26',
    images: [{ url: featuredImage, width: 1200, height: 630, alt: "Car with hazard lights on in a lay-by on the Snake Pass" }],
  },
  twitter: { card: 'summary_large_image', title: metaTitle, description, images: [featuredImage] },
}
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
  image: `${SITE_URL}${featuredImage}`, datePublished: '2026-11-26', dateModified: '2026-11-26',
  author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
  publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
  url: `${SITE_URL}${path}`, inLanguage: 'en-GB',
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
    "q": "What should I do if my car breaks down on the Snake Pass?",
    "a": "Reach a suitable stopping place if safely possible. Warn traffic with hazards if obstructing the road, and call 999 first if anyone is in danger. Once safe, give the recovery operator your exact position."
  },
  {
    "q": "Is the Snake Pass closed in winter?",
    "a": "It can close because of winter conditions, but do not assume it is always closed or always open. Check Derbyshire County Council’s route information and follow current signs before travelling."
  },
  {
    "q": "What if I have no phone signal on the Snake Pass?",
    "a": "Try 999 in an emergency: another available network may connect the call. Otherwise, seek reception only from somewhere safe. Do not enter traffic or unfamiliar moorland to find a signal."
  },
  {
    "q": "Should I stay in my car on a moorland road?",
    "a": "It depends on whether you can leave safely and where you could wait. Do not step into traffic or unsafe ground. If you cannot leave safely and are in danger, call 999 and follow instructions."
  },
  {
    "q": "Can you recover my car from the A57 back to Sheffield?",
    "a": "Call MH Recovery Service Ltd with your exact location and chosen destination. The A57 is listed among our routes, but we must confirm access and whether we can undertake your particular collection."
  },
  {
    "q": "Is there a weight limit on the Snake Pass?",
    "a": "Derbyshire County Council’s page describes restrictions associated with landslip damage. Check its latest information and roadside signs. Tell the recovery operator your location so they can consider the restrictions affecting their vehicle."
  }
]
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}
export default function SnakePassBreakdownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>


        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image src={featuredImage} alt="Car with hazard lights on in a lay-by on the Snake Pass" fill preload sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">{title}</h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">{description}</p>
            </div>
          </div>
        </section>

<article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto">
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Losing power on the Snake Pass (A57) feels different from a car refusing to start outside your house. There may be a bend behind you, little room beside the road and no clear phone signal.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you break down, reach a proper stopping place if you safely can. Switch on your hazards if you are obstructing traffic. Do not push the car or stand in the carriageway to inspect it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call 999 first if anyone is in danger. Once safe, explain your exact position, what happened and whether the car is clear of traffic. You do not need to diagnose the fault before asking for help.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call MH Recovery Service Ltd to confirm whether we can reach your location and discuss where the car needs to go.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Broken down on the Snake Pass — what should you do first?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Put people before the vehicle. You can decide where the car should go after dealing with the immediate situation.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not need to diagnose the fault before asking for help. Start with where you are, whether the car is clear of traffic and whether anyone needs extra support.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If another person is making the call, agree who will speak to the operator. Give them the same location details rather than making separate bookings without telling each other.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Explain what happened in ordinary words: the engine stopped, a tyre went flat, or the car will not move. A description is enough; guessing the broken part can confuse the conversation.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For <Link href="https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link>, MH Recovery Service Ltd lists the A57 among its routes. Call to confirm whether we can reach your particular location. That does not mean every part of the Snake Pass is accessible for every job.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If police or another authority is already involved, tell the recovery operator. Pass on their instructions before agreeing collection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Make a short note of who you have spoken to and what was agreed. If someone else is helping you arrange recovery, share that information so a lost connection does not leave you both unsure what happens next.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Why is the Snake Pass trickier than other roads?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/broken-down-on-the-snake-pass-a57/moorland-road-winter-conditions.webp" alt="Winding moorland road in winter conditions near Sheffield" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Its exposed setting means the weather and the stopping place both deserve attention. Do not judge conditions there by what you left behind in Sheffield. <a href="https://reports.peakdistrict.gov.uk/sotpr/docs/adventure-&-exploration/transport-environment.html" className="text-primary font-semibold hover:opacity-80 transition-opacity">reports.peakdistrict.gov.uk</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Derbyshire County Council describes Snake Road as a high Peak District route between Glossop and Ladybower reservoir. Its information explains the effects of winter weather and landslips. Those are reasons to check the route before travelling, rather than assume a familiar journey will be straightforward. <a href="https://www.derbyshire.gov.uk/transport-roads/roads-traffic/landslips/snake-pass/a57-snake-pass.aspx" className="text-primary font-semibold hover:opacity-80 transition-opacity">Derbyshire County Council</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a breakdown call, “on the Snake Pass” is only the beginning. A bend, narrow section or restricted approach can matter as much as the fault itself. Explain what is around you, including anything that could affect reaching or loading the car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not promise the operator a wide, level space unless that is what you can actually see. “There is a lay-by, but I cannot judge how much room you need” is a useful answer.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Describe the stopping point separately from the route to it. The car may be outside the traffic lane while the approach is still difficult. Let the operator work out access rather than treating a nearby landmark as proof that collection is straightforward.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The A57 is not a motorway. Our <Link href="https://mhrecoveryserviceltd.co.uk/blog/broken-down-on-the-m1-near-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to breaking down on the M1 near Sheffield</Link> covers that different setting; do not transfer motorway stopping arrangements to a moorland road.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How do you stop safely on a narrow moorland road?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/broken-down-on-the-snake-pass-a57/driver-waiting-safely-verge-hi-vis.webp" alt="Driver waiting safely away from traffic after breaking down" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A proper lay-by or parking area is preferable to an uncertain verge, if the car can reach it safely. Do not drive on with a serious fault simply to find a more convenient collection point.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code’s breakdown guidance</a> says to seek a place of relative safety, warn traffic when obstructing the road and keep people away from the vehicle and moving traffic. Use sidelights in darkness or poor visibility if possible.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Leave on the side away from traffic only if it is safe. A verge can hide a ditch, slippery ground or a drop, so check before stepping out. Do not stand between the car and approaching vehicles.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep warm clothing within reach. Retrieve it only if you can do so safely; luggage is not worth entering traffic for. Explain cold, mobility difficulties or other concerns when you call.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not put out a warning triangle where placing or retrieving it would expose you to danger. A triangle is never worth walking into traffic for.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if you can’t get your car off the road?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call <strong>999 first if anyone is in danger</strong>. Explain that the car is obstructing the A57 and describe the position.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not push it, direct passing traffic or attempt a repair in the carriageway. If you cannot get out safely, keep your seat belt fastened and tell the emergency call handler. Follow their instructions for your situation.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Be clear about what you know and what you cannot assess. You might know the car is partly in the road without knowing whether a truck can pass. Do not move into traffic to measure the gap.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A confirmed recovery booking does not replace an emergency call. Tell the recovery company if your position becomes dangerous or the emergency services give you new instructions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car must remain temporarily, our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/leaving-a-broken-down-car-on-the-road-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">leaving a broken-down car on the road in Sheffield</Link> explains the separate parking questions. It does not give permission to leave a dangerous obstruction.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if there’s no phone signal?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Try <strong>999 if there is an emergency</strong>, even when your usual network is unavailable. Ofcom explains that an emergency call can connect through another available mobile network. That still requires a usable network signal; it is not a guarantee of connection anywhere. <a href="https://www.ofcom.org.uk/phones-and-broadband/vulnerable-customers/stay-connected-in-severe-weather" className="text-primary font-semibold hover:opacity-80 transition-opacity">ofcom.org.uk</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For an ordinary recovery enquiry, move to a safe spot with reception only if you can reach it without entering traffic or unsafe ground. Do not walk around a blind bend or head onto unfamiliar moorland looking for signal.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If another person stops safely, ask whether they can make a call and pass on your location. Do not step into the road to flag vehicles down.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before a future trip, save the recovery number and a map you can use offline. Keep your phone charged and a power bank available. <a href="https://www.ofcom.org.uk/phones-and-broadband/vulnerable-customers/stay-connected-in-severe-weather" className="text-primary font-semibold hover:opacity-80 transition-opacity">Ofcom’s severe-weather advice</a> also explains emergency calling and conserving battery power.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">When a call connects, give your position early. If it drops, the person answering should already know where you are. Tell them whether calls, texts or messages are reaching you; do not assume every channel works equally well.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Is the Snake Pass open? Checking before you travel</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the official information before setting off. This article is not a live road-status report.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Use <a href="https://www.derbyshire.gov.uk/transport-roads/roads-traffic/landslips/snake-pass/a57-snake-pass.aspx" className="text-primary font-semibold hover:opacity-80 transition-opacity">Derbyshire County Council’s A57 Snake Pass page</a> for the council’s information about the route, landslip works and restrictions. Check the dates of notices and follow signs on the road.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not assume a past reopening notice answers today’s question. Equally, an old photograph of snow does not tell you what is happening now. Look for information relevant to your journey.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The council explains that snow and ice can lead to closures. Its page also describes restrictions connected with landslip damage. Ask the recovery operator to consider current access and vehicle restrictions rather than guessing whether their vehicle can use the route. <a href="https://www.derbyshire.gov.uk/transport-roads/roads-traffic/landslips/snake-pass/a57-snake-pass.aspx" className="text-primary font-semibold hover:opacity-80 transition-opacity">Derbyshire County Council</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before a winter journey, have warm layers, water, a charged phone and any essential medication accessible. Think about what your passengers would need if the trip stopped unexpectedly.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell someone your intended route before leaving. Agree how you will update them if plans change. That is especially useful if they would otherwise worry about a missed call without knowing which road you chose.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If official advice means changing or postponing the journey, make that decision before setting out. Do not rely on a recovery booking to make an unsuitable route usable.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you tell the recovery company?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give the road, direction and precise stopping point first. Then describe the car and the help you need.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have these details ready where possible:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li><strong>Location:</strong> the A57, which direction you were travelling and your current stopping place.</li><li><strong>Reference point:</strong> a landmark you recognise, such as Ladybower reservoir, or a map location from your phone.</li><li><strong>Position:</strong> fully inside a lay-by, partly on the road, or somewhere else you can describe.</li><li><strong>Vehicle:</strong> make, model, registration and whether you have the keys.</li><li><strong>Condition:</strong> whether it starts, rolls or steers, and any damage you already know about.</li><li><strong>People:</strong> passenger numbers and any difficulty leaving the vehicle or keeping warm.</li><li><strong>Destination:</strong> the full address you would like the car taken to.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Say whether you were travelling towards Sheffield or Glossop, but do not guess if you are unsure. Mention the last place you definitely passed instead. Direction helps explain location; it is not a promise of coverage on either side.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you share a map pin, check that it marks the stopped car rather than where your phone is now. Explain any difference. That matters if someone has reached reception elsewhere and is making the call on your behalf.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give observations you already have. Do not release the brake, move the car or inspect underneath it just to answer a loading question.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a tyre problem, describe it when asking about <Link href="https://mhrecoveryserviceltd.co.uk/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">tyre damage assistance in Sheffield</Link>. For a starting problem on a slope, our <Link href="https://mhrecoveryserviceltd.co.uk/blog/jump-start-car-on-a-hill-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to jump starting on a Sheffield hill</Link> explains the questions to consider once safely parked.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How do you get your car back to Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/broken-down-on-the-snake-pass-a57/recovery-truck-moorland-road.webp" alt="Recovery truck collecting a broken-down car on a moorland road" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Agree the collection and destination before the move. Whether roadside help or recovery is suitable depends on the fault, access and conditions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not assume a car that starts again is ready to continue across the pass. Describe what happened and discuss the next step with the operator. A restart does not explain why it stopped.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the vehicle needs moving, ask about <Link href="https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link>. Give the full home or garage address. If you want a garage delivery, check that someone can accept the car and receive its keys.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a destination further away, discuss <Link href="https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long-distance recovery from Sheffield</Link>. Collection and delivery both need agreement. Do not assume a particular journey is available until it has been confirmed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask separately about passengers and onward travel. Tell the operator how many people are with you instead of assuming a vehicle booking includes transport for everyone.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before agreeing, ask for the quote and confirm the receiving arrangements. MH Recovery Service Ltd discusses the job before you book. Explain if the garage is closed, nobody has the keys or the delivery address is still undecided.</p>
</section>
</div></article>


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
                    <div className="text-on-surface-variant text-sm font-sans leading-relaxed">{q === 'Is there a weight limit on the Snake Pass?' ? (
                      <><a href="https://www.derbyshire.gov.uk/transport-roads/roads-traffic/landslips/snake-pass/a57-snake-pass.aspx" className="text-primary font-semibold hover:opacity-80 transition-opacity">Derbyshire County Council’s page</a>{a.slice('Derbyshire County Council’s page'.length)}</>
                    ) : a}</div>
                  </div>
                </details>))}
            </div>
          </div>
        </section>

<section className="py-10 md:py-14 px-4 md:px-6 bg-surface"><div className="max-w-3xl mx-auto"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need recovery on the A57?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd has a phone line open 24 hours a day, seven days a week. Call <strong><a href="tel:+447799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">07799 180009</a></strong> with your location, vehicle details and intended destination so we can confirm whether we can reach you.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We are based at <strong>Coupe Road, Sheffield S3 9DP</strong>. You can also use our <Link href="https://mhrecoveryserviceltd.co.uk/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link> for an enquiry once safe. If anyone is in danger, call <strong>999 first</strong>.</p>
        </div></section>
      </main>
      <Footer />
    </>
  )
}
