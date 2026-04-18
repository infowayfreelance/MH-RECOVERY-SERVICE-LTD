import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              alt="Modern high-performance recovery vehicle with amber lights parked on a dark Sheffield street at night under industrial lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC28NCE1Rx407DjjLvjd-ANXVppKrWfaPzknfAUQvhS9NAWVyx5UqsGi1GTMUp6_MIWwFDB3ukSlRNXAZv309UkHlqYUeQv2QAWiB-H9ohALaSPEIRQvtrQbJvrGi5v5XpiUyBAb2-uraRxJB7_aXo4SFz0JAhXcDoXLXVflMQdAXeqFGwsfRhhxSzlkGbg6wOsRR-BbfcnfTlxOZowiLgRJQarvKmTMu75xb2LkG21k4wKuQnJ3u_AJgX4m1gS-uY9YrIXa9vXnE9"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-primary-container text-primary text-xs font-bold font-headline tracking-widest uppercase mb-4">
                Established Excellence
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter uppercase leading-[0.9] mb-6">
                About Hussnain <br />
                <span className="text-primary">Car Recovery</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
                Your trusted 24/7 car recovery and roadside assistance team in Sheffield. Precision service for high-pressure situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07799180009"
                  className="bg-secondary text-on-secondary px-10 py-5 text-xl font-black font-headline uppercase flex items-center justify-center gap-3 hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    phone_in_talk
                  </span>
                  Call Now: 07799 180009
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section (Who We Are) */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-primary"></span> Who We Are
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Hussnain Car Recovery is Sheffield's premier tactical response unit for vehicle recovery. We operate with a fleet of modern, specialized recovery vehicles designed to handle everything from standard passenger cars to high-performance vehicles and small vans.
                  </p>
                  <p>
                    Born from the need for a more professional, reliable, and "no-nonsense" approach to roadside assistance in South Yorkshire, we have built our reputation on speed, transparency, and technical expertise. We don't just tow cars; we resolve emergencies.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full aspect-video object-cover"
                    alt="Professional mechanic team in tactical high-visibility gear working on a vehicle recovery operation in an urban setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQvTnID0jaXCDeWEXqWuwzFKx9pEL3t6CcCHlCCeTKQcfkNrSxRihjg_KfxlcZGAPC7RmPWbz_yccWvbV7AonBLX1PxuVpqzNZnEEgVkTYCxXzEMiJd2lTiP_IWi7oEpm2okpFUT1wA-gOXZ7_TScsNADWmcCoatSNnNK59CWeZFGBuu65Iht38qf9vBtkx-bMYpgCL7qogiWW2J5U7ShjWp-4zkKQ6RirdltGnzG0niY0MXs_TQgPzlarqVQr_MkatznceRN_Xw_"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary p-8 hidden md:block">
                    <p className="text-on-primary font-headline font-black text-4xl uppercase tracking-tighter">
                      15+ Years
                    </p>
                    <p className="text-on-primary/80 font-label text-sm uppercase font-bold">
                      Operational Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-8">
            <div className="bg-surface-container-highest p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">verified_user</span>
              </div>
              <div className="max-w-3xl relative z-10">
                <h2 className="text-4xl font-headline font-bold text-primary uppercase tracking-tighter mb-8">
                  Our Mission
                </h2>
                <p className="text-2xl md:text-3xl text-white font-light leading-tight">
                  To provide the citizens of Sheffield with a dependable, elite-level recovery service that prioritizes safety and speed. Our mission is to transform a stressful breakdown into a managed, professional operation through fast response times and dependable tactical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Tactical Grid) */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-white uppercase tracking-tighter">
                  Why Choose Us
                </h2>
                <p className="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-sm">
                  Tactical Advantages
                </p>
              </div>
              <div className="h-[2px] flex-grow mx-8 bg-outline-variant/20 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 24/7 Availability */}
              <div className="bg-surface-container-high p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  schedule
                </span>
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">
                  24/7 Availability
                </h3>
                <p className="text-on-surface-variant group-hover:text-on-primary-container">
                  Emergencies don't wait for business hours. Neither do we. Tactical response active 365 days a year.
                </p>
              </div>
              {/* Fast Response Time */}
              <div className="bg-surface-container-high p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">
                  Fast Response Time
                </h3>
                <p className="text-on-surface-variant group-hover:text-on-primary-container">
                  Localized dispatch protocols in Sheffield ensure we reach you in the shortest possible window.
                </p>
              </div>
              {/* Professional Team */}
              <div className="bg-surface-container-high p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  engineering
                </span>
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">
                  Professional Team
                </h3>
                <p className="text-on-surface-variant group-hover:text-on-primary-container">
                  Certified operators trained in heavy lifting and specialized vehicle transport maneuvers.
                </p>
              </div>
              {/* Affordable Pricing */}
              <div className="bg-surface-container-high p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  payments
                </span>
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">
                  Affordable Pricing
                </h3>
                <p className="text-on-surface-variant group-hover:text-on-primary-container">
                  No hidden fees or "emergency surcharges." Clear, upfront tactical pricing for all recoveries.
                </p>
              </div>
              {/* Trusted Local Service (wider span) */}
              <div className="bg-surface-container-high p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary lg:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <span className="material-symbols-outlined text-primary text-5xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">
                      Trusted Local Service
                    </h3>
                    <p className="text-on-surface-variant group-hover:text-on-primary-container">
                      We are a Sheffield-based company with deep roots in the community. We know every street, shortcut, and challenging terrain in the area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter mb-6">
                  Serving Sheffield &amp; Surrounding Areas
                </h2>
                <p className="text-on-surface-variant text-lg mb-8">
                  Our operational radius covers the entire Sheffield metropolitan area and extends to key surrounding locations including Rotherham, Barnsley, and Chesterfield.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "City Centre",
                    "Meadowhall",
                    "Dore & Totley",
                    "Hillsborough",
                    "Handsworth",
                    "High Green",
                  ].map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative border border-outline-variant/10">
                <img
                  className="w-full h-full object-cover grayscale opacity-60"
                  alt="Stylized map showing the Sheffield urban area with a tactical overlay highlighting service coverage regions"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlSLuru43hPHtJMMEA90s_38HYuVksbYh6DrMGOOwq6BvrD8SUQ3xXEf7eIpNc-2MHGt93qpDDmh7gFX8Rtrzb8KMixk38L_t_sz28R1EOOPHmdqAZtIvhA73KhlkZQIesOaV-ruC7Pmi-MM35M2qHJKzYVp5Zgn-rlRQBFl9p3fXY2QzWvnRBvgrH9gHDMTuNGVQGP3gZcLF1fS50mbVJpUTByDS0skxq2VNvFLir_EmLwCdvUHKgCe7H8n_tFiAaTOhYB_7HRaZ5"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/20 p-8 rounded-full animate-pulse">
                    <div className="bg-primary p-4 rounded-full shadow-lg">
                      <span className="material-symbols-outlined text-on-primary">my_location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-primary-container relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #b1c7f2 0, #b1c7f2 1px, transparent 0, transparent 50%)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white uppercase tracking-tighter mb-6">
              Need Help Right Now?
            </h2>
            <p className="text-primary text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
              Operators are standing by for immediate tactical dispatch in your area.
            </p>
            <a
              href="tel:07799180009"
              className="inline-flex items-center gap-6 bg-secondary text-on-secondary px-12 py-6 text-3xl font-black font-headline uppercase hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              <span className="material-symbols-outlined text-4xl">call</span>
              07799 180009
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
