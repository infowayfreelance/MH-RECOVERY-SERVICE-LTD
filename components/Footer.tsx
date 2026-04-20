import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {/* Left Column - Logo + Text */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-slate-500 font-sans text-sm tracking-wide leading-relaxed max-w-sm">
              24/7 professional car recovery across Sheffield &amp; South Yorkshire. Fast, reliable and affordable.
            </p>
            <p className="text-slate-600 font-sans text-xs tracking-wide leading-relaxed">
              © {new Date().getFullYear()} HUSSNIN CAR RECOVERY. COUPE ROAD, SHEFFIELD, S3 9DP.
            </p>
            <a
              href="tel:07799180009"
              className="font-sans text-yellow-500 font-bold text-sm tracking-widest hover:text-yellow-400 transition-colors"
            >
              CALL: 07799 180009
            </a>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h5 className="text-slate-200 font-sans font-bold uppercase text-xs tracking-widest">Quick Links</h5>
              <Link href="/" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                Home
              </Link>
              <Link href="/about" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                About
              </Link>
              <Link href="/services" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                Services
              </Link>
              <Link href="/contact" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-slate-200 font-sans font-bold uppercase text-xs tracking-widest">Legal</h5>
              <Link href="#" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                Terms
              </Link>
              <Link href="#" className="text-slate-500 font-sans text-sm tracking-wide hover:text-slate-300 transition-colors underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
