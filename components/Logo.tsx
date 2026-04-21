import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hussnain%20Car%20Recovery%20Logo%20%282%29-znnEcuXbxqyaGwtAKDzN2wtJJ9PiJ0.png"
        alt="Hussnain Car Recovery Logo"
        width={160}
        height={80}
        className="h-16 w-auto object-contain"
        priority
      />
    </Link>
  )
}
