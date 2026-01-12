export default {
  name: "blockContent",
  title: "本文",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "本文", value: "normal" },
        { title: "見出し", value: "h2" },
        { title: "小見出し", value: "h3" },
        { title: "引用", value: "blockquote" },
      ],
      lists: [
        { title: "箇条書き", value: "bullet" },
        { title: "番号付き", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "太字", value: "strong" },
          { title: "斜体", value: "em" },
          { title: "下線", value: "underline" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "リンク",
            fields: [
              { name: "href", title: "URL", type: "url" },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "代替テキスト", type: "string" }],
    },
  ],
};
