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
