import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'

import Icon from 'components/shared/Icon'

import logoIcon from 'assets/icons/logotype.svg'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: 0.15s;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
`

const LogoWrapper = styled.div`
  display: flex;
  pointer-events: none;
  user-select: none;
  justify-content: center;
  align-items: center;
  animation: ${spin} 3s infinite;
  animation-timing-function: cubic-bezier(0.68, -0.6, 0.265, 1.55);
`

const LoadingScreen: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [active, setActive] = useState(visible)

  useEffect(() => {
    if (!visible) setTimeout(() => setActive(false), 500)
  }, [visible])

  return (
    <Wrapper active={active}>
      <LogoWrapper>
        <Icon size={60} excludeDarkMode src={logoIcon} alt="noteit logo" />
      </LogoWrapper>
    </Wrapper>
  )
}

export default LoadingScreen
