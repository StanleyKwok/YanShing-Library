import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

const BOOK_DOCUMENT_ID = '92146d77-723b-4c17-b098-770ea5cd672c'

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('❌ 錯誤：找不到 SANITY_API_WRITE_TOKEN，請檢查 .env.local 檔案。')
    return
  }

  try {
    const jsonPath = path.join(process.cwd(), 'scripts', 'dizang-all.json')
    const fileData = fs.readFileSync(jsonPath, 'utf-8')
    const chaptersData = JSON.parse(fileData)

    console.log(`🚀 開始上傳經文（共 ${chaptersData.length} 品）至 Sanity...`)

    // 1. 直接更新已發佈 (Published) 文件
    await client
      .patch(BOOK_DOCUMENT_ID)
      .set({ chapters: chaptersData })
      .commit()

    // 2. 如果存在舊有的草稿 (Draft)，同步覆蓋更新（若無草稿則忽略）
    try {
      await client
        .patch(`drafts.${BOOK_DOCUMENT_ID}`)
        .set({ chapters: chaptersData })
        .commit()
    } catch {
      // 若無草稿文件屬於正常現象，不影響已發佈之資料
    }

    console.log('✅ 經文成功匯入並已同步更新發佈！')
  } catch (error) {
    console.error('❌ 匯入失敗：', error)
  }
}

main()