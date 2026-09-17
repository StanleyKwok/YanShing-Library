'use client'

// 強制頁面為動態渲染，不快取舊頁面
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'
import { client } from '@/sanity/lib/client'

export default function StudioPage() {
  return <NextStudio config={config} />
}

const book = await client.fetch(
  `*[_type == "book" && _id == $id][0]`,
  { id: "92146d77-723b-4c17-b098-770ea5cd672c" },
  { cache: 'no-store' } // 👈 禁用 Next.js 的 fetch 快取
)