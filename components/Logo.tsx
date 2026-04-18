import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <img 
        src="/logo1.png" 
        alt="Hussnain Car Recovery Logo" 
        className="h-36 w-auto"   // pehle h-28 tha, ab h-36 (144px)
      />
    </Link>
  )
}