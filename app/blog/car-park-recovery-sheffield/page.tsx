import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL, BUSINESS } from '@/lib/siteConfig';
const title = "Broken Down in a Sheffield Car Park? How Recovery Works in Multi-Storeys and Tight Spaces";
const description = "What happens if your car breaks down in a Sheffield car park or multi-storey: how to stay safe, what to tell the operator, and how recovery usually works in tight spaces.";
const path = "/blog/car-park-recovery-sheffield";
const featuredImage = "/blog-car-park-recovery-sheffield-featured.webp";
export const metadata: Metadata = {
    title: "Car Park Recovery in Sheffield: What to Expect | MH Recovery", description,
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
    '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    url: `${SITE_URL}${path}`, image: `${SITE_URL}${featuredImage}`,
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
};
const faqs = [
    {
        "q": "Can a recovery truck come into a multi-storey car park?",
        "a": "It depends on the car park's entrance, internal clearance, ramps and turning space.\n\nSome multi-storeys cannot accommodate standard recovery trucks. In these situations, alternative equipment may be needed to move the vehicle to a suitable loading area.\n\nThe operator needs to understand the access restrictions before confirming the recovery arrangements."
    },
    {
        "q": "What if my car will not start in a car park?",
        "a": "First, make sure you are somewhere safe. Then contact a recovery operator and explain where your vehicle is parked and what happens when you try to start it.\n\nA jump start may help if the battery is flat. Other faults may require vehicle recovery."
    },
    {
        "q": "Do I need a jump start or a tow?",
        "a": "A jump start may be suitable for a flat battery. If your vehicle has mechanical damage, electrical problems or another fault that makes driving unsafe, recovery may be necessary.\n\nExplain the symptoms so the operator can discuss the suitable option."
    },
    {
        "q": "What happens if there is a height barrier?",
        "a": "Tell the recovery operator about the barrier before arranging assistance.\n\nIt may prevent a standard truck from entering, so alternative arrangements might be needed. Never assume that the barrier can be bypassed."
    },
    {
        "q": "Should I wait in the car or at the entrance?",
        "a": "Your safety comes first. Follow the car park's instructions and avoid standing in traffic routes or areas where vehicles are manoeuvring.\n\nYou can agree on a suitable meeting point with the recovery operator, such as an accessible entrance."
    },
    {
        "q": "Can you recover my car if I have no keys?",
        "a": "It may be possible, depending on the vehicle's steering and locking systems.\n\nTell the operator that the keys are missing before recovery is arranged. This helps them consider the appropriate equipment and handling method.\n\nRead our guide to [Car Recovery Without Keys](/blog/car-recovery-without-keys)."
    },
    {
        "q": "Do you recover cars from car parks at night?",
        "a": "You can contact MH Recovery Service Ltd to discuss your recovery needs at night.\n\nExplain where your car is parked, what has happened and whether there are any access restrictions. The available arrangements will depend on the vehicle and location."
    }
];
const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })),
};
function renderAnswer(answer: string) {
    return answer.split('\n\n').map((paragraph) => (<p key={paragraph} className="mb-4 last:mb-0">
      {paragraph.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
            const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            return link ? <Link key={index} href={link[2]} className="text-primary font-semibold hover:opacity-80 transition-opacity">{link[1]}</Link> : part;
        })}
    </p>));
}
export default function CarParkRecoverySheffieldPage() {
    return (<>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[320px] md:min-h-[460px] flex items-center pt-24 md:pt-20 pb-14 md:pb-20 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image alt="Hatchback parked in a tight bay inside a multi-storey car park" className="object-cover" src="/blog-car-park-recovery-sheffield-featured.webp" fill priority fetchPriority="high" sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Guide</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 text-on-surface text-balance">
                Broken Down in a Sheffield Car Park? How Recovery Works in Multi-Storeys and Tight Spaces
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-sans max-w-xl">
                What to expect when your car breaks down in a multi-storey or tight parking space in Sheffield.
              </p>
            </div>
          </div>
        </section>

    <article className="py-10 md:py-16 px-4 md:px-6"><div className="max-w-3xl mx-auto"><section className="mb-10"><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Breaking down is frustrating, but it can be even more stressful when it happens inside a Sheffield car park. Perhaps your car will not start in a multi-storey, you are parked several floors up, or your vehicle is stuck in a tight space with little room to manoeuvre.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The problem is not always the vehicle itself. Restricted entrances, low ceilings, narrow ramps and height barriers can make recovery more complicated than it would be on an ordinary road.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The good news is that a vehicle being stuck inside a car park does not automatically mean it cannot be recovered. The right approach depends on the vehicle's condition, the available space and the equipment needed.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If this happens to you, knowing what information to provide and what to expect can make the process easier. Here is how car park recovery in Sheffield usually works and what you should consider before arranging assistance from MH Recovery Service Ltd.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Short answer: what usually happens</h2><div className="h-1 w-10 bg-primary mb-6"/><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your car breaks down in a Sheffield car park, the recovery operator first needs to understand where it is and whether it can move safely.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You will usually be asked about the car park, parking level, vehicle condition and any access restrictions. These details help establish whether a jump start, towing or another recovery method may be suitable.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For example, a flat battery might only require a jump start. A vehicle with a mechanical fault, damaged wheel or locked steering may need specialist recovery equipment.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A standard recovery truck cannot necessarily reach every parking bay, particularly inside multi-storey buildings. Where access is restricted, the vehicle may need to be moved carefully to a suitable loading area before being placed onto a recovery truck.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">There is no single method that works for every situation. The recovery plan needs to take account of your vehicle and the car park's layout.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Stay safe and make the car easy to find</h2><div className="h-1 w-10 bg-primary mb-6"/><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Before arranging recovery, make sure you and your passengers are safe. A broken-down vehicle can cause inconvenience, but trying to move it without the right equipment can create additional risks.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What should you do immediately?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Switch on your hazard lights if possible and apply the handbrake. Make sure the vehicle is secure, especially if it has stopped on a slope or ramp.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Avoid standing behind the car or in places where other vehicles are turning or reversing. Car parks often have limited visibility, so give yourself plenty of space.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not attempt to push your vehicle up or down a ramp. If you notice smoke, fire or another immediate danger, leave the vehicle and move somewhere safe. Contact emergency services if necessary.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Follow any safety instructions provided by the car park operator.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">How can you help the operator find you?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Large car parks can have several entrances and multiple floors. Simply giving the car park name may not be enough.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">When contacting recovery, provide:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>The car park name and entrance.</li><li>Your floor, level and parking bay number.</li><li>A nearby pillar, lift or stairwell.</li><li>Any useful signs or landmarks.</li></ul>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A location pin or photograph can also help if you can safely provide one.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The clearer your directions, the easier it is to identify where your vehicle is waiting.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Jump start or a tow, how to tell</h2><div className="h-1 w-10 bg-primary mb-6"/><div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-car-park-jump-start.webp" alt="Jumper cables connected to a car battery in a dim car park bay" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover"/></div><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A jump start may solve the problem if your battery is flat. However, if the vehicle has another fault or cannot be driven safely, recovery may be necessary.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A weak battery can cause clicking sounds, dim dashboard lights or an engine that struggles to turn over. Sometimes the electrical systems work, but the engine simply refuses to start.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Other problems may produce similar symptoms, so avoid assuming that every starting problem is caused by the battery.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Consider these points:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Does the engine turn over when you try to start it?</li><li>Do the dashboard lights appear unusually weak?</li><li>Does the vehicle start but then stop running?</li><li>Are there warning lights or unusual noises?</li><li>Is there a steering, braking or mechanical problem?</li></ul>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A jump start can provide temporary assistance, but it will not repair a faulty battery or another underlying problem.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If the car starts, that does not automatically mean it is safe to drive. If you notice a serious warning light, unusual noise or another fault, explain this before attempting to continue your journey.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If you suspect a battery problem, see our <Link href="/services/jump-starts-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">Jump Start Service in Sheffield</Link>.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your vehicle cannot be driven safely, our <Link href="/services/breakdown-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">Breakdown Recovery Service in Sheffield</Link> provides further information about recovery assistance.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Why a full-size truck often cannot come to your bay</h2><div className="h-1 w-10 bg-primary mb-6"/><div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-multi-storey-ramp-tight-space.webp" alt="Narrow multi-storey car park ramp with low concrete ceiling and height warning markings" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover"/></div><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">One of the main challenges with multi-storey recovery is getting the recovery vehicle close enough to your car.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A standard recovery truck is designed to operate in suitable spaces. It may not be able to navigate the ramps, turns and restricted entrances found in some car parks.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What makes multi-storey recovery difficult?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Several features can prevent larger recovery vehicles from reaching a parking bay:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Low ceilings and height-restricted entrances.</li><li>Narrow ramps and tight corners.</li><li>Limited turning space.</li><li>Narrow parking bays.</li><li>Restrictions on where recovery vehicles can stop.</li></ul>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Even when the entrance looks suitable, the internal layout may make access difficult.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">This is why you should tell the operator about any barriers, ramps or clearance restrictions before recovery is arranged. Never assume that a full-size truck can enter simply because ordinary cars can.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">How can skates and dollies help?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Skates and dollies are specialist equipment that can help move a vehicle when its wheels cannot roll normally or it needs repositioning.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Depending on the vehicle and circumstances, they may allow it to be moved carefully through a restricted area.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For example, if a vehicle cannot be driven out of its parking bay, suitable equipment may help move it towards a more accessible location.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The process must be assessed properly. The vehicle's weight, wheel condition, steering and available space all affect whether this approach is suitable.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">Why is a flatbed often used?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Once the vehicle reaches a suitable loading area, a flatbed recovery truck may be used to transport it.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A flatbed carries the vehicle on its platform rather than requiring it to travel on its own wheels. This can be useful when the car has mechanical damage or should not be driven.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">However, the right method depends on the circumstances. Not every car park allows the same access, and not every vehicle can be moved in the same way.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd can discuss the available options once you explain where the vehicle is and what has happened.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You can also read about our <Link href="/services/car-towing-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">Car Towing Service in Sheffield</Link> and <Link href="/services/car-recovery-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">Car Recovery Service in Sheffield</Link>.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you tell the operator, including keys?</h2><div className="h-1 w-10 bg-primary mb-6"/><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">When arranging recovery, give the operator as much useful information as you can. This helps them understand the problem and consider the equipment that may be required.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Try to provide:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Car park name, address, floor and bay.</li><li>Vehicle make, model and registration.</li><li>Whether the engine starts.</li><li>Whether the car rolls, steers and brakes.</li><li>Any visible damage to the wheels or tyres.</li><li>Whether you have the vehicle keys.</li><li>Any height barriers or access restrictions.</li></ul>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You do not need to understand the technical details. Simply explain what happened and what you can observe.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What if you have lost your car keys?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Missing keys can make recovery more complicated.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Modern vehicles often have electronic locking systems and steering locks. Without the correct key or procedure, the wheels may not move freely.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the operator if your keys are lost, locked inside the vehicle, damaged or not recognised by the car.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not force the steering or try to move the vehicle yourself. The recovery method may need to account for the locking system.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">For more information, read our guide to <Link href="/blog/car-recovery-without-keys" className="text-primary font-semibold hover:opacity-80 transition-opacity">Car Recovery Without Keys</Link>.</p>
    <h3 className="text-base font-bold uppercase tracking-tight text-on-surface mb-2">What if you have tyre damage?</h3>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A flat or damaged tyre can affect how safely your vehicle can be moved.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell the operator which tyre is affected and whether the wheel itself appears damaged. A vehicle with a damaged wheel may need different handling from one with an ordinary flat tyre.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Avoid driving on a damaged tyre just to get out of the parking space. This could make the damage worse.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Find out more about our <Link href="/services/tyre-damage-assistance-sheffield" className="text-primary font-semibold hover:opacity-80 transition-opacity">Tyre Damage Assistance in Sheffield</Link>.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What should you do when speaking to car-park staff?</h2><div className="h-1 w-10 bg-primary mb-6"/><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your vehicle breaks down inside a managed car park, let the staff know that you are arranging recovery.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">They may be able to explain the access arrangements and identify a suitable place for a recovery vehicle to wait.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell them which floor and parking bay your vehicle is in. Explain whether it can move and whether you have already contacted a recovery operator.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">It is worth asking a few simple questions:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-on-surface-variant text-base font-sans leading-relaxed"><li>Are recovery vehicles allowed inside?</li><li>Is there a designated recovery area?</li><li>Does access need to be arranged with staff?</li><li>Is there a suitable meeting point outside?</li></ul>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">The recovery operator may also need to speak with the car park staff before deciding how to approach the vehicle.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Do not assume that every car park has the same rules. Access arrangements vary, so follow the instructions provided by the staff responsible for that location.</p></section>
    <section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">What if your car breaks down on a tight street around Sheffield?</h2><div className="h-1 w-10 bg-primary mb-6"/><div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-xl mb-6"><Image src="/blog-car-park-recovery-assistance.webp" alt="Recovery technician guiding a car from a tight parking bay towards a clearer loading area" fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover"/></div><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Restricted space is not only a problem inside multi-storey car parks. Some streets around Sheffield can also make vehicle recovery more difficult.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">You might be parked on a narrow residential road, between closely parked vehicles or somewhere with limited room for a recovery truck to turn.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">In these situations, the operator needs to understand the surrounding space before deciding how to approach the vehicle.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Provide your street name, postcode and a nearby landmark. Explain whether other vehicles are parked closely around yours and whether there is room for a larger vehicle to stop.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">If your car is blocking access or creating a safety problem, mention this when you call.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Depending on the available space and the condition of your vehicle, a different recovery approach may be needed.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">As with car park recovery, do not assume that every recovery truck can reach every location.</p></section></div></article>        {/* FAQ Section */}
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
                    <div className="text-on-surface-variant text-sm font-sans leading-relaxed">{renderAnswer(a)}</div>
                  </div>
                </details>))}
            </div>
          </div>
        </section>

    <section className="py-10 md:py-14 px-4 md:px-6 bg-surface"><div className="max-w-3xl mx-auto"><section className="mb-10"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">Need recovery in Sheffield? Contact MH Recovery Service Ltd</h2><div className="h-1 w-10 bg-primary mb-6"/><p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">A broken-down car in a multi-storey or tight parking space can be difficult to deal with, but understanding the situation is a good first step.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Stay safe, explain where your vehicle is parked and mention any problems with its wheels, keys or access. This helps the recovery operator discuss suitable options.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">MH Recovery Service Ltd provides vehicle recovery assistance in Sheffield.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Need help with a broken-down car? Call MH Recovery Service Ltd on <strong>07799 180009</strong>.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Address: Coupe Road, Sheffield S3 9DP.</p>
    <p className="text-on-surface-variant text-base font-sans leading-relaxed mb-4">Tell us what has happened and where your vehicle is parked so we can discuss your recovery requirements.</p></section><a href="tel:+447799180009" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight rounded min-h-[52px]">Call 07799 180009</a></div></section>
      </main>
      <Footer />
    </>);
}
