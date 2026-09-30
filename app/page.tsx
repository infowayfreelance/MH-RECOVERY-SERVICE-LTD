import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LazyVideo from '@/components/LazyVideo'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-surface pt-8 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

            {/* Hero Image – shows first on mobile, right on desktop */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl">
                <Image
                  alt="Black Mercedes-Benz flatbed recovery truck ready for deployment in Sheffield"
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
                Sheffield&apos;s 24/7 Response
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-8 tracking-tighter text-on-surface text-balance">
                Car Recovery <span className="text-primary">Sheffield</span> – 24/7 Help
              </h1>
              <p className="text-sm md:text-xl text-on-surface-variant mb-5 md:mb-10 max-w-lg leading-relaxed font-sans">
                Car broken down? MH Recovery Service Ltd helps when your car stops working or is not safe to drive. Tell us where you are, what has happened, and where you need the car to go. We offer help day and night across Sheffield.
              </p>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-12">
                <a
                  href="tel:07799180009"
                  className="flex items-center justify-center bg-primary text-on-primary py-4 px-6 font-extrabold text-base md:text-lg text-center tracking-tight active:scale-95 transition-transform rounded min-h-[52px]"
                >
                  Call: 07799 180009
                </a>
                <a
                  href="https://wa.me/447799180009?text=Hello%20Hussnain%20Car%20Recovery%2C%20I%20need%20a%20quotation%20please."
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
                  <span className="material-symbols-outlined text-sm">check_circle</span> Fast Response
                </span>
                <span className="flex items-center gap-1.5 uppercase font-bold text-primary text-[0.6rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span> Local Sheffield Team
                </span>
                <span className="flex items-center gap-1.5 uppercase font-bold text-primary text-[0.6rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">payments</span> Affordable Prices
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* Help When Your Car Stops */}
        <section className="bg-surface-container py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                Help When Your Car Stops
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                A car problem can happen at home, at work, or on the road. Our <strong>24/7 recovery service</strong> is here when you need help in Sheffield. When you call, please tell us your location and what type of vehicle you have. We will talk you through the next step.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-on-surface">
                Local Help in <span className="text-primary">Sheffield</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed">
                Looking for a local car recovery service? We help drivers in Sheffield when their cars stop working or need to be moved. Tell us your exact location when you call. We will check availability and explain what happens next.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid – Same 9 Cards */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-2 md:mb-4 block">Car Recovery Sheffield</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-balance text-on-surface">Our Services</h2>
              <p className="text-on-surface-variant text-sm md:text-base font-sans mt-3 max-w-xl leading-relaxed mx-auto">We help with common car problems, from a flat battery to a car that needs towing. If you are unsure what kind of help you need, tell us what happened.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {servicesData.map((service, idx) => (
                <div key={idx} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col group sm:hover:bg-surface-container-highest transition-colors">
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <h3 className="text-base md:text-xl font-bold uppercase mb-2 md:mb-4 tracking-tight leading-snug">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed mb-5 md:mb-6 flex-1">{service.desc}</p>
                    <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 sm:gap-3">
                      <a
                        href="tel:07799180009"
                        className="flex items-center justify-center gap-2 flex-1 bg-primary text-on-primary py-3 sm:py-2.5 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:opacity-90 min-h-[48px] sm:min-h-0"
                        aria-label={`Call us about ${service.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                        </svg>
                        Call Now
                      </a>
                      <a
                        href={`https://wa.me/447799180009?text=Hello%20Hussnain%20Car%20Recovery%2C%20I%20need%20help%20with%20${encodeURIComponent(service.title)}%20please.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-[#25D366] text-white py-3 sm:py-2.5 px-4 font-bold text-sm tracking-tight rounded active:scale-95 transition-transform hover:bg-[#1ebe5d] min-h-[48px] sm:min-h-0"
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 md:mb-16 tracking-tight text-center text-balance text-on-surface">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
              {whyChooseData.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-high border border-outline flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary group-hover:text-on-primary transition-colors">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide leading-snug text-on-surface">{item.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Call Banner */}
        <section className="bg-primary py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-balance text-on-primary">
                Need Immediate Recovery?
              </h2>
              <p className="text-base md:text-xl font-medium text-on-primary opacity-80">
                Our dispatchers are standing by. Don&apos;t wait on the roadside.
              </p>
            </div>
            <a
              href="tel:07799180009"
              className="bg-on-primary text-primary py-4 md:py-6 px-8 md:px-12 text-2xl md:text-4xl font-black tracking-tight active:scale-95 transition-transform whitespace-nowrap rounded hover:opacity-90"
            >
              07799 180009
            </a>
          </div>
        </section>

        {/* What to Do if You Break Down */}
        <section className="bg-surface py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 text-on-surface">
              What to Do if You Break Down
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-6">
              If you can, stop in a safe place and turn on your hazard lights. Keep yourself and others away from moving traffic.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-8">
              Then call us. Tell us where you are, what car you drive, and what problem you can see.
            </p>
            <a
              href="tel:07799180009"
              className="inline-flex items-center justify-center bg-primary text-on-primary py-4 px-8 font-extrabold text-base md:text-lg tracking-tight active:scale-95 transition-transform rounded"
            >
              Call Now: 07799 180009
            </a>
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
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1875550606411951%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F873741458961750%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100076202805594%2Fvideos%2F1432920831085277%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100076202805594%2Fvideos%2F934890138764598%2F&show_text=false&width=267&t=0"
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-surface-container-low py-16 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 md:mb-8 tracking-tight text-balance text-on-surface">
                  Serving <span className="text-primary">Sheffield</span> &amp; Nearby Areas
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg font-sans mb-8 md:mb-12 leading-relaxed">
                  Strategically based in the heart of Sheffield, we provide rapid response recovery to the entire South Yorkshire region including Rotherham, Chesterfield, and Dronfield.
                </p>
                <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary rounded-r-xl">
                  <h4 className="font-black uppercase tracking-[0.2em] mb-4 text-on-surface-variant text-xs md:text-sm">Our Headquarters</h4>
                  <div className="flex items-start gap-3 md:gap-4 mb-2">
                    <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                    <span className="text-lg md:text-2xl font-bold uppercase font-sans tracking-tight text-on-surface">Coupe Road, Sheffield, S3 9DP</span>
                  </div>
                  <p className="text-on-surface-variant opacity-60 ml-9 md:ml-10 text-sm">Visit us for scheduled recovery inquiries or admin matters.</p>
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
        </section>
        {/* FAQ Section */}
        <section className="bg-surface py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">
                Car Recovery Sheffield – <span className="text-primary">FAQs</span>
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-outline">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group py-5">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                    <h3 className="flex-1">{faq.q}</h3>
                    <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5">expand_more</span>
                  </summary>
                  <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Need Help CTA */}
        <section className="bg-surface-container-low py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 text-on-surface">
              Need Help With Your Car?
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-sans leading-relaxed mb-8">
              Call MH Recovery Service Ltd for <strong>24/7 car recovery in Sheffield</strong>. Tell us where you are and what has happened, and we will discuss the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07799180009"
                className="flex items-center justify-center bg-primary text-on-primary py-4 px-8 font-extrabold text-base tracking-tight active:scale-95 transition-transform rounded"
              >
                Call: 07799 180009
              </a>
              <a
                href="https://wa.me/447799180009?text=Hello%20MH%20Recovery%2C%20I%20need%20help%20with%20car%20recovery%20please."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 font-extrabold text-base tracking-tight hover:bg-[#1ebe5d] active:scale-95 transition-all rounded"
              >
                Message on WhatsApp
              </a>
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
              {[
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid021QPHQNk1NZ14ktgr7cknHRTBcZEfWgCapfTLNE8vRjbxGt81vmm8RadgLNeiPTcQl%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02x3E2rz8awha4bf9PJJGaem95Nm83yTYA4eiHDZAKZ3YYcJQhsxHNXwdRPQSg8QAAl%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid033KERUru6EXDwfCArJL1DnwWb8G1j92MfQhQiUBeR6pPmKV4FeBkSgwgjRzd4nSRql%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02wscdB9iRFHrpvbu2dtSLCoHbTZqxNwLEG6PDhiDXH3A76jaqM3mTgi8f1DcvrpG1l%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0FJuHT4igyL7Tf39Hd2UcGGRCYWASLLHAFhWMb2Dk21oZVNoikVkHpd18t7YQYY2yl%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02xhSyQgec2qA3W9PYFAb8NgR5dGt1AH9wZZsc1JmvfB5pPjq2keyt8PnPdcdamSv6l%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ct1fPc4ewdWzpNpK1oXgfSLYhJY5oZwDffoA7pxNPawm5HfAwbQ8azxbLATBSoJ8l%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02VTizaL3j1F5EtYJyZFkbAxA7PKdhD4DbnHKumVCBVhPnReoM4LbvZYksDT3YQjZml%26id%3D100076202805594&show_text=false&width=500",
                "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02eFjeGnfEVZ2Hsn4ps58KMX3mLV9YZU6yVkMUju3o8dJBU9MsMfd54XKnNuqCZmLKl%26id%3D100076202805594&show_text=false&width=500",
              ].map((src, i) => (
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
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Data arrays for services and why choose
const servicesData = [
  { title: "Car Recovery Sheffield", desc: "If your car cannot be driven, we can help move it to a garage, your home, or another place you choose. Available 24/7 across Sheffield.", img: "/24 7 Car Recovery Sheffield MH.jpg" },
  { title: "Breakdown Recovery", desc: "Has your car stopped working on the road? Tell us where you are and what went wrong so we can arrange the right help.", img: "/Fast Breakdown Recovery MH.jpg" },
  { title: "Vehicle Recovery", desc: "We can help move a vehicle that has broken down or cannot be driven safely. Tell us the vehicle type when you get in touch.", img: "/Roadside Assistance MH.jpg" },
  { title: "Car Towing Sheffield", desc: "If your car needs to go to a garage or another place, contact us with the pickup and drop-off locations. We will discuss the job with you.", img: "/Car Towing Service MH.jpg" },
  { title: "Jump Start Service", desc: "If your car will not start because of a flat battery, get in touch. We can discuss whether a jump start is the right help for you.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Jump-Start-opt-JYsT9hrxSoSxpaw7paudJH4kEG6lMt.webp" },
  { title: "Flat Battery Help", desc: "Professional battery testing and jump starting for all vehicle makes. Get in touch if you think your battery is flat.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT-Image-Apr-23-2026-12_05_38-AM-opt-lbXtx7bcjdmQ5gQFYCuZ28Rn9mqkhQ.webp" },
  { title: "Accident Recovery Sheffield", desc: "Specialised handling for vehicles involved in road traffic accidents. Secure recovery and storage available.", img: "/Accident Recovery Sheffield MH.jpg" },
  { title: "Tyre Damage Assistance", desc: "Roadside wheel changes and tyre damage support when you do not have a spare or the right tools.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20Demage%20assistance-8r1QZ5Qls7ZajnSo6H2gquraMmlaCG.jpg" },
  { title: "Lost Car Keys Help", desc: "Entry assistance and vehicle recovery if you have been locked out or lost your vehicle keys.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lost-replacement-car-keys-dc9c3589-0QM0nZZ8CCSDpf8xpoPobBFiM474eR.jpeg" }
]

const faqData = [
  { q: "Do you offer car recovery in Sheffield?", a: "Yes. Contact us with your location in Sheffield and tell us what has happened to your car." },
  { q: "Are you available at night?", a: "Our recovery service is available 24/7. Call us to check help for your location." },
  { q: "What should I tell you when I call?", a: "Tell us your exact location, vehicle type, what went wrong, and where you want the vehicle taken." },
  { q: "Can you take my car to a garage?", a: "Yes, you can ask for your car to be taken to a garage. Give us the garage address when you call." },
  { q: "Can you take my car home?", a: "You can ask for your car to be taken home. Tell us the pickup and drop-off addresses so we can discuss the job." },
  { q: "What if my car will not start?", a: "Call us and explain what happens when you try to start it. This will help us understand what kind of support you may need." },
  { q: "Can you help with a flat battery?", a: "Get in touch if you think your battery is flat. We can discuss whether a jump start may help." },
  { q: "Do you recover vehicles after a breakdown?", a: "Yes. If your vehicle cannot be driven, tell us where it is and where you need it taken." },
  { q: "Can you tow my car?", a: "Contact us with your vehicle details and both locations. We can then discuss the tow with you." },
  { q: "How long will it take to reach me?", a: "This depends on your location and current availability. Call us for an update based on where you are." },
  { q: "How much does car recovery cost?", a: "The cost depends on the vehicle, pickup location, and where it needs to go. Contact us with these details to ask for a price." },
  { q: "What should I do if I break down on a busy road?", a: "Put your safety first. Move away from traffic if it is safe to do so. If anyone is in immediate danger, call the emergency services." },
]

const whyChooseData = [
  { icon: "timer", text: "Rapid Response Across Sheffield" },
  { icon: "engineering", text: "Experienced & Professional Team" },
  { icon: "history_toggle_off", text: "Available 24/7 – Day & Night" },
  { icon: "payments", text: "Reliable & Affordable Service" },
  { icon: "precision_manufacturing", text: "Modern Recovery Equipment" }
] 
