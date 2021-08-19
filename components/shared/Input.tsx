import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
  error?: boolean
  icon?: any | null
}

const Wrapper = styled.div<{ icon: Props['icon'] }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  ${({ icon }) =>
    icon &&
    css`
      &:before {
        content: '';
        position: absolute;
        bottom: 15px;
        left: 16px;
        width: 22px;
        height: 22px;
        background: url(${icon}) no-repeat center;
        background-size: 100%;
        filter: invert(1);
      }
      & > input {
        padding-left: 50px;
      }
    `}
`

const Label = styled.label<{ error: boolean }>`
  margin-bottom: 6px;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme, error }) =>
    error ? `${theme.colors.red} !important` : theme.colors.secondaryText};
  font-weight: 600;
  transition: 0.3s;
`

const MainInput = styled.input<{ error: boolean }>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 1px solid
    ${({ theme, error }) =>
      error ? `${theme.colors.red} !important` : theme.colors.cardBorder};
  border-radius: 6px;
  transition: 0.3s;
  &:focus {
    background: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.blue};
    & + ${Label} {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const Input: React.FC<Props> = ({
  name,
  label,
  value,
  onChange,
  maxLength,
  error = false,
  icon,
  ...props
}) => {
  const inputRef = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length === maxLength) return
    onChange(e)
  }

  return (
    <Wrapper icon={icon}>
      <MainInput
        ref={inputRef}
        id={name}
        name={name}
        value={value}
        error={error}
        onChange={handleChange}
        {...props}
      />
      <Label htmlFor={name} error={error}>
        {error || label}
      </Label>
    </Wrapper>
  )
}

export default Input
