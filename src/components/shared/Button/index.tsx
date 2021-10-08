import styled, { css, CSSProperties, keyframes } from 'styled-components'
import { lighten, rgba } from 'polished'

import type { ThemeColors } from 'types/theme'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

type ButtonProps = {
  submit?: boolean
  secondary?: boolean
  remove?: boolean
  disabled?: boolean
  muffled?: boolean
  active?: boolean
  color?: CSSProperties['color']
  themecolor?: keyof ThemeColors
  width?: CSSProperties['width']
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background: ${({ theme, themecolor }) => theme.colors[themecolor!]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 1px solid
    ${({ theme, color, themecolor }) => color || theme.colors[themecolor!]};
  width: 100%;
  max-width: ${({ width }) => width || 'max-content'};
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme, themecolor, color }) =>
        rgba(String(color || theme.colors[themecolor!]), 0.5)};
    }
  }
  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.colors.white} !important;
      background: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
      &:hover {
        background: ${({ theme }) => theme.colors.red100};
        border-color: ${({ theme }) => theme.colors.red100};
      }
    `}
  ${({ secondary, themecolor, color }) =>
    secondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.text};
      &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) =>
          rgba(String(color || theme.colors[themecolor!]), 0.3)};
      }
    `}
  ${({ muffled, active, themecolor, color }) =>
    muffled &&
    css`
      background: ${({ theme }) =>
        active
          ? rgba(String(color || theme.colors[themecolor!]), 0.5)
          : rgba(String(color || theme.colors[themecolor!]), 0.2)};
      color: ${({ theme }) =>
        lighten(0.3, String(color || theme.colors[themecolor!]))};
      border-color: transparent;
      padding: 1rem 2.5rem;
      min-width: 80px;
      font-size: 1.5rem;
      font-weight: 600;
      &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) =>
          rgba(String(color || theme.colors[themecolor!]), 0.5)};
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
  div {
    display: flex;
    align-items: center;
  }
  svg {
    width: 24px;
    height: 26px;
    margin-right: 10px;
    fill: #fff;
    transition: 0.3s;
  }
`

Button.defaultProps = {
  themecolor: 'blue',
}

export default Button
