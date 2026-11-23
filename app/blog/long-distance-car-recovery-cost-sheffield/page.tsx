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
    locale: 'en_GB', type: 'article', publishedTime: '2026-11-22', modifiedTime: '2026-11-23',
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
  "dateModified": "2026-11-23",
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
    "q": "How do I find out the cost of long-distance recovery from Sheffield?",
    "a": "Ask for a quote using both addresses, the car details, its condition and access information. Explain any fixed collection or delivery requirement. Confirm what the total includes before you agree to the booking."
  },
  {
    "q": "Does a price per mile tell me the full cost?",
    "a": "Not on its own. Ask how collection, loading, delivery and any other agreed work fit into the total. Compare quotes for the same journey and vehicle condition rather than comparing headline mileage figures."
  },
  {
    "q": "What if my car will not start or has locked wheels?",
    "a": "Describe those problems at the start of your enquiry. Say whether you know it will roll, steer and brake. The operator needs to assess the loading requirements before agreeing the move; do not move it yourself to test it."
  },
  {
    "q": "Can the car go to a garage outside Sheffield?",
    "a": "Ask MH Recovery Service Ltd about your proposed destination. Supply the full address, receiving contact and access instructions so the journey and handover can be discussed before booking."
  },
  {
    "q": "Do I have to attend collection and delivery?",
    "a": "Agree attendance and key handover with the operator before booking. If someone else will act for you, make sure they know the arrangements. Do not assume an unattended collection or drop-off is acceptable without agreement."
  },
  {
    "q": "Does flexible timing mean a cheaper quote?",
    "a": "There is no guaranteed discount. Tell the operator which dates or times could work and ask about available arrangements. Compare the total for the option you are actually offered, including any receiving restrictions."
  },
  {
    "q": "What should I do if something changes after the quote?",
    "a": "Contact the operator before collection. Explain changes to the vehicle, access, destination or timing and ask whether they affect the agreement. Clarify any revised arrangements before the job proceeds."
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

<article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto">
<p className="text-on-surface-variant text-sm font-sans mb-6">Last updated: <time dateTime="2026-11-23">23 November 2026</time></p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You need a car moved from Sheffield, but the destination is well beyond the local garage. Before you book, you want to know what you are paying for and whether the quote covers the journey you actually need.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Long-distance car recovery cost makes more sense when you describe the whole move. This guide helps you prepare that description, compare replies and ask about anything unclear. There are no price tables here: your vehicle, addresses and collection arrangements need their own quote.</p>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What do you need to know before asking about cost?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Start with both addresses, the car's condition and when the receiving person can accept it. Those details give the operator a useful starting point. A rough distance alone leaves out the work of collecting and unloading the vehicle.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You might be returning a broken-down car to your usual repairer, collecting a purchase or moving a non-runner off a driveway. Tell the operator which it is. You do not need to decide whether the job should be called recovery or transport.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a longer move, our <Link href="/services/long-distance-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">long distance recovery service</Link> is the place to start. MH Recovery Service Ltd discusses the job and gives you a quote before you agree.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A useful quote describes the move clearly enough that you can recognise your own circumstances in it. If it seems to assume an easy collection but your car has locked wheels, ask for that point to be checked before booking.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Why does a mileage figure leave questions unanswered?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Mileage describes the journey, but it does not describe loading, access or delivery. Before comparing a per-mile figure with another offer, ask what the final amount would cover for your actual collection and destination.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For example, a car parked in an open yard presents a different collection problem from one trapped behind other vehicles. Even if both destinations are equally far away, the operator needs to understand the different work at the start.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask whether the quoted total includes the operator's travel to the collection, the delivery journey and any travel afterwards. Do not assume every firm calculates those parts in the same way. You need the agreed total, not a calculation based on guesswork.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The route also needs confirming. Give the full delivery address rather than only naming a town. If there is a particular entrance or approach the receiving site wants used, pass that on before the operator works through the journey.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Which vehicle details can change the loading plan?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The make, model and actual condition matter more than a description such as 'just a small car'. Identify the vehicle properly and explain anything unusual about it, including modifications or damage that could affect loading.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the operator whether it starts, rolls, steers and brakes, as far as you know. These are separate questions. An engine that runs does not confirm that a stuck handbrake will release or that a damaged wheel can turn.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Mention flat tyres, seized brakes, locked steering, low bodywork or anything hanging beneath the car. If it has been standing unused, say that too. Clear information lets the operator discuss the job before turning up with an incomplete picture.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not need to diagnose the fault. 'The rear wheel will not turn' is useful information without naming a failed part. If you have not checked whether it moves, say so rather than trying to push it to find out.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Missing keys belong in the first conversation. Ask about the arrangements for your particular vehicle instead of assuming access to the door is the only issue. Our <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery without keys guide</Link> explains the questions that can come up.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What does the operator need to know about access?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-long-distance-recovery-steep-street-access.webp" alt="Recovery truck parked on a steep terraced street in Sheffield" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Describe how the truck could reach the car and where it could unload at the other end. Both locations matter. A straightforward collection can still lead to a difficult delivery if the destination has not been discussed.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">In Sheffield, tell the operator about a steep driveway, closely parked cars or a narrow approach where relevant. Describe the situation you can see. You do not have to decide whether a particular truck will fit.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If a gate is locked, explain who can open it. If the car is behind another vehicle, arrange access with the person responsible where possible. Tell the operator about anything you cannot resolve before collection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a car park, give the name, entrance and level or bay. Mention a low entrance, barrier or tight turn without guessing whether it can be negotiated. Our <Link href="/blog/car-park-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car park recovery guide</Link> covers the details worth sharing.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask the receiving person the same access questions. A garage's postal address may point to its office rather than its unloading area. Get the correct entrance and a contact name so the driver has someone to speak to if needed.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">How do timing and extra arrangements affect the enquiry?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Explain any fixed collection or delivery requirement when you request the quote. A garage closing time, seller's availability or someone needing to unlock a yard is part of the plan, rather than a detail to add after booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your dates are flexible, tell the operator and ask what options are available. Flexibility does not guarantee a lower price. It simply gives you a chance to discuss a workable arrangement instead of assuming one particular slot is essential.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask about additional stops separately. Collecting keys from another address or changing the destination creates a different request from one direct collection and delivery. Make sure everyone understands the same sequence of events.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Waiting and storage also need clear answers. Ask whether either could arise, how it would be handled and what you would need to agree. This article cannot set another business's terms or promise that any extra arrangement is included.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the garage cannot receive the car, settle the alternative before collection. Do not assume the operator can keep it somewhere or leave it outside. The address and receiving arrangements need agreeing along with the journey.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you send with a quote request?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-long-distance-recovery-photos-before-loading.webp" alt="Car owner photographing their car on a driveway before collection" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Send one complete description rather than several messages with changing destinations. Keep a copy so you can give the same information to each operator if you decide to compare quotes.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Include:</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>The full collection address and where the car sits within the property or site.</li><li>The delivery address, correct entrance and receiving person's contact details.</li><li>The vehicle's make, model and registration.</li><li>Whether it starts, rolls, steers and brakes, including anything you have not checked.</li><li>Whether the keys are available and who will hand them over.</li><li>Access concerns at both ends and any fixed timing requirements.</li></ul>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Photographs can support that description. If safe, show the car and the space around it, not only the fault you are worried about. Explain anything the picture does not show, such as a locked gate further along the approach.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Take pictures from safe positions. Do not enter traffic, crawl beneath the vehicle or release its handbrake to improve a photograph. The operator can ask follow-up questions without you trying to carry out an inspection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before sending the request, check that your destination is confirmed. If you are still choosing a garage, say so. A quote for one journey should not be treated as agreement to take the car to any address later selected.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Which questions make two quotes easier to compare?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Compare the whole agreed job, using the same details for both enquiries. When you search for car recovery prices or tow truck prices, a short headline can miss the collection conditions that matter to you.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Ask each operator:</p>
<ol className="list-decimal pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Does this total cover collection and delivery at the addresses I supplied?</li><li>Have you allowed for the vehicle condition and access I described?</li><li>What loading and transport method are you proposing?</li><li>Could anything change the quote, and how would we discuss that before work proceeds?</li><li>Who needs to attend at each end, and how will the keys be handed over?</li><li>What are the payment arrangements, and what booking details will I receive?</li></ol>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can also ask what cover applies during transport and check any questions with your own insurer. Do not infer an insurance arrangement from the vehicle being on a recovery truck. Ask for a clear explanation relevant to the booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If one answer is vague, ask a specific follow-up. For instance, 'Is unloading into that yard included?' is easier to answer than 'Are there any surprises?' Keep the reply with the details of the quote.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Can preparation help avoid unnecessary complications?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Good preparation helps the operator work with the situation you described. It does not guarantee a discount, but it can prevent an avoidable access or handover problem from becoming part of collection day.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Have the keys ready and remove personal belongings you will need. Take photographs of the car's condition for your records. Tell the receiving person what will arrive and how you expect the keys to reach them.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Where safe and within your control, clear items blocking the approach. Do not move a damaged car or try to free a seized wheel yourself. If access remains blocked, tell the operator before they set off.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For delivery to a workshop, our <Link href="/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">guide to getting your car towed to a garage</Link> covers receiving instructions and preparation in more detail. A named contact and a confirmed unloading point help keep the handover clear.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Let the operator know if anything changes after the quote. The car may have developed a flat tyre, or the garage may want it elsewhere. Ask whether the change affects the booking rather than hoping it will make no difference.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Should you choose the lowest quote?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Choose after checking what each offer includes. A lower total may suit you, but you cannot compare it fairly if it assumes a different vehicle condition, transport method or destination.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Check that both quotes account for the car you actually have. An offer based on a freely rolling vehicle needs clarification if yours has locked wheels. Do not hide the problem to obtain a lower starting figure.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A search for 'car recovery near me prices' may help you find an operator, but proximity alone does not define the delivery job. Ask about the full journey from your collection point to the agreed address.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You should be able to explain what you have booked in a few plain sentences. If you cannot tell whether delivery, unloading or a second stop is part of it, clarify those points before agreeing.</p>
</section>
<section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Is the enquiry different for a breakdown and a planned move?</h2><div className="h-1 w-10 bg-primary mb-6" />
<div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-long-distance-recovery-flatbed-motorway.webp" alt="Car strapped securely on a flatbed recovery truck travelling on a motorway" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" /></div>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The reason for moving the car matters, but the core information stays the same: location, destination, condition and access. Explain whether the car has just stopped or whether it is safely parked awaiting a planned collection.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a local move, our <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car recovery in Sheffield page</Link> explains collection enquiries. The <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">car towing service page</Link> also covers moves to garages and other agreed addresses. You can describe the job without choosing technical terms.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For a longer journey, make sure the person receiving the car knows the plan before collection. An urgent need to move it does not remove the need for an agreed destination. Ask what can be arranged using the details you have.</p>
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
<h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Ready to ask about your journey from Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6" />
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Call MH Recovery Service Ltd on <strong>07799 180009</strong> to discuss your collection point, destination and vehicle. Have both postcodes and any access details ready so we can talk through the job and provide a quote before you agree.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">We are based on Coupe Road, Sheffield S3 9DP. Our phone line is open 24/7. You can also send the details through our <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition-opacity">contact page</Link>, with any questions you want answered before booking.</p>
<p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For more help preparing a car for collection or describing an awkward location, visit the <Link href="/blog" className="text-primary font-semibold hover:opacity-80 transition-opacity">MH Recovery blog</Link>. Keep your agreed journey and handover details together, ready for collection day.</p>
</section>
<a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a>
</div>
</section>
      </main>
      <Footer />
    </>
  )
}
