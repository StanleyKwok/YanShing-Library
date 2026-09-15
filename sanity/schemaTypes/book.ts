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
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '典籍作者 / 譯者',
      type: 'string',
    }),
    // 💡 卷首詩句 / 題詩
    defineField({
      name: 'poem',
      title: '卷首詩句 / 題詩',
      type: 'text',
      rows: 4,
    }),
    // 💡 新增：卷首詩句 / 題詩 作者
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