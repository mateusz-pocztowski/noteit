import { CSSObject } from 'styled-components'

import type {
  Colors,
  Fonts,
  Breakpoints,
  Gradients,
  NavSize,
  PanelSize,
  Shadows,
  Theme,
} from 'types/theme'

export const breakpoints: Breakpoints = {
  xs: 440,
  s: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1680,
}

const fonts: Fonts = {
  primary: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  secondary: `Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
}

const navSize: NavSize = {
  desktop: '340px',
  mobile: '80px',
}

const panelSize: PanelSize = {
  desktop: '380px',
  mobile: '80px',
}

const gradients: Gradients = {
  dark: `linear-gradient(147deg, #1e1f25 0%, #23242b 80%)`,
  light: `linear-gradient(147deg, #f5f6f8 0%, #f7faff 80%)`,
  bluePurple:
    'linear-gradient(to right top, #4b95ff, #5389fb, #5e7bf6, #6a6dee, #775de5)',
}

const shadows: Shadows = {
  light: '0 7px 30px -10px rgba(150, 170, 180, 0.5)',
  light100: '0 7px 30px -10px rgba(150, 170, 180, 0.3)',
  dark: '0 7px 30px -10px rgba(33, 33, 33, 0.5)',
  dark100: '0 7px 30px -10px rgba(33, 33, 33, 0.3)',
}

const colors: Colors = {
  white: '#ffffff',
  white100: '#eaeaea',
  white200: '#fafafa',
  white300: '#d5dbe3',
  white400: '#b8baca',
  dark: '#000000',
  dark100: '#0f111a',
  dark200: '#4f4a4a',
  dark300: '#1e1f25',
  dark400: '#272830',
  dark500: '#3c3e4d',
  dark600: '#343542',
  dark700: '#3c3e4d',
  gray: '#778397',
  gray100: '#707070',
  gray200: '#f0f3ff',
  gray300: '#f5f6f8',
  gray400: '#dddddd',
  gray500: '#f4f5f7',
  blue: '#5d7ef4',
  blue100: '#c4deff',
  blue200: '#96c2ff',
  blue300: '#89a1f4',
  green: '#21a67a',
  purple: '#9b5de5',
  yellow: '#fee440',
  red: '#f04d6b',
  red100: '#fa7d94',
}

export const lightTheme: Theme = {
  background: colors.gray300,
  element: colors.white,
  element100: colors.white200,
  element200: colors.white200,
  hover: colors.gray200,
  hover100: colors.gray500,
  hover200: colors.gray200,
  hover300: colors.blue100,
  active: colors.blue100,
  text: colors.dark,
  secondaryText: colors.dark200,
  codeBlock: colors.dark300,
  navLogo: colors.blue,
  textLight: colors.gray,
  textLight100: colors.white400,
  cardBorder: colors.blue100,
  cardShadow: shadows.light,
  cardShadow100: shadows.light100,
  backgroundGradient: gradients.light,
}

export const darkTheme: Theme = {
  background: colors.dark300,
  element: colors.dark400,
  element100: colors.dark600,
  element200: colors.dark500,
  hover: colors.dark500,
  hover100: colors.dark700,
  hover200: colors.dark700,
  hover300: colors.dark700,
  active: colors.blue,
  text: colors.white,
  secondaryText: colors.white100,
  codeBlock: colors.dark300,
  navLogo: colors.blue,
  textLight: colors.white300,
  textLight100: colors.white400,
  cardBorder: colors.dark700,
  cardShadow: shadows.dark,
  cardShadow100: shadows.dark100,
  backgroundGradient: gradients.dark,
}

export const baseTheme = {
  fonts,
  colors,
  gradients,
  shadows,
  navSize,
  panelSize,
  mq: {
    min: (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
      (acc, breakpoint) => {
        acc[breakpoint] =
          `@media (min-width: ${breakpoints[breakpoint]}px)` as unknown as CSSObject
        return acc
      },
      {} as { [Property in keyof Breakpoints]: CSSObject }
    ),
    max: (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
      (acc, breakpoint) => {
        acc[breakpoint] = `@media (max-width: ${
          breakpoints[breakpoint] - 1
        }px)` as unknown as CSSObject
        return acc
      },
      {} as { [Property in keyof Breakpoints]: CSSObject }
    ),
  },
}
