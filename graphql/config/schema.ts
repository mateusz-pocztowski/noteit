import { makeSchema, asNexusMethod } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { DateTimeResolver } from 'graphql-scalars'
import * as User from 'graphql/config/types/User'
import * as Query from 'graphql/config/types/Queries'

import { applyMiddleware } from 'graphql-middleware'
import { permissions } from 'graphql/config/permissions'

import path from 'path'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')

const baseSchema = makeSchema({
  types: [User, Query, GQLDate],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/config/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const schema = applyMiddleware(baseSchema, permissions)
