import React, { FC, createContext, useState } from 'react';

interface StateProps {
  visible?: boolean;
  isRemoval?: boolean;
  confirmText?: string;
  confirmBtnText?: string;
  confirmFn: () => void;
}

interface ModalProps extends StateProps {
  closeModal: () => void;
  showModal: (state: StateProps) => void;
}

const initialState: StateProps = {
  visible: false,
  isRemoval: false,
  confirmText: 'Are you sure?',
  confirmBtnText: 'OK',
  confirmFn: () => null,
};

export const ModalContext = createContext<ModalProps>({
  ...initialState,
  closeModal: () => null,
  showModal: () => null,
});

const ModalProvider: FC = ({ children }) => {
  const [state, setState] = useState<StateProps>(initialState);

  const showModal = (newState: StateProps) => {
    setState({
      ...state,
      ...newState,
      visible: true,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  return (
    <ModalContext.Provider value={{ ...state, closeModal, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
