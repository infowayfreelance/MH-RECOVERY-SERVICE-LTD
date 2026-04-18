// app/contact/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center px-8 md:px-24 bg-surface overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              alt="Emergency tow truck with flashing lights"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdriJYB0qX4RZYSspJtK87apFl-vS7xHJOnjpLTmYBFNYL0cNVJepHKXxyXv5tYK5TCbu3MHTTjS9M5thX3HQe-RyR_09-3E_LLcYZp8Dzr0Z7gEZSlAfT9uE_5ezoFPdsKoDtz2FUxU8z0Uylzrc6ncB5GCrupCPHKsxH9dTtYNPMVANffaBJa5FpUMK2AnPMvfMAS9oWA7cAyFbLztdH7FI-hZc9bgvME_gAqL0iYqdmRwTBylEHRWaQ0GHOi-TPAt7WOW1KQpCd"
            />
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block bg-primary text-on-primary px-3 py-1 text-xs font-bold tracking-widest uppercase mb-6">
              Contact Hussnain Car Recovery
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase text-white">
              PRECISION <br />
              <span className="text-primary">RECOVERY</span> SYSTEMS
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Get in touch with our team for immediate roadside assistance.
              Operating with tactical speed across Sheffield and the North.
            </p>
          </div>
        </section>

        {/* Contact Details & Form Bento Grid */}
        <section className="px-8 md:px-24 py-24 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Details Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-container-high p-10 rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    phone_in_talk
                  </span>
                  <span className="font-label text-xs font-bold tracking-widest text-primary uppercase">
                    Direct Dispatch
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                  07799 180009
                </h3>
                <p className="text-on-surface-variant">
                  Immediate response for vehicle recovery and accidents.
                </p>
              </div>
              <div className="bg-surface-container-high p-10 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    location_on
                  </span>
                  <span className="font-label text-xs font-bold tracking-widest text-primary uppercase">
                    Operational HQ
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  Coupe Road, Sheffield, S3 9DP
                </h3>
                <p className="text-on-surface-variant">
                  Strategic deployment center for all Sheffield sectors.
                </p>
              </div>
              <div className="bg-surface-container-highest p-10 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    schedule
                  </span>
                  <span className="font-label text-xs font-bold tracking-widest text-primary uppercase">
                    Operational Status
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">
                  24/7 Rapid Service
                </h3>
                <p className="text-on-surface-variant">
                  Full coverage including bank holidays and late-night
                  emergencies.
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-7 bg-surface p-8 md:p-12 rounded-xl border border-outline-variant/20 shadow-2xl">
              <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                Request Help Now
              </h2>
              <p className="text-on-surface-variant mb-10">
                Deploy a recovery unit to your location by filling out the
                tactical briefing below.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50"
                      placeholder="OPERATOR NAME"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50"
                      placeholder="CONTACT NUMBER"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                    Location
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50"
                    placeholder="CURRENT COORDINATES OR ADDRESS"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                    Mission Details
                  </label>
                  <textarea
                    className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50"
                    placeholder="DESCRIBE THE SITUATION (E.G., VEHICLE TYPE, FAULT)"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-secondary text-on-secondary font-headline font-black py-5 text-lg uppercase tracking-widest hover:bg-white active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Request Help Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[500px] bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/40 z-10 pointer-events-none"></div>
          <div className="w-full h-full bg-[#111318]">
            <img
              alt="Dark themed map of Sheffield area"
              className="w-full h-full object-cover grayscale opacity-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeuO5Nj6MvjxDl6iSBCinB4RQJOtNubkXj6d4AUBJjiH3d_Yuymx9ThOjlb4hshKlyxbq0kdk1oqqxnOcjhW4vQ0fQ5ghjQmC4m4yFvTLtcLdQkxqFSoub9Ek30C8bYoEXDWnLoyjhJgn0I9y_tdZJ7pLdbzl3IE_Fye6kNBdRpHWy4vyOOEDdRRB7EKUKOUxSDH0Uk5cx6Q2aAVF6BDMnfSrjwExJ_1hCiGAhF9HOoOnidiPPgxkvYt7ckXCAJ4MRLfD7Dn49ro0z"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="bg-primary text-on-primary p-4 rounded-full shadow-2xl relative z-30">
                <span className="material-symbols-outlined text-4xl">
                  local_shipping
                </span>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-surface-container-highest px-4 py-2 rounded text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap border border-primary/30">
                Hussnain Recovery HQ
              </div>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="bg-primary px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:px-24">
          <div>
            <h2 className="text-on-primary text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 leading-none">
              Call Now for Immediate Assistance
            </h2>
            <p className="text-on-primary/80 font-medium tracking-tight">
              Our rapid response units are standing by 24/7 across South
              Yorkshire.
            </p>
          </div>
          <a
            className="bg-on-primary text-primary px-10 py-6 font-headline font-black text-2xl tracking-tighter hover:bg-surface-container-lowest hover:text-white transition-all flex items-center gap-4"
            href="tel:07799180009"
          >
            <span className="material-symbols-outlined text-3xl">call</span>
            07799 180009
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
} 
