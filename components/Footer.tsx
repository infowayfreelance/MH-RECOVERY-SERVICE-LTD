import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {/* Left Column - Logo + Text */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed max-w-sm">
              24/7 professional car recovery across Sheffield &amp; South Yorkshire. Fast, reliable and affordable.
            </p>
            <a
              href="tel:07799180009"
              className="font-sans text-primary font-bold text-sm tracking-widest hover:opacity-80 transition-opacity w-fit"
            >
              CALL: 07799 180009
            </a>
            <p className="text-on-surface-variant font-sans text-xs opacity-50">
              © {new Date().getFullYear()} HUSSNIN CAR RECOVERY. COUPE ROAD, SHEFFIELD, S3 9DP.
            </p>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h5 className="text-on-surface font-sans font-bold uppercase text-xs tracking-widest">Quick Links</h5>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-on-surface-variant font-sans text-sm hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-on-surface font-sans font-bold uppercase text-xs tracking-widest">Legal</h5>
              <Link href="#" className="text-on-surface-variant font-sans text-sm hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-on-surface-variant font-sans text-sm hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
