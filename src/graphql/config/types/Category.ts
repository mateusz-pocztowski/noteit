import { objectType } from 'nexus'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.color()
    t.model.label()
    t.model.primary()
    t.model.notes()
    t.model.userId()
  },
})
