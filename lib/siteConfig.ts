// Central site configuration — update these values when data is confirmed.
// Any value set to null will cause dependent UI to be hidden automatically.

export const SITE_URL = 'https://mhrecoveryserviceltd.co.uk'

export const BUSINESS = {
  name: 'MH Recovery Service Ltd',
  phonePrimary: '07799 180009',
  phonePrimaryTel: 'tel:+447799180009',
  phonePrimaryIntl: '+447799180009',
  phonePrimaryWA: '447799180009',
  phoneSecondary: '+44 7438 127819',
  phoneSecondaryTel: 'tel:+447438127819',
  // Domain email — update when set up
  emailDomain: null as string | null, // TODO: set to 'info@mhrecoveryserviceltd.co.uk'
  address: {
    street: 'Coupe Road',
    city: 'Sheffield',
    postcode: 'S3 9DP',
    region: 'South Yorkshire',
    country: 'GB',
    countryName: 'UK',
  },
  hours: 'Open 24 hours, 7 days a week',
  // Google Business Profile URL — add when confirmed
  googleBusinessUrl: null as string | null, // TODO: add GBP link
  // Social / sameAs profiles — add real URLs only
  sameAs: [] as string[],
  // Company registration — required for UK limited companies
  companyNumber: null as string | null, // TODO: Companies House number
  registeredOffice: null as string | null, // TODO: registered office address if different
  // Geo coordinates for schema — confirm before adding
  geo: null as { latitude: number; longitude: number } | null, // TODO: add coordinates
  // Typical response time — confirm before adding
  typicalResponseMinutes: null as number | null, // TODO: e.g. 45
  // Insurance / licence
  insuranceDetails: null as string | null, // TODO: confirm and add
}

export const OG_IMAGE = '/og-mh-recovery.webp'
export const SITE_ICON = '/site-icon.webp'

// Terms and conditions — fill each field when the information is confirmed.
// Any value left as null will cause the corresponding paragraph to be hidden.
export const TERMS = {
  lastUpdated: null as string | null,           // e.g. '1 October 2024'
  bookingConfirmationNote: null as string | null, // when booking becomes binding and how customer receives details
  idRequirementsNote: null as string | null,    // identification or vehicle document requirements
  unsafeCollectionNote: null as string | null,  // process for unsafe/inaccessible collection points, fair charges
  deliveryProceduresNote: null as string | null, // vehicle handover, unattended delivery, key handling
  paymentNote: null as string | null,           // payment methods, due date, deposit, VAT
  cancellationPolicyNote: null as string | null, // legally reviewed cancellation policy
  complaintsProcessNote: null as string | null, // complaints process, response target, dispute resolution
}

// Privacy policy — fill each field when the information is confirmed.
// Any value left as null will cause the corresponding section to be hidden.
export const PRIVACY_POLICY = {
  lastUpdated: null as string | null,            // e.g. '1 October 2024'
  contactEmail: null as string | null,            // e.g. 'privacy@mhrecoveryserviceltd.co.uk'
  formFieldsNote: null as string | null,          // actual form fields, payment records, call recordings, identity checks
  techInfoNote: null as string | null,            // website logs, analytics tools, technical data collected
  purposesNote: null as string | null,            // confirm or remove processing purposes
  lawfulBasisNote: null as string | null,         // lawful basis for each activity, including marketing/tracking
  recipientsNote: null as string | null,          // actual recipients: operators, garages, hosting, payments, accountants
  internationalNote: null as string | null,       // international transfers: countries, providers, safeguards
  retentionNote: null as string | null,           // retention periods for enquiries, jobs, photos, messages, finances, logs
  securityNote: null as string | null,            // actual security measures: access controls, storage, deletion
  cookiesNote: null as string | null,             // cookies list, purposes, providers, durations, consent mechanism
  automatedDecisionsNote: null as string | null,  // automated decisions with legal/significant effects
}
