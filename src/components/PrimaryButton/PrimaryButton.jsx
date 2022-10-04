import React from 'react'
import { PrimaryButtonStyles } from './PrimaryButton.styles'

export default function PrimaryButton ({ children, clickFunction }) {
  return (
    <PrimaryButtonStyles onClick={clickFunction}>
        {children}
    </PrimaryButtonStyles>
  )
}
