export default {
  name: 'blockContent',
  title: '本文',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: '代替テキスト', type: 'string' }],
    },
  ],
}
