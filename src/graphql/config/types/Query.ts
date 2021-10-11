import { intArg, stringArg, nonNull, queryType } from 'nexus'

export const Query = queryType({
  definition: t => {
    t.crud.user()
    t.crud.notes()
    t.crud.categories({ filtering: true })
    t.field('note', {
      type: 'Note',
      args: {
        userId: nonNull(intArg()),
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const result = await ctx.prisma.note.findFirst({
          where: {
            id: args.id,
            userId: args.userId,
          },
        })
        if (result === null) {
          throw new Error(`No item with id of "${args.id}"`)
        }
        return result
      },
    })
  },
})
