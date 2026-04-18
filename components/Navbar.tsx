'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path
  
  return (
    <header className="bg-slate-950 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-slate-300 font-['Space_Grotesk'] uppercase">
          HUSSNIN CAR RECOVERY
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/') 
                ? 'text-slate-100 border-b-2 border-slate-300 pb-1' 
                : 'text-slate-500 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/about') 
                ? 'text-slate-100 border-b-2 border-slate-300 pb-1' 
                : 'text-slate-500 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/services') 
                ? 'text-slate-100 border-b-2 border-slate-300 pb-1' 
                : 'text-slate-500 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/services-detailed" 
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/services-detailed') 
                ? 'text-slate-100 border-b-2 border-slate-300 pb-1' 
                : 'text-slate-500 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            Detailed
          </Link>
          <Link 
            href="/contact" 
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/contact') 
                ? 'text-slate-100 border-b-2 border-slate-300 pb-1' 
                : 'text-slate-500 hover:text-slate-100 hover:bg-slate-900'
            }`}
          >
            Contact
          </Link>
        </div>
        <a 
          href="tel:07799180009" 
          className="bg-secondary text-on-secondary px-6 py-3 font-bold text-sm tracking-widest active:scale-95 duration-100 uppercase"
        >
          CALL NOW
        </a>
      </nav>
    </header>
  )
}