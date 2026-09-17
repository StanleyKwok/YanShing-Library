'use client'

// 強制頁面為動態渲染，不快取舊頁面

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}