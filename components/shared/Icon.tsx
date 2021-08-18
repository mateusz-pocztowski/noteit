import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

type Props = {
  size?: number
  src: string | null
  alt?: string
  excludeDarkMode?: boolean
  full?: boolean
  white?: boolean
}

type IconWrapperProps = {
  iconSize: number
  full: boolean
}

type IconProps = {
  isWhite: boolean
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  height: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
  margin: 0 auto;
  & + * {
    width: 100%;
  }
`

const IconInner = styled.img<IconProps>`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: contain;

  transition: filter 200ms ease-in-out, transform 200ms ease-in-out;
  filter: ${({ isWhite }) =>
    isWhite ? 'brightness(0) invert(1)' : 'invert(0)'};
`

const Icon: React.FC<Props> = ({
  full = false,
  src,
  alt = '',
  excludeDarkMode = false,
  size = 24,
  white = false,
}) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <>
      {src && (
        <IconWrapper iconSize={size} full={full}>
          <IconInner
            isWhite={white || (isDarkTheme && !excludeDarkMode)}
            src={src}
            alt={alt}
          />
        </IconWrapper>
      )}
    </>
  )
}

export default Icon
