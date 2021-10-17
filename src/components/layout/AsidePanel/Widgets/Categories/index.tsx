import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactSVG } from 'react-svg'
import { BlockPicker, ColorResult } from 'react-color'

import Widget from 'components/layout/AsidePanel/Widgets/Widget'
import Category from 'components/layout/AsidePanel/Widgets/Categories/Category'
import { Row, Col } from 'components/shared/Grid'
import Portal from 'components/shared/Portal'
import { Text } from 'components/shared/Typography'

import useOutsideClick from 'hooks/useOutsideClick'

import getRandomColor from 'utils/getRandomColor'

import plusIcon from 'assets/icons/plus.svg'

const PickerWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: -3px;
  z-index: 5;
  box-shadow: 0 0 2px 0 rgba(14, 30, 37, 0.3);
  border-radius: 6px;
  & > div {
    background: ${({ theme }) => theme.colors.element200} !important;
    input {
      box-shadow: none !important;
      border: 1px solid ${({ theme }) => theme.colors.gray400} !important;
      color: ${({ theme }) => theme.colors.text} !important;
      background: ${({ theme }) => theme.colors.element} !important;
    }
    & > div:first-child {
      left: 18px !important;
      margin-left: 0 !important;
    }
  }
`

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.textLight};
    transition: 0.3s;
  }
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  background: transparent;
  cursor: pointer;
  width: 100%;
  padding: 0 15px 0 12px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.text};
    & > ${IconWrapper} svg {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`

const MotionCol = styled(Col).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
})``

type CategoryType = {
  id: string
  label: string
  onClick: () => void
  primary: boolean
  active: boolean
  color: string
}

type Props = {
  label?: string
  categories: CategoryType[]
  tempCategoryID: string | null
  setTempCategoryID: (ID: string | null) => void
  updateCategory: (
    category: Pick<CategoryType, 'id' | 'label' | 'color'>
  ) => void
  createCategory: (category: Pick<CategoryType, 'label' | 'color'>) => void
  removeCategory: (categoryID: string) => void
}

type ChangeState = {
  id: string
  color: string
  label: string
} | null

type PickerState = {
  visible: boolean
  index: number | null
}

const Categories: React.FC<Props> = ({
  label = 'Categories',
  categories,
  tempCategoryID,
  setTempCategoryID,
  updateCategory,
  createCategory,
  removeCategory,
}) => {
  const [changeState, setChangeState] = useState<ChangeState>(null)
  const [pickerState, setPickerState] = useState<PickerState>({
    visible: false,
    index: null,
  })

  const handleChangeComplete = (color: ColorResult) => {
    if (changeState) setChangeState({ ...changeState, color: color.hex })
  }

  const handleClosePicker = () => {
    setPickerState({ ...pickerState, visible: false })
    if (changeState) {
      updateCategory(changeState)
      setChangeState(null)
    }
  }

  const handleAddButton = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!tempCategoryID) {
      const color = getRandomColor(categories.map(({ color }) => color))!
      createCategory({ color, label: '' })
    }
  }

  const pickerRef = useRef<HTMLDivElement | null>(null)
  const parentRef = useRef<EventTarget | null>(null)

  useOutsideClick({
    ref: pickerRef,
    handler: handleClosePicker,
    condition: !!changeState,
    parentRef,
  })

  return (
    <Widget label={label}>
      {pickerState.visible && changeState && (
        <Portal selector={`[data-category="${pickerState.index}"]`}>
          <PickerWrapper ref={pickerRef}>
            <BlockPicker
              color={changeState.color}
              onChangeComplete={handleChangeComplete}
            />
          </PickerWrapper>
        </Portal>
      )}
      <Row as={AnimatePresence}>
        {categories.map(
          ({ id, label, primary, active, color, onClick }, index) => (
            <MotionCol key={id} as={motion.div} layout xs={24}>
              <Category
                index={index}
                label={label}
                color={color}
                primary={primary}
                active={active}
                editable={id === tempCategoryID}
                onClick={onClick}
                onCancel={() => {
                  if (id === tempCategoryID) {
                    removeCategory(id)
                    setTempCategoryID(null)
                  }
                }}
                updateLabel={text => {
                  updateCategory({ id, color, label: text })
                  setTempCategoryID(null)
                  setChangeState(null)
                }}
                removeCategory={() => removeCategory(id)}
                handleColorClick={(evt?: React.MouseEvent) => {
                  evt?.stopPropagation()
                  if (!pickerState.visible) {
                    setPickerState({
                      index,
                      visible: true,
                    })
                    setChangeState({
                      id,
                      label: label,
                      color: color!,
                    })
                    if (evt) parentRef.current = evt.target
                  }
                }}
              />
            </MotionCol>
          )
        )}
        <MotionCol as={motion.div} layout xs={24}>
          <AddButton onMouseDown={handleAddButton}>
            <IconWrapper>
              <ReactSVG src={plusIcon} />
            </IconWrapper>
            <Text themecolor="textLight" family="secondary">
              New category
            </Text>
          </AddButton>
        </MotionCol>
      </Row>
    </Widget>
  )
}

export default Categories
