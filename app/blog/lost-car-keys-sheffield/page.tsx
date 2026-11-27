import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, BUSINESS } from '@/lib/siteConfig'
const title = "Lost Your Car Keys in Sheffield? Your Next Steps"
const metaTitle = "Lost Car Keys in Sheffield: What to Do Next"
const description = "Lost car keys in Sheffield? Check your spare and cover. A locksmith or dealer makes new keys; MH Recovery Service Ltd helps with entry and recovery."
const path = "/blog/lost-car-keys-sheffield"
const featuredImage = "/blog/lost-car-keys-sheffield/lost-car-keys-sheffield-featured.webp"
export const metadata: Metadata = {
  title: { absolute: metaTitle }, description,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle, description, url: `${SITE_URL}${path}`, siteName: BUSINESS.name,
    locale: 'en_GB', type: 'article', publishedTime: '2026-11-27', modifiedTime: '2026-11-27',
    images: [{ url: featuredImage, width: 1200, height: 630, alt: "Driver realising the car keys are missing" }],
  },
  twitter: { card: 'summary_large_image', title: metaTitle, description, images: [featuredImage] },
}
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
  image: `${SITE_URL}${featuredImage}`, datePublished: '2026-11-27', dateModified: '2026-11-27',
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
    "q": "What should I do first if I lose my car keys in Sheffield?",
    "a": "Get somewhere safe, check for a spare and look at your key cover. Then decide whether you need entry, a replacement key or recovery. Call 999 first if anyone is in danger."
  },
  {
    "q": "Can MH Recovery Service Ltd cut or programme a replacement key?",
    "a": "No. An auto locksmith or main dealer handles replacement keys. MH Recovery Service Ltd provides vehicle entry assistance and recovery; neither service includes key cutting, copying or programming."
  },
  {
    "q": "Can you get me into the car if the keys are locked inside?",
    "a": "We provide vehicle entry assistance for locked-in keys. Call with the make, model, year and location, and explain whether the doors and windows are closed. We will discuss the next step and required documents."
  },
  {
    "q": "Should I call a locksmith or a recovery service?",
    "a": "Call a locksmith or dealer for a replacement key. Ask about entry assistance if the keys are locked inside. Discuss recovery when the vehicle needs moving before the key problem can be resolved."
  },
  {
    "q": "What if I lost my keys at Meadowhall or in a car park?",
    "a": "Check for a spare and ask whether keys have been handed in. Give the operator the entrance, parking level and exact vehicle position. Describe any access restrictions without assuming collection is automatically possible."
  },
  {
    "q": "Will recovery include a new key?",
    "a": "No. Recovery moves the car to the destination agreed when booking. Arrange replacement keys separately with an auto locksmith or main dealer, and confirm the receiving arrangements before sending the car there."
  }
]
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}
export default function LostCarKeysSheffieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>



        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image src={featuredImage} alt="Driver realising the car keys are missing" fill preload sizes="100vw" className="object-cover" />
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
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You reach the car, check your pockets and realise the keys are missing. Perhaps they are on the seat behind a locked door. Perhaps you last saw them somewhere between the shops and the car park.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you have lost keys in Sheffield, start by checking for a spare and whether your insurance or breakdown policy includes key help. For a replacement key, contact an auto locksmith or your vehicle’s main dealer.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd can help with vehicle entry when keys are locked inside, or discuss recovery if the car needs moving. We do not cut, copy or programme keys. Decide which job you need before booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If anyone is in danger, call <strong>999 first</strong>. Do not search for keys in a live lane or force a door beside traffic.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Short answer: your next steps</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">First make sure you are safe, then work out whether you need the keys brought to you, access to the car, a replacement key or vehicle recovery.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check the pockets, bag compartments and places you can search safely. If you recently visited somewhere, ask its staff whether anyone has handed keys in. Do not keep retracing your route if that takes you into traffic or somewhere unsafe.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether someone you trust can bring the spare. If that is not an option, check your cover before arranging paid help. Then describe the actual problem when you call, rather than simply asking for “lost-key assistance”.</p>
<div className="overflow-x-auto mb-6"><table className="w-full text-left text-sm font-sans leading-relaxed text-on-surface-variant"><thead><tr><th scope="col" className="p-3 border-b border-outline/20 text-on-surface font-bold">Your situation</th><th scope="col" className="p-3 border-b border-outline/20 text-on-surface font-bold">The next conversation</th></tr></thead><tbody><tr><td className="p-3 border-b border-outline/20 align-top">A usable spare is available</td><td className="p-3 border-b border-outline/20 align-top">Ask whether someone can bring it safely.</td></tr><tr><td className="p-3 border-b border-outline/20 align-top">The keys are locked inside</td><td className="p-3 border-b border-outline/20 align-top">Ask MH Recovery Service Ltd about vehicle entry assistance.</td></tr><tr><td className="p-3 border-b border-outline/20 align-top">All keys are missing or damaged</td><td className="p-3 border-b border-outline/20 align-top">Contact an auto locksmith or main dealer about replacement keys.</td></tr><tr><td className="p-3 border-b border-outline/20 align-top">The car needs moving before the key problem is sorted</td><td className="p-3 border-b border-outline/20 align-top">Discuss recovery and an agreed destination.</td></tr><tr><td className="p-3 border-b border-outline/20 align-top">You suspect the keys were stolen</td><td className="p-3 border-b border-outline/20 align-top">Contact the police and discuss security with a locksmith or dealer.</td></tr></tbody></table></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">These may be separate jobs. Getting into the cabin does not create a new key, and moving the car does not replace one. Ask what the proposed help includes before agreeing.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the keys turn up after you have arranged help, tell the provider straight away. Explain what has changed and confirm the next step, rather than assuming the booking has cancelled itself or that somebody else has passed the message on.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Lost, locked-in or not working: what’s the difference?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/lost-car-keys-sheffield/keys-locked-inside-car.webp" alt="Car keys locked inside a parked car" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The difference is whether the key is missing, visible inside the car or still with you but failing to work. That changes the help you should ask for.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>Lost keys:</strong> you cannot account for them. A spare or replacement-key enquiry comes first unless the vehicle needs moving for another reason.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>Locked-in keys:</strong> you know where they are, but cannot reach them. Tell the operator whether all doors and windows are fully closed, and where you can see the keys.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><strong>Non-working keys:</strong> you still have the key or fob, but the car does not respond as expected. Describe whether it will unlock, whether the key blade turns and whether the car starts. Do not force the lock to demonstrate the problem.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check your handbook for instructions specific to your vehicle. Do not assume a method shown for somebody else’s car applies to yours.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you also believe the car has a flat battery, explain both problems when asking about <Link href="https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">jump starts in Sheffield</Link>. A jump start is not a replacement for a lost or damaged key.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the key is present but the car has stopped working, our <Link href="https://mhrecoveryserviceltd.co.uk/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link> page explains the wider assistance. Tell the operator what you have observed without guessing the fault.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Check for a spare and for key cover</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/lost-car-keys-sheffield/spare-car-key-on-hook.webp" alt="Spare car key kept at home" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A usable spare may solve the immediate problem. Checking your policy can also help you avoid booking assistance before you understand what your cover provides.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">Can someone bring the spare?</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check that the person bringing it has the correct key and knows exactly where you are. Give them the car park entrance or street position rather than only a shopping centre name.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you are relying on someone else, keep them updated about any recovery booking. Otherwise, they could arrive with the spare after you have already arranged to move the car elsewhere.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not leave a safe place to meet them beside moving traffic. Agree a meeting point that does not require either of you to stop somewhere unsuitable.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Once the immediate problem is sorted, think about where the spare belongs. <a href="https://www.southyorkshire.police.uk/cp/crime-prevention/keeping-vehicles-safe/preventing-car-vehicle-theft" className="text-primary font-semibold hover:opacity-80 transition-opacity">South Yorkshire Police’s vehicle-theft advice</a> recommends keeping keys out of view at home and away from the front door.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">What should you ask your insurer or breakdown provider?</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether your particular policy includes help for the situation you describe. Do not assume that an insurance policy or breakdown membership automatically includes replacement keys.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Useful questions are:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Does the policy cover lost keys, stolen keys or keys locked inside?</li><li>Does it include entry, replacement keys, recovery or only certain help?</li><li>Must you contact the provider before making your own arrangements?</li><li>What documents or information will they need from you?</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Write down the answer and who is arranging the next step. If a provider has already booked somebody, tell MH Recovery Service Ltd before arranging another job.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This guide cannot tell you what your policy covers. Use the actual policy wording and the provider’s answer, rather than an assumption based on another driver’s experience.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">When should you call a locksmith or dealer?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call an auto locksmith or main dealer when you need a replacement key. MH Recovery Service Ltd does not provide key cutting, copying or programming.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the provider whether every key is missing, one has been damaged or a working spare remains. Have the registration, make, model and year ready so they can discuss the vehicle you actually have.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask which parts of the replacement-key job the quote covers: supplying the key, making it work with the vehicle and dealing with the missing key. Discuss those with the locksmith or dealer rather than treating them as extras included in recovery.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether they need access to the car and whether it must be brought to them. Do not arrange recovery to a dealer until you have confirmed that it can receive the vehicle and deal with your key enquiry.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the agreed destination is further away, ask about <Link href="https://mhrecoveryserviceltd.co.uk/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long-distance recovery from Sheffield</Link>. Give the receiving address so the journey can be discussed. Do not assume every destination is covered.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">What documents should you have ready?</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask the locksmith or dealer what identification and vehicle documents they require before making a journey. Explain if those documents are locked inside the car, rather than assuming you cannot proceed or that no checks will be needed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For entry or collection by MH Recovery Service Ltd, we explain the documents we need when you call. Tell us who owns the vehicle and whether somebody else will be present for the handover.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">What if the keys may have been stolen?</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Treat suspected theft as a security concern, rather than only a problem with getting home. Tell the police what happened. Also explain if the keys disappeared with something showing your address.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4"><a href="https://www.southyorkshire.police.uk/reportcrime" className="text-primary font-semibold hover:opacity-80 transition-opacity">South Yorkshire Police’s crime-reporting page</a> provides an online route for non-emergency crime reports. Call <strong>999</strong> if anyone is in immediate danger, a theft is happening now or the suspect is still there.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask the locksmith or dealer about removing the missing key from the car’s system. Explain whether you have a spare and what went missing. Do not assume making another key automatically settles every security concern.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep any police reference and the details of your conversations together. Pass relevant information to your insurer if you are asking about cover. This is practical guidance, not legal advice or a decision about an insurance claim.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">When can MH Recovery Service Ltd help?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog/lost-car-keys-sheffield/recovery-vehicle-sheffield-street.webp" alt="Recovery help when a car cannot be moved without keys" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We can discuss vehicle entry for locked-in keys, or recovery when the car needs moving without a working key. Explain which result you need: access to belongings, access to the key, or transport for the vehicle.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">When the keys are locked inside</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give us the make, model, year and exact location. Say whether the car is locked from outside, whether all windows are closed and where the keys are. Describe the situation without trying to force a door or window.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a person or animal is inside and you believe they are in danger, call <strong>999 first</strong>. Do not wait for an ordinary recovery enquiry to resolve an emergency.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We will explain the assistance and the documents required on the call. Entry assistance does not include making a replacement key, and we do not promise that every vehicle or location can be dealt with in the same way.</p>
<h3 className="text-xl font-bold text-on-surface mb-4">When the car needs moving</h3>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell us whether it is on a public road, in a private car park or on private land. Explain what you already know about its condition, without forcing the steering, controls or doors.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Our guide to <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys</Link> covers the collection questions in more detail. This article focuses on deciding what help to arrange, rather than repeating that loading guidance.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For <Link href="https://mhrecoveryserviceltd.co.uk/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link>, confirm the destination and who can receive the vehicle. Our <Link href="https://mhrecoveryserviceltd.co.uk/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield</Link> page also explains moves to an agreed address.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before booking, ask whether the job is entry assistance, recovery or both. MH Recovery Service Ltd gives you a quote before you agree. A recovery booking does not include a new key.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What about the city centre, Meadowhall and other Sheffield locations?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Give the exact parking position, not just the area name. MH Recovery Service Ltd serves Sheffield and South Yorkshire, including the city centre, Meadowhall, Hillsborough, Crookes, Ecclesall, Woodseats, Heeley, Attercliffe, Handsworth and Darnall.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">In a large car park, note the entrance, level and a nearby sign or landmark. Tell us about barriers, restricted entrances or limited room around the vehicle. Our <Link href="https://mhrecoveryserviceltd.co.uk/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery in Sheffield</Link> guide explains the access questions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not assume every entrance has the same access or that naming the car park tells us where the car is. Give observations you can make safely, and let the operator assess what they mean for the job.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the vehicle is outside the listed areas, call to confirm whether we can reach you. We also confirm access and the proposed help before you agree to a booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before calling, note the registration, make, model and year, your exact location and whether you need entry or collection. If you cannot safely see a detail, say so; do not move into traffic to find it.</p>
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

<section className="py-10 md:py-14 px-4 md:px-6 bg-surface"><div className="max-w-3xl mx-auto"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need help with lost keys?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call <strong>MH Recovery Service Ltd on <a href="tel:+447799180009" className="text-primary font-semibold hover:opacity-80 transition-opacity">07799 180009</a></strong> to discuss entry assistance or moving the car. Our phone line is open 24 hours a day, seven days a week.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">See our <Link href="https://mhrecoveryserviceltd.co.uk/services/lost-car-keys-help-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">lost car keys help in Sheffield</Link> service page or use our <Link href="https://mhrecoveryserviceltd.co.uk/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>. Tell us where the car is and whether the keys are lost, locked inside or not working.</p>
        </div></section>
      </main>
      <Footer />
    </>
  )
}
