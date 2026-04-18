'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-blue-950 h-16 overflow-visible sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-4 md:px-6 max-w-7xl mx-auto h-full">
        {/* Logo */}
        <Logo />

        {/* Desktop Links - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/')
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/about')
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/services')
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
            }`}
          >
            Services
          </Link>
          <Link
            href="/services-detailed"
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/services-detailed')
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
            }`}
          >
            Detailed
          </Link>
          <Link
            href="/contact"
            className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
              isActive('/contact')
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right side: Call button + Hamburger (mobile only) */}
        <div className="flex items-center gap-4">
          <a
            href="tel:07799180009"
            className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm tracking-widest active:scale-95 duration-100 uppercase hover:bg-yellow-400 rounded"
          >
            CALL NOW
          </a>

          {/* Hamburger Icon - visible only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800 shadow-lg absolute w-full z-40">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all ${
                isActive('/')
                  ? 'text-white border-l-4 border-white pl-2'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all ${
                isActive('/about')
                  ? 'text-white border-l-4 border-white pl-2'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all ${
                isActive('/services')
                  ? 'text-white border-l-4 border-white pl-2'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              Services
            </Link>
            <Link
              href="/services-detailed"
              onClick={() => setIsMenuOpen(false)}
              className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all ${
                isActive('/services-detailed')
                  ? 'text-white border-l-4 border-white pl-2'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              Detailed
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`font-['Space_Grotesk'] font-bold tracking-tight uppercase transition-all ${
                isActive('/contact')
                  ? 'text-white border-l-4 border-white pl-2'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}