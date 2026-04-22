import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">

        {/* Hero Section */}
        <section className="relative min-h-[480px] md:h-[716px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              alt="Modern high-performance recovery vehicle with amber lights parked on a dark Sheffield street at night under industrial lighting"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Towing-opt-H28BWF4w6lTsenxfRBBDAF8fo4DwCJ.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Established Excellence
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-on-surface tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6 text-balance">
                About Hussnain <br />
                <span className="text-primary">Car Recovery</span>
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-6 md:mb-10">
                Your trusted 24/7 car recovery and roadside assistance team in Sheffield. Precision service for high-pressure situations.
              </p>
              <a
                href="tel:07799180009"
                className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-6 md:px-10 py-4 md:py-5 text-base md:text-xl font-black uppercase hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  phone_in_talk
                </span>
                Call Now: 07799 180009
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
                    Hussnain Car Recovery is Sheffield&apos;s premier tactical response unit for vehicle recovery. We operate with a fleet of modern, specialized recovery vehicles designed to handle everything from standard passenger cars to high-performance vehicles and small vans.
                  </p>
                  <p>
                    Born from the need for a more professional, reliable, and no-nonsense approach to roadside assistance in South Yorkshire, we have built our reputation on speed, transparency, and technical expertise. We don&apos;t just tow cars; we resolve emergencies.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full aspect-video object-cover"
                    alt="Professional mechanic team in tactical high-visibility gear working on a vehicle recovery operation in an urban setting"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Recovery-opt-jK0Oh9JpStKSKOwrFlMiRJxvD4tR9S.webp"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary p-5 md:p-8">
                    <p className="text-on-primary font-black text-2xl md:text-4xl uppercase tracking-tighter">
                      15+ Years
                    </p>
                    <p className="text-on-primary/80 text-xs uppercase font-bold">
                      Operational Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-14 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-surface-container-highest p-6 md:p-12 lg:p-20 relative overflow-hidden rounded-xl">
              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10">
                <span className="material-symbols-outlined text-[8rem] md:text-[12rem]">verified_user</span>
              </div>
              <div className="max-w-3xl relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tighter mb-5 md:mb-8">
                  Our Mission
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-on-surface font-light leading-tight">
                  To provide the citizens of Sheffield with a dependable, elite-level recovery service that prioritizes safety and speed. Our mission is to transform a stressful breakdown into a managed, professional operation through fast response times and dependable tactical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-3">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface uppercase tracking-tighter">
                  Why Choose Us
                </h2>
                <p className="text-on-surface-variant mt-2 uppercase tracking-widest text-xs">
                  Tactical Advantages
                </p>
              </div>
              <div className="h-[2px] flex-grow mx-0 md:mx-8 bg-outline/20 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">24/7 Availability</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Emergencies don&apos;t wait for business hours. Neither do we. Tactical response active 365 days a year.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">Fast Response Time</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Localized dispatch protocols in Sheffield ensure we reach you in the shortest possible window.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">Professional Team</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Certified operators trained in heavy lifting and specialized vehicle transport maneuvers.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-3">Affordable Pricing</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">No hidden fees or emergency surcharges. Clear, upfront tactical pricing for all recoveries.</p>
              </div>
              <div className="bg-surface-container-high p-6 md:p-8 group hover:bg-primary-container transition-all duration-300 border-l-4 border-primary rounded-r-xl sm:col-span-2 lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
                  <span className="material-symbols-outlined text-primary text-4xl md:text-5xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-on-surface uppercase tracking-tight mb-2">Trusted Local Service</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">We are a Sheffield-based company with deep roots in the community. We know every street, shortcut, and challenging terrain in the area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-14 md:py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tighter mb-4 md:mb-6 text-balance">
                  Serving Sheffield &amp; Surrounding Areas
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Our operational radius covers the entire Sheffield metropolitan area and extends to key surrounding locations including Rotherham, Barnsley, and Chesterfield.
                </p>
                <ul className="grid grid-cols-2 gap-3 md:gap-4">
                  {["City Centre", "Meadowhall", "Dore & Totley", "Hillsborough", "Handsworth", "High Green"].map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-on-surface font-medium text-sm md:text-base">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-[400px] bg-surface-container-highest rounded-xl overflow-hidden relative border border-outline/10">
                <img
                  className="w-full h-full object-cover grayscale opacity-60"
                  alt="Stylized map showing the Sheffield urban area with a tactical overlay highlighting service coverage regions"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Breakdown-opt-y73ndhbUFt5iANdjovdSfsAThW78ws.webp"
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

        {/* Emergency CTA */}
        <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-on-primary uppercase tracking-tighter mb-4 md:mb-6 text-balance">
              Need Help Right Now?
            </h2>
            <p className="text-on-primary/80 text-base md:text-xl font-medium mb-7 md:mb-10 max-w-2xl mx-auto">
              Operators are standing by for immediate tactical dispatch in your area.
            </p>
            <a
              href="tel:07799180009"
              className="inline-flex items-center gap-3 md:gap-6 bg-on-primary text-primary px-6 md:px-12 py-4 md:py-6 text-xl md:text-3xl font-black uppercase hover:opacity-90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl md:text-4xl">call</span>
              07799 180009
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
