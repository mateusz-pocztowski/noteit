import React, { useContext, useRef, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { TooltipContext } from 'contexts/TooltipContext'

import useOutsideClick from 'hooks/useOutsideClick'

import arrowDown from 'assets/icons/arrow-down.svg'
// import { Checkmark } from 'components/Editor/blockStyles/Select';

import type { TooltipProps } from 'types/tooltip'
import type { ThemeColors } from 'types/theme'

type WrapperProps = {
  positionY: number
  positionX: number
  directionY: string
  directionX: string
  visible: boolean
}

type SecondLayerProps = {
  directionY: string
  directionX: string
}

type OptionProps = {
  color: keyof ThemeColors
}

const PositionWrapper = styled.div<WrapperProps>`
  position: fixed;
  ${({ positionY, directionY }) => `${[directionY]}: ${positionY}px`};
  ${({ positionX, directionX }) => `${[directionX]}: ${positionX}px`};
  height: ${({ directionY }) => (directionY === 'bottom' ? 'auto' : '0')};
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s opacity, visibility;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.element};
  font-size: 1.4rem;
  box-shadow: ${({ theme }) => theme.colors.cardShadow100};
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.hover};
`

const SecondLayer = styled(Wrapper)<SecondLayerProps>`
  position: absolute;
  ${({ directionX }) => `${[directionX]}: 100%`};
  ${({ directionY }) => `${[directionY]}: 0`};
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;
`

const Option = styled.li<OptionProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 20px 8px 15px;
  height: 45px;
  cursor: pointer;
  transition: 0.2s;
  white-space: nowrap;
  font-weight: ${({ color }) => (color ? 600 : 400)};
  color: ${({ theme, color }) => theme.colors[color ?? 'text']};
  svg {
    width: 22px;
    height: 22px;
    fill: ${({ theme, color }) => theme.colors[color ?? 'text']};
    margin-right: 8px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hover};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    & > ${SecondLayer} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Arrow = styled.figure`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  margin-right: -10px;
  width: 35px;
  svg {
    transform: rotate(-90deg);
    width: 14px;
    height: 14px;
    fill: ${({ theme }) => theme.colors.secondaryText};
    margin: 0;
  }
`

const ColorBlock = styled.figure`
  display: block;
  background: ${({ color }) => color};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  max-width: 14px;
  min-width: 14px;
  max-height: 14px;
  min-height: 14px;
  margin-right: 10px;
  border-radius: 50%;
`

const CheckmarkWrapper = styled.div`
  margin-left: auto;
  padding-left: 15px;
  margin-right: -10px;
`

const Tooltip = () => {
  const {
    visible,
    direction,
    position,
    options,
    closeTooltip,
    tooltipElement,
  } = useContext<TooltipProps>(TooltipContext)

  const tooltipRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick({
    ref: tooltipRef,
    handler: closeTooltip,
    parentRef: tooltipElement,
  })

  const handleOptionClick = (
    e: MouseEvent<HTMLLIElement>,
    handler: Function
  ) => {
    closeTooltip()
    handler(e)
  }

  return (
    <PositionWrapper
      ref={tooltipRef}
      directionX={direction.X}
      directionY={direction.Y}
      positionX={position.X}
      positionY={position.Y}
      visible={!!visible}
    >
      <Wrapper>
        {options.map(({ handler, layers, label, color, icon }) => (
          <Option
            color={color ?? 'text'}
            onClick={e => handler && handleOptionClick(e, handler)}
            key={label}
          >
            {icon && <ReactSVG src={icon} />}
            <span>{label}</span>
            {layers && (
              <>
                <Arrow>
                  <ReactSVG src={arrowDown} />
                </Arrow>
                <SecondLayer directionX={direction.X} directionY={direction.Y}>
                  {layers.map(option => (
                    <Option
                      key={option.label}
                      color={option.color ?? 'text'}
                      onClick={e => handleOptionClick(e, option.handler)}
                    >
                      {option.colorBlock && (
                        <ColorBlock color={option.colorBlock} />
                      )}
                      <span>{option.label}</span>
                      <CheckmarkWrapper>
                        {/* <Checkmark checked={option.active} uncheckedHidden /> */}
                      </CheckmarkWrapper>
                    </Option>
                  ))}
                </SecondLayer>
              </>
            )}
          </Option>
        ))}
      </Wrapper>
    </PositionWrapper>
  )
}

export default Tooltip
