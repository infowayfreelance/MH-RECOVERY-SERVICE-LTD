'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const WHATSAPP_NUMBER = '447799180009'

function sendToWhatsApp(name: string, phone: string, location: string, details: string) {
  const message = `Hello MH Recovery Service Ltd,%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Location:* ${encodeURIComponent(location)}%0A*Situation:* ${encodeURIComponent(details)}%0A%0APlease send me a quotation. Thank you.`
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}

export default function ContactPageClient() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [details, setDetails] = useState('')
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="relative min-h-[320px] md:min-h-[480px] flex items-center px-4 md:px-8 lg:px-24 bg-surface overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="MH Recovery Service Ltd recovery van in Sheffield"
              className="object-cover"
              src="/contact-sheffield-hero.webp"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl py-12 md:py-0">
            <span className="inline-block bg-primary text-on-primary px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Contact MH Recovery Service Ltd
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 md:mb-8 uppercase text-on-surface text-balance">
              Contact MH Recovery Service Ltd in Sheffield
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Call us on{' '}
              <a href="tel:+447799180009" className="text-primary font-bold hover:opacity-80 transition-opacity">
                07799 180009
              </a>{' '}
              or send a WhatsApp message. Our phone line is open 24/7.
            </p>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="px-4 md:px-8 lg:px-24 py-12 md:py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

            {/* Info Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="bg-surface-container-high p-6 md:p-10 rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" aria-hidden="true">phone_in_talk</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Emergency Line</span>
                </div>
                <a href="tel:+447799180009" className="block text-2xl md:text-3xl font-black text-on-surface mb-2 tracking-tight hover:text-primary transition-colors">
                  07799 180009
                </a>
                <p className="text-on-surface-variant text-sm leading-relaxed">Available 24 hours, 7 days a week.</p>
              </div>

              <div className="bg-surface-container-high p-6 md:p-10 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" aria-hidden="true">location_on</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Address</span>
                </div>
                <p className="text-lg md:text-2xl font-bold text-on-surface mb-2 tracking-tight">
                  Coupe Road, Sheffield, S3 9DP
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">South Yorkshire, UK</p>
              </div>

              <div className="bg-surface-container-highest p-6 md:p-10 rounded-xl sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" aria-hidden="true">schedule</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Opening Hours</span>
                </div>
                <p className="text-lg md:text-2xl font-bold text-on-surface mb-2 tracking-tight uppercase">
                  Open 24/7
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">Including bank holidays. Call any time.</p>
              </div>
        <section className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">Call or WhatsApp: Which Should You Use?</h2>
            <ul className="text-on-surface-variant text-sm md:text-base leading-relaxed space-y-4">
              <li><strong>Call 07799 180009</strong> if your vehicle has broken down or been in an accident and you need help now, or if you are somewhere that doesn&apos;t feel safe. A call lets us ask the questions we need to help you.</li>
              <li><strong>Use the WhatsApp form</strong> if you are safe and want a quote, if you are planning a collection for later, or if you want to send details or photos of the vehicle.</li>
              <li><strong>If anyone is hurt</strong> or the vehicle is blocking a dangerous stretch of road, call 999 first, then call us. The Highway Code&apos;s <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="text-primary underline">breakdowns and incidents rules</a> explain what to do while you wait.</li>
            </ul>
        </section>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface p-6 md:p-8 lg:p-12 rounded-xl border border-outline/20 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">
                Request Help Now
              </h2>
              <p className="text-on-surface-variant mb-6 md:mb-10 text-sm md:text-base">
                Fill in the form below and we will send you a quote via WhatsApp.
                Not sure what to write? See <Link href="#form-help" className="text-primary underline">what to put in each box</Link> below.
              </p>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  sendToWhatsApp(name, phone, location, details)
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Full Name</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Phone Number</label>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                      placeholder="Contact Number"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Location</label>
                  <input
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                    placeholder="Current address or postcode"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Situation Details</label>
                  <textarea
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                    placeholder="Describe your situation (vehicle type, fault, etc.)"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-black py-4 md:py-5 text-base md:text-lg uppercase tracking-widest hover:bg-[#1ebe5d] active:scale-[0.98] transition-all rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 21.8a.5.5 0 0 0 .637.606l4.83-1.376A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 1.5A8.5 8.5 0 1 1 12 20.5a8.454 8.454 0 0 1-4.163-1.094.75.75 0 0 0-.584-.068l-3.7 1.054 1.081-3.553a.75.75 0 0 0-.074-.6A8.458 8.458 0 0 1 3.5 12 8.5 8.5 0 0 1 12.001 3.5Zm-3.15 4.5c-.19 0-.495.071-.754.354-.26.283-1 .977-1 2.384 0 1.407 1.025 2.766 1.167 2.957.142.19 1.994 3.18 4.913 4.33 2.42.958 2.919.768 3.444.72.526-.048 1.698-.694 1.938-1.365.24-.67.24-1.244.168-1.364-.072-.12-.263-.191-.55-.334-.286-.143-1.697-.838-1.96-.934-.263-.096-.454-.143-.645.143-.19.286-.74.934-.905 1.124-.166.19-.33.214-.617.072-.286-.143-1.21-.446-2.304-1.422-.852-.759-1.427-1.697-1.594-1.983-.166-.286-.018-.44.125-.582.128-.127.287-.334.43-.5.142-.168.19-.287.285-.478.096-.19.048-.358-.024-.5-.071-.143-.635-1.558-.88-2.124-.225-.527-.46-.463-.636-.472a11.74 11.74 0 0 0-.55-.012Z"/>
                  </svg>
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="form-help" className="px-4 md:px-8 lg:px-24 py-12 md:py-24 bg-surface-container-low">
            <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">What to Put in Each Box</h2>
            <ul className="text-on-surface-variant text-sm md:text-base leading-relaxed space-y-4">
              <li><strong>Full Name:</strong> the person we should speak to.</li>
              <li><strong>Phone Number:</strong> a mobile you will keep switched on, so we can call you back.</li>
              <li><strong>Location:</strong> the street and postcode, or the car park name. If you don&apos;t know, give a nearby landmark or junction and share your location pin once WhatsApp opens.</li>
              <li><strong>Situation Details:</strong> what has happened, the make and model, whether the car starts, rolls and steers, whether you have the keys, and where you want it taken.</li>
            </ul>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">When you press <strong>Send on WhatsApp</strong>, your details open in WhatsApp, ready to send to us. We reply with a quote, and nothing is booked until you agree.</p>
        </section>

        <section className="px-4 md:px-8 lg:px-24 py-12 md:py-24 bg-surface-container-low">
            <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">Not an Emergency? Booking a Planned Collection</h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">You can also contact us to plan a move in advance: a non-running car going to a garage or MOT, a vehicle you&apos;ve bought, or a longer journey out of South Yorkshire. Tell us where the vehicle is, where it needs to go and when it needs to be there. See <Link href="/services/car-recovery-sheffield" className="text-primary underline">car recovery</Link>, <Link href="/services/car-towing-sheffield" className="text-primary underline">vehicle towing</Link> and <Link href="/services/long-distance-recovery-sheffield" className="text-primary underline">long distance recovery</Link>, or read our guide to <Link href="/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary underline">getting a car towed to a garage in Sheffield</Link>.</p>
        </section>

        {/* Map Section */}
        <section className="w-full h-64 sm:h-80 md:h-[500px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.6297063803272!2d-1.4621604!3d53.3959602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2aedd84647d64d99%3A0x3a8110a229539be!2sMH%20RECOVERY%20SERVICE%20LTD!5e1!3m2!1sen!2s!4v1791104368224!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="MH Recovery Service Ltd location on Coupe Road, Sheffield S3 9DP"
          />
        </section>

        <section id="faq" className="bg-surface py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">Common <span className="text-primary">Questions</span></h2>
            </div>
            <div className="space-y-0 divide-y divide-outline">
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Is your phone line really open 24/7?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Yes. Our phone line is open 24 hours a day, 7 days a week, including bank holidays. Call 07799 180009 at any time.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Should I call or send a WhatsApp message?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Call 07799 180009 if you need help now or you are somewhere unsafe. Use the WhatsApp form if you are safe and want a quote, or if you want to send details or photos of the vehicle.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">What should I write in the Situation Details box?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">What has happened, the make and model, whether the car starts, rolls and steers, whether you have the keys, and where you want it taken. A short, clear message is enough.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">What if I don&apos;t know exactly where I am?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Give us the road name, a nearby shop, pub or junction, and which way you were travelling. If you can, share your location pin on WhatsApp so we can see where you are.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Will you give me a price before you come out?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Yes. Fill in the form and we will send you a quote via WhatsApp, or ask for a price when you call. Nothing is booked until you agree.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Can someone else contact you for me?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Yes. A friend or family member can call or message us, but they will need your exact location, your phone number and the vehicle details, and we may need to speak to you to confirm them.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Do you only cover Sheffield?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">We provide 24/7 vehicle recovery in Sheffield and South Yorkshire. For longer journeys, see our <Link href="/services/long-distance-recovery-sheffield" className="text-primary underline">long distance recovery</Link> service.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">Can I book a planned collection rather than an emergency?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Yes. If your car needs to go to a garage, an MOT or a new address, call or use the form to tell us where it is, where it needs to go and when. Our guide to <Link href="/blog/how-to-get-car-towed-to-garage-sheffield" className="text-primary underline">getting your car towed to a garage in Sheffield</Link> explains what to expect.</p>
              </details>
              <details className="group py-5">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-base md:text-lg text-on-surface tracking-tight">
                  <h3 className="flex-1">What should I do while I wait for you?</h3>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">Stay somewhere safe, away from traffic, and keep your phone switched on so we can reach you. If you are on a busy road, the Highway Code&apos;s <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287" target="_blank" rel="noopener" className="text-primary underline">breakdown rules</a> explain where to wait.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="bg-primary px-4 md:px-8 lg:px-24 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h2 className="text-on-primary text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 leading-none text-balance">
              Call Now for Immediate Help
            </h2>
            <p className="text-on-primary/80 font-medium tracking-tight text-sm md:text-base">
              Our phone line is open 24/7 across Sheffield and South Yorkshire. If anyone is hurt or the vehicle is in a dangerous position, call 999 first.
            </p>
          </div>
          <a
            className="shrink-0 bg-on-primary text-primary px-6 md:px-10 py-4 md:py-6 font-black text-xl md:text-2xl tracking-tighter hover:opacity-90 transition-all flex items-center gap-3 md:gap-4 rounded"
            href="tel:+447799180009"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl" aria-hidden="true">call</span>
            07799 180009
          </a>
        </section>

      </main>
      <Footer />
    </>
  )
}

