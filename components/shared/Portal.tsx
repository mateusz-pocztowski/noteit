import ReactDOM from 'react-dom'
import { ReactChild, useEffect, useRef } from 'react'

interface Props {
  selector: string
  children: ReactChild
}

const Portal: React.FC<Props> = ({ selector, children }) => {
  const rootElemRef = useRef<HTMLElement>(
    typeof window !== `undefined` ? document.createElement('div') : null
  )

  useEffect(
    function setupElement() {
      const parentElem = document.querySelector(selector)
      if (parentElem && rootElemRef.current)
        parentElem.appendChild(rootElemRef.current)

      return function removeElement() {
        rootElemRef.current?.remove()
      }
    },
    [selector]
  )

  if (rootElemRef.current) {
    return ReactDOM.createPortal(children, rootElemRef.current)
  }

  return null
}

export default Portal
