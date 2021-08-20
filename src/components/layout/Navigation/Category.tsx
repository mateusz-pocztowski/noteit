import React, { useContext, useRef } from 'react'
import styled, { css } from 'styled-components'
import useOutsideClick from 'hooks/useOutsideClick'
import { OptionButton } from 'components/shared/Button'
import TooltipElement from 'components/Tooltip/TooltipElement'
import removeIcon from 'assets/icons/remove.svg'
import { NotesContext } from 'contexts/NotesContext'
import useEditState from 'hooks/useEditState'

const Wrapper = styled.div<{ editable: boolean; dragging: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 0 0 5px;
  transition: 0.3s;
  min-height: 56px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
    div > button {
      opacity: 0.7;
    }
  }
  ${({ editable, dragging }) =>
    (editable || dragging) &&
    css`
      background: ${({ theme }) => theme.colors.hover100};
      div > button {
        opacity: 0.7;
      }
    `}
`

const OptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  svg {
    width: 18px;
    height: 18px;
  }
`

export const Color = styled.button`
  display: block;
  background: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  max-width: 18px;
  min-width: 18px;
  max-height: 18px;
  min-height: 18px;
  margin: 0 5px;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
`

const Input = styled.input<{ editable: boolean }>`
  margin-left: 10px;
  background: transparent;
  width: calc(100% - 70px);
  height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 600;
  padding: 5px 10px;
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

interface Props {
  id: number
  label: string
  color: string
  primary: boolean
  closeColorPicker: () => void
  showColorPicker: () => void
  pickerRef: React.RefObject<HTMLDivElement>
  editable: boolean
  dragging: boolean
  onSave: () => void
  onCancel: () => void
}

const Category = ({
  id,
  label,
  color,
  primary,
  closeColorPicker,
  showColorPicker,
  pickerRef,
  editable,
  onSave,
  onCancel,
  dragging,
}: Props) => {
  const { updateCategory, removeCategory } = useContext(NotesContext)

  const parentRef = useRef(null)
  useOutsideClick({
    ref: pickerRef,
    handler: closeColorPicker,
    parentRef,
  })

  const {
    editState,
    handleEditOption,
    inputRef,
    handleTitleInput,
    handleSave,
    handleCancel,
  } = useEditState({
    maxLength: 18,
    title: label,
    editable,
    onCancel,
    onSave: () => {
      onSave()
      updateCategory({ id, label: editState.title.trim() })
    },
  })

  const options = [
    { label: 'Edit name', handler: handleEditOption },
    { label: 'Change color', handler: showColorPicker },
  ]

  if (!primary) {
    options.push({
      label: 'Remove',
      handler: () => removeCategory(id),
      color: 'red',
      icon: removeIcon,
    })
  }

  return (
    <Wrapper
      data-category={id}
      editable={editState.editable}
      dragging={dragging}
    >
      {options.length > 0 && (
        <OptionWrapper>
          <OptionButton
            as={TooltipElement}
            options={options}
            aria-label="show options"
          />
        </OptionWrapper>
      )}
      <Color
        onClick={showColorPicker}
        ref={parentRef}
        color={color}
        aria-label={`change color of ${label} category`}
      />
      <Input
        ref={inputRef}
        autoComplete="off"
        onChange={handleTitleInput}
        onBlur={() =>
          editState.title !== label ? handleSave() : handleCancel()
        }
        disabled={!editState.editable}
        editable={editState.editable}
        value={editState.title}
      />
    </Wrapper>
  )
}

export default Category
