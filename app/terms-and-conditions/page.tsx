import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS, TERMS } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Terms and Conditions | MH Recovery Service Ltd',
  description:
    'Read the booking, payment, cancellation and service terms for MH Recovery Service Ltd in Sheffield and South Yorkshire.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | MH Recovery Service Ltd',
    description:
      'Read the booking, payment, cancellation and service terms for MH Recovery Service Ltd in Sheffield and South Yorkshire.',
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | MH Recovery Service Ltd',
    description:
      'Read the booking, payment, cancellation and service terms for MH Recovery Service Ltd in Sheffield and South Yorkshire.',
    images: [OG_IMAGE],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Terms and Conditions', item: `${SITE_URL}/terms-and-conditions` },
  ],
}

export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-surface">

        {/* Breadcrumb */}
        <div className="hidden max-w-3xl mx-auto mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-on-surface-variant flex-wrap">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span></li>
              <li className="text-primary font-medium" aria-current="page">Terms and Conditions</li>
            </ol>
          </nav>
        </div>

        <div className="max-w-3xl mx-auto">

          {/* Page header */}
          <div className="mb-10 pb-6 border-b border-outline">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-on-surface mb-3">
              Terms and Conditions
            </h1>
            {TERMS.lastUpdated && (
              <p className="text-on-surface-variant text-sm font-sans">
                Last updated: {TERMS.lastUpdated}
              </p>
            )}
            <p className="text-on-surface-variant text-base font-sans mt-3 leading-relaxed">
              These terms explain how bookings and services are arranged with {BUSINESS.name}. Please read them before agreeing to a job.
            </p>
          </div>

          <div className="flex flex-col gap-10 font-sans">

            {/* 1. About Us */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                1. About Us
              </h2>
              <div className="bg-surface-container-low border border-outline/30 rounded-xl p-5 flex flex-col gap-1.5 text-sm text-on-surface-variant">
                <div><span className="font-semibold text-on-surface">Business name:</span> {BUSINESS.name}</div>
                <div><span className="font-semibold text-on-surface">Address:</span> {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.postcode}</div>
                <div>
                  <span className="font-semibold text-on-surface">Phone and WhatsApp:</span>{' '}
                  <a href={BUSINESS.phonePrimaryTel} className="text-primary hover:opacity-80 transition-opacity">
                    {BUSINESS.phonePrimary}
                  </a>
                </div>
                {BUSINESS.emailDomain && (
                  <div>
                    <span className="font-semibold text-on-surface">Email:</span>{' '}
                    <a href={`mailto:${BUSINESS.emailDomain}`} className="text-primary hover:opacity-80 transition-opacity">
                      {BUSINESS.emailDomain}
                    </a>
                  </div>
                )}
                {BUSINESS.companyNumber && (
                  <div><span className="font-semibold text-on-surface">Company number:</span> {BUSINESS.companyNumber}</div>
                )}
                {BUSINESS.registeredOffice && (
                  <div><span className="font-semibold text-on-surface">Registered office:</span> {BUSINESS.registeredOffice}</div>
                )}
              </div>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed mt-4">
                <p>Our phone line is open 24 hours a day, 7 days a week.</p>
                <p>We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.</p>
              </div>
            </section>

            {/* 2. Our Services */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                2. Our Services
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>The service included in your booking will be explained before you agree to the job.</p>
                <p>Your booking covers the work agreed with us. Repairs, replacement parts, storage, passenger transport and other additional services are included only where expressly agreed.</p>
                <p>Website descriptions do not guarantee that every vehicle or location can be handled in the same way. Tell us about the vehicle&apos;s condition and collection access so the proposed job can be agreed accurately.</p>
              </div>
            </section>

            {/* 3. Quotes and Bookings */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                3. Quotes and Bookings
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>We give you a quote and an estimated arrival time on the phone before you agree to a job.</p>
                <p>Please provide your exact location, vehicle details, the reason for recovery and the delivery address where applicable.</p>
                <p>Sending an enquiry or WhatsApp message does not by itself confirm a booking.</p>
                {TERMS.bookingConfirmationNote && (
                  <p>{TERMS.bookingConfirmationNote}</p>
                )}
                <p>If the information or requested work changes, we will explain any effect on the quote and seek your agreement before carrying out additional work.</p>
              </div>
            </section>

            {/* 4. Arrival Estimates */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                4. Arrival Estimates
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>Arrival times are estimates, not guarantees. Traffic, road closures, weather and the circumstances of a recovery can affect arrival.</p>
                <p>If circumstances change, we will explain any revised estimate as soon as reasonably possible.</p>
                <p>The 24/7 opening hours apply to our phone line. Your estimated attendance time is discussed during the call.</p>
              </div>
            </section>

            {/* 5. Information You Must Provide */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                5. Information You Must Provide
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>You must be the vehicle owner or have permission to arrange work on the vehicle.</p>
                <p>Tell us about known damage, locked steering, missing keys, damaged wheels, applied brakes or anything else that may affect collection.</p>
                <p>Explain any access limits, including gates, low entrances, car park restrictions or limited space around the vehicle.</p>
                <p>Please provide accurate contact details and tell us promptly if your location or requirements change.</p>
                {TERMS.idRequirementsNote && (
                  <p>{TERMS.idRequirementsNote}</p>
                )}
              </div>
            </section>

            {/* 6. Safety and Access */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                6. Safety and Access
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>If anyone is hurt or in danger, call 999 first.</p>
                <p>Follow instructions from emergency services at the scene. Do not enter traffic, attempt unsafe repairs or put yourself at risk to prepare the vehicle for recovery.</p>
                <p>We will not carry out work where conditions make it unsafe. If the agreed work cannot proceed safely, we will explain the situation and discuss the next steps.</p>
                {TERMS.unsafeCollectionNote && (
                  <p>{TERMS.unsafeCollectionNote}</p>
                )}
              </div>
            </section>

            {/* 7. Collection and Delivery */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                7. Collection and Delivery
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>The collection point and destination must be agreed before the vehicle is moved.</p>
                <p>If the destination is a garage or another business, please confirm that it can receive the vehicle. Tell us about opening hours and any agreed arrangements for leaving it.</p>
                <p>Contact us if you need to change the destination. Any revised work and quote must be agreed before proceeding.</p>
                {TERMS.deliveryProceduresNote && (
                  <p>{TERMS.deliveryProceduresNote}</p>
                )}
              </div>
            </section>

            {/* 8. Payment */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                8. Payment
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>The quote and payment arrangements will be explained before you agree to the booking.</p>
                {TERMS.paymentNote && (
                  <p>{TERMS.paymentNote}</p>
                )}
                <p>Any additional charges must be clearly explained and agreed where required. Nothing in these terms allows undisclosed charges to be added automatically.</p>
              </div>
            </section>

            {/* 9. Cancellations and Refunds */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                9. Cancellations and Refunds
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>Contact us on <a href={BUSINESS.phonePrimaryTel} className="text-primary hover:opacity-80 transition-opacity">{BUSINESS.phonePrimary}</a> as soon as possible if you need to cancel or change a booking.</p>
                <p>Your cancellation rights depend on the type of booking and the applicable law. These terms do not remove your statutory rights.</p>
                {TERMS.cancellationPolicyNote && (
                  <p>{TERMS.cancellationPolicyNote}</p>
                )}
                <p>There is no blanket &ldquo;no refunds&rdquo; rule under these terms.</p>
              </div>
            </section>

            {/* 10. Service Standards and Responsibility */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                10. Service Standards and Responsibility
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>We will carry out the agreed service with reasonable care and skill.</p>
                <p>Tell us about a problem with the service or any suspected new damage as soon as reasonably possible. Provide the booking details and photographs where available.</p>
                <p>Existing damage is separate from damage caused during our work. This does not exclude responsibility for damage we cause.</p>
                <p>Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation.</p>
                <p>Your statutory consumer rights remain unaffected.</p>
              </div>
            </section>

            {/* 11. Insurance Questions */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                11. Insurance Questions
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>Contact your insurer to confirm whether your policy covers recovery or other related services.</p>
                <p>We do not promise that your insurer will approve or reimburse a booking. Any claims questions should be directed to your insurer or an appropriate professional.</p>
              </div>
            </section>

            {/* 12. Complaints */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                12. Complaints
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>If you are unhappy with the service, contact us using the details above. Include your name, contact details, vehicle registration, job date and a description of the issue.</p>
                {TERMS.complaintsProcessNote && (
                  <p>{TERMS.complaintsProcessNote}</p>
                )}
              </div>
            </section>

            {/* 13. Personal Information */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                13. Personal Information
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Our{' '}
                <Link href="/privacy-policy" className="text-primary hover:opacity-80 transition-opacity font-semibold">
                  Privacy Policy
                </Link>{' '}
                explains how personal information is handled when you contact us or arrange a service.
              </p>
            </section>

            {/* 14. Changes to These Terms */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                14. Changes to These Terms
              </h2>
              <div className="flex flex-col gap-3 text-on-surface-variant text-base leading-relaxed">
                <p>Updated terms will be published on this page with a revised date.</p>
                <p>Changes will apply to future bookings. They will not automatically change the terms of a booking already agreed.</p>
              </div>
            </section>

            {/* 15. Applicable Law */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                15. Applicable Law
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                These terms are governed by the law of England and Wales. This does not remove any mandatory protections or court rights available to consumers elsewhere in the UK.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
