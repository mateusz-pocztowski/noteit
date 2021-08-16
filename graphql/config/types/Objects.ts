import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.email()
    t.model.password()
    t.model.categories()
  },
})

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.color()
    t.model.label()
    t.model.primary()
    t.model.notes()
    t.model.user()
    t.model.userId()
  },
})

export const Note = objectType({
  name: 'Note',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.content()
    t.model.category()
    t.model.userId()
    t.model.categoryId()
  },
})
