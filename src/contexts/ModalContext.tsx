import React, { createContext, useState } from 'react'

type StateProps = {
  visible: boolean
  isRemoval: boolean
  confirmHeading: string
  confirmDescription: string
  confirmBtnText: string
  confirmFn: () => void
}

type ModalProps = StateProps & {
  closeModal: () => void
  showModal: (state: Partial<StateProps>) => void
}

const initialState: StateProps = {
  visible: false,
  isRemoval: false,
  confirmHeading: 'Are you sure?',
  confirmDescription: '',
  confirmBtnText: 'OK',
  confirmFn: () => {},
}

export const ModalContext = createContext<ModalProps>({
  ...initialState,
  closeModal: () => {},
  showModal: () => {},
})

const ModalProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<StateProps>(initialState)

  const showModal = (newState: Partial<StateProps>) => {
    setState({
      ...state,
      ...newState,
      visible: true,
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      visible: false,
    })
  }

  return (
    <ModalContext.Provider value={{ ...state, closeModal, showModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
