import Select from 'components/shared/Select'
import ToolbarButton, {
  Spacer,
} from 'components/layout/Editor/layout/Toolbar/ToolbarButton'

import {
  DraftBlockType,
  DraftInlineStyleType,
  EditorState,
  RichUtils,
} from 'draft-js'

import { EDITOR_TOOLBAR_OPTIONS } from 'components/layout/Editor/config'

import type { AlignType, HistoryType, ToolbarOptionConfig } from 'types/editor'
import type { Category } from 'generated/graphql'
import { Fragment } from 'react'

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

  const getOptionCallback = (
    type: ToolbarOptionConfig['type'],
    command: ToolbarOptionConfig['command']
  ) => {
    switch (type) {
      case 'save':
        return onSave
      case 'inlineStyle':
        return () => toggleInlineStyle(command as DraftInlineStyleType)
      case 'blockType':
        return () => toggleBlockType(command as DraftBlockType)
      case 'alignment':
        return () => toggleAlignment(command as AlignType)
      case 'history':
        return () => handleHistoryOption(command as HistoryType)
      default:
        return () => null
    }
  }

  const getIsOptionActive = (
    type: ToolbarOptionConfig['type'],
    command: ToolbarOptionConfig['command']
  ) => {
    switch (type) {
      case 'inlineStyle':
        return inlineStyle.has(command ?? '')
      case 'blockType':
        return command === blockType
      case 'alignment':
        return currentAlignment === (command as AlignType)
      default:
        return false
    }
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
        value={blockType}
        onChange={toggleTypography}
      />

      {EDITOR_TOOLBAR_OPTIONS.map((module, index) => (
        <Fragment key={index}>
          {index !== 0 && <Spacer />}
          {module.map(option => {
            const callback = getOptionCallback(option.type, option.command)
            const active = getIsOptionActive(option.type, option.command)
            return (
              <ToolbarButton
                key={option.command}
                callback={callback}
                icon={option.icon}
                label={option.label}
                command={option.command}
                active={active}
              />
            )
          })}
        </Fragment>
      ))}

      <Select
        options={categories.map(category => ({
          id: category.id,
          label: category.label,
          color: category.color,
        }))}
        value={activeCategory.id}
        onChange={onCategoryChange}
      />
    </>
  )
}

export default Toolbar
