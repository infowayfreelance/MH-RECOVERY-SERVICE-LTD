import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About MH Recovery Service Ltd | Sheffield Recovery Team',
  description: 'Meet MH Recovery Service Ltd, a recovery team serving Sheffield. Learn about our approach to helping drivers with breakdowns and vehicle transport.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About MH Recovery Service Ltd | Sheffield Recovery Team',
    description: 'Meet MH Recovery Service Ltd, a recovery team serving Sheffield. Learn about our approach to helping drivers with breakdowns and vehicle transport.',
    url: 'https://mhrrecoveryservice.co.uk/about',
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/Open Graph MH-airanko.webp',
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Car Recovery Sheffield 24/7',
      },
    ],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://mhrrecoveryservice.co.uk/about',
  name: 'About MH Recovery Service Ltd',
  description: 'MH Recovery Service Ltd is a vehicle recovery team serving Sheffield. We help drivers when their cars break down, will not start, or need to be moved.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'MH Recovery Service Ltd',
    url: 'https://mhrrecoveryservice.co.uk',
    telephone: '+447799180009',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sheffield',
      addressCountry: 'GB',
    },
    areaServed: 'Sheffield',
  },
}

export default function About() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="relative min-h-[480px] md:h-[716px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <Image
              className="object-cover opacity-40 mix-blend-luminosity"
              alt="Front view of a blacked-out Mercedes-Benz Sprinter recovery van with custom LED lighting"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our%20recovery%20van-yv5BCjbV8hr1cgt150c8J0X8v75rRn.jpeg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Sheffield Recovery Team
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-on-surface tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6 text-balance">
                About MH <br />
                <span className="text-primary">Recovery Service Ltd</span>
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-2 md:mb-3">
                A local team helping drivers in Sheffield.
              </p>
              <p className="text-base md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-6 md:mb-10">
                Clear advice when your vehicle lets you down.
              </p>
              <p className="text-base md:text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed mb-6 md:mb-10">
                MH Recovery Service Ltd is a vehicle recovery team serving Sheffield. We help drivers when their cars break down, will not start, or need to be moved.
              </p>
              <a
                href="tel:07799180009"
                className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-6 md:px-10 py-4 md:py-5 text-base md:text-xl font-black uppercase hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  phone_in_talk
                </span>
                Call Us: 07799 180009
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-14 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tighter mb-5 md:mb-8 flex items-center gap-4">
                  <span className="w-8 md:w-12 h-[2px] bg-primary shrink-0"></span> Who We Are
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    We work with drivers who need help with a car or motorcycle. Whether your vehicle is at home or on the road, you can contact us to discuss the problem.
                  </p>
                  <p>
                    We know a breakdown can upset your plans. Our aim is to make arranging help simple, with clear details about the recovery and where your vehicle will go.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    className="w-full aspect-video object-cover"
                    alt="Recovery team working on a vehicle in Sheffield"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Recovery-opt-jK0Oh9JpStKSKOwrFlMiRJxvD4tR9S.webp"
                    width={1280}
                    height={720}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary p-5 md:p-8">
                    <p className="text-on-primary font-black text-xl md:text-3xl uppercase tracking-tighter">
                      Sheffield
                    </p>
                    <p className="text-on-primary/80 text-xs uppercase font-bold">
                      Recovery Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Aim */}
        <section className="py-14 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-surface-container-highest p-6 md:p-12 lg:p-20 relative overflow-hidden rounded-xl">
              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10">
                <span className="material-symbols-outlined text-[8rem] md:text-[12rem]">verified_user</span>
              </div>
              <div className="max-w-3xl relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tighter mb-5 md:mb-8">
                  Our Aim
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-on-surface font-light leading-tight mb-6">
                  We want drivers to understand what happens next. That starts with listening to the problem and explaining the help we can offer.
                </p>
                <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
                  Before arranging a recovery, we discuss your location, vehicle, and destination. You can ask about the price and estimated arrival time when you call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-14 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-3">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface uppercase tracking-tighter">
                  Our Approach
                </h2>
              </div>
              <div className="h-[2px] flex-grow mx-0 md:mx-8 bg-outline/20 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>hearing</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">We Listen</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Tell us what happened and what help you need. Details about your vehicle help us understand the job before arranging recovery.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">We Explain</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">We discuss the next steps in plain English. If you are unsure about anything, ask us before the recovery is arranged.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">We Plan the Move</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Let us know if your vehicle cannot roll or steer, or if it has damaged wheels. This helps us check the equipment needed to load it.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">We Keep Things Clear</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Tell us where you want the vehicle taken. We will discuss the journey and price so you know what has been agreed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Help for Cars and Motorcycles */}
        <section className="py-14 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tighter mb-5 md:mb-8 flex items-center gap-4">
                <span className="w-8 md:w-12 h-[2px] bg-primary shrink-0"></span> Help for Cars and Motorcycles
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-5">
                Our services include car recovery, breakdown recovery, towing, jump starts, and motorcycle recovery. Contact us to discuss which service fits your problem.
              </p>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                Visit Our Services to see the help available and learn what details to have ready when you call.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-3 font-bold uppercase tracking-tight hover:bg-primary hover:text-on-primary transition-colors rounded"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Serving Sheffield */}
        <section className="py-14 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tighter mb-4 md:mb-6 text-balance">
                  Serving Sheffield
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg mb-4 leading-relaxed">
                  We help drivers in Sheffield who need their vehicles recovered or moved. Share your postcode, road name, or a nearby landmark when you contact us.
                </p>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                  For a pickup outside Sheffield, call to check coverage. Give us both locations so we can discuss the journey.
                </p>
              </div>
              <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative border border-outline/10">
                <Image
                  className="object-cover grayscale opacity-60"
                  alt="Sheffield area where MH Recovery Service Ltd operates"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Breakdown-opt-y73ndhbUFt5iANdjovdSfsAThW78ws.webp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/20 p-6 md:p-8 rounded-full animate-pulse">
                    <div className="bg-primary p-3 md:p-4 rounded-full shadow-lg">
                      <span className="material-symbols-outlined text-on-primary">my_location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Talk to Our Team */}
        <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-on-primary uppercase tracking-tighter mb-4 md:mb-6 text-balance">
              Talk to Our Team
            </h2>
            <p className="text-on-primary/80 text-base md:text-xl font-medium mb-7 md:mb-10 max-w-2xl mx-auto">
              Need help with your vehicle or have a question about recovery? Tell us where you are and what has happened.
            </p>
            <p className="text-on-primary/70 text-sm md:text-base mb-7 md:mb-10">
              Call us for urgent help, or visit Contact Us for our contact details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:07799180009"
                className="inline-flex items-center gap-3 md:gap-4 bg-on-primary text-primary px-6 md:px-10 py-4 md:py-5 text-lg md:text-2xl font-black uppercase hover:opacity-90 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-xl md:text-3xl">call</span>
                Call Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 md:gap-4 bg-transparent text-on-primary border-2 border-on-primary px-6 md:px-10 py-4 md:py-5 text-lg md:text-2xl font-black uppercase hover:bg-on-primary hover:text-primary transition-all active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
