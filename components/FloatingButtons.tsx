'use client'

import { useState } from 'react'

const PHONE_NUMBER = '07799180009'
const WHATSAPP_NUMBER = '447799180009'

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<'call' | 'whatsapp' | null>(null)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <div className="flex items-center gap-3">
        {/* Label */}
        <span
          className={`bg-[#25d366] text-white text-xs font-bold tracking-wide uppercase px-3 py-1.5 shadow-lg transition-all duration-300 whitespace-nowrap ${
            hovered === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          WhatsApp Us
        </span>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20car%20recovery%20assistance.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered('whatsapp')}
          onMouseLeave={() => setHovered(null)}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-xl active:scale-95 transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: '#25d366' }}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7"
            fill="white"
            aria-hidden="true"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.8 1.86 6.78L2 30l7.42-1.82A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.4 1.08 1.1-4.28-.28-.44A11.5 11.5 0 1 1 16 27.5zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.22 3.32 1.4 3.55c.17.23 2.4 3.67 5.82 5.15.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.23-.65-.4z" />
          </svg>
        </a>
      </div>

      {/* Call Button */}
      <div className="flex items-center gap-3">
        {/* Label */}
        <span
          className={`bg-primary text-on-primary text-xs font-bold tracking-wide uppercase px-3 py-1.5 shadow-lg transition-all duration-300 whitespace-nowrap ${
            hovered === 'call' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          Call Now
        </span>

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us now"
          onMouseEnter={() => setHovered('call')}
          onMouseLeave={() => setHovered(null)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-xl active:scale-95 transition-all duration-200 hover:scale-110"
        >
          {/* Phone SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="white"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
