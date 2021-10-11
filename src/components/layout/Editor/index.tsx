import { useState, useRef } from 'react'

import DraftEditor from '@draft-js-plugins/editor'
import { EditorState } from 'draft-js'

import createHashtagPlugin from '@draft-js-plugins/hashtag'
import createLinkifyPlugin from '@draft-js-plugins/linkify'

const hashtagPlugin = createHashtagPlugin()
const linkifyPlugin = createLinkifyPlugin()

const plugins = [linkifyPlugin, hashtagPlugin]

const Editor = () => {
  const editorRef = useRef(null)

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleChange = (newState: EditorState) => {
    console.log(newState)
    setEditorState(newState)
  }

  return (
    <DraftEditor
      ref={editorRef}
      editorState={editorState}
      plugins={plugins}
      onChange={handleChange}
      // handleKeyCommand={handleKeyCommand}
      // handlePastedFiles={handlePastedFiles}
      // handlePastedText={handlePastedText}
      // handleReturn={handleReturn}
      // keyBindingFn={handleCustomKeyBindings}
      // blockStyleFn={getBlockStyle}
      // onTab={handleTab}
      // onEscape={handleEscape}
    />
  )
}

export default Editor
