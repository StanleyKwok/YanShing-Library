import { defineField, defineType } from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: '典籍書籍 (Book)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '書名 / 典籍名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址網籤 (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        // 💡 自訂 slugify 邏輯：支援中文，並將空格替換為連字號 "-"
        slugify: (input) =>
          input
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-') // 將空格替換為 "-"
            .replace(/[^\w\u4e00-\u9fa5-]+/g, '') // 保留英數字、中文字符與連字號，過濾掉特殊標點符號
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '典籍作者 / 譯者',
      type: 'string',
    }),
    defineField({
      name: 'poem',
      title: '卷首詩句 / 題詩',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'poemAuthor',
      title: '卷首詩句 / 題詩 作者',
      type: 'string',
    }),
    defineField({
      name: 'originalText',
      title: '典籍原文',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'translatedText',
      title: 'AI 現代白話譯文',
      type: 'text',
      rows: 10,
    }),
  ],
})