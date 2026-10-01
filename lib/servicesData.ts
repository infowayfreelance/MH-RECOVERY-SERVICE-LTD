export interface ServiceItem {
  slug: string
  route: string
  name: string
  anchorText: string
  summary: string
  exists: boolean
  img: string
  alt: string
  icon: string
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'car-recovery-sheffield',
    route: '/services/car-recovery-sheffield',
    name: 'Car Recovery',
    anchorText: 'car recovery in Sheffield',
    summary: 'If your car cannot be driven, we can help move it to a garage, your home, or another agreed place.',
    exists: true,
    img: '/24 7 Car Recovery Sheffield MH.jpg',
    alt: 'Car recovery truck transporting a vehicle in Sheffield',
    icon: 'directions_car',
  },
  {
    slug: 'breakdown-recovery-sheffield',
    route: '/services/breakdown-recovery-sheffield',
    name: 'Breakdown Recovery',
    anchorText: 'breakdown recovery in Sheffield',
    summary: 'Has your car stopped working on the road? Contact us with your location and the problem.',
    exists: true,
    img: '/Fast Breakdown Recovery MH.jpg',
    alt: 'Breakdown recovery service in Sheffield',
    icon: 'build',
  },
  {
    slug: 'car-towing-sheffield',
    route: '/services/car-towing-sheffield',
    name: 'Vehicle Towing',
    anchorText: 'vehicle towing in Sheffield',
    summary: 'We can help take your car from one place to another. Share the pickup address and where it needs to go.',
    exists: true,
    img: '/Car Towing Service MH.jpg',
    alt: 'Car towing service in Sheffield',
    icon: 'rv_hookup',
  },
  {
    slug: 'jump-starts-sheffield',
    route: '/services/jump-starts-sheffield',
    name: 'Jump Starts',
    anchorText: 'jump start service in Sheffield',
    summary: 'A flat battery may stop your car from starting. Call us and tell us what happens when you try.',
    exists: true,
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Car-Jump-Start-opt-JYsT9hrxSoSxpaw7paudJH4kEG6lMt.webp',
    alt: 'Jump start service for a flat battery in Sheffield',
    icon: 'bolt',
  },
  {
    slug: 'tyre-damage-assistance-sheffield',
    route: '/services/tyre-damage-assistance-sheffield',
    name: 'Tyre Damage Assistance',
    anchorText: 'tyre damage assistance in Sheffield',
    summary: 'Roadside wheel changes and tyre damage support when you do not have a spare or the right tools.',
    exists: true,
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20Demage%20assistance-8r1QZ5Qls7ZajnSo6H2gquraMmlaCG.jpg',
    alt: 'Tyre damage assistance service in Sheffield',
    icon: 'tire_repair',
  },
  {
    slug: 'lost-car-keys-help-sheffield',
    route: '/services/lost-car-keys-help-sheffield',
    name: 'Lost Car Keys Help',
    anchorText: 'lost car keys help in Sheffield',
    summary: 'Entry assistance and vehicle recovery if you have been locked out or lost your vehicle keys.',
    exists: true,
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lost-replacement-car-keys-dc9c3589-0QM0nZZ8CCSDpf8xpoPobBFiM474eR.jpeg',
    alt: 'Lost car keys help service in Sheffield',
    icon: 'key',
  },
  {
    slug: 'accident-recovery-sheffield',
    route: '/services/accident-recovery-sheffield',
    name: 'Accident Recovery',
    anchorText: 'accident recovery in Sheffield',
    summary: 'MH Recovery Service Ltd provides accident recovery in Sheffield, moving damaged cars to an agreed destination.',
    exists: true,
    img: '/Accident Recovery Sheffield MH.jpg',
    alt: 'Accident recovery service in Sheffield',
    icon: 'warning',
  },
  {
    slug: 'long-distance-recovery-sheffield',
    route: '/services/long-distance-recovery-sheffield',
    name: 'Long Distance Recovery',
    anchorText: 'long distance recovery from Sheffield',
    summary: 'Need your vehicle transported further afield? We arrange longer journeys from Sheffield to agreed destinations.',
    exists: true,
    img: '/car-towing-sheffield.jpg',
    alt: 'Long distance vehicle recovery from Sheffield',
    icon: 'route',
  },
  {
    slug: 'roadside-assistance-sheffield',
    route: '/services/roadside-assistance-sheffield',
    name: 'Roadside Assistance',
    anchorText: 'roadside assistance in Sheffield',
    summary: 'On-the-spot help when your vehicle breaks down by the road and you need immediate support.',
    exists: false,
    img: '',
    alt: '',
    icon: 'support',
  },
  {
    slug: 'motorcycle-recovery-sheffield',
    route: '/services/motorcycle-recovery-sheffield',
    name: 'Motorcycle Recovery',
    anchorText: 'motorcycle recovery in Sheffield',
    summary: 'If your motorcycle breaks down or cannot be ridden, we can help move it. Tell us the bike model and where you want it taken.',
    exists: false,
    img: '',
    alt: '',
    icon: 'two_wheeler',
  },
]

export const liveServices = servicesData.filter((s) => s.exists)
