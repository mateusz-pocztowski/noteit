import createImagePlugin from '@draft-js-plugins/image'
import createHashtagPlugin from '@draft-js-plugins/hashtag'
import createLinkifyPlugin from '@draft-js-plugins/linkify'

import type { KeyBinding } from 'types/editor'

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

const UL_FULL_REGEX = /^(\*|\-)\s$/
const OL_FULL_REGEX = /^\d+\.\s$/

export const ALIGN_TYPES = ['left', 'center', 'right'] as const

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
  { bind: ['metaKey', 'ctrlKey', 81], command: 'blockquote' },
  { bind: ['metaKey', 'ctrlKey', 192], command: 'code-block' },
  { bind: [UL_FULL_REGEX, 32], command: 'autolist-unordered' },
  { bind: [OL_FULL_REGEX, 32], command: 'autolist-ordered' },
]
