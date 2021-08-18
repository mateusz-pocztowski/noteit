import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import ScrollBar from 'simplebar-react'

interface ContainerProps {
  activeTop: boolean
  activeBottom: boolean
  scrollbarOnLeft: boolean
  mainTrack: boolean
}

interface Props {
  children?: JSX.Element | JSX.Element[]
  styles?: React.CSSProperties
  scrollbarOnLeft?: boolean
  mainTrack?: boolean
}

const ScrollContainer = styled.div<ContainerProps>`
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 5;
    transition: 0.3s;
    pointer-events: none;
  }
  &:before {
    top: 0;
    opacity: ${({ activeTop }) => (activeTop ? '1' : '0')};
    visibility: ${({ activeTop }) => (activeTop ? 'visible' : 'hidden')};
    background: ${({ theme }) => `linear-gradient(
      to top,
      ${rgba(String(theme.colors.background), 0)},
      ${rgba(String(theme.colors.background), 0.5)} 50%
    )`};
  }
  &:after {
    bottom: 0;
    opacity: ${({ activeBottom }) => (activeBottom ? '1' : '0')};
    visibility: ${({ activeBottom }) => (activeBottom ? 'visible' : 'hidden')};
    background: ${({ theme }) => `linear-gradient(
      to bottom,
      ${rgba(String(theme.colors.background), 0)},
      ${rgba(String(theme.colors.background), 0.5)} 50%
    )`};
  }
  .simplebar-track {
    z-index: 6;
  }
  ${({ scrollbarOnLeft }) =>
    scrollbarOnLeft &&
    css`
      .simplebar-track {
        left: 0;
        right: auto;
      }
    `}
  ${({ mainTrack }) =>
    mainTrack &&
    css`
      width: calc(100% + 40px);
      margin-left: -20px;
      .simplebar-scrollbar::before {
        top: 0 !important;
        bottom: 30px !important;
      }
      .simplebar-track {
        background: transparent !important;
      }
      .simplebar-track:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 30px;
        left: 5px;
        width: 1px;
        z-index: -1;
        background: ${({ theme }) => theme.colors.blue};
        opacity: 0.7;
      }
    `}
`

const Scrollbar = ({
  children,
  styles,
  mainTrack = false,
  scrollbarOnLeft = false,
}: Props) => {
  const ref = useRef<ScrollBar>(null)
  const [scrollGradient, setScrollGradient] = useState({
    top: false,
    bottom: false,
  })

  const handleScroll = (e: Event) => {
    // const { scrollTop, scrollTopMax } = e.target as HTMLDivElement
    // if (scrollTop === 0) setScrollGradient({ top: false, bottom: true })
    // else if (scrollTop === scrollTopMax)
    //   setScrollGradient({ top: true, bottom: false })
    // else setScrollGradient({ top: true, bottom: true })
  }

  useEffect(() => {
    // if (ref && ref.current) {
    //   setScrollGradient({ top: false, bottom: true });
    // }
  }, [children])

  useEffect(() => {
    const scrollElement = ref.current?.getScrollElement()
    scrollElement?.addEventListener('scroll', handleScroll)

    return () => scrollElement?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollContainer
      style={styles}
      activeTop={scrollGradient.top}
      activeBottom={scrollGradient.bottom}
      scrollbarOnLeft={scrollbarOnLeft}
      mainTrack={mainTrack}
    >
      <ScrollBar ref={ref} style={{ height: '100%' }} autoHide>
        {children}
      </ScrollBar>
    </ScrollContainer>
  )
}

export default Scrollbar
