import React from 'react'
import { SecundaryButtonStyles } from './SecundaryButton.styles'

function SecundaryButton ({ children, clickFunction, disabled }) {
  return (
    <SecundaryButtonStyles disabled={disabled} onClick={clickFunction}>
      {children}
    </SecundaryButtonStyles>
  )
}

export default SecundaryButton
