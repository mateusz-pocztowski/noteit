import styled, { css, CSSProperties, keyframes } from 'styled-components'
import { rgba } from 'polished'

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
  width?: CSSProperties['width']
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  width: 100%;
  max-width: ${({ width }) => width || 'max-content'};
  @media (hover: hover) {
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => rgba(String(theme.colors.blue), 0.5)};
    }
  }
  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.colors.white} !important;
      background: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
      &:hover,
      &:focus {
        background: ${({ theme }) => theme.colors.red100};
        border-color: ${({ theme }) => theme.colors.red100};
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background: transparent;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => rgba(String(theme.colors.blue), 0.3)};
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

export default Button
