import React from 'react'
import { DangerButtonStyles } from './DangerButton.styles'

export default function DangerButton ({ children, clickFunction, disabled }) {
  return (
    <DangerButtonStyles disabled={disabled} onClick={clickFunction}>
        {children}
    </DangerButtonStyles>
  )
}
