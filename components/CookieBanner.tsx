'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'mh_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage unavailable (private browsing etc.) — show banner
      setVisible(true)
    }
  }, [])

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch { /* ignore */ }
    setVisible(false)
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, 'declined') } catch { /* ignore */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container border-t border-outline shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-on-surface-variant text-sm font-sans leading-relaxed flex-1">
          We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.{' '}
          <Link href="/privacy-policy" className="text-primary font-semibold hover:opacity-80 transition-opacity underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-bold text-on-surface-variant border border-outline rounded hover:border-primary hover:text-primary transition-colors min-h-[40px]"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold bg-primary text-on-primary rounded hover:opacity-90 active:scale-95 transition-all min-h-[40px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
