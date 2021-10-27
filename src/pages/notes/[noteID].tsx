import { useQueryClient } from 'react-query'

import { AnimatePresence, motion } from 'framer-motion'
import { editorVariants } from 'theme/variants'
import { useRouter } from 'next/router'

import { Session } from 'next-auth'
import graphqlRequestClient from 'lib/client'
import nextAuthGetServerSideProps from 'lib/auth/getServerSideProps'

import SEO from 'components/shared/SEO'
import Editor from 'components/layout/Editor'
import Portal from 'components/shared/Portal'
import Calendar from 'components/layout/AsidePanel/Widgets/Calendar'
import toast from 'components/shared/Toast'

import {
  useGetNotesCategoriesQuery,
  useGetSingleNoteQuery,
  useUpdateNoteWithContentMutation,
} from 'generated/graphql'
import type { RawDraftContentState } from 'draft-js'

const SingleNote: React.FC<{ session: Session }> = ({ session }) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleFetchError = (e: any) => {
    console.log(e)
    if (router.query.noteID) router.push('/notes')
  }

  const handleUpdateError = (e: any) => {
    console.log(e)
    toast({ type: 'error' })
  }

  const { data } = useGetSingleNoteQuery(
    graphqlRequestClient,
    { userId: session.id, noteId: router.query.noteID as string },
    { onError: e => handleFetchError(e), retry: false }
  )

  const { data: categoriesData } = useGetNotesCategoriesQuery(
    graphqlRequestClient,
    { userId: session.id },
    { onError: e => handleFetchError(e), retry: false }
  )

  const { mutate: updateNote } = useUpdateNoteWithContentMutation(
    graphqlRequestClient,
    {
      onError: e => handleUpdateError(e),
      onSuccess: () => {
        toast({ type: 'success', message: 'Your changes have been saved' })
        queryClient.invalidateQueries('GetSingleNote')
      },
    }
  )

  const handleSave = (title: string, content: RawDraftContentState) => {
    if (!data?.note) return
    updateNote({
      title,
      content: JSON.stringify(content),
      categoryId: data.note.category.id,
      noteId: data.note.id,
    })
  }

  const handleCategoryChange = (categoryID: string) => {
    if (data?.note) {
      updateNote({
        categoryId: categoryID,
        content: data.note.content!,
        noteId: data.note.id,
        title: data.note.title,
      })
    }
  }

  return (
    <>
      <SEO title={data?.note?.title ?? 'Notes'} />
      <Portal selector="#aside-panel-content">
        <Calendar />
      </Portal>
      <AnimatePresence>
        {data?.note && categoriesData?.categories && (
          <motion.div
            key={data.note.id}
            initial="enter"
            animate="on"
            exit="exit"
            variants={editorVariants}
            style={{ height: '100%' }}
          >
            <Editor
              title={data.note.title}
              initialState={
                data.note.content
                  ? (JSON.parse(data.note.content) as RawDraftContentState)
                  : null
              }
              categories={categoriesData.categories}
              activeCategory={data.note.category}
              onCategoryChange={handleCategoryChange}
              onSave={handleSave}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export const getServerSideProps = nextAuthGetServerSideProps

export default SingleNote
