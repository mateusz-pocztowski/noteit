import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { Text } from 'components/shared/Typography'
import { MenuItem as MenuItemType } from 'types/navigation'

const IconWrapper = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.textLight};
    transition: 0.3s;
  }
`

const ListItem = styled.li<{ active?: boolean }>`
  margin: 3px 0;
  transition: 0.3s;
  min-height: 55px;
  max-height: 55px;
  border-radius: 10px;
  list-style: none;
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
  }
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.hover100} !important;
      svg {
        fill: ${({ theme }) => theme.colors.blue};
      }
    `}
  ${({ theme }) => theme.mq.max.xxxl} {
    min-height: 50px;
    max-height: 50px;
  }
`

const LinkItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  background: transparent;
  width: 100%;
  cursor: pointer;
  ${({ theme }) => theme.mq.max.xxxl} {
    justify-content: center;
    height: 50px;
    padding: 0;
    ${IconWrapper} {
      margin: 0;
    }
    ${Text} {
      position: absolute;
      top: 50%;
      left: calc(100% + 10px);
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.dark};
      padding: 3px 5px;
      white-space: nowrap;
      z-index: 10;
      transition: all 0.2s ease 0s;
      font-weight: 600;
      font-size: 1.4rem;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.8) translate(-10px, -50%);
      visibility: hidden;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translate(0, -50%);
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid ${({ theme }) => theme.colors.white};
      }
    }
    &:hover > ${Text} {
      opacity: 1;
      transform: scale(1) translate(0, -50%);
      visibility: visible;
    }
  }
`

const MenuItem: React.FC<MenuItemType> = ({
  to,
  onClick,
  icon,
  isActive,
  label,
}) => {
  const linkDOM = (
    <LinkItem as={to ? 'a' : 'button'} onClick={() => onClick && onClick()}>
      {icon && (
        <IconWrapper>
          <ReactSVG src={icon} />
        </IconWrapper>
      )}
      <Text themecolor={isActive ? 'text' : 'textLight'} family="secondary">
        {label}
      </Text>
    </LinkItem>
  )

  return (
    <ListItem active={isActive}>
      {to ? (
        <Link href={to} passHref>
          {linkDOM}
        </Link>
      ) : (
        linkDOM
      )}
    </ListItem>
  )
}

export default MenuItem
