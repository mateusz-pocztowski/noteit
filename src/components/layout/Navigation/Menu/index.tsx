import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { MENU_ITEMS } from 'config'
import MenuItem from 'components/layout/Navigation/Menu/MenuItem'

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  ${({ theme }) => theme.mq.max.xxxl} {
    padding: 0 15px;
  }
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
  ${({ theme }) => theme.mq.max.xxxl} {
    height: 50px;
    transform: ${({ index }) => `translateY(${index * 45 + index * 11}px)`};
  }
`

const Menu: React.FC = () => {
  const { route } = useRouter()

  const activeIndex = useMemo(
    () => MENU_ITEMS.findIndex(({ to }) => to && route.includes(to)),
    [route]
  )

  return (
    <List>
      <ActiveBar index={activeIndex} />
      {MENU_ITEMS.map(({ icon, label, to }, index) => (
        <MenuItem
          key={to}
          icon={icon}
          label={label}
          to={to}
          isActive={index === activeIndex}
        />
      ))}
    </List>
  )
}

export default Menu
