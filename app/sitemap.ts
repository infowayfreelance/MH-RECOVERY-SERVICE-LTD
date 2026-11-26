import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL
  const now = new Date()

  return [
    { url: `${base}/blog/broken-down-on-the-snake-pass-a57`, lastModified: new Date('2026-11-26'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/leaving-a-broken-down-car-on-the-road-sheffield`, lastModified: new Date('2026-11-25'), changeFrequency: 'monthly', priority: 0.7 },
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${base}/services/car-recovery-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/breakdown-recovery-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/car-towing-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/jump-starts-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/accident-recovery-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/tyre-damage-assistance-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/lost-car-keys-help-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/services/long-distance-recovery-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${base}/blog/jump-start-car-on-a-hill-sheffield`, lastModified: new Date('2026-11-23'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/broken-down-on-the-m1-near-sheffield`, lastModified: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${base}/blog/car-recovery-without-keys`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/how-to-get-car-towed-to-garage-sheffield`,
      lastModified: new Date('2026-11-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/accident-recovery-sheffield`,
      lastModified: new Date('2026-11-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/car-park-recovery-sheffield`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/long-distance-car-recovery-cost-sheffield`,
      lastModified: new Date('2026-11-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}


