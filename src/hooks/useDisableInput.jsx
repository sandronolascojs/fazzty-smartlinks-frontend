import { useState } from 'react'

export const useDisableInput = () => {
  const [disableInput, setDisableInput] = useState(true)

  const handleDisableInput = (e) => {
    e.preventDefault()
    setDisableInput(!disableInput)
  }
  return { disableInput, setDisableInput, handleDisableInput }
}
