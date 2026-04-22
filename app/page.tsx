import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-surface pt-10 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary-container text-white text-xs font-bold tracking-widest px-4 py-1 mb-4 md:mb-6 uppercase border border-primary/30">
                Sheffield&apos;s 24/7 Response
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-5 md:mb-8 tracking-tighter text-on-surface text-balance">
                24/7 Car Recovery in <span className="text-primary">Sheffield</span> – Fast &amp; Reliable Service
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant mb-6 md:mb-10 max-w-lg leading-relaxed font-sans">
                Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <a
                  href="tel:07799180009"
                  className="bg-primary text-on-primary py-4 md:py-5 px-6 md:px-8 font-extrabold text-base md:text-lg text-center tracking-tight active:scale-95 transition-transform rounded"
                >
                  Call Now: 07799 180009
                </a>
                <a
                  href="tel:07799180009"
                  className="border-2 border-outline text-on-surface py-4 md:py-5 px-6 md:px-8 font-extrabold text-base md:text-lg text-center hover:bg-surface-container-high active:scale-95 transition-all rounded"
                >
                  Get Immediate Help
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <span className="flex items-center gap-2 uppercase font-bold text-primary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Fast Response
                </span>
                <span className="flex items-center gap-2 uppercase font-bold text-primary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span> Local Sheffield Team
                </span>
                <span className="flex items-center gap-2 uppercase font-bold text-primary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">payments</span> Affordable Prices
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[16/9] sm:aspect-square md:aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl">
                <img
                  alt="White flatbed recovery truck loading a grey Audi on a residential Sheffield street"
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Recovery-opt-jK0Oh9JpStKSKOwrFlMiRJxvD4tR9S.webp"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid – Same 9 Cards */}
        <section className="bg-surface-container-low py-12 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-3 md:gap-6">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-2 md:mb-4 block">Expert Solutions</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-balance text-on-surface">Our Recovery Services</h2>
              </div>
              <div className="h-1 bg-primary w-20 md:w-32"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {servicesData.map((service, idx) => (
                <div key={idx} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col group hover:bg-surface-container-highest transition-colors">
                  <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-5 md:p-8">
                    <h3 className="text-base md:text-xl font-bold uppercase mb-2 md:mb-4 tracking-tight leading-snug">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">{service.desc}</p>
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
                <img
                  alt="Abstract dark stylized map of Sheffield street grid with a silver neon glow highlight indicating central location"
                  className="w-full h-full object-cover grayscale opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCktzjBLRzH0x8CfA7yQtpHEikF61yOGpmTcDaoH9NsS4UsGz2fncvPqkk-hSTzPdsrT2fSUWg4CVNYnetJV28ntnbhNeA-Cm_7TZs7PpFD-2h2ixI0RQUFc34fg0AJl9IvIuxVX1XsRQtm_RmpXcKqR7KTZL0U_10MmeSncgBRDEBXzwl6ZuUIddbKuZx7eHSEul1RPHIRLV9Hpwo3pLnf-FzNRz1IWnOsjg1nJPb2o-KG89uEmbDm1CQdEV0eh4phO0UH8EYov13x"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-secondary animate-pulse rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(177,199,242,0.5)]">
                    <span className="material-symbols-outlined text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
              </div>
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
  { title: "24/7 Car Recovery Sheffield", desc: "Complete emergency recovery solutions for any vehicle type, anywhere in Sheffield, 24 hours a day.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Recovery-opt-jK0Oh9JpStKSKOwrFlMiRJxvD4tR9S.webp" },
  { title: "Emergency Jump Start Service", desc: "Quick response roadside assistance to get your flat battery boosted and you back on the road instantly.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Jump-Start-opt-JYsT9hrxSoSxpaw7paudJH4kEG6lMt.webp" },
  { title: "Fast Breakdown Recovery", desc: "Mechanical failure recovery specialists. Rapid response times to minimize your roadside waiting.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Breakdown-opt-y73ndhbUFt5iANdjovdSfsAThW78ws.webp" },
  { title: "Roadside Assistance", desc: "Minor roadside repairs and diagnostics performed on the spot by our experienced technicians.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre-Assistance-opt-OM8BQuNTXWNvyrSYkhmnvtYrE49kA3.webp" },
  { title: "Car Towing Service", desc: "Safe and secure professional towing to your home, a local garage, or any destination in the UK.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Towing-opt-H28BWF4w6lTsenxfRBBDAF8fo4DwCJ.webp" },
  { title: "Flat Battery Jump Start", desc: "Professional battery testing and jump starting for all vehicle makes including hybrid and EVs.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT-Image-Apr-23-2026-12_05_38-AM-opt-lbXtx7bcjdmQ5gQFYCuZ28Rn9mqkhQ.webp" },
  { title: "Accident Recovery Sheffield", desc: "Specialized handling for vehicles involved in road traffic accidents. Secure recovery and storage available.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Accident--opt-5nSn8weILLIlE7yLZemJZIsYPzCld3.webp" },
  { title: "Tyre Damage Assistance", desc: "Roadside wheel changes and tyre damage support when you don't have a spare or the right tools.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre-Assistance-opt-OM8BQuNTXWNvyrSYkhmnvtYrE49kA3.webp" },
  { title: "Lost Car Keys Help", desc: "Entry assistance and vehicle recovery if you've been locked out or lost your vehicle keys.", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lost-Car-Keys-Help-opt-es7WUSGINXUJChucxN6eArWaDWNZAs.webp" }
]

const whyChooseData = [
  { icon: "timer", text: "Rapid Response Across Sheffield" },
  { icon: "engineering", text: "Experienced & Professional Team" },
  { icon: "history_toggle_off", text: "Available 24/7 – Day & Night" },
  { icon: "payments", text: "Reliable & Affordable Service" },
  { icon: "precision_manufacturing", text: "Modern Recovery Equipment" }
] 
