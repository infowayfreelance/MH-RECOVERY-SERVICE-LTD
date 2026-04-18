// app/services/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center pt-20 pb-32 px-6 overflow-hidden bg-surface">
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
              <span className="inline-block bg-primary-container text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 mb-6 border-l-4 border-primary">
                24/7 TACTICAL READINESS
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase text-on-surface">
                EXPERT <br /> RECOVERY <br /> <span className="text-primary">SERVICES</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
                Comprehensive 24/7 roadside assistance and vehicle transport across Sheffield and beyond. Professional solutions for every breakdown scenario.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="bg-surface-container-low py-24 px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                  Core Response Capabilities
                </h2>
                <div className="h-1 w-24 bg-primary"></div>
              </div>
              <p className="text-outline max-w-md uppercase text-xs tracking-widest font-bold">
                Deploying precision assets to your location within 45 minutes of dispatch confirmation.
              </p>
            </div>

            {/* 24/7 Car Recovery (Large feature) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline/10 mb-px">
              <div className="lg:col-span-7 bg-surface-container-high p-12 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">
                  Primary Operation
                </span>
                <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">
                  24/7 Car Recovery
                </h3>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Our flagship service provides rapid vehicle extraction and transport for passenger cars, light commercial vehicles, and motorcycles. Available 365 days a year, we ensure your vehicle is transported safely to your preferred destination or our secure storage facility.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Rapid Response Dispatch
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Multi-Car Capability
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Full UK Coverage
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                    <span className="material-symbols-outlined text-primary">check_circle</span> GPS Live Tracking
                  </li>
                </ul>
                <button className="self-start bg-primary text-on-primary px-8 py-4 font-black uppercase text-sm tracking-widest">
                  DEPLOY RECOVERY TEAM
                </button>
              </div>
              <div className="lg:col-span-5 min-h-[400px]">
                <img
                  alt="Professional flatbed"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjF1tG4cDKfM6hbbUb2mHHSKUZFQ9g0R9OV4Lxfo3Yyjv0Yw_t1KaxnDZ8CsPPbQhD6SfdDejBbs2uJ1TN9UclqM68X7ttopoF9NItAA_szb9iHxMx2eQXJkHfuAtMus4CAEJPfZcP00SzVOM7Vnh1NOhfNtre7nwVYaAk2bz4rBMNacOXr2anW0rL7xqSJZgZoZOmljGc3BhFxXo76MvyoIrgOvNWealpm-7fq3udmvRAuN5JcyI1Y_AKPZlGH_siilY7vRxh8VL"
                />
              </div>
            </div>

            {/* Roadside & Specialized Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline/10">
              {/* Roadside */}
              <div className="bg-surface-container-high p-10 group">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">build</span>
                </div>
                <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter">
                  Roadside Assistance
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  On-site diagnostics, battery jumpstarts, and tyre changes to get you back on the move without a tow.
                </p>
                <img
                  alt="Roadside mechanic"
                  className="w-full h-48 object-cover mb-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6yiOYBC2y4sEBR5XjYjwV2N5J2xBAxChbEBxKBG9uhNfnq5IH1Y0lWENj8oLeAt5dwST09LNBR1DF9w5rF5nYYs9fq4NwcXnJiHPVH3SNXoW5s6Ky4RJoicTGWd-65wYp48FKg5OcqttwCilybmBjdMaHTTnxBftTrgNslbSmIRbz1DSeC-8gLIjIABpUL41nZsaY1CmuSkr5QygG1AHa81mnFwqdryU3iVMK6ZLfCwgSFGWlaxNkOjnEjWYwomSC14ZcOZ0Hbfgm"
                />
              </div>
              {/* Accident Recovery */}
              <div className="bg-surface-container-high p-10 group">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">warning</span>
                </div>
                <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter">
                  Accident Recovery
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  Specialized lifting and extraction for vehicles involved in collisions. Safe handling of damaged structural integrity.
                </p>
                <img
                  alt="Accident scene"
                  className="w-full h-48 object-cover mb-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxicMNZOIXMZ_OFpgQxvZiBlCY6Qd_Wthh9PL91uSvA1wIZdzSVO96r2ZoilP0RETcYfifB9gG0UHF2LwKkVbP1I3jglelPRVGaK7-N5aeU7SZQ39ZqxXu0M459Q-buqE-AEcwssCCJbkLjisZsAkSRPonWJmUa4tX2mkRJT44bFyBRaZ0-MbzIhsU2eDJdSlu5Zw6VyS15HcS6WwWLRU2NcPCT61xqmHzNICgzhqmbIeDjT9kyXebpEv1LeQPIi75F7v15DqSSYYa"
                />
              </div>
              {/* Specialized */}
              <div className="bg-surface-container-high p-10 group">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">key</span>
                </div>
                <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter">
                  Lost Keys &amp; Lockouts
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  Non-destructive entry techniques for locked vehicles and transport to main dealers for key replacement.
                </p>
                <img
                  alt="Car Key"
                  className="w-full h-48 object-cover mb-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqaXUWkIm5DkVUzOMRQSZArZvY8Z2dPIbZ8jd32hQWUJ6Kl_H1AerfJZIXq3KmlOxQrc_IhLx1rQLqTgPYZFCiKtibVbtcnoSZCBqLfdKj0HpiiOi8HEPqKs0nUsv3IeSvTVyIBGVMnr_Uy2fUZsael_ZX4m0H-RwzZ9AzEJOgzlEH0pXe3BPpvowMWjR3fq367DC_S9TZJ83CRZT_qldls716-O8SBDgxnGQA0Dkx272P72x4pMAup9t9CaDoul_r1K0KL5Nc252L"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Equipment */}
        <section className="bg-surface py-24 px-6 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary/30 z-0"></div>
              <img
                alt="Fleet detail"
                className="relative z-10 w-full aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcKkzq2kYqkfWXhpxz6U0GXKOih-KOR0zIj3ujaHc1Yob6urp_I4ggx1nBYmGonuSFJ2ezi5kUzPVeihrcPOA6RrPsW14qS_Vmen3QP2ZqLOre7dBKgnIZQi0KRA4Sz4YtRIUmFVwuW6TqDwF1pRqlD7K7StL_tBedmo5FNPRtb56IY-UQb6RvhHYfB_5S393WVdyKb3jJKpnH53QbH6ILwV1Aoug3Gyuv1VghlZxny7-bDAGiVKHe-ZVuxwxZKEHtwrUkzXXQcNW"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 z-20">
                <p className="text-on-primary font-black text-5xl tracking-tighter">100%</p>
                <p className="text-on-primary text-xs font-bold uppercase tracking-widest">Fleet Uptime</p>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                THE TACTICAL <br />
                <span className="text-primary">FLEET</span>
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 max-w-lg">
                Our equipment is maintained to aerospace standards. We utilize the latest slide-and-tilt flatbeds and specialist lifting cradles to ensure zero-damage transport for low-profile performance vehicles and heavy SUVs alike.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-high border-l-4 border-primary flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    precision_manufacturing
                  </span>
                  <div>
                    <h5 className="font-bold uppercase tracking-tight mb-1 text-on-surface">
                      Hydraulic Precision
                    </h5>
                    <p className="text-sm text-outline">
                      Smooth tilt-bed technology for lowered sports cars and luxury sedans.
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-high border-l-4 border-outline flex gap-6 items-start">
                  <span className="material-symbols-outlined text-outline text-3xl">
                    security
                  </span>
                  <div>
                    <h5 className="font-bold uppercase tracking-tight mb-1 text-on-surface">
                      Secure Restraint Systems
                    </h5>
                    <p className="text-sm text-outline">
                      Heavy-duty 4-point wheel strapping as standard on all recoveries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process: 1-2-3 */}
        <section className="bg-surface-container-low py-24 px-6 border-y border-outline/10">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold uppercase tracking-widest mb-4">
                DEPLOYMENT PROCESS
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  01
                </div>
                <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 border border-primary/20">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    phone_in_talk
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">INITIAL CONTACT</h3>
                <p className="text-on-surface-variant text-sm px-4">
                  Call our emergency dispatch line. Provide your location and vehicle status to our controllers.
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative text-center">
                <div className="text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  02
                </div>
                <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 border border-primary/20">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    mms
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">ASSET DISPATCH</h3>
                <p className="text-on-surface-variant text-sm px-4">
                  The nearest recovery unit is assigned to your coordinates via GPS. Real-time arrival ETA sent to your mobile.
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative text-center">
                <div className="text-[120px] font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  03
                </div>
                <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 border border-primary/20">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    local_shipping
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">RECOVERY SECURED</h3>
                <p className="text-on-surface-variant text-sm px-4">
                  Vehicle loaded and secured using tactical protocols. Transport to your desired destination commences immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-on-primary py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              NEED HELP NOW?
            </h2>
            <p className="text-2xl font-bold uppercase tracking-widest mb-12 opacity-80">
              IMMEDIATE DISPATCH AVAILABLE 24/7
            </p>
            <a
              className="inline-flex items-center gap-6 bg-on-primary text-primary px-12 py-8 text-4xl md:text-6xl font-black tracking-tighter hover:bg-on-primary-container transition-all"
              href="tel:07799180009"
            >
              <span className="material-symbols-outlined text-5xl">call</span>
              07799 180009
            </a>
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-[0.3em]">
              <span>SHEFFIELD</span>
              <span>ROTHERHAM</span>
              <span>DONCASTER</span>
              <span>CHESTERFIELD</span>
              <span>PEAK DISTRICT</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
