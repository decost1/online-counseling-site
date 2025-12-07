export default {
  name: 'counselor',
  title: 'カウンセラー紹介',
  type: 'document',
  fields: [
    { name: 'name',  title: '名前', type: 'string', validation: (r:any)=>r.required() },
    { name: 'slug',  title: 'スラッグ', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'role',  title: '肩書き', type: 'string' },
    { name: 'photo', title: '写真', type: 'image', options: { hotspot: true } },
    { name: 'bio',   title: 'プロフィール', type: 'blockContent' },
    {
      name: 'specialty',
      title: '専門分野',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
}
