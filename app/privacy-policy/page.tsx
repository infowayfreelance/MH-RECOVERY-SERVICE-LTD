import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, OG_IMAGE, BUSINESS, PRIVACY_POLICY } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Privacy Policy | MH Recovery Service Ltd',
  description:
    'Read how MH Recovery Service Ltd handles personal information when you contact us, use our website or arrange vehicle recovery in Sheffield.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | MH Recovery Service Ltd',
    description:
      'Read how MH Recovery Service Ltd handles personal information when you contact us, use our website or arrange vehicle recovery in Sheffield.',
    url: `${SITE_URL}/privacy-policy`,
    siteName: 'MH Recovery Service Ltd',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'MH Recovery Service Ltd – Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | MH Recovery Service Ltd',
    description:
      'Read how MH Recovery Service Ltd handles personal information when you contact us, use our website or arrange vehicle recovery in Sheffield.',
    images: [OG_IMAGE],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
  ],
}

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-surface">

        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-on-surface-variant flex-wrap">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span></li>
              <li className="text-primary font-medium" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
        </div>

        <div className="max-w-3xl mx-auto">

          {/* Page header */}
          <div className="mb-10 pb-6 border-b border-outline">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-on-surface mb-3">
              Privacy Policy
            </h1>
            {PRIVACY_POLICY.lastUpdated && (
              <p className="text-on-surface-variant text-sm font-sans">
                Last updated: {PRIVACY_POLICY.lastUpdated}
              </p>
            )}
            <p className="text-on-surface-variant text-base font-sans mt-3 leading-relaxed">
              {BUSINESS.name} respects your privacy. This policy explains how we handle personal information when you contact us, visit our website or arrange vehicle recovery.
            </p>
          </div>

          <div className="flex flex-col gap-10 font-sans">

            {/* Who We Are */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Who We Are
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                {BUSINESS.name} is responsible for the personal information it collects and uses for its business.
              </p>
              <div className="bg-surface-container-low border border-outline/30 rounded-xl p-5 flex flex-col gap-1.5 text-sm text-on-surface-variant">
                <div><span className="font-semibold text-on-surface">Address:</span> {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.postcode}</div>
                <div>
                  <span className="font-semibold text-on-surface">Phone:</span>{' '}
                  <a href={BUSINESS.phonePrimaryTel} className="text-primary hover:opacity-80 transition-opacity">
                    {BUSINESS.phonePrimary}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-on-surface">WhatsApp:</span>{' '}
                  <a
                    href={`https://wa.me/${BUSINESS.phonePrimaryWA}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity"
                  >
                    {BUSINESS.phonePrimary}
                  </a>
                </div>
                {PRIVACY_POLICY.contactEmail && (
                  <div>
                    <span className="font-semibold text-on-surface">Email:</span>{' '}
                    <a href={`mailto:${PRIVACY_POLICY.contactEmail}`} className="text-primary hover:opacity-80 transition-opacity">
                      {PRIVACY_POLICY.contactEmail}
                    </a>
                  </div>
                )}
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mt-4">
                You can contact us using these details if you have questions about your information.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Information We Collect
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  When you contact us or request a service, we may receive your name, phone number, email address and the details you share in your message.
                </p>
                <p>
                  To arrange recovery, we may need your vehicle registration, make and model, collection location, delivery address and a description of the vehicle&apos;s condition. You may also choose to send photographs or share your location through WhatsApp.
                </p>
                <p>
                  Please avoid sending information that is not needed for your enquiry, including medical details or other people&apos;s personal information.
                </p>
                {PRIVACY_POLICY.formFieldsNote && (
                  <p>{PRIVACY_POLICY.formFieldsNote}</p>
                )}
                <p>
                  When you visit the website, its hosting provider or other website tools may process technical information, such as your IP address, browser type and pages visited.
                </p>
                {PRIVACY_POLICY.techInfoNote && (
                  <p>{PRIVACY_POLICY.techInfoNote}</p>
                )}
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                How We Use Your Information
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  We use information provided for an enquiry to respond, discuss your needs and prepare a quote.
                </p>
                <p>
                  Information provided for an agreed job is used to arrange collection, communicate with you and deliver the vehicle to the agreed location.
                </p>
                <p>
                  We may also need records to manage payments, answer complaints, protect the business and meet legal obligations.
                </p>
                {PRIVACY_POLICY.purposesNote && (
                  <p>{PRIVACY_POLICY.purposesNote}</p>
                )}
                <p>
                  You do not have to provide information for a general enquiry. However, without essential contact, vehicle and location details, we may be unable to quote for or carry out a recovery job.
                </p>
              </div>
            </section>

            {/* Our Reasons for Using Your Information */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Our Reasons for Using Your Information
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                The lawful basis depends on why we use the information.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Contract',
                    desc: 'Information needed to prepare a quote at your request or carry out a service you have agreed to.',
                  },
                  {
                    label: 'Legal obligation',
                    desc: 'Records we must keep or disclose to meet applicable legal requirements.',
                  },
                  {
                    label: 'Legitimate interests',
                    desc: 'Information needed to manage enquiries, handle complaints and protect our business, where this does not unfairly affect your rights.',
                  },
                  {
                    label: 'Consent',
                    desc: 'Activities for which we ask your permission, where applicable. You can withdraw that permission by contacting us. Withdrawal does not affect earlier use that was lawful.',
                  },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" aria-hidden="true">check_circle</span>
                    <p className="text-on-surface-variant text-base leading-relaxed">
                      <strong className="text-on-surface">{label}:</strong> {desc}
                    </p>
                  </div>
                ))}
              </div>
              {PRIVACY_POLICY.lawfulBasisNote && (
                <p className="text-on-surface-variant text-base leading-relaxed mt-4">{PRIVACY_POLICY.lawfulBasisNote}</p>
              )}
            </section>

            {/* Who Receives Your Information */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Who Receives Your Information
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Information may need to be shared with people or providers involved in delivering the agreed service or running the business.
                </p>
                {PRIVACY_POLICY.recipientsNote && (
                  <p>{PRIVACY_POLICY.recipientsNote}</p>
                )}
                <p>
                  Where disclosure is required by law, relevant information may be provided to the appropriate authority.
                </p>
              </div>
            </section>

            {/* WhatsApp and Other Services */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                WhatsApp and Other Services
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  If you message us through WhatsApp, the information you send is also handled by WhatsApp under its own privacy terms. You can choose to contact us by phone instead.
                </p>
                <p>
                  Links to other websites take you to services with their own privacy policies. Please read those policies before providing personal information.
                </p>
              </div>
            </section>

            {/* Information Handled Outside the UK */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Information Handled Outside the UK
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Some technology providers may handle information outside the UK.
                </p>
                {PRIVACY_POLICY.internationalNote && (
                  <p>{PRIVACY_POLICY.internationalNote}</p>
                )}
              </div>
            </section>

            {/* How Long We Keep Information */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                How Long We Keep Information
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Retention depends on the reason a record is needed. Relevant factors include completing the service, dealing with complaints or disputes, and meeting record-keeping requirements.
                </p>
                {PRIVACY_POLICY.retentionNote && (
                  <p>{PRIVACY_POLICY.retentionNote}</p>
                )}
              </div>
            </section>

            {/* Keeping Information Secure */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Keeping Information Secure
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                {PRIVACY_POLICY.securityNote && (
                  <p>{PRIVACY_POLICY.securityNote}</p>
                )}
                <p>
                  Please do not send card details, passwords or unnecessary identity documents through an enquiry form or WhatsApp message.
                </p>
              </div>
            </section>

            {/* Cookies and Website Tracking */}
            {PRIVACY_POLICY.cookiesNote && (
              <section>
                <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                  Cookies and Website Tracking
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {PRIVACY_POLICY.cookiesNote}
                </p>
              </section>
            )}

            {/* Your Privacy Rights */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Your Privacy Rights
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Depending on the circumstances, you may have rights to access your information, correct it, request deletion, restrict its use or receive certain information in a portable format. These rights are subject to conditions.{' '}
                  <a
                    href="https://ico.org.uk/for-the-public/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity font-semibold"
                  >
                    ICO
                  </a>
                </p>
                <p>
                  Your right to object: You can object to processing based on legitimate interests. You can also object to the use of your information for direct marketing.
                </p>
                <p>
                  Where processing relies on consent, you can withdraw it.
                </p>
                <p>
                  To make a request, contact us using the details above. We may need information to confirm your identity before releasing personal records.
                </p>
              </div>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Complaints
              </h2>
              <div className="flex flex-col gap-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Contact us if you are unhappy with how we handle your information.
                </p>
                <p>
                  You also have the right to complain to the Information Commissioner&apos;s Office, the UK data protection regulator, through its{' '}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity font-semibold"
                  >
                    complaints page
                  </a>
                  .{' '}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity font-semibold"
                  >
                    ICO
                  </a>
                </p>
              </div>
            </section>

            {/* Automated Decisions */}
            {PRIVACY_POLICY.automatedDecisionsNote && (
              <section>
                <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                  Automated Decisions
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {PRIVACY_POLICY.automatedDecisionsNote}
                </p>
              </section>
            )}

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-lg font-black uppercase tracking-tight text-on-surface mb-4 pb-2 border-b border-outline/40">
                Changes to This Policy
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                We will update this policy when our handling of personal information changes. The date at the top will show when it was last updated.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
