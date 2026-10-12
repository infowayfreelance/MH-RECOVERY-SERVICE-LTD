'use client'
import { useState } from 'react'

export default function FBVideoEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={src}
        width="267"
        height="476"
        style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={title}
      />
    )
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative flex flex-col items-center justify-center gap-3 bg-surface-container-high border border-outline hover:border-primary transition-colors group cursor-pointer rounded-lg"
      style={{ width: 267, height: 476, maxWidth: '100%' }}
      aria-label={`Load video: ${title}`}
    >
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-on-surface-variant text-xs text-center px-4">Click to load video</p>
    </button>
  )
}
