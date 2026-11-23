import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Recovery Guides & Advice | MH Recovery Service Ltd',
  description:
    'Practical guides from MH Recovery Service Ltd. Find clear advice on vehicle recovery, breakdowns and car keys to help you know what to do next.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Recovery Guides & Advice | MH Recovery Service Ltd',
    description:
      'Practical guides from MH Recovery Service Ltd. Find clear advice on vehicle recovery, breakdowns and car keys to help you know what to do next.',
    url: `${SITE_URL}/blog`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MH Recovery Service Ltd – Guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Guides & Advice | MH Recovery Service Ltd',
    description:
      'Practical guides from MH Recovery Service Ltd. Find clear advice on vehicle recovery, breakdowns and car keys to help you know what to do next.',
    images: [OG_IMAGE],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
  ],
}

const posts = [
  {
  "href": "/blog/jump-start-car-on-a-hill-sheffield",
  "title": "Car Won't Start on a Steep Sheffield Street? Is It Safe to Jump Start on a Hill?",
  "description": "Flat battery on a steep Sheffield street? When a jump start on a hill is safe, why a push or bump start isn't, and when to call for help or recovery.",
  "image": "/blog-jump-start-car-on-a-hill-sheffield-featured.webp",
  "imageAlt": "Technician jump starting a car parked on a steep Sheffield street."
},
  {
    "href": "/blog/long-distance-car-recovery-cost-sheffield",
    "title": "How Is Long-Distance Car Recovery Priced? Questions to Ask Before You Book From Sheffield",
    "description": "What affects the cost of long-distance car recovery from Sheffield, what to tell the operator for an accurate quote, and the questions to ask before you book.",
    "image": "/blog-long-distance-recovery-cost-sheffield-featured.webp",
    "imageAlt": "Flatbed recovery truck carrying a car on a motorway near Sheffield at dusk"
},
  {
    "href": "/blog/how-to-get-car-towed-to-garage-sheffield",
    "title": "How to Get Your Car Towed to a Garage in Sheffield: A Step-by-Step Guide",
    "description": "Need your car towed to a garage in Sheffield? What to sort with the garage first, what to tell the recovery driver, MOT rules, and how the tow usually works.",
    "image": "/blog-car-towed-to-garage-sheffield-featured.webp",
    "imageAlt": "Car loaded on a flatbed recovery truck outside a garage workshop in Sheffield"
},
  {
    "href": "/blog/accident-recovery-sheffield",
    "title": "Been in a Car Accident in Sheffield? What to Do Next, and How Recovery Usually Works",
    "description": "What to do after a car accident in Sheffield: safety first, which details to exchange, when to call the police, and how vehicle recovery usually works.",
    "image": "/blog-accident-recovery-sheffield-featured.webp",
    "imageAlt": "Hatchback with mild front bumper damage parked safely beside a Sheffield street"
},
  {
    "href": "/blog/car-park-recovery-sheffield",
    "title": "Broken Down in a Sheffield Car Park? How Recovery Works in Multi-Storeys and Tight Spaces",
    "description": "What happens if your car breaks down in a Sheffield car park or multi-storey: how to stay safe, what to tell the operator, and how recovery usually works in tight spaces.",
    "image": "/blog-car-park-recovery-sheffield-featured.webp",
    "imageAlt": "Hatchback parked in a tight bay inside a multi-storey car park"
},
  {
    href: '/blog/car-recovery-without-keys',
    title: 'Can a Car Be Recovered Without Keys?',
    description:
      'Find out how a car can be recovered without keys, what can make collection harder and what details to share with a recovery company.',
    image: '/blog-recovery-without-keys-calling.webp',
    imageAlt: 'Person calling MH Recovery Service Ltd while holding a business card next to a car',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>

        {/* Header */}
        <section className="pt-24 md:pt-28 pb-10 md:pb-14 px-4 md:px-6 bg-surface border-b border-outline/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">MH Recovery</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight text-on-surface mb-4">
              Guides &amp; Advice
            </h1>
            <p className="text-on-surface-variant text-base font-sans max-w-xl leading-relaxed">
              Practical information to help you understand vehicle recovery, what to do in a breakdown and how to arrange help.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(({ href, title, description, image, imageAlt }) => (
                <Link
                  key={href}
                  href={href}
                  className="group bg-surface-container-high border border-outline/20 rounded-xl overflow-hidden hover:border-primary transition-colors flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h2 className="text-base font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {title}
                    </h2>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed flex-1">
                      {description}
                    </p>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 mt-1">
                      Read guide
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '400px', position: 'absolute', right: '-60px', top: '-80px' }}>directions_car</span>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-on-primary">
              Need Recovery Help in Sheffield?
            </h2>
            <p className="text-on-primary/80 text-base font-sans mb-8 leading-relaxed">
              Tell us where your car is and where it needs to go. We will check availability and help you plan the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+447799180009"
                className="flex items-center justify-center gap-2 bg-on-primary text-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px] hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-on-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-all rounded min-h-[52px] hover:bg-on-primary hover:text-primary"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
