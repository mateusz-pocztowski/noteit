import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.deleteOneUser()

    t.crud.createOneNote()
    t.crud.updateOneNote()
    t.crud.deleteOneNote()
    t.crud.deleteManyNote()
    t.crud.updateManyNote()

    t.crud.createOneCategory()
    t.crud.updateOneCategory()
    t.crud.deleteOneCategory()
    t.crud.deleteManyCategory()
  },
})
