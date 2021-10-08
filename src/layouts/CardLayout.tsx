import { useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import Scrollbar from 'components/shared/Scrollbar'

import useResizeObserver from 'hooks/useResizeObserver'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const InnerWrapper = styled.div<{ columns: number | null }>`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 20px 30px;
  min-width: 300px;
  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mq.xxxl} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ columns }) =>
    columns === 1 &&
    css`
      grid-template-columns: repeat(1, 1fr) !important;
    `}
  ${({ columns }) =>
    columns === 2 &&
    css`
      grid-template-columns: repeat(2, 1fr) !important;
    `}
  ${({ columns }) =>
    columns === 3 &&
    css`
      grid-template-columns: repeat(3, 1fr) !important;
    `}
`

const CardLayout: React.FC = ({ children }) => {
  const [columns, setColumns] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dimensions = useResizeObserver(containerRef)

  useEffect(() => {
    if (dimensions?.width) {
      const { width } = dimensions
      if (width > 1000) setColumns(3)
      else if (width > 600) setColumns(2)
      else setColumns(1)
    }
  }, [dimensions?.width])

  return (
    <Wrapper>
      <Scrollbar mainTrack styles={{ height: 'calc(100% - 170px)' }}>
        <InnerWrapper ref={containerRef} columns={columns}>
          <AnimatePresence key={columns} exitBeforeEnter>
            {children}
          </AnimatePresence>
        </InnerWrapper>
      </Scrollbar>
    </Wrapper>
  )
}

export default CardLayout
