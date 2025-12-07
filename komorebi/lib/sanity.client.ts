// lib/sanity.client.ts
import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // ibiu2qpi
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,     // production
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',
  useCdn: true, // 公開データはCDN OK
})
