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
`

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  padding: 15px;
  background: transparent;
  width: 100%;
  cursor: pointer;
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
