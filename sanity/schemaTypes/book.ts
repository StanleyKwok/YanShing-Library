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
        slugify: (input) =>
          input
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\u4e00-\u9fa5-]+/g, '')
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),

    // 🌟 新增欄位 1：聖賢仙佛 (例如：地藏菩薩、觀世音菩薩、太上老君)
    defineField({
      name: 'deity',
      title: '聖賢仙佛',
      type: 'string',
      description: '本典籍主尊或相關聖賢仙佛（例如：地藏菩薩）',
    }),

    // 🌟 新增欄位 2：分類 Category (下拉選單或自訂字串)
    defineField({
      name: 'category',
      title: '分類 (Category)',
      type: 'string',
      options: {
        list: [
          { title: '佛經 (Buddhist Sutra)', value: 'sutra' },
          { title: '懺法 (Repentance Ritual)', value: 'repentance' },
          { title: '道藏 / 仙經 (Taoist Scripture)', value: 'taoist' },
          { title: '論著 / 善書 (Treatise & Morality)', value: 'treatise' },
        ],
      },
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
      name: 'chapters',
      title: '經文各卷 / 各品內容',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'chapter',
          title: '章節 / 品',
          fields: [
            defineField({
              name: 'chapterSlug',
              title: '章節 Slug / 品號 (例如 1, 2, 3)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'volumeTitle',
              title: '卷名 (例如 上卷, 中卷, 下卷)',
              type: 'string',
            }),
            defineField({
              name: 'chapterTitle',
              title: '品名 / 章節名稱 (例如 第一品 忉利天宮神通品)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'passages',
              title: '段落列表 (Passages)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'passage',
                  title: '段落對照',
                  fields: [
                    defineField({
                      name: 'original',
                      title: '文言文原文',
                      type: 'text',
                      rows: 3,
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'translation',
                      title: '白話文譯文',
                      type: 'text',
                      rows: 3,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'original',
                      subtitle: 'translation',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'chapterTitle',
              subtitle: 'volumeTitle',
            },
          },
        },
      ],
    }),
  ],
})