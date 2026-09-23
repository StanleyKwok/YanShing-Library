import { type SchemaTypeDefinition } from 'sanity'
import { bookType } from './book'
import { figureType } from './figure' // 👈 引入具名的 figureType

export const schemaTypes: SchemaTypeDefinition[] = [bookType, figureType]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookType, figureType],
}