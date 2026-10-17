'use client'

import dynamic from 'next/dynamic'

const FloatingButtons = dynamic(() => import('./FloatingButtons'), { ssr: false })
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false })

export default function ClientShell() {
  return (
    <>
      <FloatingButtons />
      <CookieBanner />
    </>
  )
}
