/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import threeDotsIcon from 'assets/icons/three-dots.svg'
import Icon from 'components/shared/Icon'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px 0;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  &:hover,
  &.active {
    opacity: 1;
    background: ${({ theme }) => theme.colors.hover100};
  }
`

export const OptionButton = ({ ...props }) => (
  <OptionBtn {...props}>
    <Icon src={threeDotsIcon} size={22} />
  </OptionBtn>
)

interface ButtonProps {
  submit?: boolean
  remove?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>`
  display: block;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      background: ${({ theme }) => theme.colors.element};
    }
  }
  ${({ remove }) =>
    remove &&
    css`
      color: #fff !important;
      background: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
      &:hover {
        background: ${({ theme }) => theme.colors.red100};
        border-color: ${({ theme }) => theme.colors.red100};
      }
    `}
  ${({ submit, disabled }) =>
    submit &&
    css`
      position: relative;
      height: 50px;
      &:before {
        content: '';
        position: absolute;
        top: 27%;
        left: 45%;
        width: 24px;
        height: 24px;
        border: 3px solid ${({ theme }) => theme.colors.white};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-radius: 50%;
        opacity: ${disabled ? '1' : '0'};
        animation: ${spin} 1s ease infinite;
      }
    `}
`

export const IconButtonComponent = styled.button<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme, active }) =>
    active ? theme.colors.cardBorder : 'transparent'};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  width: 50px;
  height: 50px;
  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.colors.cardBorder : theme.colors.element};
  }
`

export const IconButton: React.FC<{
  icon: string
  active?: boolean
  size?: number
}> = ({ icon, active, size, ...props }) => (
  <IconButtonComponent active={active} {...props}>
    <Icon src={icon} size={size} />
  </IconButtonComponent>
)

export default Button
