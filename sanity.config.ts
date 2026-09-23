import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('藏經閣 Content')
    .items([
      // 1. 現有的 Book (經文) 選單
      S.documentTypeListItem('book').title('典籍 / 經文 (Book)'),

      // 2. 👈 新增這段：Figure (聖賢 / 作者檔案) 選單
      S.documentTypeListItem('figure').title('聖賢 / 作者檔案 (Figure)'),

      // 如果原本有 S.divider() 或其他動態列表，保留在其下方即可
      ...S.documentTypeListItems().filter(
        (item) => !['book', 'figure'].includes(item.getId() ?? '')
      ),
    ])