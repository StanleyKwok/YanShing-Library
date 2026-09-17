'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// 強制動態渲染，不使用快取
export const dynamic = 'force-dynamic'

// 或設定 revalidate 為 0 秒
export const revalidate = 0

export default function StudioPage() {
  return <NextStudio config={config} />
}