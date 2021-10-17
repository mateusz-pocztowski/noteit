import { EditorState, Modifier, RichUtils, SelectionState } from 'draft-js'

const LISTS = {
  'autolist-ordered': 'ordered-list-item',
  'autolist-unordered': 'unordered-list-item',
}

const UL_INTERCEPT_REGEX = /^(\*|\-)$/
const OL_INTERCEPT_REGEX = /^\d+\.$/

const LISTS_REGEX = {
  'autolist-ordered': OL_INTERCEPT_REGEX,
  'autolist-unordered': UL_INTERCEPT_REGEX,
}

export const handleListsCommand = (
  command: 'autolist-ordered' | 'autolist-unordered',
  editorState: EditorState,
  setEditorState: (editorState: EditorState) => void
) => {
  let content = editorState.getCurrentContent()

  const selection = editorState.getSelection()
  const blockKey = selection.getStartKey()
  let block = content.getBlockForKey(blockKey)

  let blockText = block.getText()

  if (
    block.getType() === 'unstyled' &&
    block.getDepth() === 0 &&
    LISTS_REGEX[command].test(blockText)
  ) {
    editorState = RichUtils.toggleBlockType(editorState, LISTS[command])
    content = editorState.getCurrentContent()
    block = content.getBlockForKey(blockKey)

    const blockSelection = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: block.getLength(),
    })

    content = Modifier.replaceText(content, blockSelection, '')
  } else {
    content = Modifier.insertText(content, selection, ' ')
  }
  editorState = EditorState.push(editorState, content, 'change-block-type')
  editorState = EditorState.forceSelection(
    editorState,
    content.getSelectionAfter()
  )
  setEditorState(editorState)

  return 'handled'
}
