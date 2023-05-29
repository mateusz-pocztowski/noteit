import React, { useState, useRef, MouseEvent } from 'react'
import styled from 'styled-components'
import useOutsideClick from 'hooks/useOutsideClick'
import Icon from 'components/shared/Icon'
import dropIcon from 'assets/icons/arrow-down.svg'
import checkIcon from 'assets/icons/checkmark.svg'

type OptionType<T extends number | string> = {
  id: T
  label: string
  color?: string
}

type Props<T extends number | string> = {
  value?: OptionType<T>['id']
  placeholder?: string
  options: OptionType<T>[]
  onChange?: (id: OptionType<T>['id']) => void
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  min-width: 100px;
  z-index: 10;
  margin: 0 15px;
`

const Dropdown = styled.div<{ active: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  transition: 0.3s;
  background: ${({ active, theme }) =>
    active ? theme.colors.active : theme.colors.hover};
  cursor: pointer;
  border-radius: ${({ active }) => (active ? '4px 4px 0 0' : '4px')};
  user-select: none;
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.active};
    }
  }
`

const Text = styled.span`
  font-size: 1.4rem;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Options = styled.ul<{ active: boolean }>`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.element};
  font-size: 1.4rem;
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  border-radius: 0 0 4px 4px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.hover};
  border-top: none;
  max-height: 200px;
`

const Option = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 35px;
  cursor: pointer;
  transition: 0.2s;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hover};
  }
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.hover};
    }
  }
`

export const Checkmark = styled.span<{ checked: boolean; color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  border: 1px solid;
  border-color: ${({ checked, theme, color }) =>
    checked ? color || theme.colors.blue : color || theme.colors.blue100};
  background: ${({ checked, theme, color }) =>
    checked ? color || theme.colors.blue : 'trasparent'};
  border-radius: 4px;
  transition: 0.2s;
  &:after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 10px;
    height: 10px;
    background: url(${checkIcon}) no-repeat center;
  }
`

const StyledCheckmark = styled(Checkmark)`
  position: absolute;
  top: 11px;
  left: 10px;
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const Select = <T extends string | number>({
  placeholder = 'Select...',
  value,
  options,
  onChange,
}: Props<T>) => {
  const [visible, setOptionsVisibility] = useState(false)

  const selectRef = useRef(null)
  const optionsRef = useRef(null)

  const toggleOptionsVisibility = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOptionsVisibility(!visible)
  }

  useOutsideClick({
    ref: optionsRef,
    handler: () => setOptionsVisibility(false),
    parentRef: selectRef,
  })

  const handleChange = (
    e: MouseEvent<HTMLLIElement>,
    option: OptionType<T>
  ) => {
    e.preventDefault()
    onChange?.(option.id)
  }

  return (
    <Wrapper>
      <Dropdown
        active={visible}
        ref={selectRef}
        onMouseDown={toggleOptionsVisibility}
      >
        <Text data-testid="active-option">
          {options.find(option => option.id === value)?.label || placeholder}
        </Text>
        <Arrow>
          <Icon size={15} src={dropIcon} />
        </Arrow>
      </Dropdown>
      <Options ref={optionsRef} active={visible}>
        {options.map(item => (
          <Option
            key={item.label}
            onMouseDown={e => {
              handleChange(e, item)
              setOptionsVisibility(false)
            }}
          >
            <StyledCheckmark color={item.color} checked={item.id === value} />
            <Text>{item.label}</Text>
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}

export default Select
