import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import Icon from 'components/shared/Icon'

import useEditState from 'hooks/useEditState'

import checkIcon from 'assets/icons/checkmark.svg'
import removeIcon from 'assets/icons/remove.svg'

import type { TooltipOption } from 'types/tooltip'
import OptionButton from 'components/shared/Button/Option'
import TooltipElement from 'components/shared/Tooltip/TooltipElement'

const Options = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  transition: 0.2s;
  opacity: 0;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transition-delay: 0.2s;
    `}
`

const CheckIcon = styled.div<{ active: boolean }>`
  width: 22px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.textLight};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: 0.2s;
  margin-left: 5px;
  & > div {
    opacity: 0;
    transition: 0.2s;
  }
  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.green} !important;
      background: ${({ theme }) => theme.colors.green};
      & > div {
        opacity: 1;
      }
    `}
`

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`

const Main = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  transition: 0.3s;
  min-height: 50px;
  max-height: 50px;
  padding: 0 80px 0 42px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.element100};
  width: 100%;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
  }
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.hover100};
    `}
`

const Color = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  display: block;
  background: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
`

const Input = styled.input<{ editable: boolean }>`
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 600;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid transparent;
  pointer-events: none;
  transition: 0.3s;
  ${({ editable }) =>
    editable &&
    css`
      pointer-events: all;
      border-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.hover};
    `}
`

type Props = {
  index: number
  label: string
  color: string
  primary: boolean
  active: boolean
  editable: boolean
  onClick: () => void
  onCancel: () => void
  handleColorClick: () => void
  updateLabel: (label: string) => void
  removeCategory: () => void
}

const Category: React.FC<Props> = ({
  index,
  label,
  color,
  active,
  primary,
  editable,
  onClick,
  onCancel,
  updateLabel,
  removeCategory,
  handleColorClick,
}) => {
  const { inputRef, editState, handleEditOption, handleTextInput, handleBlur } =
    useEditState<HTMLInputElement>({
      maxLength: 25,
      initState: { text: label, editable },
      onCancel: onCancel,
      onSave: updateLabel,
    })

  const tooltipOptions = useMemo(() => {
    const options: TooltipOption[] = [
      { label: 'Edit title', handler: handleEditOption },
      {
        label: 'Change color',
        handler: handleColorClick,
      },
    ]

    if (!primary) {
      options.push({
        label: 'Remove',
        handler: removeCategory,
        color: 'red',
        icon: removeIcon,
      })
    }

    return options
  }, [])

  return (
    <Wrapper data-category={index}>
      <Color
        color={color}
        aria-label={`change color of ${label} category`}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation()
          handleColorClick()
        }}
      />
      <Main active={active}>
        <Input
          ref={inputRef}
          autoComplete="off"
          onChange={handleTextInput}
          onBlur={handleBlur}
          value={editState.text}
          disabled={!editState.editable}
          editable={editState.editable}
        />
      </Main>
      <Options visible={!editable}>
        <OptionButton
          as={TooltipElement}
          options={tooltipOptions}
          aria-label="show options"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation()
          }}
        />
        <CheckIcon onClick={onClick} active={active}>
          <Icon src={checkIcon} excludeDarkMode size={12} />
        </CheckIcon>
      </Options>
    </Wrapper>
  )
}

export default Category
