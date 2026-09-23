import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('藏經閣 Content')
    .items([
      // 1. 典籍 / 經文 (Book) 選單
      S.documentTypeListItem('book').title('典籍 / 經文 (Book)'),

      // 2. 聖賢 / 作者檔案 (Figure) 選單
      S.documentTypeListItem('figure').title('聖賢 / 作者檔案 (Figure)'),

      // 自動列出其他未手動分類的文件類型（防漏選單）
      ...S.documentTypeListItems().filter(
        (item) => !['book', 'figure'].includes(item.getId() ?? '')
      ),
    ])

export default structure