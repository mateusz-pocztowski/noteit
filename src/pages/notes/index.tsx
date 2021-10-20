import { useMemo, useEffect, useState, useContext } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { cardVariants } from 'theme/variants'

import { DEFAULT_CATEGORY } from 'config'

import { Session } from 'next-auth'
import { useQueryClient } from 'react-query'
import graphqlRequestClient from 'lib/client'
import nextAuthGetServerSideProps from 'lib/auth/getServerSideProps'

import { ModalContext } from 'contexts/ModalContext'

import SEO from 'components/shared/SEO'
import EmptyView from 'components/layout/EmptyView'
import FiltersTopbar from 'components/shared/FiltersTopbar'
import NoteCard from 'components/layout/Notes/NoteCard'
import Portal from 'components/shared/Portal'
import Calendar from 'components/layout/AsidePanel/Widgets/Calendar'
import Categories from 'components/layout/AsidePanel/Widgets/Categories'

import {
  useGetNotesQuery,
  useCreateCategoryMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteWithoutContentMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  Category,
} from 'generated/graphql'

import CardLayout from 'layouts/CardLayout'

import { sortBy } from 'utils/sorting'

const NotesPage: React.FC<{ session: Session }> = ({ session }) => {
  const queryClient = useQueryClient()

  const { data, isFetched } = useGetNotesQuery(graphqlRequestClient, {
    userId: session.id,
  })

  const categories = useMemo(
    () =>
      data?.user?.categories.sort((a, b) =>
        sortBy(a.createdAt, b.createdAt, 1)
      ) || [],
    [data]
  )

  const notes = useMemo(
    () =>
      categories
        ?.map(({ notes }) => notes)
        .flat(1)
        .sort((a, b) => sortBy(a.createdAt, b.createdAt, -1)) || [],
    [categories]
  )

  const [tempCategoryID, setTempCategoryID] = useState<string | null>(null)
  const [tempNoteID, setTempNoteID] = useState<string | null>(null)
  const [activeCategories, setActiveCategories] = useState<string[]>([])

  const { mutate: createNote } = useCreateNoteMutation(graphqlRequestClient, {
    onError: e => console.log(e),
    onSuccess: data => {
      const noteID = data.createOneNote.id
      setTempNoteID(noteID)
      queryClient.invalidateQueries('GetNotes')
    },
  })

  const { mutate: updateNote } = useUpdateNoteWithoutContentMutation(
    graphqlRequestClient,
    {
      onError: e => console.log(e),
      onSuccess: () => queryClient.invalidateQueries('GetNotes'),
    }
  )

  const { mutate: removeNote } = useDeleteNoteMutation(graphqlRequestClient, {
    onError: e => console.log(e),
    onSuccess: () => queryClient.invalidateQueries('GetNotes'),
  })

  const { mutate: createCategory } = useCreateCategoryMutation(
    graphqlRequestClient,
    {
      onError: e => console.log(e),
      onSuccess: data => {
        const categoryID = data.category.id
        setTempCategoryID(categoryID)
        queryClient.invalidateQueries('GetNotes')
      },
    }
  )

  const { mutate: updateCategory } = useUpdateCategoryMutation(
    graphqlRequestClient,
    {
      onError: e => console.log(e),
      onSuccess: () => queryClient.invalidateQueries('GetNotes'),
    }
  )

  const { mutate: removeCategory } = useDeleteCategoryMutation(
    graphqlRequestClient,
    {
      onError: e => console.log(e),
      onSuccess: (_, variables) => {
        const { categoryId } = variables
        setActiveCategories(
          activeCategories.filter(item => item !== categoryId)
        )
        queryClient.invalidateQueries('GetNotes')
      },
    }
  )

  const handleCreateNote = () => {
    if (categories[0]) {
      createNote({
        title: '',
        userId: session.id,
        categoryId: activeCategories[0] || categories[0].id,
      })
    }
  }

  const handleCreateCategory = (
    category: Pick<Category, 'color' | 'label' | 'primary'>
  ) => {
    createCategory({ ...category, userId: session.id })
  }

  const createDefaultCategoryIfNeeded = () => {
    if (categories.length === 0 && isFetched) {
      handleCreateCategory(DEFAULT_CATEGORY)
    }
  }

  const checkIsActiveCategory = (id: string, needsLength?: boolean) => {
    if (needsLength && activeCategories.length === 0) return false
    return activeCategories.length === 0 || activeCategories.includes(id)
  }

  const { showModal } = useContext(ModalContext)

  useEffect(createDefaultCategoryIfNeeded, [isFetched])

  return (
    <>
      <SEO title="Notes" />
      <FiltersTopbar
        createButton={{ text: 'Create new note', callback: handleCreateNote }}
      />
      <Portal selector="#aside-panel-content">
        <Calendar />
        <Categories
          tempCategoryID={tempCategoryID}
          setTempCategoryID={setTempCategoryID}
          createCategory={category =>
            createCategory({ ...category, userId: session.id })
          }
          updateCategory={category => {
            updateCategory({
              categoryId: category.id,
              color: category.color,
              label: category.label,
            })
          }}
          removeCategory={categoryID => {
            removeCategory({ categoryId: categoryID, userId: session.id })
          }}
          categories={categories.map(({ id, label, primary, color }) => ({
            id,
            label,
            onClick: () => {
              if (activeCategories.includes(id))
                setActiveCategories(activeCategories.filter(el => el !== id))
              else setActiveCategories([...activeCategories, id])
            },
            active: checkIsActiveCategory(id, true),
            primary,
            color,
          }))}
        />
      </Portal>
      <CardLayout>
        <AnimatePresence>
          {notes
            .filter(note => checkIsActiveCategory(note.category.id))
            .map(note => (
              <motion.div
                key={note.id}
                layout
                initial="exit"
                animate="enter"
                exit="exit"
                variants={cardVariants}
                whileDrag={{ scale: 0.95, zIndex: 3 }}
              >
                <NoteCard
                  note={note}
                  categories={categories}
                  selected={false}
                  isSelecting={false}
                  dragging={false}
                  editable={tempNoteID === note.id}
                  onSave={note => {
                    updateNote({
                      noteId: note.id,
                      categoryId: note.category.id,
                      title: note.title,
                    })
                    setTempNoteID(null)
                  }}
                  onCancel={note => {
                    if (note.id === tempNoteID) {
                      removeNote({ noteId: note.id })
                      setTempNoteID(null)
                    }
                  }}
                  updateCategory={(note, categoryID) => {
                    updateNote({
                      noteId: note.id,
                      categoryId: categoryID,
                      title: note.title,
                    })
                  }}
                  remove={() =>
                    showModal({
                      isRemoval: true,
                      confirmFn: () => removeNote({ noteId: note.id }),
                    })
                  }
                />
              </motion.div>
            ))}
          {isFetched && notes.length === 0 && (
            <EmptyView
              button={{
                text: `Create your first note!`,
                callback: handleCreateNote,
              }}
              text="Your list is empty!"
              subtext="All of your notes will be listed right there"
            />
          )}
        </AnimatePresence>
      </CardLayout>
    </>
  )
}

export const getServerSideProps = nextAuthGetServerSideProps

export default NotesPage
