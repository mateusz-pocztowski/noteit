import { CSSProperties } from 'styled-components'

export type Breakpoints = {
  xs: number
  s: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
}

export type Fonts = {
  primary: CSSProperties['fontFamily']
  secondary: CSSProperties['fontFamily']
}

export type NavSize = {
  desktop: CSSProperties['width']
  mobile: CSSProperties['width']
}

export type PanelSize = {
  desktop: CSSProperties['width']
  mobile: CSSProperties['width']
}

export type Colors = {
  white: CSSProperties['color']
  white100: CSSProperties['color']
  white200: CSSProperties['color']
  white300: CSSProperties['color']
  white400: CSSProperties['color']
  dark: CSSProperties['color']
  dark100: CSSProperties['color']
  dark200: CSSProperties['color']
  dark300: CSSProperties['color']
  dark400: CSSProperties['color']
  dark500: CSSProperties['color']
  dark600: CSSProperties['color']
  dark700: CSSProperties['color']
  gray: CSSProperties['color']
  gray100: CSSProperties['color']
  gray200: CSSProperties['color']
  gray300: CSSProperties['color']
  gray400: CSSProperties['color']
  gray500: CSSProperties['color']
  blue: CSSProperties['color']
  blue100: CSSProperties['color']
  blue200: CSSProperties['color']
  blue300: CSSProperties['color']
  green: CSSProperties['color']
  purple: CSSProperties['color']
  yellow: CSSProperties['color']
  red: CSSProperties['color']
  red100: CSSProperties['color']
}

export type Gradients = {
  dark: CSSProperties['background']
  light: CSSProperties['background']
  bluePurple: CSSProperties['background']
}

export type Shadows = {
  light: CSSProperties['boxShadow']
  light100: CSSProperties['boxShadow']
  dark: CSSProperties['boxShadow']
  dark100: CSSProperties['boxShadow']
}

export type Theme = {
  background: CSSProperties['color'] | keyof Colors
  element: CSSProperties['color'] | keyof Colors
  element100: CSSProperties['color'] | keyof Colors
  element200: CSSProperties['color'] | keyof Colors
  hover: CSSProperties['color'] | keyof Colors
  hover100: CSSProperties['color'] | keyof Colors
  hover200: CSSProperties['color'] | keyof Colors
  hover300: CSSProperties['color'] | keyof Colors
  active: CSSProperties['color'] | keyof Colors
  text: CSSProperties['color'] | keyof Colors
  secondaryText: CSSProperties['color'] | keyof Colors
  codeBlock: CSSProperties['color'] | keyof Colors
  navLogo: CSSProperties['color'] | keyof Colors
  textLight: CSSProperties['color'] | keyof Colors
  textLight100: CSSProperties['color'] | keyof Colors
  cardBorder: CSSProperties['color'] | keyof Colors
  cardShadow: CSSProperties['boxShadow'] | keyof Shadows
  cardShadow100: CSSProperties['boxShadow'] | keyof Shadows
  backgroundGradient: CSSProperties['background'] | keyof Gradients
}

export type ThemeColors = Colors & Theme

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: Fonts
    colors: Colors & Theme
    gradients: Gradients
    shadows: Shadows
    navSize: NavSize
    panelSize: PanelSize
    mq: {
      min: { [Property in keyof Breakpoints]: CSSObject }
      max: { [Property in keyof Breakpoints]: CSSObject }
    }
  }
}
