import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.webp"
        alt="Hussnain Car Recovery Logo"
        width={160}
        height={80}
        className="h-16 w-auto object-contain"
        priority
      />
    </Link>
  )
}
