import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LazyVideo from '@/components/LazyVideo'
import { liveServices } from '@/lib/servicesData'
import { SITE_URL, OG_IMAGE, BUSINESS } from '@/lib/siteConfig'

const faqData = [
  { q: 'Do you offer vehicle recovery in Sheffield?', a: 'Yes. Contact us with your location in Sheffield and tell us what has happened to your vehicle.' },
  { q: 'Are you available at night?', a: 'Our phone line is open 24/7. Call us any time to discuss your situation.' },
  { q: 'What should I tell you when I call?', a: 'Tell us your exact location, vehicle type, what went wrong, and where you want the vehicle taken.' },
  { q: 'Can you take my car to a garage?', a: 'Yes, you can ask for your car to be taken to a garage. Give us the garage address when you call.' },
  { q: 'What if my car will not start?', a: 'Call us and explain what happens when you try to start it. This will help us understand what kind of support you may need.' },
  { q: 'How much does vehicle recovery cost?', a: 'The cost depends on the vehicle, pickup location, and where it needs to go. Contact us with these details to ask for a quote.' },
]

const whyChooseData = [
  { icon: 'history_toggle_off', text: 'Available 24/7' },
  { icon: 'location_on', text: 'Based in Sheffield' },
  { icon: 'local_shipping', text: 'Sheffield & South Yorkshire' },
  { icon: 'phone_in_talk', text: 'Call Any Time for a Quote' },
]

const galleryPosts = [
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid021QPHQNk1NZ14ktgr7cknHRTBcZEfWgCapfTLNE8vRjbxGt81vmm8RadgLNeiPTcQl%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02x3E2rz8awha4bf9PJJGaem95Nm83yTYA4eiHDZAKZ3YYcJQhsxHNXwdRPQSg8QAAl%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid033KERUru6EXDwfCArJL1DnwWb8G1j92MfQhQiUBeR6pPmKV4FeBkSgwgjRzd4nSRql%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02wscdB9iRFHrpvbu2dtSLCoHbTZqxNwLEG6PDhiDXH3A76jaqM3mTgi8f1DcvrpG1l%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0FJuHT4igyL7Tf39Hd2UcGGRCYWASLLHAFhWMb2Dk21oZVNoikVkHpd18t7YQYY2yl%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02xhSyQgec2qA3W9PYFAb8NgR5dGt1AH9wZZsc1JmvfB5pPjq2keyt8PnPdcdamSv6l%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ct1fPc4ewdWzpNpK1oXgfSLYhJY5oZwDffoA7pxNPawm5HfAwbQ8azxbLATBSoJ8l%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02VTizaL3j1F5EtYJyZFkbAxA7PKdhD4DbnHKumVCBVhPnReoM4LbvZYksDT3YQjZml%26id%3D100076202805594&show_text=false&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02eFjeGnfEVZ2Hsn4ps58KMX3mLV9YZU6yVkMUju3o8dJBU9MsMfd54XKnNuqCZmLKl%26id%3D100076202805594&show_text=false&width=500',
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.phonePrimary,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    postalCode: BUSINESS.address.postcode,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  areaServed: ['Sheffield', 'Rotherham', 'Barnsley', 'Doncaster', 'South Yorkshire'],
  description:
    '24/7 vehicle recovery in Sheffield and South Yorkshire. Breakdown, towing, accident and long distance recovery.',
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export const metadata: Metadata = {
  title: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
  description:
    '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
    description:
      '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
    url: SITE_URL,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Vehicle Recovery Sheffield',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Recovery Sheffield | 24/7 Breakdown & Towing',
    description:
      '24/7 vehicle recovery in Sheffield & South Yorkshire. Breakdown, towing, accident and long distance recovery. Call MH Recovery Service Ltd.',
    images: [OG_IMAGE],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-surface pt-6 md:pt-14 pb-8 md:pb-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

            {/* Hero Image */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[4/3] bg-surface-container-low overflow-hidden rounded-xl">
                <Image
                  alt="MH Recovery Service Ltd recovery truck ready for 24/7 vehicle recovery in Sheffield"
                  className="object-cover"
                  src="/images/MH Recovery image-airanko.webp"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary-container text-white text-[0.6rem] font-bold tracking-widest px-3 py-1 mb-3 md:mb-6 uppercase border border-primary/30">
                Sheffield&apos;s 24/7 Recovery Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-8 tracking-tighter text-on-surface text-balance">
                Vehicle Recovery in <span className="text-primary">Sheffield</span>
              </h1>
              <p className="text-sm md:text-xl text-on-surface-variant mb-5 md:mb-10 max-w-lg leading-relaxed font-sans">
                MH Recovery Service Ltd helps when your vehicle breaks down, is involved in an accident, or needs to be moved. Available 24 hours a day, 7 days a week across Sheffield and South Yorkshire.
              </p>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-12">
                <a
                  href="tel:+447799180009"
                  className="flex items-center justify-center bg-primary text-on-primary py-4 px-6 font-extrabold text-base md:text-lg text-center tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
                >
                  Call: 07799 180009
                </a>
                <a
                  href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20in%20Sheffield."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 font-extrabold text-base md:text-lg text-center hover:bg-[#1ebe5d] active:scale-95 transition-all rounded min-h-[52px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 md:mb-0">
                <span className="flex items-center gap-1.5 uppercase font-bold text-primary text-[0.6rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">check_circle</span> Available 24/7
                </span>
                <span className="flex items-center gap-1.5 uppercase font-bold text-primary text-[0.6rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">location_on</span> Local Sheffield Team
                </span>
                <span className="flex items-center gap-1.5 uppercase font-bold text-primary text-[0.6rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">phone_in_talk</span> Call for a Quote
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* When You Need Vehicle Recovery */}
        <section className="bg-surface-container py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                When You Need Vehicle Recovery
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                Whether your car has broken down on the road, been in an accident, or cannot be driven safely, MH Recovery Service Ltd can help move it to where it needs to go. Call us and tell us your location and what has happened.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                Based in <span className="text-primary">Sheffield</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                We are based on Coupe Road, Sheffield S3 9DP and serve Sheffield and South Yorkshire. When you call, please tell us your exact location, your vehicle type, and where you need the vehicle taken.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-2 md:mb-4 block">Vehicle Recovery Sheffield</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-balance text-on-surface">Recovery Services</h2>
              <p className="text-on-surface-variant text-sm md:text-base font-sans mt-3 max-w-xl leading-relaxed mx-auto">We help with a range of vehicle situations across Sheffield and South Yorkshire. If you are not sure which service fits, call us and describe what has happened.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {liveServices.map((service) => (
                <div key={service.slug} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col group sm:hover:bg-surface-container-highest transition-colors">
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <h3 className="text-base md:text-xl font-bold uppercase mb-2 md:mb-4 tracking-tight leading-snug">{service.name}</h3>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed mb-5 md:mb-6 flex-1">{service.summary}</p>
                    <Link
                      href={service.route}
                      className="flex items-center justify-center bg-primary text-on-primary py-3 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:opacity-90"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-10 text-on-surface">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl mb-4" aria-hidden="true">1</div>
                <h3 className="font-bold uppercase tracking-tight mb-2 text-on-surface">Call Us</h3>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">Call 07799 180009 and tell us your location, your vehicle, and what has happened.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl mb-4" aria-hidden="true">2</div>
                <h3 className="font-bold uppercase tracking-tight mb-2 text-on-surface">Get a Quote</h3>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">We explain the job and give you a clear quote before any work begins.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl mb-4" aria-hidden="true">3</div>
                <h3 className="font-bold uppercase tracking-tight mb-2 text-on-surface">We Come to You</h3>
                <p className="text-on-surface-variant text-sm font-sans leading-relaxed">Once agreed, we head to your location and move the vehicle to the agreed destination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Call Banner */}
        <section className="bg-primary py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-balance text-on-primary">
                Need Vehicle Recovery?
              </h2>
              <p className="text-base md:text-xl font-medium text-on-primary opacity-80">
                Our phone line is open 24 hours a day, 7 days a week.
              </p>
            </div>
            <a
              href="tel:+447799180009"
              className="bg-on-primary text-primary py-4 md:py-6 px-8 md:px-12 text-2xl md:text-4xl font-black tracking-tight active:scale-95 transition-transform whitespace-nowrap rounded hover:opacity-90"
            >
              07799 180009
            </a>
          </div>
        </section>

        {/* Coverage */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              Coverage
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-6">
              MH Recovery Service Ltd is based in Sheffield and serves the wider South Yorkshire area. We cover Sheffield and regularly work in Rotherham, Barnsley, and Doncaster.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-8">
              If you are unsure whether we cover your location, call us on{' '}
              <a href="tel:+447799180009" className="text-primary font-bold hover:opacity-80 transition-opacity">07799 180009</a>{' '}
              and we will confirm.
            </p>
            <a
              href="tel:+447799180009"
              className="inline-flex items-center justify-center bg-primary text-on-primary py-4 px-8 font-extrabold text-base md:text-lg tracking-tight active:scale-95 transition-transform rounded"
            >
              Call Now: 07799 180009
            </a>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface-container">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 md:mb-16 tracking-tight text-center text-balance text-on-surface">
              Why Choose <span className="text-primary">MH Recovery Service Ltd</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {whyChooseData.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-high border border-outline flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary group-hover:text-on-primary transition-colors" aria-hidden="true">{item.icon}</span>
                  </div>
                  <p className="font-bold text-xs md:text-sm uppercase tracking-wide leading-snug text-on-surface">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facebook Videos Section */}
        <section className="bg-surface py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                In Action
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">
                Watch Us <span className="text-primary">Work</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {[
                { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1875550606411951%2F&show_text=false&width=267&t=0', title: 'MH Recovery Service Ltd vehicle recovery reel 1' },
                { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F873741458961750%2F&show_text=false&width=267&t=0', title: 'MH Recovery Service Ltd vehicle recovery reel 2' },
                { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100076202805594%2Fvideos%2F1432920831085277%2F&show_text=false&width=267&t=0', title: 'MH Recovery Service Ltd recovery video 3' },
                { src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100076202805594%2Fvideos%2F934890138764598%2F&show_text=false&width=267&t=0', title: 'MH Recovery Service Ltd recovery video 4' },
              ].map(({ src, title }) => (
                <div key={src} className="w-full flex justify-center">
                  <iframe
                    src={src}
                    width="267"
                    height="476"
                    style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                    scrolling="no"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={title}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 md:mb-8 tracking-tight text-balance text-on-surface">
                  Serving <span className="text-primary">Sheffield</span> &amp; South Yorkshire
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg font-sans mb-8 md:mb-12 leading-relaxed">
                  We are based in Sheffield and cover the city and surrounding South Yorkshire areas including Rotherham, Barnsley, and Doncaster. Call us to confirm we cover your location.
                </p>
                <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary rounded-r-xl">
                  <p className="font-black uppercase tracking-[0.2em] mb-4 text-on-surface-variant text-xs md:text-sm">Our Address</p>
                  <div className="flex items-start gap-3 md:gap-4 mb-2">
                    <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">location_on</span>
                    <span className="text-lg md:text-2xl font-bold uppercase font-sans tracking-tight text-on-surface">Coupe Road, Sheffield, S3 9DP</span>
                  </div>
                </div>
              </div>
              <div className="h-64 sm:h-80 md:h-[450px] bg-surface-container-highest relative rounded-xl overflow-hidden shadow-2xl">
                <LazyVideo
                  className="w-full h-full object-cover"
                  src="/images/WhatsApp Video 2026-06-03 at 2.49.17 PM.mp4"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-14 rounded-xl overflow-hidden h-64 md:h-80 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Coupe+Road,+Sheffield,+S3+9DP&t=&z=16&ie=UTF8&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="MH Recovery Service Ltd location on Coupe Road, Sheffield S3 9DP"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">
                Vehicle Recovery Sheffield – <span className="text-primary">FAQs</span>
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-outline">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group py-5">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                    <h3 className="flex-1">{faq.q}</h3>
                    <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work Gallery */}
        <section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">
                Our <span className="text-primary">Work</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {galleryPosts.map((src, i) => (
                <div key={i} className="w-full flex justify-center overflow-hidden">
                  <iframe
                    src={src}
                    width="500"
                    height="375"
                    style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                    scrolling="no"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={`MH Recovery Service Ltd work photo ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-surface-container-low py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 text-on-surface">
              Need Vehicle Recovery in Sheffield?
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-8">
              Call MH Recovery Service Ltd for <strong>24/7 vehicle recovery in Sheffield</strong>. Tell us where you are and what has happened.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447799180009"
                className="flex items-center justify-center bg-primary text-on-primary py-4 px-8 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded"
              >
                Call: 07799 180009
              </a>
              <a
                href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20in%20Sheffield."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 font-extrabold text-base tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
