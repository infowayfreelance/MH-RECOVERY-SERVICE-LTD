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
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
};
const faqs = [
  {
    "q": "What should I do immediately after a car accident in Sheffield?",
    "a": "Stop when it is safe, switch off the engine, put your hazard lights on, and check for injuries. Call 999 if anyone is in danger, seriously hurt, or the road is blocked. Then exchange details, and take photos only if it is safe."
  },
  {
    "q": "Do I have to call the police after a minor collision?",
    "a": "Not always. South Yorkshire Police says no report is needed if you have exchanged details, nobody was injured and there are no allegations of driving offences. You must report it if you could not exchange details, if anyone was injured, or if you suspect a driving offence. If you are unsure, check the official guidance or call 101."
  },
  {
    "q": "What details should I swap with the other driver?",
    "a": "Name, address, vehicle registration and, if requested, insurance details. The MIB also recommends contact numbers, plus the time, date and location. If there are witnesses, ask for their details too."
  },
  {
    "q": "Can I drive the car home if it still starts?",
    "a": "Only if it is safe and the car is in a fit condition to be on the road. Starting the engine does not mean the wheels, steering, brakes, lights or bodywork are sound. If you are in any doubt, arrange recovery instead."
  },
  {
    "q": "Who should I call to recover the car — my insurer or a local recovery firm?",
    "a": "You can do either, and many people do both. Your insurer can tell you what the policy covers and may arrange collection. You can also call a local firm such as MH Recovery Service Ltd. This article cannot say which option your policy requires."
  },
  {
    "q": "Who pays for accident recovery?",
    "a": "It depends on the policies and on liability, which this article cannot decide. Ask your insurer, and do not rely on a roadside promise about who will pick up the bill."
  },
  {
    "q": "Can MH Recovery Service Ltd recover a car after an accident in Sheffield?",
    "a": "Yes. MH Recovery Service Ltd provides accident recovery in Sheffield and South Yorkshire. Explain where the car is, what damage you can see, whether it will roll or steer, and where you would like it taken."
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

<article className="py-10 md:py-16 px-4 md:px-6">
<div className="max-w-3xl mx-auto">
<section className="mb-10">
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you have just been in a collision in or around Sheffield, the first few minutes can feel chaotic. The first job is simpler than the insurance claim or the damaged bumper: stay safe, check for injuries, and only then exchange details and think about the vehicle.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This guide is a calm checklist for accident recovery in Sheffield after a road traffic collision — sometimes called an RTC, though we will keep to plain language after this. It follows <a href="https://www.southyorkshire.police.uk/advice/advice-and-information/rs/road-safety/collisions/" className="text-primary font-semibold hover:opacity-80 transition-opacity">South Yorkshire Police advice on road collisions</a> and the <a href="https://www.mib.org.uk/learn-about-insurance/what-to-do-after-an-accident/" className="text-primary font-semibold hover:opacity-80 transition-opacity">Motor Insurers' Bureau guidance on what to do during and after a vehicle accident</a>. It is practical information, not legal advice and not insurance advice. If anything is in doubt, follow the official sources and the emergency services.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car cannot be driven afterwards, <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">accident recovery in Sheffield</Link> is how a damaged vehicle is usually moved to an agreed destination — home, a garage, or wherever your insurer has asked you to take it.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Short answer: what to do in the first few minutes</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Work through this in order.</p>
<ol className="list-decimal pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>Stop as soon as it is safe to do so. South Yorkshire Police is clear: you must stop at the scene.</li>
<li>Switch off the engine and switch on your hazard lights.</li>
<li>Check yourself and your passengers for injuries. If anyone is in danger, seriously hurt, or the road is blocked, call 999.</li>
<li>Stay out of live traffic. Do not walk into the road for photographs or broken parts.</li>
<li>Exchange details with anyone involved: name, address, registration, and insurance details if they are requested.</li>
<li>Take photos and notes only if you can do so from a safe place.</li>
<li>Do not admit fault or speculate about the cause at the scene.</li>
<li>If the car cannot be driven safely, call your insurer, a recovery operator, or both. Tell them whether the car will roll or steer, and where you would like it taken.</li>
</ol>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not have to settle blame at the roadside. You do have to stay safe and gather the facts.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Stay safe, then check for injuries</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-accident-scene-stay-safe.webp" alt="Safe position away from traffic beside a Sheffield accident scene" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Switch off the engine if it is safe, and put your hazard lights on. Other traffic may still be moving around you. If you can get yourself and your passengers away from the traffic without stepping into the road, do that. On a motorway or a fast dual carriageway, get behind a barrier if you can, and do not go back to the vehicle unless you have to. On ordinary roads, stay on the pavement or a verge, well clear of passing cars.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check yourself first, then your passengers. The Motor Insurers' Bureau notes that adrenaline can mask symptoms, so do not rush this check. Call 999 if anyone is seriously injured or in danger, if you believe a serious offence has been committed, or if the collision has caused a blockage or a dangerous obstruction of the road, as South Yorkshire Police advises.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you notice smoke, fire, leaking fuel or another immediate danger, leave the vehicle. Do not gather debris from the carriageway or stand between vehicles in a live lane. If the emergency services are already there, follow their instructions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you have a warning triangle and you are on an ordinary, non-motorway road, the MIB suggests placing it 40 to 50 metres behind the vehicle — only if you can do so safely. Never step into live traffic to set one out, and do not place a warning triangle on a motorway carriageway.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Details, photos and what not to do</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-accident-details-and-photos.webp" alt="Recording vehicle details and photographs after a collision" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Once everyone is safe, exchange details with anyone involved. South Yorkshire Police lists your name, address and the car registration number, and says you should provide your insurance details if requested. The MIB also includes contact information. Stay factual, and write the details down or save them on your phone.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you cannot get those details, or the other person has left without giving them, South Yorkshire Police advises calling 101 while you are still at the scene. Try to note the registration, the make and colour of the other vehicle, and the direction it went.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Photographs help later, but only take them if you can do so without walking into the road. The MIB suggests photographing vehicle positions, the damage, the road layout and any relevant signs or markings. Note the time, date and exact location — a street name, a junction, or a nearby Sheffield landmark. If there are witnesses, ask for their contact details.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not admit fault or speculate about the cause at the scene. The MIB is clear on this: stay factual and avoid making assumptions. A casual “sorry” at the roadside can be taken the wrong way later. Stick to the facts and leave liability to the insurers. This is not legal advice.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">When to report the collision</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not automatically have to call the police after every bump in Sheffield, but there are times when you must.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">According to <a href="https://www.southyorkshire.police.uk/advice/advice-and-information/rs/road-safety/collisions/" className="text-primary font-semibold hover:opacity-80 transition-opacity">South Yorkshire Police</a>, you do not need to report a collision if you have exchanged details, nobody was injured and there are no allegations of driving offences.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You must report it if you were unable to exchange details at the scene, if anyone was injured, or if you suspect that the other person may have committed a driving offence. When a report is required, you must make it no matter who was at fault. Failing to stop, or failing to report when you should, can be an offence.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can report a collision online through the South Yorkshire Police website. Download a copy of the form and keep the reference number for your insurer.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This is not legal advice. If you are unsure, check the official collisions page or call 101.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Even when the police do not need to be involved, contact your insurer as soon as you reasonably can. The MIB advises reporting the accident even if you do not plan to make a claim, and checking your policy so you understand what you are covered for.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">If the car cannot be driven</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">An engine that still starts is not the same as a car that is safe, or in a fit condition, to drive. From a safe place, look at the wheels, tyres, lights, bodywork and anything underneath.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not drive the car if:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>a wheel is bent, a tyre is damaged, or the car sits at an odd angle</li>
<li>the steering, brakes or pedals do not feel normal</li>
<li>the airbags have deployed</li>
<li>fluid is leaking, or you can smell fuel</li>
<li>lights or indicators you need are smashed</li>
<li>bodywork is hanging off, or could come loose</li>
<li>the windscreen is badly cracked in your line of sight</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If any of that is true, leave the car where it is — as long as it is not creating a further danger — and arrange recovery. Driving a damaged vehicle can make the damage worse and put other road users at risk.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call your insurer, a recovery operator, or both. Tell them your exact location in Sheffield, what you can see, whether the car will roll or steer, whether you have the keys, and whether the emergency services are still managing the scene. Do not try to move the car just to answer those questions.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the collision happened in a car park or a multi-storey, our guide to <Link href="/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery in Sheffield</Link> covers tight ramps and height barriers. If the keys are lost, damaged or locked inside, see <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys</Link>.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd provides <Link href="/services/accident-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">accident recovery in Sheffield</Link>. There is more about <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing in Sheffield</Link> if the vehicle needs to be moved rather than driven.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What recovery usually looks like</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6">
<Image src="/blog-accident-flatbed-recovery-sheffield.webp" alt="Damaged car being loaded onto a flatbed recovery vehicle in Sheffield" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
</div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Accident recovery is the practical job of moving a damaged vehicle to an agreed destination. It is not a judgment about fault.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The operator usually needs:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed">
<li>your location, including a postcode or a clear landmark</li>
<li>the vehicle type, and whether it is petrol, diesel, hybrid or electric if you know</li>
<li>whether the car rolls, steers and has its keys</li>
<li>any obvious wheel damage or fluid on the ground</li>
<li>where the car should go: home, a garage, or a destination your insurer has given you</li>
</ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a wheel is jammed, missing, or pressed against the body, a tow that relies on the car rolling may not be suitable. A flatbed is often used after a collision because the vehicle travels on the truck's platform rather than on its own wheels. The right method still depends on the damage and the access around the car.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Take your belongings with you if it is safe — documents, chargers, child seats and bags. Do not assume the car will be stored in a particular way or for a set time; that depends on where it is taken and what your insurer or garage agrees. This article cannot set storage rules or fees.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the emergency services are still at the scene, follow their instructions and tell the operator whether the vehicle can be collected.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can read more about <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield</Link> and <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">breakdown recovery in Sheffield</Link> if the problem is not collision damage.</p>
</section>
<section className="mb-10">
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Who arranges and who pays</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">There is no single rule for who organises recovery after a collision, and this article cannot tell you who will pay.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Often your insurer is involved. You may have recovery included in the policy, or the insurer may ask a contracted operator to collect the car. You can also call a local recovery firm yourself, especially if you need the vehicle moved before you have spoken to the insurer.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Payment depends on your policy, the other driver's policy, and questions of liability. Those are matters for insurers, not for a recovery article. A local firm can discuss the job with you on the call, but nobody at the roadside can honestly promise that “the other side will pay”.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Keep the details you exchanged, and ask your insurer to explain what your policy covers. If the other driver was uninsured or left the scene, tell the police and your insurer. The MIB may be able to help in some uninsured or untraced cases, which is a question for them and for your insurer, not something this guide can decide.</p>
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
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need the car moved in Sheffield?</h2>
<div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car cannot be driven after a collision in Sheffield, you do not have to settle the insurance position before you ask for the vehicle to be moved.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Stay safe, keep the details you exchanged, and tell the operator your location and what you can see.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd is based at Coupe Road, Sheffield S3 9DP, and provides vehicle recovery after accidents in Sheffield and South Yorkshire.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Need the car moved? Call MH Recovery Service Ltd on <strong>07799 180009</strong>, or use our <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>. Tell us where the vehicle is and what has happened, so we can discuss the recovery options.</p>
</section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
