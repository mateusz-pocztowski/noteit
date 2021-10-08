import { createContext, useState, useEffect } from 'react'

import type { TooltipProps, StateProps } from 'types/tooltip'

const initialState: StateProps = {
  tooltipElement: null,
  visible: false,
  options: [],
  direction: {
    X: 'left',
    Y: 'top',
  },
  position: {
    X: 0,
    Y: 0,
  },
}

export const TooltipContext = createContext<TooltipProps>({
  ...initialState,
  closeTooltip: () => null,
  showTooltip: () => null,
})

const TooltipProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<StateProps>(initialState)

  const showTooltip = (newState: StateProps) => {
    setState({
      ...state,
      ...newState,
      visible: true,
    })
  }

  const closeTooltip = () => {
    setState({
      ...state,
      ...initialState,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', closeTooltip)
    window.addEventListener('resize', closeTooltip)
    return () => {
      window.removeEventListener('scroll', closeTooltip)
      window.removeEventListener('resize', closeTooltip)
    }
  }, [])

  return (
    <TooltipContext.Provider value={{ ...state, closeTooltip, showTooltip }}>
      {children}
    </TooltipContext.Provider>
  )
}

export default TooltipProvider
