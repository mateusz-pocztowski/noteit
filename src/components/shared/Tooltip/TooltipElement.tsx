import { useRef, useContext, MouseEvent } from 'react'
import { TooltipContext } from 'contexts/TooltipContext'

import type { Direction, Position, TooltipOption } from 'types/tooltip'

interface Props {
  children?: JSX.Element | JSX.Element[]
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  options: TooltipOption[]
  [x: string]: any
}

const TooltipElement: React.FC<Props> = ({
  children,
  onClick,
  options,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const { visible, showTooltip, closeTooltip } = useContext(TooltipContext)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return
    const boundingClientRect = elementRef.current.getBoundingClientRect()
    const { left, right, top, bottom, height } = boundingClientRect

    const direction: Direction = {
      X: left + 400 >= window.innerWidth ? 'right' : 'left',
      Y: top + 200 >= window.innerHeight ? 'bottom' : 'top',
    }

    const position: Position = {
      X: direction.X === 'right' ? window.innerWidth - right : left,
      Y:
        direction.Y === 'bottom'
          ? window.innerHeight + height - bottom
          : top + height,
    }

    if (!visible) {
      showTooltip({ position, direction, options, tooltipElement: elementRef })
    } else {
      closeTooltip()
    }

    if (onClick) onClick(e)
  }

  return (
    <div ref={elementRef} role="button" onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

export default TooltipElement
