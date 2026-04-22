// app/services/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[420px] md:min-h-[716px] flex items-center pt-24 md:pt-20 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              alt="Recovery truck"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhEgBYURIjd_3V6cX8DZKzuOHfIym9e2kczk-UabpZzWIZwniWCNXaPbrUicRIwxYVioHwhguRuOs_Q5r2fzY9A-BB5cRlcyh5uRKN8VQdgWKM0NwEUmBoLn7yD20IZ2nDGm9fFDxj3ZnQA9uETpUA33_IpwqNIe-ojrbNAEwmSsPkkqSSJZILoTBnIbodVEJ6-UmW86n4A6O-kuuXCM63NryUspOwjx5bSEkbPxHhcrd_cWaqqXqz4GODwhe7UwLsSR_35OM92tFL"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto w-full">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary-container text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 mb-4 md:mb-6 border-l-4 border-primary">
                24/7 TACTICAL READINESS
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-5 md:mb-8 uppercase text-on-surface text-balance">
                EXPERT <br className="hidden sm:block" /> RECOVERY <br className="hidden sm:block" /> <span className="text-primary">SERVICES</span>
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
                Comprehensive 24/7 roadside assistance and vehicle transport across Sheffield and beyond. Professional solutions for every breakdown scenario.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-3 md:mb-4 text-on-surface text-balance">
                  Core Response Capabilities
                </h2>
                <div className="h-1 w-16 md:w-24 bg-primary"></div>
              </div>
              <p className="text-on-surface-variant max-w-md uppercase text-xs tracking-widest font-bold">
                Deploying precision assets to your location within 45 minutes of dispatch confirmation.
              </p>
            </div>

            {/* 24/7 Car Recovery Feature */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline/10 mb-px rounded-xl overflow-hidden">
              <div className="lg:col-span-7 bg-surface-container-high p-6 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-widest text-xs md:text-sm mb-3 md:mb-4 uppercase">
                  Primary Operation
                </span>
                <h3 className="text-2xl md:text-4xl font-bold uppercase mb-4 md:mb-6 tracking-tighter text-on-surface">
                  24/7 Car Recovery
                </h3>
                <p className="text-on-surface-variant text-base md:text-lg mb-6 md:mb-10 leading-relaxed">
                  Our flagship service provides rapid vehicle extraction and transport for passenger cars, light commercial vehicles, and motorcycles. Available 365 days a year, we ensure your vehicle is transported safely to your preferred destination or our secure storage facility.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                  {["Rapid Response Dispatch", "Multi-Car Capability", "Full UK Coverage", "GPS Live Tracking"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-tight text-on-surface">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span> {feat}
                    </li>
                  ))}
                </ul>
                <a href="tel:07799180009" className="self-start bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 font-black uppercase text-xs md:text-sm tracking-widest hover:opacity-90 transition-opacity">
                  CALL TO DEPLOY
                </a>
              </div>
              <div className="lg:col-span-5 min-h-[220px] md:min-h-[400px]">
                <img
                  alt="Professional flatbed recovery truck"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjF1tG4cDKfM6hbbUb2mHHSKUZFQ9g0R9OV4Lxfo3Yyjv0Yw_t1KaxnDZ8CsPPbQhD6SfdDejBbs2uJ1TN9UclqM68X7ttopoF9NItAA_szb9iHxMx2eQXJkHfuAtMus4CAEJPfZcP00SzVOM7Vnh1NOhfNtre7nwVYaAk2bz4rBMNacOXr2anW0rL7xqSJZgZoZOmljGc3BhFxXo76MvyoIrgOvNWealpm-7fq3udmvRAuN5JcyI1Y_AKPZlGH_siilY7vRxh8VL"
                />
              </div>
            </div>

            {/* Roadside & Specialized Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-outline/10 rounded-xl overflow-hidden mt-px">
              {[
                { icon: "build", title: "Roadside Assistance", desc: "On-site diagnostics, battery jumpstarts, and tyre changes to get you back on the move without a tow.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6yiOYBC2y4sEBR5XjYjwV2N5J2xBAxChbEBxKBG9uhNfnq5IH1Y0lWENj8oLeAt5dwST09LNBR1DF9w5rF5nYYs9fq4NwcXnJiHPVH3SNXoW5s6Ky4RJoicTGWd-65wYp48FKg5OcqttwCilybmBjdMaHTTnxBftTrgNslbSmIRbz1DSeC-8gLIjIABpUL41nZsaY1CmuSkr5QygG1AHa81mnFwqdryU3iVMK6ZLfCwgSFGWlaxNkOjnEjWYwomSC14ZcOZ0Hbfgm", alt: "Roadside mechanic" },
                { icon: "warning", title: "Accident Recovery", desc: "Specialized lifting and extraction for vehicles involved in collisions. Safe handling of damaged structural integrity.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxicMNZOIXMZ_OFpgQxvZiBlCY6Qd_Wthh9PL91uSvA1wIZdzSVO96r2ZoilP0RETcYfifB9gG0UHF2LwKkVbP1I3jglelPRVGaK7-N5aeU7SZQ39ZqxXu0M459Q-buqE-AEcwssCCJbkLjisZsAkSRPonWJmUa4tX2mkRJT44bFyBRaZ0-MbzIhsU2eDJdSlu5Zw6VyS15HcS6WwWLRU2NcPCT61xqmHzNICgzhqmbIeDjT9kyXebpEv1LeQPIi75F7v15DqSSYYa", alt: "Accident scene" },
                { icon: "key", title: "Lost Keys & Lockouts", desc: "Non-destructive entry techniques for locked vehicles and transport to main dealers for key replacement.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqaXUWkIm5DkVUzOMRQSZArZvY8Z2dPIbZ8jd32hQWUJ6Kl_H1AerfJZIXq3KmlOxQrc_IhLx1rQLqTgPYZFCiKtibVbtcnoSZCBqLfdKj0HpiiOi8HEPqKs0nUsv3IeSvTVyIBGVMnr_Uy2fUZsael_ZX4m0H-RwzZ9AzEJOgzlEH0pXe3BPpvowMWjR3fq367DC_S9TZJ83CRZT_qldls716-O8SBDgxnGQA0Dkx272P72x4pMAup9t9CaDoul_r1K0KL5Nc252L", alt: "Car Key" },
              ].map((s, i) => (
                <div key={i} className="bg-surface-container-high p-6 md:p-10">
                  <div className="mb-5 md:mb-8">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">{s.icon}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-tighter text-on-surface">{s.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5 md:mb-8">{s.desc}</p>
                  <img alt={s.alt} className="w-full h-36 md:h-48 object-cover" src={s.img} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tactical Fleet */}
        <section className="bg-surface py-12 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="relative">
              <img
                alt="Fleet detail"
                className="relative z-10 w-full aspect-square object-cover rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcKkzq2kYqkfWXhpxz6U0GXKOih-KOR0zIj3ujaHc1Yob6urp_I4ggx1nBYmGonuSFJ2ezi5kUzPVeihrcPOA6RrPsW14qS_Vmen3QP2ZqLOre7dBKgnIZQi0KRA4Sz4YtRIUmFVwuW6TqDwF1pRqlD7K7StL_tBedmo5FNPRtb56IY-UQb6RvhHYfB_5S393WVdyKb3jJKpnH53QbH6ILwV1Aoug3Gyuv1VghlZxny7-bDAGiVKHe-ZVuxwxZKEHtwrUkzXXQcNW"
              />
              <div className="absolute bottom-0 right-0 bg-primary p-5 md:p-8 z-20 rounded-tl-xl">
                <p className="text-on-primary font-black text-3xl md:text-5xl tracking-tighter">100%</p>
                <p className="text-on-primary text-xs font-bold uppercase tracking-widest">Fleet Uptime</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5 md:mb-8 leading-none text-on-surface">
                THE TACTICAL <br /><span className="text-primary">FLEET</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed">
                Our equipment is maintained to aerospace standards. We utilize the latest slide-and-tilt flatbeds and specialist lifting cradles to ensure zero-damage transport for low-profile performance vehicles and heavy SUVs alike.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 bg-surface-container-high border-l-4 border-primary flex gap-4 md:gap-6 items-start rounded-r-xl">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl shrink-0">precision_manufacturing</span>
                  <div>
                    <h5 className="font-bold uppercase tracking-tight mb-1 text-on-surface text-sm md:text-base">Hydraulic Precision</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Smooth tilt-bed technology for lowered sports cars and luxury sedans.</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-surface-container-high border-l-4 border-outline flex gap-4 md:gap-6 items-start rounded-r-xl">
                  <span className="material-symbols-outlined text-on-surface-variant text-2xl md:text-3xl shrink-0">security</span>
                  <div>
                    <h5 className="font-bold uppercase tracking-tight mb-1 text-on-surface text-sm md:text-base">Secure Restraint Systems</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Heavy-duty 4-point wheel strapping as standard on all recoveries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6 border-y border-outline/10">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-3 md:mb-4 text-on-surface">
                DEPLOYMENT PROCESS
              </h2>
              <div className="h-1 w-12 md:w-16 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {[
                { num: "01", icon: "phone_in_talk", title: "INITIAL CONTACT", desc: "Call our emergency dispatch line. Provide your location and vehicle status to our controllers." },
                { num: "02", icon: "mms", title: "ASSET DISPATCH", desc: "The nearest recovery unit is assigned to your coordinates via GPS. Real-time arrival ETA sent to your mobile." },
                { num: "03", icon: "local_shipping", title: "RECOVERY SECURED", desc: "Vehicle loaded and secured using tactical protocols. Transport to your desired destination commences immediately." },
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="text-[80px] md:text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none select-none">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8 relative z-10 border border-primary/20">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary">{step.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase mb-3 md:mb-4 text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm px-2 md:px-4 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-on-primary py-16 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-5 md:mb-8 leading-none text-balance">
              NEED HELP NOW?
            </h2>
            <p className="text-lg md:text-2xl font-bold uppercase tracking-widest mb-8 md:mb-12 opacity-80">
              IMMEDIATE DISPATCH AVAILABLE 24/7
            </p>
            <a
              className="inline-flex items-center gap-3 md:gap-6 bg-on-primary text-primary px-6 md:px-12 py-5 md:py-8 text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter hover:opacity-90 transition-all active:scale-95"
              href="tel:07799180009"
            >
              <span className="material-symbols-outlined text-3xl md:text-5xl">call</span>
              07799 180009
            </a>
            <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold uppercase tracking-[0.3em] opacity-80">
              {["SHEFFIELD", "ROTHERHAM", "DONCASTER", "CHESTERFIELD", "PEAK DISTRICT"].map(a => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
