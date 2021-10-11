import React, { useState, useEffect, useContext } from 'react';
import Editor from 'components/Editor/Editor';
import { NotesContext, Note } from 'contexts/NotesContext';
import { AnimatePresence, motion } from 'framer-motion';
import { editorVariants } from 'theme/transitions';
import { useRouter } from 'next/router';

const SingleNote = () => {
  const [currentNote, setCurrentNote] = useState<Note>({ slug: null });
  const { notes, categories } = useContext(NotesContext);
  const router = useRouter();

  const foundNote = router.query.noteID
    ? notes.find(({ id }) => router.query.noteID.includes(id))
    : null;

  useEffect(() => {
    if (notes.length !== 0 && router.query.noteID) {
      if (!foundNote) {
        router.push(`/notes`);
      } else setCurrentNote(foundNote);
    }
  }, [foundNote, notes]);

  useEffect(() => {
    if (currentNote.slug && `/notes/${currentNote.slug}` !== router.pathname) {
      router.push(`/notes/${currentNote.slug}`);
    }
  }, [currentNote]);

  return (
    <motion.div
      initial="enter"
      animate="on"
      exit="exit"
      variants={editorVariants}
      style={{ height: '100%', paddingBottom: '30px' }}
    >
      <AnimatePresence>
        {currentNote.slug && (
          <motion.div style={{ height: '100%' }}>
            <Editor
              title={currentNote.title}
              savedState={currentNote.content}
              noteID={currentNote.id}
              categories={categories}
              activeCategory={currentNote.category}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SingleNote;
