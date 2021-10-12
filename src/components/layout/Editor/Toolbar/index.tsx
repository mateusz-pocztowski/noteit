import React, { MouseEvent } from 'react'
import styled from 'styled-components'
// import Select from 'components/Editor/blockStyles/Select';
import Icon from 'components/shared/Icon'

import blockquoteIcon from 'assets/icons/editor/quote.svg'
import underlineIcon from 'assets/icons/editor/underline.svg'
import italicIcon from 'assets/icons/editor/italic.svg'
import boldIcon from 'assets/icons/editor/bold.svg'
import listIcon from 'assets/icons/editor/list-ol.svg'
import list2Icon from 'assets/icons/editor/list-ul.svg'
import codeIcon from 'assets/icons/editor/code.svg'
import alignLeftIcon from 'assets/icons/editor/left-align.svg'
import alignCenterIcon from 'assets/icons/editor/center-align.svg'
import alignRightIcon from 'assets/icons/editor/right-align.svg'
import undoIcon from 'assets/icons/editor/undo.svg'
import redoIcon from 'assets/icons/editor/redo.svg'
import saveIcon from 'assets/icons/editor/save.svg'

import {
  DraftBlockType,
  DraftInlineStyleType,
  EditorState,
  RichUtils,
} from 'draft-js'

const Button = styled.button<{ active?: boolean }>`
  position: relative;
  background: ${({ theme, active }) =>
    active ? theme.colors.active : 'transparent'};
  width: 35px;
  height: 35px;
  transition: 0.2s;
  margin: 0 2px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.colors.active : theme.colors.hover};
    & > span {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.3s;
    }
  }
  span {
    position: absolute;
    bottom: calc(100% + 9px);
    background: ${({ theme }) => theme.colors.blue};
    padding: 3px 6px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    box-shadow: ${({ theme }) => theme.colors.cardShadow100};
    white-space: nowrap;
    border-radius: 4px;
    z-index: 99;
    left: 50%;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%);
    transition: 0.1s;
    font-size: 11px;
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${({ theme }) => theme.colors.blue};
      z-index: 1;
    }
  }
`

const Spacer = styled.span`
  display: flex;
  align-items: center;
  margin: 0 5px;
  width: 2px;
  height: 35px;
  background: ${({ theme }) => theme.colors.hover};
`

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  & > div {
    width: 170px;
  }
`

const modifier =
  typeof window !== `undefined` &&
  /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    ? 'CMD'
    : 'Ctrl'

type BlockTypeOption = {
  label: string
  icon?: any
  style: DraftBlockType
}

type InlineStyleOption = {
  label: string
  icon: any
  style: DraftInlineStyleType
}

type AlignType = 'left' | 'center' | 'right'

type AlignTypeOption = {
  label: string
  icon: any
  style: AlignType
}

type HistoryType = 'undo' | 'redo'

type HistoryTypeOption = {
  label: string
  icon: any
  style: HistoryType
}

const INLINE_STYLES: InlineStyleOption[] = [
  { label: `Bold (${modifier}+B)`, icon: boldIcon, style: 'BOLD' },
  { label: `Italic (${modifier}+I)`, icon: italicIcon, style: 'ITALIC' },
  {
    label: `Underline (${modifier}+U)`,
    icon: underlineIcon,
    style: 'UNDERLINE',
  },
]

const BLOCK_TYPES: BlockTypeOption[] = [
  {
    label: `Numbered list (${modifier}+Shift+7)`,
    icon: listIcon,
    style: 'ordered-list-item',
  },
  {
    label: `Bulleted list (${modifier}+Shift+8)`,
    icon: list2Icon,
    style: 'unordered-list-item',
  },
  { label: `Quote (Ctrl+Q)`, icon: blockquoteIcon, style: 'blockquote' },
  { label: `Code (Ctrl+\`)`, icon: codeIcon, style: 'code-block' },
]

const HEADER_TYPES: BlockTypeOption[] = [
  { label: 'Paragraph', style: 'unstyled' },
  { label: 'Title', style: 'header-one' },
  { label: 'Subtitle', style: 'header-two' },
  { label: 'Heading', style: 'header-three' },
]

const ALIGN_OPTIONS: AlignTypeOption[] = [
  {
    label: `Left align (${modifier}+Shift+L)`,
    icon: alignLeftIcon,
    style: 'left',
  },
  {
    label: `Center align (${modifier}+Shift+E)`,
    icon: alignCenterIcon,
    style: 'center',
  },
  {
    label: `Right align (${modifier}+Shift+R)`,
    icon: alignRightIcon,
    style: 'right',
  },
]

const HISTORY_OPTIONS: HistoryTypeOption[] = [
  { label: `Undo (${modifier}+Z)`, icon: undoIcon, style: 'undo' },
  { label: `Redo (${modifier}+Y)`, icon: redoIcon, style: 'redo' },
]

type Props = {
  editorState: EditorState
  alignment: AlignType
  onSave: () => void
  handleChange: (newState: EditorState) => void
}

const Toolbar: React.FC<Props> = ({
  editorState,
  alignment,
  onSave,
  handleChange,
  // categories,
  // activeCategory,
  // handleCategories,
}) => {
  const inlineStyle = editorState.getCurrentInlineStyle()

  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  const toggleInlineStyle = (e: MouseEvent, option: DraftInlineStyleType) => {
    e.preventDefault()
    handleChange(RichUtils.toggleInlineStyle(editorState, option))
  }

  const toggleBlockType = (e: MouseEvent, option: DraftBlockType) => {
    e.preventDefault()
    handleChange(RichUtils.toggleBlockType(editorState, option))
  }

  const toggleAlignment = (e: MouseEvent, option: AlignType) => {
    e.preventDefault()
    // const blockType = RichUtils.getCurrentBlockType(editorState)
    // if (BASIC_BLOCKS.includes(blockType)) {
    //   if (getCurrentContentLength(editorState) > 0) {
    //     const [newState, currAlignment] = styleWholeSelectedBlocksModifier(
    //       editorState,
    //       alignment,
    //       ['left', 'center', 'right'].filter(item => item !== alignment)
    //     )
    //     handleChange(newState)
    //     setCurrentAlignment(currAlignment)
    //   }
    // } else {
    //   setCurrentAlignment('')
    // }
  }

  const onUndo = () => {
    handleChange(EditorState.undo(editorState))
  }

  const onRedo = () => {
    handleChange(EditorState.redo(editorState))
  }

  const handleHistoryOption = (e: MouseEvent, option: HistoryType) => {
    e.preventDefault()

    if (option === 'undo') onUndo()
    if (option === 'redo') onRedo()
  }

  return (
    <>
      {/* <Select
        options={HEADER_TYPES}
        active={blockType}
        onToggle={onToggle}
        identifier="style"
      /> */}
      <Button onMouseDown={onSave}>
        <span>{`Save (${modifier}+S)`}</span>
        <Icon size={18} src={saveIcon} alt="Save" />
      </Button>
      <Spacer />
      {INLINE_STYLES.map(({ label, style, icon }) => (
        <Button
          onMouseDown={e => toggleInlineStyle(e, style)}
          active={inlineStyle.has(style)}
          key={style}
        >
          <span>{label}</span>
          <Icon size={16} src={icon} alt={style} />
        </Button>
      ))}
      <Spacer />
      {BLOCK_TYPES.map(({ style, label, icon }, index) => {
        return (
          <React.Fragment key={style}>
            <Button
              active={style === blockType}
              onMouseDown={e => toggleBlockType(e, style)}
            >
              <span>{label}</span>
              <Icon size={18} src={icon} alt={style} />
            </Button>
            {index === 1 && <Spacer />}
          </React.Fragment>
        )
      })}
      <Spacer />
      {ALIGN_OPTIONS.map(({ label, icon, style }) => (
        <Button
          active={alignment === style}
          key={style}
          onMouseDown={e => toggleAlignment(e, style)}
        >
          <span>{label}</span>
          <Icon size={18} src={icon} alt={style} />
        </Button>
      ))}
      <Spacer />
      {HISTORY_OPTIONS.map(({ label, style, icon }) => (
        <Button key={label} onMouseDown={e => handleHistoryOption(e, style)}>
          <span>{label}</span>
          <Icon size={18} src={icon} alt={label} />
        </Button>
      ))}
      {/* {categories.length > 1 && (
        <OptionsWrapper>
          <Select
            options={categories.map((category: Category) => ({
              ...category,
              style: category.color,
            }))}
            active={activeCategory}
            onToggle={handleCategories}
            identifier="id"
          />
        </OptionsWrapper>
      )} */}
    </>
  )
}

export default Toolbar
