import { defineConfig } from 'sanity'
import { structureTool, type StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'KOMOREBI',

  projectId: 'ibiu2qpi',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .id('root') // 👈 ID追加（必須）
          .title('コンテンツ')
          .items([
            // ✅ ホームページは Singleton（1件固定）
            S.listItem()
              .id('homepageItem')
              .title('ホームページ')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage') // ← 固定 ID
              ),

            // ✅ 他のスキーマを自動追加（ホームページ除外）
            ...S.documentTypeListItems().filter(
              (item: any) => item.getId() !== 'homepage'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
