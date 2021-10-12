import { useState, useRef, useEffect } from 'react'
import ScrollBar from 'simplebar-react'

import DraftEditor from '@draft-js-plugins/editor'
import { EditorState } from 'draft-js'

import Toolbar from 'components/layout/Editor/Toolbar'
import {
  Wrapper,
  InnerWrapper,
  Header,
  ButtonsWrapper,
  TitleWrapper,
  TitleInput,
  EditorWrapper,
} from 'components/layout/Editor/components'

import createHashtagPlugin from '@draft-js-plugins/hashtag'
import createLinkifyPlugin from '@draft-js-plugins/linkify'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'

import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import { Category } from 'generated/graphql'

const TOOLBAR_PLUGIN = createInlineToolbarPlugin()
const HASHTAG_PLUGIN = createHashtagPlugin()
const LINKIFY_PLUGIN = createLinkifyPlugin({
  component: props => {
    return (
      <a
        {...props}
        onClick={() => {
          window.open(props.href, '_blank')
        }}
      />
    )
  },
})

const PLUGINS = [TOOLBAR_PLUGIN, LINKIFY_PLUGIN, HASHTAG_PLUGIN]

type Props = {
  title?: string
  activeCategory: Pick<Category, 'id' | 'color' | 'label' | 'primary'>
}

const Editor: React.FC<Props> = ({ title, activeCategory }) => {
  const editor = useRef<DraftEditor | null>(null)
  const scrollRef = useRef<ScrollBar | null>(null)

  const [tempTitle, setTempTitle] = useState(title ?? '')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleChange = (newState: EditorState) => {
    console.log(newState)
    setEditorState(newState)
  }

  const focusEditor = () => {
    editor.current?.focus()
  }

  useEffect(() => {
    editor.current?.focus()
  }, [])

  useEffect(() => {
    setTempTitle(title ?? '')
  }, [title])

  return (
    <Wrapper>
      <InnerWrapper color={activeCategory.color}>
        <Header>
          <ButtonsWrapper>
            <Toolbar
              editorState={editorState}
              handleChange={handleChange}
              alignment="left"
              onSave={() => null}
            />
          </ButtonsWrapper>
          <TitleWrapper>
            <TitleInput
              placeholder="Enter title..."
              value={tempTitle}
              onChange={e => setTempTitle(e.target.value)}
              // onKeyDown={e => {
              //   if (e.keyCode === 83 && e.metaKey) {
              //     e.preventDefault()
              //     // handleSave()
              //   }
              // }}
            />
          </TitleWrapper>
        </Header>
        <ScrollBar
          ref={scrollRef}
          style={{ height: 'calc(100% - 115px)' }}
          autoHide
        >
          <EditorWrapper onClick={focusEditor}>
            <DraftEditor
              ref={editor}
              editorState={editorState}
              plugins={PLUGINS}
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
            <TOOLBAR_PLUGIN.InlineToolbar />
          </EditorWrapper>
        </ScrollBar>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Editor
