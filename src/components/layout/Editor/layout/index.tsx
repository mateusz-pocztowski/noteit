import styled, { CSSProperties } from 'styled-components'
import blockquoteIcon from 'assets/icons/editor/quote-blue.svg'

export const Wrapper = styled.article`
  width: 100%;
  height: calc(100% - 55px);
  padding: 3rem 0;
`

export const InnerWrapper = styled.div<{ color: CSSProperties['color'] }>`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 3rem 0 0;
  margin: 0 auto;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-top: 5px solid ${({ color }) => color};
  transition: border 0.3s;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hover};
`

export const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem 2rem;
  & > div:last-child {
    margin-left: auto;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4rem 2rem;
`

export const TitleInput = styled.input`
  width: 100%;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  background: transparent;
  &::placeholder {
    color: #9697a4;
    opacity: 1;
  }
`

export const EditorWrapper = styled.div`
  padding: 3rem 4.5rem;
  width: 100%;
  cursor: text;
  height: 100%;
  font-size: 1.7rem;
  & > div {
    padding-bottom: 60px;
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  ul,
  ol {
    margin: 2rem 0 25px 2rem;
  }

  ol li {
    margin: 0 0 10px 25px;
    padding-left: 10px;
  }

  ol {
    list-style-type: decimal;
  }

  ul > li {
    position: relative;
    margin-bottom: 15px;
    padding-left: 3rem;
    text-align: justify;
    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: 3px;
      width: 11px;
      height: 11px;
      border: 2px solid ${({ theme }) => theme.colors.text};
      border-radius: 50%;
    }
  }

  blockquote {
    position: relative;
    margin: 2rem 0;
    background: ${({ theme }) => theme.colors.hover};
    padding: 3rem 3rem 3rem 80px;
    border-radius: 4px;
    border-left: 6px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.text};
    white-space: pre-wrap;
    &:before {
      content: '';
      position: absolute;
      display: block;
      top: 2rem;
      left: 2rem;
      width: 40px;
      height: 40px;
      background: url(${blockquoteIcon}) no-repeat center;
      background-size: 100%;
    }
  }

  pre pre {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.codeBlock};
    margin: 2rem 0;
    padding: 3rem;
    border-radius: 4px;
    border-left: 6px solid ${({ theme }) => theme.colors.purple};
    white-space: pre-wrap;
  }

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .alignment--left .public-DraftStyleDefault-block {
    text-align: left;
  }
  .alignment--left img {
    display: block;
    margin: 0 auto 0 0;
  }

  .alignment--center .public-DraftStyleDefault-block {
    text-align: center;
  }
  .alignment--center img {
    display: block;
    margin: 0 auto;
  }

  .alignment--right .public-DraftStyleDefault-block {
    text-align: right;
  }
  .alignment--right img {
    display: block;
    margin: 0 0 0 auto;
  }
`
