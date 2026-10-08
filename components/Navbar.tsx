'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const whatsappHref = 'https://wa.me/447799180009?text=Hello%2C%20I%20need%20car%20recovery%20assistance.'
  const SECOND_PHONE_NUMBER = '+44 7438 127819'
  const SECOND_PHONE_TEL = 'tel:+447438127819'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top announcement bar */}
      <div className="bg-primary text-on-primary text-center py-2 px-4 text-xs font-bold tracking-widest uppercase">
        Available 24/7 &mdash; Sheffield &amp; South Yorkshire &mdash;{' '}
        <a href="tel:+447799180009" className="underline underline-offset-2 hover:no-underline">
          07799 180009
        </a>
        {' '}or{' '}
        <a href={SECOND_PHONE_TEL} className="underline underline-offset-2 hover:no-underline">
          {SECOND_PHONE_NUMBER}
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
              href="tel:+447799180009"
              className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">phone_in_talk</span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Call us now</span>
                <span className="text-sm font-bold text-on-surface">07799 180009</span>
              </div>
            </a>
            <a
              href={SECOND_PHONE_TEL}
              className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">phone_in_talk</span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Alternative line</span>
                <span className="text-sm font-bold text-on-surface">{SECOND_PHONE_NUMBER}</span>
              </div>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                fill="white"
                aria-hidden="true"
              >
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.78L2 30l7.42-1.82A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.08 1.1-4.28-.28-.44A11.5 11.5 0 1 1 16 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.22 3.32 1.4 3.55c.17.23 2.4 3.67 5.82 5.15.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z" />
              </svg>
            </a>
            <a
              href="tel:+447799180009"
              className="bg-primary text-on-primary px-5 py-3 font-bold text-xs tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all"
            >
              Emergency Help
            </a>
          </div>

          {/* Call + WhatsApp — mobile only */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+447799180009"
              aria-label="Call us now"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary active:scale-95 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="white"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-full active:scale-95 transition-all duration-200"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-[18px] h-[18px]"
                fill="white"
                aria-hidden="true"
              >
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.78L2 30l7.42-1.82A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.08 1.1-4.28-.28-.44A11.5 11.5 0 1 1 16 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.22 3.32 1.4 3.55c.17.23 2.4 3.67 5.82 5.15.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z" />
              </svg>
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
          <div className="flex items-center justify-between gap-3 px-6 pt-5 pb-4 border-b border-outline">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">phone_in_talk</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Emergency line</p>
                <a href="tel:+447799180009" className="text-base font-bold text-on-surface">07799 180009</a>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Alternative line</p>
                <a href={SECOND_PHONE_TEL} className="text-base font-bold text-on-surface">{SECOND_PHONE_NUMBER}</a>
              </div>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full active:scale-95 transition-all duration-200"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                fill="white"
                aria-hidden="true"
              >
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.78L2 30l7.42-1.82A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.08 1.1-4.28-.28-.44A11.5 11.5 0 1 1 16 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.22 3.32 1.4 3.55c.17.23 2.4 3.67 5.82 5.15.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z" />
              </svg>
            </a>
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
              href="tel:+447799180009"
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
