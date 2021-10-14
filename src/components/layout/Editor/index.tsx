import { useState, useRef, useEffect } from 'react'
import ScrollBar from 'simplebar-react'

import DraftEditor from '@draft-js-plugins/editor'
import {
  AtomicBlockUtils,
  EditorState,
  getDefaultKeyBinding,
  Modifier,
  RichUtils,
} from 'draft-js'

import Toolbar from 'components/layout/Editor/layout/Toolbar'
import {
  Wrapper,
  InnerWrapper,
  Header,
  ToolbarWrapper,
  TitleWrapper,
  TitleInput,
  EditorWrapper,
} from 'components/layout/Editor/layout'

import { toBase64 } from 'utils/toBase64'
import { styleSelectedBlock } from './utils'

import { ALIGN_TYPES, KEY_BINDINGS, PLUGINS } from './config'

import type { Category } from 'generated/graphql'
import type { AlignType } from 'types/editor'

type Props = {
  title?: string
  activeCategory: Pick<Category, 'id' | 'color' | 'label' | 'primary'>
}

const Editor: React.FC<Props> = ({ title, activeCategory }) => {
  const editor = useRef<DraftEditor | null>(null)
  const scrollRef = useRef<ScrollBar | null>(null)

  const [tempTitle, setTempTitle] = useState(title ?? '')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [currentAlignment, setCurrentAlignment] = useState<AlignType>('left')

  const insertImage = (base64: string) => {
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      { src: base64 }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    })

    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
  }

  const handlePastedFiles = async (files: Blob[]) => {
    const base64File = await toBase64(files[0])

    const newEditorState = insertImage(base64File)
    handleChange(newEditorState)
  }

  const handleChange = (newState: EditorState) => {
    setEditorState(newState)
  }

  const keyBindingFn = (evt: React.KeyboardEvent<{}>) => {
    // keyCharsHistory = trackCharacters(keyCharsHistory, evt)

    const command = KEY_BINDINGS.find(keyBinding =>
      keyBinding.bind.every(code => {
        // TODO: add two last letters of chars history
        if (code instanceof RegExp) code.test('')
        if (typeof code === 'number') return evt.keyCode === code
        if (typeof code === 'string') return evt[code]

        return false
      })
    )?.command

    return command ?? getDefaultKeyBinding(evt)
  }

  const toggleAlignment = (option: AlignType) => {
    const [newState, alignment] = styleSelectedBlock(
      editorState,
      currentAlignment,
      ALIGN_TYPES.filter(alignment => alignment !== option)
    )
    handleChange(newState)
    setCurrentAlignment(alignment)
  }

  const handleTab = (e: React.KeyboardEvent<{}>) => {
    e.preventDefault()
    const newEditorState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '      '
    )
    handleChange(
      EditorState.push(editorState, newEditorState, 'insert-characters')
    )
  }

  const handleSave = () => {}

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    // handleListCommands(command, editorState, setEditorState)

    switch (command) {
      case 'save-editor':
        return handleSave()
      case 'align-left':
        toggleAlignment('left')
        return 'handled'
      case 'align-center':
        toggleAlignment('center')
        return 'handled'
      case 'align-right':
        toggleAlignment('right')
        return 'handled'
      case 'undo':
        handleChange(EditorState.undo(editorState))
        return 'handled'
      case 'redo':
        handleChange(EditorState.redo(editorState))
        return 'handled'
      case 'BOLD':
      case 'ITALIC':
      case 'UNDERLINE':
        handleChange(RichUtils.toggleInlineStyle(editorState, command))
        return 'handled'
      case 'ordered-list-item':
      case 'unordered-list-item':
      case 'blockquote':
      case 'code-block':
        handleChange(RichUtils.toggleBlockType(editorState, command))
        return 'handled'
      default:
        break
    }

    if (newState) {
      handleChange(newState)
      return 'handled'
    }

    return 'not-handled'
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
          <ToolbarWrapper>
            <Toolbar
              editorState={editorState}
              handleChange={handleChange}
              currentAlignment={currentAlignment}
              toggleAlignment={toggleAlignment}
              onSave={handleSave}
            />
          </ToolbarWrapper>
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
              handlePastedFiles={files => {
                handlePastedFiles(files)
                return 'handled'
              }}
              keyBindingFn={keyBindingFn}
              handleKeyCommand={handleKeyCommand}
              // handlePastedText={handlePastedText}
              // handleReturn={handleReturn}
              // blockStyleFn={getBlockStyle}
              onTab={handleTab}
              // onEscape={handleEscape}
            />
          </EditorWrapper>
        </ScrollBar>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Editor
