import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, BUSINESS } from '@/lib/siteConfig'
const title = "Can I Leave My Broken-Down Car on the Road in Sheffield? Your Questions Answered"
const metaTitle = "Can I Leave a Broken-Down Car on the Road? Sheffield Guide"
const description = "Car died outside your house or on a Sheffield street? How long it can stay, parking, tax and insurance rules, when it can be removed and how to move it."
const path = "/blog/leaving-a-broken-down-car-on-the-road-sheffield"
const featuredImage = "/blog/leaving-a-broken-down-car-on-the-road-sheffield/broken-down-car-on-the-road-sheffield-featured.webp"
export const metadata: Metadata = {
  title: { absolute: metaTitle }, description,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle, description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name,
    locale: 'en_GB', type: 'article', publishedTime: '2026-11-25', modifiedTime: '2026-11-25',
    images: [{ url: featuredImage, width: 1200, height: 630, alt: "Broken-down car parked on a steep terraced street in Sheffield." }],
  },
  twitter: { card: 'summary_large_image', title: metaTitle, description, images: [featuredImage] },
}
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
  image: `${SITE_URL}${featuredImage}`, datePublished: '2026-11-25', dateModified: '2026-11-25',
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
    "q": "How long can I leave a broken-down car outside my house?",
    "a": "There is no single national breakdown grace period. Check safety, obstruction, parking restrictions, tax and insurance. Arrange repair or collection promptly rather than relying on a set number of hours."
  },
  {
    "q": "Can I get a parking ticket if my car has broken down?",
    "a": "Yes, a breakdown does not automatically prevent a parking notice. Contact the authority, keep evidence and follow any challenge instructions. Cancellation is not guaranteed."
  },
  {
    "q": "Does a broken-down car on the road need tax and insurance?",
    "a": "Normally, yes. A mechanical fault does not remove those requirements. SORN applies to a vehicle kept off public roads, not one parked outside your house on the street."
  },
  {
    "q": "When does the council class a car as abandoned?",
    "a": "Sheffield City Council uses an authorised officer’s assessment. Condition and circumstances matter. A breakdown alone does not automatically make a car abandoned."
  },
  {
    "q": "Can you recover a car that has broken down on a steep Sheffield street?",
    "a": "Often, yes, but explain the slope, access and vehicle condition first. The operator needs those details to confirm how the car can be reached and loaded."
  },
  {
    "q": "Can I leave the car and have it collected without me there?",
    "a": "Ask the recovery provider before leaving. Collection, keys, access and delivery arrangements must be agreed. Do not assume the driver can collect an unattended car without a handover plan."
  }
]
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}
export default function LeavingBrokenDownCarSheffieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image src={featuredImage} alt="Broken-down car parked on a steep terraced street in Sheffield." fill preload sizes="100vw" className="object-cover" />
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
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Your car has stopped working outside the house, halfway along a terraced street, or just before you were meant to leave for work. Can you leave it there while you arrange a repair?</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">There is no single national “hours allowed” rule you can rely on after a breakdown. Whether the car can stay depends on where it is, whether it creates danger or an obstruction, the parking restrictions, and its tax and insurance position. A breakdown does not give you permission to ignore those rules.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If anyone is in immediate danger, call <strong>999 first</strong>. Otherwise, check the location and arrange help promptly rather than guessing how long you have.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This guide explains what to check in Sheffield. It is practical information, not legal advice.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Can I leave my broken-down car on the road?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Sometimes it can remain temporarily while you arrange help, but do not assume that every roadside space is suitable.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Start with three questions:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Is the car somewhere safe, without blocking other people?</li><li>Do the parking signs and restrictions allow it to be there?</li><li>Are its tax and insurance arrangements in order?</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Being outside your own house does not answer those questions. Check the actual space, just as you would if you had parked on an unfamiliar street.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You may be waiting for a garage to open or for someone to confirm a collection. Keep a record of those arrangements. Having a clear plan is more useful than leaving the car and hoping nobody notices.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot tell whether it is safe or permitted to stay, ask the relevant authority and explain the breakdown. Do not borrow a time limit from another council’s website: local policies and enforcement can differ.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Is the car somewhere dangerous or in the way?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Deal with danger before worrying about parking paperwork.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Look at the situation from a safe place. Is traffic swerving around the car? Is it blocking a crossing, access or a narrow part of the road? Could another driver struggle to see it?</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The <a href="https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code’s waiting and parking rules</a> prohibit leaving a vehicle in a dangerous position or causing an unnecessary obstruction.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not push it along a live road or stand in the carriageway to guide traffic. Keep yourself and passengers away from moving vehicles. Use hazard lights if the breakdown is causing an obstruction.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If anyone is in immediate danger, call <strong>999</strong>. On a motorway, do not put out a warning triangle. If you cannot reach a place of relative safety or leave the car safely, keep your seat belt and hazard lights on and call 999. Follow the <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" className="text-primary font-semibold hover:opacity-80 transition-opacity">Highway Code’s breakdown guidance</a>.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a vehicle that needs moving after an ordinary roadside breakdown, explain the situation when asking about <Link href="https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link>. Say whether it is obstructing the road, rather than describing only the mechanical fault.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What are the rules for leaving it overnight?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/leaving-a-broken-down-car-on-the-road-sheffield/car-parked-at-night-sidelights.webp" alt="Car parked overnight at the kerb with parking lights on." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Darkness does not make an unsuitable spot suitable. Before leaving, check the signs, position and lighting requirements.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Under Highway Code rules 248–250, roadside parking at night must face the traffic flow unless you are in a recognised parking space. Parking lights are required on roads or lay-bys with a speed limit above 30 mph.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">On roads of 30 mph or less, an ordinary car may qualify to park without lights under the stated conditions. These include a recognised parking place, or parking close to the kerb, facing the traffic flow and at least 10 metres from a junction. Check the full rules for your circumstances. <a href="https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the battery is flat and required lights cannot work, tell the recovery operator. Do not assume the lighting requirement disappears because the car has failed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before going indoors, note exactly where the car is and what you have arranged. Keep your phone available for collection updates. If the position worries you, explain that concern when seeking help.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Does it still need tax and insurance while it’s parked?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Yes, a breakdown does not normally remove those responsibilities.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">DVLA says vehicles used or kept on a public road must be taxed. Not driving the car is different from taking it off the public road. <a href="https://www.gov.uk/government/publications/vehicle-enforcement-policy/vehicle-enforcement-policy" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Insurance also matters while the vehicle is unused. GOV.UK explains that the off-road insurance exception applies when the vehicle is kept off the road and declared SORN. Do not cancel cover simply because the engine will not start. <a href="https://www.gov.uk/vehicle-insurance/uninsured-vehicles" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A <a href="https://www.gov.uk/sorn-statutory-off-road-notification" className="text-primary font-semibold hover:opacity-80 transition-opacity">Statutory Off Road Notification, or SORN</a>, is for a vehicle kept off public roads, such as on a drive, in a garage or on private land. It does not turn the roadside outside your house into an off-road space. <a href="https://www.gov.uk/sorn-statutory-off-road-notification/overview" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you want to take the car off the road while deciding whether to repair it, arrange a suitable place first. Check that you have permission to use it and that the vehicle can be delivered there.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car is already on your driveway, explain that when booking. A steep drive, locked gate or limited room can affect collection.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What about yellow lines, permit bays and bus lanes?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not treat “broken down” as a parking permit.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the nearby signs, bay conditions and any zone-entry signs. Yellow lines, permit bays and bus lanes can have different restrictions. Double yellow lines generally prohibit waiting at any time. <a href="https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car has failed in a restricted place, contact the relevant parking authority promptly. Explain where it is, what happened and what you are doing to move it. Ask what information they need.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep evidence, such as:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>The time and location of the breakdown.</li><li>Photographs taken from a safe place.</li><li>Your recovery booking or messages.</li><li>A garage report or repair paperwork, if available.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">That evidence may help explain the circumstances if you receive a parking notice. It does not guarantee cancellation. Follow the instructions and deadlines on any notice rather than assuming the breakdown settles it.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A note in the windscreen can explain what happened, but do not rely on it as permission to stay.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car stopped in a car park instead, check its displayed terms and contact the operator. Our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery in Sheffield</Link> explains the access details worth passing on.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">When could the council treat it as abandoned?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A broken-down car is not automatically an abandoned car. Equally, knowing who owns it does not settle every parking or removal issue.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><a href="https://www.sheffield.gov.uk/pollution-and-nuisance/vehicles/abandoned-untaxed-vehicles" className="text-primary font-semibold hover:opacity-80 transition-opacity">Sheffield City Council’s abandoned-vehicle guidance</a> says an authorised officer assesses whether a vehicle is abandoned. Signs can include missing windows or number plates, flat or missing tyres, significant damage and a neglected condition.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The council also explains that a taxed vehicle remaining stationary is not generally considered abandoned. Untaxed or SORN vehicles on public roads are a separate matter for DVLA, whether or not they appear abandoned.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not turn abandoned-vehicle reporting guidance into a promise about how long you can leave your car. Danger, obstruction and parking restrictions are separate issues.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><a href="https://www.legislation.gov.uk/ukpga/1984/27/section/99" className="text-primary font-semibold hover:opacity-80 transition-opacity">Section 99 of the Road Traffic Regulation Act 1984</a> provides for regulations covering removal in several circumstances, including breakdowns, unlawful parking, obstruction, danger and abandonment. Removal is not limited to cars judged abandoned. <a href="https://www.legislation.gov.uk/ukpga/1984/27/part/VIII/data.xht" className="text-primary font-semibold hover:opacity-80 transition-opacity">legislation.gov.uk</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you receive a notice or contact about the car, respond promptly. Explain the repair or collection plan and ask what action is required. Do not assume that a future garage booking prevents enforcement.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if it’s on a steep street or a tight terraced road?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/leaving-a-broken-down-car-on-the-road-sheffield/wheels-turned-to-kerb-on-hill.webp" alt="Front wheel turned towards the kerb on a steep hill." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the operator about the hill and the available space before collection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Useful details include which way the car faces, whether vehicles are parked closely around it, and whether the steering, brakes or wheels are locked. Photographs from the pavement can help you explain the location without stepping into traffic.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For parking on hills, Highway Code rule 252 says to apply the handbrake firmly. It advises wheels away from the kerb uphill and towards it downhill, with the appropriate gear selected; an automatic should be in Park. Those are parking precautions, not instructions to reposition an unsafe vehicle. <a href="https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252" className="text-primary font-semibold hover:opacity-80 transition-opacity">GOV.UK</a></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the brakes or steering have failed, do not release anything to test whether the car will roll. Explain the fault and let the operator plan the move.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not gather neighbours to push a non-runner down a hill. Tell the recovery firm about the slope, surface and access instead.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the keys are missing or the steering is locked, mention that too. Our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys</Link> explains why those details matter.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How do I get it moved to a garage or home?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/leaving-a-broken-down-car-on-the-road-sheffield/car-loaded-on-recovery-truck-terraced-street.webp" alt="Car being loaded onto a recovery truck on a Sheffield street." fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Start by deciding where it should go. Ring the garage before booking a tow: will they accept the car, where should it be left, and who will take the keys?</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you are taking it home, check that the intended space is available. Moving it from one unsuitable roadside position to another leaves you with the same problem.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have these details ready for the recovery call:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Collection address, postcode and exact parking position.</li><li>Make, model and registration.</li><li>What happened when the car stopped working.</li><li>Whether it starts, rolls, steers and brakes.</li><li>Whether you have the keys.</li><li>Any restrictions, slopes or access problems.</li><li>Destination address and handover arrangements.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not need to diagnose the fault. Describe what you noticed and avoid trying to move the car just to answer a question.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a flat battery seems possible, ask about <Link href="https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">jump starts in Sheffield</Link>. Explain the symptoms; do not assume a jump start will solve every non-starting car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a garage delivery, our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">getting your car towed to a garage in Sheffield</Link> covers collection and drop-off arrangements.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd can discuss <Link href="https://mhrecoveryserviceltd.co.uk/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield</Link>, give you a quote and check the job details before you agree.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot attend collection, arrange that in advance. Ask how the keys will be handed over, who will receive the car and how you will be contacted. Never assume an unattended collection is agreed until the operator confirms it.</p>
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
                    <div className="text-on-surface-variant text-sm font-sans leading-relaxed">{a}</div>
                  </div>
                </details>))}
            </div>
          </div>
        </section>

<section className="py-10 md:py-14 px-4 md:px-6 bg-surface"><div className="max-w-3xl mx-auto"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need your car moved in Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd provides <Link href="https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link> and across South Yorkshire, with a phone line open 24 hours a day, seven days a week.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We are based at <strong>Coupe Road, Sheffield S3 9DP</strong>.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call <strong><a href="tel:+447799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">07799 180009</a></strong> or use our <Link href="https://mhrecoveryserviceltd.co.uk/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>. Tell us where the car is, what has happened and where it needs to go, so we can discuss the move.</p>
        </div></section>
      </main>
      <Footer />
    </>
  )
}
