import React, { useState, useRef, useEffect } from 'react'
import ScrollBar from 'simplebar-react'

import DraftEditor from '@draft-js-plugins/editor'
import {
  AtomicBlockUtils,
  ContentBlock,
  EditorState,
  getDefaultKeyBinding,
  Modifier,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
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
import {
  styleSelectedBlock,
  getCurrentContentLength,
  getBlockAlignment,
  trackCharacters,
  handleListsCommand,
} from './utils'

import { ALIGN_TYPES, BASIC_BLOCKS, KEY_BINDINGS, PLUGINS } from './config'

import type { Category } from 'generated/graphql'
import type { AlignType } from 'types/editor'

type EditorProps = {
  title?: string
  initialState?: RawDraftContentState | null
  activeCategory: Pick<Category, 'id' | 'color' | 'label' | 'primary'>
  categories: Pick<Category, 'id' | 'color' | 'label' | 'primary'>[]
  onCategoryChange: (categoryID: string) => void
  onSave: (title: string, content: RawDraftContentState) => void
}

const Editor: React.FC<EditorProps> = ({
  title,
  initialState,
  activeCategory,
  categories,
  onCategoryChange,
  onSave,
}) => {
  const editor = useRef<DraftEditor | null>(null)
  const scrollRef = useRef<ScrollBar | null>(null)

  const [tempTitle, setTempTitle] = useState(title ?? '')
  const [editorState, setEditorState] = useState(
    initialState
      ? EditorState.createWithContent(convertFromRaw(initialState))
      : EditorState.createEmpty()
  )
  const [keyCharsHistory, setKeyCharsHistory] = useState<string[]>([])
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
    let updatedKeyCharsHistory = trackCharacters(keyCharsHistory, evt)
    setKeyCharsHistory(updatedKeyCharsHistory)

    const command = KEY_BINDINGS.find(keyBinding =>
      keyBinding.bind.every(code => {
        if (code instanceof RegExp) {
          if (keyBinding.regexChars === 2) {
            return code.test(updatedKeyCharsHistory.slice(-2).join(''))
          }
          return code.test(updatedKeyCharsHistory.join(''))
        }
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
      option,
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

  const handleSave = () => {
    const contentState = convertToRaw(editorState.getCurrentContent())

    onSave(tempTitle, contentState)
  }

  const handleKeyCommand = (command: string) => {
    switch (command) {
      case 'autolist-ordered':
      case 'autolist-unordered':
        handleListsCommand(command, editorState, setEditorState)
        return 'handled'
      case 'save-editor':
        handleSave()
        return 'handled'
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
        return 'not-handled'
    }
  }

  const getBlockStyle = (block: ContentBlock) => {
    let alignment = getBlockAlignment(block)
    const blockType = RichUtils.getCurrentBlockType(editorState)
    if (!block.getText()) {
      const previousBlock = editorState
        .getCurrentContent()
        .getBlockBefore(block.getKey())
      if (previousBlock) {
        alignment = getBlockAlignment(previousBlock)
      }
    }
    if (
      BASIC_BLOCKS.includes(blockType) &&
      getCurrentContentLength(editorState) > 0
    ) {
      setCurrentAlignment(alignment)
    } else {
      setCurrentAlignment('left')
    }

    return `alignment--${alignment}`
  }

  const handleTitleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 83 && e.metaKey) {
      e.preventDefault()
      handleSave()
    }
  }

  const focusEditor = () => {
    editor.current?.focus()
  }

  useEffect(() => {
    focusEditor()
  }, [])

  useEffect(() => {
    setTempTitle(title ?? '')
  }, [title])

  return (
    <Wrapper>
      <InnerWrapper color={activeCategory.color}>
        <Header>
          <ToolbarWrapper data-testid="toolbar">
            <Toolbar
              editorState={editorState}
              handleChange={handleChange}
              currentAlignment={currentAlignment}
              toggleAlignment={toggleAlignment}
              onSave={handleSave}
              activeCategory={activeCategory}
              categories={categories}
              onCategoryChange={onCategoryChange}
            />
          </ToolbarWrapper>
          <TitleWrapper>
            <TitleInput
              data-testid="title-input"
              placeholder="Enter title..."
              value={tempTitle}
              onChange={e => setTempTitle(e.target.value)}
              onKeyDown={handleTitleInputKeyDown}
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
              blockStyleFn={getBlockStyle}
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
