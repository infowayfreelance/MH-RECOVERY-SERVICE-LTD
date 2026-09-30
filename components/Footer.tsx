import Link from 'next/link'
import Logo from './Logo'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Car Recovery',
  'Vehicle Towing',
  'Roadside Assistance',
  'Accident Recovery',
  'Long Distance Recovery',
  'Motorcycle Recovery',
]

export default function Footer() {
  return (
    <footer className="bg-surface-container font-sans border-t border-outline">

      {/* Top yellow accent bar */}
      <div className="h-1 bg-primary w-full" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Logo />
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Sheffield&apos;s trusted 24/7 car recovery service. We get you back on the road — fast, safe, and affordable.
            </p>
            {/* Trust badges */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">verified</span>
                Fully Insured &amp; Licensed
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">schedule</span>
                Available 24 Hours, 7 Days a Week
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">location_on</span>
                Coupe Road, Sheffield, S3 9DP
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-on-surface font-bold uppercase text-xs tracking-widest border-b border-outline pb-3">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-3 h-px bg-outline group-hover:bg-primary group-hover:w-5 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-4">
            <h2 className="text-on-surface font-bold uppercase text-xs tracking-widest border-b border-outline pb-3">
              Our Services
            </h2>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-on-surface-variant text-sm flex items-center gap-2">
                    <span className="inline-block w-1 h-1 rounded-full bg-primary shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h2 className="text-on-surface font-bold uppercase text-xs tracking-widest border-b border-outline pb-3">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:07799180009"
                className="group flex flex-col gap-1 bg-surface-container-high p-4 border border-outline hover:border-primary transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Emergency Line</span>
                <span className="text-xl font-black text-primary tracking-tight group-hover:opacity-80 transition-opacity">
                  07799 180009
                </span>
                <span className="text-xs text-on-surface-variant">Available 24 / 7</span>
              </a>
              {/* Address */}
              <div className="flex flex-col gap-1 text-sm text-on-surface-variant">
                <span className="font-bold text-on-surface text-xs uppercase tracking-widest">Address</span>
                <span>Coupe Road</span>
                <span>Sheffield, S3 9DP</span>
                <span>South Yorkshire, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-on-surface-variant text-xs">
            &copy; {new Date().getFullYear()} MH Recovery Service LTD. All rights reserved.
          </p>
          <p className="text-on-surface-variant text-xs">
            Designed By{' '}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              Linkedo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
