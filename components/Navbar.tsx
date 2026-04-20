'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top announcement bar */}
      <div className="bg-primary text-on-primary text-center py-2 px-4 text-xs font-bold tracking-widest uppercase">
        Available 24/7 &mdash; Sheffield &amp; South Yorkshire &mdash;{' '}
        <a href="tel:07799180009" className="underline underline-offset-2 hover:no-underline">
          07799 180009
        </a>
      </div>

      {/* Main navbar */}
      <nav className="bg-surface-container border-b border-outline">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <Logo />

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 font-bold tracking-wide uppercase text-sm transition-colors duration-150 group ${
                  isActive(href) ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
                {/* Active / hover underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-200 ${
                    isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right: phone + emergency CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:07799180009"
              className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-xl">phone_in_talk</span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Call us now</span>
                <span className="text-sm font-bold text-on-surface">07799 180009</span>
              </div>
            </a>
            <a
              href="tel:07799180009"
              className="bg-primary text-on-primary px-5 py-3 font-bold text-xs tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all"
            >
              Emergency Help
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-on-surface p-2 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline shadow-xl">
          {/* Phone info */}
          <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-outline">
            <span className="material-symbols-outlined text-primary">phone_in_talk</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Emergency line</p>
              <a href="tel:07799180009" className="text-base font-bold text-on-surface">07799 180009</a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col px-6 py-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-bold tracking-wide uppercase py-4 border-b border-outline/40 last:border-0 text-sm transition-colors ${
                  isActive(href) ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {isActive(href) && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 mb-0.5" />
                )}
                {label}
              </Link>
            ))}
          </div>
          {/* CTA */}
          <div className="px-6 pb-5">
            <a
              href="tel:07799180009"
              className="block w-full bg-primary text-on-primary py-4 font-bold text-sm tracking-widest uppercase text-center hover:opacity-90 active:scale-95 transition-all"
            >
              Get Emergency Help Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
