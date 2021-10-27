import Select from 'components/shared/Select'
import ToolbarButton, {
  Spacer,
} from 'components/layout/Editor/layout/Toolbar/ToolbarButton'

import blockquoteIcon from 'assets/icons/editor/quote.svg'
import boldIcon from 'assets/icons/editor/bold.svg'
import italicIcon from 'assets/icons/editor/italic.svg'
import underlineIcon from 'assets/icons/editor/underline.svg'
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

import type { AlignType, HistoryType } from 'types/editor'
import type { Category } from 'generated/graphql'

type Props = {
  editorState: EditorState
  currentAlignment: AlignType
  onSave: () => void
  handleChange: (newState: EditorState) => void
  toggleAlignment: (alignment: AlignType) => void
  activeCategory: Pick<Category, 'id' | 'color' | 'label' | 'primary'>
  categories: Pick<Category, 'id' | 'color' | 'label' | 'primary'>[]
  onCategoryChange: (categoryID: string) => void
}

const Toolbar: React.FC<Props> = ({
  editorState,
  currentAlignment,
  activeCategory,
  categories,
  onCategoryChange,
  onSave,
  handleChange,
  toggleAlignment,
}) => {
  const inlineStyle = editorState.getCurrentInlineStyle()
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  const toggleTypography = (option: DraftBlockType) => {
    handleChange(RichUtils.toggleBlockType(editorState, option))
  }

  const toggleInlineStyle = (option: DraftInlineStyleType) => {
    handleChange(RichUtils.toggleInlineStyle(editorState, option))
  }

  const toggleBlockType = (option: DraftBlockType) => {
    handleChange(RichUtils.toggleBlockType(editorState, option))
  }

  const onUndo = () => {
    handleChange(EditorState.undo(editorState))
  }

  const onRedo = () => {
    handleChange(EditorState.redo(editorState))
  }

  const handleHistoryOption = (option: HistoryType) => {
    if (option === 'undo') onUndo()
    if (option === 'redo') onRedo()
  }

  return (
    <>
      <Select
        options={[
          { id: 'header-one', label: 'Title' },
          { id: 'header-two', label: 'Subtitle' },
          { id: 'header-three', label: 'Heading' },
          { id: 'unstyled', label: 'Paragraph' },
        ]}
        active={blockType}
        onToggle={toggleTypography}
      />

      <ToolbarButton
        callback={onSave}
        icon={saveIcon}
        label="Save"
        command="save-editor"
      />

      <Spacer />

      <ToolbarButton
        callback={() => toggleInlineStyle('BOLD')}
        icon={boldIcon}
        label="Bold"
        command="BOLD"
        active={inlineStyle.has('BOLD')}
      />
      <ToolbarButton
        callback={() => toggleInlineStyle('ITALIC')}
        icon={italicIcon}
        label="Italic"
        command="ITALIC"
        active={inlineStyle.has('ITALIC')}
      />
      <ToolbarButton
        callback={() => toggleInlineStyle('UNDERLINE')}
        icon={underlineIcon}
        label="Underline"
        command="UNDERLINE"
        active={inlineStyle.has('UNDERLINE')}
      />

      <Spacer />

      <ToolbarButton
        callback={() => toggleBlockType('ordered-list-item')}
        icon={listIcon}
        label="Numbered list"
        command="ordered-list-item"
        active={'ordered-list-item' === blockType}
      />
      <ToolbarButton
        callback={() => toggleBlockType('unordered-list-item')}
        icon={list2Icon}
        label="Bulleted list"
        command="unordered-list-item"
        active={'unordered-list-item' === blockType}
      />

      <Spacer />

      <ToolbarButton
        callback={() => toggleBlockType('blockquote')}
        icon={blockquoteIcon}
        label="Quote"
        command="blockquote"
        active={'blockquote' === blockType}
      />
      <ToolbarButton
        callback={() => toggleBlockType('code-block')}
        icon={codeIcon}
        label="Code"
        command="code-block"
        active={'code-block' === blockType}
      />

      <Spacer />

      <ToolbarButton
        callback={() => toggleAlignment('left')}
        icon={alignLeftIcon}
        label="Left align"
        command="align-left"
        active={currentAlignment === 'left'}
      />
      <ToolbarButton
        callback={() => toggleAlignment('center')}
        icon={alignCenterIcon}
        label="Center align"
        command="align-center"
        active={currentAlignment === 'center'}
      />
      <ToolbarButton
        callback={() => toggleAlignment('right')}
        icon={alignRightIcon}
        label="Right align"
        command="align-right"
        active={currentAlignment === 'right'}
      />

      <Spacer />

      <ToolbarButton
        callback={() => handleHistoryOption('undo')}
        icon={undoIcon}
        label="Undo"
        command="undo"
      />
      <ToolbarButton
        callback={() => handleHistoryOption('redo')}
        icon={redoIcon}
        label="Redo"
        command="redo"
      />

      <Select
        options={categories.map(category => ({
          id: category.id,
          label: category.label,
          color: category.color,
        }))}
        active={activeCategory.id}
        onToggle={onCategoryChange}
      />
    </>
  )
}

export default Toolbar
