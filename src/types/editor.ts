import { ALIGN_TYPES, COMMANDS } from 'components/layout/Editor/config'

export type AlignType = typeof ALIGN_TYPES[number]

export type HistoryType = 'undo' | 'redo'

export type Bind = (RegExp | number | 'metaKey' | 'ctrlKey' | 'shiftKey')[]

export type Command = typeof COMMANDS[number]

export type KeyBinding = {
  bind: Bind
  command: Command
}
