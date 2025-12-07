export default {
  name: 'post',
  title: 'コラム・お知らせ',
  type: 'document',
  fields: [
    { name: 'title',  title: 'タイトル', type: 'string', validation: (r:any)=>r.required() },
    { name: 'slug',   title: 'スラッグ', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt',title: '概要', type: 'text' },
    { name: 'mainImage', title: 'メイン画像', type: 'image', options: { hotspot: true } },
    { name: 'body',   title: '本文', type: 'blockContent' },
    { name: 'categories', title: 'カテゴリ', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] },
    { name: 'author', title: '著者', type: 'reference', to: [{ type: 'counselor' }] },
    { name: 'publishedAt', title: '公開日', type: 'datetime' },
  ],
  orderings: [{ title: '公開日降順', name: 'pubDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
}
