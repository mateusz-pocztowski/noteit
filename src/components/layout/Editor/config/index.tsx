import createImagePlugin from '@draft-js-plugins/image'
import createHashtagPlugin from '@draft-js-plugins/hashtag'
import createLinkifyPlugin from '@draft-js-plugins/linkify'

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

import type { KeyBinding, ToolbarOptionConfig } from 'types/editor'

const IMAGE_PLUGIN = createImagePlugin()
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

export const PLUGINS = [IMAGE_PLUGIN, LINKIFY_PLUGIN, HASHTAG_PLUGIN]

export const UL_FULL_REGEX = /^(\*|\-)\s$/
export const OL_FULL_REGEX = /^\d+\.\s$/

export const ALIGN_TYPES = ['left', 'center', 'right'] as const
export const BASIC_BLOCKS = [
  'unstyled',
  'header-one',
  'header-two',
  'header-three',
] as string[]

export const COMMANDS = [
  'BOLD',
  'ITALIC',
  'UNDERLINE',
  'save-editor',
  'align-left',
  'align-center',
  'align-right',
  'ordered-list-item',
  'unordered-list-item',
  'blockquote',
  'code-block',
  'autolist-unordered',
  'autolist-ordered',
  'undo',
  'redo',
] as const

export const KEY_BINDINGS: KeyBinding[] = [
  { bind: ['metaKey', 90], command: 'undo' },
  { bind: ['metaKey', 89], command: 'redo' },
  { bind: ['metaKey', 66], command: 'BOLD' },
  { bind: ['metaKey', 73], command: 'ITALIC' },
  { bind: ['metaKey', 85], command: 'UNDERLINE' },
  { bind: ['metaKey', 83], command: 'save-editor' },
  { bind: ['metaKey', 'shiftKey', 76], command: 'align-left' },
  { bind: ['metaKey', 'shiftKey', 69], command: 'align-center' },
  { bind: ['metaKey', 'shiftKey', 82], command: 'align-right' },
  { bind: ['metaKey', 'shiftKey', 55], command: 'ordered-list-item' },
  { bind: ['metaKey', 'shiftKey', 56], command: 'unordered-list-item' },
  { bind: ['ctrlKey', 81], command: 'blockquote' },
  { bind: ['ctrlKey', 192], command: 'code-block' },
  { bind: [UL_FULL_REGEX], regexChars: 2, command: 'autolist-unordered' },
  { bind: [OL_FULL_REGEX], command: 'autolist-ordered' },
]

export const EDITOR_TOOLBAR_OPTIONS: ToolbarOptionConfig[][] = [
  [
    {
      type: 'save',
      icon: saveIcon,
      label: 'Save',
      command: 'save-editor',
    },
  ],
  [
    {
      type: 'inlineStyle',
      icon: boldIcon,
      label: 'Bold',
      command: 'BOLD',
    },
    {
      type: 'inlineStyle',
      icon: italicIcon,
      label: 'Italic',
      command: 'ITALIC',
    },
    {
      type: 'inlineStyle',
      icon: underlineIcon,
      label: 'Underline',
      command: 'UNDERLINE',
    },
  ],
  [
    {
      type: 'blockType',
      icon: listIcon,
      label: 'Numbered list',
      command: 'ordered-list-item',
    },
    {
      type: 'blockType',
      icon: list2Icon,
      label: 'Bulleted list',
      command: 'unordered-list-item',
    },
  ],
  [
    {
      type: 'blockType',
      icon: blockquoteIcon,
      label: 'Quote',
      command: 'blockquote',
    },
    {
      type: 'blockType',
      icon: codeIcon,
      label: 'Code',
      command: 'code-block',
    },
  ],
  [
    {
      type: 'alignment',
      icon: alignLeftIcon,
      label: 'Left align',
      command: 'align-left',
    },
    {
      type: 'alignment',
      icon: alignCenterIcon,
      label: 'Center align',
      command: 'align-center',
    },
    {
      type: 'alignment',
      icon: alignRightIcon,
      label: 'Right align',
      command: 'align-right',
    },
  ],
  [
    {
      type: 'history',
      icon: undoIcon,
      label: 'Undo',
      command: 'undo',
    },
    {
      type: 'history',
      icon: redoIcon,
      label: 'Redo',
      command: 'redo',
    },
  ],
]
