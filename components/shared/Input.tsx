/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

interface InputProps {
  error: boolean
}

interface SuggestionProps {
  active: boolean
}

interface Props {
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  suggestions: string[]
  setValue: (value: string) => void
  maxLength?: number
  error: boolean
}

const Label = styled.label<InputProps>`
  position: absolute;
  top: -7px;
  left: 16px;
  padding: 0 6px;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.elementLight};
  color: ${({ theme, error }) =>
    error ? `${theme.colors.red} !important` : theme.colors.secondaryText};
  font-weight: 600;
  transition: 0.3s;
`

const Input = styled.input<InputProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  padding: 18px 20px;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 2px solid
    ${({ theme, error }) =>
      error ? `${theme.colors.red} !important` : theme.colors.gray400};
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

const Suggestions = styled.ul<SuggestionProps>`
  position: absolute;
  top: calc(100% - 5px);
  display: ${({ active }) => (active ? 'flex' : 'none')};
  z-index: 5;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 6px 6px;
`

const Suggestion = styled.li<SuggestionProps>`
  padding: 14px 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  background: ${({ theme, active }) =>
    active ? theme.colors.hover200 : theme.colors.elementLight};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.hover200};
  }
`

const MainInput: React.FC<Props> = ({
  name,
  label,
  value,
  onChange,
  suggestions,
  setValue,
  maxLength,
  error,
  ...props
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(null)
  const [visibleSuggestions, setVisibleSuggestions] = useState([])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const inputRef = useRef(null)

  const preventDefaults = (e: KeyboardEvent) => {
    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
      isDropdownVisible && e.preventDefault()
    }
  }

  const handleReturn = (pickedSuggestion: string) => {
    setTimeout(() => {
      setValue(pickedSuggestion)
      setActiveSuggestion(null)
      setVisibleSuggestions([])
      setIsDropdownVisible(false)
    }, 1)
  }

  const handleKeyDowns = (e: KeyboardEvent) => {
    const activeIndex = visibleSuggestions.findIndex(
      el => el === activeSuggestion
    )
    if (e.keyCode === 40 && visibleSuggestions[activeIndex + 1]) {
      setActiveSuggestion(visibleSuggestions[activeIndex + 1])
    } else if (e.keyCode === 38 && visibleSuggestions[activeIndex - 1]) {
      setActiveSuggestion(visibleSuggestions[activeIndex - 1])
    } else if (e.keyCode === 13) {
      handleReturn(activeSuggestion)
    } else if (e.keyCode === 27) {
      handleReturn(value)
    }
  }

  useEffect(() => {
    if (value && suggestions) {
      const matchingSuggestions = suggestions.filter(
        item =>
          item.toLowerCase().includes(value.toLowerCase()) &&
          item.toLowerCase() !== value.toLowerCase()
      )
      if (matchingSuggestions.length > 0) {
        setVisibleSuggestions(matchingSuggestions)
        setIsDropdownVisible(true)
      } else {
        handleReturn(value)
      }
    }
  }, [value])

  const handleFocus = () => {
    if (
      inputRef &&
      inputRef.current === document.activeElement &&
      visibleSuggestions.length > 0
    ) {
      handleReturn(value)
    } else {
      handleReturn(value)
    }
  }

  useEffect(() => {
    if (visibleSuggestions.length > 0 && !activeSuggestion) {
      setActiveSuggestion(visibleSuggestions[0])
    }

    document.addEventListener('keydown', handleKeyDowns)
    document.addEventListener('keydown', preventDefaults)
    document.addEventListener('keyup', preventDefaults)
    return () => {
      document.removeEventListener('keydown', handleKeyDowns)
      document.removeEventListener('keydown', preventDefaults)
      document.removeEventListener('keyup', preventDefaults)
    }
  }, [visibleSuggestions, value, activeSuggestion])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length === maxLength) return
    onChange(e)
  }

  return (
    <Wrapper>
      <Input
        onFocus={handleFocus}
        onBlur={handleFocus}
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
      {suggestions && (
        <Suggestions active={isDropdownVisible}>
          {visibleSuggestions.map(suggestion => (
            <Suggestion
              onMouseDown={() => handleReturn(suggestion)}
              active={suggestion === activeSuggestion}
              key={suggestion}
            >
              {suggestion}
            </Suggestion>
          ))}
        </Suggestions>
      )}
    </Wrapper>
  )
}

export default MainInput
