import type { EditorState } from 'draft-js'

export const getCurrentContentLength = (editorState: EditorState) => {
  const currentContent = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  const focusBlock = currentContent.getBlockForKey(selection.getFocusKey())

  const length = focusBlock.getLength()

  return length
}
