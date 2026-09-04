'use client'

import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay={visible}
      muted
      loop
      playsInline
      preload="none"
    >
      {visible && <source src={src} type="video/mp4" />}
    </video>
  )
}
