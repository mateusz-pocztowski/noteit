import { ALIGN_TYPES, COMMANDS } from 'components/layout/Editor/config'

export type AlignType = typeof ALIGN_TYPES[number]

export type HistoryType = 'undo' | 'redo'

export type Bind = (RegExp | number | 'metaKey' | 'ctrlKey' | 'shiftKey')[]

export type Command = typeof COMMANDS[number]

export type KeyBinding = {
  bind: Bind
  command: Command
  regexChars?: 2 | 3
}

export type ToolbarOptionConfig = {
  type: 'save' | 'inlineStyle' | 'blockType' | 'history' | 'alignment'
  label: string
  icon: any
  iconSize?: number
  command?: Command
}

export type ToolbarOption = Omit<ToolbarOptionConfig, 'type'> & {
  callback: () => void
  active?: boolean
}
