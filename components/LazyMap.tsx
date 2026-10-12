'use client'
import { useState } from 'react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.6297063803272!2d-1.4621604!3d53.3959602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2aedd84647d64d99%3A0x3a8110a229539be!2sMH%20RECOVERY%20SERVICE%20LTD!5e1!3m2!1sen!2s!4v1791104368224!5m2!1sen!2s'

export default function LazyMap() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title="MH Recovery Service Ltd location on Coupe Road, Sheffield S3 9DP"
      />
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-surface-container-high">
      <span className="material-symbols-outlined text-primary text-5xl" aria-hidden="true">location_on</span>
      <p className="font-bold text-on-surface text-lg">Coupe Road, Sheffield, S3 9DP</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setLoaded(true)}
          className="bg-primary text-on-primary px-5 py-2.5 text-sm font-bold rounded hover:opacity-90 transition-opacity"
        >
          Show Map
        </button>
        <a
          href="https://www.google.com/maps/search/?api=1&query=MH+Recovery+Service+Ltd+Sheffield"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-outline text-on-surface-variant px-5 py-2.5 text-sm font-bold rounded hover:border-primary hover:text-on-surface transition-colors"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
