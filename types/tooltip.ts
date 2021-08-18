import { MutableRefObject } from 'react'

export type HandlerLayerProps = {
  label: string
  color: string
  colorBlock: string
  handler: Function
  active: boolean
}

export type TooltipOption = {
  handler: Function | HandlerLayerProps[]
  label: string
  color?: string
  icon: string
  active?: boolean
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
  tooltipElement: MutableRefObject<HTMLDivElement> | null
  visible?: boolean
  options: TooltipOption[]
  direction: Direction
  position: Position
}
