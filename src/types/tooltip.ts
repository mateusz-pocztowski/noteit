import { MutableRefObject } from 'react'

import type { ThemeColors } from 'types/theme'

export type HandlerLayerProps = {
  label: string
  color?: keyof ThemeColors
  colorBlock?: string
  handler: Function
  active: boolean
}

export type TooltipOption = {
  handler?: () => void
  layers?: HandlerLayerProps[]
  label: string
  color?: keyof ThemeColors
  icon?: string
  active?: boolean
  colorBlock?: string
}

export type Direction = {
  X: 'left' | 'right'
  Y: 'top' | 'bottom'
}

export type Position = {
  X: number
  Y: number
}

export type TooltipProps = StateProps & {
  showTooltip: (state: StateProps) => void
  closeTooltip: () => void
}

export type StateProps = {
  tooltipElement: MutableRefObject<HTMLDivElement | null> | null
  visible?: boolean
  options: TooltipOption[]
  direction: Direction
  position: Position
}
