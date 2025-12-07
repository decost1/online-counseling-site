// schemaTypes/homepage.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepage",
  title: "ホームページ（Singleton）",
  type: "document",
  fields: [
    // ヘッダー/ナビ
    defineField({
      name: "navLinks",
      title: "ナビゲーション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "表示名", type: "string" },
            { name: "href",  title: "リンク先", type: "string" },
            { name: "order", title: "並び順",  type: "number" },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
      options: { sortable: true },
    }),

    // Hero
    defineField({ name: "heroEyebrow", title: "上部小見出し", type: "string" }),
    defineField({ name: "heroTitle",   title: "キャッチコピー", type: "string" }),
    defineField({ name: "heroSubtitle",title: "説明文", type: "text" }),
    defineField({
      name: "heroImage",
      title: "メイン画像",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "代替テキスト", type: "string" }],
    }),

    // CTA ボタン
    defineField({
      name: "ctas",
      title: "CTA ボタン",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "ボタン文言", type: "string" },
            { name: "href",  title: "リンク先",  type: "string" },
            { name: "style", title: "スタイル（primary / secondary）", type: "string" },
          ],
        },
      ],
    }),

    // 追加で欲しいセクション（例）
    defineField({
      name: "features",
      title: "特徴（任意）",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string", title: "見出し" },
        { name: "body",  type: "text",   title: "説明"  },
      ]}],
    }),
  ],
});
