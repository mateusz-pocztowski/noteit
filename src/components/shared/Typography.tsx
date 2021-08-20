import styled, { CSSProperties } from 'styled-components'
import type { Colors, Fonts } from 'types/theme'

type TextColor = {
  themecolor: keyof Colors
}

type TextProps = {
  align?: CSSProperties['textAlign']
  size?: number
  line?: CSSProperties['lineHeight']
  weight?: CSSProperties['fontWeight']
  margin?: CSSProperties['margin']
  transform?: CSSProperties['textTransform']
  decoration?: CSSProperties['textDecoration']
  family?: keyof Fonts
}

export const Text = styled.p<TextProps>`
  display: block;
  line-height: ${({ line }) => line ?? '1.4'};
  font-family: ${({ theme, family }) => theme.fonts[family || 'primary']};
  font-weight: ${({ weight }) => weight ?? '400'};
  text-transform: ${({ transform }) => transform ?? 'initial'};
  font-size: ${({ size }) => (size ? `${size / 10}rem` : '1.6rem')};
  text-align: ${({ align }) => align ?? 'left'};
  text-decoration: ${({ decoration }) => decoration ?? 'none'};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ margin }) => margin ?? '0'};
`

export const Heading = styled(Text).attrs({
  as: 'h2',
  size: 26,
  weight: 600,
  align: 'center',
  margin: '2.5rem',
  family: 'secondary',
})`
  position: relative;
  padding-bottom: 15px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    display: block;
    width: 70px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
  }
`

export const Light = styled.span`
  font-weight: 300;
`

export const Medium = styled.span`
  font-weight: 500;
`

export const SemiBold = styled.span`
  font-weight: 600;
`

export const Bold = styled.span`
  font-weight: 700;
`

export const Color = styled.span<TextColor>`
  color: ${({ theme, themecolor }) =>
    themecolor ? theme.colors[themecolor] : theme.colors.text};
`
