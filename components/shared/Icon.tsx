import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

interface Props {
  size?: number
  src: string
  alt?: string
  excludeDarkMode?: boolean
  full?: boolean
}

interface IconWrapperProps {
  iconSize: number
  full: boolean
}

interface IconProps {
  isWhite: boolean
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  height: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
`

const IconInner = styled.img<IconProps>`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: contain;

  transition: filter 200ms ease-in-out, transform 200ms ease-in-out;
  filter: ${({ isWhite }) => (isWhite ? 'invert(1)' : 'invert(0)')};
`

const Icon = ({
  full = false,
  src,
  alt = '',
  excludeDarkMode = false,
  size = 24,
}: Props) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <IconWrapper iconSize={size} full={full}>
      <IconInner
        isWhite={isDarkTheme && !excludeDarkMode}
        src={src}
        alt={alt}
      />
    </IconWrapper>
  )
}

export default Icon
