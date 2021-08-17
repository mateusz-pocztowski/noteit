import { mutationType } from 'nexus'

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
    t.crud.deleteOneCategory({
      async resolve(root, args, ctx, info, originalResolve) {
        const primaryCategory = await ctx.prisma.category.findFirst({
          where: { primary: true },
        })
        if (args.where.id === primaryCategory?.id) return null

        await ctx.prisma.note.updateMany({
          data: { categoryId: primaryCategory?.id },
          where: { categoryId: args.where.id! },
        })
        const res = await originalResolve(root, args, ctx, info)

        return res
      },
    })

    t.crud.updateManyNote()

    t.crud.deleteManyNote()
    t.crud.deleteManyCategory()
    t.crud.deleteManySession()
    t.crud.deleteManyAccount()
  },
})
