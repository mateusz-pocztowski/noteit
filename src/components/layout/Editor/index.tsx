import { useState, useRef } from 'react'
import styled from 'styled-components'

import DraftEditor from '@draft-js-plugins/editor'
import { EditorState } from 'draft-js'

import createHashtagPlugin from '@draft-js-plugins/hashtag'
import createLinkifyPlugin from '@draft-js-plugins/linkify'

const hashtagPlugin = createHashtagPlugin()
const linkifyPlugin = createLinkifyPlugin()

const plugins = [linkifyPlugin, hashtagPlugin]

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: 30px auto;
  padding: 30px 0 0;
  background: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-top: 5px solid ${({ color }) => color};
  border-radius: 6px;
  transition: border 0.3s;

  padding: 30px;
`

const Editor = () => {
  const editorRef = useRef(null)

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleChange = (newState: EditorState) => {
    console.log(newState)
    setEditorState(newState)
  }

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Editor
