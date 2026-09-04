'use client'

import { useEffect } from 'react'

const ICON_FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'

export default function FontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[href="${ICON_FONT_HREF}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = ICON_FONT_HREF
    document.head.appendChild(link)
  }, [])

  return null
}
