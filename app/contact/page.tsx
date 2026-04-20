'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="relative min-h-[360px] md:min-h-[614px] flex items-center px-4 md:px-8 lg:px-24 bg-surface overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              alt="Emergency tow truck with flashing lights"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdriJYB0qX4RZYSspJtK87apFl-vS7xHJOnjpLTmYBFNYL0cNVJepHKXxyXv5tYK5TCbu3MHTTjS9M5thX3HQe-RyR_09-3E_LLcYZp8Dzr0Z7gEZSlAfT9uE_5ezoFPdsKoDtz2FUxU8z0Uylzrc6ncB5GCrupCPHKsxH9dTtYNPMVANffaBJa5FpUMK2AnPMvfMAS9oWA7cAyFbLztdH7FI-hZc9bgvME_gAqL0iYqdmRwTBylEHRWaQ0GHOi-TPAt7WOW1KQpCd"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl py-12 md:py-0">
            <span className="inline-block bg-primary text-on-primary px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Contact Hussnain Car Recovery
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4 md:mb-8 uppercase text-on-surface text-balance">
              PRECISION <br />
              <span className="text-primary">RECOVERY</span> SYSTEMS
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Get in touch with our team for immediate roadside assistance. Operating with tactical speed across Sheffield and the North.
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
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">phone_in_talk</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Direct Dispatch</span>
                </div>
                <a href="tel:07799180009" className="block text-2xl md:text-3xl font-black text-on-surface mb-2 tracking-tight hover:text-primary transition-colors">
                  07799 180009
                </a>
                <p className="text-on-surface-variant text-sm leading-relaxed">Immediate response for vehicle recovery and accidents.</p>
              </div>

              <div className="bg-surface-container-high p-6 md:p-10 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">location_on</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Operational HQ</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-on-surface mb-2 tracking-tight">
                  Coupe Road, Sheffield, S3 9DP
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Strategic deployment center for all Sheffield sectors.</p>
              </div>

              <div className="bg-surface-container-highest p-6 md:p-10 rounded-xl sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">schedule</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Operational Status</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-on-surface mb-2 tracking-tight uppercase">
                  24/7 Rapid Service
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Full coverage including bank holidays and late-night emergencies.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface p-6 md:p-8 lg:p-12 rounded-xl border border-outline/20 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-on-surface mb-3 md:mb-4 uppercase tracking-tighter">
                Request Help Now
              </h2>
              <p className="text-on-surface-variant mb-6 md:mb-10 text-sm md:text-base">
                Deploy a recovery unit to your location by filling out the form below.
              </p>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Full Name</label>
                    <input
                      className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Phone Number</label>
                    <input
                      className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                      placeholder="Contact Number"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Location</label>
                  <input
                    className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                    placeholder="Current address or postcode"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">Situation Details</label>
                  <textarea
                    className="w-full bg-surface-container-highest border-none text-on-surface p-3 md:p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 rounded text-sm"
                    placeholder="Describe your situation (vehicle type, fault, etc.)"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-on-primary font-black py-4 md:py-5 text-base md:text-lg uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all rounded"
                  type="submit"
                >
                  Request Help Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-64 sm:h-80 md:h-[500px] bg-surface-container relative overflow-hidden">
          <div className="absolute inset-0 bg-surface/40 z-10 pointer-events-none"></div>
          <div className="w-full h-full">
            <img
              alt="Dark themed map of Sheffield area"
              className="w-full h-full object-cover grayscale opacity-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeuO5Nj6MvjxDl6iSBCinB4RQJOtNubkXj6d4AUBJjiH3d_Yuymx9ThOjlb4hshKlyxbq0kdk1oqqxnOcjhW4vQ0fQ5ghjQmC4m4yFvTLtcLdQkxqFSoub9Ek30C8bYoEXDWnLoyjhJgn0I9y_tdZJ7pLdbzl3IE_Fye6kNBdRpHWy4vyOOEDdRRB7EKUKOUxSDH0Uk5cx6Q2aAVF6BDMnfSrjwExJ_1hCiGAhF9HOoOnidiPPgxkvYt7ckXCAJ4MRLfD7Dn49ro0z"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute -inset-6 md:-inset-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="bg-primary text-on-primary p-3 md:p-4 rounded-full shadow-2xl relative z-30">
                <span className="material-symbols-outlined text-2xl md:text-4xl">local_shipping</span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 md:mt-4 bg-surface-container-highest px-3 md:px-4 py-1 md:py-2 rounded text-[9px] md:text-[10px] font-bold text-on-surface uppercase tracking-widest whitespace-nowrap border border-primary/30">
                Hussnain Recovery HQ
              </div>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="bg-primary px-4 md:px-8 lg:px-24 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h2 className="text-on-primary text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 leading-none text-balance">
              Call Now for Immediate Assistance
            </h2>
            <p className="text-on-primary/80 font-medium tracking-tight text-sm md:text-base">
              Our rapid response units are standing by 24/7 across South Yorkshire.
            </p>
          </div>
          <a
            className="shrink-0 bg-on-primary text-primary px-6 md:px-10 py-4 md:py-6 font-black text-xl md:text-2xl tracking-tighter hover:opacity-90 transition-all flex items-center gap-3 md:gap-4 rounded"
            href="tel:07799180009"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">call</span>
            07799 180009
          </a>
        </section>

      </main>
      <Footer />
    </>
  )
}
