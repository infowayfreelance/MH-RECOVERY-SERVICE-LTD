import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Vehicle Recovery Services Sheffield | MH Recovery',
  description: 'Need vehicle recovery services in Sheffield? Get help with breakdowns, car towing, flat batteries and motorcycle recovery. Call MH Recovery Service Ltd.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Vehicle Recovery Services Sheffield | MH Recovery',
    description: 'Need vehicle recovery services in Sheffield? Get help with breakdowns, car towing, flat batteries and motorcycle recovery. Call MH Recovery Service Ltd.',
    url: `${SITE_URL}/services`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Car Recovery Sheffield 24/7',
      },
    ],
  },
}

const services = [
  {
    title: 'Car Recovery',
    desc: 'If your car is not safe to drive, we can help take it to a garage, your home, or another agreed place. Tell us where the car is and where you need it to go.',
    img: '/car-recovery-sheffield.jpg',
    alt: 'Car recovery truck transporting a vehicle in Sheffield',
    icon: 'directions_car',
    href: '/services/car-recovery-sheffield',
  },
  {
    title: 'Breakdown Recovery',
    desc: 'Has your vehicle stopped working during a journey? Contact us with your location and the problem. We can arrange recovery if you cannot carry on driving.',
    img: '/breakdown-recovery-sheffield.jpg',
    alt: 'Breakdown recovery service in Sheffield',
    icon: 'build',
    href: '/services/breakdown-recovery-sheffield',
  },
  {
    title: 'Car Towing',
    desc: 'We can help take your car from one place to another. Share the pickup address and where it needs to go so we can discuss the tow and price.',
    img: '/car-towing-sheffield.jpg',
    alt: 'Car towing service in Sheffield',
    icon: 'rv_hookup',
    href: '/services/car-towing-sheffield',
  },
  {
    title: 'Jump Starts',
    desc: 'A flat battery may stop your car from starting. Tell us what happens when you turn the key or press the start button. We can discuss whether a jump start may help.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Jump-Start-opt-JYsT9hrxSoSxpaw7paudJH4kEG6lMt.webp',
    alt: 'Jump start service for a flat battery',
    icon: 'bolt',
  },
  {
    title: 'Motorcycle Recovery',
    desc: 'If your motorcycle breaks down or cannot be ridden, we can help move it. Tell us the bike model, its condition, and where you want it taken.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20Demage%20assistance-8r1QZ5Qls7ZajnSo6H2gquraMmlaCG.jpg',
    alt: 'Motorcycle recovery service',
    icon: 'two_wheeler',
  },
  {
    title: 'Accident Recovery Sheffield',
    desc: 'Specialised handling for vehicles involved in road traffic accidents. Secure recovery and storage available.',
    img: '/accident-recovery-sheffield.jpg',
    alt: 'Accident recovery service in Sheffield',
    icon: 'warning',
  },
  {
    title: 'Tyre Damage Assistance',
    desc: 'Roadside wheel changes and tyre damage support when you do not have a spare or the right tools.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20Demage%20assistance-8r1QZ5Qls7ZajnSo6H2gquraMmlaCG.jpg',
    alt: 'Tyre damage assistance service',
    icon: 'tire_repair',
  },
  {
    title: 'Lost Car Keys Help',
    desc: 'Entry assistance and vehicle recovery if you have been locked out or lost your vehicle keys.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lost-replacement-car-keys-dc9c3589-0QM0nZZ8CCSDpf8xpoPobBFiM474eR.jpeg',
    alt: 'Lost car keys help service',
    icon: 'key',
  },
]

const steps = [
  {
    num: '1',
    icon: 'phone_in_talk',
    title: 'Call Us',
    desc: 'Tell us your exact location, vehicle details, and what has happened. Share the drop-off address if you already know where the vehicle needs to go.',
  },
  {
    num: '2',
    icon: 'mms',
    title: 'Arrange Help',
    desc: 'We will discuss the help needed, availability, and price. You can also ask for an estimated arrival time.',
  },
  {
    num: '3',
    icon: 'local_shipping',
    title: 'Move Your Vehicle',
    desc: 'We will arrange to load and secure your vehicle for transport. It will then be taken to the place agreed with you.',
  },
]

const faqs = [
  { q: 'What recovery services do you offer?', a: 'We offer car recovery, breakdown recovery, vehicle recovery, towing, jump starts, and motorcycle recovery. Call us to discuss the help you need.' },
  { q: 'Are you available 24/7?', a: 'Yes, you can contact us day or night. We will check availability for your location when you call.' },
  { q: 'Which areas do you cover?', a: 'We offer recovery in Sheffield. For a pickup outside the city, contact us with the location so we can check coverage.' },
  { q: 'How much does recovery cost?', a: 'The price depends on your vehicle, its condition, and the journey. Share the pickup and drop-off details when asking for a price.' },
  { q: 'How soon can you reach me?', a: 'Arrival time depends on your location, traffic, and availability. Call us for an estimate for your job.' },
  { q: 'What details do you need?', a: 'We need your location, vehicle type, a short description of the problem, and the destination. Tell us about any damage that may make loading harder.' },
  { q: 'Can you take my car to a garage?', a: 'Yes, we can arrange transport to an agreed garage. Please give us the address and check that the garage can receive your car.' },
  { q: 'Can you take my vehicle home?', a: 'We can discuss taking it to your home. Tell us the address and whether there is enough space to unload the vehicle.' },
  { q: 'Do you recover motorcycles?', a: 'Yes, we offer motorcycle recovery. Tell us the bike model and whether it has any damage or loading problems.' },
  { q: 'Can you recover a vehicle that will not start?', a: 'Yes, contact us if your vehicle will not start. Tell us whether the wheels can move and whether the vehicle can steer.' },
  { q: 'Can a jump start fix my car?', a: 'A jump start may help if the battery is flat. It will not fix every starting problem, so tell us what happens when you try to start the car.' },
  { q: 'Can you move a car with damaged wheels?', a: 'Contact us with details of the damage. We need to check the loading needs before confirming the recovery.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[420px] md:min-h-[600px] flex items-center pt-24 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="MH Recovery Service Ltd flatbed recovery truck in Sheffield"
              className="object-cover"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20image-TDUJ1HnPhVR1WhekWwkpOOOSw5v25V.jpeg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <span className="inline-block bg-primary-container text-white text-[0.6rem] font-bold tracking-widest px-3 py-1 mb-4 uppercase border border-primary/30">
                Available 24/7
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 uppercase text-on-surface text-balance">
                Vehicle Recovery <span className="text-primary">Services</span> in Sheffield
              </h1>
              <p className="text-on-surface-variant text-sm md:text-base mb-2">Car broken down or bike stopped working?</p>
              <p className="text-on-surface-variant text-sm md:text-base mb-2">Tell us where you are and what has happened.</p>
              <p className="text-on-surface-variant text-sm md:text-base mb-8">Get help day or night.</p>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl leading-relaxed font-sans">
                MH Recovery Service Ltd offers vehicle recovery services in Sheffield. We help when your car breaks down, needs towing, or will not start. We also offer motorcycle recovery for bikes that cannot be ridden.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07799180009"
                  className="flex items-center justify-center bg-primary text-on-primary py-4 px-6 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
                >
                  Call for Help
                </a>
                <a
                  href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20help%20please."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 font-extrabold text-base tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded min-h-[52px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-on-surface">Our Recovery Services</h2>
              <div className="h-1 w-16 bg-primary mb-4 mx-auto" />
              <p className="text-on-surface-variant text-base md:text-lg font-sans max-w-2xl leading-relaxed mx-auto">
                From a flat battery to a vehicle that needs moving, we help with common problems on the road. Choose a service below, or call us if you are unsure what help you need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col">
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">{service.icon}</span>
                      <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-on-surface">{service.title}</h3>
                    </div>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed mb-5 flex-1">{service.desc}</p>
                    {'href' in service && service.href && (
                      <Link
                        href={service.href}
                        className="text-primary text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity mb-3 flex items-center gap-1"
                      >
                        Learn more
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                      </Link>
                    )}
                    <div className="flex flex-col xs:flex-row gap-2">
                      <a
                        href="tel:07799180009"
                        className="flex items-center justify-center gap-2 flex-1 bg-primary text-on-primary py-3 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:opacity-90 min-h-[48px]"
                        aria-label={`Call us about ${service.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                        </svg>
                        Call Now
                      </a>
                      <a
                        href={`https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20help%20with%20${encodeURIComponent(service.title)}%20please.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-[#25D366] text-white py-3 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:bg-[#1ebe5d] min-h-[48px]"
                        aria-label={`WhatsApp us about ${service.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.78L2 30l7.42-1.82A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.08 1.1-4.28-.28-.44A11.5 11.5 0 1 1 16 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.22 3.32 1.4 3.55c.17.23 2.4 3.67 5.82 5.15.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <Image
                alt="Recovery truck equipment"
                className="w-full aspect-square object-cover rounded-xl"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Breakdown-opt-y73ndhbUFt5iANdjovdSfsAThW78ws.webp"
                width={800}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-tight text-on-surface">
                Our Recovery <span className="text-primary">Equipment</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans mb-4 leading-relaxed">
                The right equipment helps us load and move your vehicle. When you call, let us know if it has low ground clearance, damaged wheels, or any other loading problems.
              </p>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                These details help us plan the recovery. Please also tell us if the vehicle cannot roll or steer.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-3 text-on-surface">
                How It Works
              </h2>
              <div className="h-1 w-12 md:w-16 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step) => (
                <div key={step.num} className="relative text-center">
                  <div className="text-[80px] md:text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none select-none" aria-hidden="true">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8 relative z-10 border border-primary/20">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary" aria-hidden="true">{step.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase mb-3 text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm px-2 md:px-4 leading-relaxed font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sheffield Coverage */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              Sheffield Coverage
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">
              We help drivers who need local recovery in Sheffield. Give us your postcode, road name, or a nearby landmark so we can find your location.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              If you are outside Sheffield, call to check coverage. Tell us both the pickup and drop-off locations before arranging the job.
            </p>
          </div>
        </section>

        {/* Before You Call */}
        <section className="bg-surface-container py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              Before You Call
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-4">
              Have your vehicle make, model, and registration ready if you can. Tell us whether it starts, rolls, and steers, as these details can affect how it is loaded.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
              If you are still choosing a garage, let us know. We can discuss the recovery while you confirm where the vehicle should go.
            </p>
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
                Common <span className="text-primary">Questions</span>
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-outline">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
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

        {/* Final CTA */}
        <section className="bg-primary text-on-primary py-16 md:py-24 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none text-balance">
              Need Recovery Help?
            </h2>
            <p className="text-base md:text-lg font-sans mb-8 md:mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
              Call MH Recovery Service Ltd and tell us where your vehicle is. We will discuss the help you need, the price, and where it should be taken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07799180009"
                className="flex items-center justify-center bg-on-primary text-primary py-4 px-8 font-black text-lg tracking-tight active:scale-95 transition-transform rounded hover:opacity-90"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%20Service%20Ltd%2C%20I%20need%20vehicle%20recovery%20help%20please."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 font-black text-lg tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded"
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
