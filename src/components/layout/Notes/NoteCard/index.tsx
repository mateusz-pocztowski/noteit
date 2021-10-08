import React, { useMemo } from 'react'
import { useRouter } from 'next/router'

import format from 'dateformat'

import OptionButton from 'components/shared/Button/Option'
import Icon from 'components/shared/Icon'
import TooltipElement from 'components/shared/Tooltip/TooltipElement'

import removeIcon from 'assets/icons/remove.svg'
import checkIcon from 'assets/icons/checkmark.svg'

import useEditState from 'hooks/useEditState'

import {
  Wrapper,
  Content,
  ContentInner,
  Date,
  Flex,
  ButtonWrapper,
  ButtonInnerWrapper,
  InputWrapper,
  Title,
  Checkmark,
  Input,
} from 'components/layout/Notes/NoteCard/components'

import type { Category, Note } from 'generated/graphql'
import type { TooltipOption } from 'types/tooltip'

type NoteCategory = Pick<Category, 'id' | 'color' | 'label' | 'primary'>

type NoteType = Pick<Note, 'id' | 'updatedAt' | 'title'> & {
  category: NoteCategory
}

interface Props {
  note: NoteType
  selected: boolean
  isSelecting: boolean
  dragging: boolean
  editable: boolean
  categories: NoteCategory[]
  onSave: (note: NoteType) => void
  onCancel: (note: NoteType) => void
  updateCategory: (note: NoteType, id: NoteCategory['id']) => void
  remove: () => void
}

const NoteCard: React.FC<Props> = ({
  note,
  selected,
  isSelecting,
  dragging,
  editable,
  categories,
  onSave,
  onCancel,
  updateCategory,
  remove,
}) => {
  const router = useRouter()

  const handleCardClick = () => {
    if (!editState.editable && !isSelecting && !dragging) {
      router.push(`/notes/${note.id}`)
    }
  }

  const { inputRef, editState, handleEditOption, handleTextInput, handleBlur } =
    useEditState<HTMLTextAreaElement>({
      maxLength: 60,
      initState: { text: note.title, editable },
      onCancel: () => onCancel(note),
      onSave: title => onSave({ ...note, title }),
    })

  const tooltipOptions = useMemo(() => {
    const options: TooltipOption[] = [
      { label: 'Edit title', handler: handleEditOption },
      {
        label: 'Remove',
        handler: remove,
        color: 'red',
        icon: removeIcon,
      },
    ]

    if (categories.length > 1) {
      options.splice(1, 0, {
        label: 'Change category',
        layers: categories.map(item => ({
          label: item.label,
          handler: () => updateCategory(note, item.id),
          colorBlock: item.color,
          active: note.category.id === item.id,
        })),
      })
    }

    return options
  }, [categories])

  const shouldBreakWord = note.title.split(' ').some(word => word.length > 18)

  return (
    <Wrapper selected={selected} color={note.category.color}>
      <ButtonWrapper>
        <ButtonInnerWrapper>
          <Checkmark visible={isSelecting} checked={selected}>
            <Icon src={checkIcon} alt="checkmark" excludeDarkMode />
          </Checkmark>
          <OptionButton
            as={TooltipElement}
            options={tooltipOptions}
            aria-label="show options"
            disabled={dragging}
          />
        </ButtonInnerWrapper>
      </ButtonWrapper>
      <Content pointer={!editState.editable} onClick={handleCardClick}>
        <ContentInner>
          <InputWrapper>
            {editState.editable ? (
              <Input
                ref={inputRef}
                autoComplete="off"
                onChange={handleTextInput}
                onBlur={handleBlur}
                value={editState.text}
              />
            ) : (
              <Title breakAll={shouldBreakWord}>{note.title}</Title>
            )}
          </InputWrapper>
          <Flex>
            <Date>{format(note.updatedAt, 'longDate')}</Date>
          </Flex>
        </ContentInner>
      </Content>
    </Wrapper>
  )
}

export default NoteCard
