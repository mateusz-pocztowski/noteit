import React, { useState, useContext, useRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import Icon from 'components/shared/Icon'
import searchIcon from 'assets/icons/search.svg'

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: ${({ theme }) => theme.navSize.desktop};
  z-index: 1;
`

const InnerWrapper = styled.div`
  padding: 30px 40px 30px 60px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin-left: 30px;
  & > span {
    border-radius: 50px;
    margin-right: 15px;
    white-space: nowrap;
    font-weight: 700;
  }
`

const ProfilePicture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  min-width: 52px;
  max-width: 52px;
  min-height: 52px;
  max-height: 52px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.blue100};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  cursor: pointer;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`

const SearchWrapper = styled.div<{ focus: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.element};
  transition: box-shadow 0.2s, border-color 0.4s, width 0.7s;
  border: 1px solid
    ${({ theme, focus }) =>
      focus ? theme.colors.blue : theme.colors.cardBorder};
  width: 50%;
  min-width: 260px;
  max-width: 500px;
  height: 60px;
  padding: 0 25px;
  cursor: text;
  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`

const Input = styled.input`
  margin-left: 8px;
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textLight100};
    opacity: 1;
  }
`

const Navigation = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { toggleTheme } = useContext(ThemeContext)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => {
    if (inputRef.current) inputRef.current?.focus()
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <SearchWrapper onClick={handleSearchClick} focus={isFocused}>
          <Icon src={searchIcon} alt="search" excludeDarkMode />
          <Input
            ref={inputRef}
            autoComplete="off"
            onChange={handleInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchValue}
            placeholder="Search..."
          />
        </SearchWrapper>
        <ProfileWrapper>
          <span>Hi, John Doe!</span>
          <ProfilePicture onClick={toggleTheme}>
            <span>JD</span>
          </ProfilePicture>
        </ProfileWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Navigation
