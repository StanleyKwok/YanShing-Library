import { type SchemaTypeDefinition } from 'sanity'
import { bookType } from './book'

export const schemaTypes: SchemaTypeDefinition[] = [bookType]

// 新增此匯出以適應 sanity.config.ts 的預設要求
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookType],
}