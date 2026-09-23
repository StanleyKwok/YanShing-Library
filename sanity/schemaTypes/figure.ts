import { defineType, defineField, defineArrayMember } from 'sanity'

export const figureType = defineType({
  name: 'figure',
  title: '聖賢 / 作者檔案',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: '尊名 / 姓名', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: '網址代稱', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({
      name: 'deity',
      title: '對應書籍 deity 欄位',
      type: 'string',
      description: '必須與 book 文件的 deity 欄位完全相符，才能自動列出所依典籍',
    }),
    defineField({ name: 'nameAlt', title: '別名 / 梵名', type: 'string' }),
    defineField({
      name: 'tradition',
      title: '傳統分類',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string', title: '分類名稱' }),
        defineField({ name: 'glyph', type: 'string', title: '印章字' }),
      ],
    }),
    defineField({ name: 'tagline', title: '一句提要', type: 'text', rows: 2 }),
    defineField({
      name: 'portrait',
      title: '法相 / 肖像',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: '替代文字' })],
    }),
    defineField({
      name: 'vow',
      title: '本願 / 名句',
      type: 'object',
      fields: [
        defineField({ name: 'lines', title: '句子（逐行）', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
        defineField({ name: 'source', title: '出處', type: 'string' }),
      ],
    }),
    defineField({
      name: 'facts',
      title: '基本資料表',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: '欄位名稱' }),
            defineField({ name: 'value', type: 'string', title: '內容' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'biography',
      title: '略傳（逐段）',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 4 })],
    }),
    defineField({
      name: 'teachings',
      title: '教義要旨',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: '標題' }),
            defineField({ name: 'body', type: 'text', title: '內容', rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'readingOrder',
      title: '讀經次第',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'book', title: '對應典籍', type: 'reference', to: [{ type: 'book' }] }),
            defineField({ name: 'role', title: '角色定位', type: 'string' }),
            defineField({ name: 'note', title: '說明', type: 'text', rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({ name: 'verticalMotto', title: '頁首直排格言', type: 'string' }),
  ],
})