// 既存のスキーマ
import blockContent from './blockContent'
import category from './category'
import counselor from './counselor'
import faq from './faq'
import post from './post'
import siteSettings from './siteSettings'

// 追加したホームページ（Singleton）
import homepage from './homepage'

// Sanity に渡すスキーマ配列は「1つだけ」
export const schemaTypes = [
  // 既存
  blockContent,
  category,
  counselor,
  faq,
  post,
  siteSettings,

  // 追加
  homepage,
]
