import { DraftInlineStyleType, EditorState, Modifier } from 'draft-js'

import type { AlignType } from 'types/editor'

type InlineStyle = AlignType | DraftInlineStyleType

export const styleSelectedBlock = <T extends InlineStyle>(
  editorState: EditorState,
  inlineStyle: T,
  stylesToRemove: InlineStyle[] = []
): [EditorState, T] => {
  const currentContent = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  const focusBlock = currentContent.getBlockForKey(selection.getFocusKey())
  const anchorBlock = currentContent.getBlockForKey(selection.getAnchorKey())
  const selectionIsBackward = selection.getIsBackward()

  let changes = {
    anchorOffset: 0,
    focusOffset: focusBlock.getLength(),
  }

  if (selectionIsBackward) {
    changes = {
      focusOffset: 0,
      anchorOffset: anchorBlock.getLength(),
    }
  }

  const selectWholeBlocks = selection.merge(changes)
  const modifiedContent = Modifier.applyInlineStyle(
    currentContent,
    selectWholeBlocks,
    inlineStyle
  )

  const finalContent = stylesToRemove.reduce((content, currStyle) => {
    return Modifier.removeInlineStyle(content, selectWholeBlocks, currStyle)
  }, modifiedContent)

  return [
    EditorState.push(editorState, finalContent, 'change-inline-style'),
    inlineStyle,
  ]
}
