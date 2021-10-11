import { objectType } from 'nexus'

export const Note = objectType({
  name: 'Note',
  definition(t) {
    t.model.id()
    t.model.userId()
    t.model.title()
    t.model.content()
    t.model.category()
    t.model.categoryId()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
