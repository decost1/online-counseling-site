// komorebi/lib/queries.js
import groq from 'groq'

export const siteSettingsQuery = groq`
*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
  // あり得る候補をすべて試して最初に見つかったURLを返す
  "logoUrl": coalesce(
    logo.asset->url,
    siteLogo.asset->url,
    brand.logo.asset->url,
    companyLogo.asset->url
  ),
  displayRate,
  serviceFee,
  taxRate
}
`
