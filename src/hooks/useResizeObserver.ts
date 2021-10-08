import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type ResizeCallback = (
  dimensions: ResizeObserverEntry['contentRect'],
  element: ResizeObserverEntry['target']
) => void

const useResizeObserver = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback?: ResizeCallback
) => {
  const [dimensions, setDimensions] = useState<
    ResizeObserverEntry['contentRect'] | null
  >(null)

  const observer = useRef<ResizeObserver | null>(null)

  const observe = () => {
    if (ref && ref.current && observer.current) {
      observer.current.observe(ref.current)
    }
  }

  useEffect(() => {
    const resizeObserverOrPolyfill = ResizeObserver
    observer.current = new resizeObserverOrPolyfill(entries => {
      for (const entry of entries) {
        if (callback) {
          callback(entry.contentRect, entry.target)
        }
        setDimensions(entry.contentRect)
      }
    })
    observe()
  }, [ref.current])

  return dimensions
}

export default useResizeObserver
