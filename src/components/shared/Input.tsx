import React, { useRef } from 'react'
import styled from 'styled-components'
import Icon from './Icon'

type Props = {
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
  error?: boolean
  icon?: any | null
  placeholder?: string
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 16px;
  height: 22px;
  pointer-events: none;
  user-select: none;
  & + input {
    padding-left: 50px;
  }
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
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 1px solid
    ${({ theme, error }) =>
      error ? `${theme.colors.red} !important` : theme.colors.cardBorder};
  border-radius: 6px;
  transition: 0.3s;
  &::placeholder {
    font-size: 1.5rem;
  }
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
  placeholder,
  ...props
}) => {
  const inputRef = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length === maxLength) return
    onChange(e)
  }

  return (
    <Wrapper>
      {icon && (
        <IconWrapper>
          <Icon src={icon} size={22} />
        </IconWrapper>
      )}
      <MainInput
        ref={inputRef}
        id={name}
        name={name}
        value={value}
        error={error}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      <Label htmlFor={name} error={error}>
        {error || label}
      </Label>
    </Wrapper>
  )
}

export default Input
