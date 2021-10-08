import styled, { css } from 'styled-components'
import { rgba } from 'polished'

interface WrapperProps {
  selected: boolean
  color: string
}

interface ContentProps {
  pointer: boolean
}

interface TitleProps {
  breakAll: boolean
}

interface CheckmarkProps {
  visible: boolean
  checked: boolean
}

export const Wrapper = styled.article<WrapperProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 210px;
  border-radius: 20px;
  user-select: none;
  background: ${({ theme }) => theme.colors.element};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  transition: border-color 0.3s, box-shadow 0.3s;
  &:after {
    content: '';
    position: absolute;
    height: 8px;
    width: 50px;
    right: -1px;
    top: 38px;
    background: ${({ color }) => color};
    border-radius: 50px 0 0 50px;
    pointer-events: none;
    transition: 0.3s;
  }
  &:hover {
    border-color: ${({ color }) => rgba(color, 0.7)};
    box-shadow: ${({ theme }) => theme.colors.cardShadow};
  }
  ${({ selected, color }) =>
    selected &&
    css`
      border-color: ${rgba(color, 1)};
    `}
`

export const Content = styled.div<ContentProps>`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  min-height: 210px;
  height: 100%;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'inital')};
`

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 210px;
  height: 100%;
  padding: 20px;
`

export const Date = styled.time`
  display: block;
  color: ${({ theme }) => theme.colors.textLight100};
  font-weight: 500;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`

export const ButtonInnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  button {
    opacity: 1;
  }
`

export const InputWrapper = styled.div`
  margin: 5px 0 20px;
  width: calc(100% - 50px);
  height: 100%;
  line-height: normal;
`

export const Title = styled.h2<TitleProps>`
  font-weight: 600;
  font-size: 2.6rem;
  word-break: ${({ breakAll }) => (breakAll ? 'break-all' : 'normal')};
`

export const Checkmark = styled.div<CheckmarkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 4px;
  margin-right: 5px;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  & > div {
    opacity: 0;
    transition: 0.2s;
  }
  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `}
  ${({ checked }) =>
    checked &&
    css`
      background: ${({ theme }) => theme.colors.blue};
      & > div {
        opacity: 1;
      }
    `}
`

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3rem;
  background: ${({ theme }) => theme.colors.hover};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  padding: 5px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`
