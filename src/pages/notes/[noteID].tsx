import React from 'react'

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

import {
  useGetNotesCategoriesQuery,
  useGetSingleNoteQuery,
} from 'generated/graphql'

const SingleNote: React.FC<{ session: Session }> = ({ session }) => {
  const router = useRouter()

  const { data } = useGetSingleNoteQuery(
    graphqlRequestClient,
    {
      userId: session.id,
      noteId: router.query.noteID as string,
    },
    {
      onError: e => {
        console.log(e)
        router.push('/notes')
      },
      retry: false,
    }
  )

  const { data: categoriesData } = useGetNotesCategoriesQuery(
    graphqlRequestClient,
    {
      userId: session.id,
    },
    {
      onError: e => {
        console.log(e)
        router.push('/notes')
      },
      retry: false,
    }
  )

  return (
    <AnimatePresence>
      <SEO title={data?.note?.title ?? 'Notes'} />
      <Portal selector="#aside-panel-content">
        <Calendar />
      </Portal>
      {data?.note && categoriesData?.categories && (
        <motion.div
          initial="enter"
          animate="on"
          exit="exit"
          variants={editorVariants}
          style={{ height: '100%' }}
        >
          <Editor
            title={data.note.title}
            savedState={data.note.content}
            noteID={data.note.id}
            categories={categoriesData.categories}
            activeCategory={data.note.category}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const getServerSideProps = nextAuthGetServerSideProps

export default SingleNote
