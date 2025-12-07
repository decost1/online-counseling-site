export default {
  name: 'category',
  title: '相談カテゴリ',
  type: 'document',
  fields: [
    { name: 'title', title: '名称', type: 'string', validation: (r:any)=>r.required() },
    { name: 'slug',  title: 'スラッグ', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: '説明', type: 'text' },
    { name: 'order', title: '表示順', type: 'number' },
  ],
  orderings: [{ title: '表示順', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}
