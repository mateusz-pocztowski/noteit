import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import * as types from 'graphql/config/types'
import path from 'path'

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: path.join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context',
      },
    ],
  },
})
