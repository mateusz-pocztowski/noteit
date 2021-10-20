import { useRef, useState, useEffect } from 'react'

interface Props {
  initState: { editable: boolean; text: string }
  onSave: (text: string) => void
  onCancel: () => void
  maxLength?: number
}

const useEditState = <T extends HTMLInputElement | HTMLTextAreaElement>({
  initState,
  onSave,
  onCancel,
  maxLength,
}: Props) => {
  const inputRef = useRef<T | null>(null)
  const [isEditable, setIsEditable] = useState(initState.editable)
  const [editText, setEditText] = useState(initState.text)

  const handleEditOption = () => {
    setIsEditable(true)
  }

  const handleTextInput = (e: React.ChangeEvent<T>) => {
    if (maxLength && e.target.value.length > maxLength) return

    setEditText(e.target.value)
  }

  const handleSave = () => {
    onSave(editText)
    setIsEditable(false)
  }

  const handleCancel = () => {
    onCancel()
    setIsEditable(false)
  }

  const handleBlur = () => {
    if (editText !== initState.text) {
      handleSave()
      return
    }
    handleCancel()
  }

  const handleKeyDowns = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleSave()
    } else if (e.keyCode === 27) {
      e.preventDefault()
      handleCancel()
    }
  }

  useEffect(() => {
    setIsEditable(initState.editable)
  }, [initState.editable])

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.selectionStart = 10000
      inputRef.current.selectionEnd = 10000

      document.addEventListener('keydown', handleKeyDowns)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDowns)
    }
  }, [isEditable, editText])

  return {
    editState: { text: editText, editable: isEditable },
    editText,
    inputRef,
    handleEditOption,
    handleTextInput,
    handleSave,
    handleCancel,
    handleBlur,
  }
}

export default useEditState
