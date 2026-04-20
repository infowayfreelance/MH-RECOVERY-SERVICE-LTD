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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/services-detailed', label: 'Detailed' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-blue-950 sticky top-0 z-50">
      {/* Main nav bar */}
      <nav className="flex justify-between items-center w-full px-4 md:px-6 max-w-7xl mx-auto h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans font-bold tracking-tight uppercase transition-all active:scale-95 duration-100 ${
                isActive(href)
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-300 hover:text-white hover:bg-blue-900 px-2 py-1 rounded'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side: Call button + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:07799180009"
            className="bg-yellow-500 text-black px-3 py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm tracking-widest active:scale-95 duration-100 uppercase hover:bg-yellow-400 rounded whitespace-nowrap"
          >
            CALL NOW
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none p-1"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800 shadow-lg w-full">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-sans font-bold tracking-tight uppercase py-3 transition-all ${
                  isActive(href)
                    ? 'text-white border-l-4 border-yellow-500 pl-3'
                    : 'text-gray-300 hover:text-white hover:bg-blue-900 px-3 rounded'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:07799180009"
              className="mt-3 bg-yellow-500 text-black px-4 py-3 font-bold text-sm tracking-widest uppercase hover:bg-yellow-400 rounded text-center"
            >
              CALL: 07799 180009
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
