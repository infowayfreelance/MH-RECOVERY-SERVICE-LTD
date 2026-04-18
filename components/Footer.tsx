import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Left Column - Logo + Text */}
        <div>
         <Logo/>
          
          <p className="text-slate-500 font-['Inter'] text-sm tracking-wide leading-relaxed max-w-sm">
            © 2024 HUSSNIN CAR RECOVERY. COUPE ROAD, SHEFFIELD, S3 9DP. CALL: 07799 180009
          </p>
        </div>

        {/* Right Column - Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <h5 className="text-slate-200 font-bold uppercase text-xs tracking-widest mb-2">Quick Links</h5>
            <Link href="/services" className="text-slate-500 font-['Inter'] text-sm tracking-wide hover:text-slate-300 underline">
              Services
            </Link>
            <Link href="/contact" className="text-slate-500 font-['Inter'] text-sm tracking-wide hover:text-slate-300 underline">
              Emergency Recovery
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-slate-200 font-bold uppercase text-xs tracking-widest mb-2">Legal</h5>
            <Link href="#" className="text-slate-500 font-['Inter'] text-sm tracking-wide hover:text-slate-300 underline">
              Terms
            </Link>
            <Link href="#" className="text-slate-500 font-['Inter'] text-sm tracking-wide hover:text-slate-300 underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}