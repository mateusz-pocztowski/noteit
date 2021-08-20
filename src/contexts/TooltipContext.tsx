import React, { FC, createContext, useState, useEffect } from 'react'
import { TooltipProps, StateProps } from 'types/tooltip'

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

const TooltipProvider: FC = ({ children }) => {
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
    const listener = () => {
      closeTooltip()
    }

    window.addEventListener('scroll', listener, true)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])

  return (
    <TooltipContext.Provider value={{ ...state, closeTooltip, showTooltip }}>
      {children}
    </TooltipContext.Provider>
  )
}

export default TooltipProvider
