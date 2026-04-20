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
              <div className="inline-block bg-primary-container text-primary text-xs font-bold tracking-widest px-4 py-1 mb-4 md:mb-6 uppercase">
                Sheffield&apos;s 24/7 Response
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-5 md:mb-8 tracking-tighter text-on-background text-balance">
                24/7 Car Recovery in <span className="text-secondary">Sheffield</span> – Fast &amp; Reliable Service
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant mb-6 md:mb-10 max-w-lg leading-relaxed font-sans">
                Stuck on the road? Our professional recovery team is available 24/7 to get you back on track quickly and safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <a
                  href="tel:07799180009"
                  className="bg-secondary text-on-secondary py-4 md:py-5 px-6 md:px-8 font-extrabold text-base md:text-lg text-center tracking-tight active:scale-95 transition-transform"
                >
                  Call Now: 07799 180009
                </a>
                <a
                  href="tel:07799180009"
                  className="border-2 border-outline/20 text-on-surface py-4 md:py-5 px-6 md:px-8 font-extrabold text-base md:text-lg text-center hover:bg-surface-container-high active:scale-95 transition-all"
                >
                  Get Immediate Help
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <span className="flex items-center gap-2 uppercase font-bold text-secondary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Fast Response
                </span>
                <span className="flex items-center gap-2 uppercase font-bold text-secondary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span> Local Sheffield Team
                </span>
                <span className="flex items-center gap-2 uppercase font-bold text-secondary text-[0.65rem] tracking-widest">
                  <span className="material-symbols-outlined text-sm">payments</span> Affordable Prices
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[16/9] sm:aspect-square md:aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl">
                <img
                  alt="Modern yellow UK car recovery flatbed truck parked in an urban industrial Sheffield street at blue hour with hazard lights flashing"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2nNT6hy8H--ygxr-BuESFr47LzJzoq74T5PPdd_S7nzCbb74VYfPh5L-k1J98bykhGLCiSGdnmie7XtDLFy1LlQXxfwAyOQh5QnSS6fK02N6QwOEUsQE4n7mt4meMHpit18HSoc1aAR_HC0szPY-3BLXvl9PRWyHC1teKsygQMGDdeWSZE3ZQOqdy17BBJZQ_85cHcIDuCu5tiHrgcIyh53Arq7CpnBd-O5dLWKTWC_AmuSV9bkDZz1kQ2A6B-9Q0P3dVBuz_teH3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid – Same 9 Cards */}
        <section className="bg-surface-container-low py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Expert Solutions</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Our Recovery Services</h2>
              </div>
              <div className="h-1 bg-secondary w-32 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, idx) => (
                <div key={idx} className="bg-surface-container-high overflow-hidden rounded-xl flex flex-col group hover:bg-surface-container-highest transition-colors">
                  <div className="h-48 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm font-body">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 md:mb-16 tracking-tight text-center text-balance">
              Why Choose <span className="text-secondary">Us</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
              {whyChooseData.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-highest flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide leading-snug">{item.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Call Banner */}
        <section className="bg-secondary text-on-secondary py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-balance">
                Need Immediate Recovery?
              </h2>
              <p className="text-base md:text-xl font-medium opacity-80">
                Our dispatchers are standing by. Don&apos;t wait on the roadside.
              </p>
            </div>
            <a
              href="tel:07799180009"
              className="bg-on-secondary text-secondary py-4 md:py-6 px-8 md:px-12 text-2xl md:text-4xl font-black tracking-tight active:scale-95 transition-transform whitespace-nowrap"
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
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 md:mb-8 tracking-tight text-balance">
                  Serving <span className="text-secondary">Sheffield</span> &amp; Nearby Areas
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg font-sans mb-8 md:mb-12 leading-relaxed">
                  Strategically based in the heart of Sheffield, we provide rapid response recovery to the entire South Yorkshire region including Rotherham, Chesterfield, and Dronfield.
                </p>
                <div className="bg-surface-container p-6 md:p-8 border-l-4 border-secondary">
                  <h4 className="font-black uppercase tracking-[0.2em] mb-4 text-on-surface-variant text-xs md:text-sm">Our Headquarters</h4>
                  <div className="flex items-start gap-3 md:gap-4 mb-2">
                    <span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
                    <span className="text-lg md:text-2xl font-bold uppercase font-sans tracking-tight">Coupe Road, Sheffield, S3 9DP</span>
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
  { title: "24/7 Car Recovery Sheffield", desc: "Complete emergency recovery solutions for any vehicle type, anywhere in Sheffield, 24 hours a day.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFX7W2EvZ6gTYxqEMLC-QZQbMQudtasZQ2Rp1F6ZNoXbUHw9sxQd95wifKae9kDqqCj5xtzBKd7d6c946mfL1FFg0pTGqagNbP1v9gZrYkdhkAvTbsMF1BT6ZDHeSx3xEIIzcuCYJsSli9-XcYpMVaNZPSmVw_Lz41k6IpXiuaWyMJk1CsywcDdmy-2DPk19UrVi8AaC0weA-iQ3uabmEllCRWXfk-EF-Iz0_j7lDWo974sKWRYOIByZpmn3r8oQcXOrwhCR3eclI2" },
  { title: "Emergency Jump Start Service", desc: "Quick response roadside assistance to get your flat battery boosted and you back on the road instantly.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwRAIMNe4NSEZIbDYmoIRDVG7W3zv3cAAZUbpNAcUHU10FQMuxsle4V5gg9M7uPFBgLHXMl273tMWzCFRah7W4MqYZ6JDycJtWKcfWHG0M0LbN5agi6VTtixkOfeqLOqTlpL0iR9f0lWADAdCPxyhpSJxEnIlddoB142IDGmnQwBmVnr1YRWMX8mjGZHXLyEp-BFdyC9Yjb1dpr1rNL5VPPVoFQYTuC9ZrmeDu0qy2Z6nXKZDUrhdH4YL36pW-zNtW_QAKQdSa_bzu" },
  { title: "Fast Breakdown Recovery", desc: "Mechanical failure recovery specialists. Rapid response times to minimize your roadside waiting.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzxcfczuIZxa-JYExv6zduaZvQeTQdNvThtISs3ADj8DRMhAg9ORCc1_fO-nan1hxOhecAO82m3HPwCVy2b39UBV6m0lomxvdN4xrWvwuQtGVgVJNf2SZ2LG7lbI1Cb2ntKQ2_bYOwN5aOzjlR8wfF6FQe-ZnuOdmfFxEgAW2m7oNwNaTQVYwQVp2JEWKxIlYgXIP2OgrPlmxsaPjuF4afVbkXfeO6KDzfMtawDb-wM6VIIy7LtX1bjVbtmxi4sadsl8UjpuXvnI-d" },
  { title: "Roadside Assistance", desc: "Minor roadside repairs and diagnostics performed on the spot by our experienced technicians.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTUIDRKqOkFbGs4hboh9ts_3sun-uaKExkfRmKqjxSZSpC1tfElEa9JVp169QVsGjE-tY8lRItku_AkgCXcFqAZ10S9Db6EeaWQAHxGp1117c34f9Lg9qXu2l0pc1A5tmvbWQAwGWCjp3d1UN5oyRSITOtl0_ZmHreZ7tEcCE34DDEmtt-lV18A_-BqDLtZbJF2pROuTEhN97CIDjHR_29yM1-IdcL6pEETaHLbKXgDkDT0gE9fxSn7ughjU__FIx6miMzQ6pmi29" },
  { title: "Car Towing Service", desc: "Safe and secure professional towing to your home, a local garage, or any destination in the UK.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHeBmgHGM77I-xbb1w1Adwngp2-dz8IFEVlgsYQPGVqOfMqD_VjZx4i1Ur7Y37SyyLWyYQkzi6F4BPjmQrtqF5lB3WXVe-Nn9g1SOptvcXk0YlZ1KJRRwGAwPJc3r1dHJkHV7T8r0OE536qv5Ei2qILzL4GO_h5Ld9_jOyRieYa5FcrUfpP-y_4JHN6JTsuMvzdSFPYkB9fFWUXwvv6spMS8NCbSSlK9LQUEvp2YTUxsd5GhTUqCMxkg5h2P4oztJy2sg4WrfbPGb4" },
  { title: "Flat Battery Jump Start", desc: "Professional battery testing and jump starting for all vehicle makes including hybrid and EVs.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgsVjuwDltNVdOOOfrk5cYdyCd2c8oxhpaK_JJcLn7LXE1juHhThZ6ERgQeKETzX0nukgKCPPsaFHVgI4hKe4p0uBBlW-8YZ2RaX4ms9XZ5N6iV6152IejaZCxxGNtyBGi06Eeki4TV0BQVrwRNw6DJsuk3V4uKFV6kQmDpZSPGxtESCPSvZIwIBqaNGAWdyRYWmrdzu_UJ1qEoNRlgRLO4FBC_qmGujnreuAGu7nonSoQc6c7cyIKADzMf59MqQ-rSmpkJZ6-injE" },
  { title: "Accident Recovery Sheffield", desc: "Specialized handling for vehicles involved in road traffic accidents. Secure recovery and storage available.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQiMRcwUXquJcRJ65wvPmp7D5_Bq9QjlrOgub7THoVk87E4C0IzYL3ziuylctmR8ltFxUAA8qEly4TsE0wo5oItjKilu2RyJTcYFYbnyaWuUXuB1oIvTTAu__wAOwzOoDjg3jltjcX6XOpmjtiX-AY3JdhFByhRRObUVwbp1khYJ3RvUP8WU8paRMKm2nN5ji3BgAyVxGAsbM_Cg0k-5P8zWjOfK9AffidRKKzyYzwp09jRmbc5CexuLsg7_g2CA9dK_ARls7z7rYs" },
  { title: "Tyre Damage Assistance", desc: "Roadside wheel changes and tyre damage support when you don't have a spare or the right tools.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEmkhR0JPhkaYD7ZYZgSSOw1TLv76UsGf4DTLoqCW87nynClBt8hMzfI32mLl_a9FdBa31kNQxMkX1FefFKPxdkKlxXqLI3Aa7crBCdXWHIjyWEgasonY8AyBNodNLeTuoaQ9Z2A9oWjwfY8NkPm8LHuCBUzWYThdzzJbThvxwrdpwcCNxe92vrtGl5N-d3Xmb4AJY8YhBWdoUkdB9e23r0g7UgVPhMy4ULcXy4WEiyPYSguuk5xVuFoy6gif27i9yfwwzP59Ysl3o" },
  { title: "Lost Car Keys Help", desc: "Entry assistance and vehicle recovery if you've been locked out or lost your vehicle keys.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJZSV4ppIbftrtgZd-CLYCS2SrZVkA_yrySYPChIiW87x37vX5Pz1bTFsUVVYV9t7-54wr6T6BExlBfXhh7_scALKKwWn8yF4iObXYelKylcn5ObVZrlIGWBD85OhUubc9hTu6vAbk9dCoW4-VZcVpQStSYbAWOdpqnvNDQgcHHOiDjyS5rNhEc9HstMtDG1J0zoNYIgXfaozVD-JUrAWqxDTv8leMSh7KLMe5O-Qr8asF7dKhMkuOicAjUx9sTdd36_n9zeoYQ3nO" }
]

const whyChooseData = [
  { icon: "timer", text: "Rapid Response Across Sheffield" },
  { icon: "engineering", text: "Experienced & Professional Team" },
  { icon: "history_toggle_off", text: "Available 24/7 – Day & Night" },
  { icon: "payments", text: "Reliable & Affordable Service" },
  { icon: "precision_manufacturing", text: "Modern Recovery Equipment" }
] 
