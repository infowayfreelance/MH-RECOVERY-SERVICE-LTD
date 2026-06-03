'use client';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesDetailedPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 grayscale"
              alt="Modern high-performance recovery truck with amber warning lights at night"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFF_Z4p2kRwDUx5ULdbjDp-hS03KF6aVwTUmfICGnySXR6g0ahUykRNcbGUc-YeWoF3aitPI1t25utV2laTgyGaVN1pihWHdb4zLeClM_eBu_gBLyFCDY84pzDB3HvZ2v7GXS97he5X_7kCev728Xc_YZ3rN3snTjKBoG-FRtQq4TeeM80q1H8W0Qiyw-swrxA16VqCQnr_Dqciu5BCuKqvqXZILB6K4cNO5kuWckkQBfrZXRz2SyicBZPaRYhOSzs2InOJR5G9wxP"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 bg-primary-container text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Tactical Roadside Assistance
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6 uppercase text-on-surface">
                Our Car Recovery <br />
                <span className="text-primary">Services in Sheffield</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
                We provide fast, reliable and professional roadside assistance services 24/7 across Sheffield. Precision recovery for every situation.
              </p>
              <a
                className="inline-flex items-center justify-center bg-secondary text-on-secondary text-xl font-headline font-black uppercase px-10 py-5 tracking-tight hover:bg-white transition-colors duration-300"
                href="tel:07799180009"
              >
                Call Now: 07799 180009
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">
                  Tactical Solutions
                </h2>
                <p className="text-outline">
                  Engineered for reliability. Our comprehensive range of vehicle recovery and roadside services.
                </p>
              </div>
              <div className="h-[2px] bg-outline-variant flex-grow ml-8 hidden md:block opacity-20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 24/7 Car Recovery */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">emergency_home</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">01</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  24/7 Car Recovery Sheffield
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  We offer round-the-clock recovery services to help you anytime, anywhere in Sheffield.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Professional flatbed recovery truck"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCNJcoMga_4XW4WWp9QeCu3lveHPNs19m6IgFp7EMM4jXkcKuDkKiI0Cy2jwjCQV45bQ_TCTFkVf82WfRsaWoGlHnN-NgB62FfZ2K1A13Q8345-ebe4ilCmFFn86oy6DXCxVW--UcbTfXczM7D6x2JJiwgfE-sj8VqwkHOBoOrIFmjexemmkRk9DRtdiR4EmpTi_fYdgRm-6B8-648DHpnFW2AVRO8g1zMcH6aLp5XrGsJHPEWMK7gKLZvG5uje5wZTBiIyxkxF0_7"
                />
              </div>

              {/* Emergency Jump Start */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">02</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  Emergency Jump Start
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  Flat battery? Our team provides quick jump start services to get your vehicle running again.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Jump leads connecting to car battery"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVK8a2IoB5oxWJtBNNcPmh85A1sMxHyZFIjwF2eaQ7MjewtIKhktgVSaMJwql-518DiVVddAiyJIshR7hw_SQX8U01g2TcV9Zv5mV-5Mna4QoiJwyxqhWlerOR1FTvZtrg0fLrbQ-VBtqJZ4ysS7llAD-Kew-a5RcAdZBA65EALPW7YYVZm9wJgMCQk8RaQmd9y6n8mMKwptY3GlVSsmS6CygymTMbczW3i6baKuxtNlWbntXRzR56NSoTU06f44GT1EnAxG7-RCPC"
                />
              </div>

              {/* Fast Breakdown Recovery */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">running_with_errors</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">03</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  Fast Breakdown Recovery
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  Broken down? We’ll reach you fast and recover your vehicle safely and efficiently.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Vehicle breakdown on motorway"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeDa7sU_W0BURro4uug3J_9rS5l4-YOI_f3sCDo16vkWTc6EzKujMoE5mJYlV-WLi2ZPVDSAD_XJHbl406GwY1jXycAhxixUTjMLMMhJI0bQ_tSo8pBItEXQzd7XQ_-o6XtwaoQAI6nEQYXE7POaGaz6gd-o12JUyTaUmxvGEqesYrxm1id62-GVrrtj7ckyt1cGAMHm2P_qmr6e1AHv1McP5XBBA14QP1SnPXGSGgb2W1Z2DqglPn1Bt1Lb4FcpDA2LMArvLIbF98"
                />
              </div>

              {/* Roadside Assistance */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">build</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">04</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  Roadside Assistance
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  From minor issues to full breakdowns, we provide complete roadside help to keep you moving.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Mechanic working on car engine"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChBvuYsdZGNmwL7wJ8ETyYKpLY1VsUZyI-sj8nhqd9v-k8_JgPFLO5fFqMHuwDHKgRcL8aVo8BQNmLmHuguOhMVs1KlvwE7cNHYYXN-x0YEjY3ZPjRWngAhxq73fKrWZQPN8pLN92GnuYNicdxUPS7DRjum5WwgbhW_p8iB7uPkThmMxyfseeZxfsoLuZqneDUjo16nS6DlvezDi4BcoomF2mbpBVY59oESQyjggGc3cxNUN2_YKKvewf_HLg1xOpjd9sdmQxgvyvr"
                />
              </div>

              {/* Car Towing Service */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">auto_towing</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">05</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  Car Towing Service
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  Professional towing service for all vehicle types across the Sheffield region.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Towing truck lifting luxury vehicle"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTXYr-40M76gYECcJs2qzncsWlGg65dVOUDhjEgqUpuCirBeCNRQC-NzjfbtVnpCxUnQ5AfSKsuTg44FKe_Mt0dyLwQhTN8uXFbfQbIJTHjqKhDK1bJsd1g91qggHwCq8q3Tngk2pBScoRmMqVHHeqG7wNvNom8SQQhBVeq52lBgtE0HqXxdx3Ctws8zdI2CQJiobIEnAxxMM_kWY6ojK1EtsUqclezXDxi_7cccnMoyM1stbYA62KvOLy5kszjIq4gFfZ03o_AFU7"
                />
              </div>

              {/* Accident Recovery */}
              <div className="group bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">car_crash</span>
                  <span className="text-outline-variant font-headline font-bold text-lg">06</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-on-surface">
                  Accident Recovery
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow">
                  We handle accident recovery safely and professionally, coordinating with all authorities.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 mb-6"
                  alt="Accident recovery scene"
                  src="/images/Car-Accident--opt.webp"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale opacity-60"
                    alt="Vehicle recovery command center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3x9K8j7a4Pp2FnUggYVNmVx32td_0HNkLk5zsCvEVvrtiBNkOvoOpKNtuGm4zn8YZSjyjLHYWZlmbN_w96qtdKCpq0dIAcZFJYIfe1bdaTwT_uJtHY8H1QUqeWWmRvylaYh5zNK7h5e-Flyv4cAPxBWUM8BCZnRxpQKi1L5PjkUuZevtktzFjaXFAQYc8lEDMbdqSoBIm5gP0Ujn8lsPd9Is8KU-WTO3uqyBajSh5kiHSCtYwJkkWCVd2go5bte9Ctesij1lZUtoq"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-lg max-w-[240px]">
                  <p className="text-3xl font-black font-headline tracking-tighter mb-2">24/7</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                    Operational readiness for all Sheffield areas
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12 leading-none">
                  Why Choose <br />
                  <span className="text-primary">Recovery Pro?</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-primary">speed</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-1">Rapid Response Across Sheffield</h4>
                      <p className="text-on-surface-variant font-body">
                        Strategically located units ensure we reach you in minutes, not hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-1">Experienced &amp; Professional Team</h4>
                      <p className="text-on-surface-variant font-body">
                        Highly trained technicians equipped for any roadside scenario.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-primary">savings</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-1">Reliable &amp; Affordable Service</h4>
                      <p className="text-on-surface-variant font-body">
                        Transparent pricing with no hidden emergency fees. Honest tactical help.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary-container flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-1">Modern Recovery Equipment</h4>
                      <p className="text-on-surface-variant font-body">
                        Utilizing the latest vehicle transport technology for zero-damage recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA Section */}
        <section className="py-24 bg-surface-container-highest">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
              Need Immediate Help?
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
              Our dispatch team is standing by 24 hours a day. One call and we're on our way.
            </p>
            <a
              className="group relative inline-flex items-center gap-6 bg-secondary text-on-secondary px-12 py-8 rounded-lg overflow-hidden transition-all duration-300 active:scale-95"
              href="tel:07799180009"
            >
              <span className="relative z-10 text-3xl font-headline font-black uppercase tracking-tight">
                Call 07799 180009 Now
              </span>
              <span className="material-symbols-outlined relative z-10 text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}