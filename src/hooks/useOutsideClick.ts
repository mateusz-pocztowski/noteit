import { useEffect, MutableRefObject } from 'react'

type Props<T> = {
  handler: () => void
  condition?: boolean
  ref: MutableRefObject<T | null>
  parentRef?: MutableRefObject<T | null> | null
  preventClass?: string
}

const useOutsideClick = <T extends Element | EventTarget>({
  ref,
  handler,
  condition = true,
  parentRef,
  preventClass,
}: Props<T>) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      let shouldReturn = false
      if (preventClass) {
        const clickableDOM = document.querySelectorAll(`.${preventClass}`)
        clickableDOM.forEach(el => {
          if (!shouldReturn)
            shouldReturn = !(e.target && (e.target as Node).contains(el))
        })
      }
      if (
        shouldReturn ||
        !ref ||
        !ref.current ||
        (e.target && (ref.current as Element).contains(e.target as Node)) ||
        (parentRef &&
          parentRef.current &&
          (parentRef.current as Element).contains(e.target as Node))
      )
        return
      handler()
    }

    if (condition) document.addEventListener('mousedown', listener)

    return () => document.removeEventListener('mousedown', listener)
  }, [ref, handler, condition, parentRef, preventClass])
}

export default useOutsideClick
