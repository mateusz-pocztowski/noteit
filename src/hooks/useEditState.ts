import { useRef, useState, useEffect } from 'react'

interface Props {
  initState: { editable: boolean; text: string }
  onSave: (text: string) => void
  onCancel: () => void
  maxLength?: number
}

type InputType = HTMLInputElement | HTMLTextAreaElement

const useEditState = <T extends InputType>({
  initState,
  onSave,
  onCancel,
  maxLength,
}: Props) => {
  const inputRef = useRef<T | null>(null)
  const [editState, setEditState] = useState(initState)

  const handleEditOption = () => {
    setEditState({ ...editState, editable: !editState.editable })
  }

  const handleTextInput = (e: React.ChangeEvent<T>) => {
    if (maxLength && e.target.value.length > maxLength) return

    setEditState({
      ...editState,
      text: e.target.value,
    })
  }

  const handleSave = () => {
    onSave(editState.text)
    setEditState({ ...editState, editable: false })
  }

  const handleCancel = () => {
    onCancel()
    setEditState({ text: initState.text, editable: false })
  }

  const handleBlur = () => {
    if (editState.text !== initState.text) {
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
    if (editState.editable && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.selectionStart = 10000
      inputRef.current.selectionEnd = 10000

      document.addEventListener('keydown', handleKeyDowns)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDowns)
    }
  }, [editState.editable, editState.text])

  return {
    editState,
    inputRef,
    handleEditOption,
    handleTextInput,
    handleSave,
    handleCancel,
    handleBlur,
  }
}

export default useEditState
