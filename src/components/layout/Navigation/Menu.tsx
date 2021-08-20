import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { MENU_ITEMS } from 'config'

import { Text } from 'components/shared/Typography'

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const ActiveBar = styled.span<{ index: number }>`
  display: ${({ index }) => (index === -1 ? 'none' : 'block')};
  position: absolute;
  right: 0;
  height: 55px;
  margin: 3px 0;
  width: 4px;
  background: ${({ theme }) => theme.colors.blue};
  z-index: 1;
  border-radius: 50px;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ index }) => `translateY(${index * 50 + index * 11}px)`};
`

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
  color: ${({ theme }) => theme.colors.textLight};
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
    button {
      opacity: 0.7;
    }
  }
  ${({ active }) =>
    active &&
    css`
      transition: none;
      background: ${({ theme }) => theme.colors.hover100};
      color: ${({ theme }) => theme.colors.text};
      svg {
        fill: ${({ theme }) => theme.colors.blue};
      }
    `}
`

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  padding: 15px;
`

const Menu = () => {
  const { route } = useRouter()

  const activeIndex = useMemo(
    () => MENU_ITEMS.findIndex(({ to }) => route.includes(to)),
    [route]
  )

  return (
    <List>
      <ActiveBar index={activeIndex} />
      {MENU_ITEMS.map(({ icon, label, to }, index) => (
        <ListItem active={index === activeIndex}>
          <Link key={label} href={to} passHref>
            <LinkItem>
              <IconWrapper>
                <ReactSVG src={icon} />
              </IconWrapper>
              <Text family="secondary">{label}</Text>
            </LinkItem>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default Menu
