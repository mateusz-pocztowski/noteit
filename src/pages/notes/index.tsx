import { useMemo, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

import { AnimatePresence, motion } from 'framer-motion'
import { cardVariants } from 'theme/variants'

import { DEFAULT_CATEGORY } from 'config'

import { Session } from 'next-auth'
import { getSession } from 'next-auth/client'
import { useQueryClient } from 'react-query'
import graphqlRequestClient from 'lib/client'

import SEO from 'components/shared/SEO'
import EmptyView from 'components/layout/EmptyView'
import FiltersTopbar from 'components/shared/FiltersTopbar'
import NoteCard from 'components/layout/Notes/NoteCard'

import {
  useGetNotesQuery,
  useCreateCategoryMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteWithoutContentMutation,
} from 'generated/graphql'

import CardLayout from 'layouts/CardLayout'

import { sortBy } from 'utils/sorting'

const NotesPage: React.FC<{ session: Session }> = ({ session }) => {
  const queryClient = useQueryClient()

  const { data, isFetched } = useGetNotesQuery(graphqlRequestClient, {
    userId: session!.id,
  })

  const categories = useMemo(() => data?.user?.categories || [], [data])
  const notes = useMemo(
    () =>
      categories
        ?.map(({ notes }) => notes)
        .flat(1)
        .sort((a, b) => sortBy(a.createdAt, b.createdAt, -1)) || [],
    [categories]
  )

  const [temporaryNoteID, setTemporaryNoteID] = useState<string | null>(null)
  const [activeCategories, setActiveCategories] = useState<string[]>([])

  const { mutate: createNote } = useCreateNoteMutation(graphqlRequestClient, {
    onError: e => console.log(e),
    onSuccess: data => {
      const noteID = data.createOneNote.id
      setTemporaryNoteID(noteID)
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
      onSuccess: () => queryClient.invalidateQueries('GetNotes'),
    }
  )

  useEffect(() => {
    if (categories.length === 0 && isFetched) {
      createCategory({ ...DEFAULT_CATEGORY, userId: session.id })
    }
  }, [isFetched])

  const handleCreateNote = () => {
    if (categories[0]) {
      createNote({
        title: '',
        userId: session.id,
        categoryId: activeCategories[0] || categories[0].id,
      })
    }
  }

  const checkIsActiveCategory = (id: string, needsLength?: boolean) => {
    if (needsLength && activeCategories.length === 0) return false
    return activeCategories.length === 0 || activeCategories.includes(id)
  }

  return (
    <>
      <SEO title="Notes" />
      <FiltersTopbar
        createButton={{ text: 'Create new note', callback: handleCreateNote }}
        categories={categories.map(({ id, label, color }) => ({
          text: label,
          callback: () => {
            if (activeCategories.includes(id))
              setActiveCategories(activeCategories.filter(el => el !== id))
            else setActiveCategories([...activeCategories, id])
          },
          active: checkIsActiveCategory(id, true),
          color,
        }))}
      />
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
                  editable={temporaryNoteID === note.id}
                  onSave={note => {
                    updateNote({
                      noteId: note.id,
                      categoryId: note.category.id,
                      title: note.title,
                    })
                    setTemporaryNoteID(null)
                  }}
                  onCancel={note => {
                    if (note.id === temporaryNoteID) {
                      removeNote({ noteId: note.id })
                      setTemporaryNoteID(null)
                    }
                  }}
                  updateCategory={(note, categoryID) => {
                    updateNote({
                      noteId: note.id,
                      categoryId: categoryID,
                      title: note.title,
                    })
                  }}
                  remove={() => removeNote({ noteId: note.id })}
                />
              </motion.div>
            ))}
          {notes.length === 0 && (
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default NotesPage
