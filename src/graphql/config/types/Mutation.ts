import { mutationType, nonNull, intArg, stringArg } from 'nexus'

export const Mutation = mutationType({
  definition: t => {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.deleteOneUser()

    t.crud.createOneNote()
    t.crud.updateOneNote()
    t.crud.deleteOneNote()

    t.crud.createOneCategory()
    t.crud.updateOneCategory()
    t.field('deleteOneCategory', {
      type: 'Mutation',
      args: {
        userId: nonNull(intArg()),
        id: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx) => {
        const primaryCategory = await ctx.prisma.category.findFirst({
          where: { primary: true, userId: args.userId! },
        })
        if (args.id === primaryCategory?.id) return null

        await ctx.prisma.note.updateMany({
          data: { categoryId: primaryCategory?.id },
          where: { categoryId: args.id! },
        })
        const response = await ctx.prisma.category.delete({
          where: { id: args.id! },
        })

        return response
      },
    })

    t.crud.updateManyNote()

    t.crud.deleteManyNote()
    t.crud.deleteManyCategory()
    t.crud.deleteManySession()
    t.crud.deleteManyAccount()
  },
})
