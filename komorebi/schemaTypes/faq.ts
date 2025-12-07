export default {
  name: 'faq',
  title: 'よくある質問',
  type: 'document',
  fields: [
    { name: 'question', title: '質問', type: 'string', validation: (r:any)=>r.required() },
    { name: 'answer',   title: '回答', type: 'blockContent', validation: (r:any)=>r.required() },
    { name: 'category', title: 'カテゴリ', type: 'reference', to: [{ type: 'category' }] },
    { name: 'order',    title: '表示順', type: 'number' },
  ],
}
