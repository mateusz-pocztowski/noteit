import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { MENU_ITEMS } from 'config'

import { Text } from 'components/shared/Typography'
import Icon from 'components/shared/Icon'

import searchIcon from 'assets/icons/search.svg'

const Wrapper = styled.nav`
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchWrapper = styled.div<{ focus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.colors.cardShadow100};
  border: 1px solid ${({ theme }) => theme.colors.element200};
  border-radius: 30px;
  transition: box-shadow 0.2s, border-color 0.3s, width 0.7s;
  width: 100%;
  max-width: 300px;
  height: 50px;
  padding: 0 15px 0 20px;
  cursor: text;
`

const Input = styled.input`
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 15px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight100};
    opacity: 1;
  }
`

const Topbar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => {
    if (inputRef.current) inputRef.current?.focus()
  }

  const { route } = useRouter()

  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Text family="secondary" size={16} themecolor="textLight" line="1">
            Hi, Mateusz!
          </Text>
          <Text family="secondary" size={30} weight={700}>
            {MENU_ITEMS.find(({ to }) => to && route.includes(to))?.label}
          </Text>
        </div>
        <SearchWrapper onClick={handleSearchClick} focus={isFocused}>
          <Icon src={searchIcon} alt="search" size={20} />
          <Input
            ref={inputRef}
            autoComplete="off"
            onChange={handleInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchValue}
            placeholder="Search anything"
          />
        </SearchWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Topbar
