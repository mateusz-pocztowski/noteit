import styled, { css, CSSProperties } from 'styled-components'
import { breakpoints } from 'theme/mainTheme'

import type { Breakpoints } from 'types/theme'

type GridProps = {
  fullHeight?: boolean
}

type RowProps = {
  fullHeight?: boolean
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['padding']
}

export type ColSize =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

type ColProps = {
  [breakpoint in keyof Breakpoints]?: ColSize
} &
  {
    [breakpoint in keyof Breakpoints as `offset-${breakpoint}`]?: ColSize
  } & { padding?: CSSProperties['padding'] }

export const Grid = styled.div<GridProps>`
  width: 100%;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};
`

export const Col = styled.div<ColProps>`
  flex: 0 0 auto;
  padding: ${({ padding }) => padding || `0.4rem 0.5rem`};

  ${props =>
    (Object.keys(breakpoints) as Array<keyof Breakpoints>)
      .filter(breakpoint => breakpoint in props)
      .map(
        breakpoint =>
          css`
            flex-basis: ${(100 / 24) * props[breakpoint]!}%;
            max-width: ${(100 / 24) * props[breakpoint]!}%;
            display: block;
          `
      )}
`

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: visible;

  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};

  margin-left: -0.5rem;
  margin-right: -0.5rem;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};

  ${({ gap }) =>
    gap &&
    css`
      margin-left: calc(${gap} / -2);
      margin-right: calc(${gap}} / -2);

      ${Col} {
        padding: calc(${gap} / 2.5) calc(${gap} / 2);
      }
    `}
`
