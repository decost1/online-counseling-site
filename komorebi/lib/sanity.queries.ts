import {groq} from 'next-sanity'

// 🏠 ホーム（singleton, documentId: "homepage"）
export const HOME_QUERY = groq`
*[_id == "homepage"][0]{
  title,
  subtitle,
  description,
  heroImage,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  // ナビ（配列）
  navigation[]{
    label,
    href,
    // または { _type == "internalLink" => { "href": "/"+reference->slug.current } } など
  }
}
`

// 📚 相談カテゴリ
export const CATEGORIES_QUERY = groq`
*[_type == "category"]|order(order asc){
  _id, title, slug, description
}
`

// 👩‍⚕️ カウンセラー
export const COUNSELORS_QUERY = groq`
*[_type == "counselor"]|order(order asc){
  _id, name, slug, photo, specialties, bio
}
`

// ❓ FAQ
export const FAQS_QUERY = groq`
*[_type == "faq"]|order(order asc){
  _id, question, answer
}
`

// 📰 コラム・お知らせ
export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc){
  _id, title, slug, publishedAt, excerpt, coverImage
}
`
