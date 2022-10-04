import { useState } from 'react'

export const useDisableButton = () => {
  const [disabled, setDisabled] = useState(false)

  return { disabled, setDisabled }
}
