import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import { signOut } from 'next-auth/client'

import { Text } from 'components/shared/Typography'
import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'
import IconButton from 'components/shared/Button/Icon'
import Profile from 'components/layout/AsidePanel/Profile'
import Scrollbar from 'components/shared/Scrollbar'
import { Col, Row } from 'components/shared/Grid'

import logoutIcon from 'assets/icons/logout.svg'
import checkIcon from 'assets/icons/checkmark.svg'

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${({ theme }) => theme.panelSize.desktop};
  background: ${({ theme }) => theme.colors.element};
  font-family: ${({ theme }) => theme.fonts.secondary};
  box-shadow: -10px 0 5px -2px rgba(0, 0, 0, 0.02);
  z-index: 11;
  padding: 2rem 0;
`

const InnerWrapper = styled.div`
  padding: 0 2.5rem 2rem;
`

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`

const MockShape = styled.figure<{ height: CSSProperties['height'] }>`
  background: ${({ theme }) => theme.colors.hover};
  border-radius: 8px;
  margin: 10px 0;
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
`

const CheckIcon = styled.div<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: 0.2s;
  pointer-events: none;
  & > div {
    opacity: 0;
    transition: 0.2s;
  }
  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.green} !important;
      background: ${({ theme }) => theme.colors.green};
      & > div {
        opacity: 1;
      }
    `}
`

const Category = styled.div`
  position: relative;
  &:hover > ${CheckIcon} {
    border-color: ${({ theme }) => theme.colors.white300};
  }
`

const AsidePanel: React.FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <UserMenu>
          <Profile />
          <IconButton
            icon={logoutIcon}
            onClick={() => signOut()}
            tooltip="Logout"
          />
        </UserMenu>
      </InnerWrapper>
      <Scrollbar
        styles={{
          width: '100%',
          height: 'calc(100% - 60px)',
          padding: '5px 0',
        }}
      >
        <InnerWrapper>
          <Text size={20} weight={600} family="secondary" margin="1.5rem">
            Calendar
          </Text>
          <MockShape height="320px">
            <Text>Calendar</Text>
          </MockShape>
          <MockShape height="0px"></MockShape>
          <Text size={20} weight={600} family="secondary" margin="1.5rem">
            Categories
          </Text>
          <Row>
            <Col xs={24}>
              <Category>
                <CheckIcon active={false}>
                  <Icon src={checkIcon} excludeDarkMode size={12} />
                </CheckIcon>
                <Button muffled width="100%">
                  General
                </Button>
              </Category>
            </Col>
            <Col xs={24}>
              <Category>
                <CheckIcon active={false}>
                  <Icon src={checkIcon} excludeDarkMode size={12} />
                </CheckIcon>
                <Button muffled color="#7fc241" width="100%">
                  WSEI
                </Button>
              </Category>
            </Col>
            <Col xs={24}>
              <Category>
                <CheckIcon active={false}>
                  <Icon src={checkIcon} excludeDarkMode size={12} />
                </CheckIcon>
                <Button muffled color="#dc4363" width="100%">
                  Development
                </Button>
              </Category>
            </Col>
          </Row>
        </InnerWrapper>
      </Scrollbar>
    </Wrapper>
  )
}

export default AsidePanel
