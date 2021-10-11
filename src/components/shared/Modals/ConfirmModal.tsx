import React, { useRef, useContext } from 'react'
import styled, { css } from 'styled-components'

import { ModalContext } from 'contexts/ModalContext'

import Icon from 'components/shared/Icon'
import Button from 'components/shared/Button'
import { Text } from 'components/shared/Typography'

import useOutsideClick from 'hooks/useOutsideClick'

import closeIcon from 'assets/icons/close.svg'

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    `}
`

const Wrapper = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background: ${({ theme }) => theme.colors.element};
  border-radius: 4px;
  box-shadow: 2px 2px 45px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s cubic-bezier(0.5, 0.32, 0.11, 1);
  transform: scale(0.9);
  max-height: 620px;
  overflow-y: auto;
  ${({ theme }) => theme.mq.max.xs} {
    max-width: 100vw;
    padding: 27px 15px 20px;
    transform: translateX(100vw);
    height: 100%;
    transition: 0.4s cubic-bezier(0.5, 0.32, 0.11, 1);
    max-height: none;
  }
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateX(0) !important;
      will-change: transform;
    `};
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  background: ${({ theme }) => theme.colors.dark700};
  padding: 12px;
  @media (max-width: 360px) {
    right: 15px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`

const StyledButton = styled(Button)`
  margin-left: 10px;
`

const Heading = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 360px) {
    font-size: 2.2rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & > * {
    width: 100%;
    max-width: 100%;
  }
`

const DescriptionWrapper = styled.div`
  border-radius: 8px;
`

const ConfirmModal: React.FC = () => {
  const {
    visible,
    closeModal,
    confirmFn,
    isRemoval,
    confirmHeading,
    confirmDescription,
    confirmBtnText,
  } = useContext(ModalContext)

  const modalRef = useRef(null)
  useOutsideClick({
    ref: modalRef,
    handler: closeModal,
  })

  return (
    <Overlay visible={visible}>
      <Wrapper visible={visible} ref={modalRef}>
        <CloseButton onClick={closeModal}>
          <Icon excludeDarkMode src={closeIcon} alt="" full />
        </CloseButton>
        <Heading>{confirmHeading}</Heading>
        {(isRemoval || confirmDescription) && (
          <DescriptionWrapper>
            <Text size={15} themecolor="textLight100">
              {confirmDescription || (
                <>
                  This action can <b>NOT</b> be undone!
                </>
              )}
            </Text>
          </DescriptionWrapper>
        )}
        <InnerWrapper>
          <Button themecolor="textLight100" muffled onClick={closeModal}>
            Cancel
          </Button>
          <StyledButton
            remove={isRemoval}
            onClick={() => {
              confirmFn()
              closeModal()
            }}
          >
            {isRemoval ? 'Remove' : confirmBtnText}
          </StyledButton>
        </InnerWrapper>
      </Wrapper>
    </Overlay>
  )
}

export default ConfirmModal
