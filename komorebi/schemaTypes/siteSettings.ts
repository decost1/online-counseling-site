export default {
  name: 'siteSettings',
  title: 'サイト設定',
  type: 'document',
  fields: [
    { name: 'title',       title: 'サイト名', type: 'string' },
    { name: 'description', title: '説明', type: 'text' },
    { name: 'logo',        title: 'ロゴ', type: 'image', options: { hotspot: true } },
    { name: 'contactEmail',title: '問い合わせメール', type: 'string' },
    { name: 'bookingUrl',  title: '予約URL', type: 'url' },
    {
      name: 'socials',
      title: 'SNS',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'ラベル', type: 'string' },
        { name: 'url',   title: 'URL', type: 'url' },
      ]}],
    },
  ],
  __experimental_actions: ['create','update','publish'], // 複数作成を避けたい場合は 'create' 外してもOK
}
