'use client'

import { useState } from 'react'
import Image from 'next/image'
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface p-6 md:p-8 lg:p-12 rounded-xl border border-outline/20 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">
                Request Help Now
              </h2>
              <p className="text-on-surface-variant mb-6 md:mb-10 text-sm md:text-base">
                Fill in the form below and we will send you a quote via WhatsApp.
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

        {/* Map Section */}
        <section className="w-full h-64 sm:h-80 md:h-[500px] bg-surface-container relative overflow-hidden">
          <div className="absolute inset-0 bg-surface/40 z-10 pointer-events-none"></div>
          <div className="relative w-full h-full">
            <Image
              alt="Map showing Sheffield area, South Yorkshire"
              className="object-cover grayscale opacity-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeuO5Nj6MvjxDl6iSBCinB4RQJOtNubkXj6d4AUBJjiH3d_Yuymx9ThOjlb4hshKlyxbq0kdk1oqqxnOcjhW4vQ0fQ5ghjQmC4m4yFvTLtcLdQkxqFSoub9Ek30C8bYoEXDWnLoyjhJgn0I9y_tdZJ7pLdbzl3IE_Fye6kNBdRpHWy4vyOOEDdRRB7EKUKOUxSDH0Uk5cx6Q2aAVF6BDMnfSrjwExJ_1hCiGAhF9HOoOnidiPPgxkvYt7ckXCAJ4MRLfD7Dn49ro0z"
              fill
              sizes="100vw"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute -inset-6 md:-inset-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="bg-primary text-on-primary p-3 md:p-4 rounded-full shadow-2xl relative z-30">
                <span className="material-symbols-outlined text-2xl md:text-4xl" aria-hidden="true">local_shipping</span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 md:mt-4 bg-surface-container-highest px-3 md:px-4 py-1 md:py-2 rounded text-[9px] md:text-[10px] font-bold text-on-surface uppercase tracking-widest whitespace-nowrap border border-primary/30">
                MH Recovery Service Ltd
              </div>
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
              Our phone line is open 24/7 across Sheffield and South Yorkshire.
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
